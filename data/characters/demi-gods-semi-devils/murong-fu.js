(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["天龙八部"];
  if (!work) throw new Error("天龙八部 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "murong-fu",
    name: "慕容复",
    en: "Murong Fu",
    aliases: ["南慕容", "慕容公子"],
    affiliation: "姑苏慕容",
    grade: "斗转星移传人",
    appearances: ["少室山大会"],
    timelineStatus: "少室山大会期",
    fandomSlug: "慕容復",
    confidence: "medium",
    evidenceType: ["角色页入口", "小说条目入口"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["墙级", "墙级｜斗转星移/家传武学", "输出强于普通高手，但在少室山顶级圈中受限。"],
      defense: ["墙级", "墙级｜借力化劲", "斗转星移擅长转移来力，非无条件硬抗。"],
      movement: ["亚音速", "亚音速｜轻功", "江湖高手机动。"],
      reaction: ["亚音速", "亚音速｜武学素养", "招式见识和反制能力强。"],
      vitality: ["精锐韧体", "精锐韧体｜内力", "人体结构，承伤不如顶级内力怪物。"],
      healing: ["缓慢自愈", "缓慢自愈｜调息", "依靠内功调息。"],
      energy: ["墙级能量", "墙级能量｜家传内力", "内力充足但非顶级无底资源。"],
      energyRegen: ["缓慢回能", "缓慢回能｜调息", "需调息恢复。"]
    }),
    notes: notes({
      penetration: "以斗转星移、博采众家和剑掌招式反制为主。",
      resistance: "擅长借力化劲，但遇到远超自身内力或稳定输出会失势。",
      sensing: "武学见识高，熟悉多门派招式。",
      tactics: "机谋强但执念重，复国目标影响判断。",
      special: "斗转星移、慕容家传武学、复国资源。",
      weakness: "心态、名利与复国执念是核心短板。",
      setting: "按少室山大会期慕容复记录。",
      basis: "worldbook只用于抽取慕容复姓名；定级依据金庸 Wiki 和公开小说条目入口，南慕容名号不直接抬档。"
    })
  })]);
})();
