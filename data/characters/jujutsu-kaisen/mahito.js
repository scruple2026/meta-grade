(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) {
    throw new Error("咒术回战 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "mahito",
      name: "真人",
      en: "Mahito",
      ja: "真人",
      affiliation: "灾害咒灵阵营",
      grade: "特级咒灵 / 无为转变",
      appearances: ["幼鱼与逆罚", "涩谷事变"],
      timelineStatus: "涩谷事变 / 即身成体",
      aliases: ["Mahito", "无为转变", "自闭圆顿裹"],
      fandomSlug: "Mahito",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      revisionNotes: [
        "从咒术回战 worldbook 名字池补入；灵魂改造作为特殊权能记录，不直接抬攻击破坏档。"
      ],
      dimensions: dims({
        attack: ["房屋级", "街区级｜无为转变/领域", "无为转变对灵魂致命，但破坏规模仍按咒术高端保守处理。"],
        defense: ["墙级", "楼级｜灵魂形态/咒力", "可改造自身灵魂形态规避伤害，但会被灵魂攻击和克制手段伤到。"],
        movement: ["亚音速", "音速", "近战与形态变化速度强。"],
        reaction: ["亚音速", "音速", "能在涩谷高压近战中适应对手。"],
        vitality: ["精锐韧体", "街区级生命阈值｜灵魂形态｜争议", "只要灵魂形状维持即可续战，但咒力会消耗。"],
        healing: ["快速自愈｜灵魂塑形", "极速自愈｜灵魂塑形｜争议", "通过维持灵魂形状修复身体，受咒力和灵魂损伤限制。"],
        energy: ["楼级能量", "街区级能量｜领域/无为转变", "咒力储量支撑领域、改造人与形态变化。"],
        energyRegen: ["快速回能", "快速回能｜咒力恢复", "成长和恢复快，但不是无限。"]
      }),
      notes: notes({
        penetration: "无为转变直接改造触碰目标灵魂，领域可强化命中条件；该效果是灵魂权能，不按爆炸范围抬档。",
        resistance: "能通过灵魂形态维持身体，常规物理伤害收益低；能触及灵魂、宿傩干预、咒力耗尽或领域对抗会威胁他。",
        sensing: "对灵魂轮廓和咒力有敏锐理解，能快速学习对手能力边界。",
        tactics: "成长速度快，擅长用改造人、心理打击和领域压力迫使对手失误；经验积累仍短。",
        special: "无为转变、灵魂改造、改造人、领域展开自闭圆顿裹、即身成体。",
        weakness: "灵魂被识别或直接攻击时防御优势下降；领域和形态维持消耗咒力，面对宿傩等克制目标会受限。",
        setting: "按涩谷事变即身成体附近的真人记录，不把灵魂权能换算为更高破坏级。",
        basis: "依据真人在幼鱼与逆罚、涉谷事变中无为转变、领域、灵魂修复和即身成体表现定级。"
      })
    })
  ]);
})();
