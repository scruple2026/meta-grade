# 优化结果报告

日期：2026-05-02

## 结论

本轮已把能安全自动落地的结构性优化做完：数据口径、维护文档、PR 模板、项目 skill、来源检查脚本和验证流程已经对齐。当前没有发现新的清单不同步、JS 语法错误、数据 validator warning、硬坏链、来源不可读、时间线默认状态不一致、或“资料不足”旧口径残留。

剩余优化主要是逐条阅读原作章节、设定书或授权资料后修订具体角色评级。这类工作不能靠 `READABLE`、Fandom 页面或跨界 wiki 批量自动确认，否则会重新引入虚高和伪证据。

## 本轮落地改动

### 0. 维度口径补丁

文件：

- `reference.md`
- `data/reference.js`
- `assets/app.js`
- `README.md`
- `.github/PULL_REQUEST_TEMPLATE.md`
- `.codex/skills/meta-grade-wiki-rules/SKILL.md`

已完成：

- 将网页展示和文档中原本围绕“攻击穿透”的条目扩展并定名为“攻击性质”。内部字段仍保留 `notes.penetration`，用于兼容既有角色文件和社区提案。
- `攻击性质` 现在覆盖攻击方式、作用范围、穿透、伤害类型、命中条件、媒介限制、低耦合、持续输出、毒素/灵魂/封印等性质，不再把“穿透”当成唯一解释对象。
- `生命体量` 明确解释为破防后的失能、死亡或核心毁灭阈值；它不等同于防御能级，也不等同于生命回复速度。
- `能量总量` 明确包含超自然能量池、机体能源、弹药/外源能源、体力、肌耐力和肉体持久度。没有魔力、咒力、查克拉不等于 `不适用`。
- 同步修正了埼玉、禅院真希、金·布拉德雷等纯肉体或非传统能量角色的能量字段，避免把“无传统能量池”误写成“不适用”。

### 1. README 维护口径同步

文件：`README.md`

- 将“战斗资料不足使用【未知】”修正为四类占位的准确口径：
  - 【无资料】：资料不足以跨界定级。
  - 【未知】：原作存在可能性但无法判断。
  - 【未表现】：素材中没有展示。
  - 保守低档：有表现但只支撑低档。
- 在验证命令里加入 `node --check scripts/check-source-content.js`。
- 新增来源可读性检查说明，明确：
  - `check-links.js` 是 URL 直连/可达性检查。
  - `check-source-content.js` 是内容读取路径检查。
  - `READABLE` 只代表读到文本，不代表支持评级。

### 2. Skill 验证流程同步

文件：`.codex/skills/meta-grade-wiki-rules/SKILL.md`

- 保守评级规则补上【无资料】，避免后续维护者或 agent 在“资料不足”场景继续默认写【未知】。
- 验证命令加入 `node --check scripts/check-source-content.js`。
- 完整性检查加入内容可读性说明：需要用 `check-source-content.js` 处理 blocked-looking 链接或来源 warning，但不能把 `READABLE` 当成评级批准。
- 保持“内部 agent 维护规则只写 skill / AGENTS.md，不写 PR 模板”的边界。

### 3. PR 模板与角色 README 去误导化

文件：

- `.github/PULL_REQUEST_TEMPLATE.md`
- `data/characters/README.md`

已完成：

- 默认占位从【未知】改为【无资料】。
- 默认角色模板不再强塞单面板 `timelinePanels`。
- 多时间线改为可选片段，仅在早期/最终/外源/一次性状态确实影响面板时追加。
- 明确最后一个 timeline panel 必须是主面板状态，且顶层 `dimensions` 必须和最后 panel 完全一致。

### 4. 来源内容检查脚本增强

文件：`scripts/check-source-content.js`

已完成：

- 保留 `READABLE` / `UNSUPPORTED` / `BLOCKED` / `FAILED` 分类。
- 对小于 500 字节的可读内容追加 `small content; verify manually` 提示。
- 目的：避免把极小分类页、重定向页或壳页面误读为“已读到足够证据”。

## 当前数据状态

结构统计：

```json
{
  "works": 12,
  "characters": 82,
  "workCounts": {
    "咒术回战": 9,
    "鬼灭之刃": 7,
    "钢之炼金术师": 6,
    "进击的巨人": 6,
    "电锯人": 5,
    "全职猎人": 7,
    "一拳超人": 5,
    "火影忍者": 5,
    "JOJO的奇妙冒险：星尘斗士": 7,
    "死神": 7,
    "海贼王": 11,
    "龙珠": 7
  },
  "sourceQuality": {
    "entry": 63,
    "specific": 19
  },
  "confidence": {
    "stable": 34,
    "disputed": 41,
    "medium": 6,
    "review": 1
  },
  "multiTimeline": 9,
  "highRiskCharacters": 19,
  "specialCounts": {
    "不适用": 12,
    "无资料": 16
  },
  "auditIssueCharacters": 0
}
```

解释：

- 12 个作品、82 个角色仍按“核心角色/核心反派/最终 Boss”维护。
- 9 个角色存在多时间线面板。
- 19 个角色使用高风险档位，但当前 validator/audit 未报 warning；它们已有相应的限制标注或证据结构。
- `entry` 来源仍多于 `specific` 来源，说明后续最有价值的人工工作是补具体章节、集数、设定书和官方/授权来源，而不是继续改 schema。

## 验证结果

已通过：

```bash
python3 /root/.codex/skills/.system/skill-creator/scripts/quick_validate.py .codex/skills/meta-grade-wiki-rules
node scripts/validate-data.js
node --check assets/app.js
node --check data/core.js
node --check data/characters.js
find data/works data/characters -type f -name '*.js' -exec node --check {} \;
find scripts -type f -name '*.js' -exec node --check {} \;
node scripts/check-links.js
node scripts/check-source-content.js --concurrency 3 --timeout 12000
```

关键输出：

```text
Skill is valid!
data validation ok: 0 warning(s)
checked 163 link(s): 60 ok, 103 soft, 0 failed
checked 163 link(s): 163 readable, 0 unsupported, 0 blocked, 0 failed
```

说明：

- `check-links.js` 的 `soft` 是直连页面被 401/403/405/429 阻挡或限流，不是硬坏链。
- `check-source-content.js` 通过公开 API 或普通 GET 读到了 163 条来源的文本。
- 部分分类页出现 `small content; verify manually`，这是新加的保守提示，不影响可读性检查通过。

## 完成审计

目标：持续优化直到没有明显可安全自动落地的优化点，并把结果写入一个可查看的 Markdown 文件。

| 要求 | 证据 | 状态 |
| --- | --- | --- |
| 继续优化，而不是只总结 | 已修改 `README.md`、`.codex/skills/meta-grade-wiki-rules/SKILL.md`、`scripts/check-source-content.js`，并承接前一轮 PR 模板/角色 README 优化 | 完成 |
| 修掉更新后不一致 | README 的【未知】旧口径已改为【无资料/未知/未表现】区分；skill 验证命令补齐内容检查脚本 | 完成 |
| 不把 PR 不涉及的内部规则塞进 PR 模板 | 内部 agent / S3 / token / crawler 细节留在 skill；PR 模板只保留角色提案、证据要求、时间线 checklist | 完成 |
| 来源检查更严谨 | `check-links.js` 与 `check-source-content.js` 的职责已在 README 和 skill 中拆开；内容脚本新增小内容提示 | 完成 |
| 数据和脚本实际通过验证 | validator 0 warning；JS 语法检查通过；链接 0 failed；内容可读 0 failed/blocked | 完成 |
| 把优化结果放进可见 md | 本文件 `OPTIMIZATION_REPORT.md` 位于仓库根目录 | 完成 |

## 不继续自动做的事项

以下事项还有提升空间，但不适合在没有逐条原文核对的情况下自动批量修改：

- 把 `entry` 来源升级为 `specific` 来源。
- 把 Fandom、VS Battles Wiki、萌娘百科等交叉参考改成评级证据。
- 给高风险角色继续升降档。
- 给所有角色补官方设定书结论。
- 把 `READABLE` 页面内容直接转成 `ratingEvidence: true`。

这些都需要逐条阅读原作或官方/授权资料，并把具体 claim 写进角色文件。
