(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["天龙八部"];
  if (!work) throw new Error("天龙八部 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "ye-erniang",
    name: "叶二娘",
    en: "Ye Erniang",
    aliases: ["无恶不作", "四大恶人"],
    affiliation: "四大恶人",
    grade: "恶人 / 江湖高手",
    appearances: ["少室山大会"],
    timelineStatus: "少室山大会期",
    fandomSlug: "葉二娘",
    confidence: "medium",
    evidenceType: ["角色页入口", "小说条目入口"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["砖级", "墙级｜江湖武功", "高于常人但低于少室山顶级圈。"],
      defense: ["砖级", "墙级｜内力/身法", "江湖高手体魄与内力。"],
      movement: ["亚音速", "亚音速｜轻功", "恶人级轻功和突袭能力。"],
      reaction: ["凡人速", "亚音速｜江湖经验", "老江湖反应。"],
      vitality: ["强化凡体", "精锐韧体｜内力", "人体结构，承伤有限。"],
      healing: ["缓慢自愈", "缓慢自愈｜调息", "内功调息恢复。"],
      energy: ["砖级能量", "墙级能量｜内力", "内力资源中等。"],
      energyRegen: ["缓慢回能", "缓慢回能｜调息", "需调息恢复。"]
    }),
    notes: notes({
      penetration: "以江湖武功和突袭为主，不适合与顶级内力正面硬拼。",
      resistance: "经验和身法可降低伤害，硬防有限。",
      sensing: "江湖经验和对虚竹身世线的情绪感知强。",
      tactics: "熟悉恶人行事和江湖逃遁，但情绪弱点明显。",
      special: "四大恶人身份、虚竹身世线。",
      weakness: "亲子真相和旧事创伤对判断影响极大。",
      setting: "按少室山大会期叶二娘记录。",
      basis: "worldbook只用于抽取叶二娘姓名；定级依据金庸 Wiki 和公开小说条目入口。"
    })
  })]);
})();
