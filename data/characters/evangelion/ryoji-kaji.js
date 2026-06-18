(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["新世纪福音战士"];

  if (!work) {
    throw new Error("新世纪福音战士 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "ryoji-kaji",
      name: "加持良治",
      en: "Ryoji Kaji",
      ja: "加持リョウジ",
      affiliation: "NERV / 日本政府 / SEELE相关",
      grade: "情报员 / 三重间谍",
      appearances: ["TV版"],
      timelineStatus: "TV中后期 / 情报行动",
      aliases: ["加持", "Kaji"],
      fandomSlug: "Ryoji_Kaji",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["凡人级", "砖级｜手枪/格斗", "个人战斗为训练成年人和轻武器水平。"],
        defense: ["凡人级", "砖级｜掩体/防护", "本体无超常防御。"],
        movement: ["凡人速", "凡人速", "普通成年人。"],
        reaction: ["凡人速", "凡人速", "依靠训练和警觉。"],
        vitality: ["凡人肉身", "强化凡体", "普通人类承伤。"],
        healing: ["无自愈", "无自愈", "依赖医疗。"],
        energy: ["凡人能量", "砖级能量｜装备", "无超自然能量池。"],
        energyRegen: ["中速回能", "中速回能", "按普通体力恢复。"]
      }),
      notes: notes({
        penetration: "轻武器和格斗有限，主要威胁来自情报获取和组织穿透。",
        resistance: "本体普通人，靠隐蔽、身份伪装和情报差生存。",
        sensing: "情报嗅觉、组织观察和危险判断很强。",
        tactics: "潜入、双面/三面身份和情报交换是核心价值，可改变作战信息格局。",
        special: "间谍网络、情报战、NERV/SEELE/政府多方渠道。",
        weakness: "个人战斗力有限，身份暴露后缺少正面保命手段。",
        setting: "按 TV 版加持良治记录。",
        basis: "依据加持作为三重间谍、情报员和NERV相关行动中的个人能力定级。"
      })
    })
  ]);
})();
