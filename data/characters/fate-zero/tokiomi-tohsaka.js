(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Zero"];
  if (!work) throw new Error("Fate/Zero work metadata must load before character files.");

  registerCharacters([work.character({
    id: "tokiomi-tohsaka",
    name: "远坂时臣",
    en: "Tokiomi Tohsaka",
    ja: "遠坂時臣",
    aliases: ["时臣", "Tohsaka Tokiomi"],
    affiliation: "远坂阵营",
    grade: "御主 / 宝石魔术师",
    appearances: ["第四次圣杯战争"],
    timelineStatus: "第四次圣杯战争",
    fandomSlug: "Tokiomi_Tohsaka",
    confidence: "medium",
    evidenceType: ["官方入口", "角色页入口", "魔术峰值"],
    sourceQuality: "entry",
    evidenceLinks: [],
    revisionNotes: ["worldbook 仅用于抽取 Fate/Zero 角色姓名；定级依据公开官方/资料入口并保持保守。"],
    dimensions: dims({
        attack: ["墙级", "房屋级｜宝石魔术/令咒", "正式魔术师输出较强，但不按从者级处理。"],
        defense: ["墙级", "房屋级｜防护术式", "魔术防护可抗局部攻击。"],
        movement: ["凡人速", "亚音速｜魔术辅助", "本体移动仍偏人类尺度。"],
        reaction: ["亚音速", "亚音速｜魔术战经验", "魔术战反应和判断优于常人。"],
        vitality: ["强化凡体", "精锐韧体｜魔术师训练", "生命体量仍是人类范围。"],
        healing: ["无自愈", "缓慢自愈｜魔术/治疗", "无稳定战斗再生。"],
        energy: ["墙级能量", "房屋级能量｜宝石/令咒", "宝石储备和令咒提供峰值资源。"],
        energyRegen: ["缓慢回能", "中速回能｜宝石储备", "更多依赖储备而非即时回能。"]
      }),
    notes: notes({
        penetration: "宝石魔术可形成火力和结界，令咒偏命令资源。",
        resistance: "魔术防护有效但怕针对、背刺和从者级压制。",
        sensing: "远坂家魔术和圣杯战争情报网提供侦查基础。",
        tactics: "重视正统魔术师规则、联盟和资源管理，但对人心判断存在盲点。",
        special: "宝石魔术、远坂家传承、令咒、Archer契约。",
        weakness: "对吉尔伽美什和绮礼的判断失误，近身与暗杀风险高。",
        setting: "按第四次圣杯战争远坂时臣记录。",
        basis: "worldbook只用于抽取远坂时臣姓名；定级依据官方角色入口与TYPE-MOON Wiki资料入口，宝石魔术峰值保守到房屋级。"
      })
  })]);
})();
