(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["攻壳机动队"];

  if (!work) {
    throw new Error("Ghost in the Shell work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "motoko-kusanagi",
      name: "草薙素子",
      en: "Motoko Kusanagi",
      ja: "草薙素子",
      affiliation: "公安九课",
      grade: "少佐 / 全身义体特工",
      appearances: ["傀儡师事件", "1995电影"],
      timelineStatus: "1995电影 / 与傀儡师融合前",
      aliases: ["素子", "Major", "Kusanagi"],
      fandomSlug: "Motoko_Kusanagi",
      confidence: "medium",
      evidenceType: ["官方作品页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["砖级", "墙级｜军用武器/义体力量", "常规输出来自枪械、爆破、义体力量和战术装备。"],
        defense: ["砖级", "墙级｜全身义体", "全身义体强于普通人，但仍可被重武器撕裂。"],
        movement: ["凡人速", "亚音速｜义体机动/热光学迷彩", "义体提供高机动和潜入能力。"],
        reaction: ["凡人速", "亚音速｜义体/电子脑", "战斗反应和电子脑处理强。"],
        vitality: ["强化凡体｜全身义体", "精锐韧体｜义体残存", "生命体量按义体机能和脑壳存续处理。"],
        healing: ["无自愈", "缓慢自愈｜维修/换体", "义体修复依赖维修和替换，不是自愈。"],
        energy: ["砖级能量｜武器/义体", "墙级能量｜九课装备", "总资源来自义体电源、枪械、装备和九课支援。"],
        energyRegen: ["缓慢回能｜维护", "缓慢回能｜补给/维修", "需要弹药、维护和义体维修。"]
      }),
      notes: notes({
        penetration: "枪械、爆破、义体力量、热光学迷彩潜入和电子脑黑客结合形成杀伤。",
        resistance: "义体耐损强于常人，但重型装甲、反器材火力和网络攻击仍可造成严重伤害。",
        sensing: "电子脑、网络接入、战术传感器和九课情报提升索敌能力。",
        tactics: "公安九课核心行动员，擅长潜入、近战、枪战、黑客和哲学式身份判断。",
        special: "全身义体、电子脑黑客、热光学迷彩、网络潜入、Ghost相关存在问题。",
        weakness: "义体可被破坏或黑客干扰；高风险网络融合不等于常规物理战力提升。",
        setting: "按1995电影傀儡师事件、融合前草薙素子记录。",
        basis: "worldbook只用于抽取草薙素子姓名；定级依据Production I.G官方作品页、官方系列页和Ghost in the Shell Wiki入口。"
      })
    })
  ]);
})();
