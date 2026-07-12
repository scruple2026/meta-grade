(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Dr.STONE"];

  if (!work) {
    throw new Error("Dr.STONE work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "tsukasa-shishio",
      name: "狮子王司",
      en: "Tsukasa Shishio",
      ja: "獅子王司",
      affiliation: "司帝国",
      grade: "武斗派首领",
      appearances: ["石之战争篇"],
      timelineStatus: "石之战争篇 / 司帝国首领",
      aliases: ["司", "Tsukasa"],
      fandomSlug: "Tsukasa_Shishio",
      confidence: "medium",
      evidenceType: ["官方角色页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["砖级", "墙级｜徒手/武器", "近现实人类巅峰级武力，按现实超常但非超自然处理。"],
        defense: ["砖级", "墙级｜格挡/体魄", "体魄极强但仍是人类肉身。"],
        movement: ["凡人速", "亚音速｜武斗", "高端人类机动。"],
        reaction: ["凡人速", "亚音速｜武斗", "顶级武斗反应。"],
        vitality: ["强化凡体", "精锐韧体", "生命体量远超普通人但不脱离人类尺度。"],
        healing: ["无自愈", "缓慢自愈｜体魄", "恢复仍是自然恢复。"],
        energy: ["砖级能量", "墙级能量｜体能/武器", "近战持续战斗资源很高。"],
        energyRegen: ["中速回能", "中速回能｜体能", "按高体能恢复处理。"]
      }),
      notes: notes({
        penetration: "徒手、武器和格斗可对普通人形成压倒性杀伤。攻击速度：狮子王司以拳脚、长枪或投掷进行近现实高端攻击，近战随本体接战，投掷物离手后才按独立弹道判断。",
        resistance: "强悍体魄和格挡能力，但无超自然抗性。",
        sensing: "战斗直觉和野外判断强。",
        tactics: "武斗与领导能力兼具，善于用威慑、资源和人员筛选建立司帝国。",
        special: "近现实人类巅峰格斗、司帝国统率。",
        weakness: "仍受伤病、武器、陷阱和科学道具制约。",
        setting: "按石之战争篇司帝国首领记录。",
        basis: "worldbook只用于抽取狮子王司姓名；定级依据官方角色页与Dr.STONE Wiki资料入口，按近现实人类巅峰保守记录。"
      })
    })
  ]);
})();
