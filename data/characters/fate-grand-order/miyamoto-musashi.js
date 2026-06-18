(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Grand Order"];

  if (!work) {
    throw new Error("Fate/Grand Order work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "miyamoto-musashi",
      name: "宫本武藏",
      en: "Miyamoto Musashi",
      ja: "宮本武蔵",
      affiliation: "迦勒底协力 / 异世界剑豪",
      grade: "Saber / 二天一流剑士",
      appearances: ["Fate/Grand Order"],
      timelineStatus: "FGO Saber 灵基 / 异世界武藏",
      aliases: ["武藏", "女武藏", "宫本", "新免武藏守藤原玄信", "Miyamoto Musashi"],
      fandomSlug: "Miyamoto_Musashi_%28Lostbelt%29",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "TYPE-MOON Wiki: Miyamoto Musashi (Lostbelt)",
          url: "https://typemoon.fandom.com/wiki/Miyamoto_Musashi_%28Lostbelt%29",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对 FGO 宫本武藏的 Saber 灵基、异世界武藏、二天一流、空位/零之境地和宝具语境。"
        }
      ],
      revisionNotes: [
        "从命运之夜酒馆助手 worldbook 的宫本武藏 key/comment 补入；未采用 worldbook 正文描述。",
        "泳装 Berserker 与特定剧情牺牲/消失状态未并入本条主面板。"
      ],
      dimensions: dims({
        attack: ["楼级", "街区级｜宝具/空位剑技｜争议", "Saber 灵基和二天一流提供高单体杀伤，空位相关效果按条件峰值记录。"],
        defense: ["楼级", "街区级｜灵基/剑技防御", "防御主要来自从者灵基、格挡和剑技处理，不是重装硬抗型。"],
        movement: ["音速", "超音速｜缩地/从者机动", "近战接敌和拔刀速度按从者级处理。"],
        reaction: ["音速", "超音速｜心眼/零之境地", "剑豪预判、心眼和空位境地支撑高速反应。"],
        vitality: ["楼级生命阈值", "街区级生命阈值｜灵基/意志", "从者灵基和剑豪意志提高续战，但仍会被核心伤害击倒。"],
        healing: ["中速自愈｜灵基/供魔", "快速自愈｜供魔/剧情支援", "恢复依赖灵基、供魔和剧情支援条件。"],
        energy: ["楼级能量", "街区级能量｜宝具/剑技峰值", "宝具和剑技峰值有高消耗，未按剧情牺牲状态外推。"],
        energyRegen: ["中速回能", "快速回能｜供魔/战斗循环", "供魔可支撑多轮剑技爆发，但不是无消耗。"]
      }),
      notes: notes({
        penetration: "二天一流、宝具和空位相关剑技偏单体穿透与破局，不等同大范围城市级破坏。",
        resistance: "可凭剑技、心眼和从者灵基处理正面攻防；对大范围压制、精神/概念干涉需看具体相性。",
        sensing: "剑豪直觉、心眼和从者感知可辅助读招，适合近中距离决斗。",
        tactics: "极擅长近战读招、抢节奏和临场破局，能把战斗导向一击决胜。",
        special: "二天一流、心眼、空位/零之境地、宝具、异世界漂流者设定。",
        weakness: "高峰值依赖接战、宝具窗口和特定剧情条件；远程大范围火力与消耗战并非强项。",
        setting: "按 FGO Saber 宫本武藏记录；泳装 Berserker 和剧情牺牲状态另作条件说明。",
        basis: "worldbook只用于抽取宫本武藏姓名；定级依据公开角色资料入口和 FGO Saber 剑豪表现，峰值保守停在街区级争议。"
      })
    })
  ]);
})();
