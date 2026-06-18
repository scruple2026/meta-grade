(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["笑傲江湖"];
  if (!work) throw new Error("笑傲江湖 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "feng-qingyang",
    name: "风清扬",
    en: "Feng Qingyang",
    aliases: ["風清揚", "华山剑宗前辈", "独孤九剑传人"],
    affiliation: "华山派剑宗",
    grade: "独孤九剑宗师",
    appearances: ["金庸共通世界书", "笑傲江湖"],
    timelineStatus: "隐居期 / 独孤九剑传授",
    fandomSlug: "風清揚",
    confidence: "medium",
    evidenceType: ["角色页入口", "小说资料入口", "worldbook姓名字段"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["墙级", "房屋级｜独孤九剑", "独孤九剑破招上限高，但按单体剑术效能记录。"],
      defense: ["砖级", "墙级｜剑术规避/破招", "防御更多来自破招和规避，非硬抗。"],
      movement: ["亚音速", "亚音速｜宗师身法", "宗师级身法和出剑节奏。"],
      reaction: ["亚音速", "亚音速｜独孤九剑读招", "读招和反制能力极强。"],
      vitality: ["强化凡体", "精锐韧体｜内功/隐居", "人体结构，年龄和隐居状态需考虑。"],
      healing: ["缓慢自愈", "缓慢自愈｜调息", "恢复依赖调息。"],
      energy: ["砖级能量", "墙级能量｜剑宗内功", "主要价值在剑理和破招，不是能量池压制。"],
      energyRegen: ["缓慢回能", "缓慢回能｜调息", "需调息恢复。"]
    }),
    notes: notes({
      penetration: "独孤九剑偏破招、破绽读取和技巧反制，不能直接折算为大范围破坏。",
      resistance: "破招和先读强，硬承伤不按顶级肉身处理。",
      sensing: "武学洞察、读招和判断破绽极强。",
      tactics: "以无招胜有招，擅长针对招式结构拆解对手。",
      special: "独孤九剑、华山剑宗传承和宗师级武学理解。",
      weakness: "隐居期实战状态、年龄和出手意愿不稳定；独孤九剑对无招/异质能力需另判。",
      setting: "金庸共通 worldbook 的华山派剑宗 key 中出现风清扬；本条按《笑傲江湖》隐居期记录。",
      basis: "worldbook只用于抽取风清扬姓名；定级依据金庸 Wiki 角色/作品入口，独孤九剑写为高技巧破招而非高破坏范围。"
    })
  })]);
})();
