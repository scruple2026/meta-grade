(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/kaleid liner 魔法少女☆伊莉雅"];

  if (!work) {
    throw new Error("Fate/kaleid liner 魔法少女☆伊莉雅 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "julian-ainsworth",
      name: "朱利安·恩兹华斯",
      en: "Julian Ainsworth",
      ja: "ジュリアン・エインズワース",
      affiliation: "恩兹华斯家",
      grade: "恩兹华斯当主 / Rule Master",
      appearances: ["职阶卡回收事件 worldbook key/comment", "3rei", "美游世界相关"],
      timelineStatus: "3rei综合 / Rule Master与Darius宿主",
      aliases: ["朱利安", "Julian", "Julian Ichigi", "一义树理庵", "恩兹华斯当主", "Rule Master"],
      fandomSlug: "Julian_Ainsworth",
      confidence: "review",
      evidenceType: ["官方角色页", "官方分集简介", "资料维基交叉核对", "worldbook姓名字段"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "official",
          scope: "角色身份",
          label: "动画3rei官方角色页：ジュリアン",
          url: "https://anime.prisma-illya.jp/3rei/character/detail.php",
          lang: "ja",
          authority: "official",
          medium: "official-site",
          ratingEvidence: false,
          claim: "核对Julian为美游哥哥、与恩兹华斯家相关的公开角色身份；不单独作为量级依据。"
        },
        {
          type: "episode",
          scope: "黑化英灵与对峙",
          label: "动画3rei官方分集简介第8话",
          url: "https://anime.prisma-illya.jp/3rei/story/",
          citation: "第8話「人と道具」",
          lang: "ja",
          authority: "official",
          medium: "official-site",
          ratingEvidence: true,
          claim: "官方简介记录Julian率领大量黑化英灵并与美游哥哥士郎对峙；用于确认其Rule Master战场资源和峰值来源。"
        },
        {
          type: "episode",
          scope: "恩兹华斯仪式目的",
          label: "动画3rei官方分集简介第9话",
          url: "https://anime.prisma-illya.jp/3rei/story/",
          citation: "第9話「イリヤの選択」",
          lang: "ja",
          authority: "official",
          medium: "official-site",
          ratingEvidence: false,
          claim: "官方简介说明恩兹华斯真正目的与用美游作为圣杯救济人类有关；该仪式写入特殊权能，不反推个人攻击能级。"
        },
        {
          type: "wiki",
          scope: "Rule Master与Flash Air",
          label: "TYPE-MOON Wiki: Julian Ainsworth",
          url: "https://typemoon.fandom.com/wiki/Julian_Ainsworth",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "交叉核对Julian为Ainsworth Holy Grail War的Rule Master、Flash Air使用者、Class Card权限者和Darius宿主；不作为官方量级证据。"
        }
      ],
      revisionNotes: [
        "从魔法少女伊莉雅 worldbook 的 comment/key 姓名池补入朱利安；未读取或采用 worldbook 正文描述。",
        "与达利乌斯条目拆分：朱利安按3rei中当代恩兹华斯当主、Rule Master、Darius宿主和Flash Air使用者记录；达利乌斯仍保留概念继承/祖先侧独立条目。",
        "圣杯许愿、Pandora's Box、黑泥和美游救济世界仪式不直接并入个人单次攻击能级。"
      ],
      dimensions: dims({
        attack: ["墙体级", "街区级｜Flash Air/黑化英灵/黑泥资源｜争议", "正面输出依赖置换魔术、Rule Master资源、黑化英灵和Darius宿主状态；不把世界救济仪式目的并入单发攻击。"],
        defense: ["墙体级", "街区级｜Flash Air/棘枝外壳/宿主状态｜争议", "可用置换魔术、棘枝外壳和Darius宿主状态防护；硬承伤与术式条件分开记录。"],
        movement: ["凡人速", "亚音速｜Flash Air空间置换｜特殊位移", "本体速度不高；Flash Air是空间/物体置换，不直接写成连续移动速度。"],
        reaction: ["凡人速", "亚音速｜术式操作/对Saber Install交战｜争议", "能操作术式、棘枝和置换应对高压战斗，但以术式窗口和预置资源为主。"],
        vitality: ["强化凡体｜宿主", "楼宇级生命阈值｜Darius宿主/概念置换/黑泥连接｜争议", "宿主、Darius概念置换和黑泥/棘枝连接让生命结构复杂，但不等同不可杀或无限生命。"],
        healing: ["无自愈", "中速自愈｜宿主/黑泥/置换条件｜争议", "缺少稳定高速自愈证据；宿主机制和黑泥连接属于条件生存。"],
        energy: ["楼宇级能量", "街区级能量｜黑泥/棘枝魔力/Rule Master权限｜争议", "可借圣杯战争、黑泥、Pandora相关资源和Class Card体系形成高峰值。"],
        energyRegen: ["中速回能", "快速回能｜黑泥/仪式资源｜争议", "有外部/仪式资源支撑，但不是无条件无限回能。"]
      }),
      notes: notes({
        penetration: "Flash Air/置换魔术可改变空间、物体与身体部位位置，棘枝魔力和黑泥/Pandora资源提供异质杀伤，Class Card权限偏规则/系统侧，不等同纯破坏规模。攻击速度：棘枝与黑泥有各自伸展或覆盖过程，Flash Air置换则依赖选定与发动；空间换位不能因无飞行轨迹就视为无限速。",
        resistance: "可用Flash Air逆向转移、棘枝外壳、Darius宿主状态和仪式资源提高生存；但对反魔术、宿主分离、Rule Master权限被破坏、仪式中断和针对心脏/核心的攻击仍有风险。",
        sensing: "可借恩兹华斯城、置换魔术、远程投影/观察和Rule Master权限掌握战场；个人近身感知不按全知处理。",
        tactics: "作为当代恩兹华斯当主与Rule Master，擅长用Class Card、黑化英灵、置换魔术、地形和人质/圣杯条件构建战局；弱点是执念、Darius控制和仪式依赖。",
        special: "Flash Air/置换魔术、Rule Master权限、Class Card制造/破坏权限、Darius宿主与概念置换、Pandora's Box、黑泥、棘枝魔力、黑化英灵指挥、恩兹华斯圣杯战争和美游圣杯计划。",
        weakness: "大量峰值依赖Darius、Pandora's Box/黑泥、恩兹华斯城、Class Card系统、美游圣杯与仪式条件；本体人格和宿主状态也会被Darius影响。",
        setting: "按3rei综合期记录；worldbook仅用于抽取key/comment里的朱利安姓名，不采用其正文描述。朱利安与达利乌斯有关联但本条记录当代宿主/当主侧表现。",
        basis: "依据3rei官方角色页核对Julian身份，官方第8话简介确认其率领大量黑化英灵并与士郎对峙，第9话简介核对恩兹华斯圣杯仪式目的；TYPE-MOON Wiki仅作Flash Air、Rule Master、Class Card、Pandora相关机制交叉入口。"
      })
    })
  ]);
})();
