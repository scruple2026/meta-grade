(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["新世纪福音战士"];

  if (!work) {
    throw new Error("新世纪福音战士 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "gendo-ikari",
      name: "碇源堂",
      en: "Gendo Ikari",
      ja: "碇ゲンドウ",
      affiliation: "NERV / SEELE计划相关",
      grade: "NERV司令",
      appearances: ["TV版", "The End of Evangelion"],
      timelineStatus: "旧剧场版前后 / 补完计划执行者",
      aliases: ["源堂", "碇司令", "Gendo"],
      fandomSlug: "Gendo_Ikari",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["凡人级", "砖级｜手枪/亚当胚胎｜特殊", "个人物理输出低，亚当胚胎与补完计划属于仪式/特殊机制。"],
        defense: ["凡人级", "凡人级", "本体没有超常防御。"],
        movement: ["凡人速", "凡人速", "普通成年人。"],
        reaction: ["凡人速", "凡人速", "依靠谋划与情报，不是高速反应。"],
        vitality: ["凡人肉身", "凡人肉身", "普通人类肉身。"],
        healing: ["无自愈", "无自愈", "无自愈。"],
        energy: ["凡人能量", "未知｜仪式资源/计划", "个人无能量池，补完计划依赖外部系统。"],
        energyRegen: ["中速回能", "不适用｜外部系统", "无个人回能体系。"]
      }),
      notes: notes({
        penetration: "个人攻击有限；真正威胁来自NERV权限、亚当胚胎、绫波丽与补完计划的仪式链条。攻击速度：碇源堂本人的武器动作只属凡人层面，真正威胁需经NERV命令、EVA或补完仪式链执行，没有可归于本体的高速攻击。",
        resistance: "本体是普通人，缺少直接战斗防御。",
        sensing: "依靠情报系统、SEELE/NERV资料和长期计划掌握战局。",
        tactics: "长期阴谋、资源调度和心理控制极强，能把组织、EVA和仪式系统作为棋子。",
        special: "NERV权限、亚当胚胎、补完计划、对驾驶员和绫波丽的操控。",
        weakness: "个人战斗力很低，计划依赖绫波、EVA、Lilith、SEELE/NERV系统和时机。",
        setting: "按 TV/旧剧场版源堂记录，不混入 Rebuild 状态。",
        basis: "依据源堂在NERV、SEELE对抗和补完计划中的指挥、仪式资源和个人脆弱性定级。"
      })
    })
  ]);
})();
