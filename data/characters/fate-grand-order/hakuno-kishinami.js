(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Grand Order"];

  if (!work) {
    throw new Error("Fate/Grand Order work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "hakuno-kishinami",
      name: "岸波白野",
      en: "Hakuno Kishinami",
      ja: "岸波白野",
      affiliation: "月之圣杯战争 / 迦勒底召唤",
      grade: "御主 / 月之圣杯战争胜者",
      appearances: ["Fate/Grand Order", "Fate/EXTRA"],
      timelineStatus: "FGO/EXTRA 联动语境",
      aliases: ["岸波", "白野", "ザビ", "扎比", "Hakuno", "Hakunon"],
      fandomSlug: "Hakuno_Kishinami",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "TYPE-MOON Wiki: Hakuno Kishinami",
          url: "https://typemoon.fandom.com/wiki/Hakuno_Kishinami",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对岸波白野、Fate/EXTRA 主角、月之圣杯战争、FGO/EXTRA 联动语境和御主定位。"
        }
      ],
      revisionNotes: [
        "从型月DLC worldbook 的岸波白野 key/comment 补入；未采用 worldbook 正文描述。",
        "男女岸波白野合并为一个角色条目；不把契约从者和 Moon Cell 环境全量折算进本体面板。"
      ],
      dimensions: dims({
        attack: ["凡人级", "砖级｜礼装/术式支援", "本体不以直接输出为主，峰值来自御主支援和环境资源。"],
        defense: ["凡人级", "砖级｜礼装/Moon Cell环境", "本体防御有限，依赖礼装、契约从者和环境。"],
        movement: ["凡人速", "凡人速", "缺少稳定超常移动表现。"],
        reaction: ["凡人速", "凡人速｜御主判断", "战场判断和精神韧性强，但身体反应不等同从者。"],
        vitality: ["凡人肉身", "强化凡体｜Moon Cell/特殊存在｜争议", "存在方式随 EXTRA 语境变化，但不写成高生命结构。"],
        healing: ["无自愈", "缓慢自愈｜环境/支援", "自身没有稳定自愈体系。"],
        energy: ["凡人能量", "砖级能量｜御主资源/礼装", "个人资源有限，主要价值是契约、选择和指挥。"],
        energyRegen: ["中速回能", "中速回能｜休整/环境支援", "按御主资源恢复处理。"]
      }),
      notes: notes({
        penetration: "自身攻击很低，主要通过御主支援、礼装和契约从者形成战术效果。",
        resistance: "精神韧性和环境适应突出，但本体缺少从者级防御。",
        sensing: "依赖 Moon Cell/战场信息、契约从者反馈和御主判断。",
        tactics: "强在选择、适应、从者协同和在极端规则战中持续推进。",
        special: "月之圣杯战争、御主契约、Fate/EXTRA 主角、FGO/EXTRA 联动语境。",
        weakness: "脱离从者和环境支援后直接战斗能力有限。",
        setting: "按 FGO/EXTRA 联动语境记录，男女岸波白野合并为同一条。",
        basis: "worldbook只用于抽取岸波白野姓名；定级依据公开角色资料入口，契约从者和Moon Cell环境不折算成本体主档。"
      })
    })
  ]);
})();
