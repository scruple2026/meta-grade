(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["龙族（江南）"];
  if (!work) throw new Error("龙族（江南） work metadata must load before character files.");

  registerCharacters([work.character({
    id: "white-king",
    name: "白王（伊邪那美）",
    en: "White King / Izanami",
    ja: "白王",
    aliases: ["伊邪那美", "圣骸", "大祭司", "白王"],
    affiliation: "白王血裔 / 圣骸",
    grade: "白王 / 圣骸仪式",
    appearances: ["黑月之潮"],
    timelineStatus: "圣骸/白王线 / 保守下限",
    fandomSlug: "白王",
    confidence: "disputed",
    evidenceType: ["资料入口", "神话级下限", "仪式峰值"],
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
        penetration: "白王相关权能和圣骸仪式偏规则/血统/仪式机制，不直接换算为无限攻击。",
        resistance: "生命结构和圣骸复归高度争议。",
        sensing: "白王血裔和圣骸线带来特殊设定地位。",
        tactics: "更多作为仪式和血统源头存在，普通战斗细节有限。",
        special: "白王、圣骸、伊邪那美、血统/仪式机制。",
        weakness: "依赖圣骸、血裔、容器和仪式条件；证据边界高风险。",
        setting: "按黑月之潮白王/圣骸线记录。",
        basis: "worldbook只用于抽取白王/伊邪那美姓名；定级依据公开作品/资料入口，神话级身份只作保守下限。"
      })
  })]);
})();
