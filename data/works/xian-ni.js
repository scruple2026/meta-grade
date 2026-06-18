(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "仙逆";

  registerWorkSource(WORK, {
    slug: "xian-ni",
    originalLanguage: "zh",
    pageLabel: "中文资料入口",
    pageBase: "https://zh.moegirl.org.cn/",
    canonicalLinks: [
      {
        type: "official",
        scope: "正版作品页",
        label: "起点中文网：《仙逆》",
        url: "https://www.qidian.com/book/1264634/",
        lang: "zh",
        authority: "official",
        medium: "publisher",
        ratingEvidence: false,
        claim: "用于确认《仙逆》正版连载入口；起点页面可能触发WAF，具体量级仍需原文卷章补证。"
      }
    ],
    commonLinks: [
      {
        type: "wiki",
        scope: "作品资料入口",
        label: "萌娘百科：《仙逆》",
        url: "https://zh.moegirl.org.cn/%E4%BB%99%E9%80%86",
        lang: "zh",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: true,
        claim: "用于核对《仙逆》、作者耳根、主角王林和修真高端框架；本站仍按争议档记录终盘量级。"
      }
    ],
    scaleNotes: {
      scope: "当前只收录《道友先上我断后》worldbook key/comment 中出现的王林；不扩展《仙逆》长尾角色。",
      versionPolicy: "默认按终盘王林记录；朱雀星、化凡、古神、仙罡大陆等阶段后续可拆 timelinePanels。",
      highRisk: ["终盘王林", "古神", "本源", "踏天", "修真宇宙论"],
      conservativeNotes: "修真境界、踏天名号和宇宙论描述不直接推出无限档；终盘高端先统一标争议。"
    },
    sourcePolicy: "优先使用起点正版入口和可读公开百科；高端战斗表现后续应补原文卷章或正版章节 citation。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();
