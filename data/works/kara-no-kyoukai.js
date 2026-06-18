(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "空之境界";

  registerWorkSource(WORK, {
    slug: "kara-no-kyoukai",
    originalLanguage: "ja",
    pageLabel: "空之境界 角色页",
    pageBase: "https://typemoon.fandom.com/wiki/",
    pageLanguage: "en",
    canonicalLinks: [
      {
        type: "wiki",
        scope: "作品资料入口",
        label: "TYPE-MOON Wiki：Kara no Kyoukai",
        url: "https://typemoon.fandom.com/wiki/Kara_no_Kyoukai",
        lang: "en",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "用于核对《空之境界》作品、主要角色和世界观入口；不作为具体量级换算依据。"
      }
    ],
    commonLinks: [
      {
        type: "wiki",
        scope: "角色入口",
        label: "TYPE-MOON Wiki：Shiki Ryougi",
        url: "https://typemoon.fandom.com/wiki/Shiki_Ryougi",
        lang: "en",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "用于核对两仪式身份、直死魔眼和空境本篇资料入口。"
      }
    ],
    scaleEvidenceLinks: [],
    scaleNotes: {
      scope: "当前收录型月 DLC worldbook key/comment 中明确出现的《空之境界》核心人物：两仪式、黑桐干也和苍崎橙子。",
      versionPolicy: "按《空之境界》本篇语境记录；FGO 两仪式 Assassin/Saber 灵基不并入本篇面板。直死魔眼、根源连接、人偶备体和工房资源必须作为特殊权能或条件峰值处理。",
      highRisk: ["直死魔眼", "根源连接", "两仪式(Saber)", "两仪式(Assassin)", "人偶备体", "魔术工房", "境界记录"],
      conservativeNotes: "型月规则系能力不自动折算为破坏规模；能杀死/切断概念或弱点，不等于具备同范围爆破、承伤或速度。普通人角色仍按普通人面板记录。"
    },
    sourcePolicy: "TYPE-MOON Wiki 是入口来源；高争议机制后续应补日文原作小说、剧场版、设定集或官方资料引用。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();
