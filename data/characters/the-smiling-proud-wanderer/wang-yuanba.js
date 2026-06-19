(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["笑傲江湖"];
  if (!work) throw new Error("笑傲江湖 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "wang-yuanba",
    name: "王元霸",
    en: "Wang Yuanba",
    aliases: ["金刀无敌", "金刀無敵", "洛阳金刀门掌门", "林平之外祖父"],
    affiliation: "洛阳金刀门 / 林家外戚",
    grade: "金刀门掌门",
    appearances: ["金庸共通世界书", "笑傲江湖"],
    timelineStatus: "洛阳金刀门时期",
    confidence: "medium",
    evidenceType: ["角色列表入口", "角色页亲属入口", "worldbook姓名字段"],
    sourceQuality: "entry",
    evidenceLinks: [
      {
        type: "wiki",
        scope: "角色列表入口",
        label: "金庸 Wiki：笑傲江湖角色列表",
        url: "https://jinyong.fandom.com/zh/wiki/%E7%AC%91%E5%82%B2%E6%B1%9F%E6%B9%96%E8%A7%92%E8%89%B2%E5%88%97%E8%A1%A8",
        lang: "zh",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "核对王元霸为洛阳金刀门掌门，外号金刀无敌，王夫人之父、林平之外祖父。"
      },
      {
        type: "wiki",
        scope: "角色关系入口",
        label: "金庸 Wiki：林平之",
        url: "https://jinyong.fandom.com/zh/wiki/%E6%9E%97%E5%B9%B3%E4%B9%8B",
        lang: "zh",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "林平之角色页列出王元霸为林平之外祖父，并显示林震南、王夫人等亲属关系。"
      }
    ],
    revisionNotes: [
      "王元霸按洛阳金刀门掌门记录；金刀无敌是江湖绰号和门派定位，不直接换算为高破坏档。"
    ],
    dimensions: dims({
      attack: ["砖级", "墙级｜金刀门武功", "金刀门掌门级兵刃/掌力，按低武侠局部杀伤记录。"],
      defense: ["砖级", "墙级｜内力/招架", "防御依靠内力、刀法和江湖经验，不按财富或门派声望抬档。"],
      movement: ["亚音速", "亚音速｜江湖高手身法", "金刀门掌门级身法，未见超出低武侠速度表现。"],
      reaction: ["亚音速", "亚音速｜老江湖经验", "江湖阅历和掌门经验支持近战反应。"],
      vitality: ["强化凡体", "精锐韧体｜内力", "习武老人但仍按人体结构处理。"],
      healing: ["缓慢自愈", "缓慢自愈｜调息", "无快速再生表现。"],
      energy: ["砖级能量", "墙级能量｜内力", "内力资源按门派掌门级保守记录。"],
      energyRegen: ["缓慢回能", "缓慢回能｜调息", "消耗后需调息恢复。"]
    }),
    notes: notes({
      penetration: "金刀门武功以兵刃、掌力和江湖门派技法为主，偏单体近战杀伤。",
      resistance: "内力、刀法和经验可防低武侠交锋；没有高能抗性或特殊生命结构。",
      sensing: "老江湖和家族门派经营经验较强，无特殊感知能力。",
      tactics: "能经营金刀门和洛阳王家势力，但家族/门派资源不计入个人面板。",
      special: "金刀门掌门、金刀无敌外号、洛阳王家、林平之外祖父身份。",
      weakness: "年事、家族立场和对林家变故的情感牵制会影响判断。",
      setting: "金庸共通 worldbook 的金刀王家 key/comment 中出现王元霸；本条按洛阳金刀门时期记录。",
      basis: "worldbook只用于抽取王元霸姓名；定级依据金庸 Wiki 笑傲角色列表和林平之角色页入口。金刀无敌只按作品内江湖名号处理，不直接抬高破坏或防御档。"
    })
  })]);
})();
