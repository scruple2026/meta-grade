(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "崩坏：星穹铁道";

  registerWorkSource(WORK, {
    slug: "honkai-star-rail",
    originalLanguage: "zh",
    pageLabel: "Honkai: Star Rail Wiki 角色页",
    pageBase: "https://honkai-star-rail.fandom.com/wiki/",
    pageLanguage: "en",
    canonicalLinks: [{
      type: "official",
      scope: "官方角色入口",
      label: "Honkai: Star Rail Characters",
      url: "https://hsr.hoyoverse.com/en-us/character",
      lang: "en",
      authority: "official",
      medium: "official-site",
      ratingEvidence: false,
      claim: "用于核对《崩坏：星穹铁道》官方角色入口。"
    }],
    commonLinks: [{
      type: "wiki",
      scope: "作品资料入口",
      label: "Honkai: Star Rail Wiki",
      url: "https://honkai-star-rail.fandom.com/wiki/Honkai:_Star_Rail_Wiki",
      lang: "en",
      authority: "wiki",
      medium: "wiki",
      claim: "用于交叉核对角色身份、命途、属性、武器和剧情资料。"
    }],
    scaleEvidenceLinks: [],
    scaleNotes: {
      scope: "当前收录缄默之秋 worldbook key/comment 中明确出现的云璃。暂不展开仙舟或星穹列车长尾角色。",
      versionPolicy: "按游戏公开资料综合记录；命途、终结技、光锥和队伍机制作为条件峰值，不直接折成本体常态。",
      highRisk: ["命途", "终结技", "光锥", "队伍机制", "仙舟设定"],
      conservativeNotes: "命途、阵营称号和游戏数值不直接换算为高阶破坏；大剑、反击、队伍增益与本体承伤分开。"
    },
    sourcePolicy: "HoYoverse官方角色入口与Honkai: Star Rail Wiki是资料入口；高争议剧情或命途表现后续应补任务文本或官方资料。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();
