(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Final Fantasy VII"];
  if (!work) throw new Error("Final Fantasy VII work metadata must load before character files.");

  registerCharacters([work.character({
    id: "tifa-lockhart",
    name: "蒂法·洛克哈特",
    en: "Tifa Lockhart",
    ja: "ティファ・ロックハート",
    aliases: ["Tifa", "Tifa Lockhart", "蒂法", "第七天堂酒吧主人"],
    affiliation: "AVALANCHE / 第七天堂",
    grade: "格斗家 / AVALANCHE成员",
    appearances: ["Final Fantasy VII", "Final Fantasy VII Remake", "Final Fantasy VII Rebirth"],
    timelineStatus: "重制线主线 / AVALANCHE成员",
    fandomSlug: "Tifa_Lockhart",
    confidence: "medium",
    evidenceType: ["官方角色页", "角色资料入口", "worldbook名字索引"],
    sourceQuality: "entry",
    evidenceLinks: [{
      type: "official",
      scope: "官方角色页",
      label: "Square Enix: Tifa Lockhart",
      url: "https://www.square-enix.com/ffvii/en-us/games/rebirth/characters/tifa-lockhart/",
      lang: "en",
      authority: "official",
      medium: "official-site",
      ratingEvidence: false,
      claim: "用于核对蒂法的官方角色定位、AVALANCHE关联和近战格斗形象。"
    }, {
      type: "wiki",
      scope: "角色资料入口",
      label: "Final Fantasy Wiki: Tifa Lockhart",
      url: "https://finalfantasy.fandom.com/wiki/Tifa_Lockhart",
      lang: "en",
      authority: "wiki",
      medium: "wiki",
      ratingEvidence: true,
      claim: "用于交叉核对蒂法的武术、拳套、Limit Break、Materia和主线登场资料。"
    }],
    revisionNotes: ["从缄默之秋 worldbook 的蒂法·洛克哈特 key/comment 补入；未采用 worldbook 正文描述。"],
    dimensions: dims({
        attack: ["砖级｜格斗/拳套", "楼级｜Limit Break/Materia/战斗系统｜争议", "常态按武术和拳套近战记录；峰值包含战斗系统资源但不等同召唤兽或剧情演出。"],
        defense: ["凡人级", "砖级｜防具/战斗系统", "本体为强化训练人类，承伤峰值主要来自装备、防具和战斗系统。"],
        movement: ["凡人速", "亚音速｜格斗爆发", "近战突进和连段速度强于普通人。"],
        reaction: ["凡人速", "亚音速｜武术/团队战斗", "格斗训练和队伍作战支撑近战反应。"],
        vitality: ["强化凡体", "精锐韧体｜主角团战斗经历", "生命体量按训练者和JRPG主角团韧性保守记录。"],
        healing: ["无自愈", "中速自愈｜治疗魔法/道具", "恢复主要依赖Materia、药剂和队伍支援。"],
        energy: ["砖级能量", "楼级能量｜Materia/Limit资源", "资源池来自体力、Materia与Limit；不等同单次攻击全部释放。"],
        energyRegen: ["缓慢回能", "中速回能｜道具/战斗循环", "依赖道具、战斗节奏和队友补给。"]
      }),
    notes: notes({
        penetration: "拳套、武术连段、Limit Break和Materia可提升近战杀伤；召唤兽和队友协同不并入本体常态。",
        resistance: "本体并非高防生物，靠防具、Materia、药剂和战斗系统承伤。",
        sensing: "近战距离感、队伍协同和战场观察优秀，但无稳定远程索敌或未来视。",
        tactics: "擅长贴身连段、打断、队伍配合和在有限窗口内压制敌人。",
        special: "拳套武术、Limit Break、Materia使用、AVALANCHE行动经验。",
        weakness: "远程和大范围压制下需要队友、地形或Materia支持；治疗与资源依赖道具/魔法。",
        setting: "按《Final Fantasy VII》重制线主线蒂法综合记录。",
        basis: "worldbook只用于抽取蒂法·洛克哈特姓名；定级依据Square Enix官方角色页和Final Fantasy Wiki入口，JRPG战斗系统峰值按争议条件保守记录。"
      })
  })]);
})();
