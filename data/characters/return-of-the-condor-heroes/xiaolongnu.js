(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["神雕侠侣"];
  if (!work) throw new Error("神雕侠侣 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "xiaolongnu",
    name: "小龙女",
    en: "Xiaolongnu",
    aliases: ["小龍女", "龙姑娘", "姑姑", "Little Dragon Maiden"],
    affiliation: "古墓派",
    grade: "古墓派高手",
    appearances: ["金庸共通世界书", "神雕侠侣"],
    timelineStatus: "主线综合期 / 玉女心经",
    fandomSlug: "小龍女",
    confidence: "medium",
    evidenceType: ["角色页入口", "小说资料入口", "worldbook姓名字段"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["砖块级", "墙体级｜玉女心经/双剑合璧", "输出偏高速剑法与合击，单体杀伤强。"],
      defense: ["砖块级", "墙体级｜轻功/招架", "防御依赖身法、剑法和内功。"],
      movement: ["亚音速", "亚音速｜古墓轻功", "轻灵身法是核心优势。"],
      reaction: ["亚音速", "亚音速｜双剑/左右互搏", "招式转换和近战反应强。"],
      vitality: ["强化凡体", "精锐韧体｜内功", "人体结构，内功提高续战。"],
      healing: ["缓慢自愈", "中速自愈｜内功调息", "可通过内功和休养恢复。"],
      energy: ["砖块级能量", "墙体级能量｜玉女心经", "内力资源按高端武者处理。"],
      energyRegen: ["缓慢回能", "缓慢回能｜调息", "需调息恢复。"]
    }),
    notes: notes({
      penetration: "玉女剑法、双剑合璧和左右互搏偏高速连击与破绽压制。攻击速度：玉女剑法、左右互搏与双剑合璧强调近身连击和招式衔接，属于兵刃出手而非长距离移动。",
      resistance: "身法和招架强，正面硬抗不如重掌型高手。",
      sensing: "心境清冷，观察细致，索敌仍按武侠常规。",
      tactics: "擅长以轻功、连击和合击节奏压制对手。",
      special: "玉女心经、玉女剑法、双剑合璧、左右互搏相关表现。",
      weakness: "世事经验和情绪牵制是短板；部分峰值需与杨过合击。",
      setting: "金庸共通 worldbook 的古墓派 key 中出现小龙女；本条按《神雕侠侣》主线综合期记录。",
      basis: "worldbook只用于抽取小龙女姓名；定级依据金庸 Wiki 角色/作品入口，古墓派身份不直接抬高主面板。"
    })
  })]);
})();
