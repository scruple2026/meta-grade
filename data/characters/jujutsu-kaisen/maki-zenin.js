(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) {
    throw new Error("咒术回战 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "maki-zenin",
      name: "禅院真希",
      en: "Maki Zenin",
      ja: "禪院真希",
      affiliation: "东京咒术高专 / 禅院家",
      grade: "主角团 / 天与咒缚",
      appearances: ["咒术回战0", "正篇漫画/动画", "禅院家肃清", "樱岛结界", "新宿决战"],
      timelineStatus: "新宿决战 / 完全天与咒缚觉醒后",
      aliases: ["天与咒缚", "Maki"],
      fandomSlug: "Maki_Zenin",
      defaultTimelineKey: "complete-restriction",
      timelinePanels: [
        {
          key: "jjk-zero-school",
          label: "高专早期 / 咒具使用者",
          status: "低咒力、依赖咒具与体术",
          dimensions: dims({
            attack: ["墙体级", "墙体级｜咒具", "早期主要靠咒具体术造成单体杀伤。"],
            defense: ["凡人级", "墙体级｜体术", "承伤高于常人但未完成天与咒缚。"],
            movement: ["亚音速", "亚音速", "体术机动优秀。"],
            reaction: ["亚音速", "亚音速", "战斗感强但尚未达到觉醒后感官。"],
            vitality: ["强化凡体", "强化凡体", "可带伤作战。"],
            healing: ["无自愈", "无自愈", "依赖外部治疗。"],
            energy: ["凡人能量", "凡人能量｜体能", "咒力极低，以体力为主。"],
            energyRegen: ["中速回能", "中速回能", "依赖休息恢复。"]
          }),
          notes: "不计入禅院家后完全觉醒和释魂刀峰值。"
        },
        {
          key: "complete-restriction",
          label: "新宿决战 / 完全天与咒缚",
          status: "零咒力、超常感官、释魂刀",
          dimensions: dims({
            attack: ["墙体级", "楼宇级｜释魂刀｜觉醒", "觉醒后肉体与咒具杀伤大幅提升；释魂刀按攻击性质处理。"],
            defense: ["墙体级", "楼宇级｜觉醒", "觉醒后肉体承伤和抗打击显著上升。"],
            movement: ["亚音速", "超音速｜觉醒", "完成天与咒缚后机动是核心优势。"],
            reaction: ["亚音速", "超音速｜觉醒", "可通过感官捕捉高速咒灵与术师战。"],
            vitality: ["强化凡体", "精锐韧体｜觉醒", "重伤承受力强，但没有反转术式再生。"],
            healing: ["无自愈", "缓慢自愈", "恢复依肉体素质和外部治疗，不是自我再生。"],
            energy: ["凡人能量", "墙体级能量｜觉醒体能", "完全觉醒后近乎无咒力，但能量总量仍按体力、肌耐力和连续作战持久度保守记录。"],
            energyRegen: ["中速回能", "中速回能", "无咒力回复体系；体力恢复依赖休息和外部治疗。"]
          }),
          notes: "当前主面板版本。"
        }
      ],
      dimensions: dims({
        attack: ["墙体级", "楼宇级｜释魂刀｜觉醒", "觉醒后肉体与咒具杀伤大幅提升；释魂刀按攻击性质处理。"],
        defense: ["墙体级", "楼宇级｜觉醒", "觉醒后肉体承伤和抗打击显著上升。"],
        movement: ["亚音速", "超音速｜觉醒", "完成天与咒缚后机动是核心优势。"],
        reaction: ["亚音速", "超音速｜觉醒", "可通过感官捕捉高速咒灵与术师战。"],
        vitality: ["强化凡体", "精锐韧体｜觉醒", "重伤承受力强，但没有反转术式再生。"],
        healing: ["无自愈", "缓慢自愈", "恢复依肉体素质和外部治疗，不是自我再生。"],
        energy: ["凡人能量", "墙体级能量｜觉醒体能", "完全觉醒后近乎无咒力，但能量总量仍按体力、肌耐力和连续作战持久度保守记录。"],
        energyRegen: ["中速回能", "中速回能", "无咒力回复体系；体力恢复依赖休息和外部治疗。"]
      }),
      notes: notes({
        penetration: "释魂刀可无视常规肉体硬度打击灵魂轮廓，属于高穿透咒具，不抬破坏规模。攻击速度：释魂刀随手臂、步法和接战距离完成，收招再攻与单次命中不能用移动速度替代。",
        resistance: "零咒力带来结界和感知判定异常；不代表免疫领域规则或特殊术式。",
        sensing: "零咒力完成后具备超常肉体感官，可捕捉空气、地形和咒灵运动细节；对纯规则术式仍需靠经验判断。",
        tactics: "近战判断冷静，擅长用咒具、地形和零咒力隐蔽性切入要害；缺少术式和远程资源使她更依赖接近路线。",
        special: "天与咒缚完成、零咒力、超常感官、咒具适性。",
        weakness: "缺少自身术式、咒力资源和反转术式；强依赖武器与近身。",
        setting: "常态按觉醒后真希记录，早期高专真希不另开版本。",
        basis: "依据禅院家肃清、樱岛结界和新宿决战中的肉体、感官、咒具表现保守定级。"
      })
    })
  ]);
})();
