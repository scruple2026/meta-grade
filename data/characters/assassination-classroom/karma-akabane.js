(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["暗杀教室"];

  if (!work) {
    throw new Error("Assassination Classroom work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "karma-akabane",
      name: "赤羽业",
      en: "Karma Akabane",
      ja: "赤羽業",
      affiliation: "椚丘中学3年E班",
      grade: "E班学生 / 高智商格斗型",
      appearances: ["E班暗杀计划"],
      timelineStatus: "E班训练期",
      aliases: ["业", "Karma"],
      fandomSlug: "Karma_Akabane",
      confidence: "medium",
      evidenceType: ["官方入口", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["砖级", "墙级｜格斗/陷阱/武器", "学生中格斗和策略突出，但仍是人类尺度。"],
        defense: ["凡人级", "砖级｜格斗/防具", "防御依赖身体素质、反应和装备。"],
        movement: ["凡人速", "亚音速｜格斗", "近现实高端学生格斗机动。"],
        reaction: ["凡人速", "亚音速｜格斗/读招", "读招和临场反应强。"],
        vitality: ["强化凡体", "强化凡体", "训练者体魄。"],
        healing: ["无自愈", "无自愈", "无自愈。"],
        energy: ["砖级能量｜体能/武器", "墙级能量｜陷阱/团队资源", "峰值来自陷阱、武器和准备。"],
        energyRegen: ["中速回能", "中速回能｜体能", "普通高体能恢复。"]
      }),
      notes: notes({
        penetration: "格斗、陷阱、武器和心理挑衅结合，擅长制造对方失误。",
        resistance: "肉身仍是学生水平，需规避重火力和高速对手。",
        sensing: "观察、挑衅和读招能力强。",
        tactics: "高智商、胆大且善于用心理战和陷阱试探强敌。",
        special: "暗杀训练、格斗、陷阱、心理战。",
        weakness: "正面量级有限，容易因好胜承担风险。",
        setting: "按E班暗杀训练期记录。",
        basis: "worldbook只用于抽取赤羽业姓名；定级依据官方动画入口与Assassination Classroom Wiki资料入口。"
      })
    })
  ]);
})();
