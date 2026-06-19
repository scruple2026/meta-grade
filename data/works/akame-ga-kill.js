(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "斩！赤红之瞳";

  registerWorkSource(WORK, {
    slug: "akame-ga-kill",
    originalLanguage: "ja",
    pageLabel: "Akame ga Kill! Wiki 角色页",
    pageBase: "https://akamegakill.fandom.com/wiki/",
    pageLanguage: "en",
    canonicalLinks: [],
    commonLinks: [{
      type: "wiki",
      scope: "作品资料入口",
      label: "Akame ga Kill! Wiki",
      url: "https://akamegakill.fandom.com/wiki/Akame_Ga_Kill!_Wiki",
      lang: "en",
      authority: "wiki",
      medium: "wiki",
      claim: "用于交叉核对帝具、夜袭、帝国阵营和主要战斗角色资料。"
    }],
    scaleEvidenceLinks: [],
    scaleNotes: {
      scope: "当前收录缄默之秋 worldbook key/comment 中明确出现的艾斯德斯。暂不展开夜袭、狩人全员或帝国长尾角色。",
      versionPolicy: "按原作/动画公开资料综合记录；帝具、冰岚、大范围冻结、时间冻结和剧情大招必须标注条件，不并入普通肉身。",
      highRisk: ["帝具", "恶魔之粹", "摩珂钵特摩", "冰岚", "时间冻结", "大范围冻结"],
      conservativeNotes: "将军称号、最强评价和大范围控场不直接等同同档攻击/防御；冰系权能、控场与本体承伤分开。"
    },
    sourcePolicy: "Akame ga Kill! Wiki作为资料入口；高争议帝具峰值后续应补日文原作卷话、动画集数或官方设定资料。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();
