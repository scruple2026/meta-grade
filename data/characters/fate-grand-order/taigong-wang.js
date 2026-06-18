(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Grand Order"];

  if (!work) {
    throw new Error("Fate/Grand Order work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "taigong-wang",
      name: "太公望",
      en: "Taigong Wang",
      ja: "太公望",
      affiliation: "迦勒底召唤 / 仙人系从者",
      grade: "Rider / 姜尚",
      appearances: ["Fate/Grand Order"],
      timelineStatus: "FGO 召唤灵基 / Rider",
      aliases: ["姜尚", "姜子牙", "吕望", "师尚父", "钓鱼佬", "Taigong Wang"],
      fandomSlug: "Taigong_Wang",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "TYPE-MOON Wiki: Taigong Wang",
          url: "https://typemoon.fandom.com/wiki/Taigong_Wang",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对太公望 Rider 灵基、仙术、四不相、打神鞭/宝具和 FGO 登场范围。"
        }
      ],
      revisionNotes: [
        "从型月DLC worldbook 的太公望 key/comment 补入；未采用 worldbook 正文描述。",
        "封神/仙人背景写入特殊项，不直接换算为无限或宇宙级。"
      ],
      dimensions: dims({
        attack: ["楼级", "街区级｜仙术/宝具/对神性｜争议", "仙术和宝具对特定神性/魔性目标价值高，破坏范围保守处理。"],
        defense: ["房屋级", "楼级｜术式防护/灵基", "防御偏术式、回避和支援，不是重装硬抗型。"],
        movement: ["音速", "超音速｜从者机动/骑乘", "Rider 灵基和四不相支撑高速机动。"],
        reaction: ["音速", "超音速｜从者反应/仙术判断", "从者反应与仙术判断适合高速战斗。"],
        vitality: ["房屋级生命阈值", "楼级生命阈值｜灵基/仙术", "生命体量按从者灵基和术式续战记录。"],
        healing: ["中速自愈｜灵基/供魔", "快速自愈｜供魔/仙术支援", "恢复依赖灵基、供魔和术式支援。"],
        energy: ["楼级能量", "街区级能量｜仙术/宝具", "能量峰值来自仙术与宝具资源。"],
        energyRegen: ["中速回能", "快速回能｜供魔/仙术循环", "供魔和仙术循环支撑持续作战。"]
      }),
      notes: notes({
        penetration: "仙术、宝具和对神性/魔性相关克制可提高实战杀伤，但不等同于纯破坏范围升档。",
        resistance: "术式防护和从者灵基存在，正面硬抗不如重甲近战从者。",
        sensing: "仙术、从者感知和策士经验提供索敌与反制能力。",
        tactics: "擅长预判、布置、克制目标和用机动/术式控制战场。",
        special: "Rider 灵基、仙术、四不相、封神相关宝具、对神性/魔性克制。",
        weakness: "高价值克制依赖目标属性；称号和封神背景不自动换算大尺度破坏。",
        setting: "按 FGO Rider 太公望召唤灵基记录。",
        basis: "worldbook只用于抽取太公望姓名；定级依据公开角色资料入口和 FGO Rider 灵基，克制效果写入攻击性质。"
      })
    })
  ]);
})();
