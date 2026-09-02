(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["魔法使之夜"];
  if (!work) throw new Error("魔法使之夜 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "alice-kuonji",
    name: "久远寺有珠",
    en: "Alice Kuonji",
    ja: "久遠寺有珠",
    aliases: ["有珠", "爱丽丝", "最后的魔女", "Kuonji Alice"],
    affiliation: "久远寺家 / 魔女",
    grade: "主角 / 魔女",
    appearances: ["魔法使之夜本篇"],
    timelineStatus: "魔夜本篇 / 久远寺宅邸期",
    fandomSlug: "Alice_Kuonji",
    confidence: "review",
    evidenceType: ["角色页入口", "作品页入口", "使魔/童话怪物", "worldbook索引字段"],
    sourceQuality: "entry",
    evidenceLinks: [
      {
        type: "wiki",
        scope: "角色入口",
        label: "TYPE-MOON Wiki：Alice Kuonji",
        url: "https://typemoon.fandom.com/wiki/Alice_Kuonji",
        lang: "en",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "用于核对久远寺有珠、魔女身份和童话怪物/使魔资料入口；具体量级按保守规则处理。"
      }
    ],
    dimensions: dims({
      attack: ["墙体级", "楼宇级｜童话怪物/使魔｜争议", "使魔和童话怪物可形成高威胁，按条件峰值而非常态肉身。"],
      defense: ["墙体级", "房屋级｜使魔/结界/工房", "防护依赖使魔、结界和宅邸/工房环境。"],
      movement: ["凡人速", "亚音速｜使魔/术式辅助", "本体移动有限，术式与使魔改善机动。"],
      reaction: ["亚音速", "亚音速｜魔术战判断", "魔术战判断强。"],
      vitality: ["强化凡体", "精锐韧体｜魔女体质/工房", "本体仍按人形魔术师处理，工房和使魔不等同肉身。"],
      healing: ["缓慢自愈", "中速自愈｜魔术/工房", "恢复依赖魔术与环境。"],
      energy: ["房屋级能量", "楼宇级能量｜童话怪物/工房资源｜争议", "资源上限取决于使魔、工房和准备。"],
      energyRegen: ["中速回能", "快速回能｜工房/准备｜争议", "准备和工房环境提高续航。"]
    }),
    notes: notes({
      penetration: "童话怪物和使魔偏特殊召唤、陷阱和规则化攻击，不等同有珠本体拳脚破坏。攻击速度：使魔、童话怪物与陷阱分别涉及召唤、独立单位攻击和预先布置，不能用有珠本体速度概括命中时机。",
      resistance: "工房、使魔和结界可分担风险；本体被近身压制时仍危险。",
      sensing: "魔女感知、工房警戒和使魔反馈构成主要索敌。",
      tactics: "擅长布置、诱导、使魔协同和环境压制。",
      special: "童话怪物、Ploy Kickshaw、使魔、久远寺宅邸/工房。",
      weakness: "依赖使魔与准备，脱离主场或被高速近身时短板明显。",
      setting: "按《魔法使之夜》本篇久远寺有珠记录。",
      basis: "worldbook只用于从comment/key抽取久远寺有珠姓名；定级依据TYPE-MOON Wiki公开入口，使魔与童话怪物作为条件资源处理。"
    })
  })]);
})();
