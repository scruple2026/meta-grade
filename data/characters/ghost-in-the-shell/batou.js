(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["攻壳机动队"];

  if (!work) {
    throw new Error("Ghost in the Shell work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "batou",
      name: "巴特",
      en: "Batou",
      ja: "バトー",
      affiliation: "公安九课",
      grade: "义体特工 / 草薙搭档",
      appearances: ["傀儡师事件", "1995电影"],
      timelineStatus: "1995电影 / 公安九课行动员",
      aliases: ["Batou", "九课巴特"],
      fandomSlug: "Batou",
      confidence: "medium",
      evidenceType: ["官方作品页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["砖级", "墙级｜枪械/义体力量", "输出来自枪械、爆破和义体力量。"],
        defense: ["砖级", "墙级｜义体改造", "义体化程度高，承伤强于普通人。"],
        movement: ["凡人速", "亚音速｜义体机动", "义体提升机动。"],
        reaction: ["凡人速", "亚音速｜义体/战斗经验", "公安九课老练行动员反应。"],
        vitality: ["强化凡体｜义体", "精锐韧体｜义体", "按义体耐损和脑壳存续记录。"],
        healing: ["无自愈", "缓慢自愈｜维修", "受损需要维修。"],
        energy: ["砖级能量｜武器/义体", "墙级能量｜九课装备", "资源来自义体、电源、弹药和支援。"],
        energyRegen: ["缓慢回能｜维护", "缓慢回能｜补给/维修", "需要维护与弹药补给。"]
      }),
      notes: notes({
        penetration: "枪械、重火器、义体力量和战术支援。攻击速度：巴特的枪械与重火器分别受瞄准、击发、供弹和后坐影响，弹丸离膛后独立飞行；义体拳击则只随近战肢体动作。",
        resistance: "义体耐损强于普通人，但仍受重武器和黑客威胁。",
        sensing: "电子眼、战术传感器和九课通信提供索敌优势。",
        tactics: "经验丰富，适合火力支援、保护草薙和追踪调查。",
        special: "义体改造、电子脑、九课特工训练。",
        weakness: "网络攻击和义体损伤会影响行动；黑客能力不如草薙/傀儡师核心。",
        setting: "按1995电影傀儡师事件记录。",
        basis: "worldbook只用于抽取巴特姓名；定级依据Production I.G官方作品页、官方系列页和Ghost in the Shell Wiki入口。"
      })
    })
  ]);
})();
