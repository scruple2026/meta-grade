(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["海贼王"];

  if (!work) {
    throw new Error("海贼王 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "nami",
      name: "娜美",
      en: "Nami",
      ja: "ナミ",
      category: "主角团",
      affiliation: "草帽一伙",
      grade: "航海士 / 天候棒",
      appearances: ["正篇"],
      timelineStatus: "和之国后 / 宙斯加入",
      aliases: ["小贼猫"],
      fandomSlug: "Nami",
      dimensions: dims({
        attack: ["墙级", "街区级｜宙斯雷云｜装备", "天候棒与宙斯可造成雷击和区域天气打击。"],
        defense: ["凡人级", "墙级｜规避", "本体防御有限，依赖机动和队友。"],
        movement: ["凡人速", "亚音速", "身体能力高于常人但非近战主力。"],
        reaction: ["凡人速", "亚音速｜战术预判", "靠气象知识和战术预判。"],
        vitality: ["强化凡体", "强化凡体", "承伤强于常人但仍脆弱。"],
        healing: ["无自愈", "无自愈", "依赖治疗。"],
        energy: ["墙级能量", "街区级能量｜宙斯｜装备", "输出主要来自装备和宙斯。"],
        energyRegen: ["无回能", "常规回能｜装备/宙斯", "依赖装备状态。"]
      }),
      notes: notes({
        penetration: "按可见破坏、命中效果和能力条件记录；特殊机制不直接抬高主攻击能级。",
        resistance: "防御、抗性、再生和特殊免疫分开记录。",
        special: "天候棒、宙斯、气象操控、雷击。",
        weakness: "存在体力、资源、条件、情报或本体弱点。",
        setting: "按当前初稿指定时间线记录，后续可按篇章拆分更细版本。",
        basis: "依据娜美至和之国后拥有宙斯后的雷击与气象支援表现定级。"
      })
    })
  ]);
})();
