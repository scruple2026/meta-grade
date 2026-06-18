(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["我的青春恋爱物语果然有问题"];
  if (!work) throw new Error("我的青春恋爱物语果然有问题 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "yukino-yukinoshita",
    name: "雪之下雪乃",
    en: "Yukino Yukinoshita",
    ja: "雪ノ下雪乃",
    aliases: ["雪乃", "雪之下", "Yukinoshita Yukino"],
    affiliation: "总武高校 / 侍奉部",
    grade: "高中生 / 侍奉部部长",
    appearances: ["主线全篇"],
    timelineStatus: "总武高校主线时期",
    fandomSlug: "Yukino_Yukinoshita",
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
        penetration: "无特殊攻击性质；辩论和批评不折算为物理攻击。",
        resistance: "普通高中生承伤，心理压力和家庭环境另写弱点。",
        sensing: "观察力、逻辑判断和问题识别强，属于社交/学业层面。",
        tactics: "擅长正面分析、组织活动和原则性推进。",
        special: "高学力、组织能力、侍奉部活动经验。",
        weakness: "肉身普通，家庭关系和自我独立问题会影响行动。",
        setting: "按总武高校主线时期雪之下雪乃记录。",
        basis: "worldbook只用于抽取雪之下雪乃姓名；定级依据TBS官方角色入口与Oregairu Wiki资料入口，按普通校园人类处理。"
      })
  })]);
})();
