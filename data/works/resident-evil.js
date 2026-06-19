(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "Resident Evil";

  registerWorkSource(WORK, {
    slug: "resident-evil",
    originalLanguage: "ja",
    pageLabel: "Resident Evil Wiki 角色页",
    pageBase: "https://residentevil.fandom.com/wiki/",
    pageLanguage: "en",
    canonicalLinks: [{
      type: "official",
      scope: "官方作品入口",
      label: "Capcom: Resident Evil Portal",
      url: "https://www.residentevil.com/",
      lang: "en",
      authority: "official",
      medium: "official-site",
      ratingEvidence: false,
      claim: "用于核对《Resident Evil》官方系列入口；角色面板按公开角色资料和保守口径记录。"
    }],
    commonLinks: [{
      type: "source",
      scope: "作品资料入口",
      label: "Resident Evil Wiki",
      url: "https://residentevil.fandom.com/wiki/Resident_Evil_Wiki",
      lang: "en",
      authority: "wiki",
      medium: "wiki",
      claim: "用于交叉核对角色登场、组织、装备和反生化作战经历。"
    }],
    scaleEvidenceLinks: [],
    scaleNotes: {
      scope: "当前收录缄默之秋 worldbook key/comment 中明确出现的《Resident Evil》主要战斗角色：里昂·S·肯尼迪、艾达·王、吉尔·瓦伦丁。暂不展开全部S.T.A.R.S.、BSAA、Umbrella或B.O.W.长尾角色。",
      versionPolicy: "按主系列公开资料综合记录；具体游戏时期、重武器、反生化装备、病毒感染/抗体和剧情爆发以条件峰值或notes记录，不把装备火力写成本体肉身。",
      highRisk: ["重武器", "火箭筒", "反生化武器", "病毒感染", "抗体", "B.O.W.", "剧情生还"],
      conservativeNotes: "角色名气、主角光环、生还次数和击败B.O.W.不自动提高肉身防御或生命体量；枪械、爆炸物、载具和队友支援与本体面板分开。"
    },
    sourcePolicy: "Capcom官方入口与Resident Evil Wiki是资料入口；具体火力峰值后续可补游戏关卡、官方角色介绍或设定资料。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();
