(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["笑傲江湖"];
  if (!work) throw new Error("笑傲江湖 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "zuo-lengchan",
    name: "左冷禅",
    en: "Zuo Lengchan",
    aliases: ["左盟主", "嵩山掌门", "五岳盟主"],
    affiliation: "嵩山派 / 五岳剑派",
    grade: "嵩山派掌门 / 五岳盟主",
    appearances: ["金庸共通世界书", "笑傲江湖"],
    timelineStatus: "五岳并派前后",
    fandomSlug: "左冷禪",
    confidence: "medium",
    evidenceType: ["角色页入口", "小说资料入口", "worldbook姓名字段"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["砖块级", "墙体级｜寒冰真气/嵩山剑法", "掌门级内力和剑法，按局部杀伤记录。"],
      defense: ["砖块级", "墙体级｜内力/招架", "防御依赖内力、剑法和经验。"],
      movement: ["亚音速", "亚音速｜轻功", "掌门级身法。"],
      reaction: ["亚音速", "亚音速｜掌门交锋", "能在五岳高手局中应对变化。"],
      vitality: ["强化凡体", "精锐韧体｜内力", "人体结构，内功提高续战。"],
      healing: ["缓慢自愈", "缓慢自愈｜调息", "恢复依赖调息休养。"],
      energy: ["砖块级能量", "墙体级能量｜寒冰真气", "内力资源按掌门级记录。"],
      energyRegen: ["缓慢回能", "缓慢回能｜调息", "需调息恢复。"]
    }),
    notes: notes({
      penetration: "寒冰真气、嵩山剑法和掌力偏单体压制与状态干扰。攻击速度：嵩山剑法和掌力属于近身出手，寒冰真气干扰还取决于命中与内力作用，并非脱手即到的弹体。",
      resistance: "内力强，政治布局周密；正面硬防仍按武侠人体处理。",
      sensing: "善于判断门派局势、布置伏线和利用五岳矛盾。",
      tactics: "长线布局和组织调度强，能用嵩山十三太保压迫对手。",
      special: "寒冰真气、嵩山剑法、五岳并派布局、嵩山派组织资源。",
      weakness: "野心和权力布局容易暴露战术意图；组织资源不计入本人面板。",
      setting: "金庸共通 worldbook 的嵩山派、华山派、泰山派 key 中出现左冷禅；本条按《笑傲江湖》五岳并派前后记录。",
      basis: "worldbook只用于抽取左冷禅姓名；定级依据金庸 Wiki 角色/作品入口，五岳盟主身份不直接抬高主面板。"
    })
  })]);
})();
