(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "碧血剑";

  registerWorkSource(WORK, {
    slug: "sword-stained-with-royal-blood",
    originalLanguage: "zh",
    pageLabel: "碧血剑 角色页",
    pageBase: "https://jinyong.fandom.com/zh/wiki/",
    pageLanguage: "zh",
    canonicalLinks: [
      {
        type: "wiki",
        scope: "小说资料入口",
        label: "金庸 Wiki：碧血剑分类",
        url: "https://jinyong.fandom.com/zh/wiki/Category:%E7%A2%A7%E8%A1%80%E5%8A%8D",
        lang: "zh",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "用于核对《碧血剑》角色和作品资料入口；不作为具体量级换算依据。"
      }
    ],
    commonLinks: [
      {
        type: "wiki",
        scope: "角色入口",
        label: "金庸 Wiki：袁承志",
        url: "https://jinyong.fandom.com/zh/wiki/%E8%A2%81%E6%89%BF%E5%BF%97",
        lang: "zh",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "用于核对袁承志身份、华山派和金蛇剑相关资料入口。"
      }
    ],
    scaleEvidenceLinks: [],
    scaleNotes: {
      scope: "当前收录金庸共通 worldbook key/comment 中明确出现的《碧血剑》主要人物：袁承志。",
      versionPolicy: "按《碧血剑》主线后期记录。华山派武功、金蛇剑法、金蛇剑装备和反清行动分开处理，不把政治影响力折算为破坏规模。",
      highRisk: ["华山派武功", "金蛇剑法", "金蛇剑", "混元功", "反清行动"],
      conservativeNotes: "《碧血剑》整体仍按金庸低武到中武口径记录；江湖名声、统率义军和装备名号不直接抬高主面板。"
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
