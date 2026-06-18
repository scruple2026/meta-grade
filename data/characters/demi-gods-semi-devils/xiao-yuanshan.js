(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["天龙八部"];
  if (!work) throw new Error("天龙八部 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "xiao-yuanshan",
    name: "萧远山",
    en: "Xiao Yuanshan",
    aliases: ["黑衣人", "萧峰父亲"],
    affiliation: "契丹 / 藏经阁黑衣僧",
    grade: "契丹高手",
    appearances: ["少室山大会"],
    timelineStatus: "少室山大会期 / 复仇线",
    fandomSlug: "蕭遠山",
    confidence: "medium",
    evidenceType: ["角色页入口", "小说条目入口"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["墙级", "房屋级｜少林绝技/契丹武功", "多年潜修与复仇线使其武功极高。"],
      defense: ["墙级", "房屋级｜深厚内力", "内力深厚，但强练少林武功存在隐患。"],
      movement: ["亚音速", "亚音速｜潜行轻功", "藏经阁潜伏和夜行能力强。"],
      reaction: ["亚音速", "亚音速｜老江湖经验", "战斗经验和复仇警觉很强。"],
      vitality: ["精锐韧体", "精锐韧体｜深厚内力", "人体结构，长期内伤隐患存在。"],
      healing: ["缓慢自愈", "中速自愈｜内功调息", "内功可调息但旧患明显。"],
      energy: ["墙级能量", "房屋级能量｜深厚内力", "总内力较深。"],
      energyRegen: ["缓慢回能", "中速回能｜调息", "内力需调息。"]
    }),
    notes: notes({
      penetration: "契丹武功和少林绝技结合，偏近战杀伤和突袭。",
      resistance: "内力深厚但有旧伤和强练隐患。",
      sensing: "潜伏、复仇追踪和江湖判断很强。",
      tactics: "长期复仇布局和隐蔽行动强，执念也限制判断。",
      special: "藏经阁潜伏、少林绝技、复仇线。",
      weakness: "复仇执念和强练武功反噬是核心风险。",
      setting: "按少室山大会期萧远山记录。",
      basis: "worldbook只用于抽取萧远山姓名；定级依据金庸 Wiki 和公开小说条目入口。"
    })
  })]);
})();
