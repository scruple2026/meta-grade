(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["魔法少女小圆"];

  if (!work) {
    throw new Error("魔法少女小圆 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "kyoko-sakura",
      name: "佐仓杏子",
      en: "Kyoko Sakura",
      ja: "佐倉杏子",
      affiliation: "魔法少女",
      grade: "长枪魔法少女",
      appearances: ["TV动画"],
      timelineStatus: "TV本篇 / 资深实战者",
      aliases: ["杏子", "Kyouko", "Kyoko"],
      fandomSlug: "Kyoko_Sakura",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["墙级", "楼级｜长枪/结界", "长枪与链节攻击范围和穿透强。"],
        defense: ["墙级", "楼级｜魔力防御", "实战经验和魔法防御支撑承伤。"],
        movement: ["亚音速", "亚音速｜魔法少女机动", "近战机动稳定。"],
        reaction: ["亚音速", "亚音速｜经验", "经验丰富，能应对魔女和魔法少女战。"],
        vitality: ["强化凡体", "精锐韧体｜灵魂宝石", "灵魂宝石机制和经验支撑续战。"],
        healing: ["中速自愈｜魔力修复", "快速自愈｜魔力修复", "受魔力和污浊限制。"],
        energy: ["墙级能量", "楼级能量｜长枪魔法", "战斗资源优秀。"],
        energyRegen: ["快速回能", "快速回能｜悲叹之种/休整", "需净化灵魂宝石。"]
      }),
      notes: notes({
        penetration: "长枪可变形、延展和多段穿刺，适合中近距离控制。攻击速度：长枪直刺、变形延展与多段穿刺分别受近身出手和枪身展开影响，突进接战不能替代延伸攻击的到达时间。",
        resistance: "实战经验强，防御和恢复依赖灵魂宝石与魔力。",
        sensing: "熟悉魔女结界和魔法少女争斗规则，能快速判断收益。",
        tactics: "务实、资源意识强，擅长单兵游击和近战压制；情感投入后会牺牲性决策。",
        special: "长枪魔法、锁链/结界技巧、灵魂宝石。",
        weakness: "灵魂宝石污浊和悲叹之种资源限制明显。",
        setting: "按TV本篇佐仓杏子记录。",
        basis: "依据杏子作为资深魔法少女的长枪、近战、经验和最终牺牲性战斗表现定级。"
      })
    })
  ]);
})();
