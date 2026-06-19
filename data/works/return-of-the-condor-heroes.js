(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "神雕侠侣";

  registerWorkSource(WORK, {
    slug: "return-of-the-condor-heroes",
    originalLanguage: "zh",
    pageLabel: "金庸 Wiki 角色页",
    pageBase: "https://jinyong.fandom.com/zh/wiki/",
    pageLanguage: "zh",
    canonicalLinks: [
      {
        type: "wiki",
        scope: "小说资料入口",
        label: "金庸 Wiki：神雕侠侣",
        url: "https://jinyong.fandom.com/zh/wiki/%E7%A5%9E%E9%B5%B0%E4%BF%A0%E4%BE%B6",
        lang: "zh",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "用于核对《神雕侠侣》作品、人物和门派资料入口；不作为具体量级换算依据。"
      }
    ],
    commonLinks: [
      {
        type: "wiki",
        scope: "角色列表入口",
        label: "金庸 Wiki：神雕侠侣角色列表",
        url: "https://jinyong.fandom.com/zh/wiki/%E7%A5%9E%E9%B5%B0%E4%BF%A0%E4%BE%B6%E8%A7%92%E8%89%B2%E5%88%97%E8%A1%A8",
        lang: "zh",
        authority: "wiki",
        medium: "wiki",
        claim: "用于交叉核对神雕角色姓名、阵营和基础身份。"
      }
    ],
    scaleEvidenceLinks: [],
    scaleNotes: {
      scope: "当前收录金庸共通 worldbook key/comment 中明确出现的神雕角色：杨过、小龙女、李莫愁、郭襄。",
      versionPolicy: "按《神雕侠侣》原作主线综合期记录；早年古墓期、断臂后、黯然销魂掌、左右互搏、玉女心经和冰魄银针等应在峰值标签或后续时间线中区分。",
      highRisk: ["黯然销魂掌", "玄铁重剑", "玉女心经", "左右互搏", "冰魄银针", "九阴真经", "峨嵋开派"],
      conservativeNotes: "神雕高端武者仍按金庸人体/内力尺度保守处理；绝学、兵器和毒针记录为峰值或特殊项，不直接换算为大范围破坏。"
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
