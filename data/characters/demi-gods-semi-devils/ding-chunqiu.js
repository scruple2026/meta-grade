(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["天龙八部"];
  if (!work) throw new Error("天龙八部 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "ding-chunqiu",
    name: "丁春秋",
    en: "Ding Chunqiu",
    aliases: ["星宿老怪", "星宿老仙"],
    affiliation: "星宿派 / 逍遥派叛徒",
    grade: "毒功高手",
    appearances: ["少室山大会"],
    timelineStatus: "少室山大会期",
    fandomSlug: "丁春秋",
    confidence: "medium",
    evidenceType: ["角色页入口", "小说条目入口"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["墙级", "房屋级｜化功大法/毒功", "毒功和化功偏特殊杀伤，局部破坏有限。"],
      defense: ["墙级", "墙级｜内力/毒功", "内功深厚但仍可被顶级高手克制。"],
      movement: ["亚音速", "亚音速｜轻功", "江湖顶级邪派高手机动。"],
      reaction: ["亚音速", "亚音速｜老江湖经验", "经验和诡计强。"],
      vitality: ["精锐韧体", "精锐韧体｜内力/毒功", "承伤依赖内力和经验。"],
      healing: ["缓慢自愈", "中速自愈｜内功调息", "内功可调息恢复。"],
      energy: ["墙级能量", "房屋级能量｜毒功/化功", "内力和毒功资源较深。"],
      energyRegen: ["缓慢回能", "中速回能｜调息", "内力需调息。"]
    }),
    notes: notes({
      penetration: "化功大法、毒粉和三笑逍遥散偏削弱/中毒，不等同纯破坏。",
      resistance: "对毒和内力交锋经验丰富，仍怕高深正面内力与针对性克制。",
      sensing: "老江湖经验和诈术强。",
      tactics: "善用毒、门人造势、心理压迫和偷袭。",
      special: "化功大法、星宿毒功、三笑逍遥散。",
      weakness: "忌惮逍遥派正统武学，正面硬碰顶级高手时劣势明显。",
      setting: "按少室山大会期丁春秋记录。",
      basis: "worldbook只用于抽取丁春秋姓名；定级依据金庸 Wiki 和公开小说条目入口，毒功作为特殊杀伤处理。"
    })
  })]);
})();
