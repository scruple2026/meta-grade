(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Tomb Raider"];
  if (!work) throw new Error("Tomb Raider work metadata must load before character files.");

  registerCharacters([work.character({
    id: "lara-croft",
    name: "劳拉·克劳馥",
    en: "Lara Croft",
    ja: "",
    aliases: ["Lara", "Lara Croft", "劳拉", "古墓丽影"],
    affiliation: "独立考古探险者",
    grade: "考古学家 / 冒险者 / 求生者",
    appearances: ["Tomb Raider 系列"],
    timelineStatus: "系列综合 / 资深探险者",
    fandomSlug: "Lara_Croft",
    confidence: "medium",
    evidenceType: ["官方系列入口", "角色资料入口", "worldbook名字索引"],
    sourceQuality: "entry",
    evidenceLinks: [{
      type: "official",
      scope: "官方系列入口",
      label: "Tomb Raider Official Website",
      url: "https://www.tombraider.com/",
      lang: "en",
      authority: "official",
      medium: "official-site",
      ratingEvidence: false,
      claim: "用于核对《Tomb Raider》官方系列入口与劳拉·克劳馥的核心主角地位。"
    }, {
      type: "wiki",
      scope: "角色资料入口",
      label: "Tomb Raider Wiki: Lara Croft",
      url: "https://tombraider.fandom.com/wiki/Lara_Croft",
      lang: "en",
      authority: "wiki",
      medium: "wiki",
      ratingEvidence: true,
      claim: "用于交叉核对劳拉的考古、攀爬、枪械、弓箭、求生和战斗经历。"
    }],
    revisionNotes: ["从缄默之秋 worldbook 的劳拉·克劳馥 key/comment 补入；未采用 worldbook 正文描述。"],
    dimensions: dims({
        attack: ["砖级｜双枪/弓箭", "墙级｜爆炸物/重武器/机关遗物｜装备", "常态依赖枪械、弓箭和近战工具；峰值为任务装备或环境机关。"],
        defense: ["凡人级", "砖级｜防具/规避/掩体", "本体为训练人类，生还主要靠规避、掩体和医疗资源。"],
        movement: ["凡人速", "亚音速｜攀爬/跑酷/短距闪避", "攀爬、跳跃、短距闪避和地形机动远强于普通人。"],
        reaction: ["凡人速", "亚音速｜枪战/陷阱反应", "枪战、陷阱和野外求生经验支撑快速反应。"],
        vitality: ["凡人肉身", "强化凡体｜求生/伤病耐受", "耐力和伤病承受优秀，但不脱离人类生命体量。"],
        healing: ["无自愈", "缓慢自愈｜急救/休整", "恢复依赖绷带、药品、休整和营地。"],
        energy: ["凡人能量", "墙级能量｜弹药/爆炸物/任务装备", "资源来自体力、弹药、爆炸物和工具，不等同本体能量池。"],
        energyRegen: ["无回能", "缓慢回能｜补给/换弹/休息", "依赖搜刮、补给、换弹和休息。"]
      }),
    notes: notes({
        penetration: "双枪、弓箭、爆炸物、绳索工具和环境机关能提供高于徒手的杀伤或破障能力。",
        resistance: "本体为训练人类，依赖地形、掩体、防具和急救资源避免被击穿。",
        sensing: "遗迹探索、陷阱识别、痕迹追踪、环境路线判断和野外求生感知优秀。",
        tactics: "擅长潜行、伏击、远近武器切换、利用地形和机关反杀强敌。",
        special: "考古知识、求生技能、攀爬跑酷、枪械/弓箭/工具使用、古代遗物接触经验。",
        weakness: "本体脆弱，弹药和医疗有限；面对超自然敌人时依赖特定遗物、地形或剧情资源。",
        setting: "按游戏系列综合的资深探险者劳拉记录。",
        basis: "worldbook只用于抽取劳拉·克劳馥姓名；定级依据官方系列入口和Tomb Raider Wiki角色入口，装备和环境机关峰值与本体面板分开。"
      })
  })]);
})();
