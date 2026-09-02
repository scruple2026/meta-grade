(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/stay night"];
  if (!work) throw new Error("Fate/stay night work metadata must load before character files.");

  registerCharacters([work.character({
    id: "rin-tohsaka",
    name: "远坂凛",
    en: "Rin Tohsaka",
    ja: "遠坂凛",
    aliases: ["凛", "远板凛"],
    affiliation: "远坂家 / Archer御主",
    grade: "魔术师 / 宝石魔术使用者",
    appearances: ["Fate", "Unlimited Blade Works", "Heaven's Feel"],
    timelineStatus: "第五次圣杯战争",
    fandomSlug: "Rin_Tohsaka",
    confidence: "medium",
    evidenceType: ["官方入口", "角色页入口"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["砖块级", "房屋级｜宝石魔术", "宝石魔术可短时爆发高输出。"],
      defense: ["砖块级", "墙体级｜魔术防护", "本体是人类，防御依赖结界、宝石和战术。"],
      movement: ["凡人速", "亚音速｜强化", "魔术强化可提高动作。"],
      reaction: ["凡人速", "亚音速｜魔术战", "魔术师战斗反应优秀。"],
      vitality: ["强化凡体", "精锐韧体｜强化/意志", "人类魔术师体魄。"],
      healing: ["无自愈", "缓慢自愈｜治疗魔术/休整", "恢复依赖治疗和休整。"],
      energy: ["墙体级能量", "房屋级能量｜宝石储备", "宝石储备提供高爆发但消耗不可逆。"],
      energyRegen: ["缓慢回能", "中速回能｜准备/宝石", "战前准备和宝石储备决定续航。"]
    }),
    notes: notes({
      penetration: "宝石魔术可瞬间释放储备魔力，适合对人和局部爆发。攻击速度：凛要先取用并触发宝石储存的魔力，爆发效果随后释放；宝石准备、投掷或指向与能量命中不能合成一个速度。",
      resistance: "人类本体脆弱，靠魔术防护、距离和从者配合。",
      sensing: "魔术结界、侦查和对术式异常的判断较强。",
      tactics: "战前准备、资源管理和临场判断优秀。",
      special: "宝石魔术、远坂家传承、令咒、Archer契约。",
      weakness: "宝石消耗大，本体防御低，情感牵连会影响判断。",
      setting: "按第五次圣杯战争远坂凛记录。",
      basis: "worldbook只用于抽取远坂凛姓名；定级依据官方入口与TYPE-MOON Wiki资料入口，宝石储备作为资源峰值。"
    })
  })]);
})();
