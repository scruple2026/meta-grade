(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["我的青春恋爱物语果然有问题"];
  if (!work) throw new Error("我的青春恋爱物语果然有问题 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "hayato-hayama",
    name: "叶山隼人",
    en: "Hayato Hayama",
    ja: "葉山隼人",
    aliases: ["叶山", "Hayama Hayato"],
    affiliation: "总武高校 / 叶山团体",
    grade: "高中生 / 社交核心",
    appearances: ["主线全篇"],
    timelineStatus: "总武高校主线时期",
    fandomSlug: "Hayato_Hayama",
    confidence: "medium",
    evidenceType: ["官方入口", "角色页入口", "非战斗保守"],
    sourceQuality: "entry",
    evidenceLinks: [],
    revisionNotes: ["worldbook 仅用于抽取春物角色姓名；定级依据公开官方/资料入口并按普通校园人类保守记录。"],
    dimensions: dims({
        attack: ["凡人级", "凡人级｜运动训练", "普通人类攻击，运动能力不等于破坏升档。"],
        defense: ["凡人级", "凡人级", "普通人类承伤。"],
        movement: ["凡人速", "凡人速｜运动训练", "校园运动水平。"],
        reaction: ["凡人速", "凡人速｜运动训练", "运动反应优于普通同龄人但仍是人类低端。"],
        vitality: ["凡人肉身", "强化凡体｜运动训练", "体能较好但不脱离普通人类。"],
        healing: ["缓慢自愈", "缓慢自愈｜休息/医疗", "按普通人自然恢复处理。"],
        energy: ["凡人能量", "凡人能量", "无超自然战斗能源。"],
        energyRegen: ["无回能", "无回能", "不存在可排序的战斗回能体系。"]
      }),
    notes: notes({
        penetration: "运动能力不等于战斗杀伤，仍按普通人拳脚记录。",
        resistance: "运动体能较好但无特殊抗性。",
        sensing: "擅长维持团体关系和察觉社交风险。",
        tactics: "能协调团队、控制场面和避免关系破裂。",
        special: "运动能力、社交核心地位、团队协调。",
        weakness: "肉身普通，过度维持和谐会限制决断。",
        setting: "按总武高校主线时期叶山隼人记录。",
        basis: "worldbook只用于抽取叶山隼人姓名；定级依据TBS官方角色入口与Oregairu Wiki资料入口，按运动型普通高中生处理。"
      })
  })]);
})();
