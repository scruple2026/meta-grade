(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["新世纪福音战士"];

  if (!work) {
    throw new Error("新世纪福音战士 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "yui-ikari",
      name: "碇唯",
      en: "Yui Ikari",
      ja: "碇ユイ",
      affiliation: "Gehirn / EVA初号机核心",
      grade: "研究者 / 初号机内在意志",
      appearances: ["回忆", "The End of Evangelion"],
      timelineStatus: "初号机核心 / 肉体消失后",
      aliases: ["Yui", "真嗣母亲", "初号机核心"],
      fandomSlug: "Yui_Ikari",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["不适用", "不适用｜初号机核心意志", "碇唯本体不以独立攻击角色出场，战斗表现由初号机条目承接。"],
        defense: ["不适用", "不适用｜初号机核心意志", "没有独立肉身防御面板。"],
        movement: ["不适用", "不适用", "作为初号机内在意志不按移动速度评级。"],
        reaction: ["不适用", "不适用｜核心意志", "不按常规反应速度评级。"],
        vitality: ["不适用", "不适用｜灵魂/核心状态", "生存状态特殊，不按肉身生命阈值评级。"],
        healing: ["不适用", "不适用", "无常规自愈意义。"],
        energy: ["不适用", "不适用｜初号机承载", "不作为独立能量池记录。"],
        energyRegen: ["不适用", "不适用", "无个人回能体系。"]
      }),
      notes: notes({
        penetration: "无独立攻击；初号机相关战斗由 EVA 初号机条目记录。",
        resistance: "存在形式与初号机核心相关，不等同独立可战斗肉身。",
        sensing: "通过初号机与真嗣的关联体现，非一般索敌。",
        tactics: "作为初号机内在意志和补完相关存在影响关键剧情，而非正面作战者。",
        special: "初号机核心、灵魂残留、与真嗣和补完计划的关键关联。",
        weakness: "缺少独立行动肉身，战斗表现依赖初号机和仪式语境。",
        setting: "按肉体消失后、初号机核心中的碇唯记录。",
        basis: "依据碇唯与初号机接触实验、初号机内在意志和旧剧场版结局关联记录为特殊非战斗面板。"
      })
    })
  ]);
})();
