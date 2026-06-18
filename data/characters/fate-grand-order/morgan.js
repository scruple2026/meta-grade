(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Grand Order"];

  if (!work) {
    throw new Error("Fate/Grand Order work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "morgan",
      name: "摩根",
      en: "Morgan",
      ja: "モルガン",
      affiliation: "妖精国 / 迦勒底召唤",
      grade: "Berserker / 妖精国女王",
      appearances: ["Fate/Grand Order"],
      timelineStatus: "Lostbelt 6 / 召唤灵基",
      aliases: ["Morgan", "妖精国女王", "女王摩根", "摩根勒菲", "Morgan le Fay"],
      fandomSlug: "Morgan_(Lostbelt)",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "TYPE-MOON Wiki: Morgan",
          url: "https://typemoon.fandom.com/wiki/Morgan_(Lostbelt)",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对FGO异闻带摩根、妖精国女王、Berserker灵基和Lostbelt 6剧情定位。"
        }
      ],
      revisionNotes: ["从型月/FGO worldbook 的英灵:摩根 key/comment 补入；未采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["楼级", "街区级｜魔术/宝具/Lostbelt条件｜争议", "强魔术和宝具峰值保守写街区级，妖精国统治地位不直接换算为更高破坏档。"],
        defense: ["楼级", "街区级｜魔术防护/灵基", "女王级魔术和灵基带来高防护。"],
        movement: ["音速", "超音速｜从者机动/魔术", "Berserker灵基与魔术支撑高速战斗。"],
        reaction: ["音速", "超音速｜从者反应/女王经验", "从者级反应和长期统治经验。"],
        vitality: ["楼级生命阈值", "街区级生命阈值｜灵基/Lostbelt条件", "灵基强韧，剧情条件峰值另标。"],
        healing: ["中速自愈｜灵基/供魔", "快速自愈｜供魔/魔术", "恢复依赖灵基、供魔和魔术条件。"],
        energy: ["楼级能量", "街区级能量｜宝具/魔术资源", "魔术资源强但不写成无限能量。"],
        energyRegen: ["中速回能", "快速回能｜供魔/灵基", "供魔和灵基状态影响续航。"]
      }),
      notes: notes({
        penetration: "魔术、宝具和妖精国相关权能具备高价值，但缺少直接大范围破坏换算时不抬到城市级以上。",
        resistance: "强魔术防护、灵基和女王级经验提供承伤与反制；概念克制、剧情条件和供魔仍关键。",
        sensing: "Caster/Berserker魔术感知和女王级管理能力提供情报优势。",
        tactics: "统治者型强者，擅长魔术压制、资源管理和长期布局。",
        special: "妖精国女王、Berserker灵基、强魔术、宝具、Lostbelt剧情权能。",
        weakness: "许多高端表现依赖Lostbelt剧情条件、阵地和资源；召唤灵基不等于完整统治权。",
        setting: "按FGO Lostbelt 6摩根与召唤灵基综合记录。",
        basis: "worldbook只用于抽取摩根姓名；定级依据公开角色资料入口和FGO异闻带摩根定位，统治权与剧情机制写入特殊项。"
      })
    })
  ]);
})();
