(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "飞狐外传";

  registerWorkSource(WORK, {
    slug: "the-young-flying-fox",
    originalLanguage: "zh",
    pageLabel: "飞狐外传 角色页",
    pageBase: "https://jinyong.fandom.com/zh/wiki/",
    pageLanguage: "zh",
    canonicalLinks: [
      {
        type: "wiki",
        scope: "小说资料入口",
        label: "金庸 Wiki：飞狐外传分类",
        url: "https://jinyong.fandom.com/zh/wiki/Category:%E9%A3%9B%E7%8B%90%E5%A4%96%E5%82%B3",
        lang: "zh",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "用于核对《飞狐外传》角色和作品资料入口；不作为具体量级换算依据。"
      }
    ],
    commonLinks: [
      {
        type: "wiki",
        scope: "角色入口",
        label: "金庸 Wiki：苗人凤",
        url: "https://jinyong.fandom.com/zh/wiki/%E8%8B%97%E4%BA%BA%E9%B3%B3",
        lang: "zh",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "用于核对苗人凤身份、外号和飞狐相关剧情入口。"
      },
      {
        type: "wiki",
        scope: "角色入口",
        label: "金庸 Wiki：袁紫衣",
        url: "https://jinyong.fandom.com/zh/wiki/%E8%A2%81%E7%B4%AB%E8%A1%A3",
        lang: "zh",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "用于核对袁紫衣身份和飞狐外传相关剧情入口。"
      }
    ],
    scaleEvidenceLinks: [],
    scaleNotes: {
      scope: "当前收录金庸共通 worldbook key/comment 中明确出现的《飞狐外传》主要人物：苗人凤和袁紫衣。",
      versionPolicy: "按《飞狐外传》主线相关时期记录。刀剑招式、江湖名号、复仇线和门派身份分开处理。",
      highRisk: ["苗家剑法", "胡家刀法", "金面佛", "九龙派", "佛门身份", "复仇线"],
      conservativeNotes: "飞狐系列整体以人体、兵刃、轻功和局部内力表现为主；外号、江湖第一类评价和剧情威望不直接抬高破坏档。"
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
