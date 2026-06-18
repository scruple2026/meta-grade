(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["天龙八部"];
  if (!work) throw new Error("天龙八部 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "duan-yu",
    name: "段誉",
    en: "Duan Yu",
    aliases: ["段公子", "大理世子"],
    affiliation: "大理段氏 / 天龙三兄弟",
    grade: "六脉神剑使用者",
    appearances: ["少室山大会"],
    timelineStatus: "少室山大会期",
    fandomSlug: "段譽",
    confidence: "review",
    evidenceType: ["角色页入口", "小说条目入口", "发挥不稳定"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["墙级｜不稳定", "房屋级｜六脉神剑", "六脉神剑远程杀伤强，但发挥稳定性需标注。"],
      defense: ["砖级", "墙级｜北冥内力/凌波微步", "防御多依赖闪避和内力基础。"],
      movement: ["亚音速", "亚音速｜凌波微步", "凌波微步显著提高闪避和走位。"],
      reaction: ["凡人速", "亚音速｜临战爆发", "战斗经验不足，峰值依赖临场状态。"],
      vitality: ["强化凡体", "精锐韧体｜北冥内力", "内力深厚但本体承伤经验有限。"],
      healing: ["缓慢自愈", "中速自愈｜内功调息", "内功可辅助恢复。"],
      energy: ["墙级能量｜北冥内力", "房屋级能量｜六脉神剑", "总内力极深，但输出稳定性和命中另算。"],
      energyRegen: ["缓慢回能", "中速回能｜北冥内力", "内力补充依赖吸纳、调息和剧情条件。"]
    }),
    notes: notes({
      penetration: "六脉神剑偏远程指力穿透，范围破坏不高。",
      resistance: "凌波微步和内力能降低风险，但正面承伤不是强项。",
      sensing: "武学经验不足，更多依赖机缘和临场反应。",
      tactics: "善良且实战犹豫，武功常有不稳定发挥。",
      special: "六脉神剑、凌波微步、北冥神功内力。",
      weakness: "战意和熟练度不足，六脉神剑发挥不稳定。",
      setting: "按少室山大会期段誉记录。",
      basis: "worldbook只用于抽取段誉姓名；定级依据金庸 Wiki 和公开小说条目入口，机缘武功不等同稳定全维度碾压。"
    })
  })]);
})();
