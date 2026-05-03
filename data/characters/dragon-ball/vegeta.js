(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["龙珠"];

  if (!work) {
    throw new Error("龙珠 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "vegeta",
      name: "贝吉塔",
      en: "Vegeta",
      ja: "ベジータ",
      affiliation: "Z战士",
      grade: "赛亚人王子",
      appearances: ["正篇"],
      timelineStatus: "龙珠Z后期 / 不含龙珠超",
      aliases: [],
      fandomSlug: "Vegeta",
      evidenceLinks: [
        {
          type: "source",
          scope: "跨界战力参考",
          label: "VS Battles Wiki：Vegeta（Dragon Ball Z）",
          url: "https://vsbattles.fandom.com/wiki/Vegeta_%28Dragon_Ball_Z%29",
          lang: "en",
          authority: "cross-reference",
          medium: "cross-wiki",
          ratingEvidence: true,
          claim: "用于复核贝吉塔赛亚人篇到布欧篇、魔人化和最终爆破峰值的跨界量级口径。"
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
          claim: "用于核对贝吉塔从赛亚人篇到魔人布欧篇的角色、战斗和必杀技资料；恒星级等跨界档位仍保留争议标签。"
        }
      ],
      defaultTimelineKey: "buu-majin",
      timelinePanels: [
        {
          key: "saiyan-arc",
          label: "赛亚人篇",
          status: "来袭地球时期",
          dimensions: dims({
            attack: ["大陆级", "行星级｜伽力克炮｜争议", "早期已有行星破坏设定，但按争议峰值记录。"],
            defense: ["大陆级", "行星级｜气防御｜争议", "气防御和赛亚人体质。"],
            movement: ["高超音速", "宇宙速度级｜争议", "高端飞行和近战速度。"],
            reaction: ["高超音速", "宇宙速度级｜争议", "可参与赛亚人篇高速战斗。"],
            vitality: ["大陆级生命阈值", "行星级生命结构｜气防御｜争议", "生命阈值依赖气防御。"],
            healing: ["无自愈", "常规自愈｜外部治疗", "无稳定再生。"],
            energy: ["大陆级能量", "行星级能量｜争议", "气储量很高。"],
            energyRegen: ["快速回能", "快速回能｜气恢复", "重伤后需恢复。"]
          }),
          notes: "不计入超级赛亚人。"
        },
        {
          key: "cell-super-saiyan",
          label: "沙鲁篇 / 超级赛亚人",
          status: "超赛与超贝吉塔",
          dimensions: dims({
            attack: ["行星级", "恒星级｜最终闪光｜争议", "最终闪光作为高端争议峰值。"],
            defense: ["行星级", "恒星级｜气防御｜争议", "高强度气防御。"],
            movement: ["宇宙速度级", "亚光速｜争议", "高端Z战士速度争议。"],
            reaction: ["高超音速", "亚光速｜争议", "可参与沙鲁篇高端交锋。"],
            vitality: ["行星级生命结构", "恒星级生命结构｜争议", "赛亚人体质和气防御。"],
            healing: ["无自愈", "常规自愈｜外部治疗", "无稳定自体再生。"],
            energy: ["行星级能量", "恒星级能量｜争议", "气储量极高。"],
            energyRegen: ["快速回能", "快速回能｜气恢复", "高强度战斗后需恢复。"]
          }),
          notes: "用于区分布欧篇魔人状态。"
        },
        {
          key: "buu-majin",
          label: "布欧篇 / 魔人贝吉塔后",
          status: "龙珠Z后期主面板",
          dimensions: dims({
            attack: ["行星级", "恒星级｜超赛后期｜争议", "早期已具行星破坏设定，后期随超赛体系大幅提升。"],
            defense: ["行星级", "恒星级｜气防御｜争议", "气防御和赛亚人体质。"],
            movement: ["宇宙速度级", "亚光速｜争议", "高速战斗保守按争议高端。"],
            reaction: ["高超音速", "亚光速｜争议", "可参与后期高端战斗。"],
            vitality: ["行星级生命结构", "恒星级生命结构｜争议", "赛亚人体质与气防御提升生命阈值。"],
            healing: ["无自愈", "常规自愈｜外部治疗", "无稳定自体再生。"],
            energy: ["行星级能量", "恒星级能量｜超赛后期｜争议", "气储量极高。"],
            energyRegen: ["快速回能", "快速回能｜气恢复", "高强度战斗后需恢复。"]
          }),
          notes: "当前主面板版本。"
        }
      ],
      dimensions: dims({
        attack: ["行星级", "恒星级｜超赛后期｜争议", "早期已具行星破坏设定，后期随超赛体系大幅提升。"],
        defense: ["行星级", "恒星级｜气防御｜争议", "气防御和赛亚人体质。"],
        movement: ["宇宙速度级", "亚光速｜争议", "高速战斗保守按争议高端。"],
        reaction: ["高超音速", "亚光速｜争议", "可参与后期高端战斗。"],
        vitality: ["行星级生命结构", "恒星级生命结构｜争议", "赛亚人体质与气防御提升生命阈值。"],
        healing: ["无自愈", "常规自愈｜外部治疗", "无稳定自体再生。"],
        energy: ["行星级能量", "恒星级能量｜超赛后期｜争议", "气储量极高。"],
        energyRegen: ["快速回能", "快速回能｜气恢复", "高强度战斗后需恢复。"]
      }),
      notes: notes({
        penetration: "伽力克炮、最终闪光、连续能量弹和魔人贝吉塔自爆提供高密度气功穿透与范围爆发；自爆是一次性牺牲峰值，不作为可反复使用的普通攻击。",
        resistance: "赛亚人体质、超赛形态和气防御提供高承伤，战斗意志极强；没有再生，精神控制、气耗尽、被吸收/封印和强制近身消耗会绕过单纯硬度优势。",
        special: "伽力克炮、最终闪光、自爆、超级赛亚人。",
        weakness: "强烈自尊和正面对决倾向会造成战术风险；最终爆破会牺牲自身，魔人化属于特定状态，超赛高峰持续消耗气。",
        setting: "按龙珠Z魔人布欧篇后期版本记录，不含《龙珠超》蓝、深蓝、自我极意等后续形态；赛亚人篇和沙鲁篇已拆入时间线。",
        basis: "依据贝吉塔从赛亚人篇到魔人布欧篇的行星级设定和后期超赛战斗表现定级。"
      })
    })
  ]);
})();
