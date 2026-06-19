(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["天龙八部"];
  if (!work) throw new Error("天龙八部 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "duan-zhengming",
    name: "段正明",
    en: "Duan Zhengming",
    aliases: ["保定帝", "本尘", "本塵", "大理保定帝"],
    affiliation: "大理段氏 / 大理国 / 天龙寺",
    grade: "大理皇帝 / 一阳指高手 / 六脉神剑关冲剑",
    appearances: ["金庸共通世界书", "天龙寺线"],
    timelineStatus: "天龙寺线 / 出家后本尘阶段",
    fandomSlug: "段正明",
    confidence: "medium",
    evidenceType: ["角色页入口", "武功条目入口", "worldbook姓名字段"],
    sourceQuality: "entry",
    evidenceLinks: [
      {
        type: "wiki",
        scope: "角色页入口",
        label: "金庸 Wiki：段正明",
        url: "https://jinyong.fandom.com/zh/wiki/%E6%AE%B5%E6%AD%A3%E6%98%8E",
        lang: "zh",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "核对段正明为大理保定帝、段正淳之兄，精通一阳指，出家后法号本尘并修习六脉神剑关冲剑。"
      },
      {
        type: "wiki",
        scope: "武功入口",
        label: "金庸 Wiki：六脉神剑",
        url: "https://jinyong.fandom.com/zh/wiki/%E5%85%AD%E8%84%88%E7%A5%9E%E5%8A%8D",
        lang: "zh",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "核对天龙寺六僧各学一路剑法，段正明出家后的本尘阶段只对应关冲剑，不等同段誉完整六脉神剑。"
      }
    ],
    revisionNotes: [
      "段正明按天龙寺线和本尘阶段记录；一阳指高于段正淳，六脉神剑只写关冲剑，不并入段誉完整六式峰值。"
    ],
    dimensions: dims({
      attack: ["墙级｜一阳指", "房屋级｜关冲剑/六脉神剑一路｜条件", "一阳指功力高于段正淳；关冲剑是六脉神剑一路，按高穿透单体峰值保守上调。"],
      defense: ["砖级", "墙级｜内力/招架", "高深内力和一阳指可防身，但仍按武侠人体处理。"],
      movement: ["亚音速", "亚音速｜大理段氏轻功", "高端江湖身法，未见脱离低武侠速度。"],
      reaction: ["亚音速", "亚音速｜天龙寺合战", "可参与天龙寺对鸠摩智防守和段延庆交锋语境。"],
      vitality: ["强化凡体", "精锐韧体｜内力", "人体结构，内力提高续战。"],
      healing: ["缓慢自愈", "缓慢自愈｜调息", "无高速再生表现。"],
      energy: ["墙级能量｜一阳指", "房屋级能量｜关冲剑/六脉神剑一路｜条件", "内力资源足以支撑一阳指和一路六脉神剑。"],
      energyRegen: ["缓慢回能", "缓慢回能｜调息", "内力消耗后需调息恢复。"]
    }),
    notes: notes({
      penetration: "一阳指和关冲剑都偏集中指力/剑气杀伤，高穿透低范围，不等同大范围破坏。",
      resistance: "内力深厚且天龙寺合战经验强；本体仍是武侠人体，没有高能抗性。",
      sensing: "王族、天龙寺和江湖阅历丰富，无独立特殊索敌能力。",
      tactics: "能以皇帝身份处理国事，也能在天龙寺危局中配合六僧防守，决策较稳健。",
      special: "保定帝身份、出家法号本尘、一阳指、六脉神剑关冲剑、大理段氏传承。",
      weakness: "六脉神剑只习一路且依赖天龙寺合战条件；国事和段氏亲缘会限制行动选择。",
      setting: "金庸共通 worldbook 的大理段氏 key/comment 中出现段正明；本条按天龙寺线和本尘阶段记录。",
      basis: "worldbook只用于抽取段正明姓名；定级依据金庸 Wiki 段正明与六脉神剑条目。一阳指高于段正淳，关冲剑作为一路六脉神剑峰值，不折算为段誉完整六脉神剑。"
    })
  })]);
})();
