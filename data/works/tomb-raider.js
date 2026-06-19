(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "Tomb Raider";

  registerWorkSource(WORK, {
    slug: "tomb-raider",
    originalLanguage: "en",
    pageLabel: "Tomb Raider Wiki 角色页",
    pageBase: "https://tombraider.fandom.com/wiki/",
    pageLanguage: "en",
    canonicalLinks: [{
      type: "official",
      scope: "官方系列入口",
      label: "Tomb Raider Official Website",
      url: "https://www.tombraider.com/",
      lang: "en",
      authority: "official",
      medium: "official-site",
      ratingEvidence: false,
      claim: "用于核对《Tomb Raider》官方系列入口与劳拉·克劳馥的系列核心地位。"
    }],
    commonLinks: [{
      type: "wiki",
      scope: "作品资料入口",
      label: "Tomb Raider Wiki",
      url: "https://tombraider.fandom.com/wiki/Tomb_Raider_Wiki",
      lang: "en",
      authority: "wiki",
      medium: "wiki",
      claim: "用于交叉核对劳拉的考古、求生、枪械、攀爬和冒险经历。"
    }],
    scaleEvidenceLinks: [],
    scaleNotes: {
      scope: "当前收录缄默之秋 worldbook key/comment 中明确出现的劳拉·克劳馥。暂不展开各代盟友、反派、超自然遗物或电影版角色。",
      versionPolicy: "按游戏系列综合劳拉的稳定冒险者能力记录；车辆、遗物、剧情机关和环境坍塌只作为条件峰值或notes。",
      highRisk: ["古代遗物", "载具", "环境机关", "爆炸物", "剧情坍塌"],
      conservativeNotes: "解谜、机关触发、遗迹坍塌和剧情生还不自动提高本体攻击、防御或生命体量；枪械与弓箭作为装备峰值。"
    },
    sourcePolicy: "官方系列入口与Tomb Raider Wiki是资料入口；具体装备峰值后续可补游戏关卡或官方设定资料。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();
