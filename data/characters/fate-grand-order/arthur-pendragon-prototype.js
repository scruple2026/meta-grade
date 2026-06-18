(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Grand Order"];

  if (!work) {
    throw new Error("Fate/Grand Order work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "arthur-pendragon-prototype",
      name: "亚瑟·潘德拉贡",
      en: "Arthur Pendragon",
      ja: "アーサー・ペンドラゴン",
      affiliation: "迦勒底召唤 / Fate/Prototype",
      grade: "Saber / 旧剑",
      appearances: ["Fate/Grand Order", "Fate/Prototype"],
      timelineStatus: "FGO 召唤灵基 / Saber",
      aliases: ["旧剑", "男Saber", "亚瑟王", "Excalibur Proto", "Arthur Pendragon"],
      fandomSlug: "Arthur_Pendragon",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "TYPE-MOON Wiki: Arthur Pendragon",
          url: "https://typemoon.fandom.com/wiki/Arthur_Pendragon",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对亚瑟·潘德拉贡、Fate/Prototype、FGO Saber 灵基、Excalibur Proto 和兽追踪语境。"
        }
      ],
      revisionNotes: [
        "从型月DLC worldbook 的亚瑟·潘德拉贡 key/comment 补入；未采用 worldbook 正文描述。",
        "与阿尔托莉雅分开记录，兽追踪任务和 Excalibur Proto 解放条件不写成无条件常态。"
      ],
      dimensions: dims({
        attack: ["楼级", "街区级｜Excalibur Proto/封印解放｜条件｜争议", "Saber 灵基和圣剑峰值强，但解放条件和范围需标注。"],
        defense: ["楼级", "街区级｜灵基/圣剑防护", "高端 Saber 灵基和骑士武装提高防御。"],
        movement: ["音速", "超音速｜从者机动/骑士剑技", "Saber 从者高速机动。"],
        reaction: ["音速", "超音速｜从者反应/骑士武艺", "高端骑士反应适合高速近战。"],
        vitality: ["楼级生命阈值", "街区级生命阈值｜灵基/骑士王", "灵基和骑士王传承提高续战。"],
        healing: ["中速自愈｜灵基/供魔", "快速自愈｜供魔/骑士王灵基", "恢复依赖灵基和供魔。"],
        energy: ["楼级能量", "街区级能量｜圣剑/封印解放", "圣剑峰值提高能量池和爆发。"],
        energyRegen: ["中速回能", "快速回能｜供魔/圣剑循环", "供魔支撑连续剑技和宝具窗口。"]
      }),
      notes: notes({
        penetration: "Excalibur Proto 具备高爆发和对兽相关任务价值，但封印/解放条件需要单独判断。",
        resistance: "Saber 灵基、骑士武装和圣剑相关防护较强。",
        sensing: "从者感知、骑士直觉和兽追踪任务经验提供判断优势。",
        tactics: "正统骑士战法，擅长近战压制和关键宝具爆发。",
        special: "Fate/Prototype Saber、Excalibur Proto、十三拘束/封印解放、兽追踪语境。",
        weakness: "宝具峰值受封印和条件影响；不与阿尔托莉雅面板合并。",
        setting: "按 FGO 召唤灵基与 Fate/Prototype 公开角色资料综合记录。",
        basis: "worldbook只用于抽取亚瑟·潘德拉贡姓名；定级依据公开角色资料入口，圣剑峰值按条件标签记录。"
      })
    })
  ]);
})();
