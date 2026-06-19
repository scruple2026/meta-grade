(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["倚天屠龙记"];
  if (!work) throw new Error("倚天屠龙记 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "xie-xun",
    name: "谢逊",
    en: "Xie Xun",
    aliases: ["謝遜", "金毛狮王", "金毛獅王", "张无忌义父", "屠龙刀"],
    affiliation: "明教 / 少林",
    grade: "明教四大护教法王 / 金毛狮王",
    appearances: ["金庸共通世界书", "倚天屠龙记"],
    timelineStatus: "冰火岛至屠狮大会综合期",
    fandomSlug: "謝遜",
    confidence: "medium",
    evidenceType: ["角色页入口", "角色列表入口", "worldbook姓名字段"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["砖级", "墙级｜七伤拳/狮子吼/屠龙刀", "法王级内力、七伤拳、狮子吼和屠龙刀形成强单体压制。"],
      defense: ["砖级", "墙级｜内力/硬撑", "体魄魁梧、内力深厚，但双目失明和旧伤会影响防御。"],
      movement: ["亚音速", "亚音速｜轻功/法王级身法", "明教法王级身法，高于普通江湖武者。"],
      reaction: ["亚音速", "亚音速｜听风辨位/高手经验", "失明后更依赖听觉和经验，仍能参与高端交锋。"],
      vitality: ["强化凡体", "精锐韧体｜法王级硬撑", "可承受长期流亡、伤病和高压战斗，但仍是人体。"],
      healing: ["缓慢自愈", "缓慢自愈｜调息/佛门休养", "恢复依赖调息、治疗和休养；不具备高速再生。"],
      energy: ["砖级能量", "墙级能量｜法王级内力/七伤拳", "内力深厚，可支持七伤拳、狮子吼等高消耗武功。"],
      energyRegen: ["缓慢回能", "缓慢回能｜调息", "需调息恢复，七伤拳也有自损风险。"]
    }),
    notes: notes({
      penetration: "七伤拳偏内伤与劲力侵入，狮子吼偏声波震慑，屠龙刀提供兵刃破坏；均以单体或局部杀伤为主。",
      resistance: "法王级内力和魁梧体魄可靠，但双目失明、复仇执念和七伤拳自损都是限制。",
      sensing: "失明后依赖听觉、经验和气息判断；面对静默、迷惑或远程诡计会受限。",
      tactics: "江湖经验深，复仇时期偏激烈强攻；后期受少林高僧点化后心性转变。",
      special: "七伤拳、狮子吼、屠龙刀、明教法王身份、冰火岛线、张无忌义父关系。",
      weakness: "双目失明、七伤拳伤身、成昆复仇执念和后期散尽武功等阶段差异明显。",
      setting: "金庸共通 worldbook 的冰火岛 key 中出现谢逊；本条按《倚天屠龙记》冰火岛至屠狮大会综合期记录。",
      basis: "worldbook只用于抽取谢逊姓名；定级依据金庸 Wiki 角色/角色列表入口，金毛狮王和法王身份不直接抬高破坏档。"
    })
  })]);
})();
