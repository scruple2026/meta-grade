(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "钢之炼金术师";

  registerWorkSource(WORK, {
    slug: "fullmetal-alchemist",
    originalLanguage: "ja",
    pageLabel: "Fullmetal Alchemist Wiki 角色页",
    pageBase: "https://fma.fandom.com/wiki/",
    pageLanguage: "en",
    canonicalLinks: [
      {
        type: "official",
        scope: "日文官方角色入口",
        label: "「钢之炼金术师 FULLMETAL ALCHEMIST」角色页",
        url: "https://www.hagaren.jp/fa/characters/index01.html",
        lang: "ja",
        authority: "official",
        medium: "official-site",
        claim: "用于核对 FA 动画官方角色资料和父亲大人/人造人设定入口；全国炼成阵峰值仍需原作章节或设定书补证。"
      }
    ],
    commonLinks: [
      {
        label: "VIZ《钢之炼金术师》页面",
        url: "https://www.viz.com/fullmetal-alchemist"
      },
      {
        label: "Fullmetal Alchemist Wiki 角色总表",
        url: "https://fma.fandom.com/wiki/Characters"
      },
      {
        label: "萌娘百科《钢之炼金术师》作品页",
        url: "https://moegirl.icu/%E9%92%A2%E4%B9%8B%E7%82%BC%E9%87%91%E6%9C%AF%E5%B8%88"
      }
    ],
    scaleNotes: {
          "scope": "当前收录艾尔利克兄弟、罗伊、斯卡、布拉德雷、父亲大人。",
          "versionPolicy": "全国炼成阵、贤者之石、神之力均按外源/仪式/短时峰值记录。",
          "highRisk": [
                "全国炼成阵",
                "贤者之石",
                "神之力",
                "分解炼成"
          ],
          "conservativeNotes": "炼金术结构操作不直接等同大范围爆破。"
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
