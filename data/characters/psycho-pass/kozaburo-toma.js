(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["心理测量者"];

  if (!work) throw new Error("Psycho-Pass work metadata must load before character files.");

  registerCharacters([
    work.character({
      id: "kozaburo-toma",
      name: "藤间幸三郎",
      en: "Kozaburo Toma",
      ja: "藤間幸三郎",
      affiliation: "西比拉系统 / 免罪体质者",
      grade: "免罪体质者 / 西比拉核心",
      appearances: ["标本事件前史", "西比拉系统审判篇"],
      timelineStatus: "第一季前史至西比拉核心",
      aliases: ["藤间", "Kozaburo Toma", "Toma", "免罪体质者", "西比拉核心"],
      fandomSlug: "Kozaburo_Toma",
      confidence: "medium",
      evidenceType: ["角色页入口", "worldbook名字索引", "系统节点"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Psycho-Pass Wiki: Kozaburo Toma",
          url: "https://psychopass.fandom.com/wiki/Kozaburo_Toma",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对藤间幸三郎、免罪体质者和西比拉核心相关资料；免罪体质不折算为肉身防御。"
        }
      ],
      revisionNotes: [
        "从心理测量者 worldbook 的西比拉核心/藤间幸三郎 key/comment 补入；未采用 worldbook 正文描述。"
      ],
      dimensions: dims({
        attack: ["凡人级", "砖级｜犯罪准备/工具", "个人物理杀伤按普通人和工具处理。"],
        defense: ["凡人级", "凡人级｜免罪体质非硬度", "免罪体质影响系统判定，不提升肉身硬度。"],
        movement: ["凡人速", "凡人速", "普通人移动。"],
        reaction: ["凡人速", "凡人速｜犯罪策划", "计划和心理异常不等同高速反应。"],
        vitality: ["凡人肉身", "凡人肉身｜西比拉核心节点", "肉身普通；加入西比拉后的系统存续另写特殊项。"],
        healing: ["无自愈", "无自愈", "无个体自愈。"],
        energy: ["凡人能量", "砖级能量｜工具/系统节点", "个人资源低，西比拉核心资源不等同单体攻击输出。"],
        energyRegen: ["无回能", "缓慢回能｜系统资源", "外部系统资源需要条件。"]
      }),
      notes: notes({
        penetration: "犯罪手段和工具危险，缺少超人级物理杀伤。",
        resistance: "免罪体质可绕开Dominator等系统判定，但面对常规物理攻击仍是凡人。",
        sensing: "作为西比拉核心后可通过系统获取信息；个体阶段没有特殊索敌。",
        tactics: "标本事件相关犯罪者和免罪体质样本，危险性来自系统盲区与犯罪计划。",
        special: "免罪体质、西比拉核心人格节点、犯罪系数系统盲区。",
        weakness: "肉身普通，能力依赖西比拉系统吸纳或系统盲区。",
        setting: "按第一季前史至西比拉核心阶段记录，免罪体质与西比拉节点不抬肉身面板。",
        basis: "worldbook只用于抽取藤间幸三郎姓名；定级依据公开角色资料入口和免罪体质/西比拉核心定位。"
      })
    })
  ]);
})();
