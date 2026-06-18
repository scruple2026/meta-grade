(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Re:从零开始的异世界生活"];

  if (!work) {
    throw new Error("Re:Zero work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "julius-juukulius",
      name: "尤里乌斯·尤库里乌斯",
      en: "Julius Juukulius",
      ja: "ユリウス・ユークリウス",
      affiliation: "安娜塔西亚阵营 / 近卫骑士团",
      grade: "最优骑士 / 精灵骑士",
      appearances: ["王选篇", "怠惰讨伐"],
      timelineStatus: "王选篇 / 最优骑士",
      aliases: ["Julius", "最优骑士"],
      fandomSlug: "Julius_Juukulius",
      confidence: "medium",
      evidenceType: ["官方角色页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["砖级", "墙级｜剑术/准精灵魔法", "剑技与精灵术组合提供高人类级杀伤。"],
        defense: ["砖级", "墙级｜剑术/精灵术", "防御依赖技量、精灵术和装备。"],
        movement: ["亚音速", "亚音速｜骑士剑术", "高端骑士机动。"],
        reaction: ["亚音速", "亚音速｜最优骑士", "战斗反应优秀。"],
        vitality: ["强化凡体", "精锐韧体", "训练者体魄。"],
        healing: ["无自愈", "缓慢自愈｜治疗辅助可能", "自身不以再生著称。"],
        energy: ["砖级能量", "墙级能量｜精灵术/剑技", "魔力、准精灵和体能共同支撑作战。"],
        energyRegen: ["中速回能", "中速回能｜魔力/精灵术", "按骑士与精灵术资源恢复处理。"]
      }),
      notes: notes({
        penetration: "剑术、准精灵魔法和协同攻击形成多样化杀伤。",
        resistance: "防御依赖技量和精灵术，肉身不等同重装魔兽。",
        sensing: "骑士训练和准精灵协同提供战场感知。",
        tactics: "礼仪、战术、团队协同和对魔女教作战执行力强。",
        special: "最优骑士剑技、准精灵契约、精灵术。",
        weakness: "仍受魔力、精灵协同和身体状态限制。",
        setting: "按王选篇至怠惰讨伐阶段记录。",
        basis: "worldbook只用于抽取尤里乌斯姓名；定级依据官方角色页与Re:Zero Wiki资料入口。"
      })
    })
  ]);
})();
