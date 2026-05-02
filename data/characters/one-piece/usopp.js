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
      category: "主角团",
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
        penetration: "按可见破坏、命中效果和能力条件记录；特殊机制不直接抬高主攻击能级。",
        resistance: "防御、抗性、再生和特殊免疫分开记录。",
        special: "狙击、植物弹药、见闻色萌芽、战术欺骗。",
        weakness: "存在体力、资源、条件、情报或本体弱点。",
        setting: "按当前初稿指定时间线记录，后续可按篇章拆分更细版本。",
        basis: "依据乌索普至德雷斯罗萨后狙击、植物弹药和极限承伤表现定级。"
      })
    })
  ]);
})();
