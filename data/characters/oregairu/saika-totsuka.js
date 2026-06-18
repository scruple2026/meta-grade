(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["我的青春恋爱物语果然有问题"];
  if (!work) throw new Error("我的青春恋爱物语果然有问题 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "saika-totsuka",
    name: "户冢彩加",
    en: "Saika Totsuka",
    ja: "戸塚彩加",
    aliases: ["户塚彩加", "户冢", "Totsuka Saika"],
    affiliation: "总武高校 / 网球部",
    grade: "高中生 / 网球部成员",
    appearances: ["主线全篇"],
    timelineStatus: "总武高校主线时期",
    fandomSlug: "Saika_Totsuka",
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
        penetration: "网球部运动能力不等同战斗杀伤。",
        resistance: "普通高中生承伤，体能稍好。",
        sensing: "对朋友状态和气氛有一定感知。",
        tactics: "性格温和，团队冲突中多起缓和作用。",
        special: "网球训练、社交缓和。",
        weakness: "肉身普通，非战斗角色。",
        setting: "按总武高校主线时期户冢彩加记录。",
        basis: "worldbook只用于抽取户冢彩加姓名；定级依据TBS官方角色入口与Oregairu Wiki资料入口，按运动型普通高中生处理。"
      })
  })]);
})();
