(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/kaleid liner 魔法少女☆伊莉雅"];

  if (!work) {
    throw new Error("Fate/kaleid liner 魔法少女☆伊莉雅 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "darius-ainsworth",
      name: "达利乌斯·恩兹华斯",
      en: "Darius Ainsworth",
      ja: "ダリウス・エインズワース",
      affiliation: "恩兹华斯家",
      grade: "中央反派 / 置换魔术大师 / 圣杯战争主导者",
      appearances: ["3rei", "美游世界相关"],
      timelineStatus: "3rei综合 / Julian宿主与当主权能",
      aliases: ["达利乌斯", "Darius", "ダリウス", "恩兹华斯当主"],
      fandomSlug: "Darius_Ainsworth",
      confidence: "review",
      evidenceType: ["官方角色页", "官方分集简介", "资料维基交叉核对"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "official",
          scope: "当主与圣杯战争定位",
          label: "动画3rei官方角色页：ダリウス・エインズワース",
          url: "https://anime.prisma-illya.jp/3rei/character/detail.php",
          lang: "ja",
          authority: "official",
          medium: "official-site",
          ratingEvidence: false,
          claim: "核对达利乌斯为恩兹华斯当主、追求美游且与圣杯战争深度相关，并持有Gil也未知的宝具。"
        },
        {
          type: "episode",
          scope: "冰结界型宝具",
          label: "动画3rei官方分集简介第6话",
          url: "https://anime.prisma-illya.jp/3rei/story/",
          citation: "第6話「凍てつく敵意」",
          lang: "ja",
          authority: "official",
          medium: "official-site",
          ratingEvidence: true,
          claim: "官方简介记录达利乌斯以强大力量显现冰结界型宝具，克洛伊的Caladbolg也只能造成轻微损伤；用于峰值防御/结界依据。"
        },
        {
          type: "episode",
          scope: "美游圣杯仪式目的",
          label: "动画3rei官方分集简介第9话",
          url: "https://anime.prisma-illya.jp/3rei/story/",
          citation: "第9話「イリヤの選択」",
          lang: "ja",
          authority: "official",
          medium: "official-site",
          ratingEvidence: false,
          claim: "官方简介说明恩兹华斯真正目的是用美游这个圣杯许愿救济人类；该仪式写入特殊权能，不反推个人攻击能级。"
        },
        {
          type: "wiki",
          scope: "置换魔术与概念继承",
          label: "TYPE-MOON Wiki: Darius Ainsworth",
          url: "https://typemoon.fandom.com/wiki/Darius_Ainsworth",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "交叉核对达利乌斯、Julian宿主、置换魔术、Dolls和圣杯战争仪式背景；不作为官方量级证据。"
        }
      ],
      revisionNotes: [
        "补完初稿：把冰结界型宝具、置换魔术和圣杯战争仪式拆开记录；圣杯许愿/世界救济目的不直接并入个人单次攻击能级。"
      ],
      dimensions: dims({
        attack: ["墙级", "街区级｜冰结界型宝具/置换魔术｜仪式", "个人直接攻击表现有限；峰值主要来自冰结界型宝具、置换魔术和圣杯战争仪式资源。"],
        defense: ["墙级", "街区级｜冰结界型宝具｜结界", "冰结界型宝具可抗住克洛伊Caladbolg级攻击，仅受轻微损伤；本体硬防不等于结界峰值。"],
        movement: ["凡人速", "亚音速｜置换魔术辅助", "本体连续移动表现有限；空间/物质置换属于特殊权能，不直接写成高速移动。"],
        reaction: ["凡人速", "亚音速｜术式操作", "更偏幕后操盘和术式/宝具操作，近战反应证据少。"],
        vitality: ["强化凡体｜宿主", "精锐韧体｜宿主/当主权能", "涉及宿主、概念继承和Doll体系，生命结构异常但不等于高硬度肉身。"],
        healing: ["无自愈", "中速自愈｜宿主/置换条件", "缺少独立战斗中高速恢复表现；宿主转移或概念继承属于特殊机制。"],
        energy: ["楼级能量", "街区级能量｜宝具/圣杯战争仪式｜条件", "恩兹华斯家资源、宝具和圣杯战争仪式带来高峰值，但个人即时输出需保守拆分。"],
        energyRegen: ["中速回能", "快速回能｜仪式/家系资源", "依赖仪式、场地、Dolls和美游圣杯资源，不写瞬时回能。"]
      }),
      notes: notes({
        penetration: "冰结界型宝具偏结界、拘束和范围控制；置换魔术能改变物体、空间和战场结构，属于规则/空间侧压制，不等同纯破坏规模。攻击速度：冰结界需展开后拘束范围，置换魔术按选定对象和空间替换生效；二者都不是由达利乌斯奔跑带动的普通弹体。",
        resistance: "冰结界型宝具可提供高强度结界防护，Doll、宿主和概念继承机制提高生存复杂度；本体对直接斩杀、宿主剥离、仪式中断和圣杯资源丧失仍有风险。",
        sensing: "更多依赖恩兹华斯术式、Doll体系、场地仪式和宿主视角掌握战场；个人近身感知表现有限。",
        tactics: "幕后布局和资源调度强，善用Dolls、Class Card和圣杯仪式构建胜利条件；正面遭遇战和宿主/仪式被破坏时战术冗余不足。",
        special: "恩兹华斯置换魔术、Doll制造与运用、Class Card制造/运作体系、冰结界型宝具、圣杯战争仪式、对美游圣杯的利用、Julian宿主与概念继承。",
        weakness: "大量能力依赖宿主、家系术式、Dolls、场地仪式和美游圣杯；个人正面近战资料少，若仪式被破坏或宿主/概念继承被针对，整体威胁会下降。",
        setting: "按3rei综合期达利乌斯/Julian宿主状态记录；美游圣杯许愿和世界救济目标属于仪式/剧情目的，不作为个人常态战力直接定级。",
        basis: "依据3rei官方角色页对当主、圣杯战争和未知宝具的说明，第6话冰结界型宝具抗Caladbolg表现，第9话美游圣杯仪式目的，以及资料入口中置换魔术和Doll体系保守定级。"
      })
    })
  ]);
})();
