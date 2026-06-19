(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "天龙八部";

  registerWorkSource(WORK, {
    slug: "demi-gods-semi-devils",
    originalLanguage: "zh",
    pageLabel: "金庸 Wiki 角色页",
    pageBase: "https://jinyong.fandom.com/zh/wiki/",
    pageLanguage: "zh",
    canonicalLinks: [
      {
        type: "source",
        scope: "小说条目入口",
        label: "维基百科：天龙八部",
        url: "https://zh.wikipedia.org/wiki/%E5%A4%A9%E9%BE%99%E5%85%AB%E9%83%A8_(%E5%B0%8F%E8%AF%B4)",
        lang: "zh",
        authority: "cross-reference",
        medium: "wiki",
        ratingEvidence: false,
        claim: "用于核对作品、少室山相关角色和原作背景；不作为具体量级换算依据。"
      }
    ],
    commonLinks: [
      {
        label: "金庸 Wiki：天龙八部分类",
        url: "https://jinyong.fandom.com/zh/wiki/Category:%E5%A4%A9%E9%BE%8D%E5%85%AB%E9%83%A8",
        claim: "角色资料入口；具体量级按小说表现和保守武侠口径记录。"
      }
    ],
    scaleNotes: {
      scope: "当前收录少室山大会及金庸共通 worldbook 索引字段中的主要角色：萧峰、段誉、虚竹、慕容复、游坦之、丁春秋、鸠摩智、玄慈、叶二娘、萧远山、慕容博、扫地僧、王语嫣、阿紫、天山童姥、李秋水、无崖子、段正淳、李青萝和段正明。",
      versionPolicy: "按少室山大会前后与逍遥派相关时间线记录。内力、轻功、毒功、六脉神剑、降龙十八掌、气墙、逍遥派武学和武学见识分开，不把江湖名望或门派地位直接折算为破坏档。",
      highRisk: ["降龙十八掌", "六脉神剑", "一阳指", "北冥神功", "小无相功", "天山六阳掌", "天山折梅手", "生死符", "冰蚕寒毒", "化功大法", "三尺气墙", "少林七十二绝技", "琅嬛玉洞"],
      conservativeNotes: "金庸武侠以人体、兵刃、内力和局部环境破坏为主；缺少明确大范围破坏时，高端人物也保守停留在墙级到房屋级附近，极少数气墙/内力峰值才写更高条件峰值。"
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
