(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["鬼灭之刃"];

  if (!work) {
    throw new Error("鬼灭之刃 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "genya-shinazugawa",
      name: "不死川玄弥",
      en: "Genya Shinazugawa",
      ja: "不死川玄弥",
      affiliation: "鬼杀队",
      grade: "主角团 / 食鬼体质",
      appearances: ["刀匠村篇", "无限城篇"],
      timelineStatus: "无限城 / 食鬼状态",
      aliases: ["食鬼", "南蛮枪"],
      fandomSlug: "Genya_Shinazugawa",
      dimensions: dims({
        attack: ["墙体级", "房屋级｜枪械｜食鬼", "枪械、日轮弹和食鬼后鬼化能力为主。"],
        defense: ["凡人级", "墙体级｜食鬼", "食鬼后承伤和恢复提升。"],
        movement: ["亚音速", "亚音速", "速度不是强项。"],
        reaction: ["亚音速", "亚音速｜食鬼", "可在上弦战中配合队友抓机会，但主要依赖协同和时机。"],
        vitality: ["强化凡体", "精锐韧体｜食鬼", "食鬼体质显著提高重伤存活。"],
        healing: ["无自愈", "快速自愈｜食鬼", "吞食鬼肉后可短时获得鬼式恢复。"],
        energy: ["凡人能量", "墙体级能量｜食鬼", "资源来自体力、弹药和食鬼状态。"],
        energyRegen: ["中速回能", "快速回能｜食鬼", "食鬼状态有时限和材料依赖。"]
      }),
      notes: notes({
        penetration: "日轮枪弹和血鬼术化弹丸具备针对鬼的特殊杀伤。攻击速度：日轮枪弹离膛后显著快于玄弥本人奔跑，射击仍受瞄准、装填和弹药限制；血鬼术化也不改变这些前置。",
        resistance: "食鬼提升恢复，不代表能承受斩首级伤害。",
        sensing: "主要依赖猎鬼训练、视听观察和食鬼后的鬼化身体反应；没有柱级通透或远距索敌。",
        tactics: "擅长用枪弹、食鬼恢复和队友配合抓住上弦破绽；个人剑术不足使他更依赖准备弹药和协同节奏。",
        special: "食鬼体质、鬼化恢复、日轮枪弹、短时血鬼术化。",
        weakness: "依赖鬼肉和弹药；基础剑术和速度不如柱。",
        setting: "按刀匠村和无限城食鬼状态综合记录；食鬼、枪械和短时血鬼术化作为条件峰值，不当作稳定鬼化常态。",
        basis: "依据玄弥对半天狗分身和黑死牟战中的食鬼、恢复、枪械支援表现定级。"
      })
    })
  ]);
})();
