(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["在地下城寻求邂逅是否搞错了什么"];

  if (!work) {
    throw new Error("DanMachi work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "sanjouno-haruhime",
      name: "三条野·春姬",
      en: "Sanjouno Haruhime",
      ja: "サンジョウノ・春姫",
      affiliation: "赫斯缇雅眷族 / 原伊丝塔眷族",
      grade: "妖狐 / 等级提升术者",
      appearances: ["异端儿篇"],
      timelineStatus: "异端儿篇 / 赫斯缇雅眷族支援期",
      aliases: ["春姬", "Haruhime", "三条野春姬"],
      fandomSlug: "Sanjouno_Haruhime",
      confidence: "medium",
      evidenceType: ["官方角色页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["凡人级", "砖级｜基础魔法", "本体直接输出很低，核心价值是等级提升支援。"],
        defense: ["凡人级", "砖级｜Falna", "本体脆弱，不适合正面承伤。"],
        movement: ["凡人速", "亚音速｜冒险者行动", "机动能力有限。"],
        reaction: ["凡人速", "亚音速｜战场支援", "能在队伍保护下执行支援。"],
        vitality: ["凡人肉身", "强化凡体｜Falna", "生命体量接近低阶冒险者。"],
        healing: ["无自愈", "无自愈", "没有稳定自愈。"],
        energy: ["砖级能量", "房屋级能量｜等级提升", "魔力资源主要用于提升队友等级，不等同自身单击输出。"],
        energyRegen: ["缓慢回能", "缓慢回能", "支援魔法消耗明显，需要保护与恢复。"]
      }),
      notes: notes({
        penetration: "直接杀伤弱，等级提升可间接提高队友输出。",
        resistance: "本体防御低，依赖队友保护和站位。",
        sensing: "普通战场观察和队伍配合感知。",
        tactics: "作为后排支援判断施法对象和时机，正面战斗经验有限。",
        special: "等级提升、妖狐魔法、队伍支援。",
        weakness: "施法成本高，本体脆弱，被突入或打断时风险很大。",
        setting: "按异端儿篇春姬记录。",
        basis: "worldbook只用于抽取春姬姓名；定级依据官方角色入口与DanMachi Wiki资料入口，等级提升不折算为自身攻防。"
      })
    })
  ]);
})();
