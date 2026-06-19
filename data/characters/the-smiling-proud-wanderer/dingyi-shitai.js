(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["笑傲江湖"];
  if (!work) throw new Error("笑傲江湖 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "dingyi-shitai",
    name: "定逸师太",
    en: "Dingyi Shitai",
    aliases: ["定逸師太", "定逸", "仪琳师父", "恒山三定"],
    affiliation: "恒山派 / 五岳剑派",
    grade: "恒山三定 / 仪琳师父",
    appearances: ["金庸共通世界书", "笑傲江湖"],
    timelineStatus: "主线期 / 恒山危局",
    confidence: "medium",
    evidenceType: ["角色列表入口", "门派条目入口", "worldbook姓名字段"],
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
        claim: "核对定逸师太为仪琳师父，且恒山三定包括定静师太、定闲师太和定逸师太。"
      },
      {
        type: "wiki",
        scope: "门派入口",
        label: "金庸 Wiki：五岳剑派",
        url: "https://jinyong.fandom.com/zh/wiki/%E4%BA%94%E5%B6%BD%E5%8A%8D%E6%B4%BE",
        lang: "zh",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "核对定逸师太列于恒山派人物，恒山派属于五岳剑派，并有恒山剑法等门派武功入口。"
      }
    ],
    revisionNotes: [
      "定逸师太按恒山三定之一和仪琳师父记录；公开入口支持身份关系，具体战斗量级保守按恒山高层处理。"
    ],
    dimensions: dims({
      attack: ["砖级", "墙级｜恒山剑法", "恒山派师尊级武功，按近身剑法和内力杀伤记录。"],
      defense: ["砖级", "墙级｜内力/招架", "武侠高层防身能力，但无高防御证据。"],
      movement: ["亚音速", "亚音速｜恒山轻功", "门派高层轻功和身法。"],
      reaction: ["亚音速", "亚音速｜江湖经验", "江湖经验和师门阅历支撑近战应对。"],
      vitality: ["强化凡体", "精锐韧体｜内力", "人体结构，内力提高承伤和续战。"],
      healing: ["缓慢自愈", "缓慢自愈｜调息", "依靠休养与调息恢复。"],
      energy: ["砖级能量", "墙级能量｜内力", "恒山派高层内力资源。"],
      energyRegen: ["缓慢回能", "缓慢回能｜调息", "内力需调息恢复。"]
    }),
    notes: notes({
      penetration: "恒山剑法偏单体兵刃杀伤，缺少大范围破坏证据。",
      resistance: "以内力、剑法和身法防身；本体仍按低武侠人体处理。",
      sensing: "有师门和江湖经验，无特殊感知或远距索敌。",
      tactics: "作为仪琳师父和恒山派师尊，能组织门人、处理门派危机，但不以权谋见长。",
      special: "恒山三定、仪琳师父、恒山剑法、佛门门风。",
      weakness: "恒山派整体被五岳并派阴谋波及，面对嵩山与岳不群布局时主动权不足。",
      setting: "金庸共通 worldbook 的恒山派 key/comment 中出现定逸师太；本条按《笑傲江湖》主线期记录。",
      basis: "worldbook只用于抽取定逸师太姓名；定级依据金庸 Wiki 笑傲角色列表和五岳剑派入口。恒山三定和仪琳师父身份只支持门派高层定位，不直接抬高主面板。"
    })
  })]);
})();
