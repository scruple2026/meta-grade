(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "鹿鼎记";

  registerWorkSource(WORK, {
    slug: "the-deer-and-the-cauldron",
    originalLanguage: "zh",
    pageLabel: "金庸 Wiki 角色页",
    pageBase: "https://jinyong.fandom.com/zh/wiki/",
    pageLanguage: "zh",
    canonicalLinks: [
      {
        type: "wiki",
        scope: "小说资料入口",
        label: "金庸 Wiki：鹿鼎记",
        url: "https://jinyong.fandom.com/zh/wiki/Category:%E9%B9%BF%E9%BC%8E%E8%A8%98",
        lang: "zh",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "用于核对《鹿鼎记》角色和阵营资料入口；不作为具体量级换算依据。"
      }
    ],
    commonLinks: [
      {
        type: "wiki",
        scope: "小说资料入口",
        label: "金庸 Wiki：鹿鼎记",
        url: "https://jinyong.fandom.com/zh/wiki/%E9%B9%BF%E9%BC%8E%E8%A8%98",
        lang: "zh",
        authority: "wiki",
        medium: "wiki",
        claim: "用于交叉核对韦小宝、陈近南和鹿鼎记人物关系。"
      }
    ],
    scaleEvidenceLinks: [],
    scaleNotes: {
      scope: "当前收录金庸共通 worldbook key/comment 中明确出现的鹿鼎记人物：韦小宝、陈近南。",
      versionPolicy: "按《鹿鼎记》原作主线记录；韦小宝个人肉身、宝衣、火器、匕首、毒药和政治资源必须分开，不把朝廷/天地会资源并入本人常态攻击。",
      highRisk: ["火枪", "匕首", "宝衣", "毒药", "天地会", "朝廷资源", "反清复明"],
      conservativeNotes: "《鹿鼎记》个人战斗更偏低武、装备、机变和权势资源；政治身份、官职、帮会地位不直接抬高主面板。"
    },
    sourcePolicy: "金庸 Wiki 和公开小说条目是入口来源；装备、火器和毒药峰值后续应补原文回目引用。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();
