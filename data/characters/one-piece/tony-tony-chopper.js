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
        healing: ["无自愈", "中速自愈｜动物系体质", "主要作为医生治疗他人，自身无高速再生。"],
        energy: ["墙级能量", "楼级能量｜蓝波球", "强化依赖蓝波球和体力。"],
        energyRegen: ["中速回能", "中速回能", "需要休息和药物管理。"]
      }),
      notes: notes({
        penetration: "怪物强化和重量强化以巨大体型、抓握、抛摔和钝击压制为主，能破坏建筑局部和大型敌人姿态；医疗知识可辅助找弱点，但不是直接即死机制。攻击速度：乔巴在怪物强化和重量强化下以抓握、抛摔和钝击近身压制，速度取决于巨体转身、抬臂和接战，没有远程载体。",
        resistance: "动物系体质、形态切换和怪物强化提高承伤，医生知识能处理伤势；本体仍会被斩击、毒、精神控制和高能攻击伤害，缺少高速再生。",
        sensing: "动物系五感、医生观察和形态差异帮助判断伤势与威胁；缺少霸气级索敌或未来视。",
        tactics: "医疗知识和形态选择让他能在支援、坦承和爆发之间切换；蓝波球持续时间和体型缺陷要求谨慎管理。",
        special: "人人果实、七段变形、怪物强化、医疗技术。",
        weakness: "战斗强度依赖蓝波球、形态选择和持续时间；怪物强化体型大、精细机动差，药物或体力管理失误会让他陷入空窗。",
        setting: "按新世界后可较稳定使用怪物强化的船医版本记录；医疗支援价值和怪物强化峰值分开看。",
        basis: "依据乔巴至新世界篇的怪物强化、动物系体质和医疗支援表现定级。"
      })
    })
  ]);
})();
