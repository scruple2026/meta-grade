(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["海贼王"];

  if (!work) {
    throw new Error("海贼王 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "nami",
      name: "娜美",
      en: "Nami",
      ja: "ナミ",
      affiliation: "草帽一伙",
      grade: "航海士 / 天候棒",
      appearances: ["正篇"],
      timelineStatus: "和之国后 / 宙斯加入",
      aliases: ["小贼猫"],
      fandomSlug: "Nami",
      dimensions: dims({
        attack: ["墙级", "街区级｜宙斯雷云｜装备", "天候棒与宙斯可造成雷击和区域天气打击。"],
        defense: ["凡人级", "墙级｜规避", "本体防御有限，依赖机动和队友。"],
        movement: ["凡人速", "亚音速", "身体能力高于常人但非近战主力。"],
        reaction: ["凡人速", "亚音速｜战术预判", "靠气象知识和战术预判。"],
        vitality: ["强化凡体", "强化凡体", "承伤强于常人但仍脆弱。"],
        healing: ["无自愈", "无自愈", "依赖治疗。"],
        energy: ["墙级能量", "街区级能量｜宙斯｜装备", "输出主要来自装备和宙斯。"],
        energyRegen: ["无回能", "中速回能｜装备/宙斯", "依赖装备状态。"]
      }),
      notes: notes({
        penetration: "天候棒可用雷云、风压、气象诱导和宙斯追踪雷击绕开单纯肉搏防御，主打远程电击、范围干扰和弱点命中；输出来自装备与宙斯，不代表娜美本体拳脚能级。",
        resistance: "本体仍接近强化凡人体质，缺少霸气硬防、动物系耐久或再生；主要靠距离、幻象、气象遮蔽、队友保护和战术走位避免被近战命中。",
        sensing: "航海士气象感知、天候棒反馈和宙斯自主协同提供天气/雷云索敌；本体近战感知仍偏普通。",
        tactics: "战术预判和环境利用强，擅长用幻象、雷云和距离控制偷袭强敌；被近身或缴械后容错很低。",
        special: "天候棒能制造云、风、雨和雷击，宙斯并入后提供追踪雷云与自主协同，主要服务远程支援和控场。",
        weakness: "强依赖天候棒、宙斯和战场距离；被高速近身、缴械、绝缘/雷抗或恶劣环境干扰时输出大幅下降，本体承伤短板明显。",
        setting: "按和之国后宙斯并入天候棒的支援/远程版本记录，不把宙斯雷击峰值并入娜美本体防御或体术。",
        basis: "依据娜美至和之国后拥有宙斯后的雷击与气象支援表现定级。"
      })
    })
  ]);
})();
