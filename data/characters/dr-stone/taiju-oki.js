(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Dr.STONE"];

  if (!work) {
    throw new Error("Dr.STONE work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "taiju-oki",
      name: "大木大树",
      en: "Taiju Oki",
      ja: "大木大樹",
      affiliation: "科学王国",
      grade: "体力担当",
      appearances: ["石之战争篇"],
      timelineStatus: "石之战争篇 / 科学王国",
      aliases: ["大树", "Taiju"],
      fandomSlug: "Taiju_Oki",
      confidence: "medium",
      evidenceType: ["官方角色页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["凡人级", "砖级｜体力", "本人常避免主动伤人，体力输出高于普通人。"],
        defense: ["砖级", "墙级｜耐打/体力", "耐打和持久力突出。"],
        movement: ["凡人速", "凡人速", "移动速度仍属普通人范围。"],
        reaction: ["凡人速", "凡人速", "普通人反应。"],
        vitality: ["强化凡体", "精锐韧体", "耐力和承伤极高但仍是人类。"],
        healing: ["无自愈", "缓慢自愈｜体魄", "自然恢复。"],
        energy: ["砖级能量｜体力", "墙级能量｜长时间劳动", "体力和持续劳动能力极强。"],
        energyRegen: ["中速回能", "中速回能｜体力", "按高体能恢复处理。"]
      }),
      notes: notes({
        penetration: "直接伤害不突出，主要靠体力、搬运、阻挡和耐久。",
        resistance: "耐打和毅力强，但无特殊抗性。",
        sensing: "普通感知。",
        tactics: "负责体力劳动、吸引注意和承受风险，能支撑科学王国后勤。",
        special: "超常体力、耐力和劳动续航。",
        weakness: "缺乏技巧和远程手段，主动攻击意愿低。",
        setting: "按石之战争篇记录。",
        basis: "worldbook只用于抽取大树姓名；定级依据官方角色页与Dr.STONE Wiki资料入口。"
      })
    })
  ]);
})();
