(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "凡人修仙传";

  registerWorkSource(WORK, {
    slug: "record-of-mortal-cultivation",
    originalLanguage: "zh",
    pageLabel: "中文资料入口",
    pageBase: "https://zh.moegirl.org.cn/",
    canonicalLinks: [
      {
        type: "official",
        scope: "正版作品页",
        label: "起点中文网：《凡人修仙传》",
        url: "https://www.qidian.com/book/107580/",
        lang: "zh",
        authority: "official",
        medium: "publisher",
        ratingEvidence: false,
        claim: "用于确认《凡人修仙传》正版连载入口；起点页面可能触发WAF，角色与阶段再用公开资料交叉核对。"
      }
    ],
    commonLinks: [
      {
        type: "wiki",
        scope: "作品资料入口",
        label: "维基百科：《凡人修仙传》",
        url: "https://zh.wikipedia.org/wiki/%E5%87%A1%E4%BA%BA%E4%BF%AE%E4%BB%99%E4%BC%A0",
        lang: "zh",
        authority: "cross-reference",
        medium: "wiki",
        ratingEvidence: false,
        claim: "用于核对作者、连载网站、主角韩立与修仙故事框架；不单独作为破坏档依据。"
      },
      {
        type: "wiki",
        scope: "角色资料入口",
        label: "萌娘百科：韩立",
        url: "https://zh.moegirl.org.cn/%E9%9F%A9%E7%AB%8B",
        lang: "zh",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: true,
        claim: "用于核对韩立、大罗金仙阶段、掌天瓶和仙界活动范围；当前高端档位仍标宇宙论依赖与争议。"
      }
    ],
    scaleNotes: {
      scope: "当前只收录《道友先上我断后》worldbook key/comment 中出现的韩立；不扩展凡人修仙传长尾角色。",
      versionPolicy: "默认按仙界篇后期/大罗金仙阶段记录；人界、灵界、飞升前阶段后续可拆 timelinePanels。",
      highRisk: ["大罗金仙", "时间法则", "掌天瓶", "仙界篇", "跨界飞升"],
      conservativeNotes: "修为、仙界身份和外号不直接换算为无限档；法则、遁速和掌天瓶资源需逐章补证后再细调。"
    },
    sourcePolicy: "优先使用起点正版入口、授权/出版入口和可读公开百科；高端战斗表现后续应补原文卷章或正版章节 citation。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();
