(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["钢之炼金术师"];

  if (!work) {
    throw new Error("钢之炼金术师 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "scar",
      name: "斯卡",
      en: "Scar",
      ja: "スカー",
      affiliation: "伊修瓦尔幸存者",
      grade: "破坏炼成武僧",
      appearances: ["正篇"],
      timelineStatus: "后期可重构炼成阵",
      aliases: ["伤疤男", "Scar"],
      fandomSlug: "Scar",
      dimensions: dims({
        attack: ["墙级", "房屋级｜分解炼成", "分解炼成对接触目标有高穿透，范围仍主要是单体或局部结构破坏。"],
        defense: ["凡人级", "墙级", "本体为强化人类武僧，靠体术和闪避减少受击。"],
        movement: ["凡人速", "亚音速", "可与国家炼金术师近战交锋，缺少稳定音速证据。"],
        reaction: ["凡人速", "亚音速", "战斗感知和近战反制强，远程攻击仍需预判。"],
        vitality: ["强化凡体", "精锐韧体", "可在重伤、追捕和连续战斗中行动，但仍是人类生命结构。"],
        healing: ["无自愈", "无自愈", "依赖自然恢复和医疗。"],
        energy: ["无资料", "无资料", "分解/重构炼金术缺少可换算个人能量池的资料。"],
        energyRegen: ["无资料", "无资料", "可连续使用右臂炼成，但个人回能机制无可量化资料。"]
      }),
      notes: notes({
        penetration: "右臂分解可绕开常规硬度直接破坏结构，是接触型高穿透能力。",
        resistance: "无明显超常抗性；对枪械、爆炸和炼金术仍需规避。",
        sensing: "伊修瓦尔武僧训练和近战经验让他能读取动作、杀意和炼金术前兆；缺少远程索敌，必须接近目标。",
        tactics: "暗杀与反炼金术经验丰富，擅长抓接触机会分解武器或人体；面对大范围远程火力时战术空间被压缩。",
        special: "分解炼成、后期重构炼成、伊修瓦尔武僧体术、阵纹知识。",
        weakness: "必须接触或接近目标，面对远程压制和大范围攻击风险高。",
        setting: "按后期获得兄长研究内容、可进行重构炼成的版本记录。",
        basis: "依据斯卡击杀国家炼金术师、对抗人造人和最终战炼成阵表现定级。"
      })
    })
  ]);
})();
