(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["东京喰种"];

  if (!work) {
    throw new Error("东京喰种 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "rize-kamishiro",
      name: "神代利世",
      en: "Rize Kamishiro",
      ja: "神代利世",
      affiliation: "喰种",
      grade: "鳞赫喰种 / 大喰",
      appearances: ["安定区篇", "嘉纳实验相关"],
      timelineStatus: "安定区篇前后 / 大喰",
      aliases: ["利世", "大喰", "Binge Eater", "Rize"],
      fandomSlug: "Rize_Kamishiro",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      revisionNotes: ["从东京喰种 worldbook 的 comment/key 姓名池补入；不采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["墙级", "楼级｜鳞赫", "强力鳞赫喰种，近战穿刺和撕裂强。"],
        defense: ["墙级", "楼级｜喰种体质/赫子", "喰种体质和鳞赫再生支撑承伤。"],
        movement: ["亚音速", "音速｜喰种机动", "可高速捕食和突袭。"],
        reaction: ["亚音速", "音速｜喰种本能", "高阶喰种近战反应。"],
        vitality: ["强化凡体", "精锐韧体｜喰种体质/赫包", "赫包和喰种体质对剧情有重要作用。"],
        healing: ["快速自愈｜喰种再生", "极速自愈｜鳞赫｜争议", "鳞赫恢复强，但受重伤、实验和捕获条件限制。"],
        energy: ["墙级能量", "楼级能量｜鳞赫", "鳞赫输出与再生消耗 RC 细胞和体力。"],
        energyRegen: ["快速回能", "快速回能｜进食/恢复", "需要进食和恢复补充。"]
      }),
      notes: notes({
        penetration: "鳞赫以高速穿刺、撕裂和捕食为主，适合单体杀伤。攻击速度：鳞赫以近距离伸展、穿刺和撕裂为主，赫子到达与连击过程不由本体奔跑速度直接决定。",
        resistance: "喰种体质和鳞赫再生强，但可被重创、捕获、实验和环境事故限制。",
        sensing: "喰种感官和捕食本能强。",
        tactics: "偏捕食和诱导猎物，正面长期战术描写有限。",
        special: "鳞赫、大喰身份、赫包移植与嘉纳实验关键来源。",
        weakness: "剧情中多作为力量来源和实验核心，稳定战斗表现少；不能把后续龙相关结果直接计入本体面板。",
        setting: "按安定区篇前后的神代利世记录，不并入后续龙/实验产物结果。",
        basis: "worldbook只用于抽取神代利世姓名；定级依据公开角色资料入口和安定区篇前后鳞赫喰种定位。"
      })
    })
  ]);
})();
