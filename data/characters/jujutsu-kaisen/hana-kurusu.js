(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) throw new Error("咒术回战 work metadata must load before character files.");

  registerCharacters([
    work.character({
      id: "hana-kurusu",
      name: "来栖华 / 天使",
      en: "Hana Kurusu / Angel",
      ja: "来栖華 / 天使",
      affiliation: "死灭回游泳者 / 天使受肉体",
      grade: "术式消灭 / 雅各布天梯",
      appearances: ["死灭回游", "新宿决战"],
      timelineStatus: "死灭回游至新宿决战 / 天使共生状态",
      aliases: ["来栖华", "天使", "Angel", "Hana Kurusu", "Jacob's Ladder", "雅各布天梯"],
      fandomSlug: "Hana_Kurusu",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Jujutsu Kaisen Wiki: Hana Kurusu",
          url: "https://jujutsu-kaisen.fandom.com/wiki/Hana_Kurusu",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对来栖华、天使、术式消灭和雅各布天梯；术式克制不直接折算为大范围破坏。"
        }
      ],
      revisionNotes: ["从咒术回战改 worldbook 的天使·来栖华 key/comment 补入；未采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["凡人级", "楼级｜雅各布天梯/术式消灭", "峰值来自对术式、结界和受肉体的克制，不按纯破坏范围抬档。"],
        defense: ["凡人级", "墙级｜天使共生/咒力防护", "本体防御低，依赖天使术式和队友保护。"],
        movement: ["凡人速", "亚音速｜飞行/术式", "可用翅膀和术式机动，但非高速近战角色。"],
        reaction: ["凡人速", "亚音速", "战斗反应保守记录，实战经验有限。"],
        vitality: ["凡人肉身", "强化凡体｜受肉体共生", "本体承伤较低，被重伤后战斗能力明显受限。"],
        healing: ["无自愈", "无自愈", "缺少稳定自愈表现。"],
        energy: ["墙级能量", "楼级能量｜雅各布天梯", "术式资源用于消灭术式和对宿傩等目标克制。"],
        energyRegen: ["中速回能", "中速回能｜术式恢复", "缺少长时间高压输出表现。"]
      }),
      notes: notes({
        penetration: "雅各布天梯和术式消灭可对结界、咒物、受肉体和术式结构产生克制。",
        resistance: "本体防护低，主要依赖距离、队友和天使术式；被近身或欺骗时风险高。",
        sensing: "对受肉体和术式目标有特殊判断语境，远距离索敌不强。",
        tactics: "术式价值高但来栖华本人经验不足，容易受情感和伏黑相关判断影响。",
        special: "天使共生、术式消灭、雅各布天梯、受肉体克制、飞行。",
        weakness: "本体脆弱、经验不足、情感判断易被利用；术式需要命中和展开窗口。",
        setting: "按死灭回游至新宿决战记录，术式克制不等同自身高攻防。",
        basis: "worldbook只用于抽取天使·来栖华姓名；定级依据公开角色资料入口和雅各布天梯/术式消灭表现。"
      })
    })
  ]);
})();
