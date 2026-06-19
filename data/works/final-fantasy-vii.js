(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "Final Fantasy VII";

  registerWorkSource(WORK, {
    slug: "final-fantasy-vii",
    originalLanguage: "ja",
    pageLabel: "Final Fantasy Wiki 角色页",
    pageBase: "https://finalfantasy.fandom.com/wiki/",
    pageLanguage: "en",
    canonicalLinks: [{
      type: "official",
      scope: "官方角色页",
      label: "Square Enix: Tifa Lockhart",
      url: "https://www.square-enix.com/ffvii/en-us/games/rebirth/characters/tifa-lockhart/",
      lang: "en",
      authority: "official",
      medium: "official-site",
      ratingEvidence: false,
      claim: "用于核对蒂法在《Final Fantasy VII Rebirth》官方角色介绍中的身份与角色定位。"
    }],
    commonLinks: [{
      type: "wiki",
      scope: "作品资料入口",
      label: "Final Fantasy Wiki: Final Fantasy VII",
      url: "https://finalfantasy.fandom.com/wiki/Final_Fantasy_VII",
      lang: "en",
      authority: "wiki",
      medium: "wiki",
      claim: "用于交叉核对作品、角色登场和战斗系统资料。"
    }],
    scaleEvidenceLinks: [],
    scaleNotes: {
      scope: "当前收录缄默之秋 worldbook key/comment 中明确出现的蒂法·洛克哈特。暂不展开《Final Fantasy VII》全主角团、召唤兽或反派长尾。",
      versionPolicy: "按《Final Fantasy VII》重制线/主线资料综合记录；Materia、Limit Break、队友协同和剧情演出作为条件峰值或notes说明，不自动并入常态。",
      highRisk: ["Materia", "Limit Break", "召唤兽", "剧情演出", "魔晄"],
      conservativeNotes: "JRPG战斗数值、召唤兽动画和回合制演出不直接换算为城市级以上破坏；徒手格斗、武器、Materia和战斗系统资源分开。"
    },
    sourcePolicy: "Square Enix官方角色页与Final Fantasy Wiki是资料入口；高争议输出后续应补原作任务、战斗场景或官方资料书证据。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();
