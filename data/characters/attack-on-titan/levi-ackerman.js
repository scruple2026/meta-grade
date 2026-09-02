(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["进击的巨人"];

  if (!work) {
    throw new Error("进击的巨人 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "levi-ackerman",
      name: "利威尔·阿克曼",
      en: "Levi Ackerman",
      ja: "リヴァイ・アッカーマン",
      affiliation: "调查兵团",
      grade: "人类最强士兵",
      appearances: ["正篇"],
      timelineStatus: "巅峰期到最终章重伤前表现综合",
      aliases: ["兵长", "Levi"],
      fandomSlug: "Levi_Ackerman",
      dimensions: dims({
        attack: ["砖块级", "墙体级｜雷枪｜高速斩击", "常规斩击针对巨人弱点，雷枪提供局部爆破。"],
        defense: ["凡人级", "墙体级｜机动规避", "本体仍为人类，防御来自规避、经验和装备。"],
        movement: ["亚音速", "亚音速｜立体机动", "立体机动和短距爆发极高，但未给音速主档。"],
        reaction: ["亚音速", "亚音速｜阿克曼觉醒", "对兽之巨人等高速战场威胁反应极强，按亚音速保守处理。"],
        vitality: ["强化凡体", "精锐韧体", "最终章重伤后仍能行动，但人体弱点明显。"],
        healing: ["无自愈", "无自愈", "无自体再生。"],
        energy: ["凡人能量", "墙体级能量｜装备", "输出依赖装备、爆雷和体力。"],
        energyRegen: ["中速回能", "中速回能", "需要补给和休养。"]
      }),
      notes: notes({
        penetration: "对巨人后颈、眼部和关节有极强弱点打击能力。攻击速度：双刀斩击与立体机动接战紧密绑定，刀刃本身没有脱离利威尔独立飞行；连续削切依赖瓦斯和锚索路线。",
        resistance: "不具备巨人级防御，爆炸重伤会长期削弱。",
        sensing: "阿克曼战斗本能与极限立体机动经验提供强动态捕捉和威胁排序；重伤会削弱判断与执行。",
        tactics: "单兵战术顶级，善于利用地形、速度差和连续切割瓦解巨人目标；空旷地形或装备受损会削弱优势。",
        special: "阿克曼战斗本能、立体机动极限操作、对巨人专精。",
        weakness: "依赖装备和地形；重伤会显著削弱战力。",
        setting: "巅峰战斗表现与最终章重伤后行动力综合记录，峰值不代表重伤常态。",
        basis: "依据利威尔压制兽之巨人、对抗无垢巨人群和最终战支援表现定级。"
      })
    })
  ]);
})();
