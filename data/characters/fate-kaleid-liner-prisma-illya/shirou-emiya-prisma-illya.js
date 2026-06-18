(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/kaleid liner 魔法少女☆伊莉雅"];

  if (!work) {
    throw new Error("Fate/kaleid liner 魔法少女☆伊莉雅 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "shirou-emiya-prisma-illya",
      name: "卫宫士郎",
      en: "Shirou Emiya",
      ja: "衛宮士郎",
      affiliation: "伊莉雅家庭",
      grade: "义兄 / 日常支援",
      appearances: ["职阶卡回收事件", "2wei", "3rei"],
      timelineStatus: "伊莉雅世界 / 义兄",
      aliases: ["士郎", "Shirou", "义兄"],
      fandomSlug: "Shirou_Emiya_(Fate/kaleid)",
      confidence: "review",
      evidenceType: ["官方入口", "资料入口"],
      sourceQuality: "entry",
      revisionNotes: ["从魔法少女伊莉雅 worldbook 的 comment/key 姓名池补入；不采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["凡人级", "砖级｜家务/弓道基础", "本版本主要是日常支援，不并入美游世界士郎战绩。"],
        defense: ["凡人级", "凡人级", "普通人承伤。"],
        movement: ["凡人速", "凡人速", "普通高中生机动。"],
        reaction: ["凡人速", "凡人速", "无稳定魔术战反应。"],
        vitality: ["凡人肉身", "强化凡体", "普通人到健康训练者水平。"],
        healing: ["无自愈", "缓慢自愈｜休整", "依赖自然恢复。"],
        energy: ["凡人能量", "砖级能量｜体力", "以体力和日常行动为主。"],
        energyRegen: ["中速回能", "中速回能｜休息/进食", "普通人恢复。"]
      }),
      notes: notes({
        penetration: "本条是伊莉雅世界的义兄士郎，主要无战斗输出；不合并美游世界英灵化士郎。",
        resistance: "普通人承伤，缺少稳定魔术防护。",
        sensing: "日常观察和照顾能力强，无超常索敌。",
        tactics: "日常支援、料理和家庭照应为主，不是前线战斗单位。",
        special: "伊莉雅义兄身份、家庭支援；美游世界士郎应另拆版本。",
        weakness: "正面战斗能力低，面对Class Card敌人需要保护。",
        setting: "按Prisma Illya早期伊莉雅世界士郎记录。",
        basis: "worldbook只用于抽取卫宫士郎姓名；定级依据公开角色资料入口和本作早期义兄定位。"
      })
    })
  ]);
})();
