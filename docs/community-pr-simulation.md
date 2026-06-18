# 社区 PR 模拟：新增角色提案流程

这是一份贡献者视角的演练文档，用来说明如何提交结构完整、便于维护者审核的角色提案。下面使用《海贼王》波特卡斯·D·艾斯作为“文档示例、非实际收录”的假设提案；它不代表本站会自动扩充长尾角色，也不代表该角色已经进入当前正式 roster。

## 1. Fork 与分支

1. Fork 仓库：<https://github.com/scruple2026/meta-grade>
2. 从自己的 fork 新建分支，例如：

```bash
git checkout -b proposal/one-piece-ace-example
```

一个 PR 优先只处理一个角色。若只是补来源或修正某个字段，也尽量保持改动聚焦在同一个角色文件或同一个结构化提案上。

## 2. 复制 PR 模板

打开 `.github/PULL_REQUEST_TEMPLATE.md`，把最前面的角色文件提案或结构化 `proposal.js` 模板复制出来。PR 正文最前面应保留可直接落盘的代码块，维护者才容易审核、运行和应用。

如果你还不确定完整角色文件的 wrapper 写法，建议先提交结构化 `proposal.js` 形式。维护者可以用 `node scripts/apply-character-proposal.js proposal.js` 把它转换成 `data/characters/<work-slug>/<character-id>.js` 并同步清单。

## 3. 填写角色 JS 提案

下面是一个“流程示例”，不是正式定级，也不要直接当作稳定数据提交。真实 PR 需要把每个维度、说明和来源 claim 改成你能支撑的内容；证据不足时保留 `无资料`、`未知` 或待审说明。

```js
module.exports = {
  workSlug: "one-piece",
  characterId: "portgas-d-ace",
  overwrite: false,
  character: {
    id: "portgas-d-ace",
    name: "波特卡斯·D·艾斯",
    en: "Portgas D. Ace",
    ja: "ポートガス・D・エース",
    affiliation: "白胡子海贼团",
    grade: "自然系烧烧果实能力者",
    appearances: ["文档示例：非正式收录"],
    timelineStatus: "示例提案，需维护者判断是否进入当前紧凑 roster",
    aliases: ["火拳艾斯", "Ace"],
    fandomSlug: "Portgas_D._Ace",
    confidence: "review",
    evidenceType: ["表现", "设定", "待补章节证据"],
    sourceQuality: "entry",
    evidenceLinks: [
      {
        type: "wiki",
        scope: "角色页入口",
        label: "One Piece Wiki - Portgas D. Ace",
        url: "https://onepiece.fandom.com/wiki/Portgas_D._Ace",
        citation: "",
        lang: "en",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "资料入口：用于核对角色身份、能力类型和登场信息；不直接支撑战力量级。"
      },
      {
        type: "chapter",
        scope: "原作卷话",
        label: "待补原作章节",
        url: "",
        citation: "请填写具体卷 / 话 / 页或官方电子版定位",
        lang: "ja",
        authority: "primary",
        medium: "manga",
        ratingEvidence: true,
        claim: "请说明该章节支撑哪个攻击、防御、速度、能量、形态或限制 claim。"
      }
    ],
    revisionNotes: [
      "文档示例：演示社区 PR 提案结构，不代表正式新增。"
    ],
    dimensions: {
      attack: ["无资料", "无资料", "示例提案未给出可审核原作证据，暂不强行定级。"],
      defense: ["无资料", "无资料", "示例提案未给出可审核原作证据，暂不强行定级。"],
      movement: ["无资料", "无资料", "示例提案未给出可审核原作证据，暂不强行定级。"],
      reaction: ["无资料", "无资料", "示例提案未给出可审核原作证据，暂不强行定级。"],
      vitality: ["无资料", "无资料", "示例提案未给出可审核原作证据，暂不强行定级。"],
      healing: ["无资料", "无资料", "示例提案未给出可审核原作证据，暂不强行定级。"],
      energy: ["无资料", "无资料", "示例提案未给出可审核原作证据，暂不强行定级。"],
      energyRegen: ["无资料", "无资料", "示例提案未给出可审核原作证据，暂不强行定级。"]
    },
    notes: {
      penetration: "攻击性质：需说明火焰攻击范围、媒介、命中条件和是否存在特殊穿透；没有证据时不要换算主量级。",
      resistance: "防御抗性：需说明自然系元素化、霸气交互或其他限制；不要把能力类型直接换算成防御量级。",
      sensing: "感知索敌：需补具体表现或写资料不足。",
      tactics: "战术智商：需补具体战斗表现或写资料不足。",
      special: "特殊能力：烧烧果实火焰、元素化等只写机制和限制，不自动抬高主面板。",
      weakness: "短板：需说明克制、霸气、环境或剧情限制。",
      setting: "设定/旁白：只记录可核对设定，不把称号或人气直接当量级依据。",
      basis: "评级依据：正式提交时必须把每个高风险 claim 对应到章节、集数、设定书或官方资料。"
    }
  }
};
```

## 4. 写清来源 Claim

每个 `evidenceLinks` 项都要写 `claim`，说明它支撑什么内容。常见区分如下：

- `ratingEvidence: false`：资料入口、角色页、作品页、索引页，只帮助核对身份、登场、能力名称或进一步找原始证据。
- `ratingEvidence: true`：直接支撑某个量级、形态、速度、承受、能量、弱点或限制的章节、集数、设定书、官方资料或授权资料。
- Fandom、萌娘百科、VS Battles、Wikipedia、JoJo Wiki 等可以做资料入口或交叉参考，但不要标成 `primary`、`official` 或 `licensed`。
- 高风险量级不要只写“很强”“队长级”“四皇干部”“特级”等称号；必须写明具体表现和限制。

## 5. 运行校验

提交前至少运行：

```bash
node scripts/validate-data.js
node --check assets/app.js
node --check data/core.js
node --check data/characters.js
node scripts/check-links.js --dry-run
```

如果你已经把提案应用成真实角色文件，再加上：

```bash
node --check data/characters/<work-slug>/<character-id>.js
```

普通 PR 不需要跑会访问外部网站的完整来源内容检查。维护者会在定时或手动 workflow 中使用 `node scripts/check-source-content.js --concurrency 3 --timeout 12000` 检查可读性。

## 6. 修正 Warning

`validate-data.js` 的 warning 不是自动驳回，但需要解释或修正。优先处理这些情况：

- 8 个主维度缺 `normal`、`peak` 或 `brief`。
- `notes` 缺攻击性质、防御抗性、感知、战术、特殊能力、短板、设定或评级依据。
- 高风险量级缺具体章节、集数、设定书或官方资料。
- 来源 claim 为空，或只贴 URL 不说明支撑内容。
- 非官方 wiki 被标成 `primary`、`official` 或 `licensed`。
- 同一角色有明显阶段差异却没有 `timelineStatus` 或 `timelinePanels` 说明。

证据不够时，保守写 `无资料`、`未知`、`未表现`，并把待补内容写进 `basis` 或 `revisionNotes`，不要为了通过筛选而抬高定级。

## 7. 提交 PR

提交时保持 PR 正文结构：

1. 最前面放完整角色文件或结构化 `proposal.js` 代码块。
2. 代码块后写本次提案摘要。
3. 列出关键来源和每个来源支撑的 claim。
4. 粘贴本地校验命令结果。
5. 勾选 PR 模板中的证据、时间线和自检清单。

PR 标题建议具体到角色和动作，例如：

```text
docs example: propose Portgas D. Ace battle panel
```

真实收录 PR 可写：

```text
add one-piece/portgas-d-ace character proposal
```

## 8. 维护者如何应用

维护者审核通过后，可以把结构化提案保存为 `proposal.js`，然后运行：

```bash
node scripts/apply-character-proposal.js proposal.js
node scripts/validate-data.js
node --check data/characters/one-piece/portgas-d-ace.js
```

脚本会创建或更新单角色文件，并同步 `index.html` 与 `data/characters.js`。如果维护者认为该角色不适合当前紧凑 roster，可以要求改成 Issue、证据补充 PR，或暂缓收录。
