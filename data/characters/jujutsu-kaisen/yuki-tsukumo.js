(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) throw new Error("咒术回战 work metadata must load before character files.");

  registerCharacters([
    work.character({
      id: "yuki-tsukumo",
      name: "九十九由基",
      en: "Yuki Tsukumo",
      ja: "九十九由基",
      affiliation: "独立特级术师",
      grade: "特级术师 / 星之怒",
      appearances: ["怀玉·玉折", "死灭回游"],
      timelineStatus: "死灭回游 / 对羂索战",
      aliases: ["Yuki", "Yuki Tsukumo", "星之怒", "Garuda", "凰轮"],
      fandomSlug: "Yuki_Tsukumo",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Jujutsu Kaisen Wiki: Yuki Tsukumo",
          url: "https://jujutsu-kaisen.fandom.com/wiki/Yuki_Tsukumo",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对九十九由基身份、星之怒、凰轮和对羂索战；黑洞作为一次性自毁条件另写。"
        }
      ],
      revisionNotes: ["从咒术回战改 worldbook 的九十九由基 key/comment 补入；未采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["楼级", "街区级｜星之怒/凰轮｜自毁黑洞另计", "虚拟质量打击极强；黑洞是一次性自毁规则峰值，不写成稳定攻击档。"],
        defense: ["墙级", "楼级｜咒力防护", "本体仍是人类术师，防御依赖咒力和战斗技巧。"],
        movement: ["亚音速", "音速", "特级术师近战机动优秀。"],
        reaction: ["音速", "音速", "能与羂索等高阶术师交战。"],
        vitality: ["精锐韧体", "精锐韧体｜意志/重伤续战", "可在重伤下继续发动术式，但不是不死或高速再生。"],
        healing: ["无自愈", "快速自愈｜反转术式｜争议", "具高阶术师恢复语境，但重伤后续战能力仍受限。"],
        energy: ["楼级能量", "街区级能量｜特级咒力/星之怒", "咒力与术式资源处特级层级。"],
        energyRegen: ["快速回能", "快速回能｜特级术师", "续航强，但星之怒和极端峰值仍会消耗窗口。"]
      }),
      notes: notes({
        penetration: "星之怒通过虚拟质量放大打击和式神凰轮压制，黑洞属于一次性自毁峰值。",
        resistance: "咒力防护和特级经验强，但本体仍可被领域、重力/反重力、致命伤处理。",
        sensing: "经验、咒力感知和对术式结构判断很强；不按六眼级解析处理。",
        tactics: "战斗思路直接，能与胀相、天元协同逼出羂索底牌；对隐藏术式情报仍受限制。",
        special: "星之怒、凰轮、虚拟质量、简易领域、自毁黑洞条件峰值。",
        weakness: "本体是人类术师；黑洞会自毁且需要极端条件，不是常态可复用输出。",
        setting: "按死灭回游对羂索战记录，不把特级称号或黑洞术式直接折算为稳定天体级主面板。",
        basis: "worldbook只用于抽取九十九由基姓名；定级依据公开角色资料入口与对羂索战中的星之怒、凰轮和自毁峰值。"
      })
    })
  ]);
})();
