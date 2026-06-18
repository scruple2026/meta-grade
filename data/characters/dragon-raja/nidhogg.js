(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["龙族（江南）"];
  if (!work) throw new Error("龙族（江南） work metadata must load before character files.");

  registerCharacters([work.character({
    id: "nidhogg",
    name: "尼德霍格",
    en: "Nidhogg",
    ja: "尼德霍格",
    aliases: ["黑王", "绝望", "始祖皇帝"],
    affiliation: "黑王",
    grade: "黑王 / 龙族始祖",
    appearances: ["原作神话线"],
    timelineStatus: "神话级背景 / 保守下限",
    fandomSlug: "尼德霍格",
    confidence: "disputed",
    evidenceType: ["资料入口", "神话级下限"],
    sourceQuality: "entry",
    evidenceLinks: [],
    revisionNotes: ["worldbook 仅用于抽取《龙族》角色姓名；定级依据公开作品/资料入口并按保守跨界面板记录。"],
    dimensions: dims({
        attack: ["街区级", "街区级｜神话级权能｜仅下限｜争议", "黑王/白王等神话级存在只按保守下限记录，不无限上推。"],
        defense: ["街区级", "街区级｜神话级生命结构｜仅下限｜争议", "高阶龙族生命结构保守记录为下限。"],
        movement: ["音速", "超音速｜神话级存在｜争议", "缺少稳定跨界速度换算，保守记录。"],
        reaction: ["音速", "超音速｜神话级感知｜争议", "按高阶龙类感知保守记录。"],
        vitality: ["街区级生命阈值", "街区级生命阈值｜神话级生命结构/复归条件｜仅下限｜争议", "生命结构与复归条件高度争议，暂不写城市级以上。"],
        healing: ["快速自愈", "极速自愈｜复归/仪式条件｜争议", "恢复和复归依赖神话/仪式条件。"],
        energy: ["街区级能量", "街区级能量｜神话级权能｜仅下限｜争议", "能量池按保守下限，不把称号直接等同城市级以上。"],
        energyRegen: ["快速回能", "极速回能｜复归/仪式条件｜争议", "回能/复归条件需要原作进一步细分。"]
      }),
    notes: notes({
        penetration: "黑王神话级权能不直接换算无限或宇宙级，本条只给保守下限。",
        resistance: "生命结构和复归条件高度争议，需后续补原作设定证据。",
        sensing: "龙族始祖级感知和规则地位只作设定说明。",
        tactics: "神话级统治与龙族秩序相关，缺少普通战斗面板细节。",
        special: "黑王、龙族始祖、龙族神话线、复归/末日相关设定。",
        weakness: "缺少稳定可换算战斗表现，面板必须保守。",
        setting: "按原作神话线尼德霍格记录。",
        basis: "worldbook只用于抽取尼德霍格姓名；定级依据公开作品/资料入口，称号不直接抬到城市级以上。"
      })
  })]);
})();
