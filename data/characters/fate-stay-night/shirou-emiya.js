(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/stay night"];
  if (!work) throw new Error("Fate/stay night work metadata must load before character files.");

  registerCharacters([work.character({
    id: "shirou-emiya",
    name: "卫宫士郎",
    en: "Shirou Emiya",
    ja: "衛宮士郎",
    aliases: ["士郎", "Emiya Shirou"],
    affiliation: "第五次圣杯战争 / Saber御主",
    grade: "魔术师见习 / 投影魔术使用者",
    appearances: ["Fate", "Unlimited Blade Works", "Heaven's Feel"],
    timelineStatus: "第五次圣杯战争 / 路线综合",
    fandomSlug: "Shirou_Emiya",
    confidence: "review",
    evidenceType: ["官方入口", "角色页入口", "路线差异"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["凡人级", "楼级｜投影/九命刃具｜路线峰值", "常态接近训练者，峰值依赖投影、Archer臂或路线条件。"],
      defense: ["凡人级", "墙级｜强化/投影防御", "本体脆弱，靠强化、投影和从者支援周旋。"],
      movement: ["凡人速", "亚音速｜强化/战斗适应", "人类身体，短时强化和战斗经验提高机动。"],
      reaction: ["凡人速", "亚音速｜投影适应", "可在路线峰值中短时跟上从者战节奏。"],
      vitality: ["强化凡体", "精锐韧体｜精神/路线峰值", "意志极强但仍是人体。"],
      healing: ["无自愈", "缓慢自愈｜Avalon/外部治疗", "稳定自愈不作为常态；Avalon等外力需标注。"],
      energy: ["砖级能量", "楼级能量｜投影/固有结界｜路线峰值", "魔术回路和投影资源有限，路线峰值差异大。"],
      energyRegen: ["缓慢回能", "中速回能｜外部供魔/路线条件", "需要休整、供魔或路线条件维持。"]
    }),
    notes: notes({
      penetration: "投影可复制武装性质和技巧，峰值偏单体穿透，不等同稳定大范围爆破。",
      resistance: "身体防御低，靠投影、强化、从者援护和剧情条件活下来。",
      sensing: "战斗中对武器结构和投影对象理解极快。",
      tactics: "牺牲倾向强，能用投影和觉悟换取短时突破。",
      special: "投影魔术、固有结界、Avalon关联、Archer臂路线峰值。",
      weakness: "魔力少、本体脆弱、理想执念会导致自毁式选择。",
      setting: "按第五次圣杯战争路线综合记录，不把不同路线峰值当作稳定常态。",
      basis: "worldbook只用于抽取卫宫士郎姓名；定级依据官方入口与TYPE-MOON Wiki资料入口，投影和路线峰值保守处理。"
    })
  })]);
})();
