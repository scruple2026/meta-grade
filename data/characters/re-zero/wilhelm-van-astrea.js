(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Re:从零开始的异世界生活"];

  if (!work) {
    throw new Error("Re:Zero work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "wilhelm-van-astrea",
      name: "威尔海姆·范·阿斯特雷亚",
      en: "Wilhelm van Astrea",
      ja: "ヴィルヘルム・ヴァン・アストレア",
      affiliation: "克鲁修阵营 / 阿斯特雷亚家",
      grade: "剑鬼",
      appearances: ["王选篇", "白鲸讨伐"],
      timelineStatus: "白鲸讨伐战",
      aliases: ["Wilhelm", "剑鬼", "Wilhelm Van Astrea"],
      fandomSlug: "Wilhelm_van_Astrea",
      confidence: "medium",
      evidenceType: ["官方角色页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["砖级", "街区级｜剑鬼/对白鲸弱点输出｜争议", "剑术极强，对白鲸等大型目标可造成关键伤害。"],
        defense: ["砖级", "墙级｜剑术/经验", "肉身仍是人类，靠技量和规避承伤。"],
        movement: ["亚音速", "超音速｜剑术突进｜争议", "高端剑士速度很强，但精确换算保守。"],
        reaction: ["亚音速", "超音速｜剑鬼经验｜争议", "剑术反应和读招强。"],
        vitality: ["精锐韧体", "精锐韧体", "高端剑士生命体量。"],
        healing: ["无自愈", "缓慢自愈｜体魄", "自然恢复。"],
        energy: ["砖级能量", "墙级能量｜剑术/体能", "持续近战资源高。"],
        energyRegen: ["中速回能", "中速回能｜体能", "按高体能恢复。"]
      }),
      notes: notes({
        penetration: "高超剑术和对白鲸弱点持续斩击是主要杀伤。",
        resistance: "无重防，依赖技巧、经验和规避。",
        sensing: "战斗经验和剑士直觉优秀，可读出对手状态。",
        tactics: "对白鲸执念与长期准备明显，战斗执行力极强。",
        special: "剑鬼级剑术、白鲸讨伐经验、阿斯特雷亚家剑技传承。",
        weakness: "仍是人类肉身，面对大范围魔法或权能时需要队友配合。",
        setting: "按白鲸讨伐战威尔海姆记录。",
        basis: "worldbook只用于抽取威尔海姆姓名；定级依据官方角色页与Re:Zero Wiki资料入口，对白鲸表现标争议不泛化为常规大范围破坏。"
      })
    })
  ]);
})();
