(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["笑傲江湖"];
  if (!work) throw new Error("笑傲江湖 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "lu-bai",
    name: "陆柏",
    en: "Lu Bai",
    aliases: ["仙鹤手", "嵩山陆柏"],
    affiliation: "嵩山派",
    grade: "嵩山十三太保",
    appearances: ["金盆洗手"],
    timelineStatus: "金盆洗手期",
    fandomSlug: "陸柏",
    confidence: "medium",
    evidenceType: ["角色页入口", "小说条目入口"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["砖级", "墙级｜仙鹤手", "嵩山派高手级近战输出。"],
      defense: ["砖级", "墙级｜内力/身法", "门派高手防护。"],
      movement: ["凡人速", "亚音速｜江湖身法", "身法强于常人。"],
      reaction: ["凡人速", "亚音速｜嵩山高手", "门派高手反应。"],
      vitality: ["强化凡体", "精锐韧体｜内力", "人体结构，内力提高续战。"],
      healing: ["缓慢自愈", "缓慢自愈｜调息", "内功调息恢复。"],
      energy: ["砖级能量", "墙级能量｜内力", "内力资源中等偏高。"],
      energyRegen: ["缓慢回能", "缓慢回能｜调息", "需调息。"]
    }),
    notes: notes({
      penetration: "仙鹤手和嵩山武功偏近战与控制。",
      resistance: "内力和身法防护较好，但非顶级角色。",
      sensing: "江湖经验和执行门派任务的警觉较强。",
      tactics: "善用门派权势、多人压制和政治名分。",
      special: "嵩山十三太保、仙鹤手、嵩山令旗行动。",
      weakness: "受左冷禅布局约束，个人上限有限。",
      setting: "按金盆洗手期陆柏记录。",
      basis: "worldbook只用于抽取陆柏姓名；定级依据金庸 Wiki 和公开小说条目入口。"
    })
  })]);
})();
