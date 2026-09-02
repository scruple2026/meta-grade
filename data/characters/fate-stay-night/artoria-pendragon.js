(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/stay night"];
  if (!work) throw new Error("Fate/stay night work metadata must load before character files.");

  registerCharacters([work.character({
    id: "artoria-pendragon",
    name: "阿尔托莉雅·潘德拉贡",
    en: "Artoria Pendragon",
    ja: "アルトリア・ペンドラゴン",
    aliases: ["Saber", "阿尔托莉雅", "亚瑟王", "黑Saber", "Saber Alter"],
    affiliation: "Saber职阶 / 卫宫士郎阵营",
    grade: "从者 / 圣剑使",
    appearances: ["Fate", "Unlimited Blade Works", "Heaven's Feel"],
    timelineStatus: "第五次圣杯战争 / Saber与黑化峰值",
    fandomSlug: "Artoria_Pendragon_(Saber)",
    confidence: "review",
    evidenceType: ["官方入口", "角色页入口", "宝具峰值"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["楼宇级", "街区级｜Excalibur/黑化峰值｜争议", "常规白刃战极强，宝具真名解放作为条件峰值。"],
      defense: ["楼宇级", "街区级｜魔力放出/黑化", "铠甲、对魔力和魔力放出提高承伤。"],
      movement: ["音速", "超音速｜魔力放出", "高速从者近战机动。"],
      reaction: ["音速", "超音速｜直感/从者战", "直感和剑术支撑高速应对。"],
      vitality: ["楼宇级生命阈值", "街区级生命阈值｜黑化/供魔", "从者灵基和供魔状态影响续战。"],
      healing: ["中速自愈｜灵体/供魔", "快速自愈｜供魔充足/黑化", "恢复依赖灵基、供魔和伤势性质。"],
      energy: ["楼宇级能量", "街区级能量｜圣剑/黑化供魔", "魔力与宝具资源强但非无限。"],
      energyRegen: ["中速回能", "快速回能｜供魔充足/黑化", "供魔质量直接影响续航。"]
    }),
    notes: notes({
      penetration: "Invisible Air与Excalibur偏圣剑斩击和光炮峰值，黑化时输出提升但受路线条件限制。攻击速度：阿尔托莉雅的Invisible Air剑击随白刃动作命中，Excalibur须先真名解放再发射光炮；黑化只改变输出条件，不合并两种速度。",
      resistance: "对魔力、铠甲和魔力放出强，仍会被规则型、宝具或供魔问题克制。",
      sensing: "直感可辅助预判危机，不等同全知索敌。",
      tactics: "骑士战经验丰富，正面决斗和保护御主能力强。",
      special: "Excalibur、Invisible Air、魔力放出、直感、对魔力、Saber Alter。",
      weakness: "供魔不足、御主命令、圣杯泥污染和骑士道自限会影响发挥。",
      setting: "按第五次圣杯战争Saber记录，黑Saber作为条件峰值和污染形态写入同一角色。",
      basis: "worldbook只用于抽取阿尔托莉雅姓名和黑Saber形态；定级依据官方入口与TYPE-MOON Wiki资料入口，宝具峰值保守记录。"
    })
  })]);
})();
