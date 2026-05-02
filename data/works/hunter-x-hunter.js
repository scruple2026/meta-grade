(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "全职猎人";

  registerWorkSource(WORK, {
    slug: "hunter-x-hunter",
    originalLanguage: "ja",
    pageLabel: "Hunterpedia 角色页",
    pageBase: "https://hunterxhunter.fandom.com/wiki/",
    pageLanguage: "en",
    canonicalLinks: [
      {
        type: "official",
        scope: "日文官方动画入口",
        label: "日本电视台「HUNTER×HUNTER」Cast/Staff",
        url: "https://www.ntv.co.jp/hunterhunter/caststaff/index.html",
        lang: "ja",
        authority: "official",
        medium: "official-site",
        claim: "用于核对 2011 动画官方制作/主要角色入口；念能力和成人杰等高风险峰值仍需原作卷话或公式书补证。"
      }
    ],
    commonLinks: [
      {
        label: "VIZ《全职猎人》页面",
        url: "https://www.viz.com/hunter-x-hunter"
      },
      {
        label: "Hunterpedia 角色总表",
        url: "https://hunterxhunter.fandom.com/wiki/Category%3ACharacters"
      },
      {
        label: "Hunterpedia 念能力",
        url: "https://hunterxhunter.fandom.com/wiki/Nen"
      }
    ],
    scaleNotes: {
          "scope": "当前收录四主角、核心强者西索/尼特罗和蚁王梅路艾姆。",
          "versionPolicy": "成人杰、吸收后蚁王等峰值必须标一次性/状态。",
          "highRisk": [
                "制约誓约",
                "念能力相性",
                "成人杰",
                "死后念"
          ],
          "conservativeNotes": "实战胜负和能力克制不折算为综合面板。"
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
