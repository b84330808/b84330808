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
**153 merged pull requests to 105 projects**, sorted by stars.

| Project | Stars | Merged pull requests |
|---|---|---|
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | ★ 201k | [Fix LinearOperatorPermutation.to_dense/diag_part for int64 perm](https://github.com/tensorflow/tensorflow/pull/129844) |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | ★ 158k | [i18n: complete zh-TW translation and replace Mainland terms](https://github.com/open-webui/open-webui/pull/32482) |
| [github/spec-kit](https://github.com/github/spec-kit) | ★ 148k | [fix(workflows): decode code-page shell output in Python's UTF-8 mode](https://github.com/github/spec-kit/pull/5209) |
| [2dust/v2rayN](https://github.com/2dust/v2rayN) | ★ 120k | [fix(fmt): decode the SIP002 plain-text password only once](https://github.com/2dust/v2rayN/pull/10520)<br>[fix(fmt): default the AnyTLS and Naive port to 443 when the link omits it](https://github.com/2dust/v2rayN/pull/10504)<br>[fix(fmt): import legacy base64 SOCKS links again](https://github.com/2dust/v2rayN/pull/10505) |
| [tauri-apps/tauri](https://github.com/tauri-apps/tauri) | ★ 113k | [fix(utils): keep the drive prefix of absolute resource paths on Windows](https://github.com/tauri-apps/tauri/pull/16453)<br>[fix(utils): match file extensions case-insensitively in MimeType](https://github.com/tauri-apps/tauri/pull/16447)<br>[fix(utils): don't panic parsing a hex Color with non-ASCII characters](https://github.com/tauri-apps/tauri/pull/16444)<br>[fix(cli): percent-decode request paths in the builtin dev server (fix #12763)](https://github.com/tauri-apps/tauri/pull/16436) |
| [neovim/neovim](https://github.com/neovim/neovim) | ★ 103k | [fix(editorconfig): "[!seq]" glob matches seq instead of excluding it](https://github.com/neovim/neovim/pull/42648) |
| [mui/material-ui](https://github.com/mui/material-ui) | ★ 99k | [[system] Fix named container queries](https://github.com/mui/material-ui/pull/49649) |
| [tailwindlabs/tailwindcss](https://github.com/tailwindlabs/tailwindcss) | ★ 98k | [Ignore `&lt;!--` and `-->` between top-level rules in the CSS parser](https://github.com/tailwindlabs/tailwindcss/pull/20665)<br>[Parse a custom property at the end of the input without a trailing `;`](https://github.com/tailwindlabs/tailwindcss/pull/20653)<br>[Don't treat `!important` inside a declaration value as the important flag](https://github.com/tailwindlabs/tailwindcss/pull/20627) |
| [NationalSecurityAgency/ghidra](https://github.com/NationalSecurityAgency/ghidra) | ★ 98k | [Preserve template namespaces before operator-> and operator->*](https://github.com/NationalSecurityAgency/ghidra/pull/10054) |
| [puppeteer/puppeteer](https://github.com/puppeteer/puppeteer) | ★ 96k | [fix(bidi): respect waitForFonts in page.pdf()](https://github.com/puppeteer/puppeteer/pull/15714)<br>[fix(bidi): send the default accuracy in page.setGeolocation()](https://github.com/puppeteer/puppeteer/pull/15704)<br>[fix(cdp): include null and undefined in ConsoleMessage.text()](https://github.com/puppeteer/puppeteer/pull/15693)<br>[fix(bidi): make page.setCacheEnabled() enable the cache by default](https://github.com/puppeteer/puppeteer/pull/15698)<br>[fix(bidi): return domain cookies for the domain itself in page.cookies()](https://github.com/puppeteer/puppeteer/pull/15689) |
| [nvm-sh/nvm](https://github.com/nvm-sh/nvm) | ★ 96k | [[Fix] `nvm_get_default_packages`: ignore CRLF line endings](https://github.com/nvm-sh/nvm/pull/3979)<br>[[Fix] `nvm_die_on_prefix`: check a nonexistent prefix on Windows](https://github.com/nvm-sh/nvm/pull/3972) |
| [spring-projects/spring-boot](https://github.com/spring-projects/spring-boot) | ★ 82k | [Setting management.observations.conventions to open-telemetry enables neither semantic convention](https://github.com/spring-projects/spring-boot/pull/52619)<br>[JsonWriter writes invalid JSON when usingPairs is used with a named member](https://github.com/spring-projects/spring-boot/pull/52522)<br>[BasicJsonParser does not decode \b, \f, \n, \r, \t and \uXXXX escape sequences](https://github.com/spring-projects/spring-boot/pull/52528)<br>[Plain text thread dump reports threads in Object.wait() as parking on Java 19+](https://github.com/spring-projects/spring-boot/pull/52509)<br>[ECS structured logging writes empty service and service.node objects](https://github.com/spring-projects/spring-boot/pull/52495)<br>[JsonWriter writes NaN and infinite values as invalid JSON](https://github.com/spring-projects/spring-boot/pull/52477) |
| [remotion-dev/remotion](https://github.com/remotion-dev/remotion) | ★ 71k | [`@remotion/paths`: Fix `reversePath()` for commands after `Z`](https://github.com/remotion-dev/remotion/pull/12956)<br>[`@remotion/paths`: Fix NaN length of arcs whose radii are scaled up](https://github.com/remotion-dev/remotion/pull/12910)<br>[`@remotion/paths`: Cut the closing `Z` command in `cutPath()`](https://github.com/remotion-dev/remotion/pull/12921)<br>[`@remotion/paths`: Fix `getTangentAtLength()` direction on arcs](https://github.com/remotion-dev/remotion/pull/12868)<br>[`@remotion/paths`: Treat arcs with a zero radius as straight lines](https://github.com/remotion-dev/remotion/pull/12859)<br>[`@remotion/paths`: Fix geometry of chained `T` commands after a non-quadratic command](https://github.com/remotion-dev/remotion/pull/12821)<br>[`@remotion/paths`: Fix `getBoundingBox()` for curves starting with a flat tangent](https://github.com/remotion-dev/remotion/pull/12687)<br>[`@remotion/cli`: Accept `--props` files saved with a UTF-8 BOM](https://github.com/remotion-dev/remotion/pull/12645) |
| [socketio/socket.io](https://github.com/socketio/socket.io) | ★ 63k | [fix(sio-client): prevent the reconnection delay from dropping to zero](https://github.com/socketio/socket.io/pull/5582) |
| [rclone/rclone](https://github.com/rclone/rclone) | ★ 61k | [operations: fix cat --offset before the start of a file printing its end](https://github.com/rclone/rclone/pull/10216) |
| [rails/rails](https://github.com/rails/rails) | ★ 59k | [Fix `one?` and `many?` on grouped relations](https://github.com/rails/rails/pull/59559) |
| [laurent22/joplin](https://github.com/laurent22/joplin) | ★ 57k | [All: Translation: Update zh_TW.po](https://github.com/laurent22/joplin/pull/16853) |
| [prettier/prettier](https://github.com/prettier/prettier) | ★ 52k | [Add tests for NO-BREAK SPACE next to CJK in Markdown](https://github.com/prettier/prettier/pull/20321) |
| [google/guava](https://github.com/google/guava) | ★ 52k | [Fix `Graphs.hasCycle` missing cycles in undirected graphs](https://github.com/google/guava/pull/8796) |
| [skylot/jadx](https://github.com/skylot/jadx) | ★ 52k | [fix(core): keep NaN semantics of negated float and double comparisons](https://github.com/skylot/jadx/pull/3048)<br>[fix(core): use Locale.ROOT for case conversion of names](https://github.com/skylot/jadx/pull/3037) |

<details>
<summary>85 more projects</summary>

| Project | Stars | Merged pull requests |
|---|---|---|
| [slidevjs/slidev](https://github.com/slidevjs/slidev) | ★ 49k | [fix(parser): ignore a leading UTF-8 BOM](https://github.com/slidevjs/slidev/pull/2802) |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | ★ 48k | [fix(bash): decode Windows command output in Python's UTF-8 mode](https://github.com/zhayujie/CowAgent/pull/3897) |
| [psf/black](https://github.com/psf/black) | ★ 42k | [Fix `# fmt: skip` on the last line of a multi-line conditional expression in brackets](https://github.com/psf/black/pull/5647) |
| [vuetifyjs/vuetify](https://github.com/vuetifyjs/vuetify) | ★ 41k | [fix(VTextarea): keep native undo history with auto-grow](https://github.com/vuetifyjs/vuetify/pull/23279) |
| [gofiber/fiber](https://github.com/gofiber/fiber) | ★ 40k | [🐛 bug: reject out-of-range int and uint in generic parsers on 32-bit](https://github.com/gofiber/fiber/pull/4832) |
| [preactjs/preact](https://github.com/preactjs/preact) | ★ 39k | [fix(types): add declarative shadow DOM attributes to `&lt;template>`](https://github.com/preactjs/preact/pull/5338) |
| [NervJS/taro](https://github.com/NervJS/taro) | ★ 38k | [fix(mini-ci): 修复 Windows 下 devToolsInstallPath 配置校验及开发者工具路径未加引号的问题](https://github.com/NervJS/taro/pull/19579) |
| [markedjs/marked](https://github.com/markedjs/marked) | ★ 37k | [fix: keep a block quote open after a lazy line in a nested block quote](https://github.com/markedjs/marked/pull/4175) |
| [dgtlmoon/changedetection.io](https://github.com/dgtlmoon/changedetection.io) | ★ 36k | [Read the element locking scripts as UTF-8](https://github.com/dgtlmoon/changedetection.io/pull/4614) |
| [derailed/k9s](https://github.com/derailed/k9s) | ★ 35k | [fix(cmd): keep the -f flag when a command line is rebuilt](https://github.com/derailed/k9s/pull/4356) |
| [immutable-js/immutable-js](https://github.com/immutable-js/immutable-js) | ★ 33k | [Fix keys of a filtered indexed Seq iterated in reverse](https://github.com/immutable-js/immutable-js/pull/2309)<br>[Fix takeLast(0) on a Seq of unknown size](https://github.com/immutable-js/immutable-js/pull/2313)<br>[Fix keys of an interposed Seq iterated in reverse](https://github.com/immutable-js/immutable-js/pull/2310)<br>[Fix stack overflow when slicing a zipped Seq of unknown size from the end](https://github.com/immutable-js/immutable-js/pull/2311) |
| [mantinedev/mantine](https://github.com/mantinedev/mantine) | ★ 32k | [[@mantine/hooks] use-mask: Fix generatePattern output being rejected by browsers for masks with # token](https://github.com/mantinedev/mantine/pull/9326) |
| [chinabugotech/hutool](https://github.com/chinabugotech/hutool) | ★ 30k | [修复默认Locale为土耳其语时忽略大小写的Map及Month/Week/ColorUtil名称解析失效的问题](https://github.com/chinabugotech/hutool/pull/4348) |
| [composer/composer](https://github.com/composer/composer) | ★ 30k | [Keep nested objects as objects when JsonManipulator rewrites a node](https://github.com/composer/composer/pull/13210) |
| [locustio/locust](https://github.com/locustio/locust) | ★ 28k | [Save a locustfile downloaded from a URL byte for byte](https://github.com/locustio/locust/pull/3577) |
| [recharts/recharts](https://github.com/recharts/recharts) | ★ 28k | [fix(ErrorBar): clip error bars with their graphical item](https://github.com/recharts/recharts/pull/8054)<br>[fix(LabelList): skip labels of elements outside the clipped domain](https://github.com/recharts/recharts/pull/8051) |
| [OpenAPITools/openapi-generator](https://github.com/OpenAPITools/openapi-generator) | ★ 27k | [[core] Keep integer minimum/maximum next to $ref/allOf as integers](https://github.com/OpenAPITools/openapi-generator/pull/25441) |
| [rollup/rollup](https://github.com/rollup/rollup) | ★ 26k | [Merge synthetic named exports into static namespaces when preserving modules](https://github.com/rollup/rollup/pull/6589) |
| [homebridge/homebridge](https://github.com/homebridge/homebridge) | ★ 26k | [fix: accept a config.json that starts with a UTF-8 BOM](https://github.com/homebridge/homebridge/pull/4039) |
| [pypa/pipenv](https://github.com/pypa/pipenv) | ★ 25k | [Read the Pipfile as UTF-8 in check, scan and --support](https://github.com/pypa/pipenv/pull/6779)<br>[Read and write the Pipfile as UTF-8 everywhere](https://github.com/pypa/pipenv/pull/6756) |
| [go-delve/delve](https://github.com/go-delve/delve) | ★ 25k | [proc: wrap unary - and ^ results to the operand's integer type](https://github.com/go-delve/delve/pull/4459) |
| [actix/actix-web](https://github.com/actix/actix-web) | ★ 25k | [fix(multipart): keep bare CR before boundary text as field data](https://github.com/actix/actix-web/pull/4376) |
| [plotly/dash](https://github.com/plotly/dash) | ★ 24k | [Decode the pages router pathname before matching it](https://github.com/plotly/dash/pull/4074) |
| [react-grid-layout/react-grid-layout](https://github.com/react-grid-layout/react-grid-layout) | ★ 22k | [fix: stop edge auto-scroll when the dropping placeholder unmounts (#2312)](https://github.com/react-grid-layout/react-grid-layout/pull/2314) |
| [redis/go-redis](https://github.com/redis/go-redis) | ★ 22k | [fix(cmd): reject out-of-range Int() on 32-bit](https://github.com/redis/go-redis/pull/4256) |
| [jsdom/jsdom](https://github.com/jsdom/jsdom) | ★ 22k | [Fix template elements in XHTML: prefixed parsing and innerHTML](https://github.com/jsdom/jsdom/pull/4408) |
| [sveltejs/kit](https://github.com/sveltejs/kit) | ★ 21k | [fix(enhanced-img): compute the missing dimension at runtime for imported images](https://github.com/sveltejs/kit/pull/17499) |
| [grpc-ecosystem/grpc-gateway](https://github.com/grpc-ecosystem/grpc-gateway) | ★ 20k | [openapi: look up service comments by declaration index](https://github.com/grpc-ecosystem/grpc-gateway/pull/7600) |
| [ImageMagick/ImageMagick](https://github.com/ImageMagick/ImageMagick) | ★ 18k | [Parse SVG path arc flags as single digits](https://github.com/ImageMagick/ImageMagick/pull/9096) |
| [video-dev/hls.js](https://github.com/video-dev/hls.js) | ★ 17k | [Load the start fragment again when its request is aborted before anything is buffered](https://github.com/video-dev/hls.js/pull/8115) |
| [yhirose/cpp-httplib](https://github.com/yhirose/cpp-httplib) | ★ 17k | [Cap a send() or wolfSSL_read() length at INT_MAX](https://github.com/yhirose/cpp-httplib/pull/2655) |
| [hubotio/hubot](https://github.com/hubotio/hubot) | ★ 17k | [fix(create): install the default scripts on Windows](https://github.com/hubotio/hubot/pull/1840) |
| [ast-grep/ast-grep](https://github.com/ast-grep/ast-grep) | ★ 16k | [fix(sarif): set the log version to 2.1.0](https://github.com/ast-grep/ast-grep/pull/3035) |
| [scalar/scalar](https://github.com/scalar/scalar) | ★ 16k | [fix(openapi-parser): strip a leading UTF-8 BOM before JSON.parse in normalize](https://github.com/scalar/scalar/pull/10792) |
| [tracel-ai/burn](https://github.com/tracel-ai/burn) | ★ 16k | [fix(tensor): return fewer chunks instead of panicking in `chunk`](https://github.com/tracel-ai/burn/pull/6263) |
| [Flow-Launcher/Flow.Launcher](https://github.com/Flow-Launcher/Flow.Launcher) | ★ 16k | [Fix: match .zip extension case-insensitively in IsZipFilePath](https://github.com/Flow-Launcher/Flow.Launcher/pull/4734) |
| [jasmine/jasmine](https://github.com/jasmine/jasmine) | ★ 16k | [Match bigints with jasmine.any(BigInt) and toBeInstanceOf(BigInt)](https://github.com/jasmine/jasmine/pull/2122) |
| [Y2Z/monolith](https://github.com/Y2Z/monolith) | ★ 16k | [fix: treat Windows drive-letter paths as local files](https://github.com/Y2Z/monolith/pull/541) |
| [mockito/mockito](https://github.com/mockito/mockito) | ★ 15k | [Use Locale.ROOT for default mock names and matcher descriptions](https://github.com/mockito/mockito/pull/3897) |
| [jupyterlab/jupyterlab](https://github.com/jupyterlab/jupyterlab) | ★ 15k | [Do not add default metadata to cells when opening the Property Inspector](https://github.com/jupyterlab/jupyterlab/pull/20160) |
| [apexcharts/apexcharts.js](https://github.com/apexcharts/apexcharts.js) | ★ 15k | [fix(dumbbell): don't draw end dots for a null row](https://github.com/apexcharts/apexcharts.js/pull/5357) |
| [josdejong/mathjs](https://github.com/josdejong/mathjs) | ★ 15k | [fix(types): return a collection from statistics functions with a dimension](https://github.com/josdejong/mathjs/pull/3735)<br>[fix: reducing a one dimensional matrix along a dimension threw an error](https://github.com/josdejong/mathjs/pull/3734) |
| [electron-userland/electron-builder](https://github.com/electron-userland/electron-builder) | ★ 15k | [fix: read file:/// custom toolset URLs as file URLs](https://github.com/electron-userland/electron-builder/pull/10504) |
| [jackc/pgx](https://github.com/jackc/pgx) | ★ 14k | [pgconn: read the default service file from %APPDATA%\postgresql on Windows](https://github.com/jackc/pgx/pull/2697) |
| [plasma-umass/scalene](https://github.com/plasma-umass/scalene) | ★ 14k | [Save %%scalene cells as UTF-8](https://github.com/plasma-umass/scalene/pull/1106) |
| [fuma-nama/fumadocs](https://github.com/fuma-nama/fumadocs) | ★ 14k | [fix(openapi, asyncapi): resolve index card links from the output directory](https://github.com/fuma-nama/fumadocs/pull/3752) |
| [dbcli/pgcli](https://github.com/dbcli/pgcli) | ★ 13k | [Read alias_map_file as UTF-8 instead of the locale encoding](https://github.com/dbcli/pgcli/pull/1656) |
| [plantuml/plantuml](https://github.com/plantuml/plantuml) | ★ 13k | [🐛 Use locale-independent case conversion for stdlib files, SVG attributes and keywords](https://github.com/plantuml/plantuml/pull/2980) |
| [gogf/gf](https://github.com/gogf/gf) | ★ 13k | [fix(os/gproc): skip unix-only pid mapping folders on windows](https://github.com/gogf/gf/pull/4956) |
| [orhun/git-cliff](https://github.com/orhun/git-cliff) | ★ 12k | [fix(args): scope --workdir to its directory on Windows](https://github.com/orhun/git-cliff/pull/1657) |
| [spencermountain/compromise](https://github.com/spencermountain/compromise) | ★ 12k | [read 'twenty second' as 22nd, not twenty seconds](https://github.com/spencermountain/compromise/pull/1261)<br>[split a list of text ordinals](https://github.com/spencermountain/compromise/pull/1259)<br>[don't read 'the twenty fifth of december' as a fraction](https://github.com/spencermountain/compromise/pull/1257)<br>[keep the thousands before a dropped-hundred like 'two fifty'](https://github.com/spencermountain/compromise/pull/1256)<br>[write 'hundred sextillion' at 1e23, not 1e20](https://github.com/spencermountain/compromise/pull/1255)<br>[fix numbers with hundreds inside a thousand or million group](https://github.com/spencermountain/compromise/pull/1254) |
| [GitoxideLabs/gitoxide](https://github.com/GitoxideLabs/gitoxide) | ★ 12k | [Create `oid` from bytes in one `unsafe` block in `gix-hash`](https://github.com/GitoxideLabs/gitoxide/pull/3157)<br>[Decode into a `String` and forbid `unsafe` in `gix-filter`](https://github.com/GitoxideLabs/gitoxide/pull/3154)<br>[Remove the last `unsafe` block from `gix-revision` and forbid `unsafe` there](https://github.com/GitoxideLabs/gitoxide/pull/3150) |
| [Milkdown/milkdown](https://github.com/Milkdown/milkdown) | ★ 12k | [fix(preset-commonmark): keep remarkLineBreak linear on long runs of spaces](https://github.com/Milkdown/milkdown/pull/2504) |
| [esphome/esphome](https://github.com/esphome/esphome) | ★ 12k | [[core] Reject a 0 K color temperature instead of crashing](https://github.com/esphome/esphome/pull/21756) |
| [dbcli/mycli](https://github.com/dbcli/mycli) | ★ 12k | [Read and write default myclirc as UTF-8](https://github.com/dbcli/mycli/pull/2389) |
| [foliojs/pdfkit](https://github.com/foliojs/pdfkit) | ★ 11k | [Fix a CommonJS bundle of the Node build throwing on load on Windows](https://github.com/foliojs/pdfkit/pull/1828) |
| [BYVoid/OpenCC](https://github.com/BYVoid/OpenCC) | ★ 10k | [s2twp：不再將「進程」一律轉為「程序」；tw2sp 保留「行程」（#1313）](https://github.com/BYVoid/OpenCC/pull/1515)<br>[s2twp：不再將「程序」一律轉為「程式」（#1313）](https://github.com/BYVoid/OpenCC/pull/1514)<br>[tw2sp：不再將「執行」一律轉為「運行」（#1313）](https://github.com/BYVoid/OpenCC/pull/1512)<br>[s2twp：不再將「社區」一律轉為「社群」（#1313）](https://github.com/BYVoid/OpenCC/pull/1511)<br>[s2twp：不再將「支持」一律轉為「支援」（#1313）](https://github.com/BYVoid/OpenCC/pull/1510)<br>[s2twp：不再將「高級」一律轉為「高階」（#1313）](https://github.com/BYVoid/OpenCC/pull/1509) |
| [johnkerl/miller](https://github.com/johnkerl/miller) | ★ 10k | [strmatchx: report starts and ends as UTF-8 character positions](https://github.com/johnkerl/miller/pull/2287) |
| [jsx-eslint/eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) | ★ 9.3k | [[Fix] `static-property-placement`: don't report a typed `context` field](https://github.com/jsx-eslint/eslint-plugin-react/pull/4060) |
| [pdm-project/pdm](https://github.com/pdm-project/pdm) | ★ 8.7k | [fix(python): remove the downloaded archive after installing](https://github.com/pdm-project/pdm/pull/3988) |
| [bombshell-dev/clack](https://github.com/bombshell-dev/clack) | ★ 8.1k | [fix(prompts): handle trailing backslash in path prompt directory mode](https://github.com/bombshell-dev/clack/pull/627) |
| [FullHuman/purgecss](https://github.com/FullHuman/purgecss) | ★ 8.1k | [fix(#1326): load the config file from a file URL](https://github.com/FullHuman/purgecss/pull/1505) |
| [unovue/reka-ui](https://github.com/unovue/reka-ui) | ★ 6.9k | [fix(Tabs): don't activate tabs on right or middle click](https://github.com/unovue/reka-ui/pull/3027) |
| [mui/mui-x](https://github.com/mui/mui-x) | ★ 5.9k | [[pickers] Only scroll the Digital Clock when its active item changes](https://github.com/mui/mui-x/pull/23942) |
| [rhaiscript/rhai](https://github.com/rhaiscript/rhai) | ★ 5.8k | [Do not hang when padding a string with an empty string](https://github.com/rhaiscript/rhai/pull/1195) |
| [mruby/mruby](https://github.com/mruby/mruby) | ★ 5.6k | [mruby-socket: range-check an Integer before narrowing it to a C int](https://github.com/mruby/mruby/pull/7739)<br>[mruby-io, mruby-socket: convert an argument before reading its Integer](https://github.com/mruby/mruby/pull/7735) |
| [hickory-dns/hickory-dns](https://github.com/hickory-dns/hickory-dns) | ★ 5.5k | [net: reject oversized messages instead of truncating the TCP length prefix](https://github.com/hickory-dns/hickory-dns/pull/4144)<br>[net: reject oversized messages instead of truncating the TCP length prefix (backport)](https://github.com/hickory-dns/hickory-dns/pull/4145) |
| [wanasit/chrono](https://github.com/wanasit/chrono) | ★ 5.3k | [fix(zh): parse three-character Chinese numeral days in zh.hant dates](https://github.com/wanasit/chrono/pull/682) |
| [chakra-ui/zag](https://github.com/chakra-ui/zag) | ★ 5.2k | [fix(tree-view, listbox): let lowercase a reach typeahead](https://github.com/chakra-ui/zag/pull/3509) |
| [style-dictionary/style-dictionary](https://github.com/style-dictionary/style-dictionary) | ★ 4.9k | [fix: clean copy_assets output with fs.rm() so it works on Node.js 25+](https://github.com/style-dictionary/style-dictionary/pull/1796) |
| [poem-web/poem](https://github.com/poem-web/poem) | ★ 4.5k | [fix(openapi): use the error type's bad_request_handler in Result responses](https://github.com/poem-web/poem/pull/1230) |
| [adaltas/node-csv](https://github.com/adaltas/node-csv) | ★ 4.3k | [fix(csv-parse): only destroy on end when the stream has destroy (fix #409)](https://github.com/adaltas/node-csv/pull/538) |
| [spencermountain/spacetime](https://github.com/spencermountain/spacetime) | ★ 4.1k | [fix(walk): start the day at 1am when dst skips midnight](https://github.com/spencermountain/spacetime/pull/482)<br>[fix(startOf): start a southern summer in the previous december](https://github.com/spencermountain/spacetime/pull/481)<br>[fix(diff): count months from the start date, not the last step](https://github.com/spencermountain/spacetime/pull/480)<br>[fix(add): walk to the target year when adding years](https://github.com/spencermountain/spacetime/pull/479) |
| [dongrixinyu/JioNLP](https://github.com/dongrixinyu/JioNLP) | ★ 3.9k | [Carry 下午 over to the end of spans that start at 两点](https://github.com/dongrixinyu/JioNLP/pull/319) |
| [honkit/honkit](https://github.com/honkit/honkit) | ★ 3.5k | [fix: use structure.readme as index.html when README.md also exists](https://github.com/honkit/honkit/pull/535) |
| [VOICEVOX/voicevox](https://github.com/VOICEVOX/voicevox) | ★ 3.3k | [ci: actionlintを導入し、指摘されたワークフローの問題を修正する](https://github.com/VOICEVOX/voicevox/pull/3156) |
| [kevin1024/vcrpy](https://github.com/kevin1024/vcrpy) | ★ 3k | [Match urlencoded parameter names in filter_post_data_parameters](https://github.com/kevin1024/vcrpy/pull/1066) |
| [tracel-ai/cubecl](https://github.com/tracel-ai/cubecl) | ★ 2.5k | [fix: handle negative exponents in integer powi](https://github.com/tracel-ai/cubecl/pull/2043) |
| [est31/cargo-udeps](https://github.com/est31/cargo-udeps) | ★ 2.1k | [Don't warn about duplicates when a dependency is listed per target](https://github.com/est31/cargo-udeps/pull/343) |
| [piccolo-orm/piccolo](https://github.com/piccolo-orm/piccolo) | ★ 1.9k | [Return Decimal values from Array(Numeric()) columns in SQLite](https://github.com/piccolo-orm/piccolo/pull/1445) |
| [wenet-e2e/WeTextProcessing](https://github.com/wenet-e2e/WeTextProcessing) | ★ 835 | [fix: read 110, 120, etc. as phone numbers only when the context says so](https://github.com/wenet-e2e/WeTextProcessing/pull/402) |
| [un-ts/eslint-plugin-import-x](https://github.com/un-ts/eslint-plugin-import-x) | ★ 781 | [fix(no-cycle): detect cycles through side-effect imports](https://github.com/un-ts/eslint-plugin-import-x/pull/538) |
| [run-llama/llama-agents](https://github.com/run-llama/llama-agents) | ★ 464 | [Don't report idle while sent events are undelivered](https://github.com/run-llama/llama-agents/pull/817) |
| [Migushthe2nd/MsEdgeTTS](https://github.com/Migushthe2nd/MsEdgeTTS) | ★ 347 | [docs: clarify toFile() output files and where prosody options go](https://github.com/Migushthe2nd/MsEdgeTTS/pull/40) |
| [textlint-ja/textlint-rule-ja-no-successive-word](https://github.com/textlint-ja/textlint-rule-ja-no-successive-word) | ★ 7 | [feat: 記号や空白の連続を許可するオプションを追加](https://github.com/textlint-ja/textlint-rule-ja-no-successive-word/pull/36) |

</details>

<sub>Updated daily by a GitHub Action. [All my merged pull requests →](https://github.com/pulls?q=is%3Apr+author%3Ab84330808+is%3Amerged+-user%3Ab84330808)</sub>
<!-- contributions:end -->

[weilunli.me](https://weilunli.me/) · [LinkedIn](https://www.linkedin.com/in/wei-lun-li-945608a5/)
