(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["倚天屠龙记"];
  if (!work) throw new Error("倚天屠龙记 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "ban-shuxian",
    name: "班淑娴",
    en: "Ban Shuxian",
    aliases: ["班淑嫻", "昆仑太上掌门", "何太冲之妻"],
    affiliation: "昆仑派",
    grade: "昆仑派太上掌门",
    appearances: ["金庸共通世界书", "倚天屠龙记"],
    timelineStatus: "光明顶至少林时期",
    fandomSlug: "倚天屠龍記角色列表",
    confidence: "review",
    evidenceType: ["角色列表入口", "worldbook姓名字段"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["砖级", "墙级｜两仪剑法/合击", "昆仑派高层，擅两仪剑法，合击价值高。"],
      defense: ["砖级", "墙级｜内力/招架", "高阶江湖武者防护。"],
      movement: ["亚音速", "亚音速｜轻功", "昆仑派高手身法。"],
      reaction: ["亚音速", "亚音速｜剑法应对", "可参与六大派高手围攻局面。"],
      vitality: ["强化凡体", "精锐韧体｜内力", "人体结构，内力提高续战。"],
      healing: ["缓慢自愈", "缓慢自愈｜调息/治疗", "恢复依赖休养和调息。"],
      energy: ["砖级能量", "墙级能量｜昆仑内力", "内力资源按昆仑高层记录。"],
      energyRegen: ["缓慢回能", "缓慢回能｜调息", "需调息恢复。"]
    }),
    notes: notes({
      penetration: "两仪剑法偏兵刃配合、阵势和破绽压迫，不按大范围破坏。",
      resistance: "高阶武者承伤和招架可靠，但面对张无忌、三僧等顶级线差距明显。",
      sensing: "门派经验和合击配合较强。",
      tactics: "性格强势，和何太冲共同使用昆仑派合击时威胁更高。",
      special: "昆仑派太上掌门、两仪剑法、与何太冲合击、六大派光明顶线。",
      weakness: "心性狠辣、用毒和门派私心影响判断；单独战斗资料少于何太冲。",
      setting: "金庸共通 worldbook 的昆仑派 key 中出现班淑娴；本条按《倚天屠龙记》主线综合记录。",
      basis: "worldbook只用于抽取班淑娴姓名；定级依据金庸 Wiki 倚天角色列表入口，缺少独立页面时保守按昆仑高层处理。"
    })
  })]);
})();
