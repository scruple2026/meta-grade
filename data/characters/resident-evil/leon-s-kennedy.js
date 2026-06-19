(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Resident Evil"];
  if (!work) throw new Error("Resident Evil work metadata must load before character files.");

  registerCharacters([work.character({
    id: "leon-s-kennedy",
    name: "里昂·S·肯尼迪",
    en: "Leon S. Kennedy",
    ja: "レオン・S・ケネディ",
    aliases: ["Leon", "Leon Scott Kennedy", "里昂"],
    affiliation: "Raccoon City Police / DSO",
    grade: "特工 / 反生化作战专家",
    appearances: ["Resident Evil 2", "Resident Evil 4", "Resident Evil 6"],
    timelineStatus: "主系列后期 / DSO特工",
    fandomSlug: "Leon_Scott_Kennedy",
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
      label: "Resident Evil Wiki: Leon Scott Kennedy",
      url: "https://residentevil.fandom.com/wiki/Leon_Scott_Kennedy",
      lang: "en",
      authority: "wiki",
      medium: "wiki",
      ratingEvidence: true,
      claim: "用于核对里昂的R.P.D./特工身份、登场作品、反B.O.W.战斗经历和装备语境。"
    }],
    revisionNotes: ["从缄默之秋 worldbook 的里昂·斯科特·肯尼迪 key/comment 补入；未采用 worldbook 正文描述。"],
    dimensions: dims({
        attack: ["砖级｜手枪/近战", "墙级｜重武器/爆炸物/反B.O.W.装备｜装备", "常态为枪械与格斗；峰值依赖火箭筒、爆炸物或任务装备。"],
        defense: ["凡人级", "砖级｜防具/战术规避", "本体仍是人类，生还主要来自战术、装备和规避。"],
        movement: ["凡人速", "亚音速｜特工训练/近战爆发", "机动强于常人但不按超人高速处理。"],
        reaction: ["凡人速", "亚音速｜特工反应/枪战经验", "高压枪战和B.O.W.战斗经验提高反应。"],
        vitality: ["凡人肉身", "强化凡体｜训练/剧情生还", "高耐受与意志不等同高生命体量。"],
        healing: ["无自愈", "缓慢自愈｜草药/急救喷雾/医疗", "恢复依赖道具和医疗。"],
        energy: ["凡人能量", "墙级能量｜弹药/重武器资源｜装备", "能量池按携带弹药和重武器资源记录。"],
        energyRegen: ["无回能", "缓慢回能｜补给/换弹", "依赖补给和换弹，不存在内源回能。"]
      }),
    notes: notes({
        penetration: "枪械、刀术、爆炸物和火箭筒可针对B.O.W.弱点，但重火力属于装备峰值。",
        resistance: "本体为训练有素的人类，靠防具、掩体、闪避和急救资源生存。",
        sensing: "特工侦查、枪战经验和对生化怪物弱点的判断强。",
        tactics: "擅长小队/单人突入、保护目标、弹药管理和利用环境击杀B.O.W.。",
        special: "DSO特工训练、反生化作战经验、枪械/重武器、近战体术。",
        weakness: "弹药、装备和治疗资源耗尽后本体脆弱；不具备稳定超自然能力。",
        setting: "按主系列后期DSO特工里昂综合记录。",
        basis: "worldbook只用于抽取里昂姓名；定级依据Capcom官方入口和Resident Evil Wiki角色入口，重武器作为装备峰值。"
      })
  })]);
})();
