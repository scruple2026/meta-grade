(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "龙珠";

  registerWorkSource(WORK, {
    slug: "dragon-ball",
    originalLanguage: "ja",
    pageLabel: "Dragon Ball Wiki 角色页",
    pageBase: "https://dragonball.fandom.com/wiki/",
    pageLanguage: "en",
    canonicalLinks: [
      {
        type: "official",
        scope: "日文官方作品入口",
        label: "DRAGON BALL 官方网站",
        url: "https://dragon-ball-official.com/",
        lang: "ja",
        authority: "official",
        medium: "official-site",
        claim: "用于核对龙珠官方新闻、作品入口和日文原作/衍生资料入口；Z 角色高端量级仍需卷话或设定书引用。"
      }
    ],
    commonLinks: [
      {
        label: "VIZ《龙珠》页面",
        url: "https://www.viz.com/dragon-ball"
      },
      {
        label: "Dragon Ball Wiki 角色总表",
        url: "https://dragonball.fandom.com/wiki/Characters"
      }
    ],
    scaleEvidenceLinks: [
      {
        type: "source",
        scope: "作品量级参考",
        label: "VS Battles Wiki：Dragon Ball",
        url: "https://vsbattles.fandom.com/wiki/Dragon_Ball",
        lang: "en",
        authority: "cross-reference",
        medium: "cross-wiki",
        ratingEvidence: true,
        claim: "用于复核龙珠 Z 角色整体高端量级密度，并区分漫画、动画和龙珠超口径。"
      }
    ],
    scaleNotes: {
          "scope": "当前收录龙珠 Z 核心战士、那美克星篇克林、基纽队长和基纽特战队主要成员，以及弗利萨、沙鲁、魔人布欧；龙珠超另拆。",
          "versionPolicy": "赛亚人篇、那美克星篇、沙鲁篇、布欧篇和龙珠超形态不得混为一个稳定常态。",
          "highRisk": [
                "变身倍率",
                "瞬间移动",
                "再生",
                "吸收",
                "星系级传闻"
          ],
          "conservativeNotes": "瞬间移动是特殊位移；传闻和持续破坏不直接等同单发攻击。"
    },
    sourcePolicy: "角色页/作品页是入口来源；高争议峰值后续应补章节、集数、设定书或官方资料链接。",
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();
