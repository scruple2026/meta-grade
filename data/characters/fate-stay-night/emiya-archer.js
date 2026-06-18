(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/stay night"];
  if (!work) throw new Error("Fate/stay night work metadata must load before character files.");

  registerCharacters([work.character({
    id: "emiya-archer",
    name: "Archer（卫宫）",
    en: "EMIYA",
    ja: "アーチャー",
    aliases: ["Archer", "卫宫", "无铭", "红A"],
    affiliation: "Archer职阶 / 远坂凛阵营",
    grade: "从者 / 投影魔术使用者",
    appearances: ["Fate", "Unlimited Blade Works", "Heaven's Feel"],
    timelineStatus: "第五次圣杯战争",
    fandomSlug: "EMIYA",
    confidence: "review",
    evidenceType: ["官方入口", "角色页入口", "固有结界"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["楼级", "街区级｜投影宝具/UBW｜争议", "投影宝具与Broken Phantasm可高爆发，固有结界是条件峰值。"],
      defense: ["房屋级", "楼级｜投影防御/从者灵基", "从者灵基和投影防具支撑承伤。"],
      movement: ["音速", "超音速｜从者近战", "高速白刃与远程转换。"],
      reaction: ["音速", "超音速｜心眼/经验", "战斗经验和心眼支撑高速反应。"],
      vitality: ["楼级生命阈值", "楼级生命阈值｜从者灵基", "灵基承伤强但供魔和核心伤害仍关键。"],
      healing: ["中速自愈｜灵体/供魔", "快速自愈｜供魔充足", "恢复依赖供魔与灵基伤势。"],
      energy: ["楼级能量", "街区级能量｜UBW/投影储备｜争议", "资源来自魔力、投影知识和固有结界。"],
      energyRegen: ["中速回能", "快速回能｜供魔/阵地", "续航受御主和消耗影响。"]
    }),
    notes: notes({
      penetration: "投影宝具、弓兵狙击和Broken Phantasm偏穿透与局部爆发。",
      resistance: "心眼和战斗经验降低受击，硬防不如重装从者。",
      sensing: "千里眼、经验和投影解析提高索敌与读招。",
      tactics: "战术、欺骗、远近转换和资源管理极强。",
      special: "投影魔术、Unlimited Blade Works、心眼、Broken Phantasm、双刀近战。",
      weakness: "魔力效率差，固有结界消耗高，对顶级宝具正面硬拼不利。",
      setting: "按第五次圣杯战争Archer记录。",
      basis: "worldbook只用于抽取Archer/卫宫姓名；定级依据官方入口与TYPE-MOON Wiki资料入口，UBW作为条件峰值。"
    })
  })]);
})();
