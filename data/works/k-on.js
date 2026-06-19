(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "轻音少女 K-ON!";

  registerWorkSource(WORK, {
    slug: "k-on",
    originalLanguage: "ja",
    pageLabel: "K-ON! Wiki 角色页",
    pageBase: "https://k-on.fandom.com/wiki/",
    pageLanguage: "en",
    canonicalLinks: [{
      type: "official",
      scope: "动画官方角色入口",
      label: "TBS: K-ON! Character",
      url: "https://www.tbs.co.jp/anime/k-on/k-on_tv/chara/chara.html",
      lang: "ja",
      authority: "official",
      medium: "official-site",
      ratingEvidence: false,
      claim: "用于核对《K-ON!》动画官方角色入口。"
    }],
    commonLinks: [{
      type: "wiki",
      scope: "作品资料入口",
      label: "K-ON! Wiki",
      url: "https://k-on.fandom.com/wiki/K-ON!_Wiki",
      lang: "en",
      authority: "wiki",
      medium: "wiki",
      claim: "用于交叉核对轻音部成员、乐器、学校和主要关系。"
    }],
    scaleEvidenceLinks: [],
    scaleNotes: {
      scope: "当前收录缄默之秋 worldbook key/comment 中明确出现的樱丘女子高中相关主要角色：平泽唯、秋山澪、田井中律、琴吹紬、平泽忧。",
      versionPolicy: "按动画/漫画公开资料综合记录；乐器、舞台道具和日常夸张演出只作为低档装备/喜剧标签，不转化为战斗能力。",
      highRisk: ["日常夸张演出", "乐器", "舞台道具"],
      conservativeNotes: "这是非战斗日常作品，主要角色身份不等于战斗面板；全部按普通高中生或生活道具峰值记录。"
    },
    sourcePolicy: "TBS官方角色入口和K-ON! Wiki是资料入口；非战斗角色只保留低档面板和资料追踪。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();
