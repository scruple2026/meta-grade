(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "心理测量者";

  registerWorkSource(WORK, {
    slug: "psycho-pass",
    originalLanguage: "ja",
    pageLabel: "Psycho-Pass Wiki 角色页",
    pageBase: "https://psychopass.fandom.com/wiki/",
    pageLanguage: "en",
    canonicalLinks: [
      {
        type: "official",
        scope: "系列官方入口",
        label: "PSYCHO-PASS サイコパス 公式サイト",
        url: "https://psycho-pass.com/",
        lang: "ja",
        authority: "official",
        medium: "official-site",
        ratingEvidence: false,
        claim: "用于核对PSYCHO-PASS系列官方入口；本站按第一季西比拉系统审判篇角色表现保守录入。"
      },
      {
        type: "official",
        scope: "授权游戏角色页",
        label: "PSYCHO-PASS: Mandatory Happiness - CHARACTER",
        url: "https://nisamerica.com/psycho-pass/chara/",
        lang: "en",
        authority: "licensed",
        medium: "official-site",
        ratingEvidence: false,
        claim: "用于核对第一季公安一系核心成员角色入口；游戏设定不自动并入动画第一季战力。"
      }
    ],
    commonLinks: [
      {
        label: "Psycho-Pass Wiki 角色总表",
        url: "https://psychopass.fandom.com/wiki/Category:Characters"
      }
    ],
    scaleNotes: {
      scope: "当前收录第一季主角团与核心反派：常守朱、狡啮慎也、宜野座伸元和槙岛圣护；公安支援成员、标本事件人物和西比拉长尾不再扩入。",
      versionPolicy: "第一季、剧场版、Sinners of the System、第三季和Providence不互相混入；Dominator模式、组织权限和西比拉系统资源必须与个人肉身分开。",
      highRisk: ["Dominator", "犯罪系数", "免罪体质", "西比拉系统", "记忆/人格评估", "西比拉核心", "义体替换", "系统渗透", "标本事件"],
      conservativeNotes: "PSYCHO-PASS角色多数是现实/近未来警用武装水平；Dominator分解执行、系统权限和免罪体质不自动提升个人物理防御或速度。"
    },
    sourcePolicy: "官方/授权角色页和Psycho-Pass Wiki是入口来源；具体战斗表现后续可补动画集数。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();
