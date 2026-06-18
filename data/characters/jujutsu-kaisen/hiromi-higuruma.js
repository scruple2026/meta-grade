(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) throw new Error("咒术回战 work metadata must load before character files.");

  registerCharacters([
    work.character({
      id: "hiromi-higuruma",
      name: "日车宽见",
      en: "Hiromi Higuruma",
      ja: "日車寛見",
      affiliation: "死灭回游泳者 / 虎杖阵营",
      grade: "觉醒术师 / 审判领域",
      appearances: ["死灭回游", "新宿决战"],
      timelineStatus: "新宿决战 / 处刑人之剑窗口",
      aliases: ["日车", "Higuruma", "Hiromi Higuruma", "Judgeman", "处刑人之剑", "Deadly Sentencing"],
      fandomSlug: "Hiromi_Higuruma",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Jujutsu Kaisen Wiki: Hiromi Higuruma",
          url: "https://jujutsu-kaisen.fandom.com/wiki/Hiromi_Higuruma",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对日车宽见、审判领域、没收与处刑人之剑；即死效果作为规则项而非破坏档。"
        }
      ],
      revisionNotes: ["从咒术回战改 worldbook 的日车宽见 key/comment 补入；未采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["墙级", "楼级｜处刑人之剑｜规则即死", "直接破坏不高；处刑人之剑是条件即死规则，不折算为大范围输出。"],
        defense: ["墙级", "楼级｜领域/咒力防护", "觉醒术师防护优秀，但本体仍是人类。"],
        movement: ["亚音速", "音速", "能参与新宿高压战，但非速度特化。"],
        reaction: ["亚音速", "音速", "可处理高阶术师交锋和领域规则操作。"],
        vitality: ["精锐韧体", "精锐韧体｜反转术式觉醒", "人类术师体魄，峰值来自咒力和临场反转术式。"],
        healing: ["无自愈", "快速自愈｜反转术式觉醒", "新宿阶段有临场反转术式语境，稳定性低于成熟使用者。"],
        energy: ["墙级能量", "楼级能量｜领域/审判规则", "资源主要支撑领域、没收和处刑规则。"],
        energyRegen: ["中速回能", "快速回能｜觉醒术师", "成长速度快，但领域和处刑人之剑仍有条件。"]
      }),
      notes: notes({
        penetration: "没收、审判和处刑人之剑可绕开普通防御形成规则杀伤。",
        resistance: "咒力防护和反转术式觉醒提高容错，但高阶火力、领域对抗和速度压制仍危险。",
        sensing: "法律推理、证据理解和领域规则判断很强，远距离索敌一般。",
        tactics: "极强逻辑与临场学习能力，能迅速理解术式和对局规则。",
        special: "诛伏赐死、审判、没收、处刑人之剑、反转术式觉醒。",
        weakness: "处刑人之剑与审判结果绑定；规则判定、证据和领域条件失败时直接输出有限。",
        setting: "按新宿决战日车记录，即死剑只作为条件峰值而非破坏规模。",
        basis: "worldbook只用于抽取日车宽见姓名；定级依据公开角色资料入口和死灭回游/新宿决战中的审判领域表现。"
      })
    })
  ]);
})();
