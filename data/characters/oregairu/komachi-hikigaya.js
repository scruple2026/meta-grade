(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["我的青春恋爱物语果然有问题"];
  if (!work) throw new Error("我的青春恋爱物语果然有问题 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "komachi-hikigaya",
    name: "比企谷小町",
    en: "Komachi Hikigaya",
    ja: "比企谷小町",
    aliases: ["小町", "Hikigaya Komachi"],
    affiliation: "比企谷家",
    grade: "中学生 / 八幡妹妹",
    appearances: ["主线全篇"],
    timelineStatus: "主线时期",
    fandomSlug: "Komachi_Hikigaya",
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
        resistance: "普通中学生承伤。",
        sensing: "对八幡和周围人际关系的观察敏锐。",
        tactics: "擅长用家庭关系、撒娇和社交直觉推动沟通。",
        special: "家庭纽带、社交直觉。",
        weakness: "肉身普通，非战斗角色。",
        setting: "按主线时期比企谷小町记录。",
        basis: "worldbook只用于抽取比企谷小町姓名；定级依据TBS官方角色入口与Oregairu Wiki资料入口，按普通校园人类处理。"
      })
  })]);
})();
