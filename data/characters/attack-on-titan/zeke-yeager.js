(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["进击的巨人"];

  if (!work) {
    throw new Error("进击的巨人 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "zeke-yeager",
      name: "吉克·耶格尔",
      en: "Zeke Yeager",
      ja: "ジーク・イェーガー",
      affiliation: "玛莱战士队 / 叶卡派相关",
      grade: "兽之巨人继承者 / 王血",
      appearances: ["玛莱篇", "地鸣篇"],
      timelineStatus: "兽之巨人巅峰期",
      aliases: ["兽之巨人", "王血"],
      fandomSlug: "Zeke_Yeager",
      dimensions: dims({
        attack: ["楼级", "街区级｜投石轰炸", "兽之巨人的远程投掷可造成炮击级区域破坏。"],
        defense: ["楼级", "楼级｜巨人体", "巨人体承伤高，但被利威尔等针对后颈可快速失能。"],
        movement: ["凡人速", "亚音速｜巨人体", "移动速度一般，远程火力和控制更突出。"],
        reaction: ["凡人速", "亚音速", "战场判断强，近战反应不及顶级阿克曼。"],
        vitality: ["楼级生命阈值｜巨人体｜特殊生命结构", "楼级生命阈值｜巨人体", "巨人继承者生命力和再生强于人类。"],
        healing: ["快速自愈", "极速自愈｜巨人之力｜王血相关", "可依巨人之力和特殊机制从重伤恢复。"],
        energy: ["楼级能量", "街区级能量｜投石持续火力", "以巨人体体力、投掷和王血巨人控制体现。"],
        energyRegen: ["中速回能", "快速回能｜巨人之力", "恢复和多次巨人化仍受体力限制。"]
      }),
      notes: notes({
        penetration: "投石具备远程炮击效果，对阵地和舰队有强压制。",
        resistance: "兽之巨人体型和硬化能承受常规炮击与巨人战冲击，但后颈、本体位置和近战被高速突袭压制是明显弱点。",
        sensing: "依赖战场观察、王血/脊髓液联系和投掷距离判断掌控局势；近身突袭感知弱于阿克曼级角色。",
        tactics: "远程火力、巨人化控制和诱导布局强，适合在有距离和棋子时压制敌人；被高速近身会迅速失去战术主动。",
        special: "兽之巨人投掷、王血、脊髓液巨人化控制、记忆与道路相关能力。",
        weakness: "近战能力相对弱，面对高速突袭容易被斩首或捕获。",
        setting: "按兽之巨人可用且王血能力处于剧情有效期记录。",
        basis: "依据吉克在希干希纳、玛莱战争和道路剧情中的投石火力、巨人控制和承伤表现定级。"
      })
    })
  ]);
})();
