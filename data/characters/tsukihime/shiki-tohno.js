(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["月姬"];
  if (!work) throw new Error("月姬 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "shiki-tohno",
    name: "远野志贵",
    en: "Shiki Tohno",
    ja: "遠野志貴",
    aliases: ["志贵", "远野同学", "杀人贵", "Shiki Tohno"],
    affiliation: "远野家 / 七夜血统",
    grade: "主角 / 直死魔眼持有者",
    appearances: ["月姬主线", "A piece of blue glass moon"],
    timelineStatus: "月姬主线 / 非FGO或Melty Blood状态",
    fandomSlug: "Shiki_Tohno",
    confidence: "medium",
    evidenceType: ["角色页入口", "作品页入口", "worldbook索引字段"],
    sourceQuality: "entry",
    evidenceLinks: [
      {
        type: "wiki",
        scope: "角色入口",
        label: "TYPE-MOON Wiki：Shiki Tohno",
        url: "https://typemoon.fandom.com/wiki/Shiki_Tohno",
        lang: "en",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "用于核对远野志贵、直死魔眼和月姬身份入口；具体量级按保守规则处理。"
      }
    ],
    dimensions: dims({
      attack: ["砖级", "墙级｜直死魔眼/七夜体术｜特殊", "物理破坏不高，直死魔眼属于死亡线弱点杀伤。"],
      defense: ["凡人级", "砖级｜规避/七夜体术", "本体仍是人类，防御主要来自闪避和近战处理。"],
      movement: ["凡人速", "亚音速｜七夜体术爆发", "短距离爆发强，长距移动不高。"],
      reaction: ["凡人速", "亚音速｜直死魔眼/七夜本能", "近战反应和弱点识别强。"],
      vitality: ["强化凡体", "精锐韧体｜七夜血统/意志", "人体结构，异常体质和意志支撑续战。"],
      healing: ["无自愈", "缓慢自愈｜休整/治疗", "缺少稳定战斗自愈。"],
      energy: ["凡人能量", "砖级能量｜短时爆发", "以体力和精神负荷为主，不把直死魔眼写成能量池。"],
      energyRegen: ["缓慢回能", "缓慢回能｜休整", "战后需要休整。"]
    }),
    notes: notes({
      penetration: "直死魔眼可切断死亡线/点，是高穿透规则杀伤；不能直接换算为同范围爆破。",
      resistance: "本体脆弱，远程压制、广域攻击和无法接近目标时风险显著。",
      sensing: "直死魔眼提供死亡线识别，七夜本能提高近战捕捉；不等同广域索敌。",
      tactics: "擅长近距离突入和抓住死亡线机会，依赖隐蔽、距离和瞬间决断。",
      special: "直死魔眼、七夜体术、远野/七夜血统相关异常性。",
      weakness: "身体负担大，输出依赖接近与视认，面对大范围火力和持续战不稳。",
      setting: "按《月姬》主线远野志贵记录；不并入FGO或Melty Blood状态。",
      basis: "worldbook只用于从comment/key抽取远野志贵姓名；定级依据TYPE-MOON Wiki公开入口，直死魔眼作为特殊权能而非破坏档。"
    })
  })]);
})();
