(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["JOJO的奇妙冒险：星尘斗士"];

  if (!work) {
    throw new Error("JOJO的奇妙冒险：星尘斗士 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "iggy",
      name: "伊奇",
      en: "Iggy",
      ja: "イギー",
      affiliation: "乔斯达一行",
      grade: "愚者使者",
      appearances: ["正篇"],
      timelineStatus: "",
      aliases: [],
      fandomSlug: "Iggy",
      dimensions: dims({
        attack: ["砖级", "墙级｜愚者", "砂替身可形成尖刺、拳击和防御结构。"],
        defense: ["凡人级", "墙级｜砂防御", "本体为犬类，替身砂结构可抵挡部分攻击。"],
        movement: ["凡人速", "亚音速｜替身滑翔", "短距机动灵活。"],
        reaction: ["凡人速", "亚音速", "替身战反应优秀。"],
        vitality: ["强化凡体", "强化凡体", "体型小但意志强，本体仍脆弱。"],
        healing: ["无自愈", "无自愈", "无自体再生。"],
        energy: ["凡人能量", "墙级能量｜砂替身", "替身输出有限。"],
        energyRegen: ["常规回能", "常规回能", "依赖精神力。"]
      }),
      notes: notes({
        penetration: "愚者可把砂构造成拳、尖刺、罩体和滑翔结构，适合出其不意、限制视线和局部刺击；砂替身杀伤依赖形状和地形，不是高爆发破坏。",
        resistance: "砂构造可形成临时盾和替身外壳，本体体型小、机动灵活；本体仍是犬类，受到重击、冰冻、切割或替身反馈时承伤有限。",
        special: "愚者能把砂塑造成盾、拳、尖刺、伪装和滑翔结构，适合防御、机动、地形利用与短时突袭。",
        weakness: "依赖可操控砂量和地形，远离砂源或被高精度远程压制会受限；本体脆弱，牺牲式保护队友会迅速丧失战斗能力。",
        setting: "按第三部埃及篇伊奇记录，主要以愚者砂替身的防御和机动价值定级。",
        basis: "依据伊奇对宠物店等替身战中的砂替身防御、机动和牺牲表现定级。"
      })
    })
  ]);
})();
