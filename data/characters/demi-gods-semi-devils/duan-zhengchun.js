(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["天龙八部"];
  if (!work) throw new Error("天龙八部 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "duan-zhengchun",
    name: "段正淳",
    en: "Duan Zhengchun",
    aliases: ["鎮南王", "镇南王", "大理镇南王"],
    affiliation: "大理段氏 / 大理国",
    grade: "镇南王 / 一阳指使用者",
    appearances: ["金庸共通世界书", "少室山大会"],
    timelineStatus: "少室山大会期",
    fandomSlug: "段正淳",
    confidence: "medium",
    evidenceType: ["角色页入口", "worldbook姓名字段"],
    sourceQuality: "entry",
    evidenceLinks: [
      {
        type: "wiki",
        scope: "角色页入口",
        label: "金庸 Wiki：段正淳",
        url: "https://jinyong.fandom.com/zh/wiki/%E6%AE%B5%E6%AD%A3%E6%B7%B3",
        lang: "zh",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "核对段正淳为大理国镇南王，使用段家剑、五罗轻烟掌和一阳指，并在小镜湖、少室山等情节中出手。"
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
        claim: "核对段正淳与王语嫣、李青萝、段誉等人物关系；关系身份不作为量级依据。"
      }
    ],
    revisionNotes: [
      "段正淳按少室山大会期记录；一阳指支持高端江湖单体杀伤，但其表现低于段正明、段延庆等顶层大理高手。"
    ],
    dimensions: dims({
      attack: ["砖级", "墙级｜一阳指/段家剑", "一阳指和段家剑按高端江湖单体杀伤记录，不写大范围破坏。"],
      defense: ["砖级", "墙级｜内力/招架", "内力和武功可防身，但少室山被慕容复重创，硬防有限。"],
      movement: ["亚音速", "亚音速｜轻功/江湖高手", "大理高手身法，高于普通武者。"],
      reaction: ["亚音速", "亚音速｜一阳指交锋", "能参与段延庆、慕容复等高层交锋，但不按顶级主角处理。"],
      vitality: ["强化凡体", "精锐韧体｜内力", "人体结构，内力提升续战。"],
      healing: ["缓慢自愈", "缓慢自愈｜调息", "无高速再生表现。"],
      energy: ["砖级能量", "墙级能量｜一阳指内力", "内力资源支撑一阳指和段家武功。"],
      energyRegen: ["缓慢回能", "缓慢回能｜调息", "内力消耗后需调息恢复。"]
    }),
    notes: notes({
      penetration: "一阳指偏集中指力与点杀，不等同范围破坏；段家剑、五罗轻烟掌用于近身交锋。",
      resistance: "内力与武功防护可靠但非顶层，正面承受慕容复掌力仍会受重创。",
      sensing: "王族与江湖阅历丰富，无特殊索敌能力。",
      tactics: "能在江湖与王府事务中周旋，实战偏正面救援和护短。",
      special: "大理镇南王身份、一阳指、段家剑、五罗轻烟掌、复杂亲缘线。",
      weakness: "风流旧事和亲缘牵制极多，战斗时常受保护亲人目标影响。",
      setting: "金庸共通 worldbook 的大理段氏、曼陀山庄关系 key/comment 中出现段正淳；本条按少室山大会期记录。",
      basis: "worldbook只用于抽取段正淳姓名；定级依据金庸 Wiki 角色页和王语嫣关系入口。一阳指按单体武侠指力峰值记录，镇南王身份不抬高主面板。"
    })
  })]);
})();
