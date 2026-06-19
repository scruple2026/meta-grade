(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "Fate/hollow ataraxia";

  registerWorkSource(WORK, {
    slug: "fate-hollow-ataraxia",
    originalLanguage: "ja",
    pageLabel: "TYPE-MOON Wiki 角色页",
    pageBase: "https://typemoon.fandom.com/wiki/",
    pageLanguage: "en",
    canonicalLinks: [
      {
        type: "official",
        scope: "正版作品页",
        label: "Steam：Fate/hollow ataraxia REMASTERED",
        url: "https://store.steampowered.com/app/3343760/Fatehollow_ataraxia_REMASTERED/",
        lang: "en",
        authority: "licensed",
        medium: "publisher",
        ratingEvidence: false,
        claim: "用于核对 Fate/hollow ataraxia REMASTERED 正版作品入口；不作为单独战力量级依据。"
      }
    ],
    commonLinks: [
      {
        type: "wiki",
        scope: "作品资料入口",
        label: "TYPE-MOON Wiki：Fate/hollow ataraxia",
        url: "https://typemoon.fandom.com/wiki/Fate/hollow_ataraxia",
        lang: "en",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "作品和角色资料入口；具体量级按角色页、hollow ataraxia 语境和保守口径记录。"
      }
    ],
    scaleEvidenceLinks: [],
    scaleNotes: {
      scope: "当前收录型月 DLC worldbook key/comment 中明确出现且属于 Fate/hollow ataraxia 核心新增人物的巴泽特和卡莲。本作以外的 FGO/Prisma 灵基或世界线版本不并入本面板。",
      versionPolicy: "按 Fate/hollow ataraxia 本作语境记录；FGO 召唤灵基、Prisma 世界线、从者输出、圣杯循环和外源条件必须分开。",
      highRisk: ["Fragarach", "圣杯循环", "Avenger", "圣骸布", "令咒", "教会代行者"],
      conservativeNotes: "Fragarach 属于条件型反击宝具，不直接等同大范围破坏；教会身份、痛觉体质、圣杯循环和从者契约不自动抬高本体攻防。"
    },
    sourcePolicy: "TYPE-MOON Wiki 和正版作品页是资料入口；Fragarach、圣杯循环和结局相关峰值后续应补原作场景、设定书或官方资料。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();
