(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["灵能百分百"];

  if (!work) {
    throw new Error("灵能百分百 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "ryo-shimazaki",
      name: "岛崎亮",
      en: "Ryo Shimazaki",
      ja: "島崎亮",
      affiliation: "爪",
      grade: "最终五人 / 瞬间移动超能力者",
      appearances: ["爪世界支配篇"],
      timelineStatus: "爪篇 / 瞬间移动",
      aliases: ["岛崎", "Shimazaki"],
      fandomSlug: "Ryo_Shimazaki",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["墙级", "楼级｜念动力/近战", "攻击以瞬移配合近战与念动力为主。"],
        defense: ["墙级", "楼级｜屏障/回避", "防御更多来自瞬移回避和预判。"],
        movement: ["亚音速", "超音速｜瞬间移动｜特殊位移", "瞬移不换算连续速度，但实战机动极强。"],
        reaction: ["亚音速", "音速｜预判/感知", "依靠感知和瞬移形成反应优势。"],
        vitality: ["强化凡体", "精锐韧体｜屏障", "本体承伤有限，依赖回避。"],
        healing: ["无自愈", "无自愈", "无自愈表现。"],
        energy: ["墙级能量", "楼级能量｜瞬移/念动力", "瞬移和念动力持续消耗。"],
        energyRegen: ["快速回能", "快速回能", "可持续使用但会被感知干扰和围攻压制。"]
      }),
      notes: notes({
        penetration: "瞬移制造盲点后以近战和念动力打击，破坏规模不高但命中条件强。",
        resistance: "通过瞬移避免受击，直接承伤并不突出。",
        sensing: "具备强感知和空间定位能力，可在多人围攻中读出攻击路线。",
        tactics: "擅长利用瞬移、盲点和心理压力瓦解队形；被群体协调和感知干扰时会失误。",
        special: "瞬间移动、念动力、感知预判。",
        weakness: "瞬移是特殊位移，不代表无限反应；被协同压制或心理诱导时容易暴露。",
        setting: "按爪篇岛崎亮记录。",
        basis: "依据岛崎在爪篇对多名超能力者的瞬移、回避和近战压制表现定级。"
      })
    })
  ]);
})();
