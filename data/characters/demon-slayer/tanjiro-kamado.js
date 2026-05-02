(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["鬼灭之刃"];

  if (!work) {
    throw new Error("鬼灭之刃 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "tanjiro-kamado",
      name: "灶门炭治郎",
      en: "Tanjiro Kamado",
      ja: "竈門炭治郎",
      category: "主角团",
      affiliation: "鬼杀队",
      grade: "主角 / 日之呼吸继承者",
      appearances: ["立志篇", "无限列车篇", "游郭篇", "刀匠村篇", "无限城篇"],
      timelineStatus: "无限城最终决战前 / 人类炭治郎",
      aliases: ["水之呼吸", "火之神神乐", "日之呼吸"],
      fandomSlug: "Tanjiro_Kamado",
      dimensions: dims({
        attack: ["墙级", "房屋级｜日之呼吸｜赫刀", "以日轮刀、全集中呼吸和日之呼吸斩击为主，不按大范围破坏抬级。"],
        defense: ["凡人级", "墙级｜全集中呼吸", "咒术式护盾不存在，主要靠身体训练、呼吸和格挡减伤。"],
        movement: ["亚音速", "亚音速｜斑纹", "后期能参与上弦和无惨战节奏，但不把呼吸特效或预判折算为声速。"],
        reaction: ["亚音速", "亚音速｜通透世界", "嗅觉、战斗经验和通透世界提升反应与预判，不直接按攻击特效抬速。"],
        vitality: ["强化凡体", "精锐韧体｜斑纹", "重伤后仍可继续作战，但仍是人类生命结构。"],
        healing: ["无自愈", "缓慢自愈", "没有自体再生，恢复依医疗和休养。"],
        energy: ["凡人能量", "墙级能量｜全集中呼吸", "呼吸法体现为体力与身体强化资源。"],
        energyRegen: ["常规回能", "快速回能｜全集中常中", "全集中常中提高续航，但不能无限战斗。"]
      }),
      notes: notes({
        penetration: "赫刀和日轮刀对鬼具备体系克制，日之呼吸提升斩击杀伤，但不等同更高破坏范围。",
        resistance: "对毒、断肢、内伤没有超常免疫，靠意志和医疗续命。",
        special: "嗅觉追踪、全集中呼吸、水之呼吸、火之神神乐/日之呼吸、斑纹、通透世界、赫刀。",
        weakness: "人类肉身限制明显；长战、毒素和失血会快速削弱。",
        setting: "按最终决战前人类炭治郎记录，不把短暂鬼化状态并入常态。",
        basis: "依据炭治郎对累、魇梦、妓夫太郎、半天狗分身、猗窝座和无惨战中的剑术、反应、承伤表现保守定级。"
      })
    })
  ]);
})();
