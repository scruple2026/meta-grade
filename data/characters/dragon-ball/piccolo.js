(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["龙珠"];

  if (!work) {
    throw new Error("龙珠 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "piccolo",
      name: "比克",
      en: "Piccolo",
      ja: "ピッコロ",
      category: "主角团",
      affiliation: "Z战士 / 那美克星人",
      grade: "那美克星战士",
      appearances: ["正篇"],
      timelineStatus: "龙珠Z沙鲁篇后 / 同化后",
      aliases: [],
      fandomSlug: "Piccolo",
      evidenceLinks: [
        {
          type: "source",
          scope: "跨界战力参考",
          label: "VS Battles Wiki：Piccolo（Dragon Ball）",
          url: "https://vsbattles.fandom.com/wiki/Piccolo_%28Dragon_Ball%29",
          lang: "en",
          authority: "cross-reference",
          medium: "cross-wiki",
          ratingEvidence: true,
          claim: "用于复核比克与神融合、再生和龙珠 Z 后期支援战力的跨界量级口径。"
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
          claim: "用于核对龙珠 Z 漫画连续性、那美克星人设定和作品整体量级口径。"
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
          claim: "用于核对比克、那美克星人、同化和Z篇战斗资料；气防御与再生不直接抬成更高肉身硬度。"
        }
      ],
      dimensions: dims({
        attack: ["行星级｜同化后｜争议", "行星级｜魔贯光杀炮/同化后｜争议", "早期已有月球破坏表现，Z后期同化后进一步提升。"],
        defense: ["行星级｜气防御｜争议", "行星级｜气防御｜争议", "气防御和那美克星人体质。"],
        movement: ["宇宙速度级", "亚光速｜争议", "高端Z战士速度争议。"],
        reaction: ["高超音速", "亚光速｜争议", "可参与高端Z战士战斗。"],
        vitality: ["行星级生命结构｜气防御｜争议", "行星级生命结构｜再生｜争议", "那美克星人可再生肢体，但核心受损仍危险。"],
        healing: ["快速自愈", "极速自愈｜肢体再生", "可快速再生肢体，消耗气。"],
        energy: ["行星级能量｜同化后｜争议", "行星级能量｜同化后｜争议", "气储量极高。"],
        energyRegen: ["快速回能", "快速回能", "气恢复较快但非无限。"]
      }),
      notes: notes({
        penetration: "按可见破坏、命中效果和能力条件记录；特殊机制不直接抬高主攻击能级。",
        resistance: "防御、抗性、再生和特殊免疫分开记录。",
        special: "魔贯光杀炮、巨大化、肢体再生、同化、气功。",
        weakness: "存在体力、资源、条件、情报或本体弱点。",
        setting: "按当前初稿指定时间线记录，后续可按篇章拆分更细版本。",
        basis: "依据比克从赛亚人篇到沙鲁篇同化后的气功、再生和战斗表现定级。"
      })
    })
  ]);
})();
