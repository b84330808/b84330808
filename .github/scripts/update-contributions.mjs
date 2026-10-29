// Rewrites the "Open source contributions" section of README.md
// from my merged pull requests in repositories I don't own, plus closed ones
// whose change landed as my own commit (e.g. imported by Copybara).
import { readFile, writeFile } from 'node:fs/promises'

const USER = 'b84330808'
const README = new URL('../../README.md', import.meta.url)
const START = '<!-- contributions:start -->'
const END = '<!-- contributions:end -->'
// Pull requests to leave out, as owner/repo#number
const EXCLUDE = new Set(['morr/jquery.appear#60'])
// Projects shown in the table; the rest go into a collapsed list below it
const TOP = 20

const QUERY = `query ($q: String!, $after: String) {
  search(query: $q, type: ISSUE, first: 50, after: $after) {
    pageInfo { hasNextPage endCursor }
    nodes {
      ... on PullRequest {
        number title url mergedAt closedAt
        repository { nameWithOwner url stargazerCount isPrivate }
        timelineItems(itemTypes: [CLOSED_EVENT], last: 1) {
          nodes { ... on ClosedEvent { closer { ... on Commit { author { user { login } } } } } }
        }
      }
    }
  }
}`

async function searchPullRequests(q) {
  const pullRequests = []
  let after = null
  do {
    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: QUERY,
        variables: { q, after },
      }),
    })
    if (!res.ok) throw new Error(`GitHub API ${res.status}: ${await res.text()}`)
    const { data, errors } = await res.json()
    if (errors) throw new Error(JSON.stringify(errors))
    pullRequests.push(...data.search.nodes)
    const { hasNextPage, endCursor } = data.search.pageInfo
    after = hasNextPage ? endCursor : null
  } while (after)

  return pullRequests
}

async function fetchMergedPullRequests() {
  const merged = await searchPullRequests(
    `author:${USER} type:pr is:merged -user:${USER}`,
  )
  // A pull request closed by one of my commits landed outside GitHub's merge
  // button, so treat it as merged at the time it was closed.
  const landed = (
    await searchPullRequests(
      `author:${USER} type:pr is:closed is:unmerged -user:${USER}`,
    )
  )
    .filter(
      (pr) =>
        pr.timelineItems.nodes[0]?.closer?.author?.user?.login === USER,
    )
    .map((pr) => ({ ...pr, mergedAt: pr.closedAt }))

  return [...merged, ...landed].filter(
    (pr) =>
      !pr.repository.isPrivate &&
      !EXCLUDE.has(`${pr.repository.nameWithOwner}#${pr.number}`),
  )
}

function formatStars(count) {
  if (count < 1000) return String(count)
  const k = count / 1000
  return `${k < 10 ? k.toFixed(1).replace(/\.0$/, '') : Math.round(k)}k`
}

function escapeCell(text) {
  return text.replace(/\|/g, '\\|').replace(/</g, '&lt;')
}

function render(pullRequests) {
  const repos = new Map()
  for (const pr of pullRequests) {
    const name = pr.repository.nameWithOwner
    if (!repos.has(name)) repos.set(name, { ...pr.repository, pullRequests: [] })
    repos.get(name).pullRequests.push(pr)
  }

  const rows = [...repos.values()]
    .sort((a, b) => b.stargazerCount - a.stargazerCount)
    .map((repo) => {
      const links = repo.pullRequests
        .sort((a, b) => b.mergedAt.localeCompare(a.mergedAt))
        .map((pr) => `[${escapeCell(pr.title)}](${pr.url})`)
        .join('<br>')
      return `| [${repo.nameWithOwner}](${repo.url}) | ★ ${formatStars(repo.stargazerCount)} | ${links} |`
    })

  const header = ['| Project | Stars | Merged pull requests |', '|---|---|---|']
  const more = rows.slice(TOP)

  return [
    START,
    ...header,
    ...rows.slice(0, TOP),
    '',
    ...(more.length
      ? [
          '<details>',
          `<summary>${more.length} more projects</summary>`,
          '',
          ...header,
          ...more,
          '',
          '</details>',
          '',
        ]
      : []),
    `<sub>Updated daily by a GitHub Action. [All my merged pull requests →](https://github.com/pulls?q=is%3Apr+author%3A${USER}+is%3Amerged+-user%3A${USER})</sub>`,
    END,
  ].join('\n')
}

const readme = await readFile(README, 'utf8')
const start = readme.indexOf(START)
const end = readme.indexOf(END)
if (start === -1 || end === -1) throw new Error('README.md has no contributions markers')

const section = render(await fetchMergedPullRequests())
const updated = readme.slice(0, start) + section + readme.slice(end + END.length)
if (updated !== readme) {
  await writeFile(README, updated)
  console.log('README.md updated')
} else {
  console.log('README.md is up to date')
}
