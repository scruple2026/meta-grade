(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Re:从零开始的异世界生活"];

  if (!work) {
    throw new Error("Re:Zero work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "petelgeuse-romanee-conti",
      name: "佩特留斯·罗马尼·康帝",
      en: "Petelgeuse Romanée-Conti",
      ja: "ペテルギウス・ロマネコンティ",
      affiliation: "魔女教",
      grade: "大罪司教 / 怠惰担当",
      appearances: ["王选篇", "怠惰讨伐"],
      timelineStatus: "怠惰大罪司教",
      aliases: ["佩特留斯", "Petelgeuse", "怠惰", "不可视之手"],
      fandomSlug: "Petelgeuse_Romanee-Conti",
      confidence: "review",
      evidenceType: ["官方角色页", "角色页入口", "权能项"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["砖级", "街区级｜不可视之手/魔女教资源｜争议", "不可视之手具备强单体压制，范围与破坏规模按保守争议记录。"],
        defense: ["凡人级", "墙级｜不可视之手防护/转移条件", "本体肉身有限，防护与延续依赖权能和指尖条件。"],
        movement: ["凡人速", "亚音速｜权能辅助", "本体机动不高，权能可改变接战距离。"],
        reaction: ["凡人速", "亚音速｜不可视之手", "权能可迅速干涉，但不写高天文速度。"],
        vitality: ["凡人肉身", "精锐韧体｜指尖/凭依条件｜争议", "可通过指尖与凭依延续威胁，但不是单一本体生命体量。"],
        healing: ["无自愈", "未知｜凭依/指尖", "延续机制不等同普通自愈。"],
        energy: ["砖级能量", "街区级能量｜权能/魔女教资源｜争议", "能量与权能规模按高风险保守处理。"],
        energyRegen: ["未知", "未知｜权能", "缺少可量化回能资料。"]
      }),
      notes: notes({
        penetration: "不可视之手偏隐形打击、束缚、压碎和多方向干涉，不等同大范围爆破。",
        resistance: "本体肉身不强，靠权能、指尖和魔女教机制维持威胁。",
        sensing: "可利用魔女气味、信徒和权能条件追踪目标，但不是全域索敌。",
        tactics: "精神状态狂热，压迫力强但行为模式可被情报和诱导针对。",
        special: "不可视之手、怠惰权能、指尖、凭依、魔女教组织资源。",
        weakness: "权能有可被识破和针对的条件；本体与指尖被清除后威胁下降。",
        setting: "按王选篇怠惰大罪司教阶段记录。",
        basis: "worldbook只用于抽取佩特留斯姓名；定级依据官方角色页与Re:Zero Wiki资料入口，不可视之手写为权能峰值而非泛化破坏档。"
      })
    })
  ]);
})();
