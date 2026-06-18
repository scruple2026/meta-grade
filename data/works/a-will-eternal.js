(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "一念永恒";

  registerWorkSource(WORK, {
    slug: "a-will-eternal",
    originalLanguage: "zh",
    pageLabel: "中文资料入口",
    pageBase: "https://zh.moegirl.org.cn/",
    canonicalLinks: [
      {
        type: "official",
        scope: "正版作品页",
        label: "起点中文网：《一念永恒》",
        url: "https://www.qidian.com/book/1003354631/",
        lang: "zh",
        authority: "official",
        medium: "publisher",
        ratingEvidence: false,
        claim: "用于确认《一念永恒》正版连载入口；起点页面可能触发WAF，具体量级仍需原文卷章补证。"
      }
    ],
    commonLinks: [
      {
        type: "wiki",
        scope: "作品资料入口",
        label: "萌娘百科：《一念永恒》",
        url: "https://zh.moegirl.org.cn/%E4%B8%80%E5%BF%B5%E6%B0%B8%E6%81%92",
        lang: "zh",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: true,
        claim: "用于核对《一念永恒》、作者耳根、白小纯主角身份和动画/小说资料入口；终盘境界按争议档记录。"
      }
    ],
    scaleNotes: {
      scope: "当前只收录《道友先上我断后》worldbook key/comment 中出现的白小纯；不扩展《一念永恒》长尾角色。",
      versionPolicy: "默认按终盘白小纯记录；灵溪宗、血溪宗、通天世界、永恒仙域等阶段后续可拆 timelinePanels。",
      highRisk: ["不死长生功", "永恒境", "通天世界", "永恒仙域", "炼药与丹炉"],
      conservativeNotes: "永恒名号、境界和寿命叙述不直接推出无限攻击或无限生命；终盘高端先统一标争议。"
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
