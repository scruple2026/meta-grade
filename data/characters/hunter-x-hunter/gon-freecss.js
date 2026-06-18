(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["全职猎人"];

  if (!work) {
    throw new Error("全职猎人 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "gon-freecss",
      name: "杰·富力士",
      en: "Gon Freecss",
      ja: "ゴン＝フリークス",
      affiliation: "猎人协会",
      grade: "主角 / 强化系念能力者",
      appearances: ["猎人考试篇", "贪婪之岛篇", "蚁王篇"],
      timelineStatus: "蚁王篇 / 含成人杰一次性峰值",
      aliases: ["小杰", "猜猜拳"],
      fandomSlug: "Gon_Freecss",
      evidenceLinks: [
        {
          type: "official",
          scope: "日文官方动画入口",
          label: "日本电视台「HUNTER×HUNTER」Cast/Staff",
          url: "https://www.ntv.co.jp/hunterhunter/caststaff/index.html",
          lang: "ja",
          authority: "official",
          medium: "official-site",
          ratingEvidence: false,
          claim: "用于核对2011动画官方入口；念能力、成人杰和蚁篇高风险峰值仍需原作卷话或公式书补证。"
        }
      ],
      defaultTimelineKey: "chimera-ant-adult-gon",
      timelinePanels: [
        {
          key: "hunter-exam-heavens-arena",
          label: "猎人考试至天空竞技场",
          status: "念能力入门前后",
          dimensions: dims({
            attack: ["砖级", "墙级｜念强化", "早期以身体能力和念强化入门为主。"],
            defense: ["砖级", "墙级｜念防御", "念防御刚成型。"],
            movement: ["亚音速", "亚音速", "明显超越常人。"],
            reaction: ["亚音速", "亚音速", "近战反应优秀。"],
            vitality: ["强化凡体", "强化凡体", "身体素质强但仍是人类。"],
            healing: ["无自愈", "无自愈", "无主动自愈。"],
            energy: ["凡人能量", "墙级能量｜念能力", "念量有限。"],
            energyRegen: ["中速回能", "中速回能", "需休息恢复。"]
          }),
          notes: "不计入猜猜拳成熟和成人杰。"
        },
        {
          key: "greed-island",
          label: "贪婪之岛 / 猜猜拳成熟",
          status: "强化系必杀技成型",
          dimensions: dims({
            attack: ["墙级", "房屋级｜猜猜拳", "集中蓄力打击提升单体破坏。"],
            defense: ["墙级", "房屋级｜坚/硬", "念防御更成熟。"],
            movement: ["亚音速", "亚音速", "高速近战但不按音速。"],
            reaction: ["亚音速", "亚音速", "念战反应稳定。"],
            vitality: ["强化凡体", "精锐韧体｜念强化", "念强化提高承伤。"],
            healing: ["无自愈", "无自愈", "无主动自愈。"],
            energy: ["墙级能量", "房屋级能量｜猜猜拳", "必杀技消耗念量。"],
            energyRegen: ["中速回能", "中速回能", "可休息恢复念。"]
          }),
          notes: "作为蚁王篇前主力状态。"
        },
        {
          key: "chimera-ant-adult-gon",
          label: "蚁王篇 / 成人杰一次性",
          status: "极端誓约换取峰值",
          dimensions: dims({
            attack: ["墙级", "街区级｜成人杰｜一次性｜誓约", "常态猜猜拳为局部重击；成人杰是极端誓约换来的不可持续峰值。"],
            defense: ["墙级", "街区级｜成人杰｜一次性", "常态防御依赖坚与硬；成人杰体能大幅提高但代价极端。"],
            movement: ["亚音速", "超音速｜成人杰｜争议", "常态高速移动保守按亚音速；成人杰仅作峰值争议。"],
            reaction: ["亚音速", "超音速｜成人杰｜争议", "念战反应强，但不把视觉夸张抬成光速。"],
            vitality: ["强化凡体", "精锐韧体｜念强化", "念强化与意志支撑重伤行动。"],
            healing: ["无自愈", "无自愈", "无主动自愈，成人杰后反而造成严重损伤。"],
            energy: ["墙级能量", "街区级能量｜成人杰｜誓约", "念量峰值来自极端誓约，不代表常态资源池。"],
            energyRegen: ["中速回能", "快速回能｜爆发后不可持续", "常态可恢复念，誓约峰值不可持续。"]
          }),
          notes: "当前主面板版本。"
        }
      ],
      dimensions: dims({
        attack: ["墙级", "街区级｜成人杰｜一次性｜誓约", "常态猜猜拳为局部重击；成人杰是极端誓约换来的不可持续峰值。"],
        defense: ["墙级", "街区级｜成人杰｜一次性", "常态防御依赖坚与硬；成人杰体能大幅提高但代价极端。"],
        movement: ["亚音速", "超音速｜成人杰｜争议", "常态高速移动保守按亚音速；成人杰仅作峰值争议。"],
        reaction: ["亚音速", "超音速｜成人杰｜争议", "念战反应强，但不把视觉夸张抬成光速。"],
        vitality: ["强化凡体", "精锐韧体｜念强化", "念强化与意志支撑重伤行动。"],
        healing: ["无自愈", "无自愈", "无主动自愈，成人杰后反而造成严重损伤。"],
        energy: ["墙级能量", "街区级能量｜成人杰｜誓约", "念量峰值来自极端誓约，不代表常态资源池。"],
        energyRegen: ["中速回能", "快速回能｜爆发后不可持续", "常态可恢复念，誓约峰值不可持续。"]
      }),
      notes: notes({
        penetration: "猜猜拳把强化系念集中到拳、剪、布三种输出，主打单点破甲和近身爆发；成人杰峰值是极端誓约，不代表可反复使用。",
        resistance: "念防御对物理攻击有效，但精神、毒、规则能力另算。",
        sensing: "念能力基础、野性直觉和强化系近战经验提供威胁感知；成人杰峰值不代表常态索敌扩大。",
        tactics: "早期战术经验不足但学习速度快，擅长用猜猜拳猜测和意志压迫逼迫对手选择；极端誓约是代价型破局而非可复用策略。",
        special: "念能力、强化系、猜猜拳、极端誓约成人形态。",
        weakness: "战术经验早期不足，成人杰峰值代价极端且不可反复。",
        setting: "按蚁王篇前后小杰记录；成人杰只作为一次性峰值。",
        basis: "依据小杰在猎人考试、贪婪之岛、蚁王篇与尼飞彼多相关战斗中的念量和誓约表现定级。"
      })
    })
  ]);
})();
