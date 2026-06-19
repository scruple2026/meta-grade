(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["名侦探柯南"];
  if (!work) throw new Error("名侦探柯南 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "kogoro-mouri",
    name: "毛利小五郎",
    en: "Kogoro Mouri",
    ja: "毛利 小五郎",
    aliases: ["Kogoro", "Mouri Kogoro", "沉睡的小五郎", "小五郎"],
    affiliation: "毛利侦探事务所 / 前警视厅刑警",
    grade: "私家侦探 / 前刑警",
    appearances: ["名侦探柯南"],
    timelineStatus: "主线综合 / 私家侦探",
    fandomSlug: "Kogoro_Mouri",
    confidence: "medium",
    evidenceType: ["官方角色入口", "角色资料入口", "worldbook名字索引"],
    sourceQuality: "entry",
    evidenceLinks: [{
      type: "official",
      scope: "官方角色入口",
      label: "YTV: 名探偵コナン キャラクター",
      url: "https://www.ytv.co.jp/conan/character/",
      lang: "ja",
      authority: "official",
      medium: "official-site",
      ratingEvidence: false,
      claim: "用于核对《名侦探柯南》动画官方角色入口。"
    }, {
      type: "wiki",
      scope: "角色资料入口",
      label: "Detective Conan World: Kogoro Mouri",
      url: "https://www.detectiveconanworld.com/wiki/Kogoro_Mouri",
      lang: "en",
      authority: "wiki",
      medium: "wiki",
      ratingEvidence: true,
      claim: "用于交叉核对毛利小五郎的私家侦探、前警察、柔道和射击相关资料。"
    }],
    revisionNotes: ["从缄默之秋 worldbook 的毛利小五郎 key/comment 补入；未采用 worldbook 正文描述。"],
    dimensions: dims({
        attack: ["凡人级", "砖级｜柔道/配枪｜训练/装备", "常态普通成年人；峰值来自柔道、警察训练和枪械。"],
        defense: ["凡人级", "凡人级｜成年人/警察训练", "无超常防御。"],
        movement: ["凡人速", "凡人速", "移动维持普通成年人尺度。"],
        reaction: ["凡人速", "亚音速｜刑警经验/射击", "危机反应和射击经验强于普通人。"],
        vitality: ["凡人肉身", "强化凡体｜成年人/警察训练", "成年人和训练者生命体量。"],
        healing: ["无自愈", "缓慢自愈｜医疗/休整", "恢复依赖普通医疗。"],
        energy: ["凡人能量", "砖级能量｜配枪/体力", "资源来自体力、枪械和现场工具。"],
        energyRegen: ["无回能", "缓慢回能｜补给/休息", "依赖休息和补给。"]
      }),
    notes: notes({
        penetration: "柔道、拳脚和配枪可制伏普通犯人，枪械为装备峰值。",
        resistance: "普通成年人肉身，无稳定防弹或超常抗性。",
        sensing: "刑警经验、现场观察和一定推理能力；常被柯南辅助放大。",
        tactics: "熟悉警方流程、询问和现场控制，认真状态下能发挥前刑警经验。",
        special: "前刑警训练、柔道、射击、私家侦探身份。",
        weakness: "常态判断不稳定，容易被麻醉针或误导影响；本体正面战斗力有限。",
        setting: "按主线综合的毛利小五郎记录。",
        basis: "worldbook只用于抽取毛利小五郎姓名；定级依据官方角色入口和Detective Conan World角色入口，侦探名声不转化为身体面板。"
      })
  })]);
})();
