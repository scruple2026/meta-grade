(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) {
    throw new Error("咒术回战 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "dagon",
      name: "陀艮",
      en: "Dagon",
      ja: "陀艮",
      affiliation: "灾害咒灵阵营",
      grade: "特级咒灵 / 海洋灾害咒灵",
      appearances: ["涩谷事变"],
      timelineStatus: "涩谷事变 / 成熟体与领域",
      aliases: ["Dagon", "死累累涌军", "荡蕴平线", "Horizon of the Captivating Skandha"],
      fandomSlug: "Dagon",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Jujutsu Kaisen Wiki: Dagon",
          url: "https://jujutsu-kaisen.fandom.com/wiki/Dagon",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对陀艮、未登记特级咒灵、咒胎至成熟体、涩谷事变进化和领域展开。"
        }
      ],
      revisionNotes: ["从咒术回战 worldbook 的 char_陀艮 key/comment 补入；未采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["楼级", "街区级｜领域/死累累涌军｜必中", "成熟体可用海洋式神群和领域必中压制多人，按范围咒术峰值保守记录。"],
        defense: ["墙级", "楼级｜咒灵身体/领域环境", "肉身承伤强于普通咒灵，但主要优势来自领域和式神压制。"],
        movement: ["亚音速", "音速｜飞行/咒灵机动", "成熟体具备高速近战、飞行和领域内机动。"],
        reaction: ["亚音速", "音速", "能在涩谷与多名一级术师交战。"],
        vitality: ["精锐韧体", "街区级生命阈值｜咒灵身体/领域续战", "特级咒灵生命力强，领域中续战能力突出。"],
        healing: ["快速自愈｜咒灵恢复", "快速自愈｜咒灵恢复", "咒灵体可恢复，但仍受高输出、领域破坏和直接斩杀限制。"],
        energy: ["楼级能量", "街区级能量｜领域/式神群", "领域和式神群消耗大量咒力。"],
        energyRegen: ["快速回能", "快速回能｜咒力恢复", "灾害咒灵续航强，但不是无限。"]
      }),
      notes: notes({
        penetration: "死累累涌军在领域中形成必中式神群攻击，优势是持续命中和数量压制，不等于单击大范围爆破。",
        resistance: "咒灵体、领域环境和咒力提供承伤；领域被突破、伏黑甚尔级近战突入或高穿透斩击会迅速改变局势。",
        sensing: "咒力感知和领域内掌控强，领域外精密索敌资料较少。",
        tactics: "成熟体后依赖领域展开和式神群围攻压制多人，擅长阵地战；领域外正面技巧不如顶级近战者。",
        special: "咒胎进化、海洋灾害咒灵、领域展开荡蕴平线、死累累涌军、咒灵恢复。",
        weakness: "强度高度依赖成熟体和领域窗口；领域被打开缺口或被高端近战突入后本体防线会快速下降。",
        setting: "按涩谷事变成熟体陀艮记录，不把咒胎阶段和成熟体混为同一面板。",
        basis: "worldbook只用于抽取陀艮姓名；定级依据公开角色资料入口和涩谷事变成熟体、领域、式神群表现。"
      })
    })
  ]);
})();
