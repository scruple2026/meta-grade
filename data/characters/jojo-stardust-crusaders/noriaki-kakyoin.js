(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["JOJO的奇妙冒险：星尘斗士"];

  if (!work) {
    throw new Error("JOJO的奇妙冒险：星尘斗士 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "noriaki-kakyoin",
      name: "花京院典明",
      en: "Noriaki Kakyoin",
      ja: "花京院典明",
      affiliation: "乔斯达一行",
      grade: "绿色法皇使者",
      appearances: ["正篇"],
      timelineStatus: "",
      aliases: [],
      fandomSlug: "Noriaki_Kakyoin",
      dimensions: dims({
        attack: ["墙级", "房屋级｜绿宝石水花", "远程弹幕和结界适合压制，范围有限。"],
        defense: ["凡人级", "墙级｜替身结界", "本体防御有限，替身结界可侦测和拦截。"],
        movement: ["凡人速", "凡人速", "无超常移动。"],
        reaction: ["凡人速", "亚音速｜替身结界", "结界预警帮助反应，不等同高速肉体。"],
        vitality: ["强化凡体", "强化凡体", "本体仍是人类。"],
        healing: ["无自愈", "无自愈", "依赖治疗。"],
        energy: ["凡人能量", "房屋级能量｜替身弹幕", "替身远程输出有限。"],
        energyRegen: ["常规回能", "常规回能", "依赖精神力。"]
      }),
      notes: notes({
        penetration: "主要按可见破坏与命中效果记录；特殊机制不直接抬高主攻击能级。",
        resistance: "防御、抗性、再生和特殊免疫分开记录，不把难杀直接换算为高防御。",
        special: "绿色法皇、结界、绿宝石水花、远程侦查。",
        weakness: "存在资源、体力、条件、情报或本体弱点，已在峰值标签和依据中限制。",
        setting: "按当前初稿指定时间线记录，后续可按篇章拆分更细版本。",
        basis: "依据花京院在第三部替身战与DIO战中的远程弹幕和结界表现定级。"
      })
    })
  ]);
})();
