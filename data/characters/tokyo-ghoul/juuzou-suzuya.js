(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["东京喰种"];

  if (!work) {
    throw new Error("东京喰种 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "juuzou-suzuya",
      name: "铃屋什造",
      en: "Juuzou Suzuya",
      ja: "鈴屋什造",
      affiliation: "CCG",
      grade: "搜查官 / 库因克使用者",
      appearances: ["安定区篇", "枭讨伐"],
      timelineStatus: "安定区篇 / 搜查官",
      aliases: ["铃屋", "什造", "Suzuya"],
      fandomSlug: "Juuzou_Suzuya",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      revisionNotes: ["从东京喰种 worldbook 的 comment/key 姓名池补入；不采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["砖级", "墙级｜库因克/飞刀", "高速切割和库因克对喰种有强单体威胁。"],
        defense: ["凡人级", "墙级｜防护/回避", "本体人类，依赖极高回避和装备。"],
        movement: ["亚音速", "音速｜杂技机动", "机动和灵活性极强。"],
        reaction: ["亚音速", "音速｜战斗本能", "异常战斗本能支撑高速近战。"],
        vitality: ["强化凡体", "精锐韧体｜痛觉迟钝/意志", "无再生但耐痛和战斗持续力异常。"],
        healing: ["无自愈", "无自愈", "依赖医疗。"],
        energy: ["砖级能量", "墙级能量｜库因克/投掷武器", "资源来自体力和携行装备。"],
        energyRegen: ["无回能", "中速回能｜休整/补给", "需要休整和补给。"]
      }),
      notes: notes({
        penetration: "高速切割、投掷武器和库因克适合切开要害与赫子，不代表大范围破坏。",
        resistance: "靠回避、异常耐痛和装备提高生存；本体仍会被重击致残。",
        sensing: "战斗直觉、近战嗅觉和异常反应突出，但调查与指挥判断需队友补足。",
        tactics: "偏直觉与高速拆解，擅长以不规则动作破坏对手节奏。",
        special: "库因克、杂技机动、异常耐痛和近战本能。",
        weakness: "本体无再生，早期战术稳定性有限；被重装或大范围压制时风险高。",
        setting: "按安定区篇至枭讨伐时期铃屋什造记录，不并入后期成熟特等阶段。",
        basis: "worldbook只用于抽取铃屋什造姓名；定级依据公开角色资料入口和早期 CCG 作战表现。"
      })
    })
  ]);
})();
