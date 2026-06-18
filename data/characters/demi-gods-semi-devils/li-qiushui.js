(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["天龙八部"];
  if (!work) throw new Error("天龙八部 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "li-qiushui",
    name: "李秋水",
    en: "Li Qiushui",
    aliases: ["西夏太妃", "逍遥派前辈"],
    affiliation: "逍遥派 / 西夏皇室",
    grade: "逍遥派前辈 / 西夏太妃",
    appearances: ["逍遥派相关剧情"],
    timelineStatus: "西夏太妃期",
    fandomSlug: "李秋水",
    confidence: "medium",
    evidenceType: ["角色页入口", "小说条目入口", "worldbook索引字段"],
    sourceQuality: "entry",
    evidenceLinks: [
      {
        type: "wiki",
        scope: "角色入口",
        label: "金庸 Wiki：李秋水",
        url: "https://jinyong.fandom.com/zh/wiki/%E6%9D%8E%E7%A7%8B%E6%B0%B4",
        lang: "zh",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "用于核对角色、逍遥派身份和相关武学入口；具体量级仍按保守武侠口径处理。"
      }
    ],
    dimensions: dims({
      attack: ["墙级", "房屋级｜小无相功/白虹掌力", "逍遥派内力与掌力强，偏单体内力交锋和局部破坏。"],
      defense: ["墙级", "房屋级｜内力/逍遥派武学", "高深内力和轻功招架支撑承压。"],
      movement: ["亚音速", "亚音速｜轻功", "高端轻功与身法，但不写现代高速档。"],
      reaction: ["亚音速", "亚音速｜武学经验", "长期武学经验和内力判断支撑反应。"],
      vitality: ["精锐韧体", "精锐韧体｜内力", "仍按人体生命体量处理，内力提高续战。"],
      healing: ["缓慢自愈", "中速自愈｜内功调息", "内功可辅助疗伤和调息，但不是高速再生。"],
      energy: ["房屋级能量｜深厚内力", "房屋级能量｜小无相功", "总内力属金庸高端，不直接反推出大范围攻击。"],
      energyRegen: ["缓慢回能", "中速回能｜调息", "内力恢复依赖调息和状态。"]
    }),
    notes: notes({
      penetration: "小无相功、白虹掌力等偏内力变化、掌力和招式技巧，不等同大面积破坏。",
      resistance: "内力深厚且身法老练；面对逍遥派同级克制和状态劣势时仍有风险。",
      sensing: "对逍遥派武学、内力来源和敌手状态判断强。",
      tactics: "善于利用身份、经验、偷袭窗口和心理压迫，老江湖处理能力强。",
      special: "小无相功、白虹掌力、传音搜魂大法等逍遥派相关武学。",
      weakness: "年龄、旧怨和与天山童姥的互相克制影响稳定性。",
      setting: "按西夏太妃期李秋水记录。",
      basis: "worldbook只用于从comment/key抽取李秋水姓名；定级依据金庸 Wiki 和公开小说条目入口，逍遥派武学按局部内力杀伤和特殊技巧处理。"
    })
  })]);
})();
