(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["龙族（江南）"];
  if (!work) throw new Error("龙族（江南） work metadata must load before character files.");

  registerCharacters([work.character({
    id: "fenrir",
    name: "芬里厄",
    en: "Fenrir",
    ja: "芬里厄",
    aliases: ["大地与山之王", "Fenrir"],
    affiliation: "北京地铁尼伯龙根 / 龙王",
    grade: "大地与山之王之一",
    appearances: ["悼亡者之瞳"],
    timelineStatus: "北京尼伯龙根",
    fandomSlug: "芬里厄",
    confidence: "review",
    evidenceType: ["资料入口", "龙王峰值"],
    sourceQuality: "entry",
    evidenceLinks: [],
    revisionNotes: ["worldbook 仅用于抽取《龙族》角色姓名；定级依据公开作品/资料入口并按保守跨界面板记录。"],
    dimensions: dims({
        attack: ["楼宇级", "街区级｜龙王权能/言灵｜争议", "龙王级峰值按局部灾害和言灵机制保守记录。"],
        defense: ["楼宇级", "街区级｜龙躯/龙王生命", "龙躯和龙王生命结构显著高于混血种。"],
        movement: ["音速", "超音速｜龙王爆发", "按高阶龙类/混血种之上的爆发记录。"],
        reaction: ["音速", "超音速｜龙王感知/战斗本能", "高阶龙类反应和感知强。"],
        vitality: ["楼宇级生命阈值", "街区级生命阈值｜龙王生命结构/龙骨十字", "生命结构和复归条件复杂，不能等同普通肉身。"],
        healing: ["中速自愈", "极速自愈｜龙王生命/龙骨十字｜条件", "恢复与龙类生命结构、龙骨十字或复归条件相关。"],
        energy: ["楼宇级能量", "街区级能量｜言灵/龙王权能", "言灵与龙王权能作为峰值资源。"],
        energyRegen: ["中速回能", "快速回能｜龙类生命/尼伯龙根条件", "回能受龙类状态和环境影响。"]
      }),
    notes: notes({
        penetration: "巨体、龙王生命和大地与山权能构成主要威胁。攻击速度：巨体撕咬、爪击和冲撞受龙躯转向与接战限制，大地权能则按地形作用过程判断，不能由庞大体型特效推断弹速。",
        resistance: "龙王级龙躯和尼伯龙根环境支撑承伤。",
        sensing: "在尼伯龙根内有环境优势。",
        tactics: "心智和行动方式有明显限制，不能按全能龙王处理。",
        special: "大地与山之王、尼伯龙根、龙王生命结构。",
        weakness: "心智状态、环境依赖和双生关系牵制。",
        setting: "按悼亡者之瞳芬里厄记录。",
        basis: "worldbook只用于抽取芬里厄姓名；定级依据公开作品/资料入口，龙王峰值保守记录。"
      })
  })]);
})();
