(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "凡人修仙，谁能比我极阴更阴！";

  registerWorkSource(WORK, {
    slug: "who-can-be-more-yin",
    originalLanguage: "zh",
    pageLabel: "公开网文资料入口",
    pageBase: "https://fanqienovel.com/search?keyword=",
    pageLanguage: "zh",
    canonicalLinks: [
      {
        type: "source",
        scope: "公开搜索入口",
        label: "番茄小说搜索：凡人修仙，谁能比我极阴更阴！",
        url: "https://fanqienovel.com/search?keyword=%E5%87%A1%E4%BA%BA%E4%BF%AE%E4%BB%99%EF%BC%8C%E8%B0%81%E8%83%BD%E6%AF%94%E6%88%91%E6%9E%81%E9%98%B4%E6%9B%B4%E9%98%B4%EF%BC%81",
        lang: "zh",
        authority: "source",
        medium: "other",
        ratingEvidence: false,
        claim: "用于核对作品标题和公开网文入口；当前不作为具体量级依据。"
      }
    ],
    commonLinks: [],
    scaleEvidenceLinks: [],
    scaleNotes: {
      scope: "当前只收录《道友先上我断后》worldbook key/comment 中出现且可公开检索的主角宋文；不扩展该作品长尾角色。",
      versionPolicy: "按公开资料可确认的主线综合期占位记录；具体境界、法宝和战斗表现后续需补作品章节或可靠资料入口。",
      highRisk: ["魔修", "极阴", "修仙境界", "法宝"],
      conservativeNotes: "标题、修仙题材、魔修身份和 worldbook 关键词不直接换算为高破坏档；资料不足时保持无资料或低档占位。"
    },
    sourcePolicy: "公开搜索/作品入口只作为姓名和作品线索；高端战斗表现后续应补正版章节、平台页或可靠公开资料。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();
