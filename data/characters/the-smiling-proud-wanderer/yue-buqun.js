(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["笑傲江湖"];
  if (!work) throw new Error("笑傲江湖 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "yue-buqun",
    name: "岳不群",
    en: "Yue Buqun",
    aliases: ["君子剑", "华山掌门"],
    affiliation: "华山派",
    grade: "华山派掌门",
    appearances: ["金盆洗手"],
    timelineStatus: "金盆洗手期 / 辟邪剑谱前",
    fandomSlug: "岳不群",
    confidence: "medium",
    evidenceType: ["角色页入口", "小说条目入口"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["砖级", "墙级｜华山剑法/紫霞功", "金盆洗手期按华山掌门原有武功记录。"],
      defense: ["砖级", "墙级｜紫霞功/身法", "内功和剑法提供防护。"],
      movement: ["亚音速", "亚音速｜华山轻功", "掌门级身法。"],
      reaction: ["亚音速", "亚音速｜掌门经验", "读招和江湖应对强。"],
      vitality: ["强化凡体", "精锐韧体｜紫霞功", "人体结构，内功提高续战。"],
      healing: ["缓慢自愈", "缓慢自愈｜调息", "内功调息恢复。"],
      energy: ["砖级能量", "墙级能量｜紫霞功", "掌门级内力资源。"],
      energyRegen: ["缓慢回能", "缓慢回能｜调息", "需调息。"]
    }),
    notes: notes({
      penetration: "华山剑法和紫霞功偏技巧、内力和近战压制。攻击速度：华山剑法以兵刃出手和招式衔接为主，紫霞功强化的掌剑压制也须先接战，不能由身法移动换算。",
      resistance: "掌门级经验和内功可靠，但此阶段不并入辟邪剑谱速度变化。",
      sensing: "极擅长伪装、观察政治局势和经营名声。",
      tactics: "外表君子，实则长期布局；金盆洗手期仍以隐忍和名望经营为主。",
      special: "华山剑法、紫霞功、君子剑名声、政治伪装。",
      weakness: "野心、伪装压力和师门衰落焦虑影响判断。",
      setting: "按金盆洗手期岳不群记录，不并入后期辟邪剑谱。",
      basis: "worldbook只用于抽取岳不群姓名；定级依据金庸 Wiki 和公开小说条目入口，掌门身份不直接抬档。"
    })
  })]);
})();
