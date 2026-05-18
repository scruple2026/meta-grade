(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["龙珠"];

  if (!work) {
    throw new Error("龙珠 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "son-goku",
      name: "孙悟空",
      en: "Son Goku",
      ja: "孫悟空",
      affiliation: "Z战士",
      grade: "主角 / 赛亚人",
      appearances: ["正篇"],
      timelineStatus: "龙珠Z后期 / 不含龙珠超",
      aliases: [],
      fandomSlug: "Goku",
      evidenceLinks: [
        {
          type: "source",
          scope: "跨界战力参考",
          label: "VS Battles Wiki：Son Goku（Dragon Ball Z）",
          url: "https://vsbattles.fandom.com/wiki/Son_Goku_%28Dragon_Ball_Z%29",
          lang: "en",
          authority: "cross-reference",
          medium: "cross-wiki",
          ratingEvidence: true,
          claim: "用于复核龙珠 Z 悟空各篇章、超级赛亚人和超赛3峰值的跨界量级口径。"
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
          claim: "用于核对龙珠 Z 漫画连续性、变身倍率和作品整体量级口径。"
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
          claim: "用于核对龙珠Z前后篇章、必杀技、战斗索引和角色资料；行星级/恒星级等跨界档位仍是本站保守换算而非官方等级表。"
        }
      ],
      defaultTimelineKey: "buu-super-saiyan-3",
      timelinePanels: [
        {
          key: "saiyan-kaioken",
          label: "赛亚人篇 / 界王拳",
          status: "界王拳与元气弹峰值",
          dimensions: dims({
            attack: ["大陆级", "行星级｜界王拳/元气弹｜争议", "能与赛亚人篇高端战力交锋，峰值保守标争议。"],
            defense: ["大陆级｜气防御｜争议", "行星级｜气防御｜争议", "靠气防御和肉体承受高端打击。"],
            movement: ["高超音速", "宇宙速度级｜界王拳｜争议", "界王拳提高爆发速度。"],
            reaction: ["高超音速", "宇宙速度级｜争议", "可应对赛亚人篇高速交锋。"],
            vitality: ["大陆级生命阈值｜气防御｜争议", "行星级生命结构｜气防御｜争议", "生命阈值高度依赖气防御。"],
            healing: ["无自愈", "常规自愈｜仙豆/外部", "自身无稳定再生。"],
            energy: ["大陆级能量｜界王拳｜争议", "行星级能量｜界王拳/元气弹｜争议", "元气弹含外部募集能量。"],
            energyRegen: ["快速回能", "快速回能｜气恢复", "爆发后需恢复。"]
          }),
          notes: "不计入超级赛亚人。"
        },
        {
          key: "namek-super-saiyan",
          label: "那美克星篇 / 超级赛亚人",
          status: "初次超级赛亚人",
          dimensions: dims({
            attack: ["行星级｜超级赛亚人｜争议", "行星级｜超级赛亚人｜争议", "与弗利萨最终形态交锋。"],
            defense: ["行星级｜气防御｜争议", "行星级｜气防御｜争议", "气防御和赛亚人体质。"],
            movement: ["宇宙速度级", "亚光速｜争议", "高速飞行和战斗速度争议。"],
            reaction: ["高超音速", "亚光速｜争议", "高端反应保守标争议。"],
            vitality: ["行星级生命结构｜气防御｜争议", "行星级生命结构｜赛亚人｜气防御｜争议", "承伤依赖气防御。"],
            healing: ["无自愈", "常规自愈｜仙豆/外部", "自身无稳定再生。"],
            energy: ["行星级能量｜超级赛亚人｜争议", "行星级能量｜超级赛亚人｜争议", "气总量显著提升。"],
            energyRegen: ["快速回能", "快速回能｜气恢复", "变身和伤势影响续航。"]
          }),
          notes: "不并入沙鲁篇、布欧篇后续提升。"
        },
        {
          key: "buu-super-saiyan-3",
          label: "魔人布欧篇 / 超赛3",
          status: "龙珠Z后期主面板",
          dimensions: dims({
            attack: ["行星级｜龙珠Z后期｜争议", "恒星级｜龙珠Z后期｜争议", "按Z后期和超赛形态保守记录，不把所有后续超系列上限并入。"],
            defense: ["行星级｜气防御｜争议", "恒星级｜气防御｜争议", "高强度气防御和赛亚人体质。"],
            movement: ["宇宙速度级", "亚光速｜争议", "高速飞行与战斗速度争议大，瞬间移动另写特殊位移。"],
            reaction: ["高超音速", "亚光速｜争议", "高端战斗反应极高，但不把瞬间移动当速度。"],
            vitality: ["行星级生命结构｜气防御｜争议", "恒星级生命结构｜赛亚人｜争议", "赛亚人身体和气防御显著提升生命阈值。"],
            healing: ["无自愈", "常规自愈｜仙豆/外部", "自身无稳定再生，常靠仙豆和治疗。"],
            energy: ["行星级能量｜超级赛亚人｜争议", "恒星级能量｜超级赛亚人｜争议", "气总量极高，需区分形态。"],
            energyRegen: ["快速回能", "快速回能｜气恢复", "休息、仙豆和变身管理影响回能。"]
          }),
          notes: "当前主面板版本。"
        }
      ],
      dimensions: dims({
        attack: ["行星级｜龙珠Z后期｜争议", "恒星级｜龙珠Z后期｜争议", "按Z后期和超赛形态保守记录，不把所有后续超系列上限并入。"],
        defense: ["行星级｜气防御｜争议", "恒星级｜气防御｜争议", "高强度气防御和赛亚人体质。"],
        movement: ["宇宙速度级", "亚光速｜争议", "高速飞行与战斗速度争议大，瞬间移动另写特殊位移。"],
        reaction: ["高超音速", "亚光速｜争议", "高端战斗反应极高，但不把瞬间移动当速度。"],
        vitality: ["行星级生命结构｜气防御｜争议", "恒星级生命结构｜赛亚人｜争议", "赛亚人身体和气防御显著提升生命阈值。"],
        healing: ["无自愈", "常规自愈｜仙豆/外部", "自身无稳定再生，常靠仙豆和治疗。"],
        energy: ["行星级能量｜超级赛亚人｜争议", "恒星级能量｜超级赛亚人｜争议", "气总量极高，需区分形态。"],
        energyRegen: ["快速回能", "快速回能｜气恢复", "休息、仙豆和变身管理影响回能。"]
      }),
      notes: notes({
        penetration: "龟派气功、界王拳爆发、超赛形态和超赛3气功主打高密度能量束、近战气压制与终结型爆发；元气弹含外部募集能量，瞬间移动只改变位置和先手角度，不抬主破坏档。",
        resistance: "赛亚人体质与气防御让悟空能承受Z后期高端气功和近战，但肉身硬度高度依赖气；毒、窒息、偷袭、气耗尽、心脏病等非正面破坏因素不能被气防御简单抵消。",
        sensing: "气感知是核心，可远距定位强者并作为瞬间移动锚点；瞬间移动需要可锁定气息，不等同连续速度。",
        tactics: "战斗直觉和临场学习极强，善于在交手中适应节奏并升级形态；好战性格会主动给对手机会。",
        special: "龟派气功、界王拳、超级赛亚人、元气弹、瞬间移动。",
        weakness: "超赛3耗能极高，元气弹需要募集和蓄力，瞬间移动需要感知气息；悟空常因战斗性格给对手窗口，且自身没有再生。",
        setting: "按龙珠Z魔人布欧篇后期版本记录，不含《龙珠超》神之气、自在极意和后续剧场版形态；赛亚人篇、那美克星和布欧篇已拆入时间线。",
        basis: "依据龙珠Z时期悟空与弗利萨、沙鲁、魔人布欧相关高端战斗表现定级；超系列需另拆版本。"
      })
    })
  ]);
})();
