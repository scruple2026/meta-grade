(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["剑风传奇"];

  if (!work) {
    throw new Error("剑风传奇 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "judeau",
      name: "朱德",
      en: "Judeau",
      ja: "ジュドー",
      affiliation: "鹰之团",
      grade: "部队长 / 短剑与飞刀",
      appearances: ["黄金时代", "蚀之刻"],
      timelineStatus: "黄金时代 / 蚀之刻牺牲",
      aliases: ["捷度", "裘多", "Judeau", "鹰之团残部"],
      fandomSlug: "Judeau",
      confidence: "medium",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      revisionNotes: [
        "worldbook只用于抽取鹰之团残部名单；主面板按黄金时代人类佣兵阶段记录。"
      ],
      dimensions: dims({
        attack: ["砖级", "墙级｜飞刀/短剑", "鹰之团精锐，擅长短剑和飞刀杀伤。"],
        defense: ["凡人级", "砖级｜甲胄/闪避", "本体人类，主要靠轻甲、闪避和队形。"],
        movement: ["凡人速", "亚音速｜敏捷佣兵", "敏捷和潜入能力强于普通士兵。"],
        reaction: ["凡人速", "亚音速｜短兵战", "近战与投掷反应优秀。"],
        vitality: ["强化凡体", "强化凡体", "训练有素的人类佣兵。"],
        healing: ["无自愈", "无自愈", "依赖医疗和休养。"],
        energy: ["凡人能量", "砖级能量｜体力/投掷武器", "无超自然能量池。"],
        energyRegen: ["中速回能", "中速回能", "普通体力恢复。"]
      }),
      notes: notes({
        penetration: "短剑、飞刀和敏捷突袭偏对人杀伤，不按怪物级破坏处理。",
        resistance: "人类肉身，轻甲与闪避有效但无法硬抗使徒或大型怪物。",
        sensing: "战场经验、潜行和观察力优秀，常承担侦察、沟通和救援判断。",
        tactics: "鹰之团中少数冷静读局者，擅长支援、解围、撤退和情绪安抚。",
        special: "飞刀、短剑、潜行、战场支援、鹰之团协同。",
        weakness: "无超自然防御，蚀之刻环境下被使徒群完全压制。",
        setting: "按黄金时代到蚀之刻牺牲前的朱德记录。",
        basis: "依据Berserk Wiki角色入口和黄金时代鹰之团表现保守定级；蚀之刻牺牲不提高主表量级。"
      })
    })
  ]);
})();
