(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["我的青春恋爱物语果然有问题"];
  if (!work) throw new Error("我的青春恋爱物语果然有问题 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "iroha-isshiki",
    name: "一色彩羽",
    en: "Iroha Isshiki",
    ja: "一色いろは",
    aliases: ["一色", "彩羽", "Isshiki Iroha"],
    affiliation: "总武高校 / 学生会",
    grade: "高中生 / 学生会长",
    appearances: ["主线后半"],
    timelineStatus: "学生会长时期",
    fandomSlug: "Iroha_Isshiki",
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
        sensing: "擅长读取社交反馈和利用他人印象。",
        tactics: "会用撒娇、话术和职位资源推动目标，但只限校园社会场景。",
        special: "学生会长权限、社交操控、活动组织。",
        weakness: "肉身普通，行动依赖校园职位和人际资源。",
        setting: "按学生会长时期一色彩羽记录。",
        basis: "worldbook只用于抽取一色彩羽姓名；定级依据TBS官方角色入口与Oregairu Wiki资料入口，按普通校园人类处理。"
      })
  })]);
})();
