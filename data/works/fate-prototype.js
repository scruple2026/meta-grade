(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "Fate/Prototype";

  registerWorkSource(WORK, {
    slug: "fate-prototype",
    originalLanguage: "ja",
    pageLabel: "TYPE-MOON Wiki 角色页",
    pageBase: "https://typemoon.fandom.com/wiki/",
    pageLanguage: "en",
    canonicalLinks: [],
    commonLinks: [{
      type: "source",
      scope: "作品资料入口",
      label: "TYPE-MOON Wiki: Fate/Prototype",
      url: "https://typemoon.fandom.com/wiki/Fate/Prototype",
      lang: "en",
      authority: "wiki",
      medium: "wiki",
      claim: "作品和角色资料入口；具体量级按角色页、Prototype设定和保守口径记录。"
    }, {
      type: "source",
      scope: "中文资料入口",
      label: "萌娘百科：Fate/Prototype",
      url: "https://zh.moegirl.org.cn/Fate/Prototype",
      lang: "zh",
      authority: "wiki",
      medium: "wiki",
      claim: "中文交叉资料入口；不单独作为高风险量级依据。"
    }],
    scaleEvidenceLinks: [],
    scaleNotes: {
      scope: "当前收录型月 DLC worldbook key/comment 中明确出现、且当前 roster 缺失的 Fate/Prototype 核心人物：沙条爱歌、沙条绫香。亚瑟·潘德拉贡已有 FGO/Prototype 召唤灵基条目，暂不重复。",
      versionPolicy: "按 Fate/Prototype 语境记录；FGO 召唤灵基、苍银碎片和其他外传后续可按需要拆分，不把从者输出直接并入御主本人。",
      highRisk: ["根源", "Beast", "圣杯", "从者契约", "令咒", "Prototype", "外源峰值"],
      conservativeNotes: "根源接续、Beast关联、圣杯/从者契约和剧情危险性不自动抬高日常肉身、防御或速度；外源、仪式和契约支援用峰值标签与 notes 分开记录。"
    },
    sourcePolicy: "TYPE-MOON Wiki 与萌娘百科是资料入口；高争议根源、Beast和圣杯峰值后续应补 Prototype 原设、苍银碎片、设定书或官方资料。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();
