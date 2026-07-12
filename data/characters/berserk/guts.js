(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["剑风传奇"];

  if (!work) {
    throw new Error("剑风传奇 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "guts",
      name: "格斯",
      en: "Guts",
      ja: "ガッツ",
      affiliation: "鹰之团 / 黑色剑士",
      grade: "主角 / 黑色剑士",
      appearances: ["黄金时代", "蚀之刻", "黑色剑士篇"],
      timelineStatus: "蚀之刻后 / 黑色剑士基础",
      aliases: ["黑色剑士", "百人斩", "Guts"],
      fandomSlug: "Guts",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["墙级", "楼级｜斩龙剑/义手炮", "巨大剑、义手炮和爆发力足以斩杀使徒与大型目标。"],
        defense: ["墙级", "楼级｜甲胄/意志", "依靠护甲、体魄和忍耐承伤。"],
        movement: ["凡人速", "亚音速｜爆发突进", "人类顶级短距爆发。"],
        reaction: ["凡人速", "亚音速｜战斗经验", "可应对使徒和大量敌人的近战。"],
        vitality: ["强化凡体", "精锐韧体｜极限承伤", "极端痛觉忍耐和伤残续战。"],
        healing: ["无自愈", "缓慢自愈｜休养", "无超常自愈。"],
        energy: ["砖级能量", "楼级能量｜体力/装备", "体力、武器和弹药支撑作战。"],
        energyRegen: ["中速回能", "中速回能", "依赖休息和补给。"]
      }),
      notes: notes({
        penetration: "斩龙剑和义手炮具备对大型怪物、使徒和装甲的强穿透。攻击速度：斩龙剑挥击随格斯近身动作，义手炮弹和弩箭离手后独立飞行；重剑连斩与火炮发射也受架势和装填区分。",
        resistance: "格斯承伤和意志极强，但本体仍是人类，伤势会累积。",
        sensing: "战场直觉、夜战和对恶灵/使徒的经验强，烙印会吸引而非单纯侦查。",
        tactics: "近战经验极强，擅长以受伤换窗口、利用装备和地形对抗更强怪物。",
        special: "斩龙剑、义手炮、投掷武器、烙印、黑色剑士经验。",
        weakness: "无自愈，精神创伤与烙印引来的恶灵会持续消耗；本批不计入狂战士铠甲。",
        setting: "按蚀之刻后黑色剑士基础记录，不并入狂战士铠甲后期。",
        basis: "依据格斯在黄金时代、蚀之刻和黑色剑士阶段的剑术、承伤、义手装备和使徒战表现定级。"
      })
    })
  ]);
})();
