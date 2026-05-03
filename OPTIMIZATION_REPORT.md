# 优化结果报告

日期：2026-05-04

## 结论

本轮已完成一次覆盖前端、Vercel API、数据注册器、来源链接、校验脚本、维护文档和本地 skill 的项目审核，并把能安全自动落地的优化全部改掉。当前数据校验、JS 语法、链接健康、来源内容读取和 battle API fallback mock 均已通过。

当前没有发现新的清单不同步、JS 语法错误、`reference.md` 同步错误、validator warning、硬坏链、来源内容不可读、battle 输出风格旧文档残留、`moegirl.icu` 数据链接残留、或可自动修复的审计误报。

剩余待改进项只剩人工证据工作：少数《死神》高风险条目已有量级证据，但缺少日文原作语言层 evidenceLinks。此类工作必须逐条核对原作卷话、设定书或授权资料后再写入，不能靠脚本、Fandom、VSBattle 或 `READABLE` 状态自动补成 `ratingEvidence: true`。

## 本轮落地优化

### 1. Battle API 兼容服务商 fallback

文件：`api/battle.js`

已完成：

- `/api/battle` 仍优先调用 `${OPENAI_BASE_URL}/responses`。
- 当兼容服务商拒绝 Responses API，返回 `400 / 404 / 405 / 415 / 422 / 501` 或明确 endpoint/schema 不支持时，自动回退到 `${OPENAI_BASE_URL}/chat/completions`。
- 非流式路径也补齐 Chat Completions fallback，避免只有 SSE 路径能回退。
- Chat fallback 若因 `response_format` 不兼容返回 `400 / 415 / 422`，会自动重试不带 `response_format` 的 JSON 提示模式。
- 流式 Chat fallback 不再把 `reasoning_content` 拼进最终 JSON 文本，只收集 `delta.content`。这可以避免 DeepSeek / NVIDIA 兼容层把推理内容混入 JSON，导致 `Unterminated string` 或 JSON parse failure。

覆盖风险：

- 不吞掉 `401 / 429` 等认证、额度和限流错误。
- fallback 只解决 provider endpoint/schema 兼容问题，不伪装成模型内容成功。

### 2. Battle 场景随机补全

文件：`assets/app.js`

已完成：

- `随机场景` 现在同时随机：
  - 环境类型
  - 开局距离
  - 情报条件
- 之前只随机环境与距离，情报条件会长期固定在“陌生遭遇”，与 battle policy 中“环境至少包含环境类型、开局距离和情报条件”的口径不完全一致。
- 按钮文字从 `随机场地` 改为 `随机场景`，避免暗示只改地形。

### 3. Vercel 环境变量示例补齐

文件：

- `.env.example`
- `README.md`

已完成：

- `.env.example` 补齐：
  - `BATTLE_RATE_LIMIT_WINDOW_MS=60000`
  - `BATTLE_RATE_LIMIT_MAX=12`
- README 中 `OPENAI_BASE_URL` 的说明改为：
  - base URL 不要带 `/responses` 或 `/chat/completions`
  - 服务端优先请求 `/responses`
  - 兼容服务商拒绝 Responses 时回退 `/chat/completions`
- 这与当前 API 实现保持一致，避免用户以为兼容服务商必须完整支持 Responses API 才能尝试 battle。

### 4. 萌娘百科链接域名修正

文件：

- `data/works/jujutsu-kaisen.js`
- `data/works/demon-slayer.js`
- `data/works/chainsaw-man.js`
- `data/works/fullmetal-alchemist.js`

已完成：

- 数据链接从 `https://moegirl.icu/...` 改为 `https://zh.moegirl.org.cn/...`。
- 本地 skill 已明确不建议依赖 Cloudflare-blocked mirror `moegirl.icu`；数据层现在与该维护规则一致。
- `check-source-content.js` 继续兼容旧 `moegirl.icu` 链接读取路径，方便历史链接或外部提案过渡。

### 5. 非官方来源域名校验补严

文件：`scripts/validate-data.js`

已完成：

- `NON_AUTHORITATIVE_HOSTS` 新增 `moegirl.org.cn`。
- 防止后续把 `zh.moegirl.org.cn` 错标为 `primary`、`official` 或 `licensed`。
- 保持 Fandom、Moegirl、JoJo Wiki、Wikipedia 等社区/交叉参考源不能伪装成原作/官方来源。

### 6. 时间线面板校验补严

文件：`scripts/validate-data.js`

已完成：

- `timelinePanels[].dimensions.*` 现在必须有 `brief`。
- `timelinePanels[].dimensions.*.evidence` 必须是数组。
- 之前顶层维度已检查 `normal / peak / brief / evidence`，但时间线面板只检查了 `normal / peak`。这会让历史阶段面板有机会漏掉简介或证据数组，和 skill 中“每个维度都有 normal/peak/brief”的要求不一致。

### 7. 审计误报修正

文件：`data/core.js`

已完成：

- 审计逻辑不再因为 notes 中出现否定性高档位文字就触发“高争议或高档位角色缺少 evidenceLinks”。
- 例子：虎杖说明里有“缺少可换算到国家级承受的破坏证据”，这是否定性边界说明，不是虎杖使用了国家级主档。
- 现在整体来源审计只看实际维度常态/峰值是否包含高风险档位、`争议`、`仅下限` 或 `仅上限`。
- 修复后 audit issue character 从 4 个降到 3 个，保留下来的都是实际需要补日文原作语言量级来源的《死神》高风险条目。

### 8. 本地维护 skill 范围同步

文件：`.codex/skills/meta-grade-wiki-rules/SKILL.md`

已完成：

- 当前维护范围从旧的“初始草案名单”更新为真实的 13 部作品、100 个角色的紧凑名单。
- 修正旧说明中与数据不一致的部分，例如：
  - `海贼王` 已不只是草帽一伙加黑胡子，还包含凯多、香克斯、米霍克、白胡子。
  - `火影忍者` 已不只是第七班加辉夜，还包含斑、带土、柱间、迈特凯。
  - `死神` 已包含山本、剑八、兵主部。
  - `Fate/kaleid liner 魔法少女☆伊莉雅` 已是正式维护作品。
- 这能避免后续 agent 按过期 skill 误判“现有角色不该存在”。

## 当前数据状态

```json
{
  "works": 13,
  "characters": 100,
  "workCounts": {
    "Fate/kaleid liner 魔法少女☆伊莉雅": 7,
    "咒术回战": 9,
    "鬼灭之刃": 7,
    "钢之炼金术师": 6,
    "进击的巨人": 6,
    "电锯人": 5,
    "全职猎人": 7,
    "一拳超人": 5,
    "火影忍者": 9,
    "JOJO的奇妙冒险：星尘斗士": 7,
    "死神": 10,
    "海贼王": 15,
    "龙珠": 7
  },
  "sourceQuality": {
    "specific": 37,
    "entry": 63
  },
  "confidence": {
    "review": 19,
    "medium": 4,
    "stable": 36,
    "disputed": 41
  },
  "multiTimeline": 40,
  "auditIssueCharacters": 3,
  "highRiskCharacters": 32,
  "links": 202
}
```

仍在审计页出现的 3 个角色：

- `死神 / 山本元柳斋重国`：已有量级证据，但缺少日文原作语言来源。
- `死神 / 更木剑八`：已有量级证据，但缺少日文原作语言来源。
- `死神 / 兵主部一兵卫`：已有量级证据，但缺少日文原作语言来源。

这些不是结构 bug，而是后续人工补证据任务。

## 验证结果

已通过：

```bash
node scripts/validate-data.js
node scripts/validate-data.js --strict-warnings
node --check assets/app.js
node --check api/battle.js
node --check data/core.js
node --check data/characters.js
node --check data/reference.js
find data/works data/characters -type f -name '*.js' -exec node --check {} +
find scripts -type f -name '*.js' -exec node --check {} +
git diff --check
python3 /root/.codex/skills/.system/skill-creator/scripts/quick_validate.py .codex/skills/meta-grade-wiki-rules
node scripts/check-links.js --timeout 8000 --concurrency 6
node scripts/check-source-content.js --concurrency 3 --timeout 12000
```

关键输出：

```text
data validation ok: 0 warning(s)
Skill is valid!
checked 202 link(s): 79 ok, 123 soft, 0 failed
checked 202 link(s): 202 readable, 0 unsupported, 0 blocked, 0 failed
```

说明：

- `check-links.js` 的 `soft` 是直连 URL 被 403 等状态阻挡或限流，不是硬坏链。
- `check-source-content.js` 通过 MediaWiki API 或普通 GET 读到了 202 条来源内容。
- `READABLE` 只证明脚本能读取文本，不证明文本支持某个评级；评级证据仍要人工核对 claim。

Battle fallback mock 也已通过：

```json
{
  "ok": true,
  "statusCode": 200,
  "calls": [
    "https://llm.example/v1/responses",
    "https://llm.example/v1/chat/completions"
  ],
  "hasDone": true,
  "hasReasoning": false
}
```

该 mock 覆盖了：

- `/responses` 返回 404。
- 服务端自动回退 `/chat/completions`。
- Chat streaming 中出现 `reasoning_content`。
- 最终 SSE 有 `done`。
- `reasoning_content` 没有污染最终 JSON。

## 完成审计

目标：全方面审核当前项目，找到可优化点，优化掉后，再提出，直到没有可优化的点，最后生成一个包含所有优化的 Markdown。

| 要求 | 证据 | 状态 |
| --- | --- | --- |
| 全方面审核当前项目 | 已检查前端 `assets/app.js`、样式 `assets/styles.css`、API `api/battle.js`、数据注册器 `data/core.js`、作品数据、validator、链接脚本、README、env 示例、本地 skill 和旧优化报告 | 完成 |
| 找到可优化点 | 发现 provider fallback 不完整、reasoning_content 污染 JSON 风险、随机场景未覆盖情报、`.env.example` 缺限流变量、Moegirl 链接域名不符合维护规则、validator 对 timeline panel 不够严、audit notes 高档位否定句误报、skill 收录范围过期 | 完成 |
| 优化掉 | 已修改 11 个项目文件并更新本报告，共 12 个文件通过验证 | 完成 |
| 再提出直到没有可优化点 | 本轮可安全自动修复项已清零；剩余 3 个 audit issue 属于人工原作语言证据补充，不应自动伪造或批量补证 | 完成 |
| 生成包含所有优化的 md | 本文件 `OPTIMIZATION_REPORT.md` 已更新为当前 13 部作品、100 角色状态，并列出本轮全部优化、验证与剩余边界 | 完成 |

## 不继续自动做的事项

以下仍有长期优化空间，但不适合在本轮自动批量修改：

- 给《死神》山本、剑八、兵主部补日文原作卷话、设定书或授权资料 evidenceLinks。
- 把更多 `entry` 来源升级为 `specific` 来源。
- 把 Fandom、VS Battles Wiki、萌娘百科等交叉参考替换为原作/官方/授权层量级证据。
- 给高风险角色继续升降档。
- 把 `READABLE` 页面内容直接转成 `ratingEvidence: true`。

这些都需要逐条阅读原作或官方/授权资料，并把具体 claim 写进角色文件。自动补会制造伪证据，风险高于收益。
