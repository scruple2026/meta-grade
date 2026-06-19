(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "佐贺偶像是传奇 Zombie Land Saga";

  registerWorkSource(WORK, {
    slug: "zombie-land-saga",
    originalLanguage: "ja",
    pageLabel: "Zombie Land Saga Wiki 角色页",
    pageBase: "https://zombieland-saga.fandom.com/wiki/",
    pageLanguage: "en",
    canonicalLinks: [{
      type: "official",
      scope: "动画官方角色入口",
      label: "Zombie Land Saga: Characters",
      url: "https://zombielandsaga.com/character/",
      lang: "ja",
      authority: "official",
      medium: "official-site",
      ratingEvidence: false,
      claim: "用于核对《佐贺偶像是传奇》动画官方角色入口。"
    }],
    commonLinks: [{
      type: "wiki",
      scope: "作品资料入口",
      label: "Zombie Land Saga Wiki",
      url: "https://zombieland-saga.fandom.com/wiki/Zombie_Land_Saga_Wiki",
      lang: "en",
      authority: "wiki",
      medium: "wiki",
      claim: "用于交叉核对弗兰秀秀成员、丧尸身份、偶像活动和主要关系。"
    }],
    scaleEvidenceLinks: [],
    scaleNotes: {
      scope: "当前收录缄默之秋 worldbook key/comment 中明确出现的弗兰秀秀/佐贺偶像主要角色：源樱、水野爱、绀野纯子、夕雾、巽幸太郎。",
      versionPolicy: "按动画公开资料综合记录；丧尸身份、不死性、舞台演出和喜剧夸张不直接并入攻击、防御或速度。",
      highRisk: ["丧尸身份", "不死性", "舞台事故", "喜剧夸张演出"],
      conservativeNotes: "Franchouchou成员不是战斗角色；丧尸身体写入生命体量、弱点和特殊项，主攻击/速度保持普通人低档。"
    },
    sourcePolicy: "官方角色入口和Zombie Land Saga Wiki是资料入口；丧尸状态用于说明生死条件，不作为高战力默认值。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();
