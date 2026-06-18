(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["我的青春恋爱物语果然有问题"];
  if (!work) throw new Error("我的青春恋爱物语果然有问题 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "saki-kawasaki",
    name: "川崎沙希",
    en: "Saki Kawasaki",
    ja: "川崎沙希",
    aliases: ["川崎", "Kawasaki Saki"],
    affiliation: "总武高校",
    grade: "高中生 / 打工学生",
    appearances: ["主线全篇"],
    timelineStatus: "总武高校主线时期",
    fandomSlug: "Saki_Kawasaki",
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
        resistance: "普通高中生承伤，打工体力不等于防御升档。",
        sensing: "对家庭和工作压力敏感，能识别现实问题。",
        tactics: "独立性强，擅长承担责任和处理实际生活问题。",
        special: "打工经验、独立生活能力。",
        weakness: "肉身普通，经济和家庭压力会限制行动。",
        setting: "按总武高校主线时期川崎沙希记录。",
        basis: "worldbook只用于抽取川崎沙希姓名；定级依据TBS官方角色入口与Oregairu Wiki资料入口，按普通校园人类处理。"
      })
  })]);
})();
