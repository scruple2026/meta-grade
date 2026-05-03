(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "咒术回战";

  registerWorkSource(WORK, {
    slug: "jujutsu-kaisen",
    originalLanguage: "ja",
    pageLabel: "Jujutsu Kaisen Wiki 角色页",
    pageBase: "https://jujutsu-kaisen.fandom.com/wiki/",
    pageLanguage: "en",
    canonicalLinks: [
      {
        type: "official",
        scope: "日文官方角色入口",
        label: "TV动画「咒术回战」角色页",
        url: "https://jujutsukaisen.jp/character/index.php",
        lang: "ja",
        authority: "official",
        medium: "official-site",
        claim: "用于核对角色身份、术式/等级等日文官方动画资料；不直接支撑跨界量级。"
      }
    ],
    commonLinks: [
      { label: "Jujutsu Kaisen Wiki 角色总表", url: "https://jujutsu-kaisen.fandom.com/wiki/List_of_Characters" },
      { label: "萌娘百科《咒术回战》作品页", url: "https://zh.moegirl.org.cn/%E5%92%92%E6%9C%AF%E5%9B%9E%E6%88%98" }
    ],
    scaleNotes: {
          "scope": "当前只收录主角团和最终 Boss 两面宿傩；召唤/外置战力写入所属角色的战力解释项。",
          "versionPolicy": "高成长角色按 timelineStatus 限定，结局状态与早期状态后续可拆 timelinePanels。",
          "highRisk": [
                "领域",
                "必中",
                "灵魂",
                "空间切割",
                "召唤"
          ],
          "conservativeNotes": "特殊术式不自动抬攻击/防御/速度主档。"
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
