(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["鹿鼎记"];

  if (!work) {
    throw new Error("鹿鼎记 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "hong-antong",
      name: "洪安通",
      en: "Hong Antong",
      ja: "",
      affiliation: "神龙教",
      grade: "神龙教教主 / 高手",
      appearances: ["金庸共通世界书", "鹿鼎记"],
      timelineStatus: "主线综合期 / 神龙教教主",
      aliases: ["神龙教教主", "洪教主", "化骨绵掌", "Hong Antong"],
      fandomSlug: "洪安通",
      confidence: "medium",
      evidenceType: ["角色页入口", "小说资料入口", "worldbook姓名字段"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "金庸 Wiki：洪安通",
          url: "https://jinyong.fandom.com/zh/wiki/%E6%B4%AA%E5%AE%89%E9%80%9A",
          lang: "zh",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对洪安通、神龙教教主、神龙教武学和鹿鼎记角色身份。"
        }
      ],
      revisionNotes: [
        "从金庸共通 worldbook 的神龙教相关 key/comment 补入；未采用 worldbook 正文描述。",
        "神龙教教主身份和神龙教组织资源不并入个人常态主面板。"
      ],
      dimensions: dims({
        attack: ["砖级", "墙级｜化骨绵掌/神龙教武功", "鹿鼎记高端武者，杀伤以掌法、毒掌和近身制敌为主。"],
        defense: ["砖级", "墙级｜内功/招架", "防御依赖内功、身法和近战经验。"],
        movement: ["亚音速", "亚音速｜轻功", "高手级身法，仍按金庸低武尺度记录。"],
        reaction: ["亚音速", "亚音速｜教主级战斗经验", "能压制多数神龙教徒和江湖武者，但不是超凡高速体系。"],
        vitality: ["强化凡体", "精锐韧体｜内功", "本体仍为人体结构，内力提高续战和抗打击。"],
        healing: ["缓慢自愈", "缓慢自愈｜调息", "无快速再生，伤后需调息和休养。"],
        energy: ["砖级能量", "墙级能量｜内力/毒掌", "内力资源高于普通武者，主要服务单体近战。"],
        energyRegen: ["缓慢回能", "中速回能｜调息", "可通过调息回气，但不属于高速回能。"]
      }),
      notes: notes({
        penetration: "化骨绵掌和神龙教武功偏单体内伤、毒掌和近身制敌，不等同大范围破坏。",
        resistance: "内功和教主级经验可靠；面对暗算、衰老、围攻和组织内斗仍受人体限制。",
        sensing: "江湖经验、教主权威和对部众动向的掌控较强，索敌仍依赖人力情报。",
        tactics: "擅长以威压、组织控制、迷药毒术和近身武功压制对手。",
        special: "神龙教教主、化骨绵掌、神龙教武学、教内组织资源。",
        weakness: "依赖教主权威和组织环境；个人肉身仍可被兵刃、毒药、暗算或高手围攻伤及。",
        setting: "金庸共通 worldbook 的神龙教传承、总览、武学与历史 key/comment 中出现洪安通；本条按《鹿鼎记》主线综合期记录。",
        basis: "worldbook只用于抽取洪安通姓名；定级依据公开角色资料入口和金庸武侠保守口径，教主身份不直接抬高攻击/防御主档。"
      })
    })
  ]);
})();
