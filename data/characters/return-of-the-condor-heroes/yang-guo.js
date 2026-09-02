(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["神雕侠侣"];
  if (!work) throw new Error("神雕侠侣 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "yang-guo",
    name: "杨过",
    en: "Yang Guo",
    aliases: ["楊過", "神雕侠", "过儿"],
    affiliation: "古墓派 / 神雕侠",
    grade: "后期顶级高手",
    appearances: ["金庸共通世界书", "神雕侠侣"],
    timelineStatus: "后期综合期 / 黯然销魂掌",
    fandomSlug: "楊過",
    confidence: "medium",
    evidenceType: ["角色页入口", "小说资料入口", "worldbook姓名字段"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["墙体级", "房屋级｜黯然销魂掌/玄铁重剑", "后期掌力和重剑强，但仍按武侠局部破坏处理。"],
      defense: ["墙体级", "房屋级｜内力/重剑招架", "深厚内力和实战经验提供强防护。"],
      movement: ["亚音速", "亚音速｜轻功/神雕训练", "后期身法强，断臂不等同速度降档。"],
      reaction: ["亚音速", "亚音速｜顶级交锋", "能应对五绝级对抗。"],
      vitality: ["精锐韧体", "精锐韧体｜内力/意志", "人体结构，内力和意志提高续战。"],
      healing: ["缓慢自愈", "中速自愈｜内功调息", "内功可辅助疗伤。"],
      energy: ["墙体级能量", "房屋级能量｜后期内力", "后期内力资源深厚。"],
      energyRegen: ["缓慢回能", "中速回能｜调息", "需调息恢复。"]
    }),
    notes: notes({
      penetration: "黯然销魂掌、玄铁重剑和多派武学偏单体爆发、重击和招式压制。攻击速度：玄铁重剑偏重击蓄势，黯然销魂掌是贴身掌法爆发，重剑与徒手掌法的出招节奏应分开判断。",
      resistance: "断臂后抗压和意志极强，仍受情绪状态与内力消耗影响。",
      sensing: "江湖经验、逆境判断和对武学路数的理解很强。",
      tactics: "擅长临场变招、以奇制胜和利用对手心理。",
      special: "黯然销魂掌、玄铁重剑、玉女心经、蛤蟆功、神雕训练。",
      weakness: "情绪波动会影响黯然销魂掌状态；断臂也限制部分应对方式。",
      setting: "金庸共通 worldbook 的古墓派 key 中出现杨过；本条按《神雕侠侣》后期综合期记录。",
      basis: "worldbook只用于抽取杨过姓名；定级依据金庸 Wiki 角色/作品入口，神雕侠名号不直接换算为高破坏档。"
    })
  })]);
})();
