(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/kaleid liner 魔法少女☆伊莉雅"];

  if (!work) {
    throw new Error("Fate/kaleid liner 魔法少女☆伊莉雅 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "angelica-ainsworth",
      name: "安洁莉卡·恩兹华斯",
      en: "Angelica Ainsworth",
      ja: "アンジェリカ",
      affiliation: "恩兹华斯家 / Dolls",
      grade: "主要反派战斗员 / Archer（英雄王）Class Card",
      appearances: ["3rei", "美游世界相关"],
      timelineStatus: "3rei / Archer卡持有期",
      aliases: ["安洁莉卡", "Angelica", "アンジェリカ", "Archer卡持有者"],
      fandomSlug: "Angelica_Ainsworth",
      confidence: "review",
      evidenceType: ["官方角色页", "官方分集简介", "资料维基交叉核对"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "official",
          scope: "角色定位与英雄王卡",
          label: "动画3rei官方角色页：アンジェリカ",
          url: "https://anime.prisma-illya.jp/3rei/character/detail.php",
          lang: "ja",
          authority: "official",
          medium: "official-site",
          ratingEvidence: false,
          claim: "核对安洁莉卡为恩兹华斯Dolls、置换魔术使用者，并持有Archer/英雄王Gilgamesh Class Card与大量宝具。"
        },
        {
          type: "episode",
          scope: "恩兹华斯宅邸战",
          label: "动画3rei官方分集简介第3-4话",
          url: "https://anime.prisma-illya.jp/3rei/story/",
          citation: "第3話「君の本当の敵」 / 第4話「弱虫の妹へ」",
          lang: "ja",
          authority: "official",
          medium: "official-site",
          ratingEvidence: true,
          claim: "官方简介记录伊莉雅潜入恩兹华斯宅邸后遭遇安洁莉卡，并把Archer Gilgamesh卡列为主角组需要对抗的敌方卡。"
        },
        {
          type: "wiki",
          scope: "Archer卡与置换魔术",
          label: "TYPE-MOON Wiki: Angelica Ainsworth",
          url: "https://typemoon.fandom.com/wiki/Angelica_Ainsworth",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "交叉核对安洁莉卡为Gilgamesh Archer Class Card使用者、Doll身体和置换魔术相关能力；不作为官方量级证据。"
        }
      ],
      revisionNotes: [
        "补完初稿：英雄王卡、王之财宝和置换魔术按特殊权能/峰值标签记录，不把英灵Gilgamesh跨作品高端设定直接并入主面板。"
      ],
      dimensions: dims({
        attack: ["房屋级", "街区级｜王之财宝｜英雄王卡｜争议", "常规宝具投射和置换魔术压制力强；峰值按本作对主角组和结界战表现保守列街区级，不套用Gilgamesh全设定。"],
        defense: ["墙级", "楼级｜Archer Install｜置换魔术", "Doll身体、英雄王卡装甲和置换魔术提高承伤与回避，但不等同英灵本体硬防。"],
        movement: ["亚音速", "超音速｜宝具机动/置换辅助｜争议", "可用置换魔术和宝具压制形成高速战斗节奏；空间置换不直接折算连续移动速度。"],
        reaction: ["亚音速", "超音速｜Class Card战", "能处理魔法少女、克洛伊和英雄王卡相关战斗，峰值仍按本作画面保守记录。"],
        vitality: ["精锐韧体｜Doll", "楼级生命阈值｜Doll/Install", "Doll身体和卡片加持提升续战，但存在人格、灵魂和置换术式层面的弱点。"],
        healing: ["无自愈", "中速自愈｜Doll维护/置换条件", "没有稳定反转或高速再生表现；Doll维护、置换或外部处理不等同战斗中瞬愈。"],
        energy: ["楼级能量", "街区级能量｜英雄王卡/宝具储备｜争议", "王之财宝提供大量宝具资源，但单次输出和本体承载按本作表现限制。"],
        energyRegen: ["中速回能", "快速回能｜Class Card/宝具储备", "可连续展开宝具压制，但卡片、Doll身体和战术条件不是无限。"]
      }),
      notes: notes({
        penetration: "王之财宝的多宝具投射、锁链/兵装压制和英雄王卡提供高单体穿透与饱和火力；置换魔术可改变位置与攻防角度，但不等同大范围破坏升级。",
        resistance: "Doll身体、Class Card装甲和置换魔术带来承伤、回避和空间处理能力；对灵魂/人格干涉、供魔切断、强封印、反置换或针对Doll结构的手段仍需具体判断。",
        sensing: "依赖Doll身体、置换魔术操作和Gilgamesh卡片带来的宝具/空间认知；能处理高速魔术战，但对封锁空间和卡片剥离需要另判。",
        tactics: "擅长用王之财宝式弹幕、置换魔术和距离控制压制敌人；战术核心依赖卡片、Doll和恩兹华斯术式，一旦机制被识破会明显降效。",
        special: "Archer（Gilgamesh）Class Card、王之财宝式宝具投射、置换魔术、Doll身体、恩兹华斯家术式、宝具压制和空间位置改写。",
        weakness: "高度依赖Class Card、Doll身体和置换魔术操作；若遭遇空间封锁、供魔/卡片剥离、Doll核心处理或对英雄王宝具情报克制，优势会明显下降。",
        setting: "按Prisma Illya 3rei安洁莉卡记录；英雄王卡只取本作安洁莉卡可用表现，不把Fate本篇Gilgamesh全部宝具和宇宙论设定直接套入。",
        basis: "依据3rei官方角色页对Dolls、置换魔术、英雄王Archer卡和无数宝具的说明，结合第3-4话宅邸战、敌方Archer卡定位和TYPE-MOON资料入口保守定级。"
      })
    })
  ]);
})();
