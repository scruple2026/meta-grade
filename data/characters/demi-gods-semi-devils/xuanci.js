(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["天龙八部"];
  if (!work) throw new Error("天龙八部 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "xuanci",
    name: "玄慈",
    en: "Xuanci",
    aliases: ["玄慈方丈", "带头大哥", "伏虎罗汉"],
    affiliation: "少林寺",
    grade: "少林方丈",
    appearances: ["少室山大会"],
    timelineStatus: "少室山大会期",
    fandomSlug: "玄慈",
    confidence: "medium",
    evidenceType: ["角色页入口", "小说条目入口"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["墙级", "墙级｜少林绝技", "少林高僧武功深厚，但少室山期不写成超出武侠局部破坏。"],
      defense: ["墙级", "墙级｜少林内功", "内功和经验提供防护。"],
      movement: ["亚音速", "亚音速｜少林身法", "高僧身法与反应。"],
      reaction: ["亚音速", "亚音速｜少林经验", "江湖经验丰富。"],
      vitality: ["精锐韧体", "精锐韧体｜少林内功", "人体结构，内功支撑续战。"],
      healing: ["缓慢自愈", "缓慢自愈｜内功调息", "依靠内功调息。"],
      energy: ["墙级能量", "墙级能量｜少林内功", "内力资源深厚但非顶级怪物。"],
      energyRegen: ["缓慢回能", "中速回能｜调息", "内力需调息。"]
    }),
    notes: notes({
      penetration: "少林绝技和掌力偏近战与局部破坏。",
      resistance: "少林内功可靠，但戒律和旧案压力影响最终行动。",
      sensing: "江湖阅历、少林方丈视野和武学见识强。",
      tactics: "能统筹少林局势，但少室山旧案使其被动。",
      special: "少林绝技、方丈身份、带头大哥旧案。",
      weakness: "旧案与戒律压力是核心短板，最终自尽不代表战斗防御不足。",
      setting: "按少室山大会期玄慈记录。",
      basis: "worldbook只用于抽取玄慈姓名；定级依据金庸 Wiki 和公开小说条目入口，方丈身份不直接抬档。"
    })
  })]);
})();
