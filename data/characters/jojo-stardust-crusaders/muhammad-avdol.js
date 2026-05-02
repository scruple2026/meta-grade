(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["JOJO的奇妙冒险：星尘斗士"];

  if (!work) {
    throw new Error("JOJO的奇妙冒险：星尘斗士 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "muhammad-avdol",
      name: "穆罕默德·阿布德尔",
      en: "Muhammad Avdol",
      ja: "モハメド・アヴドゥル",
      affiliation: "乔斯达一行",
      grade: "魔术师之红使者",
      appearances: ["正篇"],
      timelineStatus: "",
      aliases: [],
      fandomSlug: "Muhammad_Avdol",
      dimensions: dims({
        attack: ["墙级", "房屋级｜魔术师之红", "火焰替身可焚烧、爆燃和远程压制，范围有限。"],
        defense: ["凡人级", "墙级｜替身格挡", "本体为人类，替身可格挡部分攻击。"],
        movement: ["凡人速", "亚音速｜替身短距", "替身机动不等同本体长距移动。"],
        reaction: ["亚音速", "亚音速｜替身感知", "成熟替身使者反应。"],
        vitality: ["强化凡体", "强化凡体", "本体仍是人类。"],
        healing: ["无自愈", "无自愈", "无自体再生。"],
        energy: ["凡人能量", "房屋级能量｜火焰替身", "替身火焰输出有限。"],
        energyRegen: ["常规回能", "常规回能", "依赖精神力。"]
      }),
      notes: notes({
        penetration: "按可见破坏、命中效果和能力条件记录；特殊机制不直接抬高主攻击能级。",
        resistance: "防御、抗性、再生和特殊免疫分开记录。",
        special: "魔术师之红、火焰操控、替身侦测。",
        weakness: "存在体力、资源、条件、情报或本体弱点。",
        setting: "按当前初稿指定时间线记录，后续可按篇章拆分更细版本。",
        basis: "依据阿布德尔在第三部替身战中的火焰输出、经验和承伤表现定级。"
      })
    })
  ]);
})();
