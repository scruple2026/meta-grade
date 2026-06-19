(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["天龙八部"];
  if (!work) throw new Error("天龙八部 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "li-qingluo",
    name: "李青萝",
    en: "Li Qingluo",
    aliases: ["李青蘿", "王夫人", "曼陀山庄王夫人", "王语嫣之母"],
    affiliation: "曼陀山庄 / 姑苏王家",
    grade: "曼陀山庄主人",
    appearances: ["金庸共通世界书", "曼陀山庄线"],
    timelineStatus: "曼陀山庄线 / 主线期",
    fandomSlug: "李青蘿",
    confidence: "medium",
    evidenceType: ["角色页入口", "角色关系入口", "worldbook姓名字段"],
    sourceQuality: "entry",
    evidenceLinks: [
      {
        type: "wiki",
        scope: "角色页入口",
        label: "金庸 Wiki：李青萝",
        url: "https://jinyong.fandom.com/zh/wiki/%E6%9D%8E%E9%9D%92%E8%98%BF",
        lang: "zh",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "核对李青萝为王语嫣之母、段正淳情人之一、无崖子与李秋水之女，并居于姑苏王府曼陀山庄。"
      },
      {
        type: "wiki",
        scope: "角色关系入口",
        label: "金庸 Wiki：王语嫣",
        url: "https://jinyong.fandom.com/zh/wiki/%E7%8E%8B%E8%AA%9E%E5%AB%A3",
        lang: "zh",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "王语嫣条目核对李青萝又称王夫人，王语嫣自小生活在曼陀山庄，李青萝与段正淳、李秋水、无崖子的亲缘关系。"
      }
    ],
    revisionNotes: [
      "李青萝按曼陀山庄主人和王语嫣之母记录；血缘、庄园资源和琅嬛知识不自动换成本体战斗面板。"
    ],
    dimensions: dims({
      attack: ["凡人级", "砖级｜庄园管束/普通武力", "缺少稳定正面武功表现，威胁更多来自庄园权势和处置手段。"],
      defense: ["凡人级", "凡人级", "本体缺少武者级防护表现。"],
      movement: ["凡人速", "凡人速", "日常行动速度。"],
      reaction: ["凡人速", "凡人速", "无可量化战斗反应表现。"],
      vitality: ["凡人肉身", "凡人肉身", "普通人体生命体量。"],
      healing: ["无自愈", "无自愈", "无自愈能力。"],
      energy: ["不适用", "不适用", "无可量化战斗内力池表现。"],
      energyRegen: ["不适用", "不适用", "无回能体系表现。"]
    }),
    notes: notes({
      penetration: "本体几乎不以正面战斗输出为主，庄园处置和威胁话语不折算攻击能级。",
      resistance: "缺少武者级承伤或抗性表现，需与曼陀山庄资源分开。",
      sensing: "熟悉曼陀山庄、人际关系和段正淳旧事，无特殊索敌能力。",
      tactics: "能掌控庄园规矩和家宅关系，但正面战斗执行力有限。",
      special: "曼陀山庄主人、王语嫣之母、无崖子与李秋水之女、段正淳旧情线。",
      weakness: "怨恨与执念很重，面对段正淳、王语嫣和慕容复相关事务容易失控。",
      setting: "金庸共通 worldbook 的曼陀山庄 key/comment 中出现王夫人、李青萝；本条按曼陀山庄线主线期记录。",
      basis: "worldbook只用于抽取李青萝/王夫人姓名；定级依据金庸 Wiki 李青萝与王语嫣条目。亲缘、庄园和琅嬛背景写入设定，不折算本体攻防。"
    })
  })]);
})();
