(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["龙族（江南）"];
  if (!work) throw new Error("龙族（江南） work metadata must load before character files.");

  registerCharacters([work.character({
    id: "behemoth-black-snake",
    name: "贝希摩斯（黑蛇）",
    en: "Behemoth / Black Snake",
    ja: "贝希摩斯 / 黑蛇",
    aliases: ["贝希摩斯", "黑蛇", "海洋与水之王", "Behemoth"],
    affiliation: "海洋与水之王",
    grade: "龙王 / 海洋与水之王相关存在",
    appearances: ["悼亡者归来"],
    timelineStatus: "黑蛇形态 / 海洋与水之王线保守记录",
    fandomSlug: "贝希摩斯",
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
      claim: "用于核对《龙族》作品入口；贝希摩斯/黑蛇身份和具体战斗表现仍需原文章节级证据。"
    }, {
      type: "wiki",
      scope: "作品资料入口",
      label: "萌娘百科：龙族",
      url: "https://zh.moegirl.org.cn/龙族",
      lang: "zh",
      authority: "wiki",
      medium: "wiki",
      ratingEvidence: false,
      claim: "用于交叉核对《龙族》世界观和龙王体系入口，不单独支撑贝希摩斯量级。"
    }],
    revisionNotes: [
      "worldbook 仅用于抽取《龙族》角色姓名和索引别名；定级依据公开作品/资料入口并按保守跨界面板记录。",
      "贝希摩斯、黑蛇与海洋与水之王相关身份争议较高，后续应补原文章节或设定资料。"
    ],
    dimensions: dims({
        attack: ["楼级", "街区级｜海洋与水权能/黑蛇形态｜仅下限｜争议", "按龙王级存在下限记录，不把巨体或称号直接换算为更高破坏档。"],
        defense: ["楼级", "街区级｜龙躯/龙王生命结构｜仅下限｜争议", "缺少稳定承伤换算，按高阶龙类下限。"],
        movement: ["音速", "超音速｜龙王爆发｜争议", "速度沿用龙王级保守模板。"],
        reaction: ["音速", "超音速｜龙王感知/战斗本能｜争议", "高阶龙类感知作为保守峰值。"],
        vitality: ["楼级生命阈值", "街区级生命阈值｜龙王生命结构/龙骨十字｜争议", "生命结构复杂，但具体复归条件资料不足。"],
        healing: ["中速自愈", "极速自愈｜龙王生命/龙骨十字｜条件｜争议", "恢复与龙类生命结构和复归条件相关。"],
        energy: ["楼级能量", "街区级能量｜海洋与水权能/言灵｜仅下限｜争议", "能量池按龙王权能保守下限。"],
        energyRegen: ["中速回能", "快速回能｜龙类生命/环境条件｜争议", "回能受龙类状态和环境影响。"]
      }),
    notes: notes({
        penetration: "黑蛇形态、龙躯和海洋与水相关权能构成威胁；缺少直接换算的大范围破坏证据。攻击速度：黑蛇巨体的撕咬与冲撞随庞大躯体运动，水与海洋权能另按形成和扩散判断，现有资料不能把龙躯移速当作全部攻击速度。",
        resistance: "龙王生命结构和龙骨十字机制复杂，暂按下限记录。",
        sensing: "作为龙王级存在，对龙类、尼伯龙根或水域环境可能有感知优势。",
        tactics: "公开资料入口不足以细分战术风格，先按高阶龙类本能和权能处理。",
        special: "海洋与水之王相关身份、黑蛇形态、龙王生命结构、龙骨十字。",
        weakness: "身份、表现和复归条件高争议；缺少章节级证据前不抬高主面板。",
        setting: "按《悼亡者归来》黑蛇/海洋与水之王相关线索保守记录。",
        basis: "worldbook只用于抽取贝希摩斯/黑蛇姓名；公开作品/资料入口只能支撑其《龙族》高阶龙王体系相关讨论入口，量级按既有龙王下限模板并保留争议。"
      })
  })]);
})();
