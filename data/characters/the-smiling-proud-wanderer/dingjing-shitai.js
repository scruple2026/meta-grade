(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["笑傲江湖"];
  if (!work) throw new Error("笑傲江湖 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "dingjing-shitai",
    name: "定静师太",
    en: "Dingjing Shitai",
    aliases: ["定靜師太", "定静", "恒山三定"],
    affiliation: "恒山派 / 五岳剑派",
    grade: "恒山三定 / 恒山派师尊",
    appearances: ["金庸共通世界书", "笑傲江湖"],
    timelineStatus: "福州护送线 / 主线期",
    confidence: "medium",
    evidenceType: ["角色列表入口", "作品剧情入口", "worldbook姓名字段"],
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
        claim: "核对恒山三定包括定静师太，并列出定静弟子秦绢、仪真等恒山派人物。"
      },
      {
        type: "wiki",
        scope: "作品剧情入口",
        label: "金庸 Wiki：笑傲江湖",
        url: "https://jinyong.fandom.com/zh/wiki/%E7%AC%91%E5%82%B2%E6%B1%9F%E6%B9%96",
        lang: "zh",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "剧情概要中记录定静师太率恒山弟子南下福州，遭嵩山派围攻而死，并托令狐冲护送弟子。"
      }
    ],
    revisionNotes: [
      "定静师太按恒山三定之一和护送恒山弟子线记录；遭围攻身亡不按高防御或高生命体量处理。"
    ],
    dimensions: dims({
      attack: ["砖级", "墙级｜恒山剑法", "恒山派师尊级武功，仍按近身剑法和内力杀伤记录。"],
      defense: ["砖级", "墙级｜内力/招架", "能带队应对江湖冲突，但遭围攻时仍会失能死亡。"],
      movement: ["亚音速", "亚音速｜恒山轻功", "门派高层轻功和身法。"],
      reaction: ["亚音速", "亚音速｜护送战经验", "护送弟子与遭遇战经验较强。"],
      vitality: ["强化凡体", "精锐韧体｜内力", "人体结构，内力提升续战但不构成特殊生命结构。"],
      healing: ["缓慢自愈", "缓慢自愈｜调息", "无高速恢复。"],
      energy: ["砖级能量", "墙级能量｜内力", "恒山派高层内力资源。"],
      energyRegen: ["缓慢回能", "缓慢回能｜调息", "内力恢复需要调息。"]
    }),
    notes: notes({
      penetration: "恒山剑法偏单体兵刃杀伤，不等同大范围破坏。",
      resistance: "以内力、剑法和队形自保；围攻和暗算仍是有效威胁。",
      sensing: "有护送队伍和判断江湖危险的经验，无特殊索敌。",
      tactics: "重视保护恒山弟子，临终托付令狐冲体现危机判断和托付能力。",
      special: "恒山三定、恒山派师尊、护送福州线。",
      weakness: "面对嵩山派组织围攻和五岳权谋时处于弱势。",
      setting: "金庸共通 worldbook 的恒山派 key/comment 中出现定静师太；本条按福州护送线和主线期记录。",
      basis: "worldbook只用于抽取定静师太姓名；定级依据金庸 Wiki 角色列表和剧情入口。恒山三定身份支持恒山派高层定位，但没有大范围量级证据。"
    })
  })]);
})();
