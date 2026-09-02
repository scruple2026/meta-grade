(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["灵能百分百"];

  if (!work) {
    throw new Error("灵能百分百 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "ritsu-kageyama",
      name: "影山律",
      en: "Ritsu Kageyama",
      ja: "影山律",
      affiliation: "盐中学",
      grade: "觉醒超能力者",
      appearances: ["正篇", "爪世界支配篇"],
      timelineStatus: "觉醒后 / 中学生超能力者",
      aliases: ["律", "Ritsu"],
      fandomSlug: "Ritsu_Kageyama",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["墙体级", "楼宇级｜念动力", "觉醒后可用念动力攻击与抛掷。"],
        defense: ["墙体级", "楼宇级｜念动力屏障", "屏障和念动力防御。"],
        movement: ["亚音速", "亚音速｜念动力辅助", "可用念动力强化机动。"],
        reaction: ["亚音速", "亚音速", "中阶超能力战斗反应。"],
        vitality: ["强化凡体", "精锐韧体｜屏障保护", "本体是少年肉身，防护来自超能力。"],
        healing: ["无自愈", "缓慢自愈｜外部恢复", "无稳定自愈。"],
        energy: ["墙体级能量", "楼宇级能量｜念动力", "超能力储量低于茂夫和爪高层。"],
        energyRegen: ["快速回能", "快速回能", "可恢复灵能力但有上限。"]
      }),
      notes: notes({
        penetration: "念动力适合抛掷、推压和束缚，缺少茂夫级大范围峰值。攻击速度：影山律先锁定目标再以念动力推压、束缚或抛掷物体；现有资料未分别量化念力发动与被操纵物体的移动时间。",
        resistance: "屏障可防普通攻击和中阶灵能力，本体承伤有限。",
        sensing: "可感知超能力与灵异现象，心理敏感度高。",
        tactics: "学习能力强，擅长观察和协同，心态波动会影响发挥。",
        special: "念动力、屏障、灵能力觉醒。",
        weakness: "能力储量和经验低于顶级超能力者，容易被高压战局压制。",
        setting: "按觉醒后的影山律记录。",
        basis: "依据律觉醒后与觉醒实验、爪相关事件中的念动力和屏障表现定级。"
      })
    })
  ]);
})();
