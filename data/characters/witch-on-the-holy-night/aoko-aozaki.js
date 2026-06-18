(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["魔法使之夜"];
  if (!work) throw new Error("魔法使之夜 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "aoko-aozaki",
    name: "苍崎青子",
    en: "Aoko Aozaki",
    ja: "蒼崎青子",
    aliases: ["青子", "Miss Blue", "破坏之魔女", "Aozaki Aoko"],
    affiliation: "苍崎家 / 魔法使",
    grade: "主角 / 第五魔法使",
    appearances: ["魔法使之夜本篇"],
    timelineStatus: "魔夜本篇 / 第五魔法相关状态",
    fandomSlug: "Aoko_Aozaki",
    confidence: "review",
    evidenceType: ["角色页入口", "作品页入口", "第五魔法/高风险机制", "worldbook索引字段"],
    sourceQuality: "entry",
    evidenceLinks: [
      {
        type: "wiki",
        scope: "角色入口",
        label: "TYPE-MOON Wiki：Aoko Aozaki",
        url: "https://typemoon.fandom.com/wiki/Aoko_Aozaki",
        lang: "en",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "用于核对苍崎青子、第五魔法和魔法使之夜身份入口；具体量级按保守规则处理。"
      }
    ],
    dimensions: dims({
      attack: ["墙级", "楼级｜魔弹/第五魔法｜争议", "本篇魔术火力强；第五魔法按高风险条件峰值，不直接泛化为常态破坏。"],
      defense: ["墙级", "房屋级｜强化/魔术防护", "本体仍是人类魔术师，防护依赖强化和术式。"],
      movement: ["亚音速", "音速｜魔术机动/爆发｜争议", "魔术机动和爆发显著强于常人，光速类不采纳。"],
      reaction: ["亚音速", "音速｜魔术战/爆发｜争议", "魔术战反应强，峰值标争议。"],
      vitality: ["强化凡体", "精锐韧体｜魔术强化/意志", "人类魔术师体魄，靠强化和意志续战。"],
      healing: ["缓慢自愈", "中速自愈｜魔术/状态恢复｜争议", "恢复依赖魔术和状态，不写高速再生。"],
      energy: ["房屋级能量", "楼级能量｜魔法使/第五魔法｜争议", "魔力资源和第五魔法相关峰值高风险记录。"],
      energyRegen: ["中速回能", "快速回能｜魔术回路/准备｜争议", "续航依赖魔术回路、状态和准备。"]
    }),
    notes: notes({
      penetration: "魔弹和第五魔法相关机制既有破坏也有规则/时间性质，不把魔法使称号直接换算为更高破坏档。",
      resistance: "魔术防护和强化有效，但本体仍有人类短板。",
      sensing: "魔术师感知、术式判断和战斗直觉强。",
      tactics: "正面火力、快速决断和爆发压制强；高风险峰值需考虑状态和发动条件。",
      special: "第五魔法、魔弹、魔术回路、苍崎家传承。",
      weakness: "本体承伤有限，高峰值依赖状态与魔法机制，不能长期无条件使用。",
      setting: "按《魔法使之夜》本篇苍崎青子记录。",
      basis: "worldbook只用于从comment/key抽取苍崎青子姓名；定级依据TYPE-MOON Wiki公开入口，第五魔法按特殊权能/争议峰值处理。"
    })
  })]);
})();
