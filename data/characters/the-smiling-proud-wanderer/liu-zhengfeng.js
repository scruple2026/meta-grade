(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["笑傲江湖"];
  if (!work) throw new Error("笑傲江湖 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "liu-zhengfeng",
    name: "刘正风",
    en: "Liu Zhengfeng",
    aliases: ["刘三爷", "衡山派刘正风"],
    affiliation: "衡山派",
    grade: "衡山派高手 / 金盆洗手当事人",
    appearances: ["金盆洗手"],
    timelineStatus: "金盆洗手期",
    fandomSlug: "劉正風",
    confidence: "medium",
    evidenceType: ["角色页入口", "小说条目入口"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["砖级", "墙级｜衡山剑法/内力", "衡山派高手，剑法和内力高于普通江湖人。"],
      defense: ["砖级", "墙级｜内力/身法", "具江湖高手基础防护。"],
      movement: ["凡人速", "亚音速｜衡山身法", "身法强于常人。"],
      reaction: ["凡人速", "亚音速｜江湖经验", "经验和应变较强。"],
      vitality: ["强化凡体", "精锐韧体｜内力", "人体结构，内力支撑续战。"],
      healing: ["缓慢自愈", "缓慢自愈｜调息", "依靠内功调息。"],
      energy: ["砖级能量", "墙级能量｜内力", "内力资源按衡山高手处理。"],
      energyRegen: ["缓慢回能", "缓慢回能｜调息", "内力需调息。"]
    }),
    notes: notes({
      penetration: "衡山剑法与内力偏局部近战杀伤。",
      resistance: "有高手体魄和内力，但面对嵩山派政治清洗和人质压力很被动。",
      sensing: "江湖经验、音律知己和对局势危险有判断。",
      tactics: "愿意退出江湖，战术选择受家眷和曲洋情义限制。",
      special: "衡山剑法、音律、笑傲江湖曲、金盆洗手事件核心。",
      weakness: "家眷被挟持与正邪名分压力使其难以自由作战。",
      setting: "按金盆洗手期刘正风记录。",
      basis: "worldbook只用于抽取刘正风姓名；定级依据金庸 Wiki 和公开小说条目入口。"
    })
  })]);
})();
