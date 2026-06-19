(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["射雕英雄传"];
  if (!work) throw new Error("射雕英雄传 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "chen-xuanfeng",
    name: "陈玄风",
    en: "Chen Xuanfeng",
    aliases: ["陳玄風", "铜尸", "銅尸", "黑风双煞"],
    affiliation: "桃花岛叛徒 / 黑风双煞",
    grade: "九阴白骨爪高手",
    appearances: ["金庸共通世界书", "射雕英雄传"],
    timelineStatus: "黑风双煞时期 / 荒山夜战前",
    fandomSlug: "陳玄風",
    confidence: "medium",
    evidenceType: ["角色页入口", "小说资料入口", "worldbook姓名字段"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["砖级", "墙级｜九阴白骨爪/摧心掌", "铜尸与黑风双煞威名来自近战爪功和掌力，偏单体杀伤。"],
      defense: ["砖级", "墙级｜铜尸横练/内力", "铜尸称号和横练体魄提高承伤，但并非无弱点。"],
      movement: ["亚音速", "亚音速｜轻功", "桃花岛出身与江湖恶战经验支撑高手身法。"],
      reaction: ["亚音速", "亚音速｜近战经验", "能压制普通江湖高手，但轻敌会放大破绽。"],
      vitality: ["强化凡体", "精锐韧体｜铜尸横练", "肉身强横但仍可被要害刺杀。"],
      healing: ["缓慢自愈", "缓慢自愈｜调息", "恢复依赖调息和休养。"],
      energy: ["砖级能量", "墙级能量｜九阴内力", "内力资源按中高端武者记录。"],
      energyRegen: ["缓慢回能", "缓慢回能｜调息", "需调息恢复。"]
    }),
    notes: notes({
      penetration: "九阴白骨爪、摧心掌和要害近战偏穿透与骨骼/脏腑杀伤，不等同大范围破坏。",
      resistance: "横练和铜尸称号提高抗打，但要害、轻敌和战术失误仍可致命。",
      sensing: "江湖经验强，感知并非核心优势。",
      tactics: "狠辣直接，常以黑风双煞威慑和强攻压人；轻敌是关键短板。",
      special: "九阴白骨爪、摧心掌、桃花岛武学、黑风双煞配合。",
      weakness: "轻敌、要害防护不足、九阴修炼走偏；死亡结局不能反向抬高生命体量。",
      setting: "金庸共通 worldbook 的桃花岛 key 中出现陈玄风；本条按《射雕英雄传》回忆中的黑风双煞时期记录。",
      basis: "worldbook只用于抽取陈玄风姓名；定级依据金庸 Wiki 角色/作品入口，铜尸和黑风双煞威名不直接抬高主面板。"
    })
  })]);
})();
