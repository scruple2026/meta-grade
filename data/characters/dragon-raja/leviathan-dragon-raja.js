(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["龙族（江南）"];
  if (!work) throw new Error("龙族（江南） work metadata must load before character files.");

  registerCharacters([work.character({
    id: "leviathan-dragon-raja",
    name: "利维坦",
    en: "Leviathan",
    ja: "利维坦",
    aliases: ["海洋与水之王", "Leviathan"],
    affiliation: "海洋与水之王",
    grade: "龙王 / 海洋与水之王相关存在",
    appearances: ["悼亡者归来"],
    timelineStatus: "海洋与水之王线 / 身份与表现保守记录",
    fandomSlug: "利维坦",
    confidence: "disputed",
    evidenceType: ["资料入口", "龙王峰值", "身份争议"],
    sourceQuality: "entry",
    evidenceLinks: [{
      type: "official",
      scope: "作品入口",
      label: "起点中文网：龙族",
      url: "https://www.qidian.com/book/1887208/",
      lang: "zh",
      authority: "licensed",
      medium: "publisher",
      ratingEvidence: false,
      claim: "用于核对《龙族》作品入口；利维坦身份和具体战斗表现仍需原文章节级证据。"
    }, {
      type: "wiki",
      scope: "作品资料入口",
      label: "萌娘百科：龙族",
      url: "https://zh.moegirl.org.cn/龙族",
      lang: "zh",
      authority: "wiki",
      medium: "wiki",
      ratingEvidence: false,
      claim: "用于交叉核对《龙族》世界观和龙王体系入口，不单独支撑利维坦量级。"
    }],
    revisionNotes: [
      "worldbook 仅用于抽取《龙族》角色姓名和索引别名；定级依据公开作品/资料入口并按保守跨界面板记录。",
      "海洋与水之王相关身份和具体表现争议较高，后续应补原文章节或设定资料。"
    ],
    dimensions: dims({
        attack: ["楼宇级", "街区级｜海洋与水权能/龙王级存在｜仅下限｜争议", "按龙王级存在下限记录，不把称号直接换算为城市级或更高。"],
        defense: ["楼宇级", "街区级｜龙躯/龙王生命结构｜仅下限｜争议", "缺少稳定承伤换算，按高阶龙类下限。"],
        movement: ["音速", "超音速｜龙王爆发｜争议", "速度沿用龙王级保守模板，未写更高跨界速度。"],
        reaction: ["音速", "超音速｜龙王感知/战斗本能｜争议", "高阶龙类感知作为保守峰值。"],
        vitality: ["楼宇级生命阈值", "街区级生命阈值｜龙王生命结构/龙骨十字｜争议", "生命结构复杂，但具体复归条件资料不足。"],
        healing: ["中速自愈", "极速自愈｜龙王生命/龙骨十字｜条件｜争议", "恢复与龙类生命结构和复归条件相关。"],
        energy: ["楼宇级能量", "街区级能量｜海洋与水权能/言灵｜仅下限｜争议", "能量池按龙王权能保守下限，不按海洋规模字面上推。"],
        energyRegen: ["中速回能", "快速回能｜龙类生命/环境条件｜争议", "回能受龙类状态和环境影响。"]
      }),
    notes: notes({
        penetration: "海洋与水权能、龙躯和高阶言灵构成威胁，但缺少可直接换算的大范围破坏证据。攻击速度：龙躯冲撞与撕咬随巨体运动，海水和言灵攻击按各自形成、覆盖过程判断，不能把环境异象直接视为高速弹体。",
        resistance: "龙王生命结构和龙骨十字机制复杂，暂按下限记录。",
        sensing: "作为龙王级存在，对龙类、尼伯龙根或水域环境可能有感知优势。",
        tactics: "公开资料入口不足以细分战术风格，先按高阶龙类本能和权能处理。",
        special: "海洋与水之王相关身份、龙王生命结构、龙骨十字、可能的水域/海洋权能。",
        weakness: "身份、表现和复归条件高争议；缺少章节级证据前不抬高主面板。",
        setting: "按《悼亡者归来》海洋与水之王相关线索保守记录。",
        basis: "worldbook只用于抽取利维坦姓名；公开作品/资料入口只能支撑其《龙族》高阶龙王体系相关讨论入口，量级按既有龙王下限模板并保留争议。"
      })
  })]);
})();
