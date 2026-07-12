(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["龙族（江南）"];
  if (!work) throw new Error("龙族（江南） work metadata must load before character files.");

  registerCharacters([work.character({
    id: "odin-dragon-raja",
    name: "奥丁",
    en: "Odin",
    ja: "奥丁",
    aliases: ["天空与风之王", "独眼的神", "尼伯龙根"],
    affiliation: "尼伯龙根 / 天空与风之王暗线",
    grade: "神秘龙王级存在",
    appearances: ["奥丁之渊"],
    timelineStatus: "奥丁暗线",
    fandomSlug: "奥丁",
    confidence: "review",
    evidenceType: ["资料入口", "尼伯龙根/规则峰值"],
    sourceQuality: "entry",
    evidenceLinks: [],
    revisionNotes: ["worldbook 仅用于抽取《龙族》角色姓名；定级依据公开作品/资料入口并按保守跨界面板记录。"],
    dimensions: dims({
        attack: ["楼级", "街区级｜尼伯龙根/龙王级权能｜争议", "威胁来自规则化场景和龙王级压制，暂保守记录。"],
        defense: ["楼级", "街区级｜尼伯龙根/特殊存在｜争议", "存在方式和防御条件不透明。"],
        movement: ["音速", "超音速｜龙王爆发", "按高阶龙类/混血种之上的爆发记录。"],
        reaction: ["音速", "超音速｜龙王感知/战斗本能", "高阶龙类反应和感知强。"],
        vitality: ["楼级生命阈值", "街区级生命阈值｜龙王生命结构/龙骨十字", "生命结构和复归条件复杂，不能等同普通肉身。"],
        healing: ["中速自愈", "极速自愈｜龙王生命/龙骨十字｜条件", "恢复与龙类生命结构、龙骨十字或复归条件相关。"],
        energy: ["楼级能量", "街区级能量｜言灵/龙王权能", "言灵与龙王权能作为峰值资源。"],
        energyRegen: ["中速回能", "快速回能｜龙类生命/尼伯龙根条件", "回能受龙类状态和环境影响。"]
      }),
    notes: notes({
        penetration: "尼伯龙根、命运式压迫和龙王级权能比直接破坏更关键。攻击速度：奥丁的兵器攻击与尼伯龙根、命运压迫不是同类过程，后两者偏场域或规则作用，不能因难以观察就判作瞬时命中。",
        resistance: "存在方式与尼伯龙根绑定，需区分实体承伤和规则条件。",
        sensing: "对目标、尼伯龙根和时间/命运式事件有强干涉感。",
        tactics: "长期布局和心理压迫强。",
        special: "奥丁身份、尼伯龙根、天空与风之王暗线、规则干涉。",
        weakness: "真实身份与行动条件不透明，需保留争议。",
        setting: "按奥丁之渊相关主线记录。",
        basis: "worldbook只用于抽取奥丁姓名；定级依据公开作品/资料入口，规则和尼伯龙根写入特殊项。"
      })
  })]);
})();
