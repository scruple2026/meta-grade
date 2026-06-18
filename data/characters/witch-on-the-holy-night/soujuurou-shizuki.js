(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["魔法使之夜"];
  if (!work) throw new Error("魔法使之夜 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "soujuurou-shizuki",
    name: "静希草十郎",
    en: "Soujuurou Shizuki",
    ja: "静希草十郎",
    aliases: ["静希", "草十郎", "草食狼", "Shizuki Soujuurou"],
    affiliation: "三咲高中 / 山育出身",
    grade: "主角 / 山育体术者",
    appearances: ["魔法使之夜本篇"],
    timelineStatus: "魔夜本篇",
    fandomSlug: "Soujuurou_Shizuki",
    confidence: "medium",
    evidenceType: ["角色页入口", "作品页入口", "worldbook索引字段"],
    sourceQuality: "entry",
    evidenceLinks: [
      {
        type: "wiki",
        scope: "角色入口",
        label: "TYPE-MOON Wiki：Soujuurou Shizuki",
        url: "https://typemoon.fandom.com/wiki/Soujuurou_Shizuki",
        lang: "en",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "用于核对静希草十郎身份和魔法使之夜本篇资料入口；具体量级按保守规则处理。"
      }
    ],
    dimensions: dims({
      attack: ["砖级", "墙级｜山育体术/短时爆发", "异常训练带来高单体肉搏威胁，但不写成大范围破坏。"],
      defense: ["砖级", "墙级｜耐痛/山育体魄", "承伤和耐痛强，仍是人体结构。"],
      movement: ["凡人速", "亚音速｜短时爆发", "短距离爆发强，长距机动不高。"],
      reaction: ["凡人速", "亚音速｜近战本能", "近战本能和山育经验支撑瞬间反应。"],
      vitality: ["强化凡体", "精锐韧体｜耐痛/意志", "人体生命体量，耐受和意志突出。"],
      healing: ["无自愈", "缓慢自愈｜休整", "没有超自然再生。"],
      energy: ["凡人能量", "砖级能量｜短时爆发", "主要是体力和短时爆发，不具备魔术能量池。"],
      energyRegen: ["缓慢回能", "缓慢回能｜休整", "体力恢复依赖休息。"]
    }),
    notes: notes({
      penetration: "山育体术偏近身要害破坏、关节和瞬间爆发，不等同范围攻击。",
      resistance: "耐痛和身体控制强，但面对魔术远程、结界或持续压制仍脆弱。",
      sensing: "野外生活经验和近战本能优秀，不具备魔术索敌。",
      tactics: "直觉式近战、沉着和极端距离管理强；对现代/魔术社会知识不足。",
      special: "山育体术、异常耐痛、近身爆发和身体控制。",
      weakness: "无魔术资源、远程短板明显，持续战和信息差风险高。",
      setting: "按《魔法使之夜》本篇静希草十郎记录。",
      basis: "worldbook只用于从comment/key抽取静希草十郎姓名；定级依据TYPE-MOON Wiki公开入口，山育体术作为短时近战峰值处理。"
    })
  })]);
})();
