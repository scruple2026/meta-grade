(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["笑傲江湖"];
  if (!work) throw new Error("笑傲江湖 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "lin-pingzhi",
    name: "林平之",
    en: "Lin Pingzhi",
    aliases: ["福威镖局少主", "辟邪剑谱传人"],
    affiliation: "福威镖局 / 华山派",
    grade: "辟邪剑谱使用者",
    appearances: ["金庸共通世界书", "笑傲江湖"],
    timelineStatus: "后期 / 辟邪剑谱后",
    fandomSlug: "林平之",
    confidence: "medium",
    evidenceType: ["角色页入口", "小说资料入口", "worldbook姓名字段"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["砖级", "墙级｜辟邪剑法", "后期杀伤依赖辟邪剑法的高速单体刺杀。"],
      defense: ["凡人级", "砖级｜规避/招架", "本体承伤有限，更多依赖速度和先手。"],
      movement: ["亚音速", "亚音速｜辟邪身法", "辟邪剑法显著提高出手与身法。"],
      reaction: ["亚音速", "亚音速｜辟邪剑法", "近战反应随辟邪剑法提高。"],
      vitality: ["强化凡体", "强化凡体｜意志", "人体结构，后期身心损耗明显。"],
      healing: ["缓慢自愈", "缓慢自愈｜休养", "无稳定快速恢复。"],
      energy: ["砖级能量", "墙级能量｜辟邪剑法", "内力资源和高速剑法按后期记录。"],
      energyRegen: ["缓慢回能", "缓慢回能｜调息", "需调息恢复。"]
    }),
    notes: notes({
      penetration: "辟邪剑法偏高速刺杀和破绽利用，低范围高单体威胁。",
      resistance: "规避和先手强，硬承伤短板明显。",
      sensing: "复仇心强，警惕性高，但判断易受执念影响。",
      tactics: "擅长以速度与突袭解决目标，长期布局能力有限。",
      special: "辟邪剑法、福威镖局遗产和复仇动机。",
      weakness: "心态、身体代价和复仇执念严重限制稳定发挥。",
      setting: "金庸共通 worldbook 的金刀王家、福威镖局 key 中出现林平之；本条按《笑傲江湖》后期辟邪剑法阶段记录。",
      basis: "worldbook只用于抽取林平之姓名；定级依据金庸 Wiki 角色/作品入口，辟邪剑法写为高速单体峰值。"
    })
  })]);
})();
