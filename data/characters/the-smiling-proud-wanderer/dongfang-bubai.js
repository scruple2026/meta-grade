(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["笑傲江湖"];
  if (!work) throw new Error("笑傲江湖 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "dongfang-bubai",
    name: "东方不败",
    en: "Dongfang Bubai",
    aliases: ["東方不敗", "东方教主", "日月神教教主"],
    affiliation: "日月神教",
    grade: "葵花宝典高手 / 日月神教教主",
    appearances: ["金庸共通世界书", "笑傲江湖"],
    timelineStatus: "黑木崖决战期",
    fandomSlug: "東方不敗",
    confidence: "medium",
    evidenceType: ["角色页入口", "小说资料入口", "worldbook姓名字段"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["墙体级", "房屋级｜葵花宝典/绣花针", "单体高速穿刺与近战压制极强，但不按大范围破坏处理。"],
      defense: ["砖块级", "墙体级｜高速规避/招架", "本体防御不靠硬抗，主要依赖速度、招架和先手。"],
      movement: ["亚音速", "亚音速｜葵花身法", "笑傲顶级速度表现，仍按武侠速度档保守记录。"],
      reaction: ["亚音速", "亚音速｜葵花高速应对", "能同时压制多名高手。"],
      vitality: ["强化凡体", "精锐韧体｜内力/意志", "人体结构，内力和战意提高续战。"],
      healing: ["缓慢自愈", "缓慢自愈｜调息", "无稳定快速再生。"],
      energy: ["墙体级能量", "房屋级能量｜葵花宝典", "内力资源和高速输出按顶级武者记录。"],
      energyRegen: ["缓慢回能", "中速回能｜调息", "回气仍需内功调息。"]
    }),
    notes: notes({
      penetration: "绣花针和葵花宝典偏高速穿刺、点穴和先手压制，范围破坏很低。攻击速度：绣花针与点穴以近距离高速穿刺和连续出手见长，但针的投掷、手持刺击和身体接战仍须分开。",
      resistance: "速度规避强，硬承伤不按房屋级肉身处理。",
      sensing: "顶级近战读招和多目标压制能力。",
      tactics: "依靠绝对速度与节奏控制压迫对手。",
      special: "葵花宝典、绣花针、日月神教教主身份。",
      weakness: "情感牵制和硬防御短板明显；教主资源不计入个人常态面板。",
      setting: "金庸共通 worldbook 的日月神教 key 中出现东方不败；本条按《笑傲江湖》黑木崖决战期记录。",
      basis: "worldbook只用于抽取东方不败姓名；定级依据金庸 Wiki 角色/作品入口，天下第一类称号不直接换算为高破坏档。"
    })
  })]);
})();
