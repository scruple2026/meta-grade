(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Zero"];
  if (!work) throw new Error("Fate/Zero work metadata must load before character files.");

  registerCharacters([work.character({
    id: "kayneth-el-melloi-archibald",
    name: "肯尼斯·埃尔梅罗·阿奇博尔德",
    en: "Kayneth El-Melloi Archibald",
    ja: "ケイネス・エルメロイ・アーチボルト",
    aliases: ["肯尼斯", "Kayneth"],
    affiliation: "埃尔梅罗阵营",
    grade: "御主 / 时钟塔讲师",
    appearances: ["第四次圣杯战争"],
    timelineStatus: "第四次圣杯战争",
    fandomSlug: "Kayneth_El-Melloi_Archibald",
    confidence: "medium",
    evidenceType: ["官方入口", "角色页入口", "魔术礼装"],
    sourceQuality: "entry",
    evidenceLinks: [],
    revisionNotes: ["worldbook 仅用于抽取 Fate/Zero 角色姓名；定级依据公开官方/资料入口并保持保守。"],
    dimensions: dims({
        attack: ["墙级", "房屋级｜月灵髓液/令咒", "高等魔术师输出和礼装杀伤较强。"],
        defense: ["墙级", "房屋级｜月灵髓液自动防御", "月灵髓液提供强局部防护，但可被针对。"],
        movement: ["凡人速", "亚音速｜礼装辅助", "本体移动人类尺度。"],
        reaction: ["亚音速", "音速｜月灵髓液自动防御", "自动防御提升应对，不等同本体移动。"],
        vitality: ["强化凡体", "精锐韧体｜魔术师身体", "生命体量仍是人类范围。"],
        healing: ["无自愈", "缓慢自愈｜魔术/医疗", "无稳定战斗再生。"],
        energy: ["墙级能量", "房屋级能量｜魔术刻印/礼装/令咒", "名门魔术资源充足。"],
        energyRegen: ["缓慢回能", "中速回能｜礼装/准备", "依赖准备和礼装维持。"]
      }),
    notes: notes({
        penetration: "月灵髓液可攻防一体，偏液态礼装穿刺和防护。",
        resistance: "自动防御强，但起源弹等反魔术手段可针对。",
        sensing: "魔术师侦查和礼装警戒强于普通人。",
        tactics: "学术与正规魔术战能力高，实战傲慢和低估现代战术。",
        special: "月灵髓液、魔术刻印、令咒、时钟塔背景。",
        weakness: "傲慢、现代战经验不足、礼装/魔术系统可被起源弹针对。",
        setting: "按第四次圣杯战争肯尼斯记录。",
        basis: "worldbook只用于抽取肯尼斯姓名；定级依据官方角色入口与TYPE-MOON Wiki资料入口，月灵髓液作为防御/反应峰值。"
      })
  })]);
})();
