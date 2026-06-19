(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) {
    throw new Error("咒术回战 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "kasumi-miwa",
      name: "三轮霞",
      en: "Kasumi Miwa",
      ja: "三輪霞",
      affiliation: "京都咒术高专",
      grade: "术师 / 新阴流简易领域",
      appearances: ["京都姐妹校交流会", "涩谷事变", "死灭回游"],
      timelineStatus: "京都姐妹校交流会至死灭回游",
      aliases: ["三轮", "Miwa", "Kasumi Miwa", "简易领域", "新阴流", "New Shadow Style"],
      fandomSlug: "Kasumi_Miwa",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Jujutsu Kaisen Wiki: Kasumi Miwa",
          url: "https://jujutsu-kaisen.fandom.com/wiki/Kasumi_Miwa",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对三轮霞、京都高专和新阴流简易领域相关资料；具体量级按作品内表现保守记录。"
        }
      ],
      revisionNotes: [
        "从咒术回战改 worldbook 的三轮霞 key/comment 补入；未采用 worldbook 正文描述。"
      ],
      dimensions: dims({
        attack: ["砖级", "墙级｜拔刀/束缚峰值", "以刀术和简易领域范围内的自动迎击为主，峰值受束缚和场景限制。"],
        defense: ["砖级", "墙级｜简易领域", "简易领域可用于对抗领域必中或近身突入，本体防护较低。"],
        movement: ["凡人速", "亚音速｜术师体术", "京都校学生级机动，缺少高速术式。"],
        reaction: ["凡人速", "亚音速｜简易领域/拔刀", "在简易领域内具备迎击窗口，离开术式条件后反应保守记录。"],
        vitality: ["强化凡体", "强化凡体｜咒力强化", "人类学生术师生命体量。"],
        healing: ["无自愈", "无自愈", "缺少稳定反转术式自愈表现。"],
        energy: ["砖级能量", "墙级能量｜简易领域/刀术", "咒力资源主要用于维持简易领域和刀术强化。"],
        energyRegen: ["中速回能", "中速回能｜学生术师续航", "续航受咒力量和武器状态限制。"]
      }),
      notes: notes({
        penetration: "刀术可造成局部切割，缺少大范围破坏表现。",
        resistance: "简易领域可作为反领域/迎击手段，但不能等同高硬度肉身。",
        sensing: "依赖视线、简易领域范围和基础咒力判断；远距索敌能力有限。",
        tactics: "战斗方式偏防守反击，擅长在规则明确的小范围内执行拔刀迎击。",
        special: "新阴流、简易领域、拔刀迎击、束缚式峰值。",
        weakness: "本体输出、防御和机动都不突出；失去刀或简易领域条件后容错低。",
        setting: "按京都姐妹校交流会至死灭回游的三轮霞记录，不把简易领域本身写成高攻防。",
        basis: "worldbook只用于抽取三轮霞姓名；定级依据公开角色资料入口和新阴流简易领域表现。"
      })
    })
  ]);
})();
