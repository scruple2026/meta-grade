(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["一拳超人"];

  if (!work) {
    throw new Error("一拳超人 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "genos",
      name: "杰诺斯",
      en: "Genos",
      ja: "ジェノス",
      affiliation: "英雄协会",
      grade: "S级英雄 / 改造人",
      appearances: ["正篇"],
      timelineStatus: "怪人协会篇后 / 十秒模式可用",
      aliases: [],
      fandomSlug: "Genos",
      defaultTimelineKey: "monster-association-ten-seconds",
      timelinePanels: [
        {
          key: "early-hero",
          label: "早期英雄活动 / 初期机体",
          status: "初期焚烧炮与推进器",
          dimensions: dims({
            attack: ["楼级", "街区级｜焚烧炮", "早期焚烧炮已有大范围火力。"],
            defense: ["楼级", "街区级｜改造体", "机体承伤高于常人但常被强敌破坏。"],
            movement: ["超音速", "超音速｜推进器", "推进器提供高速短距机动。"],
            reaction: ["超音速", "超音速｜传感器", "传感器辅助反应。"],
            vitality: ["楼级生命阈值", "楼级生命阈值｜改造体", "核心部件未毁可继续行动。"],
            healing: ["无自愈", "常规自愈｜维修", "依赖外部维修。"],
            energy: ["楼级能量", "街区级能量｜焚烧炮", "火力受机体能源限制。"],
            energyRegen: ["无回能", "常规回能｜装备冷却", "需要冷却和维修。"]
          }),
          notes: "不计入后期龙级对抗和十秒模式。"
        },
        {
          key: "monster-association-ten-seconds",
          label: "怪人协会篇后 / 十秒模式",
          status: "高输出升级机体",
          dimensions: dims({
            attack: ["街区级", "城市级｜十秒模式｜装备", "焚烧炮与升级机体可造成大范围爆破，峰值依赖短时装备输出。"],
            defense: ["街区级", "城市级｜升级机体｜装备", "机体防御随改造提升，但经常被高端怪人破坏。"],
            movement: ["超音速", "高超音速｜推进器", "高速推进和短距突进突出。"],
            reaction: ["超音速", "高超音速｜传感器", "传感器和高速战斗经验提升反应。"],
            vitality: ["楼级生命阈值", "街区级生命阈值｜改造体", "只要核心部件未毁可继续行动或修复。"],
            healing: ["无自愈", "常规自愈｜维修", "依赖库斯诺博士维修，不是战斗中自愈。"],
            energy: ["街区级能量", "城市级能量｜十秒模式", "高输出依赖机体能源与短时过载。"],
            energyRegen: ["无回能", "常规回能｜装备冷却", "需要充能、维修和冷却。"]
          }),
          notes: "当前主面板版本；十秒模式是短时装备峰值。"
        }
      ],
      dimensions: dims({
        attack: ["街区级", "城市级｜十秒模式｜装备", "焚烧炮与升级机体可造成大范围爆破，峰值依赖短时装备输出。"],
        defense: ["街区级", "城市级｜升级机体｜装备", "机体防御随改造提升，但经常被高端怪人破坏。"],
        movement: ["超音速", "高超音速｜推进器", "高速推进和短距突进突出。"],
        reaction: ["超音速", "高超音速｜传感器", "传感器和高速战斗经验提升反应。"],
        vitality: ["楼级生命阈值", "街区级生命阈值｜改造体", "只要核心部件未毁可继续行动或修复。"],
        healing: ["无自愈", "常规自愈｜维修", "依赖库斯诺博士维修，不是战斗中自愈。"],
        energy: ["街区级能量", "城市级能量｜十秒模式", "高输出依赖机体能源与短时过载。"],
        energyRegen: ["无回能", "常规回能｜装备冷却", "需要充能、维修和冷却。"]
      }),
      notes: notes({
        penetration: "主要按可见破坏与命中效果记录；特殊机制不直接抬高主攻击能级。",
        resistance: "防御、抗性、再生和特殊免疫分开记录，不把难杀直接换算为高防御。",
        special: "改造人机体、焚烧炮、推进器、传感器、短时过载模式。",
        weakness: "存在资源、体力、条件、情报或本体弱点，已在峰值标签和依据中限制。",
        setting: "按当前初稿指定时间线记录，后续可按篇章拆分更细版本。",
        basis: "依据杰诺斯多次升级后的焚烧炮、机动、承伤和十秒模式表现定级。"
      })
    })
  ]);
})();
