# Wei-Lun Li

Software engineer in Tokyo working on backend performance and reliability.
In my own time I build developer tools: MCP servers, LLM-agent workflows
and desktop apps.

- 🎬 **Weilun Studio**: a one-person, AI-native media studio. Claude Code runs
  the production pipeline behind two channels. → [weilunli.me/studio](https://weilunli.me/studio/)

  | Channel | Platform | Views | Followers |
  |---|---|---|---|
  | [奇聞蒐藏室](https://www.youtube.com/@qiwenroom) | YouTube | 18.4M+ | 13.5K subscribers |
  | [豆柴こつぶ](https://www.instagram.com/mameshibakotsubu/) | Instagram | 42M+ | 25.2K followers |

  <sub>Figures as of November 2026.</sub>
- 🌏 Chinese (native) · Japanese (JLPT N1) · English

## Projects

| Project | What it does |
|---|---|
| [WhisperPress](https://github.com/b84330808/whisperpress) | Offline push-to-talk voice typing for Windows, powered by whisper.cpp |
| [before-you-pr](https://github.com/b84330808/before-you-pr) | Check a repo's AI policy, CLA/DCO, claims and existing PRs before you write code. CLI and MCP server ([npm](https://www.npmjs.com/package/before-you-pr)) |
| [ai-policy-map](https://github.com/b84330808/ai-policy-map) | How popular GitHub repos treat AI-assisted contributions, with every verdict linked to its source ([site](https://b84330808.github.io/ai-policy-map/)) |
| [agent-trap-scan](https://github.com/b84330808/agent-trap-scan) | Flag text in a repo aimed at AI coding agents (download-and-run commands, hook bypasses, honeypots) before your agent reads it |
| [redgreen-check](https://github.com/b84330808/redgreen-check) | Prove a change's tests catch the bug: green with the fix, red without it. CLI and GitHub Action |
| [works-elsewhere](https://github.com/b84330808/works-elsewhere) | Re-run your tests under a legacy locale, Turkish, DST gaps, Unicode paths and CRLF |
| [i18n-bugbench](https://github.com/b84330808/i18n-bugbench) | Real i18n and portability bug fixes (Windows paths, code pages, CRLF, CJK) as tasks for evaluating coding agents |
| [mcp-server-jma](https://github.com/b84330808/mcp-server-jma) | MCP server for Japan Meteorological Agency data: forecasts, warnings, earthquakes, tsunami, volcanoes |
| [mcp-server-for-bambu](https://github.com/b84330808/mcp-server-for-bambu) | MCP server for Bambu Lab 3D printers over LAN/MQTT ([npm](https://www.npmjs.com/package/mcp-server-for-bambu)) |
| [mcp-server-japan-atlas](https://github.com/b84330808/mcp-server-japan-atlas) | MCP server for Japanese address normalization & GSI elevation lookup ([npm](https://www.npmjs.com/package/mcp-server-japan-atlas)) |
| [iizuka-ikeru-navi](https://github.com/b84330808/iizuka-ikeru-navi) | Transit navigator for Iizuka City built on open data (e-ZUKA Smart App Contest 2026) |
| [RubyTextView](https://github.com/b84330808/RubyTextView) | Android TextView with ruby text (furigana / pinyin) |

## Open source contributions

<!-- contributions:start -->
**372 merged pull requests to 237 projects**, sorted by stars.

| Project | Stars | Merged pull requests |
|---|---|---|
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | ★ 202k | [Fix LinearOperatorInversion.solve with an operator and adjoint=True](https://github.com/tensorflow/tensorflow/pull/129837)<br>[Fix lu_solve, lu_matrix_inverse and lu_reconstruct for batched int64 perm](https://github.com/tensorflow/tensorflow/pull/129963)<br>[Keep is_self_adjoint hint in LinearOperatorScaledIdentity.inverse()](https://github.com/tensorflow/tensorflow/pull/129948)<br>[Fix LinearOperatorPermutation.to_dense/diag_part for int64 perm](https://github.com/tensorflow/tensorflow/pull/129844) |
| [ultraworkers/claw-code](https://github.com/ultraworkers/claw-code) | ★ 195k | [fix(runtime): match CRLF line endings in edit_file](https://github.com/ultraworkers/claw-code/pull/3387)<br>[fix(runtime): prune heavy directories in grep_search](https://github.com/ultraworkers/claw-code/pull/3388) |
| [ohmyzsh/ohmyzsh](https://github.com/ohmyzsh/ohmyzsh) | ★ 191k | [fix(timer): round duration before splitting off minutes](https://github.com/ohmyzsh/ohmyzsh/pull/14246) |
| [twbs/bootstrap](https://github.com/twbs/bootstrap) | ★ 175k | [Carousel: make the left arrow go to the next slide in RTL](https://github.com/twbs/bootstrap/pull/43264) |
| [langgenius/dify](https://github.com/langgenius/dify) | ★ 162k | [fix(i18n/zh-Hant): use Taiwan terminology and fix Simplified strings](https://github.com/langgenius/dify/pull/44175) |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | ★ 160k | [i18n: complete zh-TW translation and replace Mainland terms](https://github.com/open-webui/open-webui/pull/32482) |
| [github/spec-kit](https://github.com/github/spec-kit) | ★ 153k | [fix(workflows): decode code-page shell output in Python's UTF-8 mode](https://github.com/github/spec-kit/pull/5209) |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | ★ 146k | [perf(video): fill the opaque composite background one row at a time](https://github.com/harry0703/MoneyPrinterTurbo/pull/1841)<br>[perf(video): draw each composite layer only where it covers the frame](https://github.com/harry0703/MoneyPrinterTurbo/pull/1820)<br>[perf(video): composite on an opaque canvas so frames carry no mask](https://github.com/harry0703/MoneyPrinterTurbo/pull/1779) |
| [2dust/v2rayN](https://github.com/2dust/v2rayN) | ★ 122k | [fix(ui): show ALPN values that are not in the preset list](https://github.com/2dust/v2rayN/pull/10604)<br>[perf: look up ProfileEx items by IndexId instead of scanning the list](https://github.com/2dust/v2rayN/pull/10588)<br>[fix(fmt): keep a ':' in a Naive password through export and import](https://github.com/2dust/v2rayN/pull/10526)<br>[fix(fmt): decode the SIP002 plain-text password only once](https://github.com/2dust/v2rayN/pull/10520)<br>[fix(fmt): default the AnyTLS and Naive port to 443 when the link omits it](https://github.com/2dust/v2rayN/pull/10504)<br>[fix(fmt): import legacy base64 SOCKS links again](https://github.com/2dust/v2rayN/pull/10505) |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | ★ 120k | [fix(gallery): treat an unpublished voice gallery as unavailable, not rejected](https://github.com/debpalash/VoiceStudio/pull/4260)<br>[fix(omnivoice-gguf): find the bundled runtime from a staged app environment](https://github.com/debpalash/VoiceStudio/pull/4053) |
| [tauri-apps/tauri](https://github.com/tauri-apps/tauri) | ★ 113k | [fix(utils): keep the drive prefix of absolute resource paths on Windows](https://github.com/tauri-apps/tauri/pull/16453)<br>[fix(utils): match file extensions case-insensitively in MimeType](https://github.com/tauri-apps/tauri/pull/16447)<br>[fix(utils): don't panic parsing a hex Color with non-ASCII characters](https://github.com/tauri-apps/tauri/pull/16444)<br>[fix(cli): percent-decode request paths in the builtin dev server (fix #12763)](https://github.com/tauri-apps/tauri/pull/16436) |
| [neovim/neovim](https://github.com/neovim/neovim) | ★ 104k | [perf(treesitter): don't touch finished trees on every redraw](https://github.com/neovim/neovim/pull/42735)<br>[fix(editorconfig): "?" glob matches "/"](https://github.com/neovim/neovim/pull/42671)<br>[fix(editorconfig): invalid glob breaks other sections](https://github.com/neovim/neovim/pull/42693)<br>[fix(editorconfig): "[!seq]" glob matches seq instead of excluding it](https://github.com/neovim/neovim/pull/42648) |
| [NationalSecurityAgency/ghidra](https://github.com/NationalSecurityAgency/ghidra) | ★ 102k | [Keep Rust generic arguments together when they contain a fn pointer return type](https://github.com/NationalSecurityAgency/ghidra/pull/10240)<br>[Preserve template namespaces before operator-> and operator->*](https://github.com/NationalSecurityAgency/ghidra/pull/10054) |
| [ant-design/ant-design](https://github.com/ant-design/ant-design) | ★ 100k | [fix(Table): apply defaultSortOrder on grouping columns](https://github.com/ant-design/ant-design/pull/59611) |
| [mui/material-ui](https://github.com/mui/material-ui) | ★ 99k | [[system] Keep the unit of container query sizes](https://github.com/mui/material-ui/pull/49669)<br>[[system] Keep the alpha of `color()` colors in the color manipulators](https://github.com/mui/material-ui/pull/49637)<br>[[slider] Keep the decimals of a non-integer min when snapping to the step](https://github.com/mui/material-ui/pull/49635)<br>[[system] Fix named container queries](https://github.com/mui/material-ui/pull/49649) |
| [tailwindlabs/tailwindcss](https://github.com/tailwindlabs/tailwindcss) | ★ 99k | [Ignore `&lt;!--` and `-->` between top-level rules in the CSS parser](https://github.com/tailwindlabs/tailwindcss/pull/20665)<br>[Parse a custom property at the end of the input without a trailing `;`](https://github.com/tailwindlabs/tailwindcss/pull/20653)<br>[Don't treat `!important` inside a declaration value as the important flag](https://github.com/tailwindlabs/tailwindcss/pull/20627) |
| [nvm-sh/nvm](https://github.com/nvm-sh/nvm) | ★ 96k | [[Perf] `nvm_ls`: only look for a system node when the pattern can list it](https://github.com/nvm-sh/nvm/pull/3993)<br>[[Fix] `nvm_get_default_packages`: ignore CRLF line endings](https://github.com/nvm-sh/nvm/pull/3979)<br>[[Fix] `nvm_die_on_prefix`: check a nonexistent prefix on Windows](https://github.com/nvm-sh/nvm/pull/3972) |
| [puppeteer/puppeteer](https://github.com/puppeteer/puppeteer) | ★ 96k | [fix(bidi): respect waitForFonts in page.pdf()](https://github.com/puppeteer/puppeteer/pull/15714)<br>[fix(bidi): send the default accuracy in page.setGeolocation()](https://github.com/puppeteer/puppeteer/pull/15704)<br>[fix(cdp): include null and undefined in ConsoleMessage.text()](https://github.com/puppeteer/puppeteer/pull/15693)<br>[fix(bidi): make page.setCacheEnabled() enable the cache by default](https://github.com/puppeteer/puppeteer/pull/15698)<br>[fix(bidi): return domain cookies for the domain itself in page.cookies()](https://github.com/puppeteer/puppeteer/pull/15689) |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | ★ 91k | [fix(monitors): search the article description, which arrives as snippet](https://github.com/koala73/worldmonitor/pull/11106)<br>[fix(monitors): match keywords written in non-Latin scripts](https://github.com/koala73/worldmonitor/pull/10574) |
| [cheaper-inference/OmniRoute](https://github.com/cheaper-inference/OmniRoute) | ★ 91k | [fix(sse): compute the usage guard's request numbers once per stream](https://github.com/cheaper-inference/OmniRoute/pull/20108) |

[217 more projects in CONTRIBUTIONS.md →](CONTRIBUTIONS.md)

<sub>Updated daily by a GitHub Action. [All my merged pull requests →](https://github.com/pulls?q=is%3Apr+author%3Ab84330808+is%3Amerged+-user%3Ab84330808)</sub>
<!-- contributions:end -->

[weilunli.me](https://weilunli.me/) · [LinkedIn](https://www.linkedin.com/in/wei-lun-li-945608a5/)
