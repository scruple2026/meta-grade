# Character Data

每个角色一个文件，社区 PR 应优先只改对应角色文件。

## 目录约定

- 《咒术回战》：`data/characters/jujutsu-kaisen/<character-id>.js`
- 《鬼灭之刃》：`data/characters/demon-slayer/<character-id>.js`
- 其他作品同样按 `data/characters/<work-slug>/<character-id>.js` 分目录维护。

新增角色时：

1. 新建一个角色文件。
2. 在 `index.html` 里把该脚本放到对应作品的 `data/works/<work-slug>.js` 之后。
3. 在 `data/characters.js` 的 `POWER_WIKI_CHARACTER_FILES` 清单里加入该路径。
4. 跑 `node scripts/validate-data.js` 和相关 `node --check`。
5. 涉及来源链接时，跑 `node scripts/check-links.js --dry-run` 确认链接已被数据加载。

也可以用脚手架创建模板并自动同步清单：

```bash
node scripts/create-character.js <work-slug> <character-id> --name 中文名
```

维护者也可以把社区提交的结构化提案保存为 `proposal.js`，再自动落盘角色文件并同步清单：

```bash
node scripts/apply-character-proposal.js proposal.js
```

`proposal.js` 至少需要：

```js
module.exports = {
  workSlug: "work-slug",
  characterId: "character-id",
  character: {
    name: "中文名",
    dimensions: {
      attack: ["无资料", "无资料", "资料不足，暂不强行定级。"],
      defense: ["无资料", "无资料", "资料不足，暂不强行定级。"],
      movement: ["无资料", "无资料", "资料不足，暂不强行定级。"],
      reaction: ["无资料", "无资料", "资料不足，暂不强行定级。"],
      vitality: ["无资料", "无资料", "资料不足，暂不强行定级。"],
      healing: ["无资料", "无资料", "资料不足，暂不强行定级。"],
      energy: ["无资料", "无资料", "资料不足，暂不强行定级。"],
      energyRegen: ["无资料", "无资料", "资料不足，暂不强行定级。"]
    }
  }
};
```

`evidenceLinks[].claim` 用来说明链接支撑的具体结论。只贴角色页入口时，`claim` 应写清这是“角色资料入口”还是“跨界量级参考”，不能伪装成章节级证据。高风险量级建议补完整结构：`type`、`lang`、`authority`、`medium`、`ratingEvidence`、`claim`；没有公开 URL 的原作卷话、设定书或纸质资料可填 `citation`。只有确实直接支撑量级、形态或高风险设定时才写 `ratingEvidence: true`。

新增作品时优先使用：

```bash
node scripts/create-work.js <work-slug> --name 作品名
```

## 最小结构

```js
(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["示例作品"];

  if (!work) {
    throw new Error("示例作品 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "example-character",
      name: "示例角色",
      en: "Example Character",
      ja: "Example Character",
      category: "主角团",
      affiliation: "示例阵营",
      grade: "示例定位",
      appearances: ["资料范围"],
      timelineStatus: "示例时间线 / 示例状态",
      aliases: ["可搜索别名"],
      fandomSlug: "Example_Character",
      confidence: "review",
      evidenceType: ["初稿"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色页入口",
          label: "示例来源",
          url: "https://example.com",
          citation: "",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "说明该链接支撑哪个量级、形态或设定。"
        }
      ],
      revisionNotes: [
        "初建条目：请补充具体章节、集数或设定书依据。"
      ],
      dimensions: dims({
        attack: ["无资料", "无资料", "资料不足，暂不强行定级。"],
        defense: ["无资料", "无资料", "资料不足，暂不强行定级。"],
        movement: ["无资料", "无资料", "资料不足，暂不强行定级。"],
        reaction: ["无资料", "无资料", "资料不足，暂不强行定级。"],
        vitality: ["无资料", "无资料", "资料不足，暂不强行定级。"],
        healing: ["无资料", "无资料", "资料不足，暂不强行定级。"],
        energy: ["无资料", "无资料", "资料不足，暂不强行定级。"],
        energyRegen: ["无资料", "无资料", "资料不足，暂不强行定级。"]
      }),
      notes: notes({
        // 字段名保留 penetration 兼容旧数据；网页显示为“攻击性质”。
        penetration: "未补充。",
        resistance: "未补充。",
        special: "未补充。",
        weakness: "未补充。",
        setting: "未补充。",
        basis: "未补充。"
      })
    })
  ]);
})();
```

## 时间线约定

- `timelinePanels[].key` 是稳定 URL 片段，只能使用小写字母、数字和连字符，例如 `early`, `final-arc`, `ending`。
- `defaultTimelineKey` 只在存在 `timelinePanels` 时使用，并且必须指向某个面板的 `key`。
- 没有明显阶段差异的角色不要硬填时间线面板；删除 `defaultTimelineKey` 和整个 `timelinePanels` 字段即可。
- 有明显阶段差异时，最后一个 `timelinePanels` 应为当前主面板状态；`defaultTimelineKey` 指向最后一个面板，且顶层 `dimensions` 必须与最后一个面板完全一致。

```js
defaultTimelineKey: "final",
timelinePanels: [
  {
    key: "early",
    label: "早期",
    status: "早期状态说明",
    dimensions: dims({
      attack: ["无资料", "无资料", "资料不足，暂不强行定级。"],
      defense: ["无资料", "无资料", "资料不足，暂不强行定级。"],
      movement: ["无资料", "无资料", "资料不足，暂不强行定级。"],
      reaction: ["无资料", "无资料", "资料不足，暂不强行定级。"],
      vitality: ["无资料", "无资料", "资料不足，暂不强行定级。"],
      healing: ["无资料", "无资料", "资料不足，暂不强行定级。"],
      energy: ["无资料", "无资料", "资料不足，暂不强行定级。"],
      energyRegen: ["无资料", "无资料", "资料不足，暂不强行定级。"]
    }),
    notes: "早期面板说明。"
  },
  {
    key: "final",
    label: "最终",
    status: "最终状态说明",
    dimensions: dims({
      attack: ["无资料", "无资料", "资料不足，暂不强行定级。"],
      defense: ["无资料", "无资料", "资料不足，暂不强行定级。"],
      movement: ["无资料", "无资料", "资料不足，暂不强行定级。"],
      reaction: ["无资料", "无资料", "资料不足，暂不强行定级。"],
      vitality: ["无资料", "无资料", "资料不足，暂不强行定级。"],
      healing: ["无资料", "无资料", "资料不足，暂不强行定级。"],
      energy: ["无资料", "无资料", "资料不足，暂不强行定级。"],
      energyRegen: ["无资料", "无资料", "资料不足，暂不强行定级。"]
    }),
    notes: "最终面板必须与顶层 dimensions 完全一致。"
  }
],
```
