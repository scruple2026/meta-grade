(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "Fate/Zero";

  registerWorkSource(WORK, {
    slug: "fate-zero",
    originalLanguage: "ja",
    pageLabel: "TYPE-MOON Wiki 角色页",
    pageBase: "https://typemoon.fandom.com/wiki/",
    pageLanguage: "en",
    canonicalLinks: [{
      type: "official",
      scope: "日文官方入口",
      label: "Fate/Zero 官方站",
      url: "https://www.fate-zero.jp/",
      lang: "ja",
      authority: "official",
      medium: "official-site",
      ratingEvidence: false,
      claim: "用于核对 Fate/Zero 作品入口；不作为单独量级换算依据。"
    }, {
      type: "official",
      scope: "官方角色入口",
      label: "Fate/Zero Characters",
      url: "https://www.fate-zero.jp/characters/index.html",
      lang: "ja",
      authority: "official",
      medium: "official-site",
      ratingEvidence: false,
      claim: "用于核对第四次圣杯战争主要御主、从者和相关角色。"
    }],
    commonLinks: [{
      label: "TYPE-MOON Wiki：Fate/Zero",
      url: "https://typemoon.fandom.com/wiki/Fate/Zero",
      claim: "作品和角色资料入口；具体量级按角色页、动画/小说表现和保守口径记录。"
    }],
    scaleEvidenceLinks: [],
    scaleNotes: {
      scope: "当前收录 Fate/Zero worldbook key/comment 中的主角阵营与终局对立核心：卫宫切嗣、阿尔托莉雅、爱丽丝菲尔、言峰绮礼、吉尔伽美什和韦伯；其他御主/从者、亲属和支援人员不再按名字池自动扩入。",
      versionPolicy: "按第四次圣杯战争记录；Fate/stay night、FGO、二世事件簿等后续时间线不并入本作品面板。宝具、令咒、供魔、狂化、王之军势、怪物召唤和小圣杯状态均作为条件峰值或特殊项处理。",
      highRisk: ["宝具", "王之财宝", "Ea", "Excalibur", "王之军势", "For Someone's Glory", "Knight of Owner", "Prelati's Spellbook", "令咒", "小圣杯"],
      conservativeNotes: "从者职阶、英灵传说、御主身份和圣杯战争战术价值不自动抬高主面板；缺少具体破坏范围时，白刃战、魔术、召唤物、结界和规则效果分开记录。"
    },
    sourcePolicy: "官方角色入口与 TYPE-MOON Wiki 是资料入口；高争议宝具和大规模场景后续应补小说卷章、动画集数、设定集或官方资料。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();
