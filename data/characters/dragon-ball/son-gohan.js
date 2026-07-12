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
      defaultTimelineKey: "buu-ultimate",
      timelinePanels: [
        {
          key: "namek-frieza",
          label: "那美克星篇 / 幼年悟饭",
          status: "潜力爆发仍不稳定",
          dimensions: dims({
            attack: ["街区级", "行星级｜潜力爆发｜争议", "幼年悟饭有短时爆发，但稳定性不足。"],
            defense: ["街区级", "行星级｜气防御｜争议", "气防御随情绪爆发提高。"],
            movement: ["超音速", "宇宙速度级｜争议", "参与那美克星高端战场，速度换算争议大。"],
            reaction: ["超音速", "高超音速｜争议", "可在高端战斗中短时介入。"],
            vitality: ["街区级生命阈值", "行星级生命结构｜气防御｜争议", "混血赛亚人体质和气防御支撑承伤。"],
            healing: ["无自愈", "中速自愈｜外部治疗", "依赖仙豆或治疗。"],
            energy: ["街区级能量", "行星级能量｜潜力爆发｜争议", "短时爆发高于稳定储量。"],
            energyRegen: ["快速回能", "快速回能", "高强度战斗后需恢复。"]
          }),
          notes: "不计入超赛、超二和潜力解放。"
        },
        {
          key: "cell-super-saiyan-2",
          label: "沙鲁游戏 / 超级赛亚人2",
          status: "少年悟饭超二峰值",
          dimensions: dims({
            attack: ["行星级｜争议", "恒星级｜超二｜争议", "超二悟饭大幅超越沙鲁篇基础层级。"],
            defense: ["行星级｜气防御｜争议", "恒星级｜超二气防御｜争议", "气防御随超二提升。"],
            movement: ["宇宙速度级", "亚光速｜争议", "高端Z战士速度争议。"],
            reaction: ["高超音速", "亚光速｜争议", "可压制沙鲁篇高端对手。"],
            vitality: ["行星级生命结构｜气防御｜争议", "恒星级生命结构｜超二｜争议", "混血赛亚人体质和气防御。"],
            healing: ["无自愈", "中速自愈｜外部治疗", "依赖仙豆或治疗。"],
            energy: ["行星级能量｜争议", "恒星级能量｜超二｜争议", "气储量和爆发极高。"],
            energyRegen: ["快速回能", "快速回能｜气恢复", "高强度战斗后需恢复。"]
          }),
          notes: "作为布欧篇潜力解放前的主要峰值。"
        },
        {
          key: "buu-ultimate",
          label: "魔人布欧篇 / 潜力解放",
          status: "潜力解放悟饭",
          dimensions: dims({
            attack: ["行星级｜沙鲁篇后期｜争议", "恒星级｜潜力解放｜争议", "沙鲁篇和布欧篇后期高峰远超行星级。"],
            defense: ["行星级｜气防御｜争议", "恒星级｜气防御｜争议", "气防御和混血赛亚人体质。"],
            movement: ["宇宙速度级", "亚光速｜争议", "高端Z战士速度争议。"],
            reaction: ["高超音速", "亚光速｜争议", "可参与沙鲁/布欧篇高端战斗。"],
            vitality: ["行星级生命结构｜气防御｜争议", "恒星级生命结构｜争议", "混血赛亚人体质和气防御。"],
            healing: ["无自愈", "中速自愈｜外部治疗", "依赖仙豆或治疗。"],
            energy: ["行星级能量｜沙鲁篇后期｜争议", "恒星级能量｜潜力解放｜争议", "气储量极高。"],
            energyRegen: ["快速回能", "快速回能｜气恢复", "高强度战斗后需恢复。"]
          }),
          notes: "当前主面板版本；不计入《龙珠超》野兽形态。"
        }
      ],
      dimensions: dims({
        attack: ["行星级｜沙鲁篇后期｜争议", "恒星级｜潜力解放｜争议", "沙鲁篇和布欧篇后期高峰远超行星级。"],
        defense: ["行星级｜气防御｜争议", "恒星级｜气防御｜争议", "气防御和混血赛亚人体质。"],
        movement: ["宇宙速度级", "亚光速｜争议", "高端Z战士速度争议。"],
        reaction: ["高超音速", "亚光速｜争议", "可参与沙鲁/布欧篇高端战斗。"],
        vitality: ["行星级生命结构｜气防御｜争议", "恒星级生命结构｜争议", "混血赛亚人体质和气防御。"],
        healing: ["无自愈", "中速自愈｜外部治疗", "依赖仙豆或治疗。"],
        energy: ["行星级能量｜沙鲁篇后期｜争议", "恒星级能量｜潜力解放｜争议", "气储量极高。"],
        energyRegen: ["快速回能", "快速回能｜气恢复", "高强度战斗后需恢复。"]
      }),
      notes: notes({
        penetration: "超二和潜力解放状态以高密度气功、龟派气功对拼和近战气压制为主，情绪爆发可显著提高短时输出；潜力解放是稳定形态峰值，不把后续野兽形态并入。攻击速度：近战连击随悟饭本体交锋，龟派气功等能量束离手后独立传播，情绪爆发提高战斗节奏但不是所有弹体同速。",
        resistance: "混血赛亚人体质和气防御提供高承伤，但悟饭没有自体再生；长期疏于战斗、气耗尽、保护同伴和被吸收/封印都能削弱他。",
        sensing: "气感知和赛亚人战斗经验让他能参与高端交锋；情绪和训练连续性会影响警觉与执行。",
        tactics: "爆发潜力和学习能力强，危机中能快速压制强敌；缺少杀意、分心保护对象或疏于训练会浪费优势窗口。",
        special: "超级赛亚人2、潜力解放、龟派气功、气防御。",
        weakness: "战斗状态受情绪、训练连续性和守护对象影响很大；布欧篇潜力解放虽强，但被吸收、分心或缺少杀意时会失去优势窗口。",
        setting: "按龙珠Z魔人布欧篇潜力解放悟饭记录；那美克星幼年爆发、沙鲁游戏超二已拆入时间线，不含《龙珠超》野兽形态。",
        basis: "依据悟饭在沙鲁游戏和魔人布欧篇潜力解放后的高端战斗表现定级。"
      })
    })
  ]);
})();
