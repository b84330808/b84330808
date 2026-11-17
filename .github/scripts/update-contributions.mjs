// Rewrites the "Open source contributions" section of README.md
// from my merged pull requests in repositories I don't own, plus closed ones
// whose change landed as my own commit: imported directly (e.g. by Copybara),
// or picked into a maintainer's own pull request that was then merged.
import { readFile, writeFile } from 'node:fs/promises'

const USER = 'b84330808'
const README = new URL('../../README.md', import.meta.url)
// The full table lives in its own file: with every project inline the
// profile page grew past what GitHub renders in time and sometimes failed.
const FULL_LIST = new URL('../../CONTRIBUTIONS.md', import.meta.url)
const START = '<!-- contributions:start -->'
const END = '<!-- contributions:end -->'
// Pull requests to leave out, as owner/repo#number
const EXCLUDE = new Set(['morr/jquery.appear#60'])
// Projects shown in the README; all of them are in CONTRIBUTIONS.md
const TOP = 20

const QUERY = `query ($q: String!, $after: String) {
  search(query: $q, type: ISSUE, first: 50, after: $after) {
    pageInfo { hasNextPage endCursor }
    nodes {
      ... on PullRequest {
        number title url mergedAt closedAt
        repository { nameWithOwner url stargazerCount isPrivate }
        timelineItems(itemTypes: [CLOSED_EVENT], last: 1) {
          nodes { ... on ClosedEvent { closer { ... on Commit { author { user { login } } } ... on PullRequest { number merged repository { nameWithOwner } } } } }
        }
      }
    }
  }
}`

// The search sometimes fails with a 502 from GitHub; try again a few times.
async function graphql(query, variables) {
  for (let attempt = 1; ; attempt++) {
    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    })
    if (res.status >= 502 && res.status <= 504 && attempt < 4) {
      await new Promise((resolve) => setTimeout(resolve, attempt * 5000))
      continue
    }
    if (!res.ok) throw new Error(`GitHub API ${res.status}: ${await res.text()}`)
    const { data, errors } = await res.json()
    if (errors) throw new Error(JSON.stringify(errors))
    return data
  }
}

async function searchPullRequests(q) {
  const pullRequests = []
  let after = null
  do {
    const data = await graphql(QUERY, { q, after })
    pullRequests.push(...data.search.nodes)
    const { hasNextPage, endCursor } = data.search.pageInfo
    after = hasNextPage ? endCursor : null
  } while (after)

  return pullRequests
}

const COMMITS_QUERY = `query ($owner: String!, $name: String!, $number: Int!) {
  repository(owner: $owner, name: $name) {
    pullRequest(number: $number) {
      commits(first: 100) {
        nodes { commit { author { user { login } } } }
      }
    }
  }
}`

const myCommitCache = new Map()

async function pullRequestHasMyCommit(owner, name, number) {
  const key = `${owner}/${name}#${number}`
  if (!myCommitCache.has(key)) {
    const data = await graphql(COMMITS_QUERY, { owner, name, number })
    const commits = data.repository?.pullRequest?.commits?.nodes ?? []
    myCommitCache.set(
      key,
      commits.some((node) => node.commit.author?.user?.login === USER),
    )
  }
  return myCommitCache.get(key)
}

async function fetchMergedPullRequests() {
  const merged = await searchPullRequests(
    `author:${USER} type:pr is:merged -user:${USER}`,
  )
  // A pull request closed by one of my commits landed outside GitHub's merge
  // button, so treat it as merged at the time it was closed. The closing
  // commit can also reach the branch inside a maintainer's own pull request
  // (my commit picked into theirs, theirs merged, mine closed by it).
  const closed = await searchPullRequests(
    `author:${USER} type:pr is:closed is:unmerged -user:${USER}`,
  )
  const landed = []
  for (const pr of closed) {
    const closer = pr.timelineItems.nodes[0]?.closer
    if (closer?.author?.user?.login === USER) {
      landed.push({ ...pr, mergedAt: pr.closedAt })
    } else if (closer?.merged && closer.repository) {
      const [owner, name] = closer.repository.nameWithOwner.split('/')
      if (await pullRequestHasMyCommit(owner, name, closer.number)) {
        landed.push({ ...pr, mergedAt: pr.closedAt })
      }
    }
  }

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

  const sorted = [...repos.values()].sort(
    (a, b) => b.stargazerCount - a.stargazerCount,
  )
  // GitHub looks up every link to a pull request to show its hovercard,
  // which made the full list time out. Links to a pull request's /files
  // tab get no hovercard, so CONTRIBUTIONS.md uses those.
  const toRows = (suffix) =>
    sorted.map((repo) => {
      const links = repo.pullRequests
        .sort((a, b) => b.mergedAt.localeCompare(a.mergedAt))
        .map((pr) => `[${escapeCell(pr.title)}](${pr.url}${suffix})`)
        .join('<br>')
      return `| [${repo.nameWithOwner}](${repo.url}) | ★ ${formatStars(repo.stargazerCount)} | ${links} |`
    })
  const rows = toRows('')

  const header = ['| Project | Stars | Merged pull requests |', '|---|---|---|']
  const summary = `**${pullRequests.length} merged pull requests to ${repos.size} projects**, sorted by stars.`
  const more = rows.length - TOP
  const allPullRequests = `https://github.com/pulls?q=is%3Apr+author%3A${USER}+is%3Amerged+-user%3A${USER}`

  const section = [
    START,
    summary,
    '',
    ...header,
    ...rows.slice(0, TOP),
    '',
    ...(more > 0 ? [`[${more} more projects in CONTRIBUTIONS.md →](CONTRIBUTIONS.md)`, ''] : []),
    `<sub>Updated daily by a GitHub Action. [All my merged pull requests →](${allPullRequests})</sub>`,
    END,
  ].join('\n')

  const fullList = [
    '# Open source contributions',
    '',
    summary,
    '',
    ...header,
    ...toRows('/files'),
    '',
    `<sub>Updated daily by a GitHub Action. [All my merged pull requests →](${allPullRequests})</sub>`,
    '',
  ].join('\n')

  return { section, fullList }
}

const readme = await readFile(README, 'utf8')
const start = readme.indexOf(START)
const end = readme.indexOf(END)
if (start === -1 || end === -1) throw new Error('README.md has no contributions markers')

const { section, fullList } = render(await fetchMergedPullRequests())
const updated = readme.slice(0, start) + section + readme.slice(end + END.length)
if (updated !== readme) {
  await writeFile(README, updated)
  console.log('README.md updated')
} else {
  console.log('README.md is up to date')
}
await writeFile(FULL_LIST, fullList)
