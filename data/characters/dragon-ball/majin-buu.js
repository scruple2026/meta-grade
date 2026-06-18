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
        energyRegen: ["极速回能", "瞬时回能｜吸收/魔人体质｜条件｜争议", "再生和续航极强；吸收或魔人重组可在极短窗口补回战斗资源，但非无限且需条件。"]
      }),
      notes: notes({
        penetration: "魔人气功、身体伸缩、吸收、糖果光线和形态变化让布欧同时具备正面能量爆发、变形控制和夺取能力；星系级传闻按持续破坏争议处理，不并入稳定单发。",
        resistance: "魔人身体可从粉碎、液化和碎片状态高速重组，普通打穿或撕裂很难终结；彻底湮灭、封印、精神分裂/净化、吸收反制和能量耗尽仍能成为处理手段。",
        sensing: "魔人体质和气感知支持高端战斗定位，不同形态的智性和感知稳定性差异很大。",
        tactics: "能力组合丰富，吸收、糖果光线和再生能制造特殊胜利条件；形态性格差异导致战术从狡猾到本能化不等。",
        special: "魔人再生、吸收、糖果光线、气功、形态变化。",
        weakness: "多形态性格和战术稳定性差异巨大；糖果光线、吸收、再生和条件型瞬时回能都可被强能量、封印或更高层级压制反制，胖布欧/恶布欧/纯粹布欧不应混成一个无条件最强状态。",
        setting: "按魔人布欧篇多形态综合记录，后续可拆胖布欧、恶布欧、纯粹布欧；当前主面板把再生和吸收写作特殊权能，不把传闻直接上调到星系级。",
        basis: "依据魔人布欧篇中胖布欧、恶布欧、纯粹布欧等综合表现保守定级，形态差异后续可拆。"
      })
    })
  ]);
})();
