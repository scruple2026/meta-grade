(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["空之境界"];
  if (!work) throw new Error("空之境界 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "mikiya-kokutou",
    name: "黑桐干也",
    en: "Mikiya Kokutou",
    ja: "黒桐幹也",
    aliases: ["干也", "Kokutou Mikiya", "两仪干也"],
    affiliation: "伽蓝之堂关联",
    grade: "主角 / 调查与支援角色",
    appearances: ["空之境界本篇"],
    timelineStatus: "空境本篇",
    fandomSlug: "Mikiya_Kokutou",
    confidence: "medium",
    evidenceType: ["角色页入口", "作品页入口", "worldbook索引字段"],
    sourceQuality: "entry",
    evidenceLinks: [
      {
        type: "wiki",
        scope: "角色入口",
        label: "TYPE-MOON Wiki：Mikiya Kokutou",
        url: "https://typemoon.fandom.com/wiki/Mikiya_Kokutou",
        lang: "en",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "用于核对黑桐干也身份和空境本篇资料入口；其非战斗面板按普通人处理。"
      }
    ],
    dimensions: dims({
      attack: ["凡人级", "凡人级", "普通人攻击，不按战斗角色抬档。"],
      defense: ["凡人级", "凡人级", "普通人承伤。"],
      movement: ["凡人速", "凡人速", "普通人移动。"],
      reaction: ["凡人速", "凡人速", "普通人反应，强项在观察和判断。"],
      vitality: ["凡人肉身", "凡人肉身", "普通人体生命体量。"],
      healing: ["无自愈", "无自愈", "没有战斗自愈体系。"],
      energy: ["凡人能量", "凡人能量", "普通人体力资源。"],
      energyRegen: ["缓慢回能", "缓慢回能｜休息", "体力恢复依赖休息。"]
    }),
    notes: notes({
      penetration: "无正式超自然攻击，调查和说服不计入攻击能级。",
      resistance: "普通人肉身，面对魔术、异常者或武装对手风险很高。",
      sensing: "观察、调查、共情和异常事件线索整理是核心能力。",
      tactics: "擅长以信息、沟通和稳定心态影响局面，不是正面战斗单位。",
      special: "异常事件调查、与两仪式的关系、稳定精神支点。",
      weakness: "缺少战斗输出、防御和超自然资源。",
      setting: "按《空之境界》本篇黑桐干也记录。",
      basis: "worldbook只用于从comment/key抽取黑桐干也姓名；定级依据TYPE-MOON Wiki公开入口，作为主要角色但非战斗角色按普通人面板处理。"
    })
  })]);
})();
