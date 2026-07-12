(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/stay night"];
  if (!work) throw new Error("Fate/stay night work metadata must load before character files.");

  registerCharacters([work.character({
    id: "illyasviel-fsn",
    name: "伊莉雅丝菲尔·冯·爱因兹贝伦",
    en: "Illyasviel von Einzbern",
    ja: "イリヤスフィール・フォン・アインツベルン",
    aliases: ["伊莉雅", "Illya", "Ilya"],
    affiliation: "爱因兹贝伦 / Berserker御主",
    grade: "小圣杯 / 人造人魔术师",
    appearances: ["Fate", "Unlimited Blade Works", "Heaven's Feel"],
    timelineStatus: "第五次圣杯战争",
    fandomSlug: "Illyasviel_von_Einzbern",
    confidence: "medium",
    evidenceType: ["官方入口", "角色页入口"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["砖级", "房屋级｜使魔/魔术", "本体魔术可威胁人类魔术师，主要战力是Berserker。"],
      defense: ["砖级", "墙级｜魔术/人造人", "防御依赖魔术与Berserker保护。"],
      movement: ["凡人速", "凡人速", "本体机动低。"],
      reaction: ["凡人速", "亚音速｜魔术感知", "魔术感知优于普通人。"],
      vitality: ["强化凡体｜人造人", "精锐韧体｜小圣杯", "特殊素体但战斗承伤不高。"],
      healing: ["缓慢自愈｜人造人", "中速自愈｜魔术维护", "恢复依赖爱因兹贝伦素体和维护。"],
      energy: ["房屋级能量｜御主魔力", "楼级能量｜小圣杯/供魔", "魔力量极高，主要用于维持Berserker。"],
      energyRegen: ["中速回能", "快速回能｜小圣杯供魔", "供魔能力强。"]
    }),
    notes: notes({
      penetration: "本体攻击多为魔术和使魔，Berserker战力不并入她的攻击常态。攻击速度：伊莉雅本人的魔术先经施术再产生效果，使魔成形后按自身动作接战；Berserker接受命令后的挥击属于外援，不能记作伊莉雅本体出手。",
      resistance: "小圣杯和人造人素体特殊，但仍需Berserker保护。",
      sensing: "魔术感知和圣杯系统关联强。",
      tactics: "依赖Berserker压制和爱因兹贝伦准备。",
      special: "小圣杯、人造人、Berserker御主、令咒、强供魔。",
      weakness: "本体脆弱，圣杯容器身份带来巨大风险。",
      setting: "按第五次圣杯战争伊莉雅记录，与Prisma Illya作品的魔法少女版本分开。",
      basis: "worldbook只用于抽取伊莉雅姓名；定级依据官方入口与TYPE-MOON Wiki资料入口，Berserker另列。"
    })
  })]);
})();
