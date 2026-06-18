(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["海贼王"];

  if (!work) {
    throw new Error("海贼王 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "marco",
      name: "马尔科",
      en: "Marco",
      ja: "マルコ",
      affiliation: "白胡子海贼团",
      grade: "一番队队长 / 不死鸟果实",
      appearances: ["顶上战争", "和之国篇"],
      timelineStatus: "顶上战争至和之国 / 不死鸟",
      aliases: ["不死鸟马尔科", "Marco the Phoenix"],
      fandomSlug: "Marco",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      revisionNotes: [
        "从海贼王 worldbook 名字池补入；主面板突出不死鸟恢复，但不把恢复折算成无限防御。"
      ],
      dimensions: dims({
        attack: ["楼级", "街区级｜动物系/霸气", "踢击、飞行冲撞和霸气具高端队长级杀伤，但破坏范围不按四皇峰值处理。"],
        defense: ["街区级", "城市级｜不死鸟再生｜争议", "蓝焰再生能承受并修复重伤，防御优势来自恢复而非硬度。"],
        movement: ["超音速", "高超音速｜飞行｜争议", "飞行机动和高速拦截突出。"],
        reaction: ["超音速", "高超音速｜争议", "可在顶上战争和和之国高端战场拦截强敌。"],
        vitality: ["街区级生命阈值", "城市级生命阈值｜再生续战｜争议", "不死鸟恢复极大提升生命体量，但存在体力消耗。"],
        healing: ["快速自愈｜不死鸟蓝焰", "极速自愈｜不死鸟蓝焰｜争议", "蓝焰可快速恢复伤势，也可治疗他人，但受体力限制。"],
        energy: ["街区级能量", "城市级能量｜不死鸟蓝焰｜争议", "恢复、飞行和霸气消耗体力。"],
        energyRegen: ["快速回能", "快速回能｜体力恢复", "恢复力强但蓝焰不是无限资源。"]
      }),
      notes: notes({
        penetration: "以高速踢击、飞行冲撞和霸气打击为主，杀伤偏单体压制；不死鸟蓝焰主要用于恢复，不是高热攻击。",
        resistance: "幻兽种再生能修复大量伤害，适合承受爆发并继续拦截；海楼石、海水、霸气持续压制和体力耗尽会限制恢复。",
        sensing: "白胡子团一番队队长级战场判断，擅长空中拦截和保护队友。",
        tactics: "偏支援与救场，能用飞行、恢复和牵制拖住高端敌人；持续治疗多人会迅速消耗资源。",
        special: "鸟鸟果实幻兽种不死鸟形态、蓝焰再生、飞行、霸气。",
        weakness: "蓝焰恢复受体力限制，输出上限低于专职破坏型四皇/大将；海楼石与海水是恶魔果实通用限制。",
        setting: "按顶上战争至和之国阶段记录，不把再生视为无限防御或无限生命。",
        basis: "依据马尔科在顶上战争、保护白胡子团和和之国支援战中的飞行、再生和高端拦截表现定级。"
      })
    })
  ]);
})();
