(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["心理测量者"];

  if (!work) throw new Error("Psycho-Pass work metadata must load before character files.");

  registerCharacters([
    work.character({
      id: "rikako-oryo",
      name: "王陵璃华子",
      en: "Rikako Oryo",
      ja: "王陵璃華子",
      affiliation: "樱霜学园 / 标本事件关联者",
      grade: "学生 / 犯罪者",
      appearances: ["标本事件"],
      timelineStatus: "第一季 / 标本事件",
      aliases: ["王陵", "璃华子", "Rikako", "Rikako Oryo", "标本事件"],
      fandomSlug: "Rikako_Oryo",
      confidence: "medium",
      evidenceType: ["角色页入口", "worldbook名字索引", "非战斗保守"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Psycho-Pass Wiki: Rikako Oryo",
          url: "https://psychopass.fandom.com/wiki/Rikako_Oryo",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对王陵璃华子、樱霜学园和标本事件相关资料；犯罪计划不折算为正面战斗力。"
        }
      ],
      revisionNotes: [
        "从心理测量者 worldbook 的标本事件/王陵璃华子 key/comment 补入；未采用 worldbook 正文描述。"
      ],
      dimensions: dims({
        attack: ["凡人级", "砖级｜工具/准备", "个人正面战斗力低，伤害来自预谋、工具和犯罪环境。"],
        defense: ["凡人级", "凡人级", "普通学生肉身。"],
        movement: ["凡人速", "凡人速", "普通人移动。"],
        reaction: ["凡人速", "凡人速｜心理操控", "心理与计划能力不等同身体反应。"],
        vitality: ["凡人肉身", "凡人肉身", "普通人生命体量。"],
        healing: ["无自愈", "无自愈", "无自愈。"],
        energy: ["凡人能量", "砖级能量｜工具/准备", "资源来自工具、环境和预谋，不等同个人输出。"],
        energyRegen: ["无回能", "缓慢回能｜准备", "外部资源需要时间准备。"]
      }),
      notes: notes({
        penetration: "通过工具、药物/环境和预谋犯罪造成伤害，正面杀伤有限。",
        resistance: "普通人承伤，缺少特殊防护。",
        sensing: "擅长利用校园环境和目标心理，非战斗索敌。",
        tactics: "危险性来自审美化犯罪、心理操控和预谋，而非正面战斗。",
        special: "标本事件关联、心理操控、犯罪准备、校园环境利用。",
        weakness: "肉身普通，缺少战斗训练；被公安定位后容错很低。",
        setting: "按第一季标本事件阶段记录，不把案件影响力写成战斗面板。",
        basis: "worldbook只用于抽取王陵璃华子姓名；定级依据公开角色资料入口和标本事件定位。"
      })
    })
  ]);
})();
