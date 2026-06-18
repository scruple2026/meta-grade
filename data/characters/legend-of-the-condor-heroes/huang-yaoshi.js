(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["射雕英雄传"];
  if (!work) throw new Error("射雕英雄传 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "huang-yaoshi",
    name: "黄药师",
    en: "Huang Yaoshi",
    aliases: ["黃藥師", "东邪", "桃花岛主"],
    affiliation: "桃花岛",
    grade: "五绝之一 / 桃花岛主",
    appearances: ["金庸共通世界书", "射雕英雄传"],
    timelineStatus: "射雕主线五绝级",
    fandomSlug: "黃藥師",
    confidence: "medium",
    evidenceType: ["角色页入口", "小说资料入口", "worldbook姓名字段"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["墙级", "房屋级｜弹指神通/桃花岛武学", "五绝级内力与指力强，但按单体/局部破坏处理。"],
      defense: ["墙级", "房屋级｜内力/身法", "内功、身法和招式防护强。"],
      movement: ["亚音速", "亚音速｜轻功", "五绝级身法。"],
      reaction: ["亚音速", "亚音速｜五绝级读招", "能处理高端近战招式变化。"],
      vitality: ["精锐韧体", "精锐韧体｜内力", "人体结构，深厚内力提高生命阈值。"],
      healing: ["缓慢自愈", "中速自愈｜内功调息", "内功可辅助疗伤。"],
      energy: ["墙级能量", "房屋级能量｜五绝级内力", "内力资源深厚，适合持续高手战。"],
      energyRegen: ["缓慢回能", "中速回能｜调息", "需调息恢复。"]
    }),
    notes: notes({
      penetration: "弹指神通、落英神剑掌和桃花岛武学偏指力、掌法、阵法和技巧压制。",
      resistance: "正面武学抗压强；情绪与亲缘牵制可能影响判断。",
      sensing: "精通音律、阵法、医卜星相和武学识别，信息处理强。",
      tactics: "孤傲但极具创造力，擅长阵法、奇门和出其不意的招式。",
      special: "弹指神通、落英神剑掌、桃花岛阵法、碧海潮生曲。",
      weakness: "性格偏激，情感创伤和骄傲会影响协作。",
      setting: "金庸共通 worldbook 的桃花岛 key 中出现黄药师；本条按《射雕英雄传》五绝级时期记录。",
      basis: "worldbook只用于抽取黄药师姓名；定级依据金庸 Wiki 角色/作品入口，五绝和岛主身份不直接抬高破坏档。"
    })
  })]);
})();
