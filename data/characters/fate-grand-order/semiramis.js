(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Grand Order"];

  if (!work) {
    throw new Error("Fate/Grand Order work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "semiramis",
      name: "塞弥拉弥斯",
      en: "Semiramis",
      ja: "セミラミス",
      affiliation: "迦勒底召唤 / 亚述女帝",
      grade: "Assassin / 毒与空中庭园",
      appearances: ["Fate/Grand Order"],
      timelineStatus: "FGO 召唤灵基 / Assassin",
      aliases: ["女帝", "亚述女帝", "红方Assassin", "空中庭园", "Hanging Gardens of Babylon", "Semiramis"],
      fandomSlug: "Semiramis",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "TYPE-MOON Wiki: Semiramis",
          url: "https://typemoon.fandom.com/wiki/Semiramis",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对塞弥拉弥斯 Assassin 灵基、毒、二重召唤和虚荣的空中庭园条件。"
        }
      ],
      revisionNotes: [
        "从型月DLC worldbook 的塞弥拉弥斯 key/comment 补入；未采用 worldbook 正文描述。",
        "虚荣的空中庭园需要准备和场地，作为条件峰值而非常态随身面板。"
      ],
      dimensions: dims({
        attack: ["房屋级", "街区级｜毒/空中庭园｜准备｜争议", "常态偏毒与魔术；空中庭园可显著提高压制力但需要准备。"],
        defense: ["房屋级", "街区级｜空中庭园/阵地｜准备", "常态防御普通，阵地和空中庭园条件下防护提高。"],
        movement: ["亚音速", "音速｜从者机动/阵地内", "Assassin/Caster 复合特性下机动保守记录。"],
        reaction: ["音速", "超音速｜从者反应/魔术应对", "从者反应和魔术判断支撑战斗。"],
        vitality: ["房屋级生命阈值", "楼级生命阈值｜灵基/阵地", "本体生命体量不高，阵地条件提高存续。"],
        healing: ["中速自愈｜灵基/供魔", "快速自愈｜阵地/供魔", "恢复依赖灵基、供魔和阵地条件。"],
        energy: ["房屋级能量", "街区级能量｜空中庭园/准备", "空中庭园作为外部阵地资源，不等同随身常态能量池。"],
        energyRegen: ["中速回能", "快速回能｜阵地/供魔", "阵地和供魔支撑连续魔术。"]
      }),
      notes: notes({
        penetration: "毒、魔术和空中庭园压制可绕开单纯硬度；毒杀效果需看抗性与命中条件。",
        resistance: "阵地和空中庭园可提高防护；本体常态硬度不突出。",
        sensing: "从者感知、阵地监控和魔术侦测辅助索敌。",
        tactics: "擅长准备阵地、毒杀、诱导和以空中庭园塑造主场优势。",
        special: "Assassin 灵基、毒、二重召唤、虚荣的空中庭园、阵地构筑。",
        weakness: "高峰值依赖材料、时间、场地和阵地完成度；常态遭遇战面板较低。",
        setting: "按 FGO Assassin 塞弥拉弥斯召唤灵基记录，空中庭园作为准备峰值。",
        basis: "worldbook只用于抽取塞弥拉弥斯姓名；定级依据公开角色资料入口和 FGO Assassin 灵基，空中庭园不写入无条件常态。"
      })
    })
  ]);
})();
