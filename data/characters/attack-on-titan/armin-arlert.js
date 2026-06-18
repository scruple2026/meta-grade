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
      affiliation: "调查兵团",
      grade: "超大型巨人继承者 / 指挥官",
      appearances: ["玛莱篇", "地鸣篇"],
      timelineStatus: "继承超大型巨人后",
      aliases: ["阿尔敏", "超大型巨人"],
      fandomSlug: "Armin_Arlert",
      defaultTimelineKey: "colossal-inheritor",
      timelinePanels: [
        {
          key: "scout-strategist",
          label: "调查兵团时期 / 人类状态",
          status: "战术指挥与立体机动",
          dimensions: dims({
            attack: ["凡人级", "凡人级｜武器装备", "人类常态输出依赖刀具、雷枪等装备。"],
            defense: ["凡人级", "凡人级", "本体脆弱。"],
            movement: ["凡人速", "亚音速｜立体机动", "依赖立体机动装置。"],
            reaction: ["凡人速", "亚音速", "战术判断强，身体反应普通。"],
            vitality: ["强化凡体", "强化凡体", "人类生命结构。"],
            healing: ["无自愈", "无自愈", "无超常恢复。"],
            energy: ["凡人能量", "凡人能量｜装备", "输出主要来自装备。"],
            energyRegen: ["中速回能", "中速回能", "依赖补给和休整。"]
          }),
          notes: "不计入继承超大型巨人后的爆风和再生。"
        },
        {
          key: "colossal-inheritor",
          label: "继承后 / 超大型巨人",
          status: "超大型巨人爆风与蒸汽",
          dimensions: dims({
            attack: ["凡人级", "街区级｜超大型巨人爆风", "常态肉身弱；巨人化爆风和超大型巨人体型可造成大范围破坏。"],
            defense: ["凡人级", "楼级｜超大型巨人体", "人类本体脆弱，巨人体承伤高但行动迟缓。"],
            movement: ["凡人速", "亚音速｜立体机动", "人类状态依赖立体机动；超大型巨人移动慢。"],
            reaction: ["凡人速", "亚音速", "战术判断强，身体反应不按顶级阿克曼处理。"],
            vitality: ["强化凡体", "楼级生命阈值｜巨人体", "巨人体可承受大量伤害，本体仍是关键。"],
            healing: ["无自愈", "快速自愈｜巨人之力", "巨人继承者可再生，受体力限制。"],
            energy: ["凡人能量", "街区级能量｜巨人化爆风", "爆风是巨人化释放，不代表常态人类能量池。"],
            energyRegen: ["中速回能", "快速回能｜巨人之力", "多次巨人化受体力与资源限制。"]
          }),
          notes: "当前主面板版本。"
        }
      ],
      dimensions: dims({
        attack: ["凡人级", "街区级｜超大型巨人爆风", "常态肉身弱；巨人化爆风和超大型巨人体型可造成大范围破坏。"],
        defense: ["凡人级", "楼级｜超大型巨人体", "人类本体脆弱，巨人体承伤高但行动迟缓。"],
        movement: ["凡人速", "亚音速｜立体机动", "人类状态依赖立体机动；超大型巨人移动慢。"],
        reaction: ["凡人速", "亚音速", "战术判断强，身体反应不按顶级阿克曼处理。"],
        vitality: ["强化凡体", "楼级生命阈值｜巨人体", "巨人体可承受大量伤害，本体仍是关键。"],
        healing: ["无自愈", "快速自愈｜巨人之力", "巨人继承者可再生，受体力限制。"],
        energy: ["凡人能量", "街区级能量｜巨人化爆风", "爆风是巨人化释放，不代表常态人类能量池。"],
        energyRegen: ["中速回能", "快速回能｜巨人之力", "多次巨人化受体力与资源限制。"]
      }),
      notes: notes({
        penetration: "超大型巨人爆风以范围热冲击为主，不是精准穿透。",
        resistance: "人类本体脆弱，巨人体后颈和继承者位置是弱点。",
        sensing: "感知主要来自侦察训练、观察细节和对敌方意图的推理；超大型巨人体型大但不提供精密索敌。",
        tactics: "战略判断和牺牲式决策极强，擅长识破敌方计划、诱导换位和制定团队方案；单兵近战执行较弱。",
        special: "超大型巨人化、高温蒸汽、爆风、战术指挥。",
        weakness: "超大型巨人行动缓慢且消耗大；人类常态近战较弱。",
        setting: "按继承超大型巨人后的阿尔敏记录；人类战术指挥和超大型巨人爆风分开理解，不把巨人体峰值并入人类常态。",
        basis: "依据阿尔敏继承超大型巨人后的爆风、巨人体和最终战战术表现定级。"
      })
    })
  ]);
})();
