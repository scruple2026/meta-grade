(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["在地下城寻求邂逅是否搞错了什么"];

  if (!work) {
    throw new Error("DanMachi work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "syr-flova",
      name: "希儿·福罗瓦",
      en: "Syr Flova",
      ja: "シル・フローヴァ",
      affiliation: "丰饶的女主人 / 芙蕾雅关联",
      grade: "酒馆店员 / 隐藏身份",
      appearances: ["异端儿篇"],
      timelineStatus: "异端儿篇 / 酒馆店员身份",
      aliases: ["希儿", "Syr", "Syr Flover", "芙蕾雅"],
      fandomSlug: "Syr_Flova",
      confidence: "review",
      evidenceType: ["官方角色页", "角色页入口", "身份剧透"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["凡人级", "凡人级｜酒馆身份", "希儿身份下不按直接战斗角色处理。"],
        defense: ["凡人级", "凡人级｜酒馆身份", "公开身份缺少稳定战斗防护表现。"],
        movement: ["凡人速", "凡人速", "日常行动速度。"],
        reaction: ["凡人速", "凡人速", "不以正面战斗反应为主。"],
        vitality: ["凡人肉身", "凡人肉身", "酒馆店员身份下按普通本体处理。"],
        healing: ["无自愈", "无自愈", "没有稳定自愈表现。"],
        energy: ["不适用｜女神权能不入主表", "不适用｜女神权能不入主表", "隐藏身份相关权能写入特殊项，不作为希儿身份能量池。"],
        energyRegen: ["不适用｜女神权能不入主表", "不适用｜女神权能不入主表", "无可量化回能面板。"]
      }),
      notes: notes({
        penetration: "希儿身份下直接杀伤低；隐藏身份涉及魅惑和神格影响，但不写入主表攻防。",
        resistance: "公开身份抗性很低，真正风险来自身份、情报和势力背景。",
        sensing: "社交洞察和对贝尔的关注远高于普通店员。",
        tactics: "擅长情绪牵引、社交布局和借势，不是正面战斗型。",
        special: "隐藏身份、美神魅惑、芙蕾雅眷族关联、情报与社交影响。",
        weakness: "希儿身份下自限明显；神格权能受下界规则和剧情身份限制。",
        setting: "按异端儿篇希儿公开身份记录，隐藏身份作为剧透机制项处理。",
        basis: "worldbook只用于抽取希儿姓名；定级依据官方角色入口与DanMachi Wiki资料入口，隐藏身份不直接提高希儿主面板。"
      })
    })
  ]);
})();
