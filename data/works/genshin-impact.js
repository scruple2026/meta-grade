(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "原神";

  registerWorkSource(WORK, {
    slug: "genshin-impact",
    originalLanguage: "zh",
    pageLabel: "Genshin Impact Wiki 角色页",
    pageBase: "https://genshin-impact.fandom.com/wiki/",
    pageLanguage: "en",
    canonicalLinks: [{
      type: "official",
      scope: "官方角色入口",
      label: "Genshin Impact: Fontaine Characters",
      url: "https://genshin.hoyoverse.com/en/character/fontaine",
      lang: "en",
      authority: "official",
      medium: "official-site",
      ratingEvidence: false,
      claim: "用于核对《原神》Fontaine官方角色入口。"
    }],
    commonLinks: [{
      type: "wiki",
      scope: "作品资料入口",
      label: "Genshin Impact Wiki",
      url: "https://genshin-impact.fandom.com/wiki/Genshin_Impact_Wiki",
      lang: "en",
      authority: "wiki",
      medium: "wiki",
      claim: "用于交叉核对角色身份、元素、武器、命之座和剧情资料。"
    }],
    scaleEvidenceLinks: [],
    scaleNotes: {
      scope: "当前收录缄默之秋 worldbook key/comment 中明确出现的 Fontaine 角色：芙宁娜、那维莱特、莱欧斯利。暂不展开全提瓦特长尾角色。",
      versionPolicy: "按游戏公开资料综合记录；神明身份、古龙权柄、元素爆发、命之座、剧情仪式和旅行者队伍机制必须标注条件，不自动并入常态。",
      highRisk: ["神明身份", "古龙权柄", "元素爆发", "命之座", "剧情仪式", "队伍机制"],
      conservativeNotes: "神、龙、审判官、典狱长等称号不直接换算高阶破坏；元素攻击、治疗、召唤物和剧情权柄与本体承伤分开。"
    },
    sourcePolicy: "HoYoverse官方角色入口与Genshin Impact Wiki是资料入口；高争议主线权柄后续应补任务章节或官方资料。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();
