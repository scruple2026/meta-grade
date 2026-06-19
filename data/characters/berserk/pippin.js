(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["剑风传奇"];

  if (!work) {
    throw new Error("剑风传奇 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "pippin",
      name: "皮宾",
      en: "Pippin",
      ja: "ピピン",
      affiliation: "鹰之团",
      grade: "重装佣兵 / 老成员",
      appearances: ["黄金时代", "蚀之刻"],
      timelineStatus: "黄金时代 / 蚀之刻牺牲",
      aliases: ["Pippin", "皮宾", "鹰之团残部"],
      fandomSlug: "Pippin",
      confidence: "medium",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      revisionNotes: [
        "worldbook只用于抽取鹰之团残部名单；主面板按黄金时代人类佣兵阶段记录。"
      ],
      dimensions: dims({
        attack: ["砖级", "墙级｜重武器/蛮力", "鹰之团重装成员，力量和重武器输出突出。"],
        defense: ["砖级", "墙级｜重甲/体格", "体格和甲胄承伤高于一般佣兵。"],
        movement: ["凡人速", "凡人速｜重装", "重装前卫机动普通。"],
        reaction: ["凡人速", "亚音速｜战场经验", "近战经验丰富，但不以速度见长。"],
        vitality: ["强化凡体", "精锐韧体｜体格/意志", "体格强壮，能承担前卫承伤。"],
        healing: ["无自愈", "无自愈", "依赖医疗和休养。"],
        energy: ["砖级能量", "墙级能量｜体力/重装作战", "体力与重装装备支撑作战。"],
        energyRegen: ["中速回能", "中速回能", "普通体力恢复。"]
      }),
      notes: notes({
        penetration: "重武器和体格偏正面破甲、压制和护卫。",
        resistance: "重甲和强壮体魄能抗常规士兵攻击，但无法硬抗使徒级怪物。",
        sensing: "沉默寡言但战场经验老练，能承担护卫和断后。",
        tactics: "偏前卫护卫与重装压制，复杂指挥通常由格里菲斯、卡思嘉等人承担。",
        special: "重装作战、强壮体格、鹰之团协同、护卫与断后。",
        weakness: "速度和远程手段有限，蚀之刻环境下缺少对使徒有效的超自然防护。",
        setting: "按黄金时代到蚀之刻牺牲前的皮宾记录。",
        basis: "依据Berserk Wiki角色入口和黄金时代鹰之团表现保守定级。"
      })
    })
  ]);
})();
