(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "鲁邦三世";

  registerWorkSource(WORK, {
    slug: "lupin-iii",
    originalLanguage: "ja",
    pageLabel: "Lupin III Wiki 角色页",
    pageBase: "https://lupin.fandom.com/wiki/",
    pageLanguage: "en",
    canonicalLinks: [{
      type: "official",
      scope: "动画官方角色入口",
      label: "Lupin III Part 6: Characters",
      url: "https://lupin-3rd.net/anime/part6/character/",
      lang: "ja",
      authority: "official",
      medium: "official-site",
      ratingEvidence: false,
      claim: "用于核对《鲁邦三世》动画官方角色入口；直连可能因站点策略不可读。"
    }],
    commonLinks: [{
      type: "wiki",
      scope: "作品资料入口",
      label: "Lupin III Wiki",
      url: "https://lupin.fandom.com/wiki/Lupin_III_Wiki",
      lang: "en",
      authority: "wiki",
      medium: "wiki",
      claim: "用于交叉核对鲁邦、峰不二子、石川五右卫门的身份、装备和主要能力。"
    }],
    scaleEvidenceLinks: [],
    scaleNotes: {
      scope: "当前收录缄默之秋 worldbook key/comment 中明确出现的鲁邦组主要角色：鲁邦三世、峰不二子、石川五右卫门。",
      versionPolicy: "按系列综合记录；枪械、交通工具、斩铁剑、机关和抢劫准备属于装备/准备峰值，不并入本体肉身。",
      highRisk: ["斩铁剑", "枪械", "载具", "机关", "变装", "剧情夸张演出"],
      conservativeNotes: "怪盗名声、搞笑演出、夸张逃脱和斩铁剑切割不自动提高防御或生命体量；装备峰值与本体面板分开。"
    },
    sourcePolicy: "官方角色入口和Lupin III Wiki是资料入口；高争议切割表现后续应补具体集数/漫画章节。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();
