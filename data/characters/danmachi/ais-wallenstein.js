(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["在地下城寻求邂逅是否搞错了什么"];

  if (!work) {
    throw new Error("DanMachi work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "ais-wallenstein",
      name: "艾丝·华伦斯坦",
      en: "Ais Wallenstein",
      ja: "アイズ・ヴァレンシュタイン",
      affiliation: "洛基眷族",
      grade: "剑姬 / 一线冒险者",
      appearances: ["异端儿篇"],
      timelineStatus: "异端儿篇 / 洛基眷族追捕线",
      aliases: ["艾丝", "Ais", "Aiz", "Sword Princess", "剑姬"],
      fandomSlug: "Ais_Wallenstein",
      confidence: "medium",
      evidenceType: ["官方角色页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["楼宇级", "街区级｜风灵疾走/复仇姬", "剑技、风魔法和对怪物特化使峰值高于普通近战。"],
        defense: ["房屋级", "楼宇级｜风防护/装备", "风魔法与装备提高承伤，但不是无条件免伤。"],
        movement: ["音速", "超音速｜风灵疾走", "一线冒险者高速机动。"],
        reaction: ["音速", "超音速｜剑姬战斗", "高阶近战反应，适合对怪物和冒险者高速战。"],
        vitality: ["房屋级生命阈值", "楼宇级生命阈值｜Falna", "高等级冒险者体魄与精神支撑续战。"],
        healing: ["无自愈", "缓慢自愈｜治疗/休整", "没有稳定高速自愈。"],
        energy: ["楼宇级能量", "街区级能量｜风魔法/技能", "魔法和技能资源支撑持续战斗，但仍会消耗。"],
        energyRegen: ["缓慢回能", "中速回能｜休整/补给", "战斗续航强于一般冒险者，但不是瞬时恢复。"]
      }),
      notes: notes({
        penetration: "剑技与风魔法偏高速斩击和单体压制，对怪物特化明显。攻击速度：风灵疾走需先咏唱或发动，并强化艾丝的贴身突进与剑击；实际命中仍取决于接战和兵刃出手，不能只看艾丝移速。",
        resistance: "高等级体魄、风防护和装备有效，但精神创伤与怪物执念会影响判断。",
        sensing: "冒险者经验和对怪物气息的警觉很强；非全知索敌。",
        tactics: "剑术、地下城经验和对怪物战经验极高，对人际与情绪判断存在短板。",
        special: "风灵疾走、复仇姬、精密剑技、对怪物特化。",
        weakness: "对怪物执念可能导致判断偏执；面对异端儿的人格问题时有心理冲突。",
        setting: "按异端儿篇洛基眷族追捕线记录，不并入外传后续成长。",
        basis: "worldbook只用于抽取艾丝姓名；定级依据官方角色入口与DanMachi Wiki资料入口，剑姬称号不单独抬档。"
      })
    })
  ]);
})();
