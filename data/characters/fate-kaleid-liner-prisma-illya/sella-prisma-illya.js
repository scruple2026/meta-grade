(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/kaleid liner 魔法少女☆伊莉雅"];

  if (!work) {
    throw new Error("Fate/kaleid liner 魔法少女☆伊莉雅 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "sella-prisma-illya",
      name: "塞拉",
      en: "Sella",
      ja: "セラ",
      affiliation: "爱因兹贝伦家",
      grade: "女仆 / 家庭监护",
      appearances: ["职阶卡回收事件", "2wei", "3rei"],
      timelineStatus: "伊莉雅世界 / 女仆",
      aliases: ["Sella", "爱因兹贝伦女仆"],
      fandomSlug: "Sella_(Fate/kaleid)",
      confidence: "review",
      evidenceType: ["官方入口", "资料入口"],
      sourceQuality: "entry",
      revisionNotes: ["从魔法少女伊莉雅 worldbook 的 comment/key 姓名池补入；不采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["凡人级", "砖级｜女仆体术", "主要为日常监护和喜剧性制裁。"],
        defense: ["凡人级", "砖级｜训练/防护", "非主战角色。"],
        movement: ["凡人速", "凡人速", "普通到训练者机动。"],
        reaction: ["凡人速", "凡人速", "无稳定超常战斗反应。"],
        vitality: ["凡人肉身", "强化凡体", "女仆/监护者水平。"],
        healing: ["无自愈", "缓慢自愈｜休整", "依赖自然恢复。"],
        energy: ["凡人能量", "砖级能量｜体力", "以体力和日常支援为主。"],
        energyRegen: ["中速回能", "中速回能｜休息/进食", "普通恢复。"]
      }),
      notes: notes({
        penetration: "日常体术和家务制裁为主，不作战斗主力。",
        resistance: "无明确魔法少女级防护。",
        sensing: "家庭管理、监护和异常情况察觉。",
        tactics: "严厉监护和家务管理强，战斗策略不是核心。",
        special: "爱因兹贝伦女仆身份、家庭支援。",
        weakness: "正面战斗能力有限。",
        setting: "按Prisma Illya早期塞拉记录。",
        basis: "worldbook只用于抽取塞拉姓名；定级依据公开角色资料入口和本作家庭监护定位。"
      })
    })
  ]);
})();
