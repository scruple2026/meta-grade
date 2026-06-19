(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "诛仙";

  registerWorkSource(WORK, {
    slug: "zhu-xian",
    originalLanguage: "zh",
    pageLabel: "中文资料入口",
    pageBase: "https://zh.moegirl.org.cn/",
    canonicalLinks: [
      {
        type: "source",
        scope: "作品出版资料入口",
        label: "Wikipedia: Zhu Xian (novel)",
        url: "https://en.wikipedia.org/wiki/Zhu_Xian_(novel)",
        lang: "en",
        authority: "cross-reference",
        medium: "wiki",
        ratingEvidence: false,
        claim: "用于核对《诛仙》作者、出版/连载背景和主要角色列表；不直接作为跨界量级依据。"
      }
    ],
    commonLinks: [
      {
        type: "wiki",
        scope: "作品资料入口",
        label: "萌娘百科：《诛仙》",
        url: "https://zh.moegirl.org.cn/%E8%AF%9B%E4%BB%99",
        lang: "zh",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "用于核对《诛仙》主要角色入口；陆雪琪定级仍需原文卷章或可靠角色资料补证。"
      }
    ],
    scaleEvidenceLinks: [],
    scaleNotes: {
      scope: "当前只收录《道友先上我断后》worldbook key/comment 中出现、且公开资料能确认是《诛仙》主要角色的陆雪琪；不扩展《诛仙》长尾角色。",
      versionPolicy: "默认按小说主线陆雪琪记录；七脉会武、正魔大战、后期修为变化和改编作品版本后续可拆 timelinePanels。",
      highRisk: ["天琊神剑", "神剑御雷真诀", "青云门高阶道法", "改编版本差异"],
      conservativeNotes: "女主角、青云门翘楚、法宝名号和修真境界不直接推出城市级以上破坏或高速档；缺少原文章节时先作保守占位。"
    },
    sourcePolicy: "作品页是入口来源；高争议峰值后续应补小说原文卷章、正版章节 citation 或可靠角色资料链接。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();
