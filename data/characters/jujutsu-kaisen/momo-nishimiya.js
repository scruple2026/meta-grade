(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) throw new Error("咒术回战 work metadata must load before character files.");

  registerCharacters([
    work.character({
      id: "momo-nishimiya",
      name: "西宫桃",
      en: "Momo Nishimiya",
      ja: "西宮桃",
      affiliation: "京都咒术高专",
      grade: "术师 / 付丧操术",
      appearances: ["京都姐妹校交流会", "涩谷事变", "死灭回游"],
      timelineStatus: "京都姐妹校交流会至涩谷事变",
      aliases: ["Momo", "Momo Nishimiya", "扫帚", "付丧操术", "Tool Manipulation"],
      fandomSlug: "Momo_Nishimiya",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Jujutsu Kaisen Wiki: Momo Nishimiya",
          url: "https://jujutsu-kaisen.fandom.com/wiki/Momo_Nishimiya",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对西宫桃、京都高专和付丧操术/扫帚机动相关资料；具体量级按作品内表现保守记录。"
        }
      ],
      revisionNotes: [
        "从咒术回战改 worldbook 的西宫桃 key/comment 补入；未采用 worldbook 正文描述。"
      ],
      dimensions: dims({
        attack: ["砖级", "墙级｜付丧操术/工具攻击", "以扫帚和工具操控牵制、扰乱为主，直接杀伤有限。"],
        defense: ["砖级", "墙级｜咒力防护/机动规避", "本体防护有限，主要依靠飞行机动和距离降低风险。"],
        movement: ["凡人速", "亚音速｜扫帚飞行", "飞行提供立体机动，但不等同高速肉身。"],
        reaction: ["凡人速", "亚音速｜术师训练", "可参与京都校小队战，反应仍按学生术师保守处理。"],
        vitality: ["强化凡体", "强化凡体｜咒力强化", "人类学生术师生命体量。"],
        healing: ["无自愈", "无自愈", "缺少稳定反转术式自愈表现。"],
        energy: ["砖级能量", "墙级能量｜付丧操术", "咒力资源主要用于工具操控、飞行和牵制。"],
        energyRegen: ["中速回能", "中速回能｜学生术师续航", "可支撑小队战斗，但不适合长时间高压输出。"]
      }),
      notes: notes({
        penetration: "工具操控偏牵制、撞击和战场扰乱，缺少高穿透或大范围破坏。",
        resistance: "基础咒力防护有限，空中机动可回避部分近战但怕远程压制。",
        sensing: "具备术师基础咒力判断和空中视野，非专职索敌。",
        tactics: "适合侦察、支援、牵制和队友配合，正面单挑能力有限。",
        special: "付丧操术、扫帚飞行、空中支援、京都校协同。",
        weakness: "本体承伤低，依赖工具和空中机动；被压制飞行或失去距离时风险高。",
        setting: "按京都姐妹校交流会至涩谷事变相关状态记录，不把空中机动写成高速档。",
        basis: "worldbook只用于抽取西宫桃姓名；定级依据公开角色资料入口和京都校小队战表现。"
      })
    })
  ]);
})();
