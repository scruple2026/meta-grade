(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["倚天屠龙记"];
  if (!work) throw new Error("倚天屠龙记 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "he-taichong",
    name: "何太冲",
    en: "He Taichong",
    aliases: ["何太沖", "铁琴先生", "鐵琴先生", "昆仑掌门"],
    affiliation: "昆仑派",
    grade: "昆仑派掌门",
    appearances: ["金庸共通世界书", "倚天屠龙记"],
    timelineStatus: "光明顶至万安寺时期",
    fandomSlug: "何太沖",
    confidence: "medium",
    evidenceType: ["角色页入口", "角色列表入口", "worldbook姓名字段"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["砖级", "墙级｜两仪剑法/掌门内力", "昆仑掌门级剑法和内力，峰值来自与班淑娴合用两仪剑法。"],
      defense: ["砖级", "墙级｜内力/招架", "掌门级经验与内力提供防护。"],
      movement: ["亚音速", "亚音速｜轻功", "六大派掌门级身法。"],
      reaction: ["亚音速", "亚音速｜剑法应对", "可参与光明顶围攻和万安寺交锋。"],
      vitality: ["强化凡体", "精锐韧体｜硬撑", "可在内力受限下硬撑，但仍是人体。"],
      healing: ["缓慢自愈", "缓慢自愈｜调息/治疗", "恢复依赖休养和调息。"],
      energy: ["砖级能量", "墙级能量｜掌门级内力", "内力按六大派掌门级记录。"],
      energyRegen: ["缓慢回能", "缓慢回能｜调息", "需调息恢复。"]
    }),
    notes: notes({
      penetration: "两仪剑法和昆仑剑术偏招式配合、兵刃杀伤和阵势压制。",
      resistance: "掌门身份和内力可靠，但性格、毒药局和围攻局面会显著影响发挥。",
      sensing: "江湖经验足，局势判断和担当不稳定。",
      tactics: "可率昆仑派参与六大派行动，和班淑娴合击时战术价值更高。",
      special: "两仪剑法、昆仑派掌门、六大派光明顶线。",
      weakness: "性格懦弱、忘恩负义和用毒/被毒剧情影响战斗稳定性。",
      setting: "金庸共通 worldbook 的昆仑派 key 中出现何太冲；本条按《倚天屠龙记》光明顶至万安寺时期记录。",
      basis: "worldbook只用于抽取何太冲姓名；定级依据金庸 Wiki 角色/角色列表入口，掌门身份不直接抬高主面板。"
    })
  })]);
})();
