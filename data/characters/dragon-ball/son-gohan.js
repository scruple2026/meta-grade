(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["龙珠"];

  if (!work) {
    throw new Error("龙珠 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "son-gohan",
      name: "孙悟饭",
      en: "Son Gohan",
      ja: "孫悟飯",
      category: "主角团",
      affiliation: "Z战士",
      grade: "混血赛亚人 / 潜力解放",
      appearances: ["正篇"],
      timelineStatus: "龙珠Z后期 / 潜力解放",
      aliases: [],
      fandomSlug: "Gohan",
      evidenceLinks: [
        {
          type: "source",
          scope: "跨界战力参考",
          label: "VS Battles Wiki：Son Gohan（Dragon Ball Z）",
          url: "https://vsbattles.fandom.com/wiki/Son_Gohan_%28Dragon_Ball_Z%29",
          lang: "en",
          authority: "cross-reference",
          medium: "cross-wiki",
          ratingEvidence: true,
          claim: "用于复核悟饭沙鲁篇超二、布欧篇潜力解放和高端峰值的跨界量级口径。"
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
          claim: "用于核对龙珠 Z 漫画连续性、沙鲁篇/布欧篇和作品整体量级口径。"
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
          claim: "用于核对悟饭在沙鲁篇/布欧篇的角色、战斗和潜力解放相关资料；恒星级峰值仍按本站争议换算处理。"
        }
      ],
      dimensions: dims({
        attack: ["行星级｜沙鲁篇后期｜争议", "恒星级｜潜力解放｜争议", "沙鲁篇和布欧篇后期高峰远超行星级。"],
        defense: ["行星级｜气防御｜争议", "恒星级｜气防御｜争议", "气防御和混血赛亚人体质。"],
        movement: ["宇宙速度级", "亚光速｜争议", "高端Z战士速度争议。"],
        reaction: ["高超音速", "亚光速｜争议", "可参与沙鲁/布欧篇高端战斗。"],
        vitality: ["行星级生命结构｜气防御｜争议", "恒星级生命结构｜争议", "混血赛亚人体质和气防御。"],
        healing: ["无自愈", "常规自愈｜外部治疗", "依赖仙豆或治疗。"],
        energy: ["行星级能量｜沙鲁篇后期｜争议", "恒星级能量｜潜力解放｜争议", "气储量极高。"],
        energyRegen: ["快速回能", "快速回能｜气恢复", "高强度战斗后需恢复。"]
      }),
      notes: notes({
        penetration: "按可见破坏、命中效果和能力条件记录；特殊机制不直接抬高主攻击能级。",
        resistance: "防御、抗性、再生和特殊免疫分开记录。",
        special: "超级赛亚人2、潜力解放、龟派气功、气防御。",
        weakness: "存在体力、资源、条件、情报或本体弱点。",
        setting: "按当前初稿指定时间线记录，后续可按篇章拆分更细版本。",
        basis: "依据悟饭在沙鲁游戏和魔人布欧篇潜力解放后的高端战斗表现定级。"
      })
    })
  ]);
})();
