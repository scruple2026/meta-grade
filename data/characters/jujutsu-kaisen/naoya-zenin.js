(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) {
    throw new Error("咒术回战 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "naoya-zenin",
      name: "禅院直哉",
      en: "Naoya Zenin",
      ja: "禪院直哉",
      affiliation: "禅院家",
      grade: "特别一级术师 / 投射咒法",
      appearances: ["禅院家肃清", "樱岛结界"],
      timelineStatus: "禅院家肃清至樱岛结界",
      aliases: ["直哉", "Naoya", "Naoya Zenin", "投射咒法", "Projection Sorcery", "咒灵直哉"],
      fandomSlug: "Naoya_Zenin",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Jujutsu Kaisen Wiki: Naoya Zenin",
          url: "https://jujutsu-kaisen.fandom.com/wiki/Naoya_Zenin",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对禅院直哉、特别一级术师、投射咒法、人类阶段与咒灵阶段；具体量级按作品内表现保守记录。"
        }
      ],
      revisionNotes: [
        "从咒术回战改 worldbook 的禅院直哉 key/comment 补入；未采用 worldbook 正文描述。"
      ],
      dimensions: dims({
        attack: ["墙级", "楼级｜投射咒法/高速冲击", "高速叠加和投射咒法带来强近战冲击，咒灵化后峰值提高但仍标争议。"],
        defense: ["墙级", "楼级｜咒力防护/咒灵化", "人类阶段为特别一级术师承伤；咒灵化后生命结构不同。"],
        movement: ["音速", "超音速｜投射咒法", "投射咒法是核心优势，可高速连续加速。"],
        reaction: ["音速", "超音速｜投射咒法/特别一级", "高速战中反应强，但依赖术式节奏和规则。"],
        vitality: ["精锐韧体", "楼级生命阈值｜咒灵化｜争议", "人类阶段仍是人形术师；咒灵化后生命结构提高且需单独标注。"],
        healing: ["无自愈", "快速自愈｜咒灵化｜争议", "人类阶段缺少稳定自愈，咒灵化后恢复按咒灵特性处理。"],
        energy: ["楼级能量", "街区级能量｜咒灵化/领域｜争议", "投射咒法和咒灵化领域带来高峰值，但不按领域直接抬攻击主档。"],
        energyRegen: ["快速回能", "快速回能｜咒力/咒灵化", "高阶术师和咒灵化续航强，但非无限。"]
      }),
      notes: notes({
        penetration: "投射咒法通过高速运动和帧规则制造命中优势，咒灵化后领域属于特殊机制，不直接换算为破坏范围。",
        resistance: "人类阶段靠咒力防护和速度规避；咒灵化后有咒灵生命结构，但仍可被真希、咒具和规则破解克制。",
        sensing: "特别一级术师战斗感和咒灵化后的目标追踪较强，非全域索敌。",
        tactics: "擅长高速压制和利用术式规则惩罚对手停帧；傲慢和性格缺陷会影响判断。",
        special: "投射咒法、高速叠加、特别一级术师、咒灵化、领域展开语境。",
        weakness: "术式节奏可被理解和预判；性格傲慢导致轻敌，面对完成天与咒缚和灵魂/咒具针对风险高。",
        setting: "按禅院家肃清至樱岛结界直哉记录，人类阶段与咒灵化峰值放在同一条并明确标注。",
        basis: "worldbook只用于抽取禅院直哉姓名；定级依据公开角色资料入口和禅院家肃清、樱岛结界中的投射咒法表现。"
      })
    })
  ]);
})();
