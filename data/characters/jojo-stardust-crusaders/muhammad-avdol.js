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
        attack: ["墙体级", "房屋级｜魔术师之红", "火焰替身可焚烧、爆燃和远程压制，范围有限。"],
        defense: ["凡人级", "墙体级｜替身格挡", "本体为人类，替身可格挡部分攻击。"],
        movement: ["凡人速", "亚音速｜替身短距", "替身机动不等同本体长距移动。"],
        reaction: ["亚音速", "亚音速｜替身感知", "成熟替身使者反应。"],
        vitality: ["强化凡体", "强化凡体", "本体仍是人类。"],
        healing: ["无自愈", "无自愈", "无自体再生。"],
        energy: ["凡人能量", "房屋级能量｜火焰替身", "替身火焰输出有限。"],
        energyRegen: ["中速回能", "中速回能", "依赖精神力。"]
      }),
      notes: notes({
        penetration: "魔术师之红的火焰可远程焚烧、爆燃、改变轨迹并用十字火焰飓风压制敌人，适合对生物、可燃物和隐蔽目标造成持续伤害；不把火焰范围外推为大型爆破。攻击速度：阿布德尔先操纵魔术师之红生成火焰，火焰弹、改变轨迹和十字火焰飓风再各自接近目标；连续攻击取决于替身操控。",
        resistance: "本体是人类，替身可格挡和以火焰逼退近身敌人；对偷袭、枪械、强近战替身和无法燃烧/高耐热目标缺少硬抗。",
        sensing: "成熟替身使者经验和魔术师之红可用于火焰侦测、控场和威胁预警；环境遮蔽和友军位置会影响判断。",
        tactics: "经验丰富，擅长用火焰封路、保护队友和识破替身战陷阱；承担护卫职责时容易被牺牲局面限制。",
        special: "魔术师之红可远程操控火焰、爆燃和十字火焰飓风，并具备成熟替身使者的侦测、经验和控场能力。",
        weakness: "火焰能力受环境、氧气、友军位置和敌人耐热性影响；阿布德尔常承担保护队友职责，容易被高信息差或牺牲局面限制。",
        setting: "按第三部星尘斗士旅程期记录；替身侦测和火焰压制写入特殊权能，不抬本体移动或防御。",
        basis: "依据阿布德尔在第三部替身战中的火焰输出、经验和承伤表现定级。"
      })
    })
  ]);
})();
