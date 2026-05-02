(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["火影忍者"];

  if (!work) {
    throw new Error("火影忍者 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "kakashi-hatake",
      name: "旗木卡卡西",
      en: "Kakashi Hatake",
      ja: "はたけカカシ",
      category: "核心战力",
      affiliation: "木叶隐村",
      grade: "第六代火影 / 写轮眼忍者",
      appearances: ["正篇"],
      timelineStatus: "第四次忍界大战 / 含双神威短时峰值",
      aliases: [],
      fandomSlug: "Kakashi_Hatake",
      dimensions: dims({
        attack: ["楼级", "街区级｜雷切/神威｜空间", "雷切为高穿透单体杀伤，神威是空间转移不按纯破坏抬级。"],
        defense: ["墙级", "楼级｜忍术防御", "以替身、土遁、水遁和战术防御为主。"],
        movement: ["亚音速", "超音速｜瞬身", "精英上忍高速机动。"],
        reaction: ["亚音速", "超音速｜写轮眼", "写轮眼提升捕捉和预判。"],
        vitality: ["强化凡体", "精锐韧体", "精英忍者承伤，但查克拉短板明显。"],
        healing: ["无自愈", "无自愈", "依赖医疗。"],
        energy: ["楼级能量", "街区级能量｜双神威须佐｜外力", "双神威峰值来自短时外力。"],
        energyRegen: ["常规回能", "常规回能", "写轮眼和神威消耗极大，属于资源短板而非更低峰值回能档。"]
      }),
      notes: notes({
        penetration: "主要按可见破坏与命中效果记录；特殊机制不直接抬高主攻击能级。",
        resistance: "防御、抗性、再生和特殊免疫分开记录，不把难杀直接换算为高防御。",
        special: "雷切、写轮眼、神威、复制忍术、双神威须佐短时外力。",
        weakness: "存在资源、体力、条件、情报或本体弱点，已在峰值标签和依据中限制。",
        setting: "按当前初稿指定时间线记录，后续可按篇章拆分更细版本。",
        basis: "依据卡卡西从上忍时期到第四次忍界大战的忍术、神威和短时双神威表现定级。"
      })
    })
  ]);
})();
