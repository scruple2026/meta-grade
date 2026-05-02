(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["海贼王"];

  if (!work) {
    throw new Error("海贼王 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "franky",
      name: "弗兰奇",
      en: "Franky",
      ja: "フランキー",
      affiliation: "草帽一伙",
      grade: "船匠 / 改造人",
      appearances: ["正篇"],
      timelineStatus: "",
      aliases: [],
      fandomSlug: "Franky",
      dimensions: dims({
        attack: ["楼级", "街区级｜弗兰奇将军", "激光、火炮和弗兰奇将军提供重火力。"],
        defense: ["楼级", "街区级｜改造身体/机甲", "钢铁改造和机甲提高承伤。"],
        movement: ["凡人速", "亚音速｜机动装备", "机动一般，依赖装备。"],
        reaction: ["凡人速", "亚音速", "战斗经验和机械辅助。"],
        vitality: ["精锐韧体", "楼级生命阈值｜改造人", "改造身体提高生命阈值。"],
        healing: ["无自愈", "常规自愈｜维修", "需要维修和可乐补给。"],
        energy: ["楼级能量", "街区级能量｜装备/可乐", "输出依赖可乐和武装。"],
        energyRegen: ["无回能", "常规回能｜可乐补给", "需要补给。"]
      }),
      notes: notes({
        penetration: "按可见破坏、命中效果和能力条件记录；特殊机制不直接抬高主攻击能级。",
        resistance: "防御、抗性、再生和特殊免疫分开记录。",
        special: "改造身体、风来炮、激光、弗兰奇将军。",
        weakness: "存在体力、资源、条件、情报或本体弱点。",
        setting: "按当前初稿指定时间线记录，后续可按篇章拆分更细版本。",
        basis: "依据弗兰奇新世界篇火力、机甲和承伤表现定级。"
      })
    })
  ]);
})();
