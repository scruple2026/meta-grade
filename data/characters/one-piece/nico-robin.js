(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["海贼王"];

  if (!work) {
    throw new Error("海贼王 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "nico-robin",
      name: "妮可·罗宾",
      en: "Nico Robin",
      ja: "ニコ・ロビン",
      category: "主角团",
      affiliation: "草帽一伙",
      grade: "考古学家 / 花花果实能力者",
      appearances: ["正篇"],
      timelineStatus: "和之国后 / 恶魔形态",
      aliases: [],
      fandomSlug: "Nico_Robin",
      dimensions: dims({
        attack: ["墙级", "楼级｜恶魔形态", "花花果实可进行关节锁、巨肢打击和范围压制。"],
        defense: ["凡人级", "墙级｜规避/分身", "本体防御有限。"],
        movement: ["凡人速", "亚音速｜能力辅助", "位移能力不突出。"],
        reaction: ["凡人速", "亚音速", "战场控制与预判较强。"],
        vitality: ["强化凡体", "强化凡体", "本体仍接近人类。"],
        healing: ["无自愈", "无自愈", "依赖治疗。"],
        energy: ["墙级能量", "楼级能量｜恶魔形态", "大范围能力消耗体力。"],
        energyRegen: ["常规回能", "常规回能", "依赖体力恢复。"]
      }),
      notes: notes({
        penetration: "按可见破坏、命中效果和能力条件记录；特殊机制不直接抬高主攻击能级。",
        resistance: "防御、抗性、再生和特殊免疫分开记录。",
        special: "花花果实、巨肢、分身、恶魔形态、关节技。",
        weakness: "存在体力、资源、条件、情报或本体弱点。",
        setting: "按当前初稿指定时间线记录，后续可按篇章拆分更细版本。",
        basis: "依据罗宾至和之国篇恶魔形态和花花果实控制表现定级。"
      })
    })
  ]);
})();
