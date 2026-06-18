(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Zero"];
  if (!work) throw new Error("Fate/Zero work metadata must load before character files.");

  registerCharacters([work.character({
    id: "sakura-matou-fz",
    name: "幼年间桐樱",
    en: "Sakura Matou",
    ja: "間桐桜",
    aliases: ["间桐樱", "远坂樱", "樱", "Sakura Tohsaka"],
    affiliation: "间桐家 / 原远坂家",
    grade: "非战斗角色 / 魔术资质",
    appearances: ["第四次圣杯战争"],
    timelineStatus: "幼年 / 非战斗状态",
    fandomSlug: "Sakura_Matou",
    confidence: "medium",
    evidenceType: ["角色页入口", "非战斗保守"],
    sourceQuality: "entry",
    evidenceLinks: [],
    revisionNotes: ["worldbook 仅用于抽取 Fate/Zero 角色姓名；定级依据公开官方/资料入口并保持保守。"],
    dimensions: dims({
        attack: ["凡人级", "凡人级", "幼年非战斗状态，不并入HF黑樱。"],
        defense: ["凡人级", "凡人级", "幼年身体承伤。"],
        movement: ["凡人速", "凡人速", "普通儿童移动。"],
        reaction: ["凡人速", "凡人速", "普通儿童反应。"],
        vitality: ["凡人肉身", "凡人肉身｜虫术创伤", "创伤和虫术不等于更高生命体量。"],
        healing: ["无自愈", "缓慢自愈｜医疗/护理", "无战斗自愈。"],
        energy: ["凡人能量", "砖级能量｜魔术资质/间桐虫术环境", "魔术潜质存在但此版本不是主战资源。"],
        energyRegen: ["缓慢回能", "缓慢回能", "无战斗续航表现。"]
      }),
    notes: notes({
        penetration: "幼年非战斗版本，无有效攻击性质。",
        resistance: "虫术创伤属于弱点和剧情条件，不提升硬度。",
        sensing: "无战斗索敌表现。",
        tactics: "非战斗角色，不能按后续黑樱或御主版本定级。",
        special: "远坂血统、间桐虫术环境，后续版本另算。",
        weakness: "幼年、非战斗、受间桐家控制和虫术创伤。",
        setting: "按Fate/Zero时期幼年间桐樱记录。",
        basis: "worldbook只用于抽取间桐樱/远坂樱FZ姓名；定级依据TYPE-MOON Wiki资料入口，和Fate/stay night版本分开。"
      })
  })]);
})();
