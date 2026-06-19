(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) {
    throw new Error("咒术回战 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "takako-uro",
      name: "乌鹭亨子",
      en: "Takako Uro",
      ja: "烏鷺亨子",
      affiliation: "死灭回游泳者 / 仙台结界",
      grade: "古代术师 / 天空术式",
      appearances: ["死灭回游"],
      timelineStatus: "死灭回游仙台结界",
      aliases: ["乌鹭", "乌鹭亨子", "空将", "Takako Uro", "Uro", "天空术式", "Sky Manipulation", "Thin Ice Breaker"],
      fandomSlug: "Takako_Uro",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Jujutsu Kaisen Wiki: Takako Uro",
          url: "https://jujutsu-kaisen.fandom.com/wiki/Takako_Uro",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对乌鹭亨子、仙台结界、天空术式和古代术师身份；具体量级按作品内表现保守记录。"
        }
      ],
      revisionNotes: [
        "从咒术回战改 worldbook 的仙台结界/乌鹭亨子/天空术式 key/comment 补入；未采用 worldbook 正文描述。"
      ],
      dimensions: dims({
        attack: ["楼级", "街区级｜天空术式/宇守罗弹｜争议", "天空面扭曲与反射可制造高穿透打击，范围破坏保守。"],
        defense: ["楼级", "街区级｜天空扭曲防护｜争议", "空间面扭曲可偏转攻击，但不是全类型免疫。"],
        movement: ["音速", "超音速｜飞行/天空术式", "可在空中机动并参与仙台高阶混战。"],
        reaction: ["音速", "超音速｜古代术师", "能处理乙骨、石流、黑沐死等多方高速战。"],
        vitality: ["精锐韧体", "楼级生命阈值｜咒力强化", "人类术师生命体量，靠术式防护和咒力承伤。"],
        healing: ["无自愈", "中速自愈｜反转术式语境｜争议", "恢复表现不如成熟反转术式者，保守处理。"],
        energy: ["楼级能量", "街区级能量｜天空术式", "术式资源足以支撑多轮高阶战。"],
        energyRegen: ["快速回能", "快速回能｜古代术师", "高阶术师续航强，但非无限。"]
      }),
      notes: notes({
        penetration: "天空术式可操纵空间面并用宇守罗弹反击，属于高技巧穿透与偏转。",
        resistance: "天空扭曲能偏转常规攻击；领域必中、术式失效或被抓住空档时仍会受伤。",
        sensing: "高阶术师战斗感和空中视野较强，非全域索敌。",
        tactics: "擅长保持距离、空中机动和用术式改写攻击轨道。",
        special: "天空术式、空中机动、宇守罗弹、古代术师经验。",
        weakness: "防御依赖术式展开与判断；面对领域、术式复制、反术式或多面夹击风险上升。",
        setting: "按死灭回游仙台结界乌鹭亨子记录。",
        basis: "worldbook只用于抽取乌鹭亨子姓名；定级依据公开角色资料入口和仙台结界混战中的天空术式表现。"
      })
    })
  ]);
})();
