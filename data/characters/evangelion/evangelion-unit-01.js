(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["新世纪福音战士"];

  if (!work) {
    throw new Error("新世纪福音战士 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "evangelion-unit-01",
      name: "EVA初号机",
      en: "Evangelion Unit-01",
      ja: "エヴァンゲリオン初号機",
      affiliation: "NERV",
      grade: "试验型EVA / 初号机",
      appearances: ["TV版", "The End of Evangelion"],
      timelineStatus: "旧剧场版 / 觉醒与S2机关",
      aliases: ["初号机", "Unit-01", "EVA-01"],
      fandomSlug: "Evangelion_Unit-01",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["楼级", "城市级｜觉醒/AT力场｜争议", "常规近战可破坏大型建筑，使徒战峰值涉及AT力场和觉醒。"],
        defense: ["楼级", "城市级｜AT力场/觉醒｜争议", "AT力场和机体结构提供高防御。"],
        movement: ["亚音速", "亚音速｜EVA机动", "巨型机体机动强但不按音速。"],
        reaction: ["亚音速", "亚音速｜同步/暴走", "反应取决于驾驶同步、暴走和核心意志。"],
        vitality: ["楼级生命阈值", "城市级生命阈值｜觉醒/S2机关｜争议", "巨型生体兵器与核心结构提供高生命阈值。"],
        healing: ["快速自愈｜生体修复", "极速自愈｜觉醒/S2机关｜争议", "暴走和觉醒状态可修复严重损伤。"],
        energy: ["楼级能量", "城市级能量｜S2机关/觉醒｜争议", "常态受外部供电限制，S2机关后续航大幅提升。"],
        energyRegen: ["中速回能｜外部供电", "快速回能｜S2机关｜条件", "S2机关改变续航口径，但不等于无限能量。"]
      }),
      notes: notes({
        penetration: "巨大近战、武装、AT力场中和/展开和觉醒状态提供主要杀伤。",
        resistance: "AT力场可抵御大量常规攻击；朗基努斯之枪、同步失控、核心损伤和仪式条件可绕过或改变防御。",
        sensing: "依赖驾驶员同步、机体本能和NERV传感器，暴走时可自主行动。",
        tactics: "常规作战依赖NERV指挥和驾驶员，暴走/觉醒状态强但不可稳定控制。",
        special: "AT力场、暴走、S2机关、核心中的碇唯、觉醒和补完关联。",
        weakness: "常态受脐带电缆、电源、同步率和驾驶员精神状态限制；特殊武器与仪式条件可制约。",
        setting: "按 TV/旧剧场版初号机记录，不混入 Rebuild 机体设定。",
        basis: "依据初号机在多次使徒战、力天使战、S2机关取得和旧剧场版觉醒/补完关联中的表现定级。"
      })
    })
  ]);
})();
