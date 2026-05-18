(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["海贼王"];

  if (!work) {
    throw new Error("海贼王 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "usopp",
      name: "乌索普",
      en: "Usopp",
      ja: "ウソップ",
      affiliation: "草帽一伙",
      grade: "狙击手",
      appearances: ["正篇"],
      timelineStatus: "德雷斯罗萨后",
      aliases: ["狙击王", "God Usopp"],
      fandomSlug: "Usopp",
      dimensions: dims({
        attack: ["砖级", "墙级｜特殊弹药", "狙击与特殊弹药可造成局部破坏和控制。"],
        defense: ["凡人级", "墙级｜极限承伤", "本体防御有限但承伤意志强。"],
        movement: ["凡人速", "亚音速", "逃跑和战场机动优秀。"],
        reaction: ["凡人速", "亚音速｜见闻色萌芽", "狙击预判和见闻色萌芽。"],
        vitality: ["强化凡体", "精锐韧体", "经常在重伤下继续行动。"],
        healing: ["无自愈", "无自愈", "依赖医疗。"],
        energy: ["凡人能量", "墙级能量｜弹药", "输出依赖弹药和植物武器。"],
        energyRegen: ["无回能", "无回能", "依赖补给。"]
      }),
      notes: notes({
        penetration: "弹弓狙击、爆炸弹、植物弹药和特殊弹能从超远距离打眼、关节、后颈或环境弱点；杀伤依赖弹药类型和命中部位，不按正面破城火力处理。",
        resistance: "本体防御接近强化凡人，靠夸张承伤、逃跑路线、掩体和烟雾/植物控场续命；没有霸气硬防、再生或对高速近战的稳定抗性。",
        sensing: "狙击观察、弹道判断和见闻色萌芽提供远距定位与目标识别；近身感知和勇气稳定性不足。",
        tactics: "欺骗、陷阱和弹药选择是核心优势，适合拖延、诱导和支援；恐惧动摇或弹药不足会削弱执行。",
        special: "狙击、植物弹药、见闻色萌芽、战术欺骗。",
        weakness: "需要距离、弹药和准备时间；被近身压制、弹药耗尽、恐惧动摇或遇到能识破欺骗的敌人时战力下降明显。",
        setting: "按德雷斯罗萨后见闻色萌芽和植物弹药版本记录；狙击王身份、恐吓名声和喜剧承伤不直接抬主面板。",
        basis: "依据乌索普至德雷斯罗萨后狙击、植物弹药和极限承伤表现定级。"
      })
    })
  ]);
})();
