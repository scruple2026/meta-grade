(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/kaleid liner 魔法少女☆伊莉雅"];

  if (!work) {
    throw new Error("Fate/kaleid liner 魔法少女☆伊莉雅 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "chloe-von-einzbern",
      name: "克洛伊·冯·爱因兹贝伦",
      en: "Chloe von Einzbern",
      ja: "クロエ・フォン・アインツベルン",
      affiliation: "伊莉雅阵营 / 爱因兹贝伦",
      grade: "主角团 / Archer常驻梦幻召唤",
      appearances: ["2wei", "3rei", "剧场版相关"],
      timelineStatus: "3rei综合 / Archer能力稳定使用期",
      aliases: ["克洛", "小黑", "黑伊莉雅", "クロ", "Kuro"],
      fandomSlug: "Chloe_von_Einzbern",
      confidence: "review",
      evidenceType: ["官方角色页", "官方分集简介", "资料维基交叉核对"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "official",
          scope: "角色定位与供魔限制",
          label: "动画3rei官方角色页：クロエ・フォン・アインツベルン",
          url: "https://anime.prisma-illya.jp/3rei/character/detail.php",
          lang: "ja",
          authority: "official",
          medium: "official-site",
          ratingEvidence: false,
          claim: "核对克洛伊从伊莉雅诞生、需要伊莉雅供魔维持存在，并与伊莉雅一起进入平行世界。"
        },
        {
          type: "episode",
          scope: "Caladbolg与达利乌斯结界",
          label: "动画3rei官方分集简介第6话",
          url: "https://anime.prisma-illya.jp/3rei/story/",
          citation: "第6話「凍てつく敵意」",
          lang: "ja",
          authority: "official",
          medium: "official-site",
          ratingEvidence: true,
          claim: "官方简介记录克洛伊的Caladbolg只能对达利乌斯的冰结界型宝具造成轻微损伤；用于限制投影宝具峰值。"
        },
        {
          type: "wiki",
          scope: "Archer能力与瞬间转移",
          label: "TYPE-MOON Wiki: Chloe von Einzbern",
          url: "https://typemoon.fandom.com/wiki/Chloe_von_Einzbern",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "交叉核对Archer能力、投影、Caladbolg、短距转移和供魔依存；不作为官方量级证据。"
        }
      ],
      revisionNotes: [
        "初建条目：把Archer技能、投影宝具和短距转移写入特性，不把转移直接折算为移动速度。"
      ],
      dimensions: dims({
        attack: ["墙级", "楼级｜Archer投影/Caladbolg II", "常规双刀和投影强于普通魔法少女；Caladbolg等宝具为集中杀伤，范围破坏保守列楼级。"],
        defense: ["墙级", "房屋级｜Archer Install/回避", "主要靠机动、投影武器、防护和战术回避；硬防不按高阶英灵本体处理。"],
        movement: ["亚音速", "超音速｜近战机动｜争议", "近战爆发和空间转移很强；转移属于特殊权能，不直接写成连续移动速度。"],
        reaction: ["亚音速", "超音速｜Archer战斗经验", "战斗判断和分析力强，可与Saber Install美游等对战。"],
        vitality: ["精锐韧体｜特殊生命结构", "精锐韧体｜供魔维持", "存在依赖伊莉雅供魔，本体不是高硬度肉身。"],
        healing: ["中速自愈", "快速自愈｜供魔/魔术", "依赖魔力供给维持和修复，不是独立高速再生。"],
        energy: ["房屋级能量", "楼级能量｜Archer投影", "魔力和投影资源来自伊莉雅分离后的供给结构，强但有限。"],
        energyRegen: ["中速回能", "快速回能｜伊莉雅供魔", "缺少供魔会影响存在维持和续战。"]
      }),
      notes: notes({
        penetration: "投影双刀、箭矢和Caladbolg II具备集中穿透与爆发杀伤；对强结界和高阶宝具仍有明显上限。",
        resistance: "具备魔术防护、战术回避和短距转移；被供魔切断、拘束或针对存在结构时风险很高。",
        sensing: "Archer常驻Install和投影战经验让她擅长读取弹道、距离和魔力波动；短距转移需要判断落点，不等同无条件索敌。",
        tactics: "战术分析强，善用投影武器、双刀近战、远程Caladbolg和短距转移制造节奏差；供魔被切断时可用战术空间会明显缩小。",
        special: "Archer常驻Install、投影魔术、Kanshou and Bakuya、Caladbolg II、短距转移、供魔维持、战术分析。",
        weakness: "需要伊莉雅供魔维持存在；转移距离和触发条件有限，遭遇结界、空间干涉或供魔封锁会受限。",
        setting: "按3rei综合期记录；克洛伊的Archer能力是稳定特色，但不套用英灵EMIYA全部跨作品量级。",
        basis: "依据官方角色页供魔限制、3rei第6话Caladbolg对达利乌斯结界表现，以及角色资料中投影、转移和战斗能力定级。"
      })
    })
  ]);
})();
