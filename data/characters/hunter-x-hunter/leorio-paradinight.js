(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["全职猎人"];

  if (!work) {
    throw new Error("全职猎人 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "leorio-paradinight",
      name: "雷欧力·帕拉丁奈特",
      en: "Leorio Paradinight",
      ja: "レオリオ＝パラディナイト",
      affiliation: "猎人协会",
      grade: "医生志向猎人 / 放出系念能力者",
      appearances: ["正篇"],
      timelineStatus: "选举篇后 / 念能力已展示",
      aliases: ["雷欧力"],
      fandomSlug: "Leorio_Paradinight",
      dimensions: dims({
        attack: ["砖级", "墙级｜放出系念拳", "念能力可隔空打击，破坏规模仍偏低。"],
        defense: ["凡人级", "墙级｜念防御", "基础体格强于常人，念防御有限。"],
        movement: ["凡人速", "亚音速", "猎人级身体能力，不按音速。"],
        reaction: ["凡人速", "亚音速", "有基础念战反应但不属于顶级战斗员。"],
        vitality: ["强化凡体", "强化凡体", "身体强健但仍是人类。"],
        healing: ["无自愈", "无自愈", "作为医生志向角色可治疗他人，但自身无超常自愈。"],
        energy: ["凡人能量", "墙级能量｜念能力", "念量有限。"],
        energyRegen: ["常规回能", "常规回能", "常规念恢复。"]
      }),
      notes: notes({
        penetration: "按可见破坏、命中效果和能力条件记录；特殊机制不直接抬高主攻击能级。",
        resistance: "防御、抗性、再生和特殊免疫分开记录。",
        special: "放出系念能力、医疗知识、远程念拳。",
        weakness: "存在体力、资源、条件、情报或本体弱点。",
        setting: "按当前初稿指定时间线记录，后续可按篇章拆分更细版本。",
        basis: "依据雷欧力在选举篇展示的放出系念拳、猎人考试和主角团定位保守定级。"
      })
    })
  ]);
})();
