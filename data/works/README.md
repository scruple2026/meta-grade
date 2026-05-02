# Works Metadata

这里每个文件只维护一个作品的来源元数据和默认 `work` 包装器。具体角色必须放到 `data/characters/<work-slug>/<character-id>.js`，每个角色一个文件。

## 文件约定

- 一个作品一个元数据文件：`data/works/<work-slug>.js`。
- 文件内部只调用 `window.POWER_WIKI` 提供的 `character` 和 `registerWorkSource`。
- 新增作品时，在 `index.html` 里把新的作品脚本放在 `data/core.js` 之后、该作品角色脚本之前。
- 具体角色不要写进 `data/works/*.js`、`data/core.js` 或 `data/characters.js`。

## 最小结构

```js
(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "示例作品";

  registerWorkSource(WORK, {
    slug: "example-work",
    originalLanguage: "ja",
    pageLabel: "示例 Wiki 角色页",
    pageBase: "https://example.com/wiki/",
    canonicalLinks: [
      {
        type: "official",
        scope: "原作语言官方入口",
        label: "示例官方站",
        url: "https://example.com",
        lang: "ja",
        authority: "official",
        medium: "official-site",
        ratingEvidence: false,
        claim: "用于核对作品官方入口；不直接作为高风险量级依据。"
      }
    ],
    commonLinks: [
      { label: "示例 Wiki 角色总表", url: "https://example.com/wiki/Characters" }
    ],
    scaleEvidenceLinks: [],
    scaleNotes: {
      scope: "当前只收录核心战斗角色。",
      versionPolicy: "不同篇章、形态和外源峰值应拆分时间线。",
      highRisk: [],
      conservativeNotes: "称号和特殊权能不自动抬高主面板。"
    },
    sourcePolicy: "角色页/作品页是入口来源；高争议峰值后续应补原作卷话、集数、设定书或官方资料。"
  });
  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();
```
