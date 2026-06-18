(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["心理测量者"];

  if (!work) {
    throw new Error("Psycho-Pass work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "tomomi-masaoka",
      name: "征陆智己",
      en: "Tomomi Masaoka",
      ja: "征陸智己",
      affiliation: "公安一系 / 执行官",
      grade: "资深执行官 / 前刑警",
      appearances: ["西比拉系统审判篇", "第一季"],
      timelineStatus: "第一季 / 资深执行官",
      aliases: ["征陆", "Masaoka"],
      fandomSlug: "Tomomi_Masaoka",
      confidence: "medium",
      evidenceType: ["官方入口", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["砖级", "墙级｜Dominator/枪械", "老练执行官，峰值来自Dominator和警用武器。"],
        defense: ["凡人级", "砖级｜义肢/经验", "有义肢与经验加成，但肉身仍有限。"],
        movement: ["凡人速", "凡人速", "年长刑警机动。"],
        reaction: ["凡人速", "亚音速｜刑警经验", "经验和直觉可弥补部分速度差。"],
        vitality: ["强化凡体", "精锐韧体｜意志/义肢", "资深刑警承伤和意志较强。"],
        healing: ["无自愈", "缓慢自愈｜体魄", "自然恢复。"],
        energy: ["砖级能量｜体能/武器", "墙级能量｜Dominator/公安资源", "资源来自武器、Dominator和经验。"],
        energyRegen: ["中速回能", "缓慢回能｜补给", "装备需要补给。"]
      }),
      notes: notes({
        penetration: "Dominator、枪械、刑警经验和近身应对。",
        resistance: "肉身和义肢可承受一定伤害，但无特殊抗性。",
        sensing: "老刑警的现场嗅觉和调查经验很强。",
        tactics: "丰富刑警经验、队伍支援和临场保护能力。",
        special: "Dominator使用、执行官权限、义肢、老刑警经验。",
        weakness: "年龄和身体损耗限制机动；Dominator受系统判定限制。",
        setting: "按第一季资深执行官阶段记录。",
        basis: "worldbook只用于抽取征陆智己姓名；定级依据PSYCHO-PASS官方入口、授权角色页与Psycho-Pass Wiki资料入口。"
      })
    })
  ]);
})();
