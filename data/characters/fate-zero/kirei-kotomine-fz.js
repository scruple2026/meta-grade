(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Zero"];
  if (!work) throw new Error("Fate/Zero work metadata must load before character files.");

  registerCharacters([work.character({
    id: "kirei-kotomine-fz",
    name: "言峰绮礼",
    en: "Kirei Kotomine",
    ja: "言峰綺礼",
    aliases: ["绮礼", "Kotomine Kirei"],
    affiliation: "言峰阵营 / 圣堂教会",
    grade: "御主 / 代行者",
    appearances: ["第四次圣杯战争"],
    timelineStatus: "第四次圣杯战争",
    fandomSlug: "Kirei_Kotomine",
    confidence: "medium",
    evidenceType: ["官方入口", "角色页入口", "代行者体术"],
    sourceQuality: "entry",
    evidenceLinks: [],
    revisionNotes: ["worldbook 仅用于抽取 Fate/Zero 角色姓名；定级依据公开官方/资料入口并保持保守。"],
    dimensions: dims({
        attack: ["墙体级", "房屋级｜黑键/八极拳/令咒", "代行者体术和黑键对人杀伤强。"],
        defense: ["墙体级", "房屋级｜代行者体魄/术式", "青年期身体和训练处于高水平。"],
        movement: ["亚音速", "音速｜代行者体术", "短距离爆发强。"],
        reaction: ["亚音速", "音速｜近战经验", "近战反应和战斗判断优秀。"],
        vitality: ["精锐韧体", "房屋级生命阈值｜代行者体魄", "本体仍是人类，但异常续战强。"],
        healing: ["无自愈", "中速自愈｜术式/治疗", "恢复依赖术式和外部条件。"],
        energy: ["墙体级能量", "房屋级能量｜令咒/术式", "魔力与令咒资源有限但危险。"],
        energyRegen: ["缓慢回能", "中速回能｜术式/准备", "依赖准备与术式。"]
      }),
    notes: notes({
        penetration: "黑键、八极拳和令咒控制偏对人穿透与近战处决。攻击速度：第四次圣杯战争时期的言峰绮礼以八极拳接战后衔接黑键投掷或近身处决；贴身拳法、黑键离手飞行和令咒发动是三种不同节奏。",
        resistance: "代行者训练使其难杀，但非从者灵基。",
        sensing: "监督者阵营信息、教会经验和心理洞察强。",
        tactics: "心理战、背刺、规则利用和长期布局极强。",
        special: "黑键、八极拳、令咒、Assassin契约、圣堂教会术式。",
        weakness: "人格空洞、愉悦取向、阵营背叛和御主关系会改变行动。",
        setting: "按第四次圣杯战争青年期言峰绮礼记录，和第五次圣杯战争版本分开。",
        basis: "worldbook只用于抽取言峰绮礼FZ姓名；定级依据官方角色入口与TYPE-MOON Wiki资料入口。"
      })
  })]);
})();
