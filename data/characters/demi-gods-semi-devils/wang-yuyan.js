(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["天龙八部"];
  if (!work) throw new Error("天龙八部 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "wang-yuyan",
    name: "王语嫣",
    en: "Wang Yuyan",
    aliases: ["王姑娘", "神仙姐姐"],
    affiliation: "曼陀山庄 / 姑苏慕容关联",
    grade: "武学理论通",
    appearances: ["少室山大会"],
    timelineStatus: "少室山大会期",
    fandomSlug: "王語嫣",
    confidence: "medium",
    evidenceType: ["角色页入口", "小说条目入口"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["凡人级", "凡人级", "本体缺少实战输出。"],
      defense: ["凡人级", "凡人级", "缺少战斗防护表现。"],
      movement: ["凡人速", "凡人速", "日常行动速度。"],
      reaction: ["凡人速", "凡人速", "能识别招式，但身体反应不等同武功执行。"],
      vitality: ["凡人肉身", "凡人肉身", "普通人体。"],
      healing: ["无自愈", "无自愈", "没有自愈能力。"],
      energy: ["不适用", "不适用", "没有可量化战斗内力池。"],
      energyRegen: ["不适用", "不适用", "没有回能面板。"]
    }),
    notes: notes({
      penetration: "几乎不直接攻击，价值来自指出招式来历与破绽。",
      resistance: "本体脆弱，需他人保护。",
      sensing: "武学理论和招式识别极强，可辅助他人判断。",
      tactics: "能通过知识提供战术建议，但执行力依赖队友。",
      special: "武学理论、招式识别、琅嬛玉洞知识。",
      weakness: "无实战武功，心理与感情牵绊明显。",
      setting: "按少室山大会期王语嫣记录。",
      basis: "worldbook只用于抽取王语嫣姓名；定级依据金庸 Wiki 和公开小说条目入口，理论知识不折算本体攻防。"
    })
  })]);
})();
