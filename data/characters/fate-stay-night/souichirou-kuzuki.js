(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/stay night"];
  if (!work) throw new Error("Fate/stay night work metadata must load before character files.");

  registerCharacters([work.character({
    id: "souichirou-kuzuki",
    name: "葛木宗一郎",
    en: "Souichirou Kuzuki",
    ja: "葛木宗一郎",
    aliases: ["宗一郎", "葛木老师"],
    affiliation: "柳洞寺 / Caster阵营",
    grade: "教师 / 暗杀拳使用者",
    appearances: ["Unlimited Blade Works"],
    timelineStatus: "第五次圣杯战争 / Caster强化期",
    fandomSlug: "Souichirou_Kuzuki",
    confidence: "medium",
    evidenceType: ["官方入口", "角色页入口"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["墙级", "房屋级｜Caster强化/蛇拳", "人类体术极强，强化后可短时威胁从者。"],
      defense: ["砖级", "墙级｜强化", "防御不如从者，依赖突袭和强化。"],
      movement: ["亚音速", "音速｜强化突袭", "短距离爆发和初见杀很强。"],
      reaction: ["亚音速", "音速｜暗杀拳", "靠训练和特殊节奏制造反应差。"],
      vitality: ["强化凡体", "精锐韧体｜强化", "人体结构，强化提高承压。"],
      healing: ["无自愈", "缓慢自愈｜治疗/强化", "没有稳定自愈。"],
      energy: ["砖级能量", "墙级能量｜Caster强化", "自身资源低，峰值依赖Caster强化。"],
      energyRegen: ["缓慢回能", "中速回能｜Caster支援", "依赖外部支援。"]
    }),
    notes: notes({
      penetration: "蛇拳和暗杀拳偏初见杀、关节破坏和对人穿透。",
      resistance: "身体仍是人类，防御端不能等同从者。",
      sensing: "暗杀训练和冷静观察强。",
      tactics: "初见杀和近身突袭极强，重复交手后优势下降。",
      special: "暗杀拳、Caster强化、柳洞寺阵地协同。",
      weakness: "缺少远程和持续高防，能力被看破后威胁下降。",
      setting: "按UBW线葛木宗一郎记录。",
      basis: "worldbook只用于抽取葛木宗一郎姓名；定级依据官方入口与TYPE-MOON Wiki资料入口，Caster强化作为条件峰值。"
    })
  })]);
})();
