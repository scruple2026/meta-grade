(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["我的青春恋爱物语果然有问题"];
  if (!work) throw new Error("我的青春恋爱物语果然有问题 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "hachiman-hikigaya",
    name: "比企谷八幡",
    en: "Hachiman Hikigaya",
    ja: "比企谷八幡",
    aliases: ["八幡", "阿企", "Hikki", "Hikigaya Hachiman"],
    affiliation: "总武高校 / 侍奉部",
    grade: "高中生 / 侍奉部成员",
    appearances: ["主线全篇"],
    timelineStatus: "总武高校主线时期",
    fandomSlug: "Hachiman_Hikigaya",
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
        penetration: "无特殊攻击性质；语言和自毁式解决方案不折算为物理杀伤。攻击速度：八幡没有正式战斗招式或远程杀伤载体，徒手或临时物品攻击只按普通人的接近与挥击处理。",
        resistance: "普通高中生承伤，心理耐受和社交承压不等于防御能级。",
        sensing: "擅长观察人际关系、空气和动机，属于社交洞察而非战斗索敌。",
        tactics: "核心强项是分析、反向利用舆论和自我牺牲式方案，但依赖校园社会语境。",
        special: "社交洞察、问题拆解、低成本方案设计。",
        weakness: "肉身普通，倾向自损和孤立解决问题，跨界实战能力极弱。",
        setting: "按总武高校主线时期比企谷八幡记录。",
        basis: "worldbook只用于抽取比企谷八幡姓名；定级依据TBS官方角色入口与Oregairu Wiki资料入口，按普通校园人类处理。"
      })
  })]);
})();
