(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["天龙八部"];
  if (!work) throw new Error("天龙八部 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "xuzhu",
    name: "虚竹",
    en: "Xuzhu",
    aliases: ["虚竹子", "逍遥派掌门", "灵鹫宫尊主"],
    affiliation: "逍遥派 / 灵鹫宫 / 少林出身",
    grade: "天龙三兄弟 / 逍遥派传人",
    appearances: ["少室山大会"],
    timelineStatus: "少室山大会期",
    fandomSlug: "虛竹",
    confidence: "medium",
    evidenceType: ["角色页入口", "小说条目入口"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["墙体级", "房屋级｜逍遥派武学", "深厚内力配合天山六阳掌、折梅手等武学。"],
      defense: ["墙体级", "房屋级｜内力/逍遥派武学", "内力极深，正面承压强。"],
      movement: ["亚音速", "亚音速｜轻功", "逍遥派武学提升机动。"],
      reaction: ["凡人速", "亚音速｜高深内力", "经验不足但内力和武学上限高。"],
      vitality: ["精锐韧体", "精锐韧体｜深厚内力", "人体结构，续战来自内力和机缘。"],
      healing: ["缓慢自愈", "中速自愈｜内功调息", "内功有恢复辅助。"],
      energy: ["房屋级能量｜深厚内力", "房屋级能量｜逍遥派传承", "总内力极深，但仍按武侠局部破坏口径。"],
      energyRegen: ["缓慢回能", "中速回能｜调息", "内力消耗需调息。"]
    }),
    notes: notes({
      penetration: "逍遥派武学变化多，擅长掌法、擒拿和生死符等控制。攻击速度：掌法和擒拿随虚竹近身动作，生死符需要制成并打出后命中；控制效果发作不等于暗器本身无限快。",
      resistance: "内力深厚，但经验和心性限制实战效率。",
      sensing: "武学经验成长很快，早期判断仍稚嫩。",
      tactics: "心性朴厚，不善主动杀伐，但武学资源极多。",
      special: "北冥/逍遥派内力、天山六阳掌、天山折梅手、生死符。",
      weakness: "经验不足、心软、杀伐决断弱于老江湖。",
      setting: "按少室山大会期虚竹记录。",
      basis: "worldbook只用于抽取虚竹姓名；定级依据金庸 Wiki 和公开小说条目入口，逍遥派传承按条件武学资源处理。"
    })
  })]);
})();
