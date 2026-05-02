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
      category: "主角团",
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
        penetration: "按可见破坏、命中效果和能力条件记录；特殊机制不直接抬高主攻击能级。",
        resistance: "防御、抗性、再生和特殊免疫分开记录。",
        special: "愚者、砂构造、防御成形、滑翔。",
        weakness: "存在体力、资源、条件、情报或本体弱点。",
        setting: "按当前初稿指定时间线记录，后续可按篇章拆分更细版本。",
        basis: "依据伊奇对宠物店等替身战中的砂替身防御、机动和牺牲表现定级。"
      })
    })
  ]);
})();
