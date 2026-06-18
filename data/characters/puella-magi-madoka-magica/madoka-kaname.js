(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["魔法少女小圆"];

  if (!work) {
    throw new Error("魔法少女小圆 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "madoka-kaname",
      name: "鹿目圆",
      en: "Madoka Kaname",
      ja: "鹿目まどか",
      affiliation: "见泷原中学 / 圆环之理",
      grade: "主角 / 魔法少女 / 圆环之理",
      appearances: ["TV动画"],
      timelineStatus: "TV结局 / 圆环之理峰值",
      aliases: ["小圆", "Madoka", "Ultimate Madoka", "圆神"],
      fandomSlug: "Madoka_Kaname",
      confidence: "disputed",
      evidenceType: ["角色页入口", "官方入口", "跨界参考", "高风险宇宙论"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "source",
          scope: "跨界战力参考",
          label: "VS Battles Wiki：Madoka Kaname",
          url: "https://vsbattles.fandom.com/wiki/Madoka_Kaname",
          lang: "en",
          authority: "cross-reference",
          medium: "cross-wiki",
          ratingEvidence: true,
          claim: "用于交叉复核 Ultimate Madoka、圆环之理和跨时间线/概念改写的高风险宇宙论口径；本站收束为无限级争议，不继续细分更高无限。"
        },
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Puella Magi Wiki：Madoka Kaname",
          url: "https://wiki.puella-magi.net/Madoka_Kaname",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对鹿目圆、魔法少女状态和TV结局圆环之理资料入口。"
        }
      ],
      defaultTimelineKey: "law-of-cycles",
      timelinePanels: [
        {
          key: "uncontracted",
          label: "见泷原 / 未契约",
          status: "普通中学生",
          dimensions: dims({
            attack: ["凡人级", "凡人级", "未契约时没有战斗魔法。"],
            defense: ["凡人级", "凡人级", "普通少女肉身。"],
            movement: ["凡人速", "凡人速", "普通人移动。"],
            reaction: ["凡人速", "凡人速", "普通人反应。"],
            vitality: ["凡人肉身", "凡人肉身", "普通人。"],
            healing: ["无自愈", "无自愈", "无魔法自愈。"],
            energy: ["凡人能量", "凡人能量", "无魔法少女能量池。"],
            energyRegen: ["中速回能", "中速回能", "普通体力恢复。"]
          }),
          notes: "不计入契约和TV结局。"
        },
        {
          key: "law-of-cycles",
          label: "TV结局 / 圆环之理",
          status: "Ultimate Madoka / 概念化峰值",
          dimensions: dims({
            attack: ["无资料", "无限级｜圆环之理｜宇宙论依赖｜争议", "概念化愿望作用于所有时间线魔女系统；收束为无限级争议，不比较更高无限。"],
            defense: ["无资料", "无限级｜概念存在｜宇宙论依赖｜争议", "圆环之理作为概念化存在，常规肉身防御不适用；按宇宙论争议峰值记录。"],
            movement: ["凡人速", "不适用｜圆环之理非移动", "概念化存在不按连续移动速度评级。"],
            reaction: ["凡人速", "不适用｜跨时间线概念作用", "跨时间线作用不等同常规反应速度。"],
            vitality: ["凡人肉身", "无限级生命结构｜概念存在｜宇宙论依赖｜争议", "生命体量从普通少女转为概念化存在，按高风险争议处理。"],
            healing: ["无自愈", "不适用｜概念改写", "圆环之理不是普通自愈。"],
            energy: ["凡人能量", "无限级能量｜圆环之理｜宇宙论依赖｜争议", "愿望与概念改写作用范围按非有限宇宙论收束。"],
            energyRegen: ["中速回能", "不适用｜概念存在", "概念化状态不按有限蓝条回复处理。"]
          }),
          notes: "当前主面板；无限档只用于圆环之理峰值。"
        }
      ],
      dimensions: dims({
        attack: ["无资料", "无限级｜圆环之理｜宇宙论依赖｜争议", "概念化愿望作用于所有时间线魔女系统；收束为无限级争议，不比较更高无限。"],
        defense: ["无资料", "无限级｜概念存在｜宇宙论依赖｜争议", "圆环之理作为概念化存在，常规肉身防御不适用；按宇宙论争议峰值记录。"],
        movement: ["凡人速", "不适用｜圆环之理非移动", "概念化存在不按连续移动速度评级。"],
        reaction: ["凡人速", "不适用｜跨时间线概念作用", "跨时间线作用不等同常规反应速度。"],
        vitality: ["凡人肉身", "无限级生命结构｜概念存在｜宇宙论依赖｜争议", "生命体量从普通少女转为概念化存在，按高风险争议处理。"],
        healing: ["无自愈", "不适用｜概念改写", "圆环之理不是普通自愈。"],
        energy: ["凡人能量", "无限级能量｜圆环之理｜宇宙论依赖｜争议", "愿望与概念改写作用范围按非有限宇宙论收束。"],
        energyRegen: ["中速回能", "不适用｜概念存在", "概念化状态不按有限蓝条回复处理。"]
      }),
      notes: notes({
        penetration: "圆环之理改写魔女系统，属于愿望/概念层面作用，不按普通箭矢破坏范围解释。",
        resistance: "概念化存在脱离普通肉身，但跨作品比较高度依赖宇宙论；不继续比较无限层级。",
        sensing: "可作用于跨时间线魔法少女命运，但这不是常规战斗索敌或无限反应速度。",
        tactics: "本体性格偏牺牲与救赎，圆环之理更像规则重写而非普通实战人格。",
        special: "魔法少女契约、愿望、圆环之理、魔女系统改写、概念化存在。",
        weakness: "无限档高度依赖TV结局愿望和宇宙论解释；普通未契约圆不具备战斗力。",
        setting: "主面板按TV结局 Ultimate Madoka / 圆环之理记录，未契约状态拆入时间线。",
        basis: "依据TV结局鹿目圆愿望与圆环之理设定，结合公开角色资料和跨界参考，保守收束为无限级争议。"
      })
    })
  ]);
})();
