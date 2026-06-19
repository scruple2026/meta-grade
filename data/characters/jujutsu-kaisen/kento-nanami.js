(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) {
    throw new Error("咒术回战 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "kento-nanami",
      name: "七海建人",
      en: "Kento Nanami",
      ja: "七海建人",
      affiliation: "一级术师 / 前东京高专",
      grade: "一级术师 / 十划咒法",
      appearances: ["幼鱼与逆罚", "涩谷事变"],
      timelineStatus: "涩谷事变",
      aliases: ["Nanami", "七海", "娜娜明", "十划咒法", "Ratio Technique", "Overtime"],
      fandomSlug: "Kento_Nanami",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Jujutsu Kaisen Wiki: Kento Nanami",
          url: "https://jujutsu-kaisen.fandom.com/wiki/Kento_Nanami",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对七海建人、一级术师、十划咒法、加班限制和涩谷事变相关表现；具体量级按作品内表现保守记录。"
        }
      ],
      revisionNotes: [
        "从咒术回战改 worldbook 的七海建人 key/comment 补入；未采用 worldbook 正文描述。"
      ],
      dimensions: dims({
        attack: ["墙级", "楼级｜十划咒法/瓦落瓦落/加班", "十划咒法制造弱点暴击，加班和瓦落瓦落提供峰值爆发。"],
        defense: ["墙级", "楼级｜咒力防护/一级术师", "一级术师肉体和咒力防护较强，但不能硬吃特级领域和高阶火力。"],
        movement: ["亚音速", "音速｜一级术师体术", "近战机动稳定，非高速型术式角色。"],
        reaction: ["亚音速", "音速｜一级术师经验", "可处理真人、改造人和涩谷乱战中的近战威胁。"],
        vitality: ["精锐韧体", "精锐韧体｜咒力强化/意志", "高抗压和带伤作战能力突出，但本体仍是人类术师。"],
        healing: ["无自愈", "无自愈", "缺少稳定反转术式自愈表现。"],
        energy: ["墙级能量", "楼级能量｜咒力/加班", "咒力资源支撑多轮近战和术式暴击，加班提高峰值。"],
        energyRegen: ["中速回能", "快速回能｜一级术师续航", "续航强于普通术师，但仍受伤势和咒力消耗限制。"]
      }),
      notes: notes({
        penetration: "十划咒法可在目标上制造 7:3 弱点，配合钝刀和瓦落瓦落形成高局部破坏。",
        resistance: "一级术师咒力强化与意志强，但没有反转术式；领域、灵魂伤害和大范围火力风险高。",
        sensing: "战斗经验和咒力感知稳定，擅长判断近战破绽；非远距索敌型。",
        tactics: "冷静、务实，擅长按风险和时间管理作战；加班限制和队友保护会影响行动节奏。",
        special: "十划咒法、瓦落瓦落、加班/时间限制、一级术师经验。",
        weakness: "缺少领域、反转术式和远程高火力；面对特级咒灵或灵魂改造术式容错有限。",
        setting: "按涩谷事变阶段七海建人记录，不把称号或人气直接转换为更高档。",
        basis: "worldbook只用于抽取七海建人姓名；定级依据公开角色资料入口和幼鱼与逆罚、涩谷事变中的十划咒法表现。"
      })
    })
  ]);
})();
