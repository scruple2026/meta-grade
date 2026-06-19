(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["倚天屠龙记"];

  if (!work) {
    throw new Error("倚天屠龙记 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "miejue-shitai",
      name: "灭绝师太",
      en: "Abbess Miejue",
      ja: "",
      affiliation: "峨嵋派",
      grade: "峨嵋派掌门 / 倚天剑持有者",
      appearances: ["金庸共通世界书", "倚天屠龙记"],
      timelineStatus: "倚天主线 / 峨嵋掌门",
      aliases: ["滅絕師太", "灭绝", "峨嵋掌门", "倚天剑", "Abbess Miejue"],
      fandomSlug: "滅絕師太",
      confidence: "medium",
      evidenceType: ["角色页入口", "小说资料入口", "worldbook姓名字段"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "金庸 Wiki：滅絕師太",
          url: "https://jinyong.fandom.com/zh/wiki/%E6%BB%85%E7%B5%95%E5%B8%AB%E5%A4%AA",
          lang: "zh",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对灭绝师太、峨嵋派掌门和倚天剑相关角色身份。"
        }
      ],
      revisionNotes: [
        "从金庸共通 worldbook 的峨嵋派相关 key/comment 补入；未采用 worldbook 正文描述。",
        "倚天剑作为兵刃峰值记录，不并入常态肉身攻击或防御。"
      ],
      dimensions: dims({
        attack: ["砖级", "墙级｜倚天剑/峨嵋剑法", "峨嵋掌门级剑法强，倚天剑提高兵刃穿透。"],
        defense: ["砖级", "墙级｜峨嵋内功/招架", "防御依赖内功、剑法和身法。"],
        movement: ["亚音速", "亚音速｜峨嵋轻功", "轻功和剑法步法强于普通武者。"],
        reaction: ["亚音速", "亚音速｜掌门级经验", "近战经验丰富，能统率门派交锋。"],
        vitality: ["强化凡体", "精锐韧体｜内功", "人体结构，内功提高承伤和续战。"],
        healing: ["缓慢自愈", "中速自愈｜内功调息", "可调息疗伤，非再生。"],
        energy: ["砖级能量", "墙级能量｜峨嵋内力/倚天剑", "内力和倚天剑峰值按单体武侠杀伤记录。"],
        energyRegen: ["缓慢回能", "中速回能｜调息", "内力恢复依赖调息。"]
      }),
      notes: notes({
        penetration: "倚天剑提高斩切和破兵刃能力；峨嵋剑法偏单体近战，不等同范围破坏。",
        resistance: "内功和招架可靠，但失去兵刃或被顶级内功压制时短板明显。",
        sensing: "掌门阅历、江湖判断和对门派局势的警觉较强。",
        tactics: "作风刚烈，擅长以门派威望、倚天剑和正邪立场压迫对手。",
        special: "峨嵋派掌门、倚天剑、峨嵋剑法、门派号令。",
        weakness: "性格刚硬，容易被正邪立场和门派执念限制判断；倚天剑峰值依赖持械。",
        setting: "金庸共通 worldbook 的峨嵋派传承、规制、武当关系和总览 key/comment 中出现灭绝师太；本条按《倚天屠龙记》主线记录。",
        basis: "worldbook只用于抽取灭绝师太姓名；定级依据公开角色资料入口和金庸武侠保守口径，掌门身份与倚天剑分开记录。"
      })
    })
  ]);
})();
