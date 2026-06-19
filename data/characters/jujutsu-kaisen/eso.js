(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) throw new Error("咒术回战 work metadata must load before character files.");

  registerCharacters([
    work.character({
      id: "eso",
      name: "坏相",
      en: "Eso",
      ja: "壊相",
      affiliation: "咒胎九相图",
      grade: "特级咒物受肉 / 蚀烂腐术",
      appearances: ["起首雷同"],
      timelineStatus: "起首雷同",
      aliases: ["壊相", "Eso", "咒胎九相图", "蚀烂腐术", "Rot Technique", "极之番 翅王"],
      fandomSlug: "Eso",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Jujutsu Kaisen Wiki: Eso",
          url: "https://jujutsu-kaisen.fandom.com/wiki/Eso",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对坏相、咒胎九相图和蚀烂腐术相关资料；具体量级按起首雷同表现保守记录。"
        }
      ],
      revisionNotes: [
        "从咒术回战改 worldbook 的坏相 key/comment 补入；未采用 worldbook 正文描述。"
      ],
      dimensions: dims({
        attack: ["墙级", "楼级｜蚀烂腐术/极之番", "蚀烂腐术以腐蚀性血液和条件伤害为主，峰值按局部术式杀伤记录。"],
        defense: ["墙级", "楼级｜受肉体/咒力防护", "咒胎九相图受肉体强于普通术师，但低于高阶特级咒灵硬防。"],
        movement: ["亚音速", "音速｜受肉体机动", "可与虎杖、钉崎交战，机动按中低阶术师战处理。"],
        reaction: ["亚音速", "音速｜近战应对", "能进行多角色近战与术式配合。"],
        vitality: ["精锐韧体", "精锐韧体｜受肉体/九相图", "特殊受肉体生命结构，仍可被高强度近战和共鸣反制。"],
        healing: ["中速自愈｜受肉体", "快速自愈｜咒力/肉体恢复", "具备一定恢复和续战能力，不等同完全再生。"],
        energy: ["墙级能量", "楼级能量｜蚀烂腐术", "咒力和血液术式资源可支撑持续腐蚀与近战。"],
        energyRegen: ["中速回能", "快速回能｜受肉体续航", "续航优于普通术师，仍受伤势和术式条件限制。"]
      }),
      notes: notes({
        penetration: "蚀烂腐术偏毒性/腐蚀性持续伤害，命中和条件成立比纯破坏范围更关键。",
        resistance: "受肉体和咒力防护提供较强承伤；灵魂/共鸣类反制和高强度近战仍有效。",
        sensing: "具备咒物受肉体的战斗感知，非远距索敌型。",
        tactics: "常与血涂协同，通过血液附着、腐蚀和夹击制造压力。",
        special: "咒胎九相图、蚀烂腐术、腐蚀性血液、极之番翅王、兄弟协同。",
        weakness: "术式需命中/附着并维持条件；面对针对血液或灵魂的反制容错下降。",
        setting: "按起首雷同篇坏相记录，不把特级咒物身份直接折算为特级咒灵级面板。",
        basis: "worldbook只用于抽取坏相姓名；定级依据公开角色资料入口和起首雷同篇术式表现。"
      })
    })
  ]);
})();
