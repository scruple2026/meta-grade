(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Zero"];
  if (!work) throw new Error("Fate/Zero work metadata must load before character files.");

  registerCharacters([work.character({
    id: "lancelot-berserker",
    name: "Berserker（兰斯洛特）",
    en: "Lancelot",
    ja: "ランスロット",
    aliases: ["兰斯洛特", "Berserker", "黑骑士"],
    affiliation: "间桐阵营 / Berserker职阶",
    grade: "从者 / 狂化骑士",
    appearances: ["第四次圣杯战争"],
    timelineStatus: "第四次圣杯战争 / Berserker",
    fandomSlug: "Lancelot_(Berserker)",
    confidence: "review",
    evidenceType: ["官方入口", "角色页入口", "宝具峰值"],
    sourceQuality: "entry",
    evidenceLinks: [],
    revisionNotes: ["worldbook 仅用于抽取 Fate/Zero 角色姓名；定级依据公开官方/资料入口并保持保守。"],
    dimensions: dims({
        attack: ["楼级", "街区级｜Knight of Owner/载具武器化｜争议", "常态白刃战强，夺取武器和载具后峰值上升。"],
        defense: ["楼级", "街区级｜灵基/狂化", "狂化从者承伤强，但供魔负担大。"],
        movement: ["音速", "超音速｜狂化机动/载具", "高速近战和载具操作。"],
        reaction: ["音速", "超音速｜武艺/狂化", "骑士武艺底层仍强，狂化影响理性。"],
        vitality: ["楼级生命阈值", "街区级生命阈值｜狂化灵基", "高灵基生命阈值，非无限续战。"],
        healing: ["中速自愈｜灵体/供魔", "快速自愈｜供魔充足", "恢复依赖供魔且御主负担极重。"],
        energy: ["楼级能量", "街区级能量｜狂化/宝具", "输出和续航由Berserker职阶与御主供魔限制。"],
        energyRegen: ["中速回能", "快速回能｜供魔充足", "供魔不足时难以维持峰值。"]
      }),
    notes: notes({
        penetration: "Knight of Owner可把武器化对象纳入战斗，偏装备转化和技巧压制。",
        resistance: "狂化提升参数但消耗巨大，理性和战术沟通受损。",
        sensing: "战斗本能和武艺强，索敌不如专门感知型角色。",
        tactics: "武艺底子极高，但Berserker状态限制复杂策略。",
        special: "Knight of Owner、For Someone's Glory、狂化、骑士武艺。",
        weakness: "供魔负担、狂化失控、真名/因缘暴露和御主身体崩溃。",
        setting: "按第四次圣杯战争Berserker兰斯洛特记录。",
        basis: "worldbook只用于抽取兰斯洛特姓名；定级依据官方角色入口与TYPE-MOON Wiki资料入口，载具武器化峰值标争议。"
      })
  })]);
})();
