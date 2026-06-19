(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "名侦探柯南";

  registerWorkSource(WORK, {
    slug: "detective-conan",
    originalLanguage: "ja",
    pageLabel: "Detective Conan World 角色页",
    pageBase: "https://www.detectiveconanworld.com/wiki/",
    pageLanguage: "en",
    canonicalLinks: [{
      type: "official",
      scope: "动画官方角色入口",
      label: "YTV: 名探偵コナン キャラクター",
      url: "https://www.ytv.co.jp/conan/character/",
      lang: "ja",
      authority: "official",
      medium: "official-site",
      ratingEvidence: false,
      claim: "用于核对《名侦探柯南》动画官方角色入口。"
    }, {
      type: "official",
      scope: "小学馆角色入口",
      label: "WEB Sunday: 名探偵コナン キャラクター",
      url: "https://websunday.net/conan100/character/",
      lang: "ja",
      authority: "official",
      medium: "official-site",
      ratingEvidence: false,
      claim: "用于核对《名侦探柯南》小学馆官方角色入口。"
    }],
    commonLinks: [{
      type: "wiki",
      scope: "作品资料入口",
      label: "Detective Conan World Wiki",
      url: "https://www.detectiveconanworld.com/wiki/Detective_Conan_Wiki",
      lang: "en",
      authority: "wiki",
      medium: "wiki",
      claim: "用于交叉核对角色身份、装备、警察职阶和主要事件。"
    }],
    scaleEvidenceLinks: [],
    scaleNotes: {
      scope: "当前收录缄默之秋 worldbook key/comment 中明确出现的柯南组主角核心：江户川柯南、毛利兰和毛利小五郎；警视厅支援人物和案件长尾不扩入。",
      versionPolicy: "按主线综合记录；侦探道具、麻醉针、脚力增强鞋、枪械和车辆属于装备/外部资源峰值，不并入本体常态。",
      highRisk: ["侦探道具", "麻醉针", "脚力增强鞋", "枪械", "车辆", "剧情生还"],
      conservativeNotes: "推理能力、案件主角地位、警察职阶和格斗名声不自动提高攻击、防御或生命体量；战术/推理与身体面板分开。"
    },
    sourcePolicy: "YTV、WEB Sunday和Detective Conan World是资料入口；具体格斗或装备峰值后续可补集数/漫画话数。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();
