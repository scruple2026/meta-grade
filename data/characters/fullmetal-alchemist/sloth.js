(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["钢之炼金术师"];

  if (!work) {
    throw new Error("钢之炼金术师 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "sloth",
      name: "斯洛斯",
      en: "Sloth",
      ja: "スロウス",
      affiliation: "人造人阵营",
      grade: "人造人「怠惰」",
      appearances: ["约定之日", "正篇"],
      timelineStatus: "漫画/FA线 / 约定之日",
      aliases: ["怠惰", "Sloth", "斯洛斯", "大块头人造人"],
      fandomSlug: "Sloth",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      revisionNotes: [
        "从约定之日 worldbook key/comment 的人造人规则名单补入；主面板按漫画/FA线斯洛斯记录。"
      ],
      dimensions: dims({
        attack: ["房屋级", "楼级｜巨体冲撞", "巨体怪力和冲撞可造成大规模局部破坏。"],
        defense: ["房屋级", "楼级｜巨体/再生", "巨体和贤者之石再生提供高承伤。"],
        movement: ["凡人速", "亚音速｜直线冲刺", "平时迟缓，但短距离直线爆发极快。"],
        reaction: ["凡人速", "亚音速｜本能冲撞", "反应与判断迟钝，冲刺速度不等同复杂反应。"],
        vitality: ["房屋级生命阈值｜巨体/贤者之石", "楼级生命阈值｜巨体/贤者之石", "巨体、人造人结构和贤者之石支撑承伤。"],
        healing: ["快速自愈", "极速自愈｜贤者之石", "可消耗贤者之石修复身体。"],
        energy: ["房屋级能量", "楼级能量｜巨体/贤者之石", "体力、巨体和贤者之石资源支撑重体力作战。"],
        energyRegen: ["缓慢回能", "中速回能｜贤者之石资源", "恢复依赖库存消耗而非自然回能。"]
      }),
      notes: notes({
        penetration: "巨体冲撞、抓握和怪力偏正面破坏，对墙体、地面和近距离目标压制强。攻击速度：斯洛斯的冲撞要先加速接近，抓握和怪力打击则在贴身后完成；高速直冲与手臂出手不是同一动作。",
        resistance: "巨体和贤者之石再生使其难以快速击倒，但消耗、关节控制和协同打击有效。",
        sensing: "战斗索敌和判断较差，主要依赖近距离目标和命令。",
        tactics: "战术简单，偏直线冲撞和力量压制；容易被灵活对手诱导。",
        special: "巨体怪力、贤者之石再生、人造人核心、短距高速冲刺。",
        weakness: "判断迟缓、机动线路单一，贤者之石资源有限。",
        setting: "按漫画/FA线最终日附近的斯洛斯记录，不使用2003版设定。",
        basis: "依据Fullmetal Alchemist Wiki角色入口与正篇斯洛斯巨体、冲刺和再生表现保守定级。"
      })
    })
  ]);
})();
