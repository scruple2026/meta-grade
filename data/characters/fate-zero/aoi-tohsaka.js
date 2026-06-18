(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Zero"];
  if (!work) throw new Error("Fate/Zero work metadata must load before character files.");

  registerCharacters([work.character({
    id: "aoi-tohsaka",
    name: "远坂葵",
    en: "Aoi Tohsaka",
    ja: "遠坂葵",
    aliases: ["葵", "Tohsaka Aoi"],
    affiliation: "远坂家",
    grade: "非战斗角色 / 远坂家成员",
    appearances: ["第四次圣杯战争"],
    timelineStatus: "第四次圣杯战争 / 非战斗状态",
    fandomSlug: "Aoi_Tohsaka",
    confidence: "medium",
    evidenceType: ["官方入口", "角色页入口", "非战斗保守"],
    sourceQuality: "entry",
    evidenceLinks: [],
    revisionNotes: ["worldbook 仅用于抽取 Fate/Zero 角色姓名；定级依据公开官方/资料入口并保持保守。"],
    dimensions: dims({
        attack: ["凡人级", "凡人级", "非战斗角色，无稳定攻击表现。"],
        defense: ["凡人级", "凡人级", "普通人类承伤。"],
        movement: ["凡人速", "凡人速", "普通人移动。"],
        reaction: ["凡人速", "凡人速", "普通人反应。"],
        vitality: ["凡人肉身", "凡人肉身", "普通人生命体量。"],
        healing: ["无自愈", "缓慢自愈｜医疗", "无战斗自愈。"],
        energy: ["凡人能量", "凡人能量", "无可确认战斗能源。"],
        energyRegen: ["无回能", "无回能", "无可确认战斗回能。"]
      }),
    notes: notes({
        penetration: "非战斗版本，无有效攻击性质。",
        resistance: "普通人抗性。",
        sensing: "无战斗索敌表现。",
        tactics: "剧情角色，不按圣杯战争战术参与者定级。",
        special: "远坂家成员关系和剧情牵引，不转化为面板。",
        weakness: "普通人类、非战斗、易受御主/从者冲突波及。",
        setting: "按第四次圣杯战争远坂葵记录。",
        basis: "worldbook只用于抽取远坂葵姓名；定级依据官方角色入口与TYPE-MOON Wiki资料入口，非战斗角色低档记录。"
      })
  })]);
})();
