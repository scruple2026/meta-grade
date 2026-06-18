(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) {
    throw new Error("咒术回战 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "suguru-geto",
      name: "夏油杰",
      en: "Suguru Geto",
      ja: "夏油傑",
      affiliation: "诅咒师集团 / 原东京咒术高专",
      grade: "特级术师 / 咒灵操术",
      appearances: ["怀玉·玉折", "咒术回战0"],
      timelineStatus: "咒术回战0 / 百鬼夜行",
      aliases: ["Geto", "咒灵操术", "百鬼夜行"],
      fandomSlug: "Suguru_Geto",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      revisionNotes: [
        "从咒术回战 worldbook 名字池补入；主面板按本人夏油杰，不与羂索夺舍状态合并。"
      ],
      dimensions: dims({
        attack: ["楼级", "街区级｜咒灵操术/漩涡", "大量咒灵与极之番漩涡提供峰值，外置咒灵不等同本体肉身。"],
        defense: ["墙级", "楼级｜咒力防御/咒灵协防", "本体防御有限，依赖咒力和咒灵挡拆。"],
        movement: ["亚音速", "音速", "高阶术师机动。"],
        reaction: ["亚音速", "音速", "可处理咒术0高端近战和咒灵战。"],
        vitality: ["精锐韧体", "精锐韧体｜咒力强化", "肉体仍是术师身体，承伤依赖咒力强化。"],
        healing: ["无自愈", "缓慢自愈｜外部治疗", "本人无稳定反转术式自愈表现。"],
        energy: ["楼级能量", "街区级能量｜咒灵储备", "咒灵库存是重要外置资源，需与本人咒力量分开。"],
        energyRegen: ["快速回能", "快速回能｜咒灵储备", "可调度库存，但消耗后需要重新收服。"]
      }),
      notes: notes({
        penetration: "咒灵操术可用不同咒灵的能力、数量压制和极之番漩涡聚合输出；咒灵个体能力需按条件判断。",
        resistance: "本体防御不等同咒灵库存总量，咒灵可协防但被绕过后仍会伤及本人。",
        sensing: "可通过咒灵侦查和咒力感知扩大信息范围，但对未知术式仍需试探。",
        tactics: "擅长以数量、能力组合和长期计划制造战场优势；库存分配和强咒灵消耗是资源管理核心。",
        special: "咒灵操术、咒灵吸收与调度、极之番漩涡、百鬼夜行。",
        weakness: "本体近战和防御不是最强项，咒灵消耗后需要补充；强敌突进本体会压缩术式收益。",
        setting: "按咒术回战0的夏油杰记录，不把羂索占据其肉体后的领域、反重力和结界术并入。",
        basis: "依据夏油杰在怀玉·玉折和咒术回战0中咒灵操术、百鬼夜行和极之番漩涡表现定级。"
      })
    })
  ]);
})();
