(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Dr.STONE"];

  if (!work) {
    throw new Error("Dr.STONE work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "mirai-shishio",
      name: "狮子王未来",
      en: "Mirai Shishio",
      ja: "獅子王未来",
      affiliation: "司的家人",
      grade: "非战斗角色",
      appearances: ["石之战争篇"],
      timelineStatus: "石之战争篇 / 复活后",
      aliases: ["未来", "Mirai"],
      fandomSlug: "Mirai_Shishio",
      confidence: "medium",
      evidenceType: ["官方角色页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["凡人级", "凡人级", "没有战斗表现。"],
        defense: ["凡人级", "凡人级", "普通人肉身。"],
        movement: ["凡人速", "凡人速", "普通人移动。"],
        reaction: ["凡人速", "凡人速", "普通人反应。"],
        vitality: ["凡人肉身", "凡人肉身", "普通人生命体量。"],
        healing: ["无自愈", "无自愈", "无超自然恢复。"],
        energy: ["凡人能量", "凡人能量", "普通人体力。"],
        energyRegen: ["中速回能", "中速回能", "普通体力恢复。"]
      }),
      notes: notes({
        penetration: "无战斗定位。",
        resistance: "无特殊抗性。",
        sensing: "普通感知。",
        tactics: "非战斗角色，叙事价值大于战斗价值。",
        special: "与复活液和司的动机相关，但不构成个人战斗能力。",
        weakness: "普通人，遭遇战能力很低。",
        setting: "按石之战争篇复活后记录。",
        basis: "worldbook只用于抽取未来姓名；定级依据官方角色页与Dr.STONE Wiki资料入口。"
      })
    })
  ]);
})();
