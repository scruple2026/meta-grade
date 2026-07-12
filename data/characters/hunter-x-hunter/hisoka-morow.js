(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["全职猎人"];

  if (!work) {
    throw new Error("全职猎人 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "hisoka-morow",
      name: "西索·莫罗",
      en: "Hisoka Morow",
      ja: "ヒソカ＝モロウ",
      affiliation: "独行猎人 / 幻影旅团相关",
      grade: "变化系念能力者",
      appearances: ["猎人考试篇", "天空竞技场篇", "约克新篇"],
      timelineStatus: "成熟念能力者",
      aliases: ["伸缩自在的爱", "薄っぺらな嘘"],
      fandomSlug: "Hisoka_Morow",
      dimensions: dims({
        attack: ["墙级", "房屋级｜念强化与扑克牌", "念强化扑克牌、体术和绞杀能力以单体杀伤为主。"],
        defense: ["墙级", "房屋级｜念防御", "念防御与战斗技巧优秀，但硬抗范围有限。"],
        movement: ["亚音速", "亚音速", "近战速度优秀但无音速证据。"],
        reaction: ["亚音速", "亚音速", "战斗预判、心理战和念操作构成主要优势。"],
        vitality: ["强化凡体", "精锐韧体｜念强化", "可在重伤下继续战斗。"],
        healing: ["无自愈", "中速自愈｜死后念修复｜特殊", "常规无自愈，死后念修复属于特殊个例。"],
        energy: ["墙级能量", "房屋级能量｜念能力", "念量支持长时间高强度近战和复杂操作。"],
        energyRegen: ["中速回能", "中速回能", "常规念恢复。"]
      }),
      notes: notes({
        penetration: "扑克牌和伸缩自在的爱可从死角切割、束缚和撕裂目标。攻击速度：西索投出扑克牌后卡牌独立飞行，伸缩自在的爱则要先黏附或连接目标再拉扯；两者的准备和命中节奏不同。",
        resistance: "依赖念防御与技巧，面对大范围火力和情报劣势仍危险。",
        sensing: "念战经验和心理观察让他擅长读取对手习惯、杀意和误判；没有远距全域索敌。",
        tactics: "心理战和布置能力顶级，能用伸缩自在的爱、轻薄的假象和伪装制造二段陷阱；直接范围破坏不足，需依赖节奏控制。",
        special: "伸缩自在的爱、轻薄的假象、心理战、死后念个例。",
        weakness: "能力上限依赖布置、距离和战术，直接范围破坏不强。",
        setting: "按成熟念能力者西索记录，死后念只写特殊权能。",
        basis: "依据西索在天空竞技场、约克新和与旅团相关战斗中的念操作与承伤表现定级。"
      })
    })
  ]);
})();
