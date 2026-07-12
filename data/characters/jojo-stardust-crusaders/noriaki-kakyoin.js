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
        energyRegen: ["中速回能", "中速回能", "依赖精神力。"]
      }),
      notes: notes({
        penetration: "绿色法皇可用绿宝石水花远程弹幕、结界线和潜入式替身操作攻击死角，适合侦查、牵制和范围警戒；单发穿透有限，依赖布置和距离。攻击速度：花京院操纵绿色法皇布置结界或瞄准后发射绿宝石水花，弹幕离体传播；潜入式操作则按替身移动另判。",
        resistance: "本体防御普通，主要靠结界预警、远程站位和替身侦查避免被近身；替身被直接重创会反馈本体，缺少再生或强硬防。",
        sensing: "绿色法皇可远程侦查并布置结界预警，是团队索敌强项；结界需要时间和空间布置。",
        tactics: "擅长用远程替身、结界和绿宝石水花控制路线并试探能力；近距被高速突破或时停时本体承压严重。",
        special: "绿色法皇、结界、绿宝石水花、远程侦查。",
        weakness: "需要距离和结界布置，正面近战弱于白金之星/世界这类近距强替身；被时停、隐形绕后或高速突破时本体很难承伤。",
        setting: "按第三部星尘斗士旅程期记录，DIO战结界侦查作为代表峰值但不抬本体硬度。",
        basis: "依据花京院在第三部替身战与DIO战中的远程弹幕和结界表现定级。"
      })
    })
  ]);
})();
