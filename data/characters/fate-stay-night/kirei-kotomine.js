(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/stay night"];
  if (!work) throw new Error("Fate/stay night work metadata must load before character files.");

  registerCharacters([work.character({
    id: "kirei-kotomine",
    name: "言峰绮礼",
    en: "Kirei Kotomine",
    ja: "言峰綺礼",
    aliases: ["绮礼", "Kotomine Kirei"],
    affiliation: "圣堂教会 / 监督者",
    grade: "代行者 / 神父",
    appearances: ["Fate", "Unlimited Blade Works", "Heaven's Feel"],
    timelineStatus: "第五次圣杯战争",
    fandomSlug: "Kirei_Kotomine",
    confidence: "medium",
    evidenceType: ["官方入口", "角色页入口"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["墙体级", "房屋级｜黑键/八极拳/令咒", "代行者体术和黑键对人杀伤强。"],
      defense: ["墙体级", "房屋级｜代行者体魄/术式", "人类范围内极强承伤。"],
      movement: ["亚音速", "音速｜代行者体术", "短距离爆发极强。"],
      reaction: ["亚音速", "音速｜近战经验", "近战和反魔术经验丰富。"],
      vitality: ["精锐韧体", "房屋级生命阈值｜异常心脏/术式", "本体仍是人类，但异常续战很强。"],
      healing: ["缓慢自愈", "中速自愈｜术式/异常状态", "恢复依赖术式和路线状态。"],
      energy: ["墙体级能量", "房屋级能量｜令咒/术式", "魔力与令咒资源有限但危险。"],
      energyRegen: ["缓慢回能", "中速回能｜术式/准备", "依赖准备与术式。"]
    }),
    notes: notes({
      penetration: "黑键、八极拳和令咒控制偏对人穿透与近战处决。攻击速度：言峰绮礼的八极拳随近身连段，黑键投掷后独立飞行，令咒控制另按命令发动；三者不能共用一个出手速度。",
      resistance: "代行者训练与异常身体使其难杀，但非从者灵基。",
      sensing: "监督者身份、教会经验和心理洞察强。",
      tactics: "心理战、背刺、规则利用和长期布局极强。",
      special: "黑键、八极拳、令咒、圣杯战争监督者、教会术式。",
      weakness: "人格扭曲和愉悦取向会影响目标选择；本体仍有人类弱点。",
      setting: "按第五次圣杯战争言峰绮礼记录。",
      basis: "worldbook只用于抽取言峰绮礼姓名；定级依据官方入口与TYPE-MOON Wiki资料入口，Fate/Zero青年期另算。"
    })
  })]);
})();
