(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["龙族（江南）"];
  if (!work) throw new Error("龙族（江南） work metadata must load before character files.");

  registerCharacters([work.character({
    id: "sakura-yabuki",
    name: "矢吹樱",
    en: "Sakura Yabuki",
    ja: "矢吹桜",
    aliases: ["绪方圆", "樱"],
    affiliation: "蛇岐八家 / 源稚生家臣",
    grade: "杀手 / 忍者 / 特别助理",
    appearances: ["黑月之潮"],
    timelineStatus: "源稚生家臣时期",
    fandomSlug: "矢吹樱",
    confidence: "medium",
    evidenceType: ["资料入口", "言灵/忍者训练"],
    sourceQuality: "entry",
    evidenceLinks: [{
      type: "wiki",
      scope: "角色资料入口",
      label: "萌娘百科：矢吹樱",
      url: "https://zh.moegirl.org.cn/矢吹樱",
      lang: "zh",
      authority: "wiki",
      medium: "wiki",
      ratingEvidence: false,
      claim: "用于核对矢吹樱的源稚生家臣、杀手/忍者训练、言灵阴流和牺牲情节入口。"
    }],
    revisionNotes: ["worldbook 仅用于抽取《龙族》角色姓名；定级依据公开作品/资料入口并按保守跨界面板记录。"],
    dimensions: dims({
        attack: ["砖级", "墙级｜阴流/忍者刀/暗杀", "杀伤偏暗杀与要害切入，言灵阴流增强近距离穿透条件。"],
        defense: ["砖级", "墙级｜混血种体质/忍者训练", "防御不突出，主要靠规避和任务技巧。"],
        movement: ["亚音速", "亚音速｜忍者训练/混血种爆发", "行动和潜入强，但缺少更高速度表现。"],
        reaction: ["亚音速", "音速｜阴流感知/近战经验", "言灵和忍者训练提升局部反应与刀刃送入缝隙的判断。"],
        vitality: ["强化凡体", "强化凡体｜混血种体质", "生命体量按混血种杀手处理，不按高耐久角色记录。"],
        healing: ["缓慢自愈", "中速自愈｜血统/医疗", "恢复依赖血统和医疗。"],
        energy: ["砖级能量", "墙级能量｜阴流/武装", "能量资源来自言灵、体能和武装。"],
        energyRegen: ["缓慢回能", "缓慢回能｜休整/补给", "无稳定战斗回能体系。"]
      }),
    notes: notes({
        penetration: "言灵阴流、忍者刀和暗杀经验可针对防具缝隙与要害，不代表大范围破坏。",
        resistance: "混血种体质和忍者训练提高生存，但承伤不是强项。",
        sensing: "阴流提供风轨迹/局部空间判断，适合寻找近战破绽。",
        tactics: "潜入、伪装、护卫、牺牲式掩护和近身暗杀能力强。",
        special: "言灵阴流、忍者教育、伪装、蛇岐八家特别助理身份。",
        weakness: "正面防御和续航有限，极端任务中容易被数量或高阶敌人压垮。",
        setting: "按黑月之潮矢吹樱记录。",
        basis: "worldbook只用于抽取矢吹樱姓名；公开资料入口显示其杀手、忍者教育、言灵阴流和护卫源稚生的定位，主面板按暗杀型混血种保守记录。"
      })
  })]);
})();
