(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "学园默示录 HIGHSCHOOL OF THE DEAD";

  registerWorkSource(WORK, {
    slug: "highschool-of-the-dead",
    originalLanguage: "ja",
    pageLabel: "Highschool of the Dead Wiki 角色页",
    pageBase: "https://highschoolofthedead.fandom.com/wiki/",
    pageLanguage: "en",
    canonicalLinks: [{
      type: "official",
      scope: "英文授权出版入口",
      label: "Yen Press: Highschool of the Dead",
      url: "https://yenpress.com/series/highschool-of-the-dead",
      lang: "en",
      authority: "licensed",
      medium: "publisher",
      ratingEvidence: false,
      claim: "用于核对《Highschool of the Dead》英文授权出版入口；不作为单独量级换算依据。"
    }],
    commonLinks: [{
      type: "source",
      scope: "作品资料入口",
      label: "Highschool of the Dead Wiki",
      url: "https://highschoolofthedead.fandom.com/wiki/Highschool_of_the_Dead_Wiki",
      lang: "en",
      authority: "wiki",
      medium: "wiki",
      claim: "用于交叉核对角色、组织、武器和剧情阶段。"
    }, {
      type: "source",
      scope: "作品资料入口",
      label: "Wikipedia: Highschool of the Dead",
      url: "https://en.wikipedia.org/wiki/Highschool_of_the_Dead",
      lang: "en",
      authority: "wiki",
      medium: "wiki",
      claim: "作品概况入口；具体角色面板按角色页和保守口径记录。"
    }],
    scaleEvidenceLinks: [],
    scaleNotes: {
      scope: "当前收录缄默之秋 worldbook key/comment 中明确出现的藤美幸存者主角团：小室孝、毒岛冴子、宫本丽、平野耕太、高城沙耶和鞠川静香；长尾幸存者、据点人员和普通感染者不扩入。",
      versionPolicy: "按原作/动画主线的丧尸爆发期记录；枪械、刀剑、长枪、车辆、巴士和临时物资均作为装备/环境峰值，不写成本体肉身。",
      highRisk: ["枪械", "刀剑", "长枪", "车辆", "丧尸潮", "生还经历", "医疗支援"],
      conservativeNotes: "主角团在丧尸爆发中生还不等同超人肉身、防御或自愈；攻击峰值主要来自武器、弹药、车辆和环境利用。"
    },
    sourcePolicy: "Yen Press、作品资料入口和角色wiki是入口来源；具体战斗表现后续可补漫画卷章、动画集数或设定资料。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();
