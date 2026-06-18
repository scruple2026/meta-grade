(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Grand Order"];

  if (!work) {
    throw new Error("Fate/Grand Order work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "ereshkigal",
      name: "艾蕾什基伽尔",
      en: "Ereshkigal",
      ja: "エレシュキガル",
      affiliation: "迦勒底召唤 / 女神拟似从者",
      grade: "Lancer / 冥界女神",
      appearances: ["Fate/Grand Order"],
      timelineStatus: "FGO 召唤灵基 / Lancer",
      aliases: ["艾蕾", "冥界女神", "Eresh", "Ereshkigal"],
      fandomSlug: "Ereshkigal",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "TYPE-MOON Wiki: Ereshkigal",
          url: "https://typemoon.fandom.com/wiki/Ereshkigal",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对艾蕾什基伽尔的 Lancer 灵基、冥界权能、神性和 FGO 登场范围。"
        }
      ],
      revisionNotes: [
        "从命运之夜酒馆助手 worldbook 的艾蕾什基伽尔 key/comment 补入；未采用 worldbook 正文描述。"
      ],
      dimensions: dims({
        attack: ["楼级", "街区级｜冥界权能/宝具｜争议", "攻击峰值来自冥界权能和宝具，跨界破坏规模保守处理。"],
        defense: ["楼级", "街区级｜冥界权能/灵基", "冥界权能偏向防护、压制和领域条件，需标明场地依赖。"],
        movement: ["音速", "超音速｜从者机动", "Lancer 灵基提供从者级机动。"],
        reaction: ["音速", "超音速｜从者反应/冥界感知", "反应按从者级战斗和冥界感知辅助记录。"],
        vitality: ["楼级生命阈值", "街区级生命阈值｜灵基/神性", "灵基和神性提高续战，仍受召唤条件和核心伤害限制。"],
        healing: ["中速自愈｜灵基/供魔", "快速自愈｜冥界权能/供魔", "恢复能力在冥界相关条件下更强。"],
        energy: ["楼级能量", "街区级能量｜冥界权能/宝具", "能量池按从者灵基与冥界权能峰值记录。"],
        energyRegen: ["中速回能", "快速回能｜冥界权能/供魔", "供魔和场地权能可提高回能，但不是无限资源池。"]
      }),
      notes: notes({
        penetration: "攻击包含枪兵近战、魔力释放、冥界权能和宝具压制；领域/场地效果不直接等同裸输出。",
        resistance: "从者灵基、神性和冥界相关防护提升承伤；离开有利场地后峰值需下调理解。",
        sensing: "从者感知和冥界权能可辅助定位、压制和领域内判断。",
        tactics: "偏防守和场地控制，适合用冥界权能削弱敌方行动并保护己方。",
        special: "冥界女神权能、神性、Lancer 灵基、宝具、领域/场地条件强化。",
        weakness: "高价值能力依赖冥界语境、供魔和宝具窗口；召唤灵基不能等同神话本体全权能。",
        setting: "按 FGO Lancer 艾蕾什基伽尔记录，冥界权能作为条件峰值和特殊权能处理。",
        basis: "worldbook只用于抽取艾蕾什基伽尔姓名；定级依据公开角色资料入口和 FGO 从者灵基口径，避免因冥界女神称号直接升到更高破坏档。"
      })
    })
  ]);
})();
