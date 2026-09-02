(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["原神"];
  if (!work) throw new Error("原神 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "neuvillette",
    name: "那维莱特",
    en: "Neuvillette",
    ja: "ヌヴィレット",
    aliases: ["Neuvillette", "Iudex of Fontaine", "枫丹最高审判官", "水龙王", "Hydro Dragon"],
    affiliation: "枫丹廷 / 最高审判官 / 水元素",
    grade: "Hydro / Catalyst / Fontaine",
    appearances: ["原神"],
    timelineStatus: "枫丹主线后 / 完整古龙权能语境",
    fandomSlug: "Neuvillette",
    confidence: "review",
    evidenceType: ["官方角色入口", "角色资料入口", "worldbook名字索引", "古龙权柄争议"],
    sourceQuality: "entry",
    evidenceLinks: [{
      type: "official",
      scope: "官方角色入口",
      label: "Genshin Impact: Fontaine Characters",
      url: "https://genshin.hoyoverse.com/en/character/fontaine",
      lang: "en",
      authority: "official",
      medium: "official-site",
      ratingEvidence: false,
      claim: "用于核对《原神》Fontaine官方角色入口。"
    }, {
      type: "wiki",
      scope: "角色资料入口",
      label: "Genshin Impact Wiki: Neuvillette",
      url: "https://genshin-impact.fandom.com/wiki/Neuvillette",
      lang: "en",
      authority: "wiki",
      medium: "wiki",
      ratingEvidence: true,
      claim: "用于交叉核对那维莱特的Hydro、Catalyst、Iudex、古龙身份和水元素能力资料。"
    }],
    revisionNotes: ["从缄默之秋 worldbook 的那维莱特 key/comment 补入；未采用 worldbook 正文描述。"],
    dimensions: dims({
        attack: ["楼宇级｜水元素/重击", "城市级｜古龙权柄/大范围水元素｜争议", "常态按可操作水元素输出记录；峰值含古龙权柄语境，需剧情证据细化。"],
        defense: ["楼宇级｜水元素护持", "城市级｜古龙权柄/水元素防护｜争议", "古龙权柄可提高防护语境，但不等同全类型免疫。"],
        movement: ["亚音速", "音速｜水元素战斗机动", "机动按高端元素角色保守记录。"],
        reaction: ["亚音速", "音速｜古龙/审判官战斗反应", "反应按高端元素战斗和剧情身份保守记录，不写成光速。"],
        vitality: ["楼宇级生命阈值", "城市级生命阈值｜古龙生命结构｜争议", "古龙身份支持高生命阈值语境，但不写无限生命。"],
        healing: ["中速自愈｜源水之滴/战斗机制", "快速自愈｜水元素/战斗机制", "恢复依赖水元素战斗机制和条件资源。"],
        energy: ["楼宇级能量", "城市级能量｜古龙权柄/水元素资源池｜争议", "古龙权柄与水元素资源池显著高于常规角色，但不自动反推每一击。"],
        energyRegen: ["中速回能", "快速回能｜水元素循环/权柄", "依赖水元素循环、战斗机制和剧情权柄。"]
      }),
    notes: notes({
        penetration: "水元素重击、审判官技能和古龙权柄可形成高压持续输出；大范围权柄按争议峰值。攻击速度：那维莱特的水元素重击具有蓄力阶段，释放后以持续喷流压制目标；蓄力时间、喷流持续时间和水元素作用范围不能合并成单一传播速度。",
        resistance: "水元素护持、古龙身份和剧情权柄提高承伤语境，但具体抗性需按伤害类型另判。",
        sensing: "审判官的洞察、秩序判断和水元素感知语境突出。",
        tactics: "擅长以高压水元素持续输出、生命值循环和稳定审判式压制控制战斗节奏。",
        special: "Hydro Dragon语境、最高审判官身份、水元素权柄、源水之滴、自我恢复机制。",
        weakness: "高阶权柄与主线阶段相关；游戏战斗机制、剧情权柄和本体硬度不能完全等同。",
        setting: "按枫丹主线后那维莱特综合记录。",
        basis: "worldbook只用于抽取那维莱特姓名；定级依据HoYoverse官方入口与Genshin Impact Wiki角色入口，古龙权柄作为争议峰值保守记录。"
      })
  })]);
})();
