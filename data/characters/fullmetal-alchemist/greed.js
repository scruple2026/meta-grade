(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["钢之炼金术师"];

  if (!work) {
    throw new Error("钢之炼金术师 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "greed",
      name: "古利德",
      en: "Greed",
      ja: "グリード",
      affiliation: "人造人阵营",
      grade: "人造人「贪婪」",
      appearances: ["约定之日", "正篇"],
      timelineStatus: "漫画/FA线 / 姚麟共生阶段",
      aliases: ["贪婪", "Greed", "古利德", "姚麟", "Ling Yao", "最强之盾"],
      fandomSlug: "Greed",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      revisionNotes: [
        "从约定之日 worldbook key/comment 的人造人规则名单补入；主面板按漫画/FA线姚麟共生后的古利德记录。"
      ],
      dimensions: dims({
        attack: ["墙级", "房屋级｜硬化爪击/姚麟体术", "硬化碳盾和姚麟体术使近战突破力高。"],
        defense: ["墙级", "房屋级｜最强之盾", "碳硬化提供高防御，是古利德核心优势。"],
        movement: ["亚音速", "亚音速｜姚麟体术", "姚麟身体和人造人强化带来优秀短距机动。"],
        reaction: ["亚音速", "亚音速｜姚麟体术/人造人经验", "可与布拉德雷等高端近战者周旋，但不按音速处理。"],
        vitality: ["精锐韧体｜贤者之石", "房屋级生命阈值｜贤者之石/人造人核心", "人造人生命结构和姚麟身体支撑续战。"],
        healing: ["快速自愈", "极速自愈｜贤者之石", "可消耗贤者之石修复身体，资源有限。"],
        energy: ["墙级能量", "房屋级能量｜贤者之石/硬化", "贤者之石与硬化能力支撑持续近战。"],
        energyRegen: ["缓慢回能", "中速回能｜贤者之石资源", "恢复依赖库存消耗与休整。"]
      }),
      notes: notes({
        penetration: "硬化爪击、姚麟体术和人造人体能偏近战穿透，不是范围炼成爆破。",
        resistance: "最强之盾硬化可显著减伤；硬化覆盖、炼金术分解和贤者之石消耗是限制。",
        sensing: "姚麟身体和新国战斗经验提供气息读取与近战判断。",
        tactics: "古利德自我意志强，姚麟共生后近战判断和合作能力提升。",
        special: "最强之盾碳硬化、贤者之石再生、姚麟共生、人造人核心。",
        weakness: "贤者之石有限，硬化覆盖可被针对；古利德和姚麟的控制权也会影响行动。",
        setting: "按漫画/FA线姚麟共生阶段记录，不单独展开早期原身体古利德。",
        basis: "依据Fullmetal Alchemist Wiki角色入口与正篇古利德硬化、姚麟共生和最终日表现保守定级。"
      })
    })
  ]);
})();
