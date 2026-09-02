(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["龙族（江南）"];
  if (!work) throw new Error("龙族（江南） work metadata must load before character files.");

  registerCharacters([work.character({
    id: "lu-mingfei",
    name: "路明非",
    en: "Lu Mingfei",
    ja: "路明非",
    aliases: ["明明", "李嘉图", "sakura", "Sakura"],
    affiliation: "卡塞尔学院 / S级混血种",
    grade: "主角 / 交易者",
    appearances: ["原作主线"],
    timelineStatus: "主线后期 / 交易与龙化峰值",
    fandomSlug: "路明非",
    confidence: "review",
    evidenceType: ["作品入口", "资料入口", "交易峰值"],
    sourceQuality: "entry",
    evidenceLinks: [],
    revisionNotes: ["worldbook 仅用于抽取《龙族》角色姓名；定级依据公开作品/资料入口并按保守跨界面板记录。"],
    dimensions: dims({
        attack: ["砖块级", "街区级｜交易/龙化/言灵条件｜争议", "常态并非正面强攻型，峰值来自交易、龙化和特殊状态。"],
        defense: ["砖块级", "街区级｜交易/龙化/血统觉醒｜争议", "峰值承伤和存活高度依赖路鸣泽交易与剧情条件。"],
        movement: ["凡人速", "超音速｜交易/龙化爆发｜争议", "峰值为特殊状态爆发，常态不按高速角色处理。"],
        reaction: ["亚音速", "超音速｜交易/龙化/战斗本能｜争议", "反应峰值依赖血统和交易状态。"],
        vitality: ["凡人肉身", "街区级生命阈值｜交易/龙化/特殊生命结构｜争议", "生命体量和死亡条件受交易机制影响。"],
        healing: ["缓慢自愈", "极速自愈｜交易/龙化条件｜争议", "恢复高度依赖交易或特殊状态。"],
        energy: ["凡人能量", "街区级能量｜交易/龙化/言灵条件｜争议", "能量池按交易峰值保守记录。"],
        energyRegen: ["无回能", "快速回能｜交易条件｜争议", "无独立战斗回能体系，峰值受交易条件约束。"]
      }),
    notes: notes({
        penetration: "常态杀伤弱；交易、龙化和言灵峰值属于条件爆发，不代表稳定常态。攻击速度：常态路明非的拳脚或枪械仍按凡人与弹药分别判断，交易后的龙化、言灵需按具体状态发动，不能用条件峰值覆盖常态。",
        resistance: "常态肉身普通，峰值存活依赖交易、血统和剧情条件。",
        sensing: "对龙族事件和关键人物有特殊牵连，但不等同稳定全域索敌。",
        tactics: "常态缺乏系统战斗训练，关键时刻有强烈决断和牺牲倾向。",
        special: "路鸣泽交易、S级血统、龙化、言灵和主角线特殊状态。",
        weakness: "常态弱、条件峰值代价高，交易机制不透明。",
        setting: "按原作主线后期路明非记录，交易和龙化作为峰值。",
        basis: "worldbook只用于抽取路明非姓名；定级依据公开作品/资料入口，交易和龙化按条件峰值保守记录。"
      })
  })]);
})();
