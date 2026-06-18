(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Zero"];
  if (!work) throw new Error("Fate/Zero work metadata must load before character files.");

  registerCharacters([work.character({
    id: "artoria-pendragon-fz",
    name: "Saber（阿尔托莉雅）",
    en: "Artoria Pendragon",
    ja: "アルトリア・ペンドラゴン",
    aliases: ["阿尔托莉雅", "亚瑟王", "Saber", "潘德拉贡"],
    affiliation: "爱因兹贝伦阵营 / Saber职阶",
    grade: "从者 / 圣剑使",
    appearances: ["第四次圣杯战争"],
    timelineStatus: "第四次圣杯战争",
    fandomSlug: "Artoria_Pendragon_(Saber)",
    confidence: "review",
    evidenceType: ["官方入口", "角色页入口", "宝具峰值"],
    sourceQuality: "entry",
    evidenceLinks: [],
    revisionNotes: ["worldbook 仅用于抽取 Fate/Zero 角色姓名；定级依据公开官方/资料入口并保持保守。"],
    dimensions: dims({
        attack: ["楼级", "街区级｜Excalibur｜争议", "常规白刃战极强，圣剑真名解放作为条件峰值。"],
        defense: ["楼级", "街区级｜魔力放出/铠甲", "铠甲、对魔力和魔力放出提高承伤。"],
        movement: ["音速", "超音速｜魔力放出", "高速从者近战机动。"],
        reaction: ["音速", "超音速｜直感/从者战", "直感和剑术支撑高速应对。"],
        vitality: ["楼级生命阈值", "街区级生命阈值｜从者灵基/供魔", "从者灵基和供魔状态影响续战。"],
        healing: ["中速自愈｜灵体/供魔", "快速自愈｜供魔充足", "恢复依赖灵基、供魔和伤势性质。"],
        energy: ["楼级能量", "街区级能量｜Excalibur", "魔力与宝具资源强但非无限。"],
        energyRegen: ["中速回能", "快速回能｜供魔充足", "供魔质量直接影响续航。"]
      }),
    notes: notes({
        penetration: "Invisible Air与Excalibur偏圣剑斩击和光炮峰值，需区分白刃战和真名解放。",
        resistance: "对魔力、铠甲和魔力放出强，仍会被规则型、宝具或供魔问题克制。",
        sensing: "直感可辅助预判危机，不等同全知索敌。",
        tactics: "骑士战经验丰富，正面决斗和保护御主能力强。",
        special: "Excalibur、Invisible Air、魔力放出、直感、对魔力、Saber灵基。",
        weakness: "御主命令、供魔状态、骑士道自限和切嗣战术冲突会影响发挥。",
        setting: "按第四次圣杯战争Saber记录，和Fate/stay night版本分开。",
        basis: "worldbook只用于抽取阿尔托莉雅FZ姓名；定级依据官方角色入口与TYPE-MOON Wiki资料入口，宝具峰值保守标争议。"
      })
  })]);
})();
