(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) {
    throw new Error("咒术回战 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "atsuya-kusakabe",
      name: "日下部笃也",
      en: "Atsuya Kusakabe",
      ja: "日下部篤也",
      affiliation: "东京咒术高专",
      grade: "一级术师 / 新阴流简易领域",
      appearances: ["涩谷事变", "新宿决战"],
      timelineStatus: "新宿决战",
      aliases: ["日下部", "Kusakabe", "Atsuya Kusakabe", "简易领域", "新阴流", "New Shadow Style"],
      fandomSlug: "Atsuya_Kusakabe",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Jujutsu Kaisen Wiki: Atsuya Kusakabe",
          url: "https://jujutsu-kaisen.fandom.com/wiki/Atsuya_Kusakabe",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对日下部笃也、一级术师、新阴流与简易领域相关资料；具体量级按作品内表现保守记录。"
        }
      ],
      revisionNotes: [
        "从咒术回战改 worldbook 的日下部笃也 key/comment 补入；未采用 worldbook 正文描述。"
      ],
      dimensions: dims({
        attack: ["墙级", "楼级｜新阴流/刀术", "无生得术式但刀术和简易领域熟练度高，可稳定处理近战威胁。"],
        defense: ["墙级", "楼级｜简易领域/咒力防护", "一级术师咒力防护和新阴流防守优秀，但不按领域级硬防处理。"],
        movement: ["亚音速", "音速｜一级术师体术", "高阶术师体术机动，非瞬移或高速移动型。"],
        reaction: ["亚音速", "音速｜简易领域/新阴流", "简易领域与刀术反应是强项，能在高压近战中争取窗口。"],
        vitality: ["精锐韧体", "精锐韧体｜一级术师咒力强化", "人类术师生命体量，抗压强但没有高阶自愈。"],
        healing: ["无自愈", "无自愈", "缺少稳定反转术式自愈表现。"],
        energy: ["墙级能量", "楼级能量｜简易领域/咒力强化", "咒力资源用于刀术强化、防守和简易领域展开。"],
        energyRegen: ["中速回能", "快速回能｜一级术师续航", "续航和资源管理较强，但不是无限咒力。"]
      }),
      notes: notes({
        penetration: "刀术和新阴流具备稳定近战切割，杀伤集中但范围有限。",
        resistance: "简易领域可削弱领域必中和提高近战防守；本体仍需规避高阶大招。",
        sensing: "依赖经验、咒力判断和近战读招，非大范围索敌角色。",
        tactics: "谨慎务实，擅长避开无谓风险、读局势和用简易领域争取生存窗口。",
        special: "新阴流、简易领域、拔刀/刀术防守、无生得术式的一级术师技巧。",
        weakness: "缺少生得术式、领域展开和自愈；主动大范围杀伤不足。",
        setting: "按新宿决战阶段日下部笃也记录，强调技术型一级术师而非高破坏输出。",
        basis: "worldbook只用于抽取日下部笃也姓名；定级依据公开角色资料入口和新阴流/简易领域在作品内的表现。"
      })
    })
  ]);
})();
