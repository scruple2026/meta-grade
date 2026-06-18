(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Dr.STONE"];

  if (!work) {
    throw new Error("Dr.STONE work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "hyoga",
      name: "冰月",
      en: "Hyoga",
      ja: "氷月",
      affiliation: "司帝国",
      grade: "管枪高手",
      appearances: ["石之战争篇"],
      timelineStatus: "石之战争篇 / 司帝国武斗派",
      aliases: ["Hyoga", "管枪"],
      fandomSlug: "Hyoga",
      confidence: "medium",
      evidenceType: ["官方角色页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["砖级", "墙级｜管枪术", "以枪术和体术形成高人类级杀伤。"],
        defense: ["砖级", "墙级｜格挡/体术", "靠体术、武器格挡和身法防御。"],
        movement: ["凡人速", "亚音速｜武斗", "高端人类机动。"],
        reaction: ["凡人速", "亚音速｜枪术", "近战反应优秀。"],
        vitality: ["强化凡体", "精锐韧体", "高端武斗者体魄。"],
        healing: ["无自愈", "缓慢自愈｜体魄", "恢复仍是自然恢复。"],
        energy: ["砖级能量", "墙级能量｜体能/武器", "持续战斗资源较高。"],
        energyRegen: ["中速回能", "中速回能｜体能", "按高体能恢复处理。"]
      }),
      notes: notes({
        penetration: "管枪术具备高穿刺和距离控制优势。",
        resistance: "依靠武器格挡和体术，不具备超自然抗性。",
        sensing: "战斗观察和距离判断强。",
        tactics: "冷静、目的明确，擅长以枪术优势压制近战对手。",
        special: "管枪术、司帝国武斗派战斗经验。",
        weakness: "仍是人类肉身，受科学道具、陷阱和多人协同制约。",
        setting: "按石之战争篇记录。",
        basis: "worldbook只用于抽取冰月姓名；定级依据官方角色页与Dr.STONE Wiki资料入口。"
      })
    })
  ]);
})();
