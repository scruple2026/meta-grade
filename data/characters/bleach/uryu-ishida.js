(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["死神"];

  if (!work) {
    throw new Error("死神 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "uryu-ishida",
      name: "石田雨龙",
      en: "Uryu Ishida",
      ja: "石田雨竜",
      affiliation: "灭却师 / 无形帝国相关",
      grade: "灭却师 / 星十字骑士团相关",
      appearances: ["正篇"],
      timelineStatus: "千年血战篇",
      aliases: [],
      fandomSlug: "Ury%C5%AB_Ishida",
      evidenceLinks: [
        {
          type: "official",
          scope: "日文官方角色入口",
          label: "TV动画「BLEACH 千年血战篇」角色页",
          url: "https://bleach-anime.com/character/",
          lang: "ja",
          authority: "official",
          medium: "official-site",
          ratingEvidence: false,
          claim: "用于核对千年血战篇官方角色资料；高端灵压量级仍需章节/设定书补证。"
        }
      ],
      dimensions: dims({
        attack: ["街区级", "城市级｜灭却师完圣体｜争议", "灵子弓和灭却师能力具高穿透远程输出。"],
        defense: ["街区级", "城市级｜灭却师防御｜争议", "灵子防御与机动提升承伤。"],
        movement: ["超音速", "高超音速｜飞廉脚｜争议", "灭却师高速步法。"],
        reaction: ["超音速", "高超音速｜争议", "可参与高端灭却师战斗。"],
        vitality: ["精锐韧体", "街区级生命阈值｜灵体/灭却师", "高端灵压支撑承伤。"],
        healing: ["缓慢自愈", "常规自愈｜灵子恢复", "无稳定高速再生。"],
        energy: ["街区级能量", "城市级能量｜灭却师能力｜争议", "灵子操控输出高。"],
        energyRegen: ["常规回能", "快速回能｜灵子吸收", "可利用环境灵子恢复。"]
      }),
      notes: notes({
        penetration: "灵子弓、灭却师箭、飞廉脚位移和完圣体输出提供远程高穿透；圣文字相关反转/转移效果属于机制优势，需要按具体阶段和触发条件判断。",
        resistance: "灭却师灵子操控和防御术提升承伤，飞廉脚可避免被近战锁死；本体没有死神式灵体再生，面对高灵压压制、封锁灵子、近身肉搏和信息差仍危险。",
        special: "灵子弓、飞廉脚、灭却师完圣体、圣文字相关能力。",
        weakness: "高端输出依赖灵子环境、灭却师装备和完圣体状态；近战承伤、同阵营情报博弈和圣文字条件不明都让结论需要保守。",
        setting: "按千年血战篇雨龙记录；尸魂界篇灭却师最终形态和早期装备不另拆主版本，圣文字只按已知条件写入特殊权能。",
        basis: "依据雨龙在尸魂界篇、破面篇和千年血战篇的灭却师能力表现定级。"
      })
    })
  ]);
})();
