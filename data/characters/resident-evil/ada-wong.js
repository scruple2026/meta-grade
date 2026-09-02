(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Resident Evil"];
  if (!work) throw new Error("Resident Evil work metadata must load before character files.");

  registerCharacters([work.character({
    id: "ada-wong",
    name: "艾达·王",
    en: "Ada Wong",
    ja: "エイダ・ウォン",
    aliases: ["Ada", "Ada Wong", "艾达"],
    affiliation: "独立特工 / 间谍",
    grade: "间谍 / 特工",
    appearances: ["Resident Evil 2", "Resident Evil 4", "Resident Evil 6"],
    timelineStatus: "主系列后期 / 独立特工",
    fandomSlug: "Ada_Wong",
    confidence: "stable",
    evidenceType: ["官方作品入口", "角色资料入口", "worldbook名字索引"],
    sourceQuality: "entry",
    evidenceLinks: [{
      type: "official",
      scope: "官方作品入口",
      label: "Capcom: Resident Evil Portal",
      url: "https://www.residentevil.com/",
      lang: "en",
      authority: "official",
      medium: "official-site",
      ratingEvidence: false,
      claim: "用于核对《Resident Evil》官方系列入口。"
    }, {
      type: "wiki",
      scope: "角色资料入口",
      label: "Resident Evil Wiki: Ada Wong",
      url: "https://residentevil.fandom.com/wiki/Ada_Wong",
      lang: "en",
      authority: "wiki",
      medium: "wiki",
      ratingEvidence: true,
      claim: "用于核对艾达的间谍/特工身份、登场作品、钩枪、枪械和任务语境。"
    }],
    revisionNotes: ["从缄默之秋 worldbook 的艾达·王 key/comment 补入；未采用 worldbook 正文描述。"],
    dimensions: dims({
        attack: ["砖块级｜手枪/近战", "墙体级｜爆炸物/特殊装备｜装备", "输出依赖枪械、爆炸物和任务装备，偏单体/暗杀。"],
        defense: ["凡人级", "砖块级｜防具/闪避/钩枪机动", "本体仍是人类，靠机动和隐蔽降低受击。"],
        movement: ["凡人速", "亚音速｜特工训练/钩枪机动", "钩枪和特工训练带来高机动，不等同超人速度。"],
        reaction: ["凡人速", "亚音速｜间谍训练/枪战经验", "高压任务和枪战经验支撑反应。"],
        vitality: ["凡人肉身", "强化凡体｜训练/剧情生还", "生命体量按训练人类处理。"],
        healing: ["无自愈", "缓慢自愈｜草药/急救喷雾/医疗", "恢复依赖道具和医疗。"],
        energy: ["凡人能量", "墙体级能量｜弹药/爆炸物/装备", "资源来自弹药、爆炸物和工具。"],
        energyRegen: ["无回能", "缓慢回能｜补给/换弹", "依赖补给，不存在内源回能。"]
      }),
    notes: notes({
        penetration: "枪械、爆炸物、钩枪机动和暗杀技巧可打弱点，重火力属于装备峰值。攻击速度：暗杀与近身动作取决于出手和接战，枪弹离膛后独立于钩枪机动，爆炸物还要计入布置或触发时间。",
        resistance: "本体防御有限，依靠潜入、掩护、闪避和情报优势。",
        sensing: "间谍情报、潜入、诱导和观察目标弱点能力强。",
        tactics: "擅长潜入、撤离、欺骗、单兵枪战和利用里昂/第三方局势。",
        special: "间谍训练、钩枪、枪械、隐蔽行动、情报操控。",
        weakness: "本体脆弱，战斗力依赖情报、地形、装备和任务准备。",
        setting: "按主系列后期独立特工艾达综合记录。",
        basis: "worldbook只用于抽取艾达·王姓名；定级依据Capcom官方入口和Resident Evil Wiki角色入口，装备与潜入优势分开记录。"
      })
  })]);
})();
