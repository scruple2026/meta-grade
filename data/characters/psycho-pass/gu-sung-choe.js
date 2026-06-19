(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["心理测量者"];

  if (!work) throw new Error("Psycho-Pass work metadata must load before character files.");

  registerCharacters([
    work.character({
      id: "gu-sung-choe",
      name: "崔九圣",
      en: "Gu-sung Choe",
      ja: "チェ・グソン",
      affiliation: "槙岛阵营",
      grade: "黑客 / 反西比拉协力者",
      appearances: ["西比拉系统审判篇", "第一季"],
      timelineStatus: "第一季 / 诺娜塔渗透",
      aliases: ["崔", "Choe Gu-sung", "Gu-sung Choe", "Choe", "槙岛协力者"],
      fandomSlug: "Gu-sung_Choe",
      confidence: "medium",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Psycho-Pass Wiki: Gu-sung Choe",
          url: "https://psychopass.fandom.com/wiki/Gu-sung_Choe",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对崔九圣、槙岛协力者和黑客/系统渗透相关资料；黑客能力不直接折算为物理破坏。"
        }
      ],
      revisionNotes: [
        "从心理测量者 worldbook 的西比拉核心/崔九圣 key/comment 补入；未采用 worldbook 正文描述。"
      ],
      dimensions: dims({
        attack: ["凡人级", "砖级｜枪械/设备", "本人正面火力按普通武器处理，主要威胁来自黑客和情报。"],
        defense: ["凡人级", "凡人级", "普通人肉身。"],
        movement: ["凡人速", "凡人速", "普通人移动。"],
        reaction: ["凡人速", "凡人速｜潜入应对", "有潜入和临场判断，非战斗高速反应。"],
        vitality: ["凡人肉身", "凡人肉身", "普通人生命体量。"],
        healing: ["无自愈", "无自愈", "无自愈。"],
        energy: ["凡人能量", "砖级能量｜设备/外部资源", "黑客设备和情报资源属于外部工具，不等同个人输出。"],
        energyRegen: ["无回能", "缓慢回能｜准备/设备", "资源需要准备和设备支持。"]
      }),
      notes: notes({
        penetration: "物理杀伤有限，主要通过黑客、渗透和系统暴露制造威胁。",
        resistance: "普通人承伤，缺少特殊防护。",
        sensing: "擅长电子系统检索、监控和资料追踪。",
        tactics: "作为槙岛协力者负责技术支援、潜入和揭露西比拉核心。",
        special: "黑客能力、系统渗透、情报分析、反西比拉协力。",
        weakness: "肉身普通，依赖设备、权限漏洞和隐蔽行动。",
        setting: "按第一季诺娜塔渗透阶段记录，不把黑客能力换算成物理攻击能级。",
        basis: "worldbook只用于抽取崔九圣姓名；定级依据公开角色资料入口和其黑客/协力者定位。"
      })
    })
  ]);
})();
