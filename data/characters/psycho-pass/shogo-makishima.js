(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["心理测量者"];

  if (!work) {
    throw new Error("Psycho-Pass work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "shogo-makishima",
      name: "槙岛圣护",
      en: "Shogo Makishima",
      ja: "槙島聖護",
      affiliation: "反西比拉犯罪网络",
      grade: "主要反派 / 免罪体质者",
      appearances: ["西比拉系统审判篇", "第一季"],
      timelineStatus: "第一季 / 西比拉颠覆行动",
      aliases: ["Makishima", "白发犯罪者", "免罪体质"],
      fandomSlug: "Shogo_Makishima",
      confidence: "medium",
      evidenceType: ["官方入口", "角色页入口", "权能项"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["砖级", "墙级｜武器/爆炸物/犯罪网络", "本人近战和武器危险，峰值来自准备和外部犯罪资源。"],
        defense: ["凡人级", "凡人级｜免罪体质非硬度", "免罪体质绕开西比拉判定，不提升肉身硬度。"],
        movement: ["凡人速", "亚音速｜近战", "近战机动优于普通人。"],
        reaction: ["凡人速", "亚音速｜近战/读招", "格斗和心理读招强。"],
        vitality: ["凡人肉身", "强化凡体", "身体素质强但仍属人类。"],
        healing: ["无自愈", "无自愈", "无自愈。"],
        energy: ["砖级能量｜体能/武器", "墙级能量｜犯罪网络/准备", "总资源来自武器、共犯和计划。"],
        energyRegen: ["中速回能", "缓慢回能｜准备/资源", "外部资源需要筹备。"]
      }),
      notes: notes({
        penetration: "刀具、枪械、爆炸物、操纵他人和系统漏洞利用形成威胁。攻击速度：槙岛的刀具依赖近身出手，枪弹离膛后独立飞行，爆炸物还要另计布置、触发和爆炸时间。",
        resistance: "免罪体质让Dominator难以制裁，但不等同免疫物理攻击。",
        sensing: "洞察人性和社会结构，能识破西比拉依赖与个体心理弱点。",
        tactics: "极强的思想操控、犯罪策划和心理战能力。",
        special: "免罪体质、反西比拉思想、犯罪网络、心理诱导。",
        weakness: "仍是凡人肉身，面对不依赖Dominator判定的物理压制会受伤死亡。",
        setting: "按第一季槙岛圣护记录。",
        basis: "worldbook只用于抽取槙岛圣护姓名；定级依据PSYCHO-PASS官方入口、授权角色页与Psycho-Pass Wiki资料入口，免罪体质写入特殊项。"
      })
    })
  ]);
})();
