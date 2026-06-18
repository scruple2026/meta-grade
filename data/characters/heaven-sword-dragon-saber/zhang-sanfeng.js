(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["倚天屠龙记"];
  if (!work) throw new Error("倚天屠龙记 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "zhang-sanfeng",
    name: "张三丰",
    en: "Zhang Sanfeng",
    aliases: ["張三丰", "张真人", "武当祖师", "Sanfeng"],
    affiliation: "武当派",
    grade: "武当祖师 / 太极拳剑创始者",
    appearances: ["金庸共通世界书", "倚天屠龙记"],
    timelineStatus: "倚天主线老年宗师",
    fandomSlug: "張三丰",
    confidence: "medium",
    evidenceType: ["角色页入口", "小说资料入口", "worldbook姓名字段"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["墙级", "房屋级｜太极拳剑/百年内力", "宗师级内力和太极武学极强，但按武侠单体/局部破坏保守处理。"],
      defense: ["墙级", "房屋级｜内力化劲", "太极化劲和百年内力提供强防护。"],
      movement: ["亚音速", "亚音速｜宗师身法", "年高但身法和出手控制仍属顶级。"],
      reaction: ["亚音速", "亚音速｜宗师读招", "读招、听劲和临场创招能力极高。"],
      vitality: ["精锐韧体", "精锐韧体｜百年内功", "长寿与内功深厚提高生命阈值，但不是非人体结构。"],
      healing: ["中速自愈", "中速自愈｜内功调息", "内功修为可辅助疗伤，非瞬间恢复。"],
      energy: ["墙级能量", "房屋级能量｜百年内力", "内力资源极深，适合化解和持续交锋。"],
      energyRegen: ["中速回能", "中速回能｜调息", "回气依赖内功调息，不写瞬时。"]
    }),
    notes: notes({
      penetration: "太极拳剑偏借力、化劲、反制和控制，不是大范围爆破型输出。",
      resistance: "宗师级内力与化劲抗性强；偷袭、年龄和照护门人情境仍需单独判断。",
      sensing: "宗师级读招、听劲、武学理解和临场判断。",
      tactics: "能以极少信息判断武功根底并临场传授/创制应对法。",
      special: "太极拳、太极剑、武当内功、宗师级武学创造力。",
      weakness: "年龄极高，且常受门派与晚辈安全牵制。",
      setting: "金庸共通 worldbook 的峨嵋派与武当关系 key 中出现张三丰；本条按《倚天屠龙记》主线老年宗师记录。",
      basis: "worldbook只用于抽取张三丰姓名；定级依据金庸 Wiki 角色/作品入口和金庸武侠保守口径，宗师身份不直接换算为高破坏档。"
    })
  })]);
})();
