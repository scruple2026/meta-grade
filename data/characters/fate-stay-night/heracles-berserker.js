(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/stay night"];
  if (!work) throw new Error("Fate/stay night work metadata must load before character files.");

  registerCharacters([work.character({
    id: "heracles-berserker",
    name: "Berserker（赫拉克勒斯）",
    en: "Heracles",
    ja: "ヘラクレス",
    aliases: ["Berserker", "赫拉克勒斯", "海格力斯"],
    affiliation: "Berserker职阶 / 伊莉雅阵营",
    grade: "从者 / 大英雄",
    appearances: ["Fate", "Unlimited Blade Works", "Heaven's Feel"],
    timelineStatus: "第五次圣杯战争",
    fandomSlug: "Heracles",
    confidence: "review",
    evidenceType: ["官方入口", "角色页入口", "十二试炼"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["楼级", "街区级｜怪力/狂化｜争议", "巨斧剑和怪力带来极强近战破坏。"],
      defense: ["楼级", "街区级｜十二试炼｜争议", "十二试炼提供复活与抗性，不等同普通护甲。"],
      movement: ["音速", "超音速｜狂战士爆发", "巨体仍具高速突进。"],
      reaction: ["音速", "超音速｜战斗本能", "狂化降低理性但战斗本能极强。"],
      vitality: ["街区级生命阈值｜十二试炼", "街区级生命阈值｜复活/抗性｜争议", "生命体量含复活次数和抗性机制，需与硬度区分。"],
      healing: ["快速自愈｜灵体/供魔", "极速自愈｜十二试炼复活｜争议", "复活机制不是普通伤口再生。"],
      energy: ["楼级能量", "街区级能量｜狂化/供魔", "高强度狂化从者消耗极大。"],
      energyRegen: ["中速回能", "快速回能｜伊莉雅供魔", "依赖伊莉雅强供魔。"]
    }),
    notes: notes({
      penetration: "巨力和巨斧剑偏正面破坏，缺少精细远程手段。攻击速度：赫拉克勒斯的巨斧剑完全随近身挥砍、劈击和身体突进命中，没有离体斩击或远程传播阶段。",
      resistance: "十二试炼提供复活与对同类攻击抗性，但高阶宝具和针对性策略仍有效。",
      sensing: "狂化降低理性，战斗本能和护主反应强。",
      tactics: "理性受限，依赖伊莉雅指挥和自身压倒性面板。",
      special: "狂化、十二试炼、怪力、大英雄灵基。",
      weakness: "魔力消耗极高，理性低，复活机制可被高输出或不同攻击类型削减。",
      setting: "按第五次圣杯战争Berserker记录。",
      basis: "worldbook只用于抽取赫拉克勒斯姓名；定级依据官方入口与TYPE-MOON Wiki资料入口，十二试炼作为生命/抗性机制。"
    })
  })]);
})();
