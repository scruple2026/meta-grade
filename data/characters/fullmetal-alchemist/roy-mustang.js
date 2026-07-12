(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["钢之炼金术师"];

  if (!work) {
    throw new Error("钢之炼金术师 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "roy-mustang",
      name: "罗伊·马斯坦",
      en: "Roy Mustang",
      ja: "ロイ・マスタング",
      affiliation: "亚美斯多利斯军部",
      grade: "国家炼金术师 / 焰之炼金术师",
      appearances: ["正篇"],
      timelineStatus: "",
      aliases: ["焰之炼金术师", "大佐"],
      fandomSlug: "Roy_Mustang",
      dimensions: dims({
        attack: ["房屋级", "街区级｜连续爆燃", "点火与氧气操控可造成高温爆燃，单点杀伤强；大范围持续放火才接近街区破坏。"],
        defense: ["凡人级", "墙级｜火焰压制", "本体是人类，主要靠距离、火焰压制和军人训练避免受击。"],
        movement: ["凡人速", "亚音速", "无超常位移，战斗中依靠反应、射程和队友掩护。"],
        reaction: ["凡人速", "亚音速", "可快速点火反制近战和再生敌人，但不是单纯高速身体反应。"],
        vitality: ["强化凡体", "精锐韧体", "重伤后能短时行动，但仍受失血、视力和内伤限制。"],
        healing: ["无自愈", "无自愈", "依赖医疗。"],
        energy: ["无资料", "无资料", "焰之炼金术依赖空气成分、点火布和炼金术条件，缺少可换算个人能量池的资料。"],
        energyRegen: ["无资料", "无资料", "可连续发动但受环境、点火条件和身体状态影响；个人回能机制无可量化资料。"]
      }),
      notes: notes({
        penetration: "火焰对生物组织、眼部和再生型敌人有强杀伤，但遇到雨水、湿手套和缺氧环境会受限。攻击速度：罗伊先打响指或使用点火条件并指定位置，爆燃随后在目标区域形成；连续点爆取决于手部动作、视线与环境，不能从火焰外观推弹速。",
        resistance: "本体是训练有素的人类军官，没有对应高温、穿刺或爆炸抗性；主要靠距离、视线、点火先手和队友掩护避免受击。",
        sensing: "主要依赖视线、氧气/环境判断和战场经验确定点火位置；雨水、遮蔽和视线受限会削弱感知到命中的链条。",
        tactics: "指挥与战术执行优秀，擅长精准点爆、压制再生和利用部队协同；手套、天气和视线条件决定战术稳定性。",
        special: "氧气浓度操控、火焰炼金术、精准点爆。",
        weakness: "湿润环境、手套损坏、视线和点火条件会削弱输出。",
        setting: "按正篇后期未失明或可正常发动焰之炼金术时记录。",
        basis: "依据罗伊对拉斯特、恩维等人造人的火焰压制和军部战斗表现定级，避免把克制再生误读为更高破坏规模。"
      })
    })
  ]);
})();
