(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["葬送的芙莉莲"];

  if (!work) {
    throw new Error("葬送的芙莉莲 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "demons",
      name: "普通魔族",
      en: "Demons",
      ja: "魔族",
      affiliation: "魔族",
      grade: "敌对种族总括 / 普通魔族样本",
      appearances: ["黄金乡篇", "全篇"],
      timelineStatus: "种族总括 / 非七崩贤平均样本",
      aliases: ["魔族样本", "大魔族", "普通魔族", "Demon", "Mazoku"],
      fandomSlug: "Demon",
      confidence: "review",
      evidenceType: ["官方漫画入口", "资料入口"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "official",
          scope: "作品入口",
          label: "小学馆 Sunday Webry：葬送のフリーレン",
          url: "https://websunday.net/work/708/",
          lang: "ja",
          authority: "official",
          medium: "publisher",
          ratingEvidence: false,
          claim: "用于核对《葬送的芙莉莲》漫画官方作品入口；魔族总括不单独作为高阶魔族量级依据。"
        },
        {
          type: "wiki",
          scope: "种族资料入口",
          label: "Frieren Wiki: Demon",
          url: "https://frieren.fandom.com/wiki/Demon",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于交叉核对魔族作为作品主要敌对种族、具人形外观和魔法亲和；普通样本不套用七崩贤或大魔族峰值。"
        }
      ],
      revisionNotes: ["从黄金乡篇 worldbook 的 enemy_魔族样本价值 key/comment 补入；不采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["墙级", "楼级｜魔法/个体差异", "普通魔族可用魔法造成对人和局部破坏；不套用马哈特/索莉塔尔。"],
        defense: ["墙级", "楼级｜魔力防御/个体差异", "魔族身体和魔力防御强于普通人类，个体差异大。"],
        movement: ["凡人速", "亚音速｜魔法/个体差异", "普通魔族机动依个体和魔法而变。"],
        reaction: ["凡人速", "亚音速｜魔力感知/个体差异", "具战斗本能和魔力感知，但不统一给高阶反应。"],
        vitality: ["强化凡体", "精锐韧体｜魔族体质", "普通魔族生命力强于人类，远低于七崩贤级个体。"],
        healing: ["缓慢自愈", "快速自愈｜魔族恢复｜个体差异", "恢复能力因个体不同，普通样本不按不死处理。"],
        energy: ["墙级能量", "楼级能量｜魔力/个体差异", "魔力资源普遍存在，但不等同顶级魔族。"],
        energyRegen: ["中速回能", "快速回能｜魔力恢复", "魔力可恢复，强度依个体而变。"]
      }),
      notes: notes({
        penetration: "以个体固有魔法、攻击魔法、欺骗和伏击为主；总括条目不代表所有魔族共享同一杀伤方式。",
        resistance: "魔族身体和魔力防御强于普通人，但会被反魔族魔法、解析、封印或高阶魔法克制。",
        sensing: "具魔力感知、语言欺骗和捕食/作战本能；对人类情感理解存在结构性缺陷。",
        tactics: "擅长用语言欺骗、伪装和个体魔法制造优势；普通样本战术复杂度低于大魔族和七崩贤。",
        special: "魔族种族特性、魔力、个体固有魔法、语言欺骗、反魔族协议相关样本价值。",
        weakness: "缺乏人类情感理解，易被针对性反魔族战术、魔力隐藏和解析策略利用。",
        setting: "按《葬送的芙莉莲》普通魔族/样本总括记录；马哈特、索莉塔尔等高阶个体另列。",
        basis: "worldbook只用于抽取魔族样本/普通魔族名称；定级依据公开作品入口和种族资料入口，按非七崩贤普通样本保守记录。"
      })
    })
  ]);
})();
