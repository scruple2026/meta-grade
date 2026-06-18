(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["笑傲江湖"];
  if (!work) throw new Error("笑傲江湖 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "fei-bin",
    name: "费彬",
    en: "Fei Bin",
    aliases: ["大嵩阳手", "嵩山费彬"],
    affiliation: "嵩山派",
    grade: "嵩山十三太保",
    appearances: ["金盆洗手"],
    timelineStatus: "金盆洗手期",
    fandomSlug: "費彬",
    confidence: "medium",
    evidenceType: ["角色页入口", "小说条目入口"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["砖级", "墙级｜大嵩阳手", "嵩山派高手，掌力和杀伤强于一般弟子。"],
      defense: ["砖级", "墙级｜内力/身法", "内力和经验提供防护。"],
      movement: ["凡人速", "亚音速｜江湖身法", "身法强于普通人。"],
      reaction: ["凡人速", "亚音速｜嵩山高手", "高阶门派高手反应。"],
      vitality: ["强化凡体", "精锐韧体｜内力", "人体结构，内力提高承伤。"],
      healing: ["缓慢自愈", "缓慢自愈｜调息", "内功调息恢复。"],
      energy: ["砖级能量", "墙级能量｜内力", "内力资源中等偏高。"],
      energyRegen: ["缓慢回能", "缓慢回能｜调息", "需调息恢复。"]
    }),
    notes: notes({
      penetration: "大嵩阳手和嵩山武功偏近战杀伤。",
      resistance: "门派高手防护可靠，但可被莫大偷袭杀死。",
      sensing: "执行嵩山派清洗时警觉较强但有傲慢短板。",
      tactics: "擅长挟势逼迫和杀人灭口，不等同顶级谋略。",
      special: "嵩山十三太保、大嵩阳手、嵩山令旗清洗行动。",
      weakness: "傲慢、政治任务束缚和对莫大隐蔽杀机预判不足。",
      setting: "按金盆洗手期费彬记录。",
      basis: "worldbook只用于抽取费彬姓名；定级依据金庸 Wiki 和公开小说条目入口，十三太保身份不直接抬档。"
    })
  })]);
})();
