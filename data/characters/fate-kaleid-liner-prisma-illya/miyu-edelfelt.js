(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/kaleid liner 魔法少女☆伊莉雅"];

  if (!work) {
    throw new Error("Fate/kaleid liner 魔法少女☆伊莉雅 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "miyu-edelfelt",
      name: "美游·艾德费尔特",
      en: "Miyu Edelfelt",
      ja: "美遊・エーデルフェルト",
      affiliation: "伊莉雅阵营 / 朔月家 / 艾德费尔特家",
      grade: "主角团 / 魔法少女 / 完全圣杯",
      appearances: ["プリズマ☆イリヤ", "2wei", "3rei", "雪下的誓言"],
      timelineStatus: "3rei综合 / 魔法少女与圣杯身份分离记录",
      aliases: ["美游", "美遊", "朔月美游", "朔月美遊", "Miyu Sakatsuki"],
      fandomSlug: "Miyu_Edelfelt",
      confidence: "review",
      evidenceType: ["官方角色页", "官方分集简介", "资料维基交叉核对"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "official",
          scope: "角色定位",
          label: "动画3rei官方角色页：美遊・エーデルフェルト",
          url: "https://anime.prisma-illya.jp/3rei/character/detail.php",
          lang: "ja",
          authority: "official",
          medium: "official-site",
          ratingEvidence: false,
          claim: "核对美游为Magical Sapphire契约者、与伊莉雅并肩作战并被恩兹华斯追索的3rei定位。"
        },
        {
          type: "episode",
          scope: "圣杯身份与牺牲条件",
          label: "动画3rei官方分集简介第9话",
          url: "https://anime.prisma-illya.jp/3rei/story/",
          citation: "第9話「イリヤの選択」",
          lang: "ja",
          authority: "official",
          medium: "official-site",
          ratingEvidence: false,
          claim: "官方简介说明恩兹华斯目的是用美游这个圣杯许愿救济人类；该仪式能力写入特殊权能，不直接抬主面板。"
        },
        {
          type: "episode",
          scope: "Rider Install与宝具战",
          label: "动画2wei官方分集简介第10话",
          url: "https://anime.prisma-illya.jp/2wei/story/",
          citation: "第10話「その手が守ったものは」",
          lang: "ja",
          authority: "official",
          medium: "official-site",
          ratingEvidence: true,
          claim: "官方简介记录美游Rider Install并以宝具攻击巴泽特；用于Class Card峰值战斗表现依据。"
        },
        {
          type: "wiki",
          scope: "完全圣杯与Class Card",
          label: "TYPE-MOON Wiki: Miyu Edelfelt",
          url: "https://typemoon.fandom.com/wiki/Miyu_Edelfelt",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "交叉核对美游为朔月家神稚儿/完全圣杯、Magical Sapphire和Class Card使用者；不作为官方量级证据。"
        }
      ],
      defaultTimelineKey: "holy-grail-class-cards",
      timelinePanels: [
        {
          key: "sapphire-magical-girl",
          label: "初期 / Magical Sapphire契约",
          status: "常规魔法少女，技术成熟但不计圣杯仪式",
          dimensions: dims({
            attack: ["墙级", "房屋级｜魔法少女", "战斗技术优于早期伊莉雅，常规输出仍以对人和局部破坏为主。"],
            defense: ["墙级", "房屋级｜屏障", "变身提供魔法屏障与防护。"],
            movement: ["亚音速", "亚音速｜飞行", "可飞行和高速突进，未按音速记录。"],
            reaction: ["亚音速", "亚音速", "早期近战判断和战斗经验较好。"],
            vitality: ["强化凡体", "精锐韧体｜魔法少女防护", "本体仍是儿童，变身防护和意志提高续战。"],
            healing: ["常规自愈", "快速自愈｜魔杖加速恢复", "依赖变身和供魔，不是独立再生体质。"],
            energy: ["房屋级能量", "楼级能量｜万花筒魔杖", "Magical Sapphire供魔稳定。"],
            energyRegen: ["快速回能", "极速回能｜万花筒魔杖", "供魔强但受身体与术式承载限制。"]
          }),
          notes: "不把朔月圣杯身份和后续Class Card峰值并入初期常态。"
        },
        {
          key: "holy-grail-class-cards",
          label: "3rei综合 / 完全圣杯与Class Card",
          status: "Class Card使用者；圣杯许愿能力单列为特殊/仪式",
          dimensions: dims({
            attack: ["房屋级", "街区级｜Rider/Saber/Archer Install｜争议", "常规魔法输出稳健；Rider、Saber、Archer等Class Card宝具峰值按本作可见规模保守列街区级。"],
            defense: ["房屋级", "楼级｜魔法屏障/Install", "屏障与Class Card加成提高承伤，但圣杯身份不等同常驻硬防。"],
            movement: ["亚音速", "超音速｜飞行/Install｜争议", "Install可强化机动；缺少稳定高超音速证据。"],
            reaction: ["亚音速", "超音速｜Class Card战", "能参与强敌战并熟练使用卡片，反应仍按画面表现保守记录。"],
            vitality: ["精锐韧体｜完全圣杯", "楼级生命阈值｜魔杖/圣杯容器", "作为圣杯容器具有特殊价值和续战潜力，但可被拘束、抽血和仪式利用。"],
            healing: ["快速自愈｜魔杖加速恢复", "极速自愈｜供魔/仪式条件", "恢复依赖魔杖、仪式和外部条件，不按无条件瞬愈。"],
            energy: ["楼级能量", "街区级能量｜Class Card/圣杯仪式｜条件", "个人战斗能量与仪式级圣杯资源分开；仪式许愿不反推单次攻击。"],
            energyRegen: ["快速回能", "极速回能｜万花筒魔杖/圣杯", "供魔极强但不写无限回能，避免把资源设定直接换成主等级。"]
          }),
          notes: "当前主面板；圣杯许愿和英灵召唤属于特殊/仪式，不直接并入攻击能级。"
        }
      ],
      revisionNotes: [
        "初建条目：将美游的完全圣杯身份、许愿/召唤能力和个人魔法少女战斗面板分开记录。"
      ],
      dimensions: dims({
        attack: ["房屋级", "街区级｜Rider/Saber/Archer Install｜争议", "常规魔法输出稳健；Rider、Saber、Archer等Class Card宝具峰值按本作可见规模保守列街区级。"],
        defense: ["房屋级", "楼级｜魔法屏障/Install", "屏障与Class Card加成提高承伤，但圣杯身份不等同常驻硬防。"],
        movement: ["亚音速", "超音速｜飞行/Install｜争议", "Install可强化机动；缺少稳定高超音速证据。"],
        reaction: ["亚音速", "超音速｜Class Card战", "能参与强敌战并熟练使用卡片，反应仍按画面表现保守记录。"],
        vitality: ["精锐韧体｜完全圣杯", "楼级生命阈值｜魔杖/圣杯容器", "作为圣杯容器具有特殊价值和续战潜力，但可被拘束、抽血和仪式利用。"],
        healing: ["快速自愈｜魔杖加速恢复", "极速自愈｜供魔/仪式条件", "恢复依赖魔杖、仪式和外部条件，不按无条件瞬愈。"],
        energy: ["楼级能量", "街区级能量｜Class Card/圣杯仪式｜条件", "个人战斗能量与仪式级圣杯资源分开；仪式许愿不反推单次攻击。"],
        energyRegen: ["快速回能", "极速回能｜万花筒魔杖/圣杯", "供魔极强但不写无限回能，避免把资源设定直接换成主等级。"]
      }),
      notes: notes({
        penetration: "Class Card宝具可提供高穿透或特殊命中方式；圣杯许愿、英灵召唤和仪式结果不等同于美游自身单次攻击破坏。",
        resistance: "Magical Sapphire提供屏障、防护和恢复；作为圣杯容器价值极高但并非免疫拘束、抽血、封印或仪式利用。",
        sensing: "魔杖和Class Card战斗经验提供对魔力、宝具前摇和近身威胁的基础识别；圣杯身份不等于常态全知索敌。",
        tactics: "战斗执行冷静，擅长按卡片职阶切换攻防和距离；但被圣杯身份、仪式目标或资源抽取针对时容易从主动战斗转为被保护对象。",
        special: "万花筒魔杖供魔、飞行、魔法屏障、Class Card Include/Install、Saber/Rider/Archer等宝具使用、完全圣杯、许愿/英灵召唤仪式潜力。",
        weakness: "本人容易被针对圣杯身份拘束或抽取资源；圣杯能力通常依赖仪式、愿望、场地和外部条件，不能随意转化为即时战斗输出。",
        setting: "按3rei综合期记录；美游的个人战斗面板与完整圣杯的仪式功能分开。",
        basis: "依据官方3rei角色页、3rei第9话圣杯目的、2wei第10话Rider Install宝具战，以及角色资料中Class Card与完全圣杯身份交叉定级。"
      })
    })
  ]);
})();
