(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) {
    throw new Error("咒术回战 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "toji-fushiguro",
      name: "伏黑甚尔",
      en: "Toji Fushiguro",
      ja: "伏黒甚爾",
      affiliation: "术师杀手 / 原禅院家",
      grade: "天与咒缚 / 咒具使用者",
      appearances: ["怀玉·玉折", "涩谷事变"],
      timelineStatus: "怀玉·玉折 / 术师杀手",
      aliases: ["禅院甚尔", "Toji", "术师杀手", "天与咒缚"],
      fandomSlug: "Toji_Fushiguro",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      revisionNotes: [
        "从咒术回战 worldbook 名字池补入；主面板按怀玉·玉折时期本人，咒具能力写入攻击性质。"
      ],
      dimensions: dims({
        attack: ["墙级", "楼级｜咒具/天逆鉾", "肉体、游云、释魂刀和天逆鉾提供高穿透近战杀伤。"],
        defense: ["墙级", "楼级｜天与咒缚体魄", "肉体承伤强，但无咒力护盾或反转术式。"],
        movement: ["亚音速", "超音速｜天与咒缚", "完成天与咒缚带来极高近战机动。"],
        reaction: ["亚音速", "超音速｜感官", "超常感官和经验支撑高速突袭与反制。"],
        vitality: ["强化凡体", "精锐韧体｜天与咒缚", "肉体韧性极强但没有自愈。"],
        healing: ["无自愈", "无自愈", "依赖外部治疗或休养。"],
        energy: ["凡人能量", "墙级能量｜体能/咒具", "几乎无咒力，能量总量按体力和咒具战斗资源记录。"],
        energyRegen: ["中速回能", "中速回能", "没有咒力回复体系，依赖体力恢复。"]
      }),
      notes: notes({
        penetration: "天逆鉾可干涉术式，释魂刀打击灵魂轮廓，游云强化纯物理打击；这些都是咒具/特殊穿透，不抬破坏范围。",
        resistance: "零咒力让许多结界和咒力索敌难以识别，肉体极强；但被命中要害仍会死亡，没有反转术式或再生。",
        sensing: "超常五感、零咒力隐蔽和战斗经验极强，能利用术师索敌盲区接近目标。",
        tactics: "术师暗杀经验丰富，擅长情报准备、消耗对手、选择咒具和利用目标保护任务制造破绽。",
        special: "天与咒缚、零咒力、咒具库、天逆鉾、释魂刀、游云。",
        weakness: "强依赖咒具、准备和近身路线；被拉入大范围持续压制或失去武器时上限下降。",
        setting: "按怀玉·玉折时期伏黑甚尔记录；涩谷临时复活状态只作为同身体素质参考。",
        basis: "依据伏黑甚尔在怀玉·玉折中对五条、夏油和星浆体任务相关战斗的肉体、咒具和暗杀表现定级。"
      })
    })
  ]);
})();
