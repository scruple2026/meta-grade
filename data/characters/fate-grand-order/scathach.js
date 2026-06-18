(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Grand Order"];

  if (!work) {
    throw new Error("Fate/Grand Order work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "scathach",
      name: "斯卡哈",
      en: "Scathach",
      ja: "スカサハ",
      affiliation: "影之国 / 迦勒底召唤",
      grade: "Lancer / 影之国女王",
      appearances: ["Fate/Grand Order"],
      timelineStatus: "FGO召唤灵基 / Lancer",
      aliases: ["Scathach", "斯卡哈", "影之国女王", "Lancer", "师匠"],
      fandomSlug: "Sc%C3%A1thach",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "TYPE-MOON Wiki: Scathach",
          url: "https://typemoon.fandom.com/wiki/Sc%C3%A1thach",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对斯卡哈、Lancer、影之国女王、枪术和宝具定位。"
        }
      ],
      revisionNotes: ["从型月/FGO worldbook 的英灵:斯卡哈 key/comment 补入；未采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["楼级", "街区级｜宝具/枪术", "顶级枪术和宝具形成高单体杀伤，按从者宝具峰值保守记录。"],
        defense: ["楼级", "街区级｜灵基/战技", "灵基、战斗经验和魔术提供高承伤与回避。"],
        movement: ["音速", "超音速｜从者机动", "高端Lancer近战机动。"],
        reaction: ["音速", "超音速｜武艺/从者战", "武艺和经验支撑高速应对。"],
        vitality: ["楼级生命阈值", "街区级生命阈值｜灵基/战斗续行", "从者灵基和战斗经验提升续战。"],
        healing: ["中速自愈｜灵基/供魔", "快速自愈｜供魔充足", "恢复依赖灵基和供魔。"],
        energy: ["楼级能量", "街区级能量｜宝具", "宝具与魔力资源强但非无限。"],
        energyRegen: ["中速回能", "快速回能｜供魔/灵基", "供魔质量影响续航。"]
      }),
      notes: notes({
        penetration: "枪术和宝具偏高穿透单体杀伤，不按城市级范围破坏外推。",
        resistance: "强武艺、灵基和经验提供防护，但仍受相性、御主供魔和概念克制影响。",
        sensing: "从者感知与战斗经验强，适合识破近战破绽。",
        tactics: "战斗教师型强者，擅长近战压制、判断对手和利用宝具窗口。",
        special: "影之国女王、枪术、宝具、魔境智慧、从者灵基。",
        weakness: "峰值依赖灵基、供魔和宝具发动窗口；不把影之国设定自动写成无限主面板。",
        setting: "按FGO召唤灵基斯卡哈记录。",
        basis: "worldbook只用于抽取斯卡哈姓名；定级依据公开角色资料入口和FGO Lancer从者定位。"
      })
    })
  ]);
})();
