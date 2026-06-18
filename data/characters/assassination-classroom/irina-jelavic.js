(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["暗杀教室"];

  if (!work) {
    throw new Error("Assassination Classroom work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "irina-jelavic",
      name: "伊莉娜·叶拉维奇",
      en: "Irina Jelavic",
      ja: "イリーナ・イェラビッチ",
      affiliation: "职业杀手 / 椚丘中学3年E班",
      grade: "外语教师 / 杀手",
      appearances: ["E班暗杀计划"],
      timelineStatus: "E班暗杀计划",
      aliases: ["伊莉娜", "Irina", "Bitch-sensei"],
      fandomSlug: "Irina_Jelavi%C4%87",
      confidence: "medium",
      evidenceType: ["官方入口", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["凡人级", "砖级｜暗杀工具/毒/枪械", "擅长诱导、毒物和暗杀工具，正面破坏不高。"],
        defense: ["凡人级", "凡人级", "普通人肉身。"],
        movement: ["凡人速", "凡人速", "普通人移动。"],
        reaction: ["凡人速", "凡人速｜杀手训练", "训练反应但不属高速武斗。"],
        vitality: ["凡人肉身", "强化凡体｜训练", "训练者体魄。"],
        healing: ["无自愈", "无自愈", "无自愈。"],
        energy: ["凡人能量", "砖级能量｜暗杀工具/准备", "资源来自工具、毒物、语言与情报准备。"],
        energyRegen: ["中速回能", "缓慢回能｜准备/补给", "暗杀资源需要准备。"]
      }),
      notes: notes({
        penetration: "色诱、语言、毒物、枪械和暗杀技巧适合针对人类目标。",
        resistance: "无特殊抗性，正面战斗弱于军人型角色。",
        sensing: "擅长观察目标心理与社交破绽。",
        tactics: "暗杀与社交渗透能力强，可用语言和诱导创造接近机会。",
        special: "暗杀术、多国语言、色诱、毒物和伪装。",
        weakness: "对杀老师这种异常存在正面效果有限，依赖准备和目标可被诱导。",
        setting: "按E班暗杀计划记录。",
        basis: "worldbook只用于抽取伊莉娜姓名；定级依据官方动画入口与Assassination Classroom Wiki资料入口。"
      })
    })
  ]);
})();
