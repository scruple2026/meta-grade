(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["东京喰种"];

  if (!work) {
    throw new Error("东京喰种 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "koutarou-amon",
      name: "亚门钢太朗",
      en: "Koutarou Amon",
      ja: "亜門鋼太朗",
      affiliation: "CCG",
      grade: "搜查官 / 库因克使用者",
      appearances: ["安定区篇"],
      timelineStatus: "安定区篇 / 搜查官",
      aliases: ["亚门", "Amon"],
      fandomSlug: "Koutarou_Amon",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["砖级", "墙级｜库因克", "库因克近战对喰种具针对性破甲。"],
        defense: ["凡人级", "墙级｜防护服/库因克格挡", "本体是训练人类，依赖装备和格挡。"],
        movement: ["凡人速", "亚音速｜搜查官体术", "优秀人类搜查官机动。"],
        reaction: ["凡人速", "亚音速", "能与喰种近战周旋但低于顶级喰种。"],
        vitality: ["强化凡体", "精锐韧体", "训练和意志强，但没有喰种再生。"],
        healing: ["无自愈", "无自愈", "依赖医疗。"],
        energy: ["砖级能量", "墙级能量｜库因克", "资源来自体力和库因克装备。"],
        energyRegen: ["无回能", "中速回能｜体力", "需要休整和装备维护。"]
      }),
      notes: notes({
        penetration: "库因克适合切断赫子和要害打击，威胁大于普通冷兵器。",
        resistance: "防护服和库因克可缓冲伤害，但本体仍会被喰种力量重创。",
        sensing: "搜查官训练、道德判断和现场观察能力强。",
        tactics: "正面作战和保护平民意识强，能配合搭档压制喰种；对未知赫子和高端喰种需要支援。",
        special: "库因克、搜查官训练、对喰种战术。",
        weakness: "本体人类脆弱，依赖库因克和队友支援；面对高端再生或速度差距时容错低。",
        setting: "按安定区篇 CCG 搜查官状态记录，不并入后期半喰种化。",
        basis: "依据亚门在安定区篇作为 CCG 搜查官与喰种交战的库因克、体术和意志表现定级。"
      })
    })
  ]);
})();
