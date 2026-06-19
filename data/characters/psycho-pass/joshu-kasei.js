(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["心理测量者"];

  if (!work) throw new Error("Psycho-Pass work metadata must load before character files.");

  registerCharacters([
    work.character({
      id: "joshu-kasei",
      name: "禾生壤宗",
      en: "Joshu Kasei",
      ja: "禾生壌宗",
      affiliation: "厚生省公安局 / 西比拉系统",
      grade: "局长 / 西比拉义体",
      appearances: ["西比拉系统审判篇", "第一季"],
      timelineStatus: "第一季 / 西比拉代理义体",
      aliases: ["禾生局长", "Kasei", "Joshu Kasei", "西比拉代理", "公安局长"],
      fandomSlug: "Joshu_Kasei",
      confidence: "medium",
      evidenceType: ["角色页入口", "worldbook名字索引", "系统节点"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Psycho-Pass Wiki: Joshu Kasei",
          url: "https://psychopass.fandom.com/wiki/Joshu_Kasei",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对禾生壤宗、公安局长和西比拉系统代理义体相关资料；系统权限不直接折算为个人肉身战力。"
        }
      ],
      revisionNotes: [
        "从心理测量者 worldbook 的西比拉核心/禾生壤宗 key/comment 补入；未采用 worldbook 正文描述。"
      ],
      dimensions: dims({
        attack: ["凡人级", "墙级｜Dominator/系统授权", "个人肉身攻击低，峰值来自公安装备和西比拉授权。"],
        defense: ["凡人级", "砖级｜义体/公安防护", "义体与安保资源能提高生存条件，但不按战斗型义体高硬度处理。"],
        movement: ["凡人速", "凡人速", "普通人/非战斗义体机动。"],
        reaction: ["凡人速", "凡人速｜系统判断", "系统判断和命令链不等于身体高速反应。"],
        vitality: ["凡人肉身", "凡人肉身｜义体可替换", "单具义体按普通人级处理，西比拉系统存续另写特殊项。"],
        healing: ["无自愈", "无自愈｜义体替换", "没有个体自愈；可通过系统替换义体延续代理身份。"],
        energy: ["凡人能量", "墙级能量｜公安系统资源", "个人资源低，峰值来自Dominator、公安和西比拉系统资源。"],
        energyRegen: ["无回能", "缓慢回能｜系统补给", "外部系统补给不等同个人持续回能。"]
      }),
      notes: notes({
        penetration: "本人正面攻击弱；Dominator和公安系统权限才是主要威胁。",
        resistance: "单具义体可被常规武力破坏；西比拉多节点存续属于系统特殊性，不是肉身硬防。",
        sensing: "依赖西比拉监控、公安情报和犯罪系数扫描。",
        tactics: "以局长身份调度公安、压制情报并执行西比拉意志。",
        special: "西比拉系统代理义体、公安局长权限、Dominator授权、人格/系统节点替换。",
        weakness: "单体义体战斗力有限，依赖西比拉系统和公安机构；暴露身份会引发政治风险。",
        setting: "按第一季西比拉系统审判篇的禾生壤宗代理义体记录，不把西比拉系统整体资源写成个人肉身面板。",
        basis: "worldbook只用于抽取禾生壤宗姓名；定级依据公开角色资料入口和西比拉代理义体定位。"
      })
    })
  ]);
})();
