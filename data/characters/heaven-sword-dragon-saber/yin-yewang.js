(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["倚天屠龙记"];
  if (!work) throw new Error("倚天屠龙记 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "yin-yewang",
    name: "殷野王",
    en: "Yin Yewang",
    aliases: ["殷野王", "天微堂堂主", "张无忌舅父"],
    affiliation: "天鹰教 / 明教",
    grade: "天微堂堂主",
    appearances: ["金庸共通世界书", "倚天屠龙记"],
    timelineStatus: "光明顶前后 / 天鹰教堂主期",
    fandomSlug: "殷野王",
    confidence: "medium",
    evidenceType: ["角色页入口", "角色列表入口", "worldbook姓名字段"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["砖级", "墙级｜天鹰教掌法", "掌法刚猛精正，可参与光明顶级江湖混战。"],
      defense: ["砖级", "墙级｜内力/招架", "堂主级内力和经验提供承伤。"],
      movement: ["亚音速", "亚音速｜轻功", "天鹰教高手身法。"],
      reaction: ["亚音速", "亚音速｜高手交锋", "可与成昆等高手线交锋，但不是顶级宗师。"],
      vitality: ["强化凡体", "精锐韧体｜内力/硬撑", "可承受重伤昏迷级战斗结果，仍属人体。"],
      healing: ["缓慢自愈", "缓慢自愈｜调息/治疗", "恢复依赖休养和治疗。"],
      energy: ["砖级能量", "墙级能量｜堂主级内力", "内力高于普通武者，低于张无忌等顶级资源。"],
      energyRegen: ["缓慢回能", "缓慢回能｜调息", "需调息恢复。"]
    }),
    notes: notes({
      penetration: "刚猛掌法和天鹰教武功偏近身压制、掌力和擒拿。",
      resistance: "堂主级武者承伤不错，但面对成昆、三僧等高端仍有明显差距。",
      sensing: "江湖和教务经验较强，能判断战场和门派关系。",
      tactics: "性情多变，战斗和组织行动经验强；光明顶局势中会受派系恩怨牵制。",
      special: "天鹰教天微堂、明教回归线、张无忌亲族关系。",
      weakness: "情绪与家族恩怨影响判断；正面对顶级高手容错低。",
      setting: "金庸共通 worldbook 的天鹰教 key 中出现殷野王；本条按《倚天屠龙记》光明顶前后记录。",
      basis: "worldbook只用于抽取殷野王姓名；定级依据金庸 Wiki 角色/角色列表入口，堂主身份不直接抬高破坏档。"
    })
  })]);
})();
