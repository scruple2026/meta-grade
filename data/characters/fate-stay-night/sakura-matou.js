(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/stay night"];
  if (!work) throw new Error("Fate/stay night work metadata must load before character files.");

  registerCharacters([work.character({
    id: "sakura-matou",
    name: "间桐樱",
    en: "Sakura Matou",
    ja: "間桐桜",
    aliases: ["樱", "黑樱", "远坂樱"],
    affiliation: "间桐家 / Rider御主",
    grade: "魔术师素体 / 圣杯容器",
    appearances: ["Fate", "Unlimited Blade Works", "Heaven's Feel"],
    timelineStatus: "第五次圣杯战争 / HF影峰值",
    fandomSlug: "Sakura_Matou",
    confidence: "review",
    evidenceType: ["官方入口", "角色页入口", "路线峰值"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["凡人级", "街区级｜影/黑樱｜争议", "常态不主动战斗，HF路线影与黑樱为条件峰值。"],
      defense: ["凡人级", "楼级｜影/圣杯容器", "本体脆弱，峰值来自影和圣杯系统。"],
      movement: ["凡人速", "亚音速｜影/使魔", "本体机动低，影的攻击范围另算。"],
      reaction: ["凡人速", "亚音速｜影感知", "峰值依赖HF路线异常状态。"],
      vitality: ["凡人肉身", "楼级生命阈值｜圣杯容器/影", "生命状态与圣杯、虫和影纠缠。"],
      healing: ["无自愈", "快速自愈｜影/圣杯系统｜争议", "异常状态可修复或吞噬，但不是常态自愈。"],
      energy: ["墙级能量｜魔力素质", "街区级能量｜圣杯/影｜争议", "HF峰值资源来自圣杯系统和影。"],
      energyRegen: ["缓慢回能", "快速回能｜圣杯/影｜争议", "峰值依赖路线条件和外部系统。"]
    }),
    notes: notes({
      penetration: "影和黑樱状态偏吞噬、束缚与魔力污染，不等同纯破坏规模。攻击速度：黑樱之影先从地面或周围展开并接触目标，吞噬、束缚与污染随后生效；影的扩张速度没有被现有资料单独量化。",
      resistance: "常态脆弱；HF峰值依赖圣杯容器、影和虫术体系。",
      sensing: "常态索敌低，异常状态下影可感知与追击。",
      tactics: "常态缺少战斗意愿；黑化后更多受情绪与污染驱动。",
      special: "圣杯容器、影、黑樱、Rider契约、间桐虫术创伤。",
      weakness: "心理创伤、圣杯污染、间桐脏砚控制和本体脆弱性。",
      setting: "按第五次圣杯战争间桐樱记录，HF影/黑樱作为路线峰值。",
      basis: "worldbook只用于抽取间桐樱姓名；定级依据官方入口与TYPE-MOON Wiki资料入口，HF路线峰值不作为常态。"
    })
  })]);
})();
