(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Grand Order"];

  if (!work) {
    throw new Error("Fate/Grand Order work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "antonio-salieri",
      name: "安东尼奥·萨列里",
      en: "Antonio Salieri",
      ja: "アントニオ・サリエリ",
      affiliation: "迦勒底召唤 / 复仇者",
      grade: "Avenger / 灰衣男子",
      appearances: ["Fate/Grand Order"],
      timelineStatus: "FGO 召唤灵基 / Avenger",
      aliases: ["萨列里", "萨老师", "灰衣男子", "Man of the Gray", "Antonio Salieri"],
      fandomSlug: "Antonio_Salieri",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "TYPE-MOON Wiki: Antonio Salieri",
          url: "https://typemoon.fandom.com/wiki/Antonio_Salieri",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对萨列里 Avenger 灵基、灰衣男子、音乐/诅咒攻击和 FGO 登场范围。"
        }
      ],
      revisionNotes: [
        "从型月DLC worldbook 的安东尼奥·萨列里 key/comment 补入；未采用 worldbook 正文描述。",
        "复仇者/精神污染性质写入特殊项，不直接等同破坏规模。"
      ],
      dimensions: dims({
        attack: ["房屋级", "楼级｜音波/诅咒宝具｜争议", "输出偏音乐、诅咒和精神杀伤，不把特殊杀伤直接换算为大范围破坏。"],
        defense: ["房屋级", "楼级｜灵基/Avenger", "Avenger 灵基有从者承伤，但防御不是强项。"],
        movement: ["亚音速", "音速｜从者机动", "机动按非近战高端从者保守记录。"],
        reaction: ["音速", "超音速｜从者反应/复仇者灵基", "从者反应足以参与高速战斗。"],
        vitality: ["房屋级生命阈值", "楼级生命阈值｜灵基/精神污染", "灵基和复仇者性质提高续战，但不等于高生命结构。"],
        healing: ["中速自愈｜灵基/供魔", "快速自愈｜供魔/Avenger", "恢复依赖灵基与供魔。"],
        energy: ["房屋级能量", "楼级能量｜音乐/诅咒宝具", "能量主要服务于精神/诅咒型攻击。"],
        energyRegen: ["中速回能", "快速回能｜供魔/复仇者灵基", "供魔支撑连续演奏和宝具使用。"]
      }),
      notes: notes({
        penetration: "音乐、音波、诅咒和精神污染类杀伤可绕开单纯硬度判断，但不自动提高攻击能级。",
        resistance: "从者灵基和 Avenger 性质提供一定抗性；物理硬抗和正面防御普通。",
        sensing: "从者感知和对精神/情绪的异常共鸣可辅助追击。",
        tactics: "适合中距离干扰、精神压迫和宝具爆发，正面对拼不是最佳路径。",
        special: "Avenger 灵基、灰衣男子、音乐/诅咒攻击、精神污染相关性质。",
        weakness: "攻击高度依赖特殊性质；对精神/诅咒抗性高的敌人效果需下调。",
        setting: "按 FGO Avenger 萨列里召唤灵基记录。",
        basis: "worldbook只用于抽取安东尼奥·萨列里姓名；定级依据公开角色资料入口和 FGO Avenger 灵基，精神/诅咒效果写入特殊项。"
      })
    })
  ]);
})();
