# 跨界战力维基

这是一个跨作品战力维基，按 `reference.md` 的 8 个主维度录入不同作品战斗角色的常态/峰值面板。主体页面仍是静态 HTML/CSS/JS；AI 对战演绎通过 Vercel Function 的 `/api/battle` 流式调用 LLM。当前按作品维护核心战斗角色、核心反派和最终 Boss 级条目，长尾角色等待明确需求或社区 PR。站点不包含图片，不需要前端构建步骤。

## 社区 PR（核心入口）

显眼入口：

- GitHub Repo：<https://github.com/scruple2026/meta-grade>
- Fork 前先看：[`CONTRIBUTING.md`](CONTRIBUTING.md)
- PR 模板文件：`.github/PULL_REQUEST_TEMPLATE.md`
- 在线查看 PR 模板：<https://github.com/scruple2026/meta-grade/blob/main/.github/PULL_REQUEST_TEMPLATE.md>
- 提交 PR：<https://github.com/scruple2026/meta-grade/compare>

本仓库的核心维护方式是社区 PR：新增角色、修订面板、补章节/集数/设定书证据，都优先通过 PR 以单角色文件为单位提交。`.github/PULL_REQUEST_TEMPLATE.md` 保留在 GitHub 自动识别的位置；fork 或开始编辑前请先看根目录 `CONTRIBUTING.md`。

1. PR 正文最前面先放完整角色文件提案，第一段代码块应能直接落成 `data/characters/<work-slug>/<character-id>.js`。
2. 一个 PR 优先只改一个角色文件；例如炭治郎只改 `data/characters/demon-slayer/tanjiro-kamado.js`，虎杖只改 `data/characters/jujutsu-kaisen/yuji-itadori.js`。
3. 说明文字、证据解释和 checklist 放在角色文件代码块后面，不要放在最前面挤掉可复制提案。
4. 维护者可以把结构化提案保存为 `proposal.js`，用 `node scripts/apply-character-proposal.js proposal.js` 自动落盘角色文件并同步 `index.html` 与 `data/characters.js`。
5. 高风险量级应补到 `evidenceLinks`，并写清 `claim`、`lang`、`authority`、`medium`、`ratingEvidence`；缺证据时保留待审说明，不把称号、危险等级或剧情评价直接换算成主量级。

## 本地查看

直接用浏览器打开 `index.html` 可以查看静态维基。公共数据注册器写在 `data/core.js`，作品来源元数据写在 `data/works/*.js`，每个角色独立写在 `data/characters/<work-slug>/<character-id>.js`，前端交互写在 `assets/app.js`。站内 `#/reference` 会渲染量级体系文档，`#/audit` 会集中展示待补具体证据的高风险条目，`#/battle` 会选择两个角色并通过 `/api/battle` 以 SSE 流式生成 AI 对战演绎，`#/work/<work-slug>` 会展示作品口径、角色清单和待审条目。角色稳定链接使用 `#/character/<work-slug>/<character-id>/<timeline-key>`，旧的 `#/character/<character-id>` 仍保留兼容。Markdown 原文仍保留在 `reference.md`。

本地要测试 AI 对战接口时，用 Vercel 本地开发环境，并配置环境变量：

```bash
cp .env.example .env.local
# 然后把 .env.local 里的 OPENAI_API_KEY 改成真实 key
vercel dev
```

不要把真实 key 写进前端 JS、README、PR 或提交记录；本仓库只提交 `.env.example` 这种占位样例。

## 部署到 Vercel（推荐）

1. 在 Vercel 导入该仓库。
2. Framework Preset 选择 Other；`vercel.json` 已设置 `"framework": null`。
3. Build Command 留空。本站前端没有构建步骤。
4. 在 Vercel Project Settings → Environment Variables 填下面这些变量。
5. 部署后访问 `/#/battle`，前端会调用同源 `/api/battle`。

| 变量名 | 必填 | 填什么 | 说明 |
| --- | --- | --- | --- |
| `OPENAI_API_KEY` | 是 | 你的 LLM API key | 只放在 Vercel 环境变量或本地 `.env.local`，不要提交到仓库。 |
| `OPENAI_MODEL` | 否 | 例如 `gpt-4o-mini` | 不填时默认用 `gpt-4o-mini`。 |
| `OPENAI_BASE_URL` | 否 | 例如 `https://api.openai.com/v1` | 只填 base URL，不要带 `/responses`；`api/battle.js` 会自动拼成 `${OPENAI_BASE_URL}/responses`。如果换兼容服务商，该服务商必须支持本项目使用的 Responses API / JSON Schema 输出格式。 |
| `BATTLE_RATE_LIMIT_WINDOW_MS` | 否 | 例如 `60000` | `/api/battle` 的实例内 best-effort 限流窗口，默认 60000 毫秒。 |
| `BATTLE_RATE_LIMIT_MAX` | 否 | 例如 `12` | 每个 IP 在限流窗口内允许的生成次数，默认 12；设为 `0` 可关闭这个实例内限流。 |

生产环境的 API endpoint 不需要在前端填写：页面固定请求同源 `/api/battle`，真正的上游 endpoint 由 Vercel 环境变量 `OPENAI_BASE_URL` 控制。

## 部署到 GitHub Pages（静态镜像）

1. 将仓库推送到 GitHub。
2. 在仓库 Settings → Pages 中选择 Deploy from a branch。
3. Source 选择目标分支和 `/root` 目录。
4. `.nojekyll` 已放在根目录，GitHub Pages 会按普通静态文件发布。
5. GitHub Pages 只能发布静态页面，`/#/battle` 页面可浏览但不能调用 `/api/battle` 生成结果。

## 数据维护

- 主维度列表来自 `reference.md`：攻击能级、防御能级、移动速度、反应速度、生命体量、生命回复速度、能量总量、能量回复速度。
- `work` 字段表示跨界维基中的作品分区，例如《咒术回战》《鬼灭之刃》。
- `appearances` 表示角色在该作品内的资料范围或登场媒体，例如正篇、0 卷、怀玉·玉折等。
- `timelineStatus` 表示当前角色面板采用的剧情阶段/状态，例如“结局 / 新宿决战后”“无限城最终决战前人类状态”。阶段变化明显、外力/削弱/终盘成长会影响面板时应写清楚；没什么阶段差异的角色可以留空。
- `timelinePanels` 用于同一角色跨篇章成长、一次性峰值、外源形态或最终形态差异。变化不明显的角色不要硬填面板；有时间线面板的角色会在详情页左侧作为时间线列表展示，点击某个阶段只显示该阶段面板。每个面板必须有稳定 `key`，`defaultTimelineKey` 必须指向默认显示的面板。
- `notes.penetration` 是兼容字段名，网页显示为“攻击性质”；用于记录攻击范围、穿透、伤害类型、命中条件、媒介限制和持续/低耦合等性质，不再只限于“穿透”。
- `生命体量` 表示破防后的失能、死亡或核心毁灭阈值，不等同于防御能级，也不等同于生命回复速度。
- `能量总量` 包含超自然能量池、机体能源、弹药/外源能源，也包含体力、肌耐力和肉体持久度；没有魔力/咒力/查克拉不等于 `不适用`。
- `confidence`、`evidenceType`、`sourceQuality`、`evidenceLinks` 用于详情页和校验脚本提示证据状态。`evidenceLinks` 可使用 `{ type, scope, label, url, citation, lang, authority, medium, ratingEvidence, claim }`，其中 `type` 建议为 `chapter`、`episode`、`setting`、`official`、`wiki` 或 `source`；`lang` 建议为 `ja`、`zh`、`en` 或 `other`；`authority` 建议为 `primary`、`official`、`licensed`、`wiki`、`cross-reference`、`analysis` 或 `source`；`medium` 建议为 `manga`、`anime`、`databook`、`official-site`、`publisher`、`wiki`、`cross-wiki`、`print` 或 `other`。`claim` 必须说明该来源支撑哪个量级、形态或设定；没有公开 URL 的原作卷话/设定书可填 `citation`。只有确实用于支撑量级、形态或高风险设定时才设置 `ratingEvidence: true`。高风险量级缺少原作语言、原作/官方/授权层证据时，应保留待审警告，不要伪装成稳定结论。
- `revisionNotes` 用于记录定级变更理由，例如降档、改成争议峰值、拆出外源状态等。
- `data/works/*.js` 只放作品来源、作品名、作品原作语言 `originalLanguage`、日文/官方入口 `canonicalLinks`、作品收录口径 `scaleNotes`、作品量级复核入口 `scaleEvidenceLinks` 和默认 `work` 包装器，不放角色条目。
- `data/core.js` 只放 8 维 schema 和 `character`/`dims`/`notes`/`registerWorkSource`/`registerCharacters` 等公共函数；不要把具体角色或作品来源塞回公共文件。
- `data/characters.js` 只保留旧入口兼容、作品文件清单和角色文件清单，不再作为大杂烩角色表维护。
- `data/reference.js` 是 `reference.md` 的静态网页渲染数据。修改 `reference.md` 后运行 `node scripts/sync-reference.js`，否则站内 `#/reference` 会显示旧文档，校验也会报错。
- 新增角色时新建一个 `data/characters/<work-slug>/<character-id>.js`，并在 `index.html` 和 `data/characters.js` 的角色清单里加入该文件路径。
- 也可以用 `node scripts/create-character.js <work-slug> <character-id> --name 中文名` 生成角色模板并同步 `index.html` 与 `data/characters.js`。
- 维护者可以把社区提交的结构化提案保存为 `proposal.js`，用 `node scripts/apply-character-proposal.js proposal.js` 自动落盘角色文件并同步 `index.html` 与 `data/characters.js`。
- 新增作品时优先用 `node scripts/create-work.js <work-slug> --name 作品名` 生成 `data/works/<work-slug>.js`、`data/characters/<work-slug>/` 并同步清单；手动新增时也必须在作品文件内用 `registerWorkSource` 登记来源。
- 《咒术回战》当前只收录主角团和最终 Boss 两面宿傩；里香、魔虚罗等召唤/外置战力只写入对应角色的战力解释项，不再单独成条目。
- 《鬼灭之刃》当前只收录主角团和最终 Boss 鬼舞辻无惨；柱和十二鬼月暂不进入本版结果。
- 每个作品都按 `reference.md` 的通用规则和自身证据定级，不维护隐藏的作品专属禁用上限。若证据支持更高主档，应逐条给出破坏、承受、速度或能量依据。
- 领域、必中、规则、灵魂、空间、黑洞、世界斩等特殊杀伤只写入峰值标签或战力解释项；除非原作给出可换算表现，否则不折算为更高主面板等级。
- 搜索结果页只展示 8 个主维度简介。
- 8 维量级筛选可以选择“常态或峰值”“仅常态”或“仅峰值”；默认“常态或峰值”沿用任一命中的检索行为。
- AI 对战页只基于用户选中的两名角色、时间线面板、8 维常态/峰值数据和战力解释项生成演绎；结果是临时 AI 输出，不作为正式定级依据。对战会同时考虑常态、峰值、能量总量和能量回复速度，不提供“仅常态/仅峰值”裁定开关。接口使用 SSE 流式返回，避免长对战等完整 JSON 后才响应。
- AI 对战输出风格可选择结论速览、裁定分析、分阶段战报、机制拆解、证据审计；这些只改变表达侧重点，不改变基础战力口径。
- AI 对战链接会记录当前左右角色、时间线和输出风格，方便复制分享；生成中可以从前端取消请求，同一角色同一时间线不会发起无意义调用。页面会读取 `/api/battle` 的 GET 状态展示当前模型、Key 配置状态、Chat fallback 能力和实例内限流配置，并在流式生成时显示 Responses / fallback 路径、最终耗时和 token 用量。生成结果可复制成纯文本，包含角色、时间线、裁定、关键因素、阶段过程、限制和分享链接。
- 角色页展示战力解释项和来源；来源区块会区分 `量级依据` 与 `资料入口`，并在页面说明二者用途差异。
- 所属和维度筛选选项会随当前作品筛选收敛；不再维护前台“分类”字段，`grade` 字段只作为“身份 / 能力”描述展示，不进入筛选项，避免头衔、能力名和角色职能膨胀成一人一个选项。每个维度筛选使用“下限 / 上限”左闭右闭区间，匹配时只看 `｜` 前的主档名。
- 普通人、纯剧情人物、辅助监督、低优先级泳者和普通一级术师不进入本版结果。
- 战斗资料不足以跨界定级的维度使用【无资料】；原作存在可能性但无法判断时使用【未知】；确实没有展示时使用【未表现】。不要用模板自动抬级。

## 校验

修改数据后至少运行：

```bash
node scripts/validate-data.js
node --check scripts/validate-data.js
node --check scripts/create-character.js
node --check scripts/create-work.js
node --check scripts/apply-character-proposal.js
node --check scripts/sync-reference.js
node --check scripts/check-links.js
node --check scripts/check-source-content.js
node --check assets/app.js
node --check api/battle.js
node --check data/core.js
node --check data/characters.js
```

`scripts/validate-data.js` 会检查 JS 语法、`index.html` 与 `data/characters.js` 清单同步、`reference.md` 与 `data/reference.js` 同步、作品 slug、角色 workSlug、作品原作语言、时间线 key/defaultTimelineKey、8 维字段完整性、战力解释项/来源缺漏、档名是否符合 `reference.md`，并对国家级/大陆级/行星级/光速等高风险档位缺少具体证据链接的条目给出分级警告。脚本还会校验 `lang`、`authority`、`medium`、`ratingEvidence` 和 `claim/citation`，并防止把 Fandom、萌娘百科、Wikipedia、JoJo Wiki 等非官方域名标成 `primary`、`official` 或 `licensed`。脚本还会提示可能的模板膨胀风险，例如单作品多数角色被批量抬到城市级以上、非核心角色使用高风险主档、能量总量远高于单击攻击但没有区分说明；如果城市级以上密度已通过作品层面的 `scaleEvidenceLinks` 复核，则不再重复提示该低风险 warning。允许档名会优先从 `reference.md` 的专属标尺中解析，脚本内保留旧档名作为兼容兜底。当前警告不代表构建失败，而是社区后续补章节、集数、设定书来源的待审清单；需要把警告当失败时可加 `--strict-warnings`。

链接健康检查可运行：

```bash
node scripts/check-links.js --dry-run
node scripts/check-links.js --timeout 8000 --concurrency 6
```

`check-links.js` 会检查作品来源、作品量级来源、角色来源和证据链接。默认把 `401/403/405/429` 视为“可达但受限”，只有真正失败的链接会让命令失败；需要把受限状态也当失败时加 `--strict`。

当直连检查出现 Fandom、VS Battles Wiki、萌娘百科等软失败时，可以再跑内容可读性检查：

```bash
node scripts/check-source-content.js --concurrency 3 --timeout 12000
```

`check-source-content.js` 会优先通过公开 MediaWiki API 或正常 GET 读取页面正文。`READABLE` 只表示脚本能读到文本，不表示文本已经支持某个评级；把来源标成 `ratingEvidence: true` 前，仍必须人工核对具体 claim。
