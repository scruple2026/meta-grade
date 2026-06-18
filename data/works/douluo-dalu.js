(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "斗罗大陆";

  registerWorkSource(WORK, {
    slug: "douluo-dalu",
    originalLanguage: "zh",
    pageLabel: "中文资料入口",
    pageBase: "https://zh.moegirl.org.cn/",
    canonicalLinks: [
      {
        type: "official",
        scope: "正版作品页",
        label: "起点中文网：《斗罗大陆》",
        url: "https://www.qidian.com/book/1115277/",
        lang: "zh",
        authority: "official",
        medium: "publisher",
        ratingEvidence: false,
        claim: "用于确认《斗罗大陆》正版连载入口；起点页面可能触发WAF，具体量级仍需原文卷章补证。"
      }
    ],
    commonLinks: [
      {
        type: "wiki",
        scope: "作品资料入口",
        label: "萌娘百科：《斗罗大陆》第一部",
        url: "https://zh.moegirl.org.cn/%E6%96%97%E7%BD%97%E5%A4%A7%E9%99%86%28%E7%AC%AC%E4%B8%80%E9%83%A8%29",
        lang: "zh",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: true,
        claim: "用于核对《斗罗大陆》第一部、作者唐家三少、起点连载和唐三主角资料入口。"
      },
      {
        type: "wiki",
        scope: "角色资料入口",
        label: "萌娘百科：唐三",
        url: "https://zh.moegirl.org.cn/%E5%94%90%E4%B8%89",
        lang: "zh",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: true,
        claim: "用于核对唐三、双生武魂、海神/修罗神相关能力和斗罗大陆系列主角身份。"
      }
    ],
    scaleNotes: {
      scope: "当前只收录《道友先上我断后》worldbook key/comment 中出现的唐三；不扩展史莱克七怪和斗罗系列长尾角色。",
      versionPolicy: "默认按斗罗大陆第一部终盘双神位唐三记录；早期唐门、魂师学院、封号斗罗前阶段后续可拆 timelinePanels。",
      highRisk: ["双生武魂", "海神", "修罗神", "神界", "魂骨/魂环"],
      conservativeNotes: "神位、神界身份和系列后续设定不直接换算为行星级或无限档；默认先按第一部终盘保守记录。"
    },
    sourcePolicy: "优先使用起点正版入口和可读公开百科；高端战斗表现后续应补原文卷章或出版 citation。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();
