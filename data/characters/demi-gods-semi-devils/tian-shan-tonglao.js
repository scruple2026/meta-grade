(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["天龙八部"];
  if (!work) throw new Error("天龙八部 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "tian-shan-tonglao",
    name: "天山童姥",
    en: "Tianshan Tonglao",
    aliases: ["童姥", "灵鹫宫主人", "巫行云"],
    affiliation: "逍遥派 / 灵鹫宫",
    grade: "逍遥派前辈 / 灵鹫宫尊主",
    appearances: ["逍遥派与灵鹫宫相关剧情"],
    timelineStatus: "灵鹫宫期 / 返老阶段相关表现",
    fandomSlug: "天山童姥",
    confidence: "medium",
    evidenceType: ["角色页入口", "小说条目入口", "worldbook索引字段"],
    sourceQuality: "entry",
    evidenceLinks: [
      {
        type: "wiki",
        scope: "角色入口",
        label: "金庸 Wiki：天山童姥",
        url: "https://jinyong.fandom.com/zh/wiki/%E5%A4%A9%E5%B1%B1%E7%AB%A5%E5%A7%A5",
        lang: "zh",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "用于核对角色、逍遥派/灵鹫宫身份和武学入口；具体量级仍按保守武侠口径处理。"
      }
    ],
    dimensions: dims({
      attack: ["墙级", "房屋级｜天山六阳掌/生死符", "逍遥派高端掌法与生死符偏单体控制和内力杀伤，局部破坏保守到房屋级。"],
      defense: ["墙级", "房屋级｜内力/逍遥派武学", "深厚内力与招式防护强，但仍按人体和武侠内力处理。"],
      movement: ["亚音速", "亚音速｜轻功", "逍遥派高端轻功与老江湖经验支撑高机动。"],
      reaction: ["亚音速", "亚音速｜武学经验", "反应来自深厚武学经验、内力和身法，不升现代高速档。"],
      vitality: ["精锐韧体", "精锐韧体｜内力/返老阶段", "生命体量仍是人体结构；返老还童功法影响状态，不等同大型生命结构。"],
      healing: ["缓慢自愈", "中速自愈｜内功调息/返老阶段｜争议", "内功可辅助恢复，返老阶段有明显限制与风险。"],
      energy: ["房屋级能量｜深厚内力", "房屋级能量｜逍遥派传承", "总内力属金庸高端，但不反推大范围破坏。"],
      energyRegen: ["缓慢回能", "中速回能｜调息", "内力消耗后需要调息，不写瞬时回能。"]
    }),
    notes: notes({
      penetration: "天山六阳掌、天山折梅手和生死符偏内力控制、点穴/寒热折磨与单体压制，不等同大范围爆破。",
      resistance: "内力和逍遥派武学防护强；返老阶段状态波动会削弱稳定承压。",
      sensing: "老江湖经验、门派控制和对内力细节的判断强。",
      tactics: "擅长以身份威慑、门派资源、生死符控制和高端招式压制对手。",
      special: "天山六阳掌、天山折梅手、生死符、八荒六合唯我独尊功相关返老设定。",
      weakness: "返老还童阶段存在状态限制；主动控制和门派资源强于纯破坏范围。",
      setting: "按灵鹫宫期及返老阶段相关表现记录。",
      basis: "worldbook只用于从comment/key抽取天山童姥姓名；定级依据金庸 Wiki 和公开小说条目入口，逍遥派武学按特殊控制与局部内力杀伤处理。"
    })
  })]);
})();
