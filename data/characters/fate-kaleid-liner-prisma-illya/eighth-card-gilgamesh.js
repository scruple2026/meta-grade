(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/kaleid liner 魔法少女☆伊莉雅"];

  if (!work) {
    throw new Error("Fate/kaleid liner 魔法少女☆伊莉雅 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "eighth-card-gilgamesh",
      name: "第八卡吉尔伽美什",
      en: "Gilgamesh",
      ja: "ギルガメッシュ",
      affiliation: "第八张Class Card",
      grade: "Archer Class Card / 幼吉尔",
      appearances: ["职阶卡回收事件", "2wei"],
      timelineStatus: "第八张Class Card / 幼吉尔",
      aliases: ["第八卡", "吉尔伽美什", "幼吉尔", "Gilgamesh", "Archer Class Card"],
      fandomSlug: "Gilgamesh_(Fate/kaleid)",
      confidence: "review",
      evidenceType: ["官方入口", "资料入口"],
      sourceQuality: "entry",
      revisionNotes: ["从魔法少女伊莉雅 worldbook 的 comment/key 姓名池补入；不采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["房屋级", "街区级｜王之财宝/Ea｜争议", "王之财宝和Ea峰值按本作可见规模保守记录，不套用全Fate高端设定。"],
        defense: ["墙级", "楼级｜宝具/神之盾｜争议", "防御依赖宝具、神之盾和Class Card状态。"],
        movement: ["亚音速", "超音速｜维摩那/宝具机动｜争议", "可用维摩那和宝具机动作战，连续速度保守。"],
        reaction: ["亚音速", "超音速｜英灵卡战", "可与魔法少女组和Class Card战斗周旋。"],
        vitality: ["精锐韧体", "楼级生命阈值｜Class Card/英灵影像", "作为Class Card相关存在，生命结构不同于普通人。"],
        healing: ["无自愈", "中速自愈｜卡片/灵基条件｜争议", "缺少稳定战斗中高速再生证据。"],
        energy: ["楼级能量", "街区级能量｜王之财宝/Ea｜争议", "宝具储备强，但单次输出和场景承载按本作表现限制。"],
        energyRegen: ["中速回能", "快速回能｜Class Card/宝具储备", "可连续使用宝具，但不写无限回能。"]
      }),
      notes: notes({
        penetration: "王之财宝提供多宝具投射，Ea/Enuma Elish属于高风险峰值；本条只按Prisma Illya第八卡表现保守定级。",
        resistance: "神之盾、宝具和Class Card状态提供防护；不等同Fate其他作品完整英雄王硬防。",
        sensing: "英灵级战斗本能和宝具认知较强，但具体索敌按本作表现处理。",
        tactics: "傲慢但资源压制强，善用宝具数量、维摩那和王牌威慑。",
        special: "王之财宝、Ea/Enuma Elish、维摩那、神之盾、Archer Class Card、幼吉尔状态。",
        weakness: "Class Card状态、人格分裂/幼体化和本作场景限制影响发挥；不把其他世界线全盛吉尔直接并入。",
        setting: "按Prisma Illya第八张Class Card/幼吉尔记录。",
        basis: "worldbook只用于抽取第八卡吉尔伽美什姓名；定级依据公开角色资料入口和本作第八卡战斗定位，宝具峰值按争议标注。"
      })
    })
  ]);
})();
