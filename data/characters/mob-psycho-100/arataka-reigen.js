(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["灵能百分百"];

  if (!work) {
    throw new Error("灵能百分百 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "arataka-reigen",
      name: "灵幻新隆",
      en: "Arataka Reigen",
      ja: "霊幻新隆",
      affiliation: "灵能商谈所",
      grade: "灵能咨询师 / 普通人",
      appearances: ["正篇", "爪世界支配篇"],
      timelineStatus: "正篇 / 非超能力者",
      aliases: ["灵幻", "Reigen", "师匠"],
      fandomSlug: "Arataka_Reigen",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["凡人级", "砖级｜盐/体术/道具", "本人没有稳定超能力，输出主要是普通人体术和道具。"],
        defense: ["凡人级", "砖级｜运气/保护", "本体是普通人，常依赖茂夫或话术脱险。"],
        movement: ["凡人速", "凡人速", "普通成年人水平。"],
        reaction: ["凡人速", "凡人速", "依靠临场判断而非超常反应。"],
        vitality: ["凡人肉身", "强化凡体", "普通人承伤上限。"],
        healing: ["无自愈", "无自愈", "依赖医疗。"],
        energy: ["凡人能量", "砖级能量｜道具/体力", "没有超能力能量池。"],
        energyRegen: ["中速回能", "中速回能", "按普通体力恢复。"]
      }),
      notes: notes({
        penetration: "主要依靠话术、盐、按摩、普通攻击和临场道具，不具备稳定破甲能力。攻击速度：灵幻的拳脚、撒盐和按摩均随普通人体动作完成，临场道具还要先取用；话术没有物理传播意义，不能与这些近身动作合并评级。",
        resistance: "本体普通人，优势来自信息差、心理战和茂夫信任，不是物理防御。",
        sensing: "没有灵视能力，但观察人心、识破骗局和判断现场气氛极强。",
        tactics: "心理战、谈判、危机降级和保护茂夫心态是核心战力价值；可通过语言影响战局。",
        special: "高超话术、危机处理、假灵能力者身份、社会工程式解决问题。",
        weakness: "没有超能力，面对真超能力直接攻击极脆弱；需要队友、环境或对方犹豫。",
        setting: "按正篇普通人灵幻记录，不把临时借用茂夫力量当作稳定能力。",
        basis: "依据灵幻作为非超能力者在除灵、爪组织事件和茂夫心理支援中的表现保守定级。"
      })
    })
  ]);
})();
