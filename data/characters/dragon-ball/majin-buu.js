(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["龙珠"];

  if (!work) {
    throw new Error("龙珠 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "majin-buu",
      name: "魔人布欧",
      en: "Majin Buu",
      ja: "魔人ブウ",
      category: "最终 boss",
      affiliation: "魔人",
      grade: "魔人布欧篇最终 boss",
      appearances: ["正篇"],
      timelineStatus: "魔人布欧篇 / 多形态综合",
      aliases: [],
      fandomSlug: "Majin_Buu",
      evidenceLinks: [
        {
          type: "source",
          scope: "跨界战力参考",
          label: "VS Battles Wiki：Majin Buu",
          url: "https://vsbattles.fandom.com/wiki/Majin_Buu",
          lang: "en",
          authority: "cross-reference",
          medium: "cross-wiki",
          ratingEvidence: true,
          claim: "用于复核魔人布欧多形态、再生、吸收和布欧篇峰值的跨界量级口径。"
        },
        {
          type: "source",
          scope: "作品量级参考",
          label: "VS Battles Wiki：Dragon Ball",
          url: "https://vsbattles.fandom.com/wiki/Dragon_Ball",
          lang: "en",
          authority: "cross-reference",
          medium: "cross-wiki",
          ratingEvidence: true,
          claim: "用于核对龙珠 Z 漫画连续性、布欧篇和作品整体量级口径。"
        },
        {
          type: "setting",
          scope: "日文官方设定书",
          label: "集英社：ドラゴンボール完全版公式ガイド LANDMARK / FOREVER",
          url: "https://books.shueisha.co.jp/items/contents_amp.html?isbn=4-08-873702-4",
          citation: "鳥山明『ドラゴンボール完全版公式ガイド Dragonball LANDMARK 少年編〜フリーザ編』集英社, 2003年, ISBN 978-4-08-873478-1；鳥山明ほか『ドラゴンボール完全版公式ガイド Dragonball FOREVER 人造人間編〜魔人ブウ編』集英社, 2004年, ISBN 4-08-873702-4。",
          lang: "ja",
          authority: "official",
          medium: "databook",
          ratingEvidence: true,
          claim: "用于核对魔人布欧篇、角色资料和战斗索引；星系级传闻不直接入主档，恒星级峰值继续标争议。"
        }
      ],
      dimensions: dims({
        attack: ["行星级", "恒星级｜持续破坏/形态差异｜争议", "多形态布欧具行星破坏表现，星系级传闻按持续破坏争议不直接入主档。"],
        defense: ["行星级｜魔人再生｜争议", "恒星级｜魔人再生｜争议", "魔人身体可从粉碎级损伤恢复。"],
        movement: ["宇宙速度级", "亚光速｜争议", "高端Z战士速度。"],
        reaction: ["高超音速", "亚光速｜争议", "可与悟空、贝吉塔等高端交锋。"],
        vitality: ["行星级生命结构", "恒星级生命结构｜魔人再生｜争议", "死亡条件复杂，需要彻底湮灭或特殊处理。"],
        healing: ["瞬愈", "瞬愈｜全身再生", "可快速从碎片、烟雾化等状态恢复。"],
        energy: ["行星级能量｜魔人能量｜争议", "恒星级能量｜争议", "气与魔人能量极高。"],
        energyRegen: ["极速回能", "极速回能｜魔人体质", "再生和续航极强，但非无限。"]
      }),
      notes: notes({
        penetration: "主要按可见破坏与命中效果记录；特殊机制不直接抬高主攻击能级。",
        resistance: "防御、抗性、再生和特殊免疫分开记录，不把难杀直接换算为高防御。",
        special: "魔人再生、吸收、糖果光线、气功、形态变化。",
        weakness: "存在资源、体力、条件、情报或本体弱点，已在峰值标签和依据中限制。",
        setting: "按当前初稿指定时间线记录，后续可按篇章拆分更细版本。",
        basis: "依据魔人布欧篇中胖布欧、恶布欧、纯粹布欧等综合表现保守定级，形态差异后续可拆。"
      })
    })
  ]);
})();
