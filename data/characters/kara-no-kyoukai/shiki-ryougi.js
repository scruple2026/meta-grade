(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["空之境界"];
  if (!work) throw new Error("空之境界 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "shiki-ryougi",
    name: "两仪式",
    en: "Shiki Ryougi",
    ja: "両儀式",
    aliases: ["两仪", "式", "式姐", "Shiki", "Ryougi Shiki"],
    affiliation: "两仪家 / 伽蓝之堂关联",
    grade: "主角 / 直死魔眼持有者",
    appearances: ["空之境界本篇"],
    timelineStatus: "空境本篇 / 非FGO灵基",
    fandomSlug: "Shiki_Ryougi",
    confidence: "medium",
    evidenceType: ["角色页入口", "作品页入口", "worldbook索引字段"],
    sourceQuality: "entry",
    evidenceLinks: [
      {
        type: "wiki",
        scope: "角色入口",
        label: "TYPE-MOON Wiki：Shiki Ryougi",
        url: "https://typemoon.fandom.com/wiki/Shiki_Ryougi",
        lang: "en",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "用于核对两仪式、直死魔眼和空境本篇身份入口；具体量级按保守规则处理。"
      }
    ],
    dimensions: dims({
      attack: ["砖块级", "墙体级｜直死魔眼/刀具｜特殊", "物理破坏不高；直死魔眼是死亡线切断和弱点杀伤，不等同范围破坏。"],
      defense: ["凡人级", "砖块级｜战斗训练/规避", "本体仍是人类，防御主要来自规避、刀具和近战判断。"],
      movement: ["凡人速", "亚音速｜近战爆发", "近距离爆发和身法强，但不写现代高速档。"],
      reaction: ["凡人速", "亚音速｜直死魔眼/近战", "依赖直死魔眼识别、近战判断和身体执行。"],
      vitality: ["强化凡体", "精锐韧体｜意志/异常体质", "人体结构，异常体质和意志提高续战。"],
      healing: ["无自愈", "缓慢自愈｜治疗/休整", "缺少稳定战斗再生，恢复依赖休整和外部治疗。"],
      energy: ["凡人能量", "砖块级能量｜集中战斗体力", "主要是人体体力与精神负荷，不把直死魔眼写成能量池。"],
      energyRegen: ["缓慢回能", "缓慢回能｜休整", "体力和精神负荷需要休整。"]
    }),
    notes: notes({
      penetration: "直死魔眼可切断死亡线/点，属于高穿透规则杀伤；不能直接换算为同范围破坏规模。攻击速度：两仪式必须先以直死魔眼识别死亡线或点，再由刀刃实际切中；魔眼提供可杀条件，不会让挥刀跳过接近与命中动作。",
      resistance: "肉身承伤有限，面对远程压制、广域攻击或无法接近目标时风险上升。",
      sensing: "直死魔眼提供特殊弱点识别，近战读招强；不等同全域索敌。",
      tactics: "擅长近身突入、短刀作战和抓住死亡线机会，战术围绕接近和命中展开。",
      special: "直死魔眼、两仪式人格/根源相关设定、短刀近战。",
      weakness: "本体脆弱，能力依赖看见并接近目标；FGO Assassin/Saber 灵基不计入本篇主面板。",
      setting: "按《空之境界》本篇两仪式记录。",
      basis: "worldbook只用于从comment/key抽取两仪式姓名；定级依据TYPE-MOON Wiki公开入口，直死魔眼作为特殊权能而非破坏档。"
    })
  })]);
})();
