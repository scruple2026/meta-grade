(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["我的青春恋爱物语果然有问题"];
  if (!work) throw new Error("我的青春恋爱物语果然有问题 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "yui-yuigahama",
    name: "由比滨结衣",
    en: "Yui Yuigahama",
    ja: "由比ヶ浜結衣",
    aliases: ["结衣", "由比滨", "Yuigahama Yui"],
    affiliation: "总武高校 / 侍奉部",
    grade: "高中生 / 侍奉部成员",
    appearances: ["主线全篇"],
    timelineStatus: "总武高校主线时期",
    fandomSlug: "Yui_Yuigahama",
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
        penetration: "无特殊攻击性质。攻击速度：结衣没有可单列的兵器、弹体或术式，普通推打和道具挥用均只表现为凡人动作。",
        resistance: "普通高中生承伤。",
        sensing: "对群体情绪和关系气氛敏感，属于社交感知。",
        tactics: "擅长缓和关系、维持团队沟通和表达真实需求。",
        special: "社交亲和、情绪协调、侍奉部活动经验。",
        weakness: "肉身普通，容易被关系压力和犹豫牵制。",
        setting: "按总武高校主线时期由比滨结衣记录。",
        basis: "worldbook只用于抽取由比滨结衣姓名；定级依据TBS官方角色入口与Oregairu Wiki资料入口，按普通校园人类处理。"
      })
  })]);
})();
