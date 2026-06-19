(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "侠客行";

  registerWorkSource(WORK, {
    slug: "ode-to-gallantry",
    originalLanguage: "zh",
    pageLabel: "金庸 Wiki 角色页",
    pageBase: "https://jinyong.fandom.com/zh/wiki/",
    pageLanguage: "zh",
    canonicalLinks: [
      {
        type: "wiki",
        scope: "小说资料入口",
        label: "金庸 Wiki：侠客行",
        url: "https://jinyong.fandom.com/zh/wiki/%E4%BF%A0%E5%AE%A2%E8%A1%8C",
        lang: "zh",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "用于核对《侠客行》作品、长乐帮和侠客岛资料入口；不作为具体量级换算依据。"
      }
    ],
    commonLinks: [
      {
        type: "wiki",
        scope: "角色资料入口",
        label: "金庸 Wiki：貝海石",
        url: "https://jinyong.fandom.com/zh/wiki/%E8%B2%9D%E6%B5%B7%E7%9F%B3",
        lang: "zh",
        authority: "wiki",
        medium: "wiki",
        claim: "用于交叉核对贝海石、长乐帮和侠客行人物关系。"
      }
    ],
    scaleEvidenceLinks: [],
    scaleNotes: {
      scope: "当前收录金庸共通 worldbook key/comment 中明确出现的侠客行人物：贝海石。",
      versionPolicy: "按《侠客行》原作主线记录；长乐帮军师身份、帮会资源、毒药和武学表现分开处理。",
      highRisk: ["长乐帮", "毒药", "帮会资源", "侠客岛"],
      conservativeNotes: "帮会地位、智谋和阴谋不直接换算为破坏规模；个人武功仍按金庸武侠人体、内力和兵刃口径记录。"
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
