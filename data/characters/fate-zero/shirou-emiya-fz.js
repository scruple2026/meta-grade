(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Zero"];
  if (!work) throw new Error("Fate/Zero work metadata must load before character files.");

  registerCharacters([work.character({
    id: "shirou-emiya-fz",
    name: "幼年卫宫士郎",
    en: "Shirou Emiya",
    ja: "衛宮士郎",
    aliases: ["卫宫士郎", "士郎", "Emiya Shirou"],
    affiliation: "冬木市民 / 卫宫家",
    grade: "非战斗角色 / 火灾幸存者",
    appearances: ["第四次圣杯战争末"],
    timelineStatus: "幼年 / 非战斗状态",
    fandomSlug: "Shirou_Emiya",
    confidence: "medium",
    evidenceType: ["角色页入口", "非战斗保守"],
    sourceQuality: "entry",
    evidenceLinks: [],
    revisionNotes: ["worldbook 仅用于抽取 Fate/Zero 角色姓名；定级依据公开官方/资料入口并保持保守。"],
    dimensions: dims({
        attack: ["凡人级", "凡人级", "第四次末幼年非战斗状态，不并入第五次投影魔术。"],
        defense: ["凡人级", "凡人级", "普通儿童承伤。"],
        movement: ["凡人速", "凡人速", "普通儿童移动。"],
        reaction: ["凡人速", "凡人速", "普通儿童反应。"],
        vitality: ["凡人肉身", "凡人肉身｜火灾幸存", "幸存是剧情与救助条件，不等同高生命体量。"],
        healing: ["无自愈", "缓慢自愈｜医疗/救助", "无战斗自愈。"],
        energy: ["凡人能量", "凡人能量", "此版本不记录后续魔术资源。"],
        energyRegen: ["无回能", "无回能", "无战斗回能表现。"]
      }),
    notes: notes({
        penetration: "幼年非战斗版本，无有效攻击性质。",
        resistance: "普通儿童承伤，火灾幸存不转化为防御。",
        sensing: "无战斗索敌表现。",
        tactics: "非战斗角色，不能按第五次圣杯战争经验处理。",
        special: "第四次圣杯战争末幸存者身份，后续投影魔术版本另算。",
        weakness: "幼年、非战斗、依赖救助。",
        setting: "按Fate/Zero结尾附近幼年卫宫士郎记录。",
        basis: "worldbook只用于抽取卫宫士郎FZ姓名；定级依据TYPE-MOON Wiki资料入口，和Fate/stay night版本分开。"
      })
  })]);
})();
