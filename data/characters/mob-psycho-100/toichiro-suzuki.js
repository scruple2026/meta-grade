(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["灵能百分百"];

  if (!work) {
    throw new Error("灵能百分百 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "toichiro-suzuki",
      name: "铃木统一郎",
      en: "Toichiro Suzuki",
      ja: "鈴木統一郎",
      affiliation: "爪",
      grade: "爪首领 / 能量储备型超能力者",
      appearances: ["爪世界支配篇"],
      timelineStatus: "爪篇 / 储备能量释放",
      aliases: ["统一郎", "Toichiro", "爪首领"],
      fandomSlug: "Toichiro_Suzuki",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["楼宇级", "街区级｜储备能量｜自爆风险", "长期储备能量可形成大范围念动力破坏，峰值含自毁风险。"],
        defense: ["楼宇级", "街区级｜念动力屏障", "屏障和高能量输出支撑承伤。"],
        movement: ["亚音速", "超音速｜念动力机动｜争议", "可借超能力高速移动。"],
        reaction: ["亚音速", "超音速｜屏障/经验", "能与高端超能力者高速交锋。"],
        vitality: ["强化凡体", "街区级生命阈值｜屏障保护", "本体生命阈值依赖屏障和能量防护。"],
        healing: ["无自愈", "缓慢自愈｜超能力辅助", "没有稳定再生。"],
        energy: ["楼宇级能量", "街区级能量｜长期储备", "多年储备提供极高能量池，但会失控。"],
        energyRegen: ["快速回能", "快速回能｜储备释放后需恢复", "消耗后需要重新积累。"]
      }),
      notes: notes({
        penetration: "念动力、能量弹和屏障冲击提供大范围压制；最终高峰带自毁风险。攻击速度：铃木统一郎的念动力控制、能量弹发射和屏障冲击是三种不同出手；能量弹离手传播，最终能量释放还受储能与失控风险限制。",
        resistance: "屏障强但依赖能量维持，面对茂夫级吸收/抵消会迅速失去优势。",
        sensing: "高端灵能力者感知和战斗经验强，能判断部下与对手能力。",
        tactics: "长期组织和统治计划强，战斗中偏力量压制；自负会导致对茂夫误判。",
        special: "长期能量储备、念动力、屏障、能量释放。",
        weakness: "储备能量不是无限，过量释放会失控和自毁；心态自负。",
        setting: "按爪世界支配篇铃木统一郎记录。",
        basis: "依据统一郎与茂夫的最终战、储备能量释放和组织首领级压制表现定级。"
      })
    })
  ]);
})();
