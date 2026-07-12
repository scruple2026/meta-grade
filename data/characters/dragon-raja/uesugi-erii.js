(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["龙族（江南）"];
  if (!work) throw new Error("龙族（江南） work metadata must load before character files.");

  registerCharacters([work.character({
    id: "uesugi-erii",
    name: "上杉绘梨衣",
    en: "Erii Uesugi",
    ja: "上杉絵梨衣",
    aliases: ["绘梨衣", "小怪兽", "巫女", "月读命"],
    affiliation: "蛇岐八家 / 上杉家",
    grade: "皇血 / 审判言灵",
    appearances: ["黑月之潮"],
    timelineStatus: "黑月之潮 / 审判峰值",
    fandomSlug: "上杉绘梨衣",
    confidence: "review",
    evidenceType: ["资料入口", "言灵峰值"],
    sourceQuality: "entry",
    evidenceLinks: [],
    revisionNotes: ["worldbook 仅用于抽取《龙族》角色姓名；定级依据公开作品/资料入口并按保守跨界面板记录。"],
    dimensions: dims({
        attack: ["楼级", "街区级｜审判/皇血｜争议", "审判言灵是高危杀伤，按峰值保守记录。"],
        defense: ["房屋级", "楼级｜皇血体质", "身体特殊但不按龙王硬度处理。"],
        movement: ["凡人速", "亚音速｜皇血体质", "缺少高速移动定位。"],
        reaction: ["亚音速", "音速｜皇血/言灵反应", "言灵反应强于普通人。"],
        vitality: ["强化凡体", "楼级生命阈值｜皇血/圣骸关联｜争议", "生命状态与血统和圣骸线有关，标争议。"],
        healing: ["缓慢自愈", "快速自愈｜皇血/医疗条件", "恢复依赖血统和外部条件。"],
        energy: ["墙级能量", "街区级能量｜审判言灵｜争议", "言灵峰值高，但受控制和身体状态限制。"],
        energyRegen: ["缓慢回能", "中速回能｜皇血/休整", "高强度言灵消耗需要休整。"]
      }),
    notes: notes({
        penetration: "审判言灵偏规则/命令式杀伤，不等同纯爆破。攻击速度：绘梨衣的审判言灵偏命令式范围作用，关键是发动与锁定条件而非普通弹道；效果出现处也不自动等于无限速。",
        resistance: "皇血体质特殊，但身体与控制条件存在明显弱点。",
        sensing: "对危险和关键人物有直觉式反应，非全域索敌。",
        tactics: "战斗经验和社会经验有限，输出强但控制不足。",
        special: "审判言灵、皇血、圣骸关联、蛇岐八家背景。",
        weakness: "身体状态、控制条件、社会经验不足和赫尔佐格计划牵制。",
        setting: "按黑月之潮上杉绘梨衣记录。",
        basis: "worldbook只用于抽取绘梨衣姓名；定级依据公开作品/资料入口，审判作为高危特殊峰值保守记录。"
      })
  })]);
})();
