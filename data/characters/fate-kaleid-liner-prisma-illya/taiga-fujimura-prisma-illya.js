(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/kaleid liner 魔法少女☆伊莉雅"];

  if (!work) {
    throw new Error("Fate/kaleid liner 魔法少女☆伊莉雅 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "taiga-fujimura-prisma-illya",
      name: "藤村大河",
      en: "Taiga Fujimura",
      ja: "藤村大河",
      affiliation: "穗群原学园",
      grade: "班主任 / 剑道教师",
      appearances: ["职阶卡回收事件", "2wei", "3rei"],
      timelineStatus: "伊莉雅世界 / 教师",
      aliases: ["大河", "藤姐", "Taiga"],
      fandomSlug: "Taiga_Fujimura_(Fate/kaleid)",
      confidence: "review",
      evidenceType: ["官方入口", "资料入口"],
      sourceQuality: "entry",
      revisionNotes: ["从魔法少女伊莉雅 worldbook 的 comment/key 姓名池补入；不采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["凡人级", "砖级｜剑道/竹刀", "普通教师中偏强的剑道和喜剧性体能。"],
        defense: ["凡人级", "砖级｜喜剧性耐打", "健康成年人承伤，喜剧性耐打不代表超常防护。"],
        movement: ["凡人速", "凡人速", "普通成年人机动。"],
        reaction: ["凡人速", "凡人速", "无超常战斗反应。"],
        vitality: ["凡人肉身", "强化凡体", "健康成年人水平。"],
        healing: ["无自愈", "缓慢自愈｜休整", "自然恢复。"],
        energy: ["凡人能量", "砖级能量｜体力", "体力和剑道训练。"],
        energyRegen: ["中速回能", "中速回能｜休息/进食", "普通恢复。"]
      }),
      notes: notes({
        penetration: "剑道和竹刀可对普通人形成威胁，不对Class Card敌人构成主力输出。",
        resistance: "普通人防御。",
        sensing: "教师观察和日常管理。",
        tactics: "学校管理与照顾学生强，战斗只是低端体能优势。",
        special: "剑道教师、班主任、日常喜剧支援。",
        weakness: "无魔术防护和超常能力。",
        setting: "按Prisma Illya藤村大河记录。",
        basis: "worldbook只用于抽取藤村大河姓名；定级依据公开角色资料入口和教师/剑道定位。"
      })
    })
  ]);
})();
