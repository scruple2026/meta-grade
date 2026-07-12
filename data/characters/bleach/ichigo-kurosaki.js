(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["死神"];

  if (!work) {
    throw new Error("死神 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "ichigo-kurosaki",
      name: "黑崎一护",
      en: "Ichigo Kurosaki",
      ja: "黒崎一護",
      affiliation: "代理死神",
      grade: "主角 / 混合血统",
      appearances: ["正篇"],
      timelineStatus: "千年血战篇 / 真斩月",
      aliases: [],
      fandomSlug: "Ichigo_Kurosaki",
      evidenceLinks: [
        {
          type: "source",
          scope: "跨界战力参考",
          label: "VS Battles Wiki：Ichigo Kurosaki（Post-Timeskip）",
          url: "https://vsbattles.fandom.com/wiki/Ichigo_Kurosaki_%28Post-Timeskip%29",
          lang: "en",
          authority: "cross-reference",
          medium: "cross-wiki",
          ratingEvidence: true,
          claim: "用于复核完现术后、真斩月和千年血战后期形态的跨界量级口径。"
        },
        {
          type: "setting",
          scope: "日文官方角色书",
          label: "集英社：BLEACH OFFICIAL CHARACTER BOOK SOULs.",
          citation: "久保帯人『BLEACH OFFICIAL CHARACTER BOOK SOULs.』集英社, 2006年2月, ISBN 978-4-08-874079-9。",
          lang: "ja",
          authority: "official",
          medium: "databook",
          ratingEvidence: true,
          claim: "用于核对一护早期死神/卍解资料和角色设定；千年血战真斩月阶段以后续原作卷册为主。"
        },
        {
          type: "chapter",
          scope: "日文原作卷册",
          label: "集英社：BLEACH―ブリーチ― 74",
          url: "https://www.shueisha.co.jp/books/items/contents.html?isbn=978-4-08-880774-4",
          lang: "ja",
          authority: "primary",
          medium: "manga",
          ratingEvidence: true,
          claim: "用于核对一护与友哈巴赫最终决战；大陆级/超第三宇宙速度级等本站换算仍按高争议处理。"
        },
        {
          type: "wiki",
          scope: "角色页入口",
          label: "Bleach Wiki：Ichigo Kurosaki",
          url: "https://bleach.fandom.com/wiki/Ichigo_Kurosaki",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对一护角色资料、形态变化和主要战斗入口。"
        }
      ],
      defaultTimelineKey: "true-zangetsu",
      timelinePanels: [
        {
          key: "soul-society-bankai",
          label: "尸魂界篇 / 卍解初成",
          status: "斩月卍解与高速近战",
          dimensions: dims({
            attack: ["街区级", "城市级｜卍解｜争议", "卍解月牙天冲和高速斩击显著提升。"],
            defense: ["街区级", "城市级｜灵压｜争议", "灵压防御和死神身体提高承伤。"],
            movement: ["超音速", "高超音速｜卍解｜争议", "卍解以高速近战为核心。"],
            reaction: ["超音速", "高超音速｜争议", "可参与队长级高速交锋。"],
            vitality: ["街区级生命阈值", "城市级生命阈值｜灵体｜争议", "死神身体和灵压支撑续战。"],
            healing: ["中速自愈", "快速自愈｜外源/虚化萌芽", "非稳定主动再生。"],
            energy: ["街区级能量", "城市级能量｜卍解｜争议", "灵压储量高但会消耗。"],
            energyRegen: ["快速回能", "快速回能", "高强度战斗后会疲劳。"]
          }),
          notes: "不计入无月和真斩月。"
        },
        {
          key: "final-getsuga",
          label: "破面篇最终 / 无月",
          status: "一次性最终月牙天冲",
          dimensions: dims({
            attack: ["城市级", "大陆级｜无月｜一次性｜争议", "无月作为一次性峰值记录。"],
            defense: ["城市级", "大陆级｜最终形态｜争议", "高峰依赖最终形态灵压。"],
            movement: ["高超音速", "超第三宇宙速度级｜争议", "高端速度争议大。"],
            reaction: ["高超音速", "超第三宇宙速度级｜争议", "可应对蓝染高端交锋。"],
            vitality: ["城市级生命阈值", "大陆级生命阈值｜最终形态｜争议", "生命阈值随灵压提升。"],
            healing: ["快速自愈", "极速自愈｜外源/虚化", "非无条件再生。"],
            energy: ["城市级能量", "大陆级能量｜无月｜一次性｜争议", "释放后失去死神力量。"],
            energyRegen: ["快速回能", "快速回能｜无月释放前", "无月后丧失力量属于一次性代价，不作为更低峰值回能档。"]
          }),
          notes: "明确标注一次性，不作为稳定常态。"
        },
        {
          key: "true-zangetsu",
          label: "千年血战篇 / 真斩月",
          status: "混合血统完整显现",
          dimensions: dims({
            attack: ["城市级", "大陆级｜真斩月/无月｜争议", "高端灵压和月牙天冲极强，跨界尺度争议较大，保守标争议。"],
            defense: ["城市级", "大陆级｜灵压/虚化｜争议", "防御依赖灵压、虚化和血统力量。"],
            movement: ["高超音速", "超第三宇宙速度级｜瞬步｜争议", "死神高速移动争议大，不按光速默认。"],
            reaction: ["高超音速", "超第三宇宙速度级｜争议", "高端交锋速度极高但证据解释分歧大。"],
            vitality: ["城市级生命阈值", "大陆级生命阈值｜混合血统｜争议", "死神/虚/灭却师混合生命结构提高续战。"],
            healing: ["快速自愈", "极速自愈｜虚化/外源", "部分状态下恢复显著，但非无条件再生。"],
            energy: ["城市级能量", "大陆级能量｜灵压｜争议", "灵压储量极高，但不直接反推每一击。"],
            energyRegen: ["快速回能", "快速回能｜灵压恢复", "高强度战斗后仍会疲劳。"]
          }),
          notes: "当前主面板版本。"
        }
      ],
      dimensions: dims({
        attack: ["城市级", "大陆级｜真斩月/无月｜争议", "高端灵压和月牙天冲极强，跨界尺度争议较大，保守标争议。"],
        defense: ["城市级", "大陆级｜灵压/虚化｜争议", "防御依赖灵压、虚化和血统力量。"],
        movement: ["高超音速", "超第三宇宙速度级｜瞬步｜争议", "死神高速移动争议大，不按光速默认。"],
        reaction: ["高超音速", "超第三宇宙速度级｜争议", "高端交锋速度极高但证据解释分歧大。"],
        vitality: ["城市级生命阈值", "大陆级生命阈值｜混合血统｜争议", "死神/虚/灭却师混合生命结构提高续战。"],
        healing: ["快速自愈", "极速自愈｜虚化/外源", "部分状态下恢复显著，但非无条件再生。"],
        energy: ["城市级能量", "大陆级能量｜灵压｜争议", "灵压储量极高，但不直接反推每一击。"],
        energyRegen: ["快速回能", "快速回能｜灵压恢复", "高强度战斗后仍会疲劳。"]
      }),
      notes: notes({
        penetration: "月牙天冲、卍解高速斩击、虚化增幅和真斩月灵压爆发提供高单体切割与能量斩击；无月是一次性最终月牙天冲，不作为稳定常态。攻击速度：卍解近斩随一护高速接战，月牙天冲离刃后是独立能量斩；无月还有形态与一次性发动限制，不能混成同一弹速。",
        resistance: "死神、虚、灭却师和完现术混合血统让一护具备高灵压防御、异常承伤和部分虚化恢复；灵压耗尽、封锁能力、心态动摇、未来改写和针对灵体的控制仍可绕过硬拼优势。",
        sensing: "灵压感知、虚/死神/灭却师血统经验和高端交锋直觉支撑索敌；多血统状态不稳时识别与执行会受影响。",
        tactics: "以高速正面突破和临场成长为主，能在形态理解后迅速提升应对；长期布局和复杂情报战不是主要优势。",
        special: "斩魄刀、卍解、虚化、完现术、灭却师血统、真斩月、无月。",
        weakness: "多血统力量曾长期不稳定，形态理解、灵压消耗和斩魄刀状态会影响输出；无月释放后失去力量，真卍解也曾被情报/未来改写针对。",
        setting: "按千年血战篇真斩月版本记录；尸魂界卍解初成和破面篇无月一次性峰值已拆入时间线。",
        basis: "依据一护从尸魂界篇到千年血战篇的灵压、卍解和最终战表现定级，速度与高端能级标争议。"
      })
    })
  ]);
})();
