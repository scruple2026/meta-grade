(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/stay night"];
  if (!work) throw new Error("Fate/stay night work metadata must load before character files.");

  registerCharacters([work.character({
    id: "sasaki-kojirou-assassin",
    name: "Assassin（佐佐木小次郎）",
    en: "Sasaki Kojirou",
    ja: "佐々木小次郎",
    aliases: ["Assassin", "佐佐木小次郎", "小次郎"],
    affiliation: "Assassin职阶 / Caster召唤",
    grade: "从者 / 剑豪",
    appearances: ["Fate", "Unlimited Blade Works"],
    timelineStatus: "第五次圣杯战争 / 柳洞寺门番",
    fandomSlug: "Sasaki_Kojirou",
    confidence: "medium",
    evidenceType: ["官方入口", "角色页入口"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["楼级", "楼级｜燕返", "剑技极高，燕返偏空间般多重斩击但范围有限。"],
      defense: ["房屋级", "楼级｜剑技防御", "防御依赖剑技、间合和守门地利。"],
      movement: ["音速", "超音速｜剑豪身法", "近战速度很高。"],
      reaction: ["音速", "超音速｜燕返/心眼", "顶级剑豪反应。"],
      vitality: ["楼级生命阈值", "楼级生命阈值｜从者灵基", "灵基承伤强但受召唤条件限制。"],
      healing: ["中速自愈｜灵体/供魔", "中速自愈｜供魔", "恢复依赖供魔。"],
      energy: ["楼级能量", "楼级能量｜剑技/供魔", "资源集中在剑技和维持。"],
      energyRegen: ["中速回能", "中速回能｜供魔", "续航受Caster召唤条件限制。"]
    }),
    notes: notes({
      penetration: "燕返是对近身目标极强的斩击技巧，不等同大范围破坏。",
      resistance: "守门地利和剑技强，本体条件不如正统英灵稳固。",
      sensing: "剑士间合和对杀意感知优秀。",
      tactics: "守门、单挑和利用地形间合极强。",
      special: "燕返、剑豪技量、柳洞寺门番地利。",
      weakness: "召唤和活动范围受限，缺少远程和大范围宝具。",
      setting: "按第五次圣杯战争Assassin记录。",
      basis: "worldbook只用于抽取佐佐木小次郎姓名；定级依据官方入口与TYPE-MOON Wiki资料入口，燕返作为技巧峰值。"
    })
  })]);
})();
