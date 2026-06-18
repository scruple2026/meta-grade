(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "书剑恩仇录";

  registerWorkSource(WORK, {
    slug: "the-book-and-the-sword",
    originalLanguage: "zh",
    pageLabel: "金庸 Wiki 角色页",
    pageBase: "https://jinyong.fandom.com/zh/wiki/",
    pageLanguage: "zh",
    canonicalLinks: [
      {
        type: "wiki",
        scope: "小说资料入口",
        label: "金庸 Wiki：书剑恩仇录",
        url: "https://jinyong.fandom.com/zh/wiki/Category:%E6%9B%B8%E5%8A%8D%E6%81%A9%E4%BB%87%E9%8C%84",
        lang: "zh",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "用于核对《书剑恩仇录》角色和红花会资料入口；不作为具体量级换算依据。"
      }
    ],
    commonLinks: [
      {
        type: "wiki",
        scope: "红花会资料入口",
        label: "金庸 Wiki：红花会",
        url: "https://jinyong.fandom.com/zh/wiki/%E7%B4%85%E8%8A%B1%E6%9C%83",
        lang: "zh",
        authority: "wiki",
        medium: "wiki",
        claim: "用于交叉核对陈家洛和红花会关系。"
      }
    ],
    scaleEvidenceLinks: [],
    scaleNotes: {
      scope: "当前收录金庸共通 worldbook key/comment 中明确出现的书剑人物：陈家洛。",
      versionPolicy: "按《书剑恩仇录》原作主线记录；红花会总舵主身份、百花错拳、庖丁解牛掌和团队资源分开处理。",
      highRisk: ["红花会", "百花错拳", "庖丁解牛掌", "反清复明", "总舵主"],
      conservativeNotes: "红花会地位、领袖身份和政治行动不直接换算为破坏规模；个人武功仍按金庸低武到中武口径记录。"
    },
    sourcePolicy: "金庸 Wiki 和公开小说条目是入口来源；高争议武功表现后续应补原文回目、版本和章节引用。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();
