(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["海贼王"];

  if (!work) {
    throw new Error("海贼王 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "edward-newgate",
      name: "爱德华·纽盖特",
      en: "Edward Newgate",
      ja: "エドワード・ニューゲート",
      affiliation: "白胡子海贼团",
      grade: "四皇 / 震震果实",
      appearances: ["回忆", "顶上战争"],
      timelineStatus: "顶上战争 / 老年病弱状态",
      aliases: ["白胡子", "Whitebeard", "震震果实"],
      fandomSlug: "Edward_Newgate",
      confidence: "review",
      evidenceType: ["原作表现", "官方入口", "跨界参考"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "source",
          scope: "跨界战力参考",
          label: "VS Battles Wiki：Edward Newgate",
          url: "https://vsbattles.fandom.com/wiki/Edward_Newgate",
          lang: "en",
          authority: "cross-reference",
          medium: "cross-wiki",
          ratingEvidence: true,
          claim: "用于复核白胡子震震果实、顶上战争和巅峰期的跨界量级口径；本站不把传闻字面折算为全球级。"
        },
        {
          type: "official",
          scope: "日文官方作品入口",
          label: "少年ジャンプ官方《ONE PIECE》作品页",
          url: "https://www.shonenjump.com/j/rensai/onepiece.html",
          lang: "ja",
          authority: "official",
          medium: "official-site",
          ratingEvidence: false,
          claim: "作为日文官方作品入口保留；白胡子具体量级仍需原作卷话补证。"
        }
      ],
      defaultTimelineKey: "marineford-old",
      timelinePanels: [
        {
          key: "prime",
          label: "巅峰期 / 四皇级白胡子",
          status: "病弱前、震震果实与霸气全盛",
          dimensions: dims({
            attack: ["街区级", "城市级｜震震果实/霸气｜争议", "震震果实可造成大范围震动和海震，但不把“毁灭世界”传闻字面化。"],
            defense: ["街区级", "城市级｜霸气/体魄｜争议", "全盛期体魄和霸气承伤极强。"],
            movement: ["超音速", "高超音速｜争议", "四皇级交锋速度高。"],
            reaction: ["超音速", "高超音速｜见闻色/经验｜争议", "战斗经验和霸气反应突出。"],
            vitality: ["街区级生命阈值", "城市级生命阈值｜四皇体魄｜争议", "全盛体魄和霸气支撑高生命阈值。"],
            healing: ["无自愈", "缓慢自愈", "无再生。"],
            energy: ["街区级能量", "城市级能量｜震震果实/霸气｜争议", "果实与霸气消耗巨大。"],
            energyRegen: ["快速回能", "快速回能｜体力恢复", "无无限回能。"]
          }),
          notes: "巅峰期资料有限，作为对比面板保守记录。"
        },
        {
          key: "marineford-old",
          label: "顶上战争 / 老年病弱",
          status: "病弱但仍可发动震震果实峰值",
          dimensions: dims({
            attack: ["街区级", "城市级｜震震果实｜争议", "老年病弱状态仍可引发大范围震动和破坏，按城市级争议保守记录。"],
            defense: ["街区级", "街区级｜体魄/霸气", "病弱降低稳定防御，主要靠体魄和意志承伤。"],
            movement: ["超音速", "高超音速｜争议", "顶上战争时期机动受年龄和病情限制。"],
            reaction: ["超音速", "高超音速｜经验｜争议", "经验极强，但病情影响稳定反应。"],
            vitality: ["街区级生命阈值", "城市级生命阈值｜极限承伤｜争议", "顶上战争极限承伤极高，但病弱状态明显。"],
            healing: ["无自愈", "缓慢自愈", "无自愈，伤势会累积。"],
            energy: ["街区级能量", "城市级能量｜震震果实｜争议", "震震果实输出强但受身体状态限制。"],
            energyRegen: ["常规回能", "快速回能｜意志/体力", "顶上战争中持续消耗不可长期维持。"]
          }),
          notes: "当前主面板版本。"
        }
      ],
      dimensions: dims({
        attack: ["街区级", "城市级｜震震果实｜争议", "老年病弱状态仍可引发大范围震动和破坏，按城市级争议保守记录。"],
        defense: ["街区级", "街区级｜体魄/霸气", "病弱降低稳定防御，主要靠体魄和意志承伤。"],
        movement: ["超音速", "高超音速｜争议", "顶上战争时期机动受年龄和病情限制。"],
        reaction: ["超音速", "高超音速｜经验｜争议", "经验极强，但病情影响稳定反应。"],
        vitality: ["街区级生命阈值", "城市级生命阈值｜极限承伤｜争议", "顶上战争极限承伤极高，但病弱状态明显。"],
        healing: ["无自愈", "缓慢自愈", "无自愈，伤势会累积。"],
        energy: ["街区级能量", "城市级能量｜震震果实｜争议", "震震果实输出强但受身体状态限制。"],
        energyRegen: ["常规回能", "快速回能｜意志/体力", "顶上战争中持续消耗不可长期维持。"]
      }),
      notes: notes({
        penetration: "震震果实以震动、冲击和地形/海面破坏为主；世界毁灭级传闻不直接转成主等级。",
        resistance: "极限承伤和意志很强，但病弱、旧伤、连续创伤会显著削弱。",
        special: "震震果实、霸气、薙刀体术、海震/地震冲击。",
        weakness: "顶上战争状态年老病弱，无自愈，承伤会持续累积。",
        setting: "主面板按顶上战争老年病弱状态；巅峰期仅作时间线对比。",
        basis: "依据白胡子在顶上战争中的震震果实、大范围冲击、极限承伤和病弱状态保守定级。"
      })
    })
  ]);
})();
