(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["东京喰种"];

  if (!work) {
    throw new Error("东京喰种 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "ken-kaneki",
      name: "金木研",
      en: "Ken Kaneki",
      ja: "金木研",
      affiliation: "安定区 / 半喰种",
      grade: "主角 / 鳞赫半喰种",
      appearances: ["安定区篇", "青桐树突袭", "枭讨伐前后"],
      timelineStatus: "安定区后期 / 蜈蚣状态前后",
      aliases: ["金木", "眼罩", "蜈蚣", "Kaneki"],
      fandomSlug: "Ken_Kaneki",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      revisionNotes: ["从东京喰种 worldbook 名字池补入；不并入后期龙状态。"],
      dimensions: dims({
        attack: ["墙级", "楼级｜鳞赫/蜈蚣", "鳞赫和半赫者状态具强近战穿刺与破坏。"],
        defense: ["墙级", "楼级｜赫子/再生", "喰种体质和赫子提高防御，但本体仍可被库因克重创。"],
        movement: ["亚音速", "音速｜喰种机动", "高阶喰种近战机动。"],
        reaction: ["亚音速", "音速｜战斗本能", "后期适应高速喰种与搜查官战斗。"],
        vitality: ["强化凡体", "楼级生命阈值｜再生/半赫者", "喰种再生与半赫者状态显著提高续战。"],
        healing: ["快速自愈｜喰种再生", "极速自愈｜半赫者｜争议", "再生强但受饥饿、RC 抑制和重伤限制。"],
        energy: ["墙级能量", "楼级能量｜赫子", "赫子展开和再生消耗 RC 细胞与体力。"],
        energyRegen: ["快速回能", "快速回能｜进食/恢复", "需要进食和休整补充。"]
      }),
      notes: notes({
        penetration: "鳞赫以高速穿刺、鞭打和撕裂为主，蜈蚣状态强化多段近战压制；不等同大范围爆破。攻击速度：鳞赫穿刺、鞭打和撕裂取决于赫子伸展与连续挥动，蜈蚣状态的接战机动不能替代每根赫子的到达时间。",
        resistance: "喰种体质、再生和赫子防御强，但库因克、RC 抑制剂、饥饿和精神崩溃会显著削弱。",
        sensing: "喰种嗅觉、战斗直觉和后期经验提升索敌；精神状态异常会影响判断。",
        tactics: "成长速度极快，能在压力中学习对手节奏；早期情绪、保护他人和身份认同冲突会制造破绽。",
        special: "鳞赫、半喰种体质、再生、半赫者/蜈蚣状态。",
        weakness: "饥饿、精神失控、RC 抑制和库因克克制明显；高峰状态不可视为稳定冷静常态。",
        setting: "按安定区后期到蜈蚣状态附近记录，不包含后期黑山羊之王或龙状态。",
        basis: "依据金木在安定区、青桐树相关战斗和枭讨伐前后的赫子、再生和近战表现定级。"
      })
    })
  ]);
})();
