(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["天龙八部"];
  if (!work) throw new Error("天龙八部 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "wuyazi",
    name: "无崖子",
    en: "Wuyazi",
    aliases: ["無崖子", "逍遥派掌门"],
    affiliation: "逍遥派",
    grade: "逍遥派掌门 / 传功者",
    appearances: ["擂鼓山珍珑棋局"],
    timelineStatus: "传功前残躯",
    fandomSlug: "無崖子",
    confidence: "review",
    evidenceType: ["角色页入口", "小说条目入口", "worldbook索引字段", "残躯状态"],
    sourceQuality: "entry",
    evidenceLinks: [
      {
        type: "wiki",
        scope: "角色入口",
        label: "金庸 Wiki：无崖子",
        url: "https://jinyong.fandom.com/zh/wiki/%E7%84%A1%E5%B4%96%E5%AD%90",
        lang: "zh",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "用于核对角色、逍遥派身份和传功时间线入口；具体量级仍按保守武侠口径处理。"
      }
    ],
    dimensions: dims({
      attack: ["凡人级", "墙级｜北冥内力/传功条件", "传功前已是残躯，直接战斗行动极受限；峰值只记录内力仍可产生的条件性影响。"],
      defense: ["凡人级", "墙级｜深厚内力/残躯｜争议", "肉身残损，不能按巅峰逍遥派高手机动承压；深厚内力作为条件防护。"],
      movement: ["凡人速", "凡人速｜残躯", "传功前行动能力严重受限，不按巅峰轻功记录。"],
      reaction: ["凡人速", "亚音速｜武学判断", "身体响应受限，但武学眼光和判断仍高。"],
      vitality: ["凡人肉身", "精锐韧体｜深厚内力/残躯", "生命结构仍是人体，残躯状态下主要靠内力和布置维持。"],
      healing: ["无自愈", "缓慢自愈｜内功维持｜争议", "缺少有效自愈表现；内功维持不等同战斗再生。"],
      energy: ["房屋级能量｜北冥内力", "房屋级能量｜传功资源", "总内力极深，但残躯无法稳定转化为完整攻击/机动面板。"],
      energyRegen: ["缓慢回能", "缓慢回能｜残躯调息", "残躯状态下恢复和输出都受限。"]
    }),
    notes: notes({
      penetration: "主要价值在北冥内力、传功和武学体系传承；残躯状态下不按主动破坏型高手处理。",
      resistance: "深厚内力可解释部分维持和防护，但肉身残损是核心短板。",
      sensing: "武学眼光极强，能通过珍珑棋局和传功选择继承者。",
      tactics: "长期布局、筛选传人和传承安排突出；遭遇战执行力受残躯限制。",
      special: "北冥神功、逍遥派传承、珍珑棋局布局、传功。",
      weakness: "传功前已成残躯，移动、主动进攻和持续实战能力严重受限。",
      setting: "按擂鼓山传功前的无崖子记录；不直接套用未知巅峰期。",
      basis: "worldbook只用于从comment/key抽取无崖子姓名；定级依据金庸 Wiki 和公开小说条目入口，面板按传功前残躯保守记录，深厚内力只进入能量总量和条件峰值。"
    })
  })]);
})();
