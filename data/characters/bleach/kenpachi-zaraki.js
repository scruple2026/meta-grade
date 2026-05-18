(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["死神"];

  if (!work) {
    throw new Error("死神 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "kenpachi-zaraki",
      name: "更木剑八",
      en: "Kenpachi Zaraki",
      ja: "更木剣八",
      affiliation: "护廷十三队十一番队",
      grade: "剑八 / 卍解",
      appearances: ["尸魂界篇", "破面篇", "千年血战篇"],
      timelineStatus: "千年血战篇 / 卍解峰值",
      aliases: ["剑八", "野晒"],
      fandomSlug: "Kenpachi_Zaraki",
      confidence: "review",
      evidenceType: ["原作表现", "官方入口", "跨界参考"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "source",
          scope: "跨界战力参考",
          label: "VS Battles Wiki：Kenpachi Zaraki",
          url: "https://vsbattles.fandom.com/wiki/Kenpachi_Zaraki",
          lang: "en",
          authority: "cross-reference",
          medium: "cross-wiki",
          ratingEvidence: true,
          claim: "用于复核更木剑八封印解除、野晒和卍解的跨界量级口径；本站保留争议标签。"
        },
        {
          type: "official",
          scope: "日文官方角色入口",
          label: "TV动画「BLEACH 千年血战篇」角色页",
          url: "https://bleach-anime.com/character/",
          lang: "ja",
          authority: "official",
          medium: "official-site",
          ratingEvidence: false,
          claim: "用于核对千年血战篇官方角色入口；剑八具体量级仍需原作卷话补证。"
        }
      ],
      defaultTimelineKey: "tybw-bankai",
      timelinePanels: [
        {
          key: "sealed-captain",
          label: "早中期 / 自我封印队长",
          status: "眼罩与自限状态",
          dimensions: dims({
            attack: ["街区级", "城市级｜灵压/剑压｜争议", "自限状态仍有队长级高输出。"],
            defense: ["街区级", "城市级｜灵压/体魄｜争议", "极端承伤和灵压防御突出。"],
            movement: ["超音速", "高超音速｜争议", "队长级高速移动。"],
            reaction: ["超音速", "高超音速｜争议", "依赖本能和战斗经验。"],
            vitality: ["街区级生命阈值", "城市级生命阈值｜灵体/体魄｜争议", "异常承伤能力是核心。"],
            healing: ["缓慢自愈", "常规自愈｜灵体恢复", "无强再生。"],
            energy: ["街区级能量", "城市级能量｜灵压｜争议", "灵压储量巨大但自限。"],
            energyRegen: ["快速回能", "快速回能｜灵压恢复", "战斗中可继续释放灵压。"]
          }),
          notes: "不计入野晒始解和卍解。"
        },
        {
          key: "tybw-shikai",
          label: "千年血战 / 始解野晒",
          status: "解除部分限制、野晒始解",
          dimensions: dims({
            attack: ["城市级", "大陆级｜野晒｜争议", "始解后斩击峰值大幅提升，按高端争议处理。"],
            defense: ["城市级", "城市级｜灵压/体魄｜争议", "承伤极强，但防御不完全等同攻击峰值。"],
            movement: ["高超音速", "高超音速｜争议", "队长级高端速度。"],
            reaction: ["高超音速", "高超音速｜争议", "本能反应和经验突出。"],
            vitality: ["城市级生命阈值", "大陆级生命阈值｜极限承伤｜争议", "极端承伤能力随灵压提升。"],
            healing: ["缓慢自愈", "常规自愈｜灵体恢复", "无强再生。"],
            energy: ["城市级能量", "大陆级能量｜野晒｜争议", "灵压和斩击峰值极高。"],
            energyRegen: ["快速回能", "快速回能｜灵压恢复", "高强度输出会消耗。"]
          }),
          notes: "不计入卍解肉体反噬峰值。"
        },
        {
          key: "tybw-bankai",
          label: "千年血战 / 卍解",
          status: "卍解峰值与肉体反噬",
          dimensions: dims({
            attack: ["城市级", "大陆级｜卍解｜争议", "卍解极大提升斩击和肉体输出，但稳定性差。"],
            defense: ["城市级", "城市级｜灵压/体魄｜争议", "承伤极强，卍解反噬说明防御不等比例提升。"],
            movement: ["高超音速", "高超音速｜争议", "高端近战速度很高。"],
            reaction: ["高超音速", "高超音速｜争议", "更偏本能压制和近战反应。"],
            vitality: ["城市级生命阈值", "大陆级生命阈值｜卍解反噬｜争议", "生命体量极高但身体可能承受不住自身输出。"],
            healing: ["缓慢自愈", "常规自愈｜灵体恢复", "无强再生，重伤需治疗。"],
            energy: ["城市级能量", "大陆级能量｜卍解｜争议", "卍解灵压爆发极高。"],
            energyRegen: ["快速回能", "快速回能｜灵压恢复", "卍解消耗与肉体负担很大。"]
          }),
          notes: "当前主面板版本。"
        }
      ],
      dimensions: dims({
        attack: ["城市级", "大陆级｜卍解｜争议", "卍解极大提升斩击和肉体输出，但稳定性差。"],
        defense: ["城市级", "城市级｜灵压/体魄｜争议", "承伤极强，卍解反噬说明防御不等比例提升。"],
        movement: ["高超音速", "高超音速｜争议", "高端近战速度很高。"],
        reaction: ["高超音速", "高超音速｜争议", "更偏本能压制和近战反应。"],
        vitality: ["城市级生命阈值", "大陆级生命阈值｜卍解反噬｜争议", "生命体量极高但身体可能承受不住自身输出。"],
        healing: ["缓慢自愈", "常规自愈｜灵体恢复", "无强再生，重伤需治疗。"],
        energy: ["城市级能量", "大陆级能量｜卍解｜争议", "卍解灵压爆发极高。"],
        energyRegen: ["快速回能", "快速回能｜灵压恢复", "卍解消耗与肉体负担很大。"]
      }),
      notes: notes({
        penetration: "野晒和卍解以极高斩击穿透为主，不把斩断特殊目标直接外推为更高范围破坏。",
        resistance: "灵压、体魄和痛觉耐受极强；但卍解会反噬身体，无法视作稳定全能防御。",
        sensing: "极端近战本能和灵压感知让他能在高速肉搏中抓住强敌；远程侦查和复杂机制识别不是强项。",
        tactics: "战术简单但压迫力极高，善于通过自我解放和承伤换取近身斩击；卍解失控和远程规则能力会放大短板。",
        special: "巨大灵压、自我封印解除、野晒始解、卍解、极端近战本能。",
        weakness: "技巧和远程机制相对单一；卍解控制不稳且会损伤自身。",
        setting: "按千年血战篇卍解峰值记录，早期自限和始解拆入时间线。",
        basis: "依据更木剑八在尸魂界篇、破面篇和千年血战篇中封印解除、野晒、卍解和承伤表现定级。"
      })
    })
  ]);
})();
