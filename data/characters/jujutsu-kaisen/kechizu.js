(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) throw new Error("咒术回战 work metadata must load before character files.");

  registerCharacters([
    work.character({
      id: "kechizu",
      name: "血涂",
      en: "Kechizu",
      ja: "血塗",
      affiliation: "咒胎九相图",
      grade: "特级咒物受肉 / 蚀烂腐术",
      appearances: ["起首雷同"],
      timelineStatus: "起首雷同",
      aliases: ["血塗", "Kechizu", "咒胎九相图", "蚀烂腐术", "Rot Technique"],
      fandomSlug: "Kechizu",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Jujutsu Kaisen Wiki: Kechizu",
          url: "https://jujutsu-kaisen.fandom.com/wiki/Kechizu",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对血涂、咒胎九相图和蚀烂腐术相关资料；具体量级按起首雷同表现保守记录。"
        }
      ],
      revisionNotes: [
        "从咒术回战改 worldbook 的血涂 key/comment 补入；未采用 worldbook 正文描述。"
      ],
      dimensions: dims({
        attack: ["墙级", "楼级｜蚀烂腐术/体术", "以近战、血液附着和腐蚀条件伤害为主。"],
        defense: ["墙级", "楼级｜受肉体/咒力防护", "受肉体承伤较强，但不按高阶特级硬防处理。"],
        movement: ["亚音速", "音速｜受肉体机动", "可参与虎杖、钉崎战斗，移动与近战按中低阶术师战处理。"],
        reaction: ["亚音速", "音速｜近战应对", "能与坏相配合围攻并应对近身交锋。"],
        vitality: ["精锐韧体", "精锐韧体｜受肉体/九相图", "特殊受肉体生命结构，仍可被明确致命伤击倒。"],
        healing: ["中速自愈｜受肉体", "快速自愈｜咒力/肉体恢复", "有一定恢复和续战能力，但非完全再生。"],
        energy: ["墙级能量", "楼级能量｜蚀烂腐术", "咒力与血液术式资源支撑腐蚀和近战。"],
        energyRegen: ["中速回能", "快速回能｜受肉体续航", "续航优于普通人类术师，仍受伤势和术式条件限制。"]
      }),
      notes: notes({
        penetration: "蚀烂腐术通过血液附着和腐蚀造成持续伤害，范围不大但条件伤害强。",
        resistance: "受肉体承伤较高，仍会被高强度体术、共鸣和针对性反制击破。",
        sensing: "具备咒物受肉体战斗感知，非远距索敌型。",
        tactics: "依赖与坏相配合，单体战术复杂度低于坏相。",
        special: "咒胎九相图、蚀烂腐术、腐蚀性血液、兄弟协同。",
        weakness: "术式命中条件明显，战术和判断较直接；被拆开或被共鸣反制时危险。",
        setting: "按起首雷同篇血涂记录，不把特级咒物身份直接折算为高阶主档。",
        basis: "worldbook只用于抽取血涂姓名；定级依据公开角色资料入口和起首雷同篇术式表现。"
      })
    })
  ]);
})();
