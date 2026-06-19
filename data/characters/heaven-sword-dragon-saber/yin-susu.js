(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["倚天屠龙记"];
  if (!work) throw new Error("倚天屠龙记 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "yin-susu",
    name: "殷素素",
    en: "Yin Susu",
    aliases: ["殷素素", "紫微堂堂主", "张无忌母亲"],
    affiliation: "天鹰教",
    grade: "紫微堂堂主 / 张无忌之母",
    appearances: ["金庸共通世界书", "倚天屠龙记"],
    timelineStatus: "王盘山至武当山时期",
    fandomSlug: "殷素素",
    confidence: "medium",
    evidenceType: ["角色页入口", "角色列表入口", "worldbook姓名字段"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["砖级", "墙级｜天鹰教武功/暗器", "天鹰教堂主级武者，偏兵刃、暗器和江湖手段。"],
      defense: ["砖级", "墙级｜轻功/招架", "可应对普通江湖冲突，但不按法王级硬抗处理。"],
      movement: ["凡人速", "亚音速｜轻功", "江湖高手轻功高于普通人。"],
      reaction: ["凡人速", "亚音速｜江湖经验", "临场机变和应对强于普通武者。"],
      vitality: ["强化凡体", "强化凡体｜江湖武者", "仍是人体结构，缺少高承伤表现。"],
      healing: ["缓慢自愈", "缓慢自愈｜休养/调息", "恢复依赖休养。"],
      energy: ["砖级能量", "墙级能量｜天鹰教内力", "内力和携行资源支持短时交锋。"],
      energyRegen: ["缓慢回能", "缓慢回能｜调息", "需调息恢复。"]
    }),
    notes: notes({
      penetration: "天鹰教武功、暗器和欺敌手段偏点穴、兵刃和要害处理，不按大范围破坏。",
      resistance: "有江湖经验和机变，但本体防护有限。",
      sensing: "识人、试探和局势判断强，擅长利用信息差。",
      tactics: "聪明果决，能在王盘山、冰火岛和武当线中制造/处理复杂局面。",
      special: "天鹰教紫微堂、暗器与江湖机变、谢逊/屠龙刀线索、张无忌身世线。",
      weakness: "身体面板不突出；情感、门派恩怨和秘密压力影响决策。",
      setting: "金庸共通 worldbook 的天鹰教 key 中出现殷素素；本条按《倚天屠龙记》前期记录。",
      basis: "worldbook只用于抽取殷素素姓名；定级依据金庸 Wiki 角色/角色列表入口，张无忌母亲和天鹰教身份不直接抬档。"
    })
  })]);
})();
