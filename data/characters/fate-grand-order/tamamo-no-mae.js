(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Grand Order"];

  if (!work) {
    throw new Error("Fate/Grand Order work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "tamamo-no-mae",
      name: "玉藻前",
      en: "Tamamo-no-Mae",
      ja: "玉藻の前",
      affiliation: "迦勒底召唤 / Caster",
      grade: "Caster / 良妻狐",
      appearances: ["Fate/Grand Order"],
      timelineStatus: "FGO 召唤灵基 / Caster",
      aliases: ["玉藻前", "玉藻", "小玉", "良妻狐", "Caster Fox", "Tamamo-no-Mae"],
      fandomSlug: "Tamamo-no-Mae",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "TYPE-MOON Wiki: Tamamo-no-Mae",
          url: "https://typemoon.fandom.com/wiki/Tamamo-no-Mae",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对玉藻前 Caster 灵基、咒术、狐尾/天照关联、宝具和 FGO 登场范围。"
        }
      ],
      revisionNotes: [
        "从型月DLC worldbook 的玉藻前 key/comment 补入；未采用 worldbook 正文描述。",
        "Fate/EXTRA 原始语境、九尾/天照全量和泳装/其他尾巴变体未并入本条 FGO 召唤灵基主面板。"
      ],
      dimensions: dims({
        attack: ["房屋级", "楼级｜咒术/宝具支援｜争议", "Caster 玉藻主强项是支援、咒术和续航，不以裸输出见长。"],
        defense: ["房屋级", "楼级｜咒术防护/灵基", "防御依赖 Caster 灵基、咒术和队伍支援。"],
        movement: ["亚音速", "音速｜从者灵基/咒术辅助", "本体机动不是强项，峰值按灵基和咒术补正。"],
        reaction: ["音速", "超音速｜从者反应/咒术判断", "反应和判断强于直线机动。"],
        vitality: ["房屋级生命阈值", "楼级生命阈值｜灵基/咒术支援", "灵基和咒术提高续战。"],
        healing: ["快速自愈｜咒术/供魔", "极速自愈｜宝具/支援循环", "治疗与冷却循环是核心优势，但依赖宝具/供魔。"],
        energy: ["房屋级能量", "楼级能量｜咒术/宝具支援", "资源偏支援、治疗和循环，不按天照全量外推。"],
        energyRegen: ["快速回能｜咒术/供魔", "极速回能｜宝具循环/条件", "宝具和咒术循环可大幅提高队伍续航。"]
      }),
      notes: notes({
        penetration: "直接攻击规模有限，咒术、削弱、封印和队伍循环价值高于破坏范围。",
        resistance: "咒术防护和灵基提供抗性；正面硬抗高输出不是定位。",
        sensing: "Caster 魔术感知、咒术观察和从者感知辅助索敌。",
        tactics: "擅长支援、冷却循环、治疗、削弱和长期资源管理。",
        special: "Caster 灵基、咒术、狐尾/天照关联、宝具支援、治疗与回能循环。",
        weakness: "个人输出、机动和硬防偏弱；九尾/天照全量不等同 FGO 召唤灵基。",
        setting: "按 FGO Caster 玉藻前召唤灵基记录，EXTRA 与其他尾巴/泳装变体另行处理。",
        basis: "worldbook只用于抽取玉藻前姓名；定级依据公开角色资料入口和 FGO Caster 支援定位，主表不把天照关联外推成高破坏档。"
      })
    })
  ]);
})();
