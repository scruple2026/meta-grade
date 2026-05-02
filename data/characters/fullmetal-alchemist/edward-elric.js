(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["钢之炼金术师"];

  if (!work) {
    throw new Error("钢之炼金术师 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "edward-elric",
      name: "爱德华·艾尔利克",
      en: "Edward Elric",
      ja: "エドワード・エルリック",
      category: "主角团",
      affiliation: "艾尔利克兄弟 / 国家炼金术师",
      grade: "主角 / 钢之炼金术师",
      appearances: ["正篇"],
      timelineStatus: "最终章前后 / 失去炼金术前",
      aliases: ["爱德", "钢之炼金术师"],
      fandomSlug: "Edward_Elric",
      dimensions: dims({
        attack: ["墙级", "房屋级｜炼成武装", "炼金术可快速构造武器、地刺和掩体，实战多为局部破坏而非大范围爆破。"],
        defense: ["凡人级", "墙级｜机械铠｜炼成掩体", "本体仍是人类肉身，峰值主要来自机械铠格挡和临时掩体。"],
        movement: ["凡人速", "亚音速｜近战爆发", "体术和机械铠带来优秀短距机动，但没有稳定音速移动证据。"],
        reaction: ["凡人速", "亚音速", "可应对枪械、炼金术和近战高速交锋；默认包含预判和战斗经验，不按弹速直抬。"],
        vitality: ["强化凡体", "精锐韧体", "多次重伤后继续行动，但失血、骨折和机械铠损坏仍会明显削弱。"],
        healing: ["无自愈", "无自愈", "无超常自愈，依赖医疗、机械铠维护和休养。"],
        energy: ["无资料", "无资料", "当前缺少足以把常规炼金术调用量换算成个人能量池的资料。"],
        energyRegen: ["无资料", "无资料", "可连续炼成，但没有可量化的个人回能机制资料。"]
      }),
      notes: notes({
        penetration: "炼成武器可针对结构弱点攻击，破坏范围有限；不把炼成技巧等同更高攻击能级。",
        resistance: "机械铠可抗部分切割和冲击，但覆盖率有限，内脏、头部和失血仍是弱点。",
        special: "免阵炼成、机械铠格斗、地形改造、武器炼成、炼金术解析。",
        weakness: "失去双臂或机械铠受损会严重影响战斗；无自愈，面对枪械齐射和大范围爆炸较脆。",
        setting: "按正篇后期、仍能使用炼金术的爱德记录；最终放弃真理之门后的版本不并入。",
        basis: "依据爱德与人造人、国家炼金术师、合成兽和父亲大人相关战斗中的局部破坏、格挡和承伤表现保守定级。"
      })
    })
  ]);
})();
