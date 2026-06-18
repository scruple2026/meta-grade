(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Grand Order"];

  if (!work) {
    throw new Error("Fate/Grand Order work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "artoria-caster",
      name: "阿尔托莉雅·Caster",
      en: "Artoria Caster",
      ja: "アルトリア・キャスター",
      affiliation: "妖精国 / 迦勒底召唤",
      grade: "Caster / 预言之子",
      appearances: ["Fate/Grand Order"],
      timelineStatus: "FGO Lostbelt 6 / 召唤灵基",
      aliases: ["术呆", "C呆", "阿尔托莉雅·卡斯特", "阿尔托莉雅·阿瓦隆", "Artoria Avalon", "Caster Artoria"],
      fandomSlug: "Artoria_Caster",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "TYPE-MOON Wiki: Artoria Caster",
          url: "https://typemoon.fandom.com/wiki/Artoria_Caster",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对阿尔托莉雅Caster、Lostbelt 6、预言之子、圣剑/支援能力和召唤灵基。"
        }
      ],
      revisionNotes: ["从型月/FGO worldbook 的英灵:阿尔托莉雅Caster key/comment 补入；未采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["楼级", "街区级｜圣剑/宝具支援｜争议", "攻击和圣剑相关峰值需按剧情条件标注，不直接外推到更高档。"],
        defense: ["楼级", "街区级｜对肃正防御/支援｜争议", "防御和支援是核心强项，按宝具/支援峰值保守记录。"],
        movement: ["音速", "超音速｜从者机动/魔术", "Caster灵基与魔术支撑高速应对。"],
        reaction: ["音速", "超音速｜从者反应/支援判断", "从者级反应并适合团队支援。"],
        vitality: ["楼级生命阈值", "街区级生命阈值｜灵基/Lostbelt条件", "灵基承伤强，剧情峰值需标条件。"],
        healing: ["中速自愈｜灵基/供魔", "快速自愈｜支援/供魔", "恢复依赖灵基和支援条件。"],
        energy: ["楼级能量", "街区级能量｜宝具/支援", "宝具和支援资源强，但不写成无限。"],
        energyRegen: ["中速回能", "快速回能｜供魔/支援循环", "供魔和支援循环影响续航。"]
      }),
      notes: notes({
        penetration: "圣剑与宝具相关能力有高价值，但以支援、防御和剧情条件为主，不按无条件大范围输出记录。",
        resistance: "支援防御强，尤其是对肃正防御类效果；仍受发动条件、供魔和剧情限制影响。",
        sensing: "从者感知、Caster魔术和团队支援判断提供情报优势。",
        tactics: "强团队支援者，擅长防护、强化、宝具循环和关键节点保护。",
        special: "预言之子、Caster灵基、圣剑相关能力、对肃正防御、宝具支援、妖精国剧情峰值。",
        weakness: "许多高价值效果依赖队伍、供魔和宝具窗口；Lostbelt剧情条件不自动等同常态。",
        setting: "按FGO Lostbelt 6与召唤灵基综合记录，阿尔托莉雅·阿瓦隆相关峰值标为条件。",
        basis: "worldbook只用于抽取阿尔托莉雅Caster姓名；定级依据公开角色资料入口和FGO支援型Caster定位。"
      })
    })
  ]);
})();
