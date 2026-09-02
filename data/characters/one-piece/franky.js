(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["海贼王"];

  if (!work) {
    throw new Error("海贼王 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "franky",
      name: "弗兰奇",
      en: "Franky",
      ja: "フランキー",
      affiliation: "草帽一伙",
      grade: "船匠 / 改造人",
      appearances: ["正篇"],
      timelineStatus: "",
      aliases: [],
      fandomSlug: "Franky",
      dimensions: dims({
        attack: ["楼宇级", "街区级｜弗兰奇将军", "激光、火炮和弗兰奇将军提供重火力。"],
        defense: ["楼宇级", "街区级｜改造身体/机甲", "钢铁改造和机甲提高承伤。"],
        movement: ["凡人速", "亚音速｜机动装备", "机动一般，依赖装备。"],
        reaction: ["凡人速", "亚音速", "战斗经验和机械辅助。"],
        vitality: ["精锐韧体", "楼宇级生命阈值｜改造人", "改造身体提高生命阈值。"],
        healing: ["无自愈", "中速自愈｜维修", "需要维修和可乐补给。"],
        energy: ["楼宇级能量", "街区级能量｜装备/可乐", "输出依赖可乐和武装。"],
        energyRegen: ["无回能", "中速回能｜可乐补给", "需要补给。"]
      }),
      notes: notes({
        penetration: "风来炮、激光、火炮、弗兰奇将军刀炮和重拳提供正面火力，适合破甲、轰击大型目标和拆除建筑结构；输出依赖武装和可乐能源，不等同无限炮台。攻击速度：重拳随弗兰奇的近战动作命中，风来炮、火炮和激光则在瞄准、发射后形成各自的远程传播；重武器连续开火还受发射间隔与能源限制。",
        resistance: "改造身体和弗兰奇将军提供金属装甲、抗冲击和局部替换优势；背部、本体未改造部位、内部线路、可乐能源和机甲损坏仍是明确弱点。",
        sensing: "改造身体和机械设备提供基础瞄准、火力反馈和机甲状态感知；没有高阶霸气索敌。",
        tactics: "工程判断和火力配置强，能用弗兰奇将军、激光和可乐资源打阵地战；背部弱点、能源和机械损坏限制战术持续性。",
        special: "改造身体、风来炮、激光、弗兰奇将军。",
        weakness: "强依赖可乐补给、机械状态和装备完整度；机动与反应不如高速近战主力，遇到电磁、内部破坏、缴械或绕后攻击会受限。",
        setting: "按新世界后改造身体与弗兰奇将军可用状态记录；机甲火力和本体硬度分开评级。",
        basis: "依据弗兰奇新世界篇火力、机甲和承伤表现定级。"
      })
    })
  ]);
})();
