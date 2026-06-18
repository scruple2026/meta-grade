(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "笑傲江湖";

  registerWorkSource(WORK, {
    slug: "the-smiling-proud-wanderer",
    originalLanguage: "zh",
    pageLabel: "金庸 Wiki 角色页",
    pageBase: "https://jinyong.fandom.com/zh/wiki/",
    pageLanguage: "zh",
    canonicalLinks: [
      {
        type: "source",
        scope: "小说条目入口",
        label: "维基百科：笑傲江湖",
        url: "https://zh.wikipedia.org/wiki/%E7%AC%91%E5%82%B2%E6%B1%9F%E6%B9%96",
        lang: "zh",
        authority: "cross-reference",
        medium: "wiki",
        ratingEvidence: false,
        claim: "用于核对作品、金盆洗手事件和主要角色；不作为具体量级换算依据。"
      }
    ],
    commonLinks: [
      {
        label: "金庸 Wiki：笑傲江湖分类",
        url: "https://jinyong.fandom.com/zh/wiki/Category:%E7%AC%91%E5%82%B2%E6%B1%9F%E6%B9%96",
        claim: "角色资料入口；具体量级按小说表现和保守武侠口径记录。"
      }
    ],
    scaleNotes: {
      scope: "当前收录金盆洗手 worldbook 索引字段中的主要角色：刘正风、曲洋、曲非烟、令狐冲、仪琳、田伯光、费彬、丁勉、陆柏、莫大先生和岳不群。",
      versionPolicy: "按金盆洗手前后记录；令狐冲不并入后期独孤九剑、吸星大法和易筋经，岳不群不并入后期辟邪剑谱，东方不败和任我行只作为势力背景暂不列入本窗口角色。",
      highRisk: ["五岳剑派武功", "嵩山十三太保", "衡山剑法", "快刀", "点穴", "内力"],
      conservativeNotes: "《笑傲江湖》早期江湖战斗以人体、兵刃、点穴、内力和局部破坏为主；缺少明确大范围破坏时不把掌门、长老、十三太保等身份直接抬高。"
    },
    sourcePolicy: "金庸 Wiki、维基百科和公开小说条目是入口来源；高争议武功表现后续应补原文回目、版本和章节引用。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();
