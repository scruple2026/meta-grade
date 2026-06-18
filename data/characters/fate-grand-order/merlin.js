(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Grand Order"];

  if (!work) {
    throw new Error("Fate/Grand Order work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "merlin",
      name: "梅林",
      en: "Merlin",
      ja: "マーリン",
      affiliation: "阿瓦隆 / 迦勒底召唤",
      grade: "Caster / 花之魔术师",
      appearances: ["Fate/Grand Order"],
      timelineStatus: "FGO召唤灵基 / 支援型Caster",
      aliases: ["Merlin", "花之魔术师", "Caster", "梦魔"],
      fandomSlug: "Merlin",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "TYPE-MOON Wiki: Merlin",
          url: "https://typemoon.fandom.com/wiki/Merlin",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对梅林、Caster、花之魔术师、幻术与支援型能力定位。"
        }
      ],
      revisionNotes: ["从型月/FGO worldbook 的英灵:梅林 key/comment 补入；未采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["楼级", "街区级｜魔术/宝具支援", "直接破坏不是主轴，魔术和宝具偏支援与场控。"],
        defense: ["楼级", "街区级｜幻术/防护支援", "可用幻术和魔术防护提高生存。"],
        movement: ["音速", "超音速｜从者机动/魔术", "按Caster从者机动与魔术位移保守处理。"],
        reaction: ["音速", "超音速｜从者反应/千里眼", "从者级反应并有预见/观察辅助。"],
        vitality: ["楼级生命阈值", "街区级生命阈值｜灵基/阿瓦隆关联", "灵基和特殊存在性质提高续战。"],
        healing: ["中速自愈｜灵基/魔术", "快速自愈｜治疗支援", "可提供恢复支援，但不写成无限自愈。"],
        energy: ["楼级能量", "街区级能量｜宝具/支援", "魔力资源强，主要服务于支援、幻术和强化。"],
        energyRegen: ["中速回能", "快速回能｜Caster/支援循环", "Caster灵基和支援定位带来较好续航。"]
      }),
      notes: notes({
        penetration: "攻击以魔术、幻术和间接干涉为主，通常不按单发大爆破评价。",
        resistance: "可用幻术、防护和支援能力规避风险；本体仍会受高端宝具、反魔术和剧情限制影响。",
        sensing: "千里眼、梦境和Caster感知提供强情报优势，但并非全知。",
        tactics: "强支援型Caster，擅长强化队友、治疗、扰乱和长期布局。",
        special: "幻术、千里眼、治疗支援、英雄作成、阿瓦隆关联、宝具支援。",
        weakness: "直接输出和正面硬拼不是强项，容易受反魔术、封锁和剧情条件约束。",
        setting: "按FGO召唤灵基梅林记录，不把阿瓦隆长期存在状态全部折算进常态面板。",
        basis: "worldbook只用于抽取梅林姓名；定级依据公开角色资料入口和FGO支援型Caster定位。"
      })
    })
  ]);
})();
