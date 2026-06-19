(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["倚天屠龙记"];
  if (!work) throw new Error("倚天屠龙记 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "he-zudao",
    name: "何足道",
    en: "He Zudao",
    aliases: ["昆仑三圣", "崑崙三聖", "琴棋剑三绝"],
    affiliation: "昆仑派",
    grade: "昆仑三圣 / 前辈高手",
    appearances: ["金庸共通世界书", "倚天屠龙记"],
    timelineStatus: "倚天开篇 / 昆仑三圣时期",
    fandomSlug: "何足道",
    confidence: "medium",
    evidenceType: ["角色页入口", "角色列表入口", "worldbook姓名字段"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["墙级", "房屋级｜迅雷剑/昆仑三圣｜争议", "开篇前辈高手，迅雷剑出招极快；缺少大范围破坏时峰值保守记录。"],
      defense: ["墙级", "墙级｜内力/剑术", "顶尖剑客与内力支撑防护，但不按宗师称号无限外推。"],
      movement: ["亚音速", "亚音速｜轻功/剑步", "高端江湖高手身法。"],
      reaction: ["亚音速", "亚音速｜迅雷剑/高手交锋", "快剑和高手交锋经验支撑高反应。"],
      vitality: ["精锐韧体", "精锐韧体｜内力", "人体结构，内力和经验提高续战。"],
      healing: ["缓慢自愈", "缓慢自愈｜调息", "恢复依赖调息。"],
      energy: ["墙级能量", "房屋级能量｜昆仑内力｜争议", "内力深厚，仍按金庸武侠局部破坏口径。"],
      energyRegen: ["缓慢回能", "中速回能｜调息", "高深内功可较快调息，但不是瞬时回能。"]
    }),
    notes: notes({
      penetration: "迅雷剑偏极快连击和兵刃破绽压迫，琴棋才艺不折算攻击面板。",
      resistance: "高手内力和剑术可靠，但面对觉远九阳神功、张君宝等特殊节点仍会受挫。",
      sensing: "琴棋剑三绝带来观察、节奏和心境优势。",
      tactics: "孤高清雅，重承诺和江湖礼数，战斗中偏正面较技。",
      special: "昆仑三圣、迅雷剑、琴棋剑三绝、九阳真经传话线索。",
      weakness: "过于孤高和重承诺；误传九阳真经线索说明信息处理并非无误。",
      setting: "金庸共通 worldbook 的昆仑派 key 中出现何足道；本条按《倚天屠龙记》开篇时期记录。",
      basis: "worldbook只用于抽取何足道姓名；定级依据金庸 Wiki 角色/角色列表入口，昆仑三圣称号不直接换算为更高破坏档。"
    })
  })]);
})();
