(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["进击的巨人"];

  if (!work) {
    throw new Error("进击的巨人 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "armin-arlert",
      name: "阿尔敏·阿诺德",
      en: "Armin Arlert",
      ja: "アルミン・アルレルト",
      category: "主角团",
      affiliation: "调查兵团",
      grade: "超大型巨人继承者 / 指挥官",
      appearances: ["玛莱篇", "地鸣篇"],
      timelineStatus: "继承超大型巨人后",
      aliases: ["阿尔敏", "超大型巨人"],
      fandomSlug: "Armin_Arlert",
      dimensions: dims({
        attack: ["凡人级", "街区级｜超大型巨人爆风", "常态肉身弱；巨人化爆风和超大型巨人体型可造成大范围破坏。"],
        defense: ["凡人级", "楼级｜超大型巨人体", "人类本体脆弱，巨人体承伤高但行动迟缓。"],
        movement: ["凡人速", "亚音速｜立体机动", "人类状态依赖立体机动；超大型巨人移动慢。"],
        reaction: ["凡人速", "亚音速", "战术判断强，身体反应不按顶级阿克曼处理。"],
        vitality: ["强化凡体", "楼级生命阈值｜巨人体", "巨人体可承受大量伤害，本体仍是关键。"],
        healing: ["无自愈", "快速自愈｜巨人之力", "巨人继承者可再生，受体力限制。"],
        energy: ["凡人能量", "街区级能量｜巨人化爆风", "爆风是巨人化释放，不代表常态人类能量池。"],
        energyRegen: ["常规回能", "快速回能｜巨人之力", "多次巨人化受体力与资源限制。"]
      }),
      notes: notes({
        penetration: "超大型巨人爆风以范围热冲击为主，不是精准穿透。",
        resistance: "人类本体脆弱，巨人体后颈和继承者位置是弱点。",
        special: "超大型巨人化、高温蒸汽、爆风、战术指挥。",
        weakness: "超大型巨人行动缓慢且消耗大；人类常态近战较弱。",
        setting: "按继承超大型巨人后的阿尔敏记录。",
        basis: "依据阿尔敏继承超大型巨人后的爆风、巨人体和最终战战术表现定级。"
      })
    })
  ]);
})();
