(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["我的青春恋爱物语果然有问题"];
  if (!work) throw new Error("我的青春恋爱物语果然有问题 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "yumiko-miura",
    name: "三浦优美子",
    en: "Yumiko Miura",
    ja: "三浦優美子",
    aliases: ["三浦", "优美子", "Miura Yumiko"],
    affiliation: "总武高校 / 叶山团体",
    grade: "高中生",
    appearances: ["主线全篇"],
    timelineStatus: "总武高校主线时期",
    fandomSlug: "Yumiko_Miura",
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
        penetration: "无特殊攻击性质。",
        resistance: "普通高中生承伤。",
        sensing: "对班级地位和人际关系敏感。",
        tactics: "擅长在团体内施加社交压力和维护小圈子秩序。",
        special: "班级社交影响力。",
        weakness: "肉身普通，行动受团体关系和情绪影响。",
        setting: "按总武高校主线时期三浦优美子记录。",
        basis: "worldbook只用于抽取三浦优美子姓名；定级依据Oregairu Wiki资料入口和官方作品来源，按普通校园人类处理。"
      })
  })]);
})();
