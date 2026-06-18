(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["葬送的芙莉莲"];

  if (!work) {
    throw new Error("葬送的芙莉莲 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "lekture",
      name: "莱克蒂蕾",
      en: "Lektüre",
      ja: "レクテューレ",
      affiliation: "人类魔法使",
      grade: "魔法使 / 黄金乡前史相关人物",
      appearances: ["黄金乡篇回忆"],
      timelineStatus: "黄金乡前史 / 回忆线",
      aliases: ["Lekture", "Lektüre", "レクテューレ"],
      fandomSlug: "Lekt%C3%BCre",
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
          claim: "用于核对《葬送的芙莉莲》漫画官方作品入口；具体战斗量级仍按角色表现保守处理。"
        },
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Frieren Wiki: Lektüre",
          url: "https://frieren.fandom.com/wiki/Lekt%C3%BCre",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于交叉核对莱克蒂蕾为黄金乡篇回忆线相关魔法使；缺少稳定战斗表现时不强行抬档。"
        }
      ],
      revisionNotes: ["从黄金乡篇 worldbook 的 comment/key 姓名池补入；不采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["墙级", "楼级｜魔法｜资料不足", "作为魔法使可有对人和局部破坏输出，但缺少完整战斗面板。"],
        defense: ["凡人级", "墙级｜防御魔法｜资料不足", "本体人类，防御依赖魔法。"],
        movement: ["凡人速", "亚音速｜魔法辅助｜资料不足", "缺少稳定机动表现，按魔法使保守记录。"],
        reaction: ["凡人速", "亚音速｜魔法使经验｜资料不足", "战斗反应资料不足。"],
        vitality: ["强化凡体", "精锐韧体｜魔法保护｜资料不足", "本体人类，生命阈值依赖防护魔法。"],
        healing: ["无自愈", "缓慢自愈｜治疗/休整", "无高速自愈证据。"],
        energy: ["墙级能量", "楼级能量｜魔力｜资料不足", "魔力规模缺少明确展示，保守记录。"],
        energyRegen: ["中速回能", "快速回能｜魔力恢复｜资料不足", "魔力可恢复但缺少高强度续航细节。"]
      }),
      notes: notes({
        penetration: "以魔法使输出和术式处理为主，资料不足时不扩张到黄金乡顶级战斗档。",
        resistance: "本体人类，防御依赖魔法；面对大魔族和特殊魔法风险高。",
        sensing: "具备魔力感知和魔法使知识，但无稳定远距索敌资料。",
        tactics: "作为回忆线魔法使，更多承担黄金乡前史和封印/魔法背景信息，完整战斗策略资料不足。",
        special: "魔法使能力、黄金乡前史相关信息。",
        weakness: "战斗表现资料少，本体脆弱；不应把黄金乡篇其他高阶角色表现套入。",
        setting: "按黄金乡篇回忆线莱克蒂蕾记录。",
        basis: "worldbook只用于抽取莱克蒂蕾姓名；定级依据公开作品入口和角色资料入口，因战斗表现不足而保守记录。"
      })
    })
  ]);
})();
