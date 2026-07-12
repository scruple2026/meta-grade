(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["龙族（江南）"];
  if (!work) throw new Error("龙族（江南） work metadata must load before character files.");

  registerCharacters([work.character({
    id: "norton",
    name: "诺顿（老唐）",
    en: "Norton / Old Tang",
    ja: "诺顿",
    aliases: ["老唐", "青铜与火之王", "Norton"],
    affiliation: "青铜与火之王",
    grade: "龙王 / 炼金君主",
    appearances: ["火之晨曦"],
    timelineStatus: "青铜与火之王复苏",
    fandomSlug: "诺顿",
    confidence: "review",
    evidenceType: ["资料入口", "龙王峰值"],
    sourceQuality: "entry",
    evidenceLinks: [],
    revisionNotes: ["worldbook 仅用于抽取《龙族》角色姓名；定级依据公开作品/资料入口并按保守跨界面板记录。"],
    dimensions: dims({
        attack: ["楼级", "街区级｜龙王权能/言灵｜争议", "龙王级峰值按局部灾害和言灵机制保守记录。"],
        defense: ["楼级", "街区级｜龙躯/龙王生命", "龙躯和龙王生命结构显著高于混血种。"],
        movement: ["音速", "超音速｜龙王爆发", "按高阶龙类/混血种之上的爆发记录。"],
        reaction: ["音速", "超音速｜龙王感知/战斗本能", "高阶龙类反应和感知强。"],
        vitality: ["楼级生命阈值", "街区级生命阈值｜龙王生命结构/龙骨十字", "生命结构和复归条件复杂，不能等同普通肉身。"],
        healing: ["中速自愈", "极速自愈｜龙王生命/龙骨十字｜条件", "恢复与龙类生命结构、龙骨十字或复归条件相关。"],
        energy: ["楼级能量", "街区级能量｜言灵/龙王权能", "言灵与龙王权能作为峰值资源。"],
        energyRegen: ["中速回能", "快速回能｜龙类生命/尼伯龙根条件", "回能受龙类状态和环境影响。"]
      }),
    notes: notes({
        penetration: "青铜与火权能、炼金和龙躯破坏强，具体大范围证据后续补。攻击速度：龙躯攻击随本体接战动作，炼金、青铜与火权能则按各自生成、发动或作用过程判断；火焰视觉效果不等于光速载体。",
        resistance: "龙王生命结构和龙骨十字机制复杂。",
        sensing: "对炼金、龙类和青铜城相关信息有优势。",
        tactics: "龙王记忆和炼金知识强，但老唐人格状态影响发挥。",
        special: "青铜与火之王、炼金权能、龙骨十字、老唐人格。",
        weakness: "人格/记忆状态、康斯坦丁牵制和复苏条件。",
        setting: "按火之晨曦诺顿/老唐记录。",
        basis: "worldbook只用于抽取诺顿/老唐姓名；定级依据公开作品/资料入口，龙王峰值保守记录。"
      })
  })]);
})();
