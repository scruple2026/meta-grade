(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["魔法少女小圆"];

  if (!work) {
    throw new Error("魔法少女小圆 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "sayaka-miki",
      name: "美树沙耶加",
      en: "Sayaka Miki",
      ja: "美樹さやか",
      affiliation: "见泷原中学 / 魔法少女",
      grade: "魔法少女 / 剑士与再生",
      appearances: ["TV动画"],
      timelineStatus: "TV本篇 / 魔法少女至魔女化前",
      aliases: ["沙耶加", "Sayaka"],
      fandomSlug: "Sayaka_Miki",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["墙体级", "楼宇级｜剑/魔力爆发", "近战剑击和高速突进。"],
        defense: ["墙体级", "墙体级｜魔力防御", "本体承伤依赖灵魂宝石和魔力。"],
        movement: ["亚音速", "亚音速｜高速突进", "近战机动较强。"],
        reaction: ["亚音速", "亚音速", "战斗经验不足但身体强化明显。"],
        vitality: ["强化凡体", "精锐韧体｜灵魂宝石/再生", "再生与灵魂宝石机制提高续战。"],
        healing: ["快速自愈｜再生魔法", "极速自愈｜再生魔法", "再生快但加速污浊。"],
        energy: ["墙体级能量", "楼宇级能量｜剑/再生", "再生和近战消耗魔力。"],
        energyRegen: ["快速回能", "快速回能｜悲叹之种/休整", "需净化灵魂宝石。"]
      }),
      notes: notes({
        penetration: "剑击和高速突进偏近身切割，输出范围有限。攻击速度：剑击取决于近身挥剑，突进只负责缩短接战距离；连续斩击频率不能由直线移动速度代替。",
        resistance: "再生很强但会消耗魔力并推动灵魂宝石污浊。",
        sensing: "魔女结界感知和近战直觉一般，经验不足。",
        tactics: "正义感强，偏正面突入和保护他人；情绪崩溃会严重影响判断。",
        special: "剑、再生魔法、灵魂宝石、魔女化风险。",
        weakness: "情绪、执念和灵魂宝石污浊是核心弱点；经验不足。",
        setting: "按TV本篇魔女化前沙耶加记录，魔女形态不并入主面板。",
        basis: "依据沙耶加契约后的剑术、再生和魔女化前战斗表现定级。"
      })
    })
  ]);
})();
