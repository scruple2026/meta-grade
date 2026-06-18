(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "完美世界";

  registerWorkSource(WORK, {
    slug: "perfect-world",
    originalLanguage: "zh",
    pageLabel: "中文资料入口",
    pageBase: "https://zh.moegirl.org.cn/",
    canonicalLinks: [
      {
        type: "official",
        scope: "正版作品页",
        label: "起点中文网：《完美世界》",
        url: "https://www.qidian.com/book/2952453/",
        lang: "zh",
        authority: "official",
        medium: "publisher",
        ratingEvidence: false,
        claim: "用于确认《完美世界》正版连载入口；起点页面可能触发WAF，角色与阶段再用公开资料交叉核对。"
      }
    ],
    commonLinks: [
      {
        type: "wiki",
        scope: "作品资料入口",
        label: "萌娘百科：《完美世界》",
        url: "https://zh.moegirl.org.cn/%E5%AE%8C%E7%BE%8E%E4%B8%96%E7%95%8C%28%E5%B0%8F%E8%AF%B4%29",
        lang: "zh",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: true,
        claim: "用于核对《完美世界》、作者辰东、主角石昊和高端玄幻作品语境；具体量级仍按争议档处理。"
      }
    ],
    scaleNotes: {
      scope: "当前只收录《道友先上我断后》worldbook key/comment 中出现的石昊/荒天帝；不扩展《完美世界》长尾角色。",
      versionPolicy: "默认按终盘荒天帝阶段记录；幼年石村、下界、上界、仙王等阶段后续可拆 timelinePanels。",
      highRisk: ["荒天帝", "独断万古", "仙帝", "准仙帝", "他化自在法", "宇宙论高端"],
      conservativeNotes: "称号、诗性简介和宇宙论名词不直接推出无限档；高端表现统一标争议并后续补原文卷章。"
    },
    sourcePolicy: "优先使用起点正版入口、出版/动画官方入口和可读公开百科；高端战斗表现后续应补原文卷章或正版章节 citation。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();
