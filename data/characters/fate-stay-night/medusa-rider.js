(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/stay night"];
  if (!work) throw new Error("Fate/stay night work metadata must load before character files.");

  registerCharacters([work.character({
    id: "medusa-rider",
    name: "Rider（美杜莎）",
    en: "Medusa",
    ja: "メドゥーサ",
    aliases: ["Rider", "美杜莎", "Medusa"],
    affiliation: "Rider职阶 / 间桐樱阵营",
    grade: "从者 / 魔眼使用者",
    appearances: ["Fate", "Unlimited Blade Works", "Heaven's Feel"],
    timelineStatus: "第五次圣杯战争",
    fandomSlug: "Medusa_(Rider)",
    confidence: "review",
    evidenceType: ["官方入口", "角色页入口", "魔眼/宝具"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["楼级", "街区级｜Bellerophon｜争议", "锁链短剑与骑乘宝具可高爆发。"],
      defense: ["房屋级", "楼级｜从者灵基/骑乘", "灵基和机动提供防护。"],
      movement: ["音速", "超音速｜骑乘/天马", "骑乘宝具带来高速机动。"],
      reaction: ["音速", "超音速｜从者近战", "高速近战和机动反应。"],
      vitality: ["楼级生命阈值", "楼级生命阈值｜供魔充足", "供魔状态对实力影响大。"],
      healing: ["中速自愈｜灵体/供魔", "快速自愈｜供魔充足", "恢复依赖供魔。"],
      energy: ["楼级能量", "街区级能量｜Bellerophon/魔眼｜争议", "魔眼和骑乘宝具资源强。"],
      energyRegen: ["中速回能", "快速回能｜樱供魔", "供魔充足时续航明显提升。"]
    }),
    notes: notes({
      penetration: "魔眼偏石化/束缚，Bellerophon偏高速冲击和局部爆发。",
      resistance: "供魔不足时能力受限，供魔充足时全面提升。",
      sensing: "从者感知和魔眼压制强。",
      tactics: "擅长伏击、速度战和保护樱。",
      special: "石化魔眼、Bellerophon、Breaker Gorgon、骑乘。",
      weakness: "魔眼可被遮蔽或抗性处理，供魔和御主状态影响极大。",
      setting: "按第五次圣杯战争Rider记录。",
      basis: "worldbook只用于抽取美杜莎姓名；定级依据官方入口与TYPE-MOON Wiki资料入口，魔眼作为特殊权能。"
    })
  })]);
})();
