(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) {
    throw new Error("咒术回战 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "ryu-ishigori",
      name: "石流龙",
      en: "Ryu Ishigori",
      ja: "石流龍",
      affiliation: "死灭回游泳者 / 仙台结界",
      grade: "古代术师 / 花岗岩爆破",
      appearances: ["死灭回游"],
      timelineStatus: "死灭回游仙台结界",
      aliases: ["石流", "Ryu", "Ryu Ishigori", "Granite Blast", "花岗岩爆破", "咒力输出"],
      fandomSlug: "Ryu_Ishigori",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Jujutsu Kaisen Wiki: Ryu Ishigori",
          url: "https://jujutsu-kaisen.fandom.com/wiki/Ryu_Ishigori",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对石流龙、仙台结界、花岗岩爆破和高咒力输出设定；具体量级按作品内表现保守记录。"
        }
      ],
      revisionNotes: [
        "从咒术回战改 worldbook 的仙台结界/石流龙 key/comment 补入；未采用 worldbook 正文描述。"
      ],
      dimensions: dims({
        attack: ["楼级", "街区级｜花岗岩爆破/高咒力输出｜争议", "高咒力输出和远程光束是核心，保守写街区级争议峰值。"],
        defense: ["楼级", "街区级｜咒力防护｜争议", "可承受仙台高阶混战火力，但不是无条件硬防。"],
        movement: ["音速", "超音速｜古代术师体术", "可与乙骨、乌鹭等高阶术师近战和远距交火。"],
        reaction: ["音速", "超音速｜高阶术师", "能处理多方仙台混战。"],
        vitality: ["楼级生命阈值", "楼级生命阈值｜咒力强化", "高承伤和战斗意志强，本体仍是人类术师。"],
        healing: ["无自愈", "中速自愈｜咒力恢复语境｜争议", "缺少明确成熟反转术式自愈表现。"],
        energy: ["楼级能量", "街区级能量｜花岗岩爆破", "咒力输出极高，远程火力和连续爆破是强项。"],
        energyRegen: ["快速回能", "快速回能｜高咒力输出", "能持续输出，但仍受伤势和咒力消耗限制。"]
      }),
      notes: notes({
        penetration: "花岗岩爆破偏高咒力远程炮击和近战爆发，穿透来自输出密度。",
        resistance: "咒力防护和体魄很强；领域、规则术式和空间扭曲仍需单独判断。",
        sensing: "高阶术师战斗感和咒力判断突出。",
        tactics: "偏正面火力压制和享受强敌对轰，战术灵活性低于乌鹭。",
        special: "花岗岩爆破、高咒力输出、古代术师经验、近远兼备火力。",
        weakness: "战斗风格偏硬碰硬，面对规则克制、术式复制或多方夹击风险高。",
        setting: "按死灭回游仙台结界石流龙记录。",
        basis: "worldbook只用于抽取石流龙姓名；定级依据公开角色资料入口和仙台结界混战中的花岗岩爆破表现。"
      })
    })
  ]);
})();
