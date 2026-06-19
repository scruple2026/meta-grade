(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) throw new Error("咒术回战 work metadata must load before character files.");

  registerCharacters([
    work.character({
      id: "riko-amanai",
      name: "天内理子",
      en: "Riko Amanai",
      ja: "天内理子",
      affiliation: "星浆体",
      grade: "星浆体 / 普通人",
      appearances: ["怀玉・玉折"],
      timelineStatus: "怀玉・玉折",
      aliases: ["理子", "Riko", "Riko Amanai", "星浆体", "Star Plasma Vessel"],
      fandomSlug: "Riko_Amanai",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引", "非战斗保守"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Jujutsu Kaisen Wiki: Riko Amanai",
          url: "https://jujutsu-kaisen.fandom.com/wiki/Riko_Amanai",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对天内理子、星浆体和怀玉・玉折相关资料；星浆体身份不折算为正面战力。"
        }
      ],
      revisionNotes: [
        "从咒术回战改 worldbook 的天内理子 key/comment 补入；未采用 worldbook 正文描述。",
        "天内理子是剧情核心星浆体，按非战斗普通人面板记录。"
      ],
      dimensions: dims({
        attack: ["凡人级", "凡人级", "普通学生，缺少战斗攻击表现。"],
        defense: ["凡人级", "凡人级", "普通人承伤，需外部护卫保护。"],
        movement: ["凡人速", "凡人速", "普通人移动。"],
        reaction: ["凡人速", "凡人速", "普通人反应。"],
        vitality: ["凡人肉身", "凡人肉身", "普通人生命体量。"],
        healing: ["缓慢自愈", "缓慢自愈｜医疗", "按普通人自然恢复和外部医疗处理。"],
        energy: ["凡人能量", "凡人能量", "无可用于战斗的超自然能源表现。"],
        energyRegen: ["无回能", "无回能", "不存在可排序的战斗回能体系。"]
      }),
      notes: notes({
        penetration: "无特殊攻击性质。",
        resistance: "普通人承伤；星浆体身份是同化设定，不等同防御或生命体量上升。",
        sensing: "普通人感知，不具备战斗索敌。",
        tactics: "剧情选择和自我意志重要，但不构成战斗战术优势。",
        special: "星浆体身份、与天元同化相关设定。",
        weakness: "无战斗能力，依赖五条、夏油、黑井等护卫。",
        setting: "按怀玉・玉折时期天内理子记录，不把星浆体叙事地位写成战力。",
        basis: "worldbook只用于抽取天内理子姓名；定级依据公开角色资料入口和非战斗星浆体定位。"
      })
    })
  ]);
})();
