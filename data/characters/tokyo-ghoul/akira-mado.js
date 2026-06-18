(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["东京喰种"];

  if (!work) {
    throw new Error("东京喰种 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "akira-mado",
      name: "真户晓",
      en: "Akira Mado",
      ja: "真戸暁",
      affiliation: "CCG",
      grade: "搜查官 / 库因克使用者",
      appearances: ["安定区篇"],
      timelineStatus: "安定区篇 / 搜查官",
      aliases: ["晓", "Mado Akira", "Akira"],
      fandomSlug: "Akira_Mado",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      revisionNotes: ["从东京喰种 worldbook 的 comment/key 姓名池补入；不采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["砖级", "墙级｜库因克", "库因克对喰种具针对性伤害。"],
        defense: ["凡人级", "墙级｜防护/库因克格挡", "本体人类，依赖装备和距离管理。"],
        movement: ["凡人速", "亚音速｜搜查官体术", "优秀搜查官机动。"],
        reaction: ["凡人速", "亚音速｜训练", "可参与对喰种战斗。"],
        vitality: ["强化凡体", "精锐韧体", "训练有素但无再生。"],
        healing: ["无自愈", "无自愈", "依赖医疗。"],
        energy: ["砖级能量", "墙级能量｜库因克", "资源来自体力和库因克装备。"],
        energyRegen: ["无回能", "中速回能｜休整/装备维护", "需要休整和装备维护。"]
      }),
      notes: notes({
        penetration: "库因克适合对喰种进行要害切割和赫子破坏。",
        resistance: "防护和格挡有限，本体没有喰种再生。",
        sensing: "调查、资料分析和战场观察强，能辅助识别喰种行动。",
        tactics: "分析型搜查官，重视情报、队友配合和库因克适配。",
        special: "库因克、搜查官训练、资料分析。",
        weakness: "单兵面板不属顶级，本体脆弱，面对高阶喰种需要支援。",
        setting: "按安定区篇真户晓记录。",
        basis: "worldbook只用于抽取真户晓姓名；定级依据公开角色资料入口和 CCG 搜查官定位。"
      })
    })
  ]);
})();
