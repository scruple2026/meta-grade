## PR 最前面：角色文件提案

新增角色或大幅修订角色时，优先把下面这个代码块改成可直接落盘的角色文件。维护者应能把代码块复制到 `data/characters/<work-slug>/<character-id>.js`，或把结构化提案交给 `node scripts/apply-character-proposal.js proposal.js` 同步清单。

```js
(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["作品名"];

  if (!work) {
    throw new Error("作品名 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "character-id",
      name: "中文名",
      en: "English Name",
      ja: "日本語名或留空",
      category: "主角团 / 核心反派 / 最终 Boss / 其他",
      affiliation: "所属阵营",
      grade: "身份 / 能力",
      appearances: ["资料范围"],
      timelineStatus: "当前主面板时间线状态",
      aliases: ["别名"],
      fandomSlug: "Source_Page_Slug",
      confidence: "review",
      evidenceType: ["表现", "设定", "换算", "条件峰值"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色页入口",
          label: "来源标签",
          url: "https://example.com",
          citation: "",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "说明该链接支撑哪个量级、形态或设定，避免只贴入口。"
        }
      ],
      revisionNotes: [
        "初建或修订理由。"
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
        penetration: "攻击性质。",
        resistance: "防御抗性。",
        special: "特殊权能。",
        weakness: "角色短板。",
        setting: "设定/旁白。",
        basis: "评级依据。"
      })
    })
  ]);
})();
```

如果提交结构化提案而不是完整角色文件，维护者可以把下面对象保存为 `proposal.js` 后运行 `node scripts/apply-character-proposal.js proposal.js`：

```js
module.exports = {
  workSlug: "work-slug",
  characterId: "character-id",
  overwrite: false,
  character: {
    id: "character-id",
    name: "中文名",
    category: "主角团 / 核心反派 / 最终 Boss / 其他",
    affiliation: "所属阵营",
    grade: "身份 / 能力",
    appearances: ["资料范围"],
    confidence: "review",
    evidenceType: ["表现"],
    sourceQuality: "entry",
    evidenceLinks: [
      {
        type: "wiki",
        scope: "角色页入口",
        label: "来源标签",
        url: "https://example.com",
        citation: "",
        lang: "en",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "说明该链接支撑哪个量级、形态或设定。"
      }
    ],
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

## 清单同步

- 角色文件路径：
- [ ] 已用 `node scripts/apply-character-proposal.js proposal.js`、`node scripts/create-character.js` 或手动方式同步 `index.html`
- [ ] 已用 `node scripts/apply-character-proposal.js proposal.js`、`node scripts/create-character.js` 或手动方式同步 `data/characters.js`
- [ ] 如果是新作品，已用 `node scripts/create-work.js <work-slug> --name 作品名` 或手动方式新增 `data/works/<work-slug>.js`

## 证据要求

- [ ] 已补角色页或作品页入口来源
- [ ] 高风险量级已补章节 / 集数 / 设定书 / 官方资料链接到 `evidenceLinks`
- [ ] 高风险量级来源已标明 `lang`、`authority`、`medium` 和 `ratingEvidence`
- [ ] 原作语言资料优先；日漫条目没有只依赖英文 Fandom / VSBattle
- [ ] Fandom、萌娘百科、VSBattle、Wikipedia、JoJo Wiki 等非官方来源没有标成 `primary`、`official` 或 `licensed`
- [ ] 高风险量级已标注 `争议`、`外源`、`一次性`、`仪式`、`仅下限` 或其他限制
- [ ] 没有把称号、危险等级、剧情评价直接换算成主量级
- [ ] 特殊权能只写入战力解释项，除非原作给出可换算破坏、承受、速度或能量证据

## 时间线

- [ ] 没有明显阶段差异，已删除 `timelinePanels`
- [ ] 没有明显阶段差异，已删除 `defaultTimelineKey`
- [ ] 有明显阶段差异，左侧时间线列表所需的 `timelinePanels[].key` 已补齐，且 `defaultTimelineKey` 指向默认面板
- [ ] 一次性、外源、不可控、短时状态已在峰值标签和说明中标出

有明显阶段差异时，可在角色对象中追加：

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

## 自检

```bash
node scripts/validate-data.js
node scripts/sync-reference.js # 只在改 reference.md 时需要
node --check data/characters/<work-slug>/<character-id>.js
node scripts/check-links.js --dry-run
node --check assets/app.js
node --check data/core.js
```

## 其他说明
