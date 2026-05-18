(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["钢之炼金术师"];

  if (!work) {
    throw new Error("钢之炼金术师 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "alphonse-elric",
      name: "阿尔冯斯·艾尔利克",
      en: "Alphonse Elric",
      ja: "アルフォンス・エルリック",
      affiliation: "艾尔利克兄弟",
      grade: "主角团 / 铠甲灵魂",
      appearances: ["正篇"],
      timelineStatus: "铠甲身体时期",
      aliases: ["阿尔", "铠甲阿尔"],
      fandomSlug: "Alphonse_Elric",
      dimensions: dims({
        attack: ["墙级", "房屋级｜炼成武装", "体术、铠甲力量和炼成武装可破坏墙体到小型建筑局部。"],
        defense: ["墙级", "房屋级｜铠甲身体", "空铠甲对常规肉体伤害免疫，但血印和结构破坏是核心风险。"],
        movement: ["凡人速", "亚音速", "铠甲体型限制长距离速度，近战反应和冲刺优于常人。"],
        reaction: ["凡人速", "亚音速", "可参与后期高速近战，但缺少声速级直接证据。"],
        vitality: ["精锐韧体｜特殊生命结构", "房屋级生命阈值｜铠甲身体｜血印核心", "灵魂依附铠甲，常规失血和脏器伤无效；铠甲结构可承受重创，但血印被破坏会死亡。"],
        healing: ["无自愈", "无自愈", "铠甲可维修，但不是自体恢复。"],
        energy: ["无资料", "无资料", "当前缺少足以把炼金术调用量换算成个人能量池的资料；暂不按不适用处理。"],
        energyRegen: ["无资料", "无资料", "铠甲阿尔可持续使用炼金术，但没有可量化的个人回能机制资料。"]
      }),
      notes: notes({
        penetration: "炼金术和重型铠甲格斗有局部穿透优势，但范围不高。",
        resistance: "对斩击、穿刺和失血类伤害有结构优势；血印是致命核心。",
        sensing: "铠甲身体提供不同于常人的承伤和视听观察方式，但血印不是索敌器官；主要靠经验和炼金术判断。",
        tactics: "防守与配合稳定，善于用铠甲身体保护队友并配合炼成控场；血印暴露会迫使他转入保守战术。",
        special: "铠甲灵魂附着、炼金术、免阵炼成后期表现、地形改造。",
        weakness: "血印脆弱且不可暴露；铠甲损坏会限制行动。",
        setting: "按正篇大部分时间的铠甲阿尔记录，不把恢复肉体后的状态并入。",
        basis: "依据阿尔与合成兽、人造人、金布利和父亲阵营战斗中的铠甲承伤、炼成和近战表现定级。"
      })
    })
  ]);
})();
