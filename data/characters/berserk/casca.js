(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["剑风传奇"];

  if (!work) {
    throw new Error("剑风传奇 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "casca",
      name: "卡思嘉",
      en: "Casca",
      ja: "キャスカ",
      affiliation: "鹰之团",
      grade: "女指挥官 / 剑士",
      appearances: ["黄金时代", "蚀之刻"],
      timelineStatus: "黄金时代 / 鹰之团女指挥官",
      aliases: ["卡斯嘉", "嘉希嘉", "Casca"],
      fandomSlug: "Casca",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["砖级", "墙级｜剑术", "人类优秀剑士，能斩杀士兵和低阶怪物。"],
        defense: ["凡人级", "墙级｜甲胄/格挡", "依靠甲胄、格挡和战术站位。"],
        movement: ["凡人速", "亚音速｜剑术", "人类精锐机动。"],
        reaction: ["凡人速", "亚音速｜剑术", "近战反应优秀。"],
        vitality: ["强化凡体", "强化凡体", "训练有素的人类。"],
        healing: ["无自愈", "无自愈", "依赖医疗和休养。"],
        energy: ["凡人能量", "砖级能量｜体力/装备", "无超自然能量池。"],
        energyRegen: ["中速回能", "中速回能", "普通体力恢复。"]
      }),
      notes: notes({
        penetration: "剑术和小队配合是主要攻击方式。攻击速度：剑击是受训人类的贴身挥砍，主要靠步法和队伍掩护创造出手机会，未表现脱离本体的超常远程载体。",
        resistance: "本体人类，靠甲胄、技巧和队伍保护。",
        sensing: "战场经验和指挥判断优秀。",
        tactics: "鹰之团核心指挥之一，擅长骑兵/步兵协同和保护队友。",
        special: "剑术、战场指挥、鹰之团协同。",
        weakness: "无超自然防御，蚀之刻后精神创伤和烙印状态需另拆。",
        setting: "按黄金时代到蚀之刻前后的卡思嘉记录。",
        basis: "依据卡思嘉作为鹰之团女指挥官的剑术、统率和战场表现定级。"
      })
    })
  ]);
})();
