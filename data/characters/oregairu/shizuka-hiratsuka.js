(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["我的青春恋爱物语果然有问题"];
  if (!work) throw new Error("我的青春恋爱物语果然有问题 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "shizuka-hiratsuka",
    name: "平冢静",
    en: "Shizuka Hiratsuka",
    ja: "平塚静",
    aliases: ["平冢老师", "静老师", "Hiratsuka Shizuka"],
    affiliation: "总武高校",
    grade: "教师 / 侍奉部顾问",
    appearances: ["主线全篇"],
    timelineStatus: "总武高校教师时期",
    fandomSlug: "Shizuka_Hiratsuka",
    confidence: "medium",
    evidenceType: ["官方入口", "角色页入口", "非战斗保守"],
    sourceQuality: "entry",
    evidenceLinks: [],
    revisionNotes: ["worldbook 仅用于抽取春物角色姓名；定级依据公开官方/资料入口并按普通校园人类保守记录。"],
    dimensions: dims({
        attack: ["凡人级", "砖级｜成年人拳脚/驾驶条件", "成年人拳脚和现实危险条件略高于学生，但不按战斗角色处理。"],
        defense: ["凡人级", "砖级｜成年人身体", "普通成人承伤。"],
        movement: ["凡人速", "凡人速", "普通人移动。"],
        reaction: ["凡人速", "凡人速", "普通人反应。"],
        vitality: ["凡人肉身", "强化凡体｜成年人身体", "普通成人生命体量。"],
        healing: ["缓慢自愈", "缓慢自愈｜休息/医疗", "按普通人自然恢复处理。"],
        energy: ["凡人能量", "凡人能量", "无超自然战斗能源。"],
        energyRegen: ["无回能", "无回能", "不存在可排序的战斗回能体系。"]
      }),
    notes: notes({
        penetration: "成年人拳脚和现实驾驶条件可造成普通伤害，不属于超常杀伤。",
        resistance: "普通成人承伤。",
        sensing: "教师经验和对学生心理的洞察强。",
        tactics: "擅长用教育手段、活动安排和压力引导学生行动。",
        special: "教师权限、侍奉部顾问身份、学生指导经验。",
        weakness: "肉身普通，现实法律/校园规则约束行动。",
        setting: "按总武高校教师时期平冢静记录。",
        basis: "worldbook只用于抽取平冢静姓名；定级依据TBS官方角色入口与Oregairu Wiki资料入口，按普通成人处理。"
      })
  })]);
})();
