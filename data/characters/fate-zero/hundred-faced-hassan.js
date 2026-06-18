(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Zero"];
  if (!work) throw new Error("Fate/Zero work metadata must load before character files.");

  registerCharacters([work.character({
    id: "hundred-faced-hassan",
    name: "Assassin（百貌哈桑）",
    en: "Hassan of the Hundred Personas",
    ja: "百貌のハサン",
    aliases: ["百貌哈桑", "百貌", "Assassin"],
    affiliation: "言峰阵营 / Assassin职阶",
    grade: "从者 / 群体暗杀者",
    appearances: ["第四次圣杯战争"],
    timelineStatus: "第四次圣杯战争",
    fandomSlug: "Hassan_of_the_Hundred_Personas",
    confidence: "medium",
    evidenceType: ["官方入口", "角色页入口", "分身/暗杀"],
    sourceQuality: "entry",
    evidenceLinks: [],
    revisionNotes: ["worldbook 仅用于抽取 Fate/Zero 角色姓名；定级依据公开官方/资料入口并保持保守。"],
    dimensions: dims({
        attack: ["墙级", "楼级｜多重人格分身/暗杀", "单体破坏不突出，威胁来自多体潜入和暗杀。"],
        defense: ["墙级", "楼级｜从者灵基/多体分散", "单体不硬，分散存在提高生存复杂度。"],
        movement: ["亚音速", "音速｜暗杀者机动", "暗杀者职阶高速潜行。"],
        reaction: ["亚音速", "音速｜暗杀经验", "反应强于人类但不以正面高速战见长。"],
        vitality: ["精锐韧体", "楼级生命阈值｜多体分散/特殊生命结构", "难杀来自分身与数量，不是单体硬度。"],
        healing: ["缓慢自愈｜灵体/供魔", "中速自愈｜灵体/供魔", "恢复依赖供魔，分身损失会削弱总量。"],
        energy: ["墙级能量", "楼级能量｜分身/宝具", "宝具资源偏分身和潜入。"],
        energyRegen: ["缓慢回能", "中速回能｜供魔", "供魔状态影响分身维持。"]
      }),
    notes: notes({
        penetration: "暗杀、潜入、包围和分身协作强，正面破坏弱。",
        resistance: "分身分散提高容错，单体被击破并不代表本体硬。",
        sensing: "潜入、侦查和多点监视强。",
        tactics: "情报战、诱敌、包围和消耗优秀，正面对军宝具弱。",
        special: "妄想幻像、多重人格分身、气息遮断、从者灵基。",
        weakness: "单体参数低，暴露后容易被高范围攻击清场。",
        setting: "按第四次圣杯战争Assassin百貌哈桑记录。",
        basis: "worldbook只用于抽取百貌哈桑姓名；定级依据官方角色入口与TYPE-MOON Wiki资料入口，分身写入生命体量和特殊项。"
      })
  })]);
})();
