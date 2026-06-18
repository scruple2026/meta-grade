(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["天龙八部"];
  if (!work) throw new Error("天龙八部 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "you-tanzhi",
    name: "游坦之",
    en: "You Tanzhi",
    aliases: ["庄聚贤", "铁丑", "丐帮帮主"],
    affiliation: "丐帮 / 星宿派关联",
    grade: "冰蚕寒毒使用者",
    appearances: ["少室山大会"],
    timelineStatus: "少室山大会期",
    fandomSlug: "游坦之",
    confidence: "medium",
    evidenceType: ["角色页入口", "小说条目入口"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["墙级", "房屋级｜冰蚕寒毒", "掌力和寒毒威胁很高，但偏毒性/接触杀伤。"],
      defense: ["墙级", "墙级｜寒毒内力", "内力怪异，防护不等同顶级硬抗。"],
      movement: ["亚音速", "亚音速｜江湖身法", "轻功和近战速度较强。"],
      reaction: ["凡人速", "亚音速｜寒毒内力", "武学经验不足，靠内力弥补。"],
      vitality: ["精锐韧体", "精锐韧体｜冰蚕寒毒", "体质怪异但精神短板明显。"],
      healing: ["缓慢自愈", "中速自愈｜内功/毒性体质", "特殊内力可能支撑恢复，非高速再生。"],
      energy: ["墙级能量", "房屋级能量｜冰蚕寒毒", "寒毒内力总量较高。"],
      energyRegen: ["缓慢回能", "中速回能｜调息", "内力需要调息。"]
    }),
    notes: notes({
      penetration: "冰蚕寒毒和毒掌偏接触/中毒杀伤，不等同纯破坏规模。",
      resistance: "寒毒体质特殊，但心智、经验和情绪都可被利用。",
      sensing: "江湖经验有限，常受阿紫和全冠清影响。",
      tactics: "战斗资源强，判断和自控弱。",
      special: "冰蚕寒毒、易筋经相关内功、丐帮帮主身份。",
      weakness: "对阿紫执念极深，心智和战术判断明显不足。",
      setting: "按少室山大会期游坦之记录。",
      basis: "worldbook只用于抽取游坦之姓名；定级依据金庸 Wiki 和公开小说条目入口，寒毒作为特殊杀伤说明。"
    })
  })]);
})();
