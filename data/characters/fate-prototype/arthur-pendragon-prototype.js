(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Prototype"];
  if (!work) throw new Error("Fate/Prototype work metadata must load before character files.");

  registerCharacters([work.character({
    id: "arthur-pendragon-prototype",
    name: "亚瑟·潘德拉贡",
    en: "Arthur Pendragon",
    ja: "アーサー・ペンドラゴン",
    aliases: ["旧剑", "男Saber", "Saber Prototype", "Prototype Saber", "亚瑟王", "圣剑使"],
    affiliation: "Saber职阶 / 沙条绫香阵营",
    grade: "从者 / 圣剑使",
    appearances: ["Fate/Prototype"],
    timelineStatus: "Prototype / Saber灵基",
    fandomSlug: "Arthur_Pendragon_(Prototype)",
    confidence: "medium",
    evidenceType: ["角色页入口", "从者/宝具峰值", "worldbook姓名字段"],
    sourceQuality: "entry",
    evidenceLinks: [{
      type: "wiki",
      scope: "角色资料入口",
      label: "TYPE-MOON Wiki: Arthur Pendragon (Prototype)",
      url: "https://typemoon.fandom.com/wiki/Arthur_Pendragon_(Prototype)",
      lang: "en",
      authority: "wiki",
      medium: "wiki",
      ratingEvidence: false,
      claim: "用于核对Fate/Prototype的亚瑟·潘德拉贡、Saber职阶、圣剑和角色定位资料入口。"
    }, {
      type: "wiki",
      scope: "中文角色资料入口",
      label: "萌娘百科：亚瑟·潘德拉贡",
      url: "https://zh.moegirl.org.cn/亚瑟·潘德拉贡",
      lang: "zh",
      authority: "wiki",
      medium: "wiki",
      ratingEvidence: false,
      claim: "中文交叉资料入口；用于核对名称、别名、Fate/Prototype男Saber和圣剑使定位。"
    }],
    revisionNotes: [
      "从型月DLC worldbook 的亚瑟·潘德拉贡 key/comment 补入；未采用 worldbook 正文描述。",
      "这是 Fate/Prototype 男Saber条目，不与 Fate/stay night / Fate/Zero 的阿尔托莉雅·潘德拉贡合并。"
    ],
    dimensions: dims({
      attack: ["楼级", "街区级｜Excalibur Proto｜条件｜争议", "常态近战为从者级白刃战；圣剑真名解放作为条件峰值。"],
      defense: ["楼级", "街区级｜魔力放出/圣剑防护｜条件", "从者灵基、铠甲和魔力放出支撑高承伤，但不按无条件概念防御处理。"],
      movement: ["音速", "超音速｜魔力放出", "按高速从者近战机动记录。"],
      reaction: ["音速", "超音速｜直感/从者战", "剑术经验、直感和从者身体支撑高速应对。"],
      vitality: ["楼级生命阈值", "街区级生命阈值｜供魔充足/从者灵基", "生命体量取决于灵基、供魔和伤势性质。"],
      healing: ["中速自愈｜灵体/供魔", "快速自愈｜供魔充足", "恢复依赖灵基和供魔条件。"],
      energy: ["楼级能量", "街区级能量｜圣剑/供魔", "魔力与宝具资源强，但不按无限能量处理。"],
      energyRegen: ["中速回能", "快速回能｜供魔充足", "供魔质量直接影响续航和宝具使用。"]
    }),
    notes: notes({
      penetration: "圣剑、魔力放出和从者级剑术可造成高单体压制；Excalibur Proto作为条件光炮峰值记录。",
      resistance: "对魔力、铠甲、灵基和魔力放出提高承伤；仍受供魔、御主状态、宝具克制和圣杯战争规则影响。",
      sensing: "直感可辅助危机预判；不等同全知或广域索敌。",
      tactics: "骑士战经验丰富，擅长正面决斗、保护御主和用宝具制造决胜窗口。",
      special: "Excalibur Proto、Invisible Air、魔力放出、直感、对魔力、骑乘。",
      weakness: "从者存在受御主、供魔和圣杯战争环境限制；宝具峰值需要真名解放和条件窗口。",
      setting: "按 Fate/Prototype 中的Saber/亚瑟·潘德拉贡记录。",
      basis: "worldbook只用于抽取亚瑟·潘德拉贡姓名；定级依据 TYPE-MOON Wiki 和萌娘百科入口，宝具峰值按条件项保守记录。"
    })
  })]);
})();
