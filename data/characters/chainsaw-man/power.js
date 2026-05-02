(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["电锯人"];

  if (!work) {
    throw new Error("电锯人 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "power",
      name: "帕瓦",
      en: "Power",
      ja: "パワー",
      category: "主角团",
      affiliation: "公安对魔特异课",
      grade: "血之魔人",
      appearances: ["公安篇"],
      timelineStatus: "魔人常态 / 不含血之恶魔完全体",
      aliases: ["血之魔人", "Power"],
      fandomSlug: "Power",
      dimensions: dims({
        attack: ["墙级", "房屋级｜血武器", "血液武器可穿刺、砸击和局部破坏建筑。"],
        defense: ["墙级", "房屋级｜血液补强", "魔人肉体强于人类但并非高硬度防御。"],
        movement: ["凡人速", "亚音速", "身体能力强于常人，缺乏稳定高速移动证据。"],
        reaction: ["凡人速", "亚音速", "可参与恶魔战，反应受性格和战术影响较大。"],
        vitality: ["精锐韧体｜魔人｜特殊生命结构", "精锐韧体｜魔人", "魔人生命结构强于人类，但头部和血量仍关键。"],
        healing: ["常规自愈", "快速自愈｜饮血", "补血可恢复伤势，缺血时削弱。"],
        energy: ["墙级能量", "房屋级能量｜血液操控", "血液是主要资源。"],
        energyRegen: ["常规回能", "快速回能｜饮血", "依赖血液补充。"]
      }),
      notes: notes({
        penetration: "血矛和血锤具备穿刺杀伤，但受血量和操控限制。",
        resistance: "魔人身体可承受部分重伤，仍可能被斩首、贯穿和压制。",
        special: "血液武器、血液操控、饮血恢复、魔人生命结构。",
        weakness: "血量、恐惧、判断失误和缺乏纪律性会影响发挥。",
        setting: "按公安篇血之魔人常态记录；血之恶魔完全体为特殊峰值不并入。",
        basis: "依据帕瓦与蝙蝠恶魔、公安任务和最终对玛奇玛支援中的血武器与恢复表现定级。"
      })
    })
  ]);
})();
