(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) throw new Error("咒术回战 work metadata must load before character files.");

  registerCharacters([
    work.character({
      id: "yu-haibara",
      name: "灰原雄",
      en: "Yu Haibara",
      ja: "灰原雄",
      affiliation: "东京咒术高专",
      grade: "术师学生",
      appearances: ["怀玉・玉折"],
      timelineStatus: "怀玉・玉折",
      aliases: ["灰原", "Haibara", "Yu Haibara", "高专后辈"],
      fandomSlug: "Yu_Haibara",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Jujutsu Kaisen Wiki: Yu Haibara",
          url: "https://jujutsu-kaisen.fandom.com/wiki/Yu_Haibara",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对灰原雄、东京高专学生和怀玉・玉折相关资料；具体量级按已知学生术师定位保守记录。"
        }
      ],
      revisionNotes: [
        "从咒术回战改 worldbook 的灰原雄 key/comment 补入；未采用 worldbook 正文描述。"
      ],
      dimensions: dims({
        attack: ["砖级", "墙级｜咒力基础", "高专学生术师，缺少具体高杀伤术式表现。"],
        defense: ["砖级", "墙级｜咒力防护", "学生术师基础防护，面对误判等级的强敌风险极高。"],
        movement: ["凡人速", "亚音速｜术师训练", "按学生术师体术记录。"],
        reaction: ["凡人速", "亚音速｜术师训练", "具备基础战斗训练，但缺少高阶反应表现。"],
        vitality: ["强化凡体", "强化凡体｜咒力强化", "人类学生术师生命体量。"],
        healing: ["无自愈", "无自愈", "缺少稳定反转术式自愈表现。"],
        energy: ["砖级能量", "墙级能量｜咒力基础", "咒力资源按学生术师保守记录。"],
        energyRegen: ["中速回能", "中速回能｜学生术师续航", "缺少长期高压战表现。"]
      }),
      notes: notes({
        penetration: "未见高穿透专属术式，攻击按基础咒力和体术处理。",
        resistance: "学生术师防护有限，对高阶咒灵或任务误判缺乏容错。",
        sensing: "具备术师基础咒力感知和任务经验，非索敌特化。",
        tactics: "性格积极，能执行高专任务，但实战经验和风险判断有限。",
        special: "高专学生术师基础训练、任务支援。",
        weakness: "缺少明确生得术式、领域、自愈和高阶战绩。",
        setting: "按怀玉・玉折时期灰原雄记录，不用其剧情影响力抬高面板。",
        basis: "worldbook只用于抽取灰原雄姓名；定级依据公开角色资料入口和高专学生术师定位。"
      })
    })
  ]);
})();
