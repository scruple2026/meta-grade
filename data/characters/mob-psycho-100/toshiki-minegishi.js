(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["灵能百分百"];

  if (!work) {
    throw new Error("灵能百分百 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "toshiki-minegishi",
      name: "峯岸稔树",
      en: "Toshiki Minegishi",
      ja: "峯岸稔樹",
      affiliation: "爪",
      grade: "最终五人 / 植物操控",
      appearances: ["爪世界支配篇"],
      timelineStatus: "爪篇 / 植物操控",
      aliases: ["峯岸", "Minegishi"],
      fandomSlug: "Toshiki_Minegishi",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["墙级", "楼级｜植物操控", "植物藤蔓和高速生长可限制、刺穿和压制。"],
        defense: ["墙级", "楼级｜植物屏障", "可用植物墙和藤蔓防御。"],
        movement: ["凡人速", "亚音速｜植物辅助", "本体移动一般，依赖植物控场。"],
        reaction: ["亚音速", "亚音速", "可参与爪高层战斗。"],
        vitality: ["强化凡体", "精锐韧体｜屏障保护", "本体承伤有限。"],
        healing: ["无自愈", "无自愈", "无自愈表现。"],
        energy: ["墙级能量", "楼级能量｜植物操控", "超能力资源用于催生和控制植物。"],
        energyRegen: ["快速回能", "快速回能", "持续控场会消耗。"]
      }),
      notes: notes({
        penetration: "植物藤蔓、枝干和根系可束缚、刺穿和封锁移动。",
        resistance: "植物屏障可抵挡普通攻击，火焰、高热、大范围切割和高速突入会克制。",
        sensing: "可通过植物布置扩大控制范围，但对无植物环境依赖更高。",
        tactics: "擅长阵地战、封锁道路和牵制多人；环境准备越充分收益越高。",
        special: "植物操控、快速生长、藤蔓束缚、阵地封锁。",
        weakness: "本体脆弱，能力受环境、火焰和范围破坏限制。",
        setting: "按爪篇峯岸稔树记录。",
        basis: "依据峯岸作为爪最终五人之一的植物操控、封锁和防御表现定级。"
      })
    })
  ]);
})();
