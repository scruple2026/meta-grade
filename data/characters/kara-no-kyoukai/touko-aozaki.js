(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["空之境界"];
  if (!work) throw new Error("空之境界 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "touko-aozaki",
    name: "苍崎橙子",
    en: "Touko Aozaki",
    ja: "蒼崎橙子",
    aliases: ["橙子", "伤痛之赤", "冠位人偶师", "Aozaki Touko"],
    affiliation: "伽蓝之堂 / 魔术师",
    grade: "魔术师 / 人偶师",
    appearances: ["空之境界本篇", "型月共通设定"],
    timelineStatus: "空境本篇 / 伽蓝之堂期",
    fandomSlug: "Touko_Aozaki",
    confidence: "review",
    evidenceType: ["角色页入口", "作品页入口", "人偶/工房机制", "worldbook索引字段"],
    sourceQuality: "entry",
    evidenceLinks: [
      {
        type: "wiki",
        scope: "角色入口",
        label: "TYPE-MOON Wiki：Touko Aozaki",
        url: "https://typemoon.fandom.com/wiki/Touko_Aozaki",
        lang: "en",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "用于核对苍崎橙子、人偶师身份和空境/型月资料入口；具体量级按保守规则处理。"
      }
    ],
    dimensions: dims({
      attack: ["墙级", "房屋级｜魔术/人偶/工房", "魔术与人偶资源可形成局部高威胁，但不按从者级处理。"],
      defense: ["墙级", "房屋级｜人偶备体/结界｜特殊", "防御和生存高度依赖人偶备体、工房和准备。"],
      movement: ["凡人速", "亚音速｜魔术辅助", "本体移动不高，魔术和准备可改善机动。"],
      reaction: ["亚音速", "亚音速｜魔术战经验", "魔术师经验和判断强。"],
      vitality: ["强化凡体", "房屋级生命阈值｜人偶备体/工房｜特殊", "本体人类，备体与工房使生存机制特殊。"],
      healing: ["无自愈", "快速自愈｜人偶替换/备体｜特殊", "不是肉体再生，主要是替换或备体机制。"],
      energy: ["墙级能量", "房屋级能量｜魔术/工房资源", "魔术资源和工房准备决定上限。"],
      energyRegen: ["中速回能", "快速回能｜工房/准备", "准备越充分续航越强，遭遇战下降。"]
    }),
    notes: notes({
      penetration: "魔术、人偶和工房资源偏术式干涉、陷阱和局部杀伤，不等同大范围破坏。攻击速度：橙子本人的魔术按具体施术步骤判断，人偶启动后以自身动作接战，工房陷阱则依赖预先布置和触发；三者不能共用一个速度。",
      resistance: "人偶备体可改变死亡条件，但不能视为单一肉身高防御。",
      sensing: "魔术侦查、工房布置和异常事件经验强。",
      tactics: "擅长准备、替身、工房和信息差，遭遇战与有准备战差距明显。",
      special: "人偶制造、备体/替换、魔术工房、封印指定相关背景。",
      weakness: "准备依赖高；本体或工房被针对时风险上升。",
      setting: "按《空之境界》本篇伽蓝之堂期苍崎橙子记录。",
      basis: "worldbook只用于从comment/key抽取苍崎橙子姓名；定级依据TYPE-MOON Wiki公开入口，人偶备体作为特殊生存机制处理。"
    })
  })]);
})();
