(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["龙珠"];

  if (!work) {
    throw new Error("龙珠 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "cell",
      name: "沙鲁",
      en: "Cell",
      ja: "セル",
      affiliation: "人造人 / 沙鲁游戏",
      grade: "沙鲁篇最终 boss",
      appearances: ["正篇"],
      timelineStatus: "沙鲁游戏 / 完全体",
      aliases: [],
      fandomSlug: "Cell",
      evidenceLinks: [
        {
          type: "source",
          scope: "跨界战力参考",
          label: "VS Battles Wiki：Cell（Dragon Ball Z）",
          url: "https://vsbattles.fandom.com/wiki/Cell_%28Dragon_Ball_Z%29",
          lang: "en",
          authority: "cross-reference",
          medium: "cross-wiki",
          ratingEvidence: true,
          claim: "用于复核完全体沙鲁、超级完全体和太阳系级声明的跨界量级口径。"
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
          claim: "用于核对龙珠 Z 漫画连续性、沙鲁篇和作品整体量级口径。"
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
          claim: "用于核对人造人篇至沙鲁篇的角色、战斗和必杀技资料；太阳系破坏宣称仍按恒星级争议峰值处理。"
        }
      ],
      dimensions: dims({
        attack: ["行星级", "恒星级｜太阳系破坏宣称｜设定争议", "完全体沙鲁具行星级以上表现，太阳系级宣称按恒星级争议峰值。"],
        defense: ["行星级｜气防御｜争议", "恒星级｜再生核心｜争议", "承受高端气功并可从核心再生。"],
        movement: ["宇宙速度级", "亚光速｜争议", "高端Z战士速度。"],
        reaction: ["高超音速", "亚光速｜争议", "可应对超赛级交锋。"],
        vitality: ["行星级生命结构｜核心再生｜争议", "恒星级生命结构｜核心再生｜争议", "核心存在时可从严重破坏中恢复。"],
        healing: ["极速自愈", "瞬愈｜核心再生", "那美克星细胞提供强再生。"],
        energy: ["行星级能量｜气功｜争议", "恒星级能量｜争议", "高峰来自自称太阳系破坏级气功。"],
        energyRegen: ["快速回能", "极速回能｜再生后强化", "再生和赛亚人细胞可提升恢复。"]
      }),
      notes: notes({
        penetration: "主要按可见破坏与命中效果记录；特殊机制不直接抬高主攻击能级。",
        resistance: "防御、抗性、再生和特殊免疫分开记录，不把难杀直接换算为高防御。",
        special: "吸收进化、龟派气功、核心再生、赛亚人/那美克星细胞。",
        weakness: "存在资源、体力、条件、情报或本体弱点，已在峰值标签和依据中限制。",
        setting: "按当前初稿指定时间线记录，后续可按篇章拆分更细版本。",
        basis: "依据沙鲁游戏中完全体沙鲁与超赛悟饭战、核心再生和太阳系破坏宣称定级。"
      })
    })
  ]);
})();
