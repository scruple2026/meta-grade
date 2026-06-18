(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["我的青春恋爱物语果然有问题"];
  if (!work) throw new Error("我的青春恋爱物语果然有问题 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "yoshiteru-zaimokuza",
    name: "材木座义辉",
    en: "Yoshiteru Zaimokuza",
    ja: "材木座義輝",
    aliases: ["材木座", "Zaimokuza Yoshiteru"],
    affiliation: "总武高校",
    grade: "高中生 / 轻小说志愿者",
    appearances: ["主线全篇"],
    timelineStatus: "总武高校主线时期",
    fandomSlug: "Yoshiteru_Zaimokuza",
    confidence: "medium",
    evidenceType: ["官方入口", "角色页入口", "非战斗保守"],
    sourceQuality: "entry",
    evidenceLinks: [],
    revisionNotes: ["worldbook 仅用于抽取春物角色姓名；定级依据公开官方/资料入口并按普通校园人类保守记录。"],
    dimensions: dims({
        attack: ["凡人级", "凡人级", "普通校园人类，缺少战斗破坏表现。"],
        defense: ["凡人级", "凡人级", "普通人类承伤。"],
        movement: ["凡人速", "凡人速", "普通人移动。"],
        reaction: ["凡人速", "凡人速", "普通人反应。"],
        vitality: ["凡人肉身", "凡人肉身", "普通人生命体量。"],
        healing: ["缓慢自愈", "缓慢自愈｜休息/医疗", "按普通人自然恢复处理。"],
        energy: ["凡人能量", "凡人能量", "无超自然战斗能源。"],
        energyRegen: ["无回能", "无回能", "不存在可排序的战斗回能体系。"]
      }),
    notes: notes({
        penetration: "中二幻想和创作设定不折算为现实攻击。",
        resistance: "普通高中生承伤。",
        sensing: "对宅文化和创作话题敏感，非战斗索敌。",
        tactics: "能提供创意和配合，但实战性低。",
        special: "轻小说创作、宅文化知识、中二角色扮演。",
        weakness: "肉身普通，幻想设定不等于现实能力。",
        setting: "按总武高校主线时期材木座义辉记录。",
        basis: "worldbook只用于抽取材木座义辉姓名；定级依据TBS官方角色入口与Oregairu Wiki资料入口，按普通校园人类处理。"
      })
  })]);
})();
