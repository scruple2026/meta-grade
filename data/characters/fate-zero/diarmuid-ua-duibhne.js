(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Zero"];
  if (!work) throw new Error("Fate/Zero work metadata must load before character files.");

  registerCharacters([work.character({
    id: "diarmuid-ua-duibhne",
    name: "Lancer（迪卢木多）",
    en: "Diarmuid Ua Duibhne",
    ja: "ディルムッド・オディナ",
    aliases: ["迪卢木多", "Lancer", "Diarmuid"],
    affiliation: "埃尔梅罗阵营 / Lancer职阶",
    grade: "从者 / 双枪骑士",
    appearances: ["第四次圣杯战争"],
    timelineStatus: "第四次圣杯战争",
    fandomSlug: "Diarmuid_Ua_Duibhne",
    confidence: "medium",
    evidenceType: ["官方入口", "角色页入口", "宝具特性"],
    sourceQuality: "entry",
    evidenceLinks: [],
    revisionNotes: ["worldbook 仅用于抽取 Fate/Zero 角色姓名；定级依据公开官方/资料入口并保持保守。"],
    dimensions: dims({
        attack: ["楼级", "楼级｜双枪/破魔/诅咒伤", "双枪偏穿透、破魔和不可愈伤口，不靠大范围破坏。"],
        defense: ["楼级", "楼级｜从者灵基/武艺", "从者灵基和武艺支撑承伤。"],
        movement: ["音速", "超音速｜从者枪术", "高速枪兵机动。"],
        reaction: ["音速", "超音速｜枪术/骑士战", "近战反应强。"],
        vitality: ["楼级生命阈值", "楼级生命阈值｜从者灵基", "高从者生命阈值但无明显大规模耐久峰值。"],
        healing: ["中速自愈｜灵体/供魔", "快速自愈｜供魔充足", "恢复依赖供魔，诅咒伤另算。"],
        energy: ["楼级能量", "楼级能量｜双枪宝具", "宝具偏特效，不强行抬破坏规模。"],
        energyRegen: ["中速回能", "快速回能｜供魔充足", "供魔状态影响续航。"]
      }),
    notes: notes({
        penetration: "Gae Dearg破魔、Gae Buidhe造成难愈伤，杀伤性质高于破坏范围。",
        resistance: "从者抗性和武艺强，但对御主命令和供魔受制。",
        sensing: "骑士战经验和近战判断强。",
        tactics: "正面骑士决斗能力高，遵守骑士道导致战术选择受限。",
        special: "Gae Dearg、Gae Buidhe、爱情黑痣、从者灵基。",
        weakness: "御主关系、骑士道束缚、宝具特效需要命中。",
        setting: "按第四次圣杯战争Lancer迪卢木多记录。",
        basis: "worldbook只用于抽取迪卢木多姓名；定级依据官方角色入口与TYPE-MOON Wiki资料入口，双枪按特效峰值而非大范围输出。"
      })
  })]);
})();
