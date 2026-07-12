(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["新世纪福音战士"];

  if (!work) {
    throw new Error("新世纪福音战士 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "shinji-ikari",
      name: "碇真嗣",
      en: "Shinji Ikari",
      ja: "碇シンジ",
      affiliation: "NERV",
      grade: "第三适格者 / EVA初号机驾驶员",
      appearances: ["TV版", "The End of Evangelion"],
      timelineStatus: "旧剧场版前后 / 初号机驾驶员",
      aliases: ["真嗣", "Shinji", "第三适格者"],
      fandomSlug: "Shinji_Ikari",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口", "跨界参考"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "source",
          scope: "跨界战力参考",
          label: "VS Battles Wiki：Shinji Ikari",
          url: "https://vsbattles.fandom.com/wiki/Shinji_Ikari",
          lang: "en",
          authority: "cross-reference",
          medium: "cross-wiki",
          ratingEvidence: true,
          claim: "用于复核真嗣与 EVA 初号机、AT力场和觉醒相关跨界口径；本站把机体峰值标为外部机体。"
        }
      ],
      dimensions: dims({
        attack: ["凡人级", "城市级｜EVA初号机/觉醒｜外部机体｜争议", "本体是少年，峰值来自驾驶/触发初号机。"],
        defense: ["凡人级", "城市级｜AT力场/初号机｜外部机体｜争议", "本体防御低，战斗防御来自 EVA 与 AT力场。"],
        movement: ["凡人速", "亚音速｜EVA机动", "本体普通，EVA 机动不按音速以上处理。"],
        reaction: ["凡人速", "亚音速｜同步率/驾驶", "同步率和驾驶压力影响反应。"],
        vitality: ["凡人肉身", "城市级生命阈值｜初号机/觉醒｜外部机体｜争议", "生命体量峰值来自初号机而非真嗣肉身。"],
        healing: ["无自愈", "快速自愈｜EVA再生/觉醒｜外部机体", "本体依赖医疗，机体可在特殊状态修复。"],
        energy: ["凡人能量", "城市级能量｜S2/初号机觉醒｜外部机体｜争议", "战斗资源来自 EVA 供能与觉醒状态。"],
        energyRegen: ["中速回能", "快速回能｜S2机关/外部供电｜条件", "通常受脐带电缆和内置电源限制，S2 机关为特殊阶段。"]
      }),
      notes: notes({
        penetration: "战斗输出来自 EVA 初号机近战、武装、AT力场干涉和觉醒状态；真嗣本体不具备同档攻击。攻击速度：初号机近战与AT力场干涉随机体接战，枪械弹药独立飞行，觉醒效果另有触发条件；真嗣本体没有同档出手。",
        resistance: "本体脆弱，EVA 与 AT力场提供战斗防护；同步率、精神状态、供电和机体失控是关键变量。",
        sensing: "主要依赖驾驶舱传感器、NERV 指挥和同步感知；精神崩溃会影响判断。",
        tactics: "早期战术依赖美里指挥，后期在极端压力下可触发高同步与觉醒，但不可当作稳定理智战术。",
        special: "EVA同步、AT力场、初号机觉醒、S2机关相关峰值、人类补完关联。",
        weakness: "本体少年肉身脆弱；驾驶强依赖同步率、精神状态、NERV支持和 EVA 可用性。",
        setting: "按 TV/旧剧场版真嗣记录，不混入 Rebuild 结局。",
        basis: "依据真嗣作为第三适格者驾驶初号机对抗使徒、旧剧场版初号机觉醒和补完关联表现定级。"
      })
    })
  ]);
})();
