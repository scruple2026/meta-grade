(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["海贼王"];

  if (!work) {
    throw new Error("海贼王 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "tony-tony-chopper",
      name: "托尼托尼·乔巴",
      en: "Tony Tony Chopper",
      ja: "トニートニー・チョッパー",
      category: "主角团",
      affiliation: "草帽一伙",
      grade: "船医 / 人人果实能力者",
      appearances: ["正篇"],
      timelineStatus: "",
      aliases: ["乔巴"],
      fandomSlug: "Tony_Tony_Chopper",
      dimensions: dims({
        attack: ["墙级", "楼级｜怪物强化", "怪物强化形态体型和力量大幅提升。"],
        defense: ["墙级", "楼级｜怪物强化", "怪物强化提高承伤。"],
        movement: ["凡人速", "亚音速｜形态变化", "不同形态机动不同。"],
        reaction: ["凡人速", "亚音速", "战斗经验和形态切换。"],
        vitality: ["强化凡体", "精锐韧体｜动物系", "动物系能力和体质提升生命力。"],
        healing: ["无自愈", "常规自愈｜动物系体质", "主要作为医生治疗他人，自身无高速再生。"],
        energy: ["墙级能量", "楼级能量｜蓝波球", "强化依赖蓝波球和体力。"],
        energyRegen: ["常规回能", "常规回能", "需要休息和药物管理。"]
      }),
      notes: notes({
        penetration: "按可见破坏、命中效果和能力条件记录；特殊机制不直接抬高主攻击能级。",
        resistance: "防御、抗性、再生和特殊免疫分开记录。",
        special: "人人果实、七段变形、怪物强化、医疗技术。",
        weakness: "存在体力、资源、条件、情报或本体弱点。",
        setting: "按当前初稿指定时间线记录，后续可按篇章拆分更细版本。",
        basis: "依据乔巴至新世界篇的怪物强化、动物系体质和医疗支援表现定级。"
      })
    })
  ]);
})();
