(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) throw new Error("咒术回战 work metadata must load before character files.");

  registerCharacters([
    work.character({
      id: "kiyotaka-ijichi",
      name: "伊地知洁高",
      en: "Kiyotaka Ijichi",
      ja: "伊地知潔高",
      affiliation: "东京咒术高专 / 辅助监督",
      grade: "辅助监督 / 帐",
      appearances: ["幼鱼与逆罚", "涩谷事变", "新宿决战"],
      timelineStatus: "正篇",
      aliases: ["伊地知", "Ijichi", "Kiyotaka Ijichi", "辅助监督", "帐"],
      fandomSlug: "Kiyotaka_Ijichi",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引", "非战斗保守"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Jujutsu Kaisen Wiki: Kiyotaka Ijichi",
          url: "https://jujutsu-kaisen.fandom.com/wiki/Kiyotaka_Ijichi",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对伊地知洁高、辅助监督和帐相关资料；不把后勤重要性折算为正面战力。"
        }
      ],
      revisionNotes: [
        "从咒术回战改 worldbook 的伊地知洁高 key/comment 补入；未采用 worldbook 正文描述。",
        "伊地知洁高是关键辅助监督，按非前线战斗角色保守记录。"
      ],
      dimensions: dims({
        attack: ["凡人级", "砖级｜自卫", "缺少正面攻击术式表现，只记录普通自卫上限。"],
        defense: ["凡人级", "砖级｜帐/咒力基础", "辅助监督可参与结界和现场支援，本体承伤仍接近普通人。"],
        movement: ["凡人速", "凡人速", "普通人移动。"],
        reaction: ["凡人速", "凡人速", "普通人反应，战场经验不等于高速近战。"],
        vitality: ["凡人肉身", "凡人肉身｜后勤人员", "本体生命体量按普通人处理。"],
        healing: ["缓慢自愈", "缓慢自愈｜医疗", "按普通人自然恢复和外部医疗处理。"],
        energy: ["凡人能量", "砖级能量｜帐/辅助术式", "可执行咒术辅助工作，但不是前线能源池。"],
        energyRegen: ["无回能", "中速回能｜辅助待机", "不存在可用于正面持续战斗的回能体系。"]
      }),
      notes: notes({
        penetration: "无特殊攻击性质，后勤和结界工作不折算为杀伤。",
        resistance: "普通人级承伤，帐和现场经验只提供环境控制与保护条件。",
        sensing: "擅长现场判断、任务调度和咒术界流程，非战斗索敌。",
        tactics: "后勤协调、任务安排和现场支援可靠，价值主要在组织而非单挑。",
        special: "辅助监督、帐、任务调度、现场支援。",
        weakness: "正面战斗能力低，缺少高机动、硬防、自愈和杀伤术式。",
        setting: "按正篇辅助监督状态记录，不把剧情关键性写成高战力。",
        basis: "worldbook只用于抽取伊地知洁高姓名；定级依据公开角色资料入口和辅助监督定位。"
      })
    })
  ]);
})();
