(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["龙族（江南）"];
  if (!work) throw new Error("龙族（江南） work metadata must load before character files.");

  registerCharacters([work.character({
    id: "inuyama-ga",
    name: "犬山贺",
    en: "Inuyama Ga",
    ja: "犬山賀",
    aliases: ["犬山家主", "阿贺", "荆棘丛中的男孩"],
    affiliation: "蛇岐八家 / 犬山家",
    grade: "家主 / 日本分部首任分部长",
    appearances: ["黑月之潮"],
    timelineStatus: "黑月之潮 / 老年家主",
    fandomSlug: "犬山贺",
    confidence: "medium",
    evidenceType: ["资料入口", "混血种/刀术"],
    sourceQuality: "entry",
    evidenceLinks: [{
      type: "source",
      scope: "角色资料入口",
      label: "抖音百科：犬山贺",
      url: "https://m.baike.com/wikiid/821278109672015046",
      lang: "zh",
      authority: "wiki",
      medium: "wiki",
      ratingEvidence: false,
      claim: "用于核对犬山贺的《龙族》角色身份、蛇岐八家犬山家主和日本分部首任分部长定位。"
    }, {
      type: "source",
      scope: "作品入口",
      label: "微信读书：龙族III 黑月之潮（中）",
      url: "https://weread.qq.com/web/bookDetail/7d732d005e3dd37d742d028",
      lang: "zh",
      authority: "licensed",
      medium: "publisher",
      ratingEvidence: false,
      claim: "用于核对《黑月之潮》中昂热与犬山贺冲突的故事入口，不单独支撑精确量级。"
    }],
    revisionNotes: ["worldbook 仅用于抽取《龙族》角色姓名；定级依据公开作品/资料入口并按保守跨界面板记录。"],
    dimensions: dims({
        attack: ["墙级", "房屋级｜刀术/混血种体质/家主经验", "老年仍具顶尖混血种刀术和家主级经验，峰值保守到房屋级。"],
        defense: ["墙级", "房屋级｜混血种骨骼/承伤｜争议", "承伤高于普通混血种，但肉身不按龙王级处理。"],
        movement: ["亚音速", "音速｜混血种爆发/刀术", "刀术对决和短时爆发可达音速档保守峰值。"],
        reaction: ["亚音速", "音速｜刀术/老练战斗经验", "反应依赖刀术训练、血统和与昂热相关的实战经验。"],
        vitality: ["强化凡体", "房屋级生命阈值｜混血种承伤｜争议", "生命体量按高端混血种老年个体处理，不写龙类结构。"],
        healing: ["缓慢自愈", "中速自愈｜血统/医疗", "恢复依赖血统和医疗条件。"],
        energy: ["砖级能量", "房屋级能量｜刀术/血统爆发", "能量池来自体能、血统和武装，不是大型言灵输出。"],
        energyRegen: ["缓慢回能", "中速回能｜休整/医疗", "高强度战斗后需要休整。"]
      }),
    notes: notes({
        penetration: "刀术和近身斩击是主要杀伤，偏单体穿透。",
        resistance: "混血种骨骼和家主级体质提高承伤，但年龄与伤势限制明显。",
        sensing: "蛇岐八家情报、家主经验和对昂热/日本分部局势的判断强。",
        tactics: "老练武人和组织首脑，擅长近身交锋、政治判断和牺牲式保护。",
        special: "蛇岐八家犬山家主、日本分部首任分部长、混血种刀术。",
        weakness: "老年状态、组织牵制和对昂热的复杂情感限制其稳定发挥。",
        setting: "按黑月之潮犬山贺记录。",
        basis: "worldbook只用于抽取犬山贺姓名；公开资料入口显示其犬山家主、日本分部首任分部长和昂热相关战斗线，按高端混血种刀术角色保守记录。"
      })
  })]);
})();
