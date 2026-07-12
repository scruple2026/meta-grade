(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Dr.STONE"];

  if (!work) {
    throw new Error("Dr.STONE work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "chrome",
      name: "克罗姆",
      en: "Chrome",
      ja: "クロム",
      affiliation: "科学王国 / 石神村",
      grade: "妖术师 / 科学使徒",
      appearances: ["石之战争篇"],
      timelineStatus: "石之战争篇 / 科学王国",
      aliases: ["Chrome", "妖术师"],
      fandomSlug: "Chrome",
      confidence: "medium",
      evidenceType: ["官方角色页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["凡人级", "砖级｜陷阱/工具｜条件", "个人体能普通，峰值来自矿物知识、陷阱和工具。"],
        defense: ["凡人级", "凡人级", "普通人肉身。"],
        movement: ["凡人速", "凡人速", "普通人移动。"],
        reaction: ["凡人速", "凡人速｜机智应对", "临场机智强于身体速度。"],
        vitality: ["凡人肉身", "强化凡体", "可冒险行动但仍是普通人尺度。"],
        healing: ["无自愈", "无自愈", "无超自然恢复。"],
        energy: ["凡人能量", "砖级能量｜工具/材料", "战斗资源来自采集物、工具和临场制作。"],
        energyRegen: ["中速回能", "缓慢回能｜材料采集", "需要材料与制作时间。"]
      }),
      notes: notes({
        penetration: "用矿物、陷阱、简易科学道具和地形制造效果。攻击速度：克罗姆本人的投掷和挥击仍是凡人动作，矿物机关与陷阱按预置触发；科学效果不会随他奔跑而同步加速。",
        resistance: "无特殊抗性，依赖逃跑、骗招和环境。",
        sensing: "熟悉野外采集和矿物观察，可通过经验找到材料。",
        tactics: "胆大、机智，擅长临场拼装和用知识制造脱困路线。",
        special: "矿物采集、简易科学实验、陷阱和材料利用。",
        weakness: "正面武力弱，高价值操作依赖材料和准备。",
        setting: "按石之战争篇记录。",
        basis: "worldbook只用于抽取克罗姆姓名；定级依据官方角色页与Dr.STONE Wiki资料入口。"
      })
    })
  ]);
})();
