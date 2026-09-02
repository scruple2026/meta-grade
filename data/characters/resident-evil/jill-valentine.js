(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Resident Evil"];
  if (!work) throw new Error("Resident Evil work metadata must load before character files.");

  registerCharacters([work.character({
    id: "jill-valentine",
    name: "吉尔·瓦伦丁",
    en: "Jill Valentine",
    ja: "ジル・バレンタイン",
    aliases: ["Jill", "Jill Valentine", "吉尔"],
    affiliation: "S.T.A.R.S. / BSAA",
    grade: "特种警察 / BSAA特工",
    appearances: ["Resident Evil", "Resident Evil 3", "Resident Evil 5"],
    timelineStatus: "主系列后期 / BSAA特工",
    fandomSlug: "Jill_Valentine",
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
      label: "Resident Evil Wiki: Jill Valentine",
      url: "https://residentevil.fandom.com/wiki/Jill_Valentine",
      lang: "en",
      authority: "wiki",
      medium: "wiki",
      ratingEvidence: true,
      claim: "用于核对吉尔的S.T.A.R.S./BSAA身份、登场作品、Nemesis事件和反生化作战经历。"
    }],
    revisionNotes: ["从缄默之秋 worldbook 的吉尔·瓦伦丁 key/comment 补入；未采用 worldbook 正文描述。"],
    dimensions: dims({
        attack: ["砖块级｜手枪/战术武器", "墙体级｜重武器/爆炸物/反B.O.W.装备｜装备", "常态为枪械与战术武器；峰值依赖任务重火力。"],
        defense: ["凡人级", "砖块级｜防具/战术规避", "本体为人类特工，生还依赖战术和装备。"],
        movement: ["凡人速", "亚音速｜S.T.A.R.S./BSAA训练", "行动和规避强于普通人。"],
        reaction: ["凡人速", "亚音速｜反生化作战经验", "Nemesis等高压战斗经验提高反应。"],
        vitality: ["凡人肉身", "强化凡体｜训练/抗性/剧情生还", "抗压和病毒相关经历不等同高生命体量。"],
        healing: ["无自愈", "缓慢自愈｜草药/急救喷雾/医疗", "恢复依赖道具和医疗。"],
        energy: ["凡人能量", "墙体级能量｜弹药/重武器资源｜装备", "资源来自弹药、爆炸物和任务重武器。"],
        energyRegen: ["无回能", "缓慢回能｜补给/换弹", "依赖补给和换弹。"]
      }),
    notes: notes({
        penetration: "枪械、榴弹、爆炸物和重武器可打B.O.W.弱点，装备峰值不代表本体攻击。攻击速度：枪械、榴弹和重武器各有瞄准、装填与弹体飞行过程；弹丸传播独立于吉尔本人的位移，不同装备也不能共用一个速度。",
        resistance: "本体为训练人类，靠防具、战术、急救资源和经验生存。",
        sensing: "S.T.A.R.S./BSAA调查、拆解机关、危机判断和B.O.W.弱点识别强。",
        tactics: "擅长单兵求生、城市逃生、反生化作战和利用环境击杀大型敌人。",
        special: "S.T.A.R.S.训练、BSAA经验、反B.O.W.装备、病毒事件生还经验。",
        weakness: "本体脆弱，依赖弹药、补给和任务装备；不具备稳定超自然自愈。",
        setting: "按主系列后期BSAA特工吉尔综合记录。",
        basis: "worldbook只用于抽取吉尔·瓦伦丁姓名；定级依据Capcom官方入口和Resident Evil Wiki角色入口，重武器峰值与本体分开。"
      })
  })]);
})();
