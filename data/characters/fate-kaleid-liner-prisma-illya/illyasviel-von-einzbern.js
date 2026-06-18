(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/kaleid liner 魔法少女☆伊莉雅"];

  if (!work) {
    throw new Error("Fate/kaleid liner 魔法少女☆伊莉雅 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "illyasviel-von-einzbern",
      name: "伊莉雅丝菲尔·冯·爱因兹贝伦",
      en: "Illyasviel von Einzbern",
      ja: "イリヤスフィール・フォン・アインツベルン",
      affiliation: "伊莉雅阵营 / 万花筒魔法少女",
      grade: "主角 / 魔法少女 / 小圣杯",
      appearances: ["プリズマ☆イリヤ", "2wei", "3rei", "剧场版相关"],
      timelineStatus: "3rei综合 / 可用Class Card与Zwei峰值",
      aliases: ["伊莉雅", "伊莉亚", "Illya", "Ilya", "Prisma Illya", "プリズマイリヤ"],
      fandomSlug: "Illyasviel_von_Einzbern_(Fate/kaleid)",
      confidence: "review",
      evidenceType: ["官方角色页", "官方分集简介", "资料维基交叉核对"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "official",
          scope: "角色定位",
          label: "动画3rei官方角色页：イリヤスフィール・フォン・アインツベルン",
          url: "https://anime.prisma-illya.jp/3rei/character/detail.php",
          lang: "ja",
          authority: "official",
          medium: "official-site",
          ratingEvidence: false,
          claim: "核对伊莉雅为Magical Ruby契约者、经历第8张Class Card战斗并进入平行世界的3rei阶段角色定位。"
        },
        {
          type: "episode",
          scope: "Saber Install / Excalibur",
          label: "动画3rei官方分集简介第12话",
          url: "https://anime.prisma-illya.jp/3rei/story/",
          citation: "第12話「繋いだ奇跡」",
          lang: "ja",
          authority: "official",
          medium: "official-site",
          ratingEvidence: true,
          claim: "官方简介记录伊莉雅Saber Install并释放Excalibur对抗圣杯泥英灵；用于峰值攻击和短时输出依据。"
        },
        {
          type: "wiki",
          scope: "魔法少女能力与Zwei Form",
          label: "TYPE-MOON Wiki: Illyasviel von Einzbern (Fate/kaleid)",
          url: "https://typemoon.fandom.com/wiki/Illyasviel_von_Einzbern_(Fate/kaleid)",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "交叉核对万花筒魔杖带来的结界、身体强化、加速恢复、飞行、小圣杯输出和Zwei Form条件；不作为官方量级证据。"
        }
      ],
      defaultTimelineKey: "class-card-zwei",
      timelinePanels: [
        {
          key: "magical-girl",
          label: "初期 / 万花筒魔法少女",
          status: "Magical Ruby常规变身，不计Zwei和强宝具峰值",
          dimensions: dims({
            attack: ["墙级", "房屋级｜魔力弹/Schneiden", "常规魔力弹、切割和屏障运用以局部破坏及对人战为主。"],
            defense: ["墙级", "房屋级｜魔法屏障", "Magical Ruby提供屏障和身体防护，但常态承伤不按英灵本体处理。"],
            movement: ["亚音速", "亚音速｜飞行", "可飞行和短距机动，缺少稳定音速证据。"],
            reaction: ["亚音速", "亚音速", "早期战斗经验不足，主要靠魔杖辅助和临场想象力。"],
            vitality: ["强化凡体", "精锐韧体｜魔法少女防护", "本体仍是小学生，变身后靠防护和意志续战。"],
            healing: ["中速自愈", "快速自愈｜魔杖加速恢复", "资料显示变身有加速恢复，但不是断肢级再生。"],
            energy: ["房屋级能量", "楼级能量｜万花筒魔杖", "魔杖供魔很强，但常规释放受经验、身体和术式形状限制。"],
            energyRegen: ["快速回能", "极速回能｜万花筒魔杖", "魔杖可从平行世界供魔，主面板不写瞬时回能。"]
          }),
          notes: "初期魔法少女状态；小圣杯潜力和强Class Card峰值另列。"
        },
        {
          key: "class-card-zwei",
          label: "3rei综合 / Class Card与Zwei峰值",
          status: "Saber Install、Zwei Form和小圣杯潜力的综合峰值",
          dimensions: dims({
            attack: ["房屋级", "街区级｜Zwei/圣剑｜争议", "常规魔法输出高于初期；峰值来自Saber Install、Excalibur和Zwei短时爆发，按本作可见规模保守列街区级。"],
            defense: ["房屋级", "街区级｜Zwei/屏障｜短时", "屏障、防护和Zwei形态可短时承受高压战斗；不把圣杯身份直接换算为常驻硬防。"],
            movement: ["亚音速", "超音速｜飞行/Install｜争议", "飞行、突进和Class Card加成提升机动，缺少稳定高超音速以上证据。"],
            reaction: ["亚音速", "超音速｜强敌战", "能参与英灵影、恩兹华斯战斗，但许多规避包含魔杖辅助、屏障和预判。"],
            vitality: ["精锐韧体｜小圣杯", "楼级生命阈值｜Zwei｜短时", "小圣杯和魔杖提高续战，Zwei对身体负担极大。"],
            healing: ["快速自愈｜魔杖加速恢复", "极速自愈｜魔杖/短时", "恢复依赖变身和供魔；不是无条件不死或瞬间复活。"],
            energy: ["楼级能量", "街区级能量｜Zwei/圣剑｜争议", "能量池受魔杖和小圣杯潜力支撑，但单次输出仍按本作表现限制。"],
            energyRegen: ["快速回能", "极速回能｜万花筒魔杖", "魔杖供魔强，身体承载和术式控制是主要限制。"]
          }),
          notes: "当前主面板；强峰值均标注为短时、争议或形态条件。"
        }
      ],
      revisionNotes: [
        "初建条目：保守处理万花筒魔杖供魔、小圣杯潜力、英灵卡和Zwei Form，暂不使用城市级以上主面板。"
      ],
      dimensions: dims({
        attack: ["房屋级", "街区级｜Zwei/圣剑｜争议", "常规魔法输出高于初期；峰值来自Saber Install、Excalibur和Zwei短时爆发，按本作可见规模保守列街区级。"],
        defense: ["房屋级", "街区级｜Zwei/屏障｜短时", "屏障、防护和Zwei形态可短时承受高压战斗；不把圣杯身份直接换算为常驻硬防。"],
        movement: ["亚音速", "超音速｜飞行/Install｜争议", "飞行、突进和Class Card加成提升机动，缺少稳定高超音速以上证据。"],
        reaction: ["亚音速", "超音速｜强敌战", "能参与英灵影、恩兹华斯战斗，但许多规避包含魔杖辅助、屏障和预判。"],
        vitality: ["精锐韧体｜小圣杯", "楼级生命阈值｜Zwei｜短时", "小圣杯和魔杖提高续战，Zwei对身体负担极大。"],
        healing: ["快速自愈｜魔杖加速恢复", "极速自愈｜魔杖/短时", "恢复依赖变身和供魔；不是无条件不死或瞬间复活。"],
        energy: ["楼级能量", "街区级能量｜Zwei/圣剑｜争议", "能量池受魔杖和小圣杯潜力支撑，但单次输出仍按本作表现限制。"],
        energyRegen: ["快速回能", "极速回能｜万花筒魔杖", "魔杖供魔强，身体承载和术式控制是主要限制。"]
      }),
      notes: notes({
        penetration: "魔力弹、Schneiden和宝具峰值有较强对人/对屏障杀伤；Excalibur和Zwei属于形态或短时峰值，不等同于稳定大范围破坏。",
        resistance: "Magical Ruby提供魔法屏障、物理防护和加速恢复；精神与概念空间抗性有表现，但封印、置换、因果和仪式类能力仍需具体判断。",
        sensing: "主要依赖魔法少女战斗经验、魔杖辅助、视听观察和对魔力/宝具发动的警觉；没有稳定远距索敌或未来视，强敌战中的规避多含屏障、飞行和预判。",
        tactics: "成长型战斗者，能在队友和魔杖提示下调整卡片、屏障和炮击节奏；但早期经验不足，Zwei Form等峰值更偏意志爆发而非精密战术。",
        special: "万花筒魔杖供魔、飞行、魔力弹、屏障、Class Card Include/Install、Saber Install、Zwei Form、小圣杯潜力、强意志抗精神干涉。",
        weakness: "经验、身体负担、魔杖状态、供魔承载和形态持续时间限制明显；Zwei Form有高风险身体代价。",
        setting: "按3rei综合版本记录；不把Fate本篇英灵通用资料、圣杯许愿和无限供魔直接换算为主面板。",
        basis: "依据官方角色页、3rei第12话Saber Install/Excalibur分集简介，以及角色能力资料中的魔法屏障、加速恢复、小圣杯输出和Zwei条件保守定级。"
      })
    })
  ]);
})();
