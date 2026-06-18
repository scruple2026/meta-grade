(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["神雕侠侣"];
  if (!work) throw new Error("神雕侠侣 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "li-mochou",
    name: "李莫愁",
    en: "Li Mochou",
    aliases: ["李莫愁", "赤练仙子", "赤練仙子"],
    affiliation: "古墓派叛徒",
    grade: "江湖高端反派 / 毒功使用者",
    appearances: ["金庸共通世界书", "神雕侠侣"],
    timelineStatus: "主线综合期",
    fandomSlug: "李莫愁",
    confidence: "medium",
    evidenceType: ["角色页入口", "小说资料入口", "worldbook姓名字段"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["砖级", "墙级｜冰魄银针/赤练神掌", "直接破坏有限，但毒针和掌法单体威胁高。"],
      defense: ["砖级", "墙级｜轻功/招架", "依赖身法、经验和招架。"],
      movement: ["亚音速", "亚音速｜古墓轻功", "轻功强，追击和脱身能力高。"],
      reaction: ["亚音速", "亚音速｜江湖实战", "实战经验丰富。"],
      vitality: ["强化凡体", "精锐韧体｜内功", "人体结构，内功提高续战。"],
      healing: ["缓慢自愈", "缓慢自愈｜调息", "恢复依赖调息休养。"],
      energy: ["砖级能量", "墙级能量｜内力/毒功", "内力和毒功资源按高端武者记录。"],
      energyRegen: ["缓慢回能", "缓慢回能｜调息/补充暗器", "内力需调息，毒针需补给。"]
    }),
    notes: notes({
      penetration: "冰魄银针和毒掌偏穿刺、毒素和持续伤害，不等同纯破坏范围。",
      resistance: "轻功和江湖经验强，正面硬抗有限。",
      sensing: "追踪、伏击和观察敌意强。",
      tactics: "擅长偷袭、毒针、心理威慑和追杀。",
      special: "冰魄银针、赤练神掌、毒功和古墓派武学。",
      weakness: "执念深，容易因情绪和复仇目标陷入风险；暗器毒针有资源限制。",
      setting: "金庸共通 worldbook 的古墓派 key 中出现李莫愁；本条按《神雕侠侣》主线综合期记录。",
      basis: "worldbook只用于抽取李莫愁姓名；定级依据金庸 Wiki 角色/作品入口，毒功写入攻击性质和特殊项，不直接抬高破坏档。"
    })
  })]);
})();
