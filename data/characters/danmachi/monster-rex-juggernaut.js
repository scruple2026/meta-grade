(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["在地下城寻求邂逅是否搞错了什么"];

  if (!work) {
    throw new Error("DanMachi work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "monster-rex-juggernaut",
      name: "楼层主与破坏者",
      en: "Monster Rex and Juggernaut",
      ja: "階層主 / ジャガーノート",
      affiliation: "地下城",
      grade: "楼层主 / Monster Rex / 异常防卫个体",
      appearances: ["异端儿篇", "下层至深层"],
      timelineStatus: "高危怪物总括 / 个体差异",
      aliases: [
        "楼层主",
        "Monster Rex",
        "Floor Boss",
        "Goliath",
        "哥利亚",
        "Black Goliath",
        "黑色哥利亚",
        "Amphisbaena",
        "Udaeus",
        "Balor",
        "Irregular",
        "异常个体",
        "Juggernaut",
        "破坏者",
        "ジャガーノート"
      ],
      fandomSlug: "Monsters",
      confidence: "review",
      evidenceType: ["官方剧情页", "资料入口"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "official",
          scope: "第4期第10-11话剧情页",
          label: "TVアニメ「ダンまちIV」公式サイト：STORY",
          url: "https://danmachi.com/danmachi4/story/index2.php?slideNum=10",
          lang: "ja",
          authority: "official",
          medium: "official-site",
          ratingEvidence: true,
          claim: "官方剧情页把 Juggernaut 描述为地下城为维持秩序产下的破坏者，并明确其异常力量、速度和魔法反射。"
        },
        {
          type: "wiki",
          scope: "怪物总表",
          label: "DanMachi Wiki: Monsters",
          url: "https://danmachi.fandom.com/wiki/Monsters",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对 Goliath、Black Goliath、Amphisbaena、Udaeus、Balor 与 Juggernaut 等高危怪物条目及个体差异。"
        },
        {
          type: "wiki",
          scope: "术语资料入口",
          label: "DanMachi Wiki: Terminology",
          url: "https://danmachi.fandom.com/wiki/Terminology",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对 Monster Rex / Floor Boss 是特定楼层出现的强大怪物；不把楼层主称号直接折算为城市级以上。"
        }
      ],
      revisionNotes: ["从异端儿篇 worldbook 的 enemy_楼层主异常个体Juggernaut key/comment 补入；未采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["楼级", "街区级｜楼层主/Juggernaut｜个体差异", "哥利亚、安菲斯比纳、乌代俄斯、巴罗尔与Juggernaut差异很大，按可见破坏保守收束。"],
        defense: ["楼级", "街区级｜楼层主/魔法反射", "楼层主巨体和个体能力承伤强；Juggernaut偏魔法反射，物理防御并非同档无短板。"],
        movement: ["亚音速", "超音速｜Juggernaut/高危个体", "官方剧情页强调Juggernaut异常速度；普通楼层主机动依体型和楼层环境变化。"],
        reaction: ["亚音速", "超音速｜高危怪物反应", "Juggernaut和高阶楼层主可压制上级冒险者，但总括条目不统一给更高速度。"],
        vitality: ["楼级生命阈值", "街区级生命阈值｜楼层主/异常个体", "楼层主体量和生命结构高于普通怪物；Juggernaut有时间限制与物理防御短板。"],
        healing: ["缓慢自愈", "快速自愈｜黑哥利亚/个体差异", "黑哥利亚等特殊个体有强再生；多数楼层主和Juggernaut不默认共享。"],
        energy: ["楼级能量", "街区级能量｜魔石/楼层主体量", "资源来自巨体、魔石和特殊个体能力；Juggernaut并非普通魔石资源池。"],
        energyRegen: ["缓慢回能", "中速回能｜休整/个体差异", "高危怪物可持续压迫，但缺少稳定瞬时回能证据；Juggernaut是时限型异常防卫个体。"]
      }),
      notes: notes({
        penetration: "楼层主以巨体、吐息、召唤、地形攻击和高阶怪物体魄压制；Juggernaut以利爪、异常速度和魔法反射制造杀伤。",
        resistance: "楼层主体魄强，部分具再生或环境优势；Juggernaut可反射魔法但物理防御存在短板，不能按全能防御处理。",
        sensing: "以地下城环境适应、怪物本能和个体能力索敌；不等同全域感知。",
        tactics: "高危怪物偏正面压制与环境优势；个体如Juggernaut表现为杀戮防卫机制，不按复杂谋略角色处理。",
        special: "Monster Rex、Floor Boss、巨体、吐息/召唤/地形攻击、黑哥利亚再生、Juggernaut魔法反射与时限性。",
        weakness: "楼层主有楼层、复活间隔、魔石和环境条件；Juggernaut魔法反射不覆盖物理弱点，且会随时间崩解。",
        setting: "按 worldbook enemy 索引中的楼层主、异常个体和Juggernaut总括记录；具体个体若后续需要精修，可拆为独立条目。",
        basis: "worldbook只用于抽取楼层主、Monster Rex、Goliath、Amphisbaena、Udaeus、Balor和Juggernaut等名称；定级依据官方剧情页、公开怪物总表和术语资料入口，称号与Level只作相对语境。"
      })
    })
  ]);
})();
