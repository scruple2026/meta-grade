(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "死神";

  registerWorkSource(WORK, {
    slug: "bleach",
    originalLanguage: "ja",
    pageLabel: "Bleach Wiki 角色页",
    pageBase: "https://bleach.fandom.com/wiki/",
    pageLanguage: "en",
    canonicalLinks: [
      {
        type: "official",
        scope: "日文官方角色入口",
        label: "TV动画「BLEACH 千年血战篇」角色页",
        url: "https://bleach-anime.com/character/",
        lang: "ja",
        authority: "official",
        medium: "official-site",
        claim: "用于核对千年血战篇角色、阵营和官方动画资料；高端灵压量级仍需章节/设定书补证。"
      }
    ],
    commonLinks: [
      {
        label: "VIZ《死神》页面",
        url: "https://www.viz.com/bleach"
      },
      {
        label: "Bleach Wiki 角色总表",
        url: "https://bleach.fandom.com/wiki/Characters"
      }
    ],
    scaleEvidenceLinks: [
      {
        type: "source",
        scope: "作品量级参考",
        label: "VS Battles Wiki：Bleach",
        url: "https://vsbattles.fandom.com/wiki/Bleach",
        lang: "en",
        authority: "cross-reference",
        medium: "cross-wiki",
        ratingEvidence: true,
        claim: "用于复核当前收录角色整体城市级以上密度，不等同单角色章节级证据。"
      }
    ],
    scaleNotes: {
          "scope": "当前收录一护、露琪亚、白哉、剑八、蓝染、市丸银、雨龙、织姬、恋次、友哈巴赫、山本、一兵卫。",
          "versionPolicy": "尸魂界、破面、千年血战、崩玉/灵王吸收等状态后续应拆 timelinePanels。",
          "highRisk": [
                "灵压压制",
                "镜花水月",
                "全知全能",
                "灵王吸收",
                "封印"
          ],
          "conservativeNotes": "灵压、完全催眠和未来改写必须与破坏/防御主档分开。"
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
