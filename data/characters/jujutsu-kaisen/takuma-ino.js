(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) {
    throw new Error("咒术回战 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "takuma-ino",
      name: "猪野琢真",
      en: "Takuma Ino",
      ja: "猪野琢真",
      affiliation: "七海班 / 咒术师",
      grade: "二级术师 / 来访瑞兽",
      appearances: ["涩谷事变", "新宿决战"],
      timelineStatus: "涩谷事变至新宿决战",
      aliases: ["猪野", "Ino", "Takuma Ino", "来访瑞兽", "Auspicious Beasts Summon"],
      fandomSlug: "Takuma_Ino",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Jujutsu Kaisen Wiki: Takuma Ino",
          url: "https://jujutsu-kaisen.fandom.com/wiki/Takuma_Ino",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对猪野琢真、二级术师和来访瑞兽相关资料；具体量级按作品内表现保守记录。"
        }
      ],
      revisionNotes: [
        "从咒术回战改 worldbook 的猪野琢真 key/comment 补入；未采用 worldbook 正文描述。"
      ],
      dimensions: dims({
        attack: ["墙级", "楼级｜来访瑞兽/覆面状态", "来访瑞兽提供多样化攻击和支援，峰值仍按局部术式杀伤记录。"],
        defense: ["墙级", "楼级｜咒力防护", "二级术师以上的咒力强化和战场经验，不能硬吃特级高阶火力。"],
        movement: ["亚音速", "音速｜术师体术", "具备前线术师体术和近战机动。"],
        reaction: ["亚音速", "音速｜战场应对", "可参与涩谷与新宿阶段战斗，但不是顶级反应型角色。"],
        vitality: ["精锐韧体", "精锐韧体｜咒力强化/带伤作战", "人类术师生命体量，承伤强于普通学生但有限。"],
        healing: ["无自愈", "无自愈", "缺少稳定反转术式自愈表现。"],
        energy: ["墙级能量", "楼级能量｜来访瑞兽", "咒力资源用于覆面状态和瑞兽调用。"],
        energyRegen: ["中速回能", "快速回能｜术式轮换", "可持续作战，但高阶瑞兽调用受咒力和状态限制。"]
      }),
      notes: notes({
        penetration: "来访瑞兽可提供角击、追踪、冲击等多种攻击，穿透和范围取决于调用兽种。",
        resistance: "咒力防护与体术支撑前线战斗；缺少领域、自愈和高阶硬防。",
        sensing: "基础咒力感知和战场判断，非远距侦察型。",
        tactics: "重视七海的作战风格，战斗中按瑞兽特性轮换功能，适合辅助和中近距突击。",
        special: "来访瑞兽、覆面状态、瑞兽式攻击/支援、术式轮换。",
        weakness: "术式需要覆面与调用流程；面对压倒性速度、领域或高阶火力时容错不足。",
        setting: "按涩谷事变至新宿决战的猪野琢真记录，不把七海后辈定位直接抬高。",
        basis: "worldbook只用于抽取猪野琢真姓名；定级依据公开角色资料入口和来访瑞兽在作品内的表现。"
      })
    })
  ]);
})();
