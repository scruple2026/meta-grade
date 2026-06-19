(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) {
    throw new Error("咒术回战 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "kirara-hoshi",
      name: "星绮罗罗",
      en: "Kirara Hoshi",
      ja: "星綺羅羅",
      affiliation: "秤金次阵营 / 前东京高专",
      grade: "术师 / 星间飞行",
      appearances: ["死灭回游", "新宿决战"],
      timelineStatus: "死灭回游至新宿决战",
      aliases: ["Kirara", "Kirara Hoshi", "星间飞行", "Love Rendezvous"],
      fandomSlug: "Kirara_Hoshi",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Jujutsu Kaisen Wiki: Kirara Hoshi",
          url: "https://jujutsu-kaisen.fandom.com/wiki/Kirara_Hoshi",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对星绮罗罗、星间飞行和与秤金次阵营相关的角色资料；具体量级按作品内表现保守记录。"
        }
      ],
      revisionNotes: [
        "从咒术回战改 worldbook 的星绮罗罗 key/comment 补入；未采用 worldbook 正文描述。"
      ],
      dimensions: dims({
        attack: ["砖级", "墙级｜星间飞行/牵制", "直接杀伤表现有限，主要价值是术式位置规则和接近限制。"],
        defense: ["砖级", "墙级｜咒力防护/术式牵制", "通过星间飞行降低被近身风险，本体硬防仍按人类术师处理。"],
        movement: ["凡人速", "亚音速｜术式位移规则", "术式影响相对位置和接近路径，不等于本体高速移动。"],
        reaction: ["凡人速", "亚音速｜术式应对", "可用标记规则应对突入，但近战反应不按一级前线术师处理。"],
        vitality: ["强化凡体", "强化凡体｜咒力强化", "人类术师生命体量。"],
        healing: ["无自愈", "无自愈", "缺少稳定反转术式自愈表现。"],
        energy: ["砖级能量", "墙级能量｜星间飞行", "咒力资源主要用于维持术式标记、牵制和阵地控制。"],
        energyRegen: ["中速回能", "中速回能｜术式维持", "续航依赖咒力和标记管理，未表现高阶持续输出。"]
      }),
      notes: notes({
        penetration: "攻击不以破坏规模见长，星间飞行通过标记和距离规则制造接近障碍。",
        resistance: "咒力防护和术式规则可提高生存窗口；若标记规则被识破或绕开，本体承伤有限。",
        sensing: "依赖对目标、标记和距离关系的判断；不是远距索敌型角色。",
        tactics: "适合守点、保护同伴和拖延突入者，善于把敌人拉入星间飞行规则。",
        special: "星间飞行、星座标记、强制距离/接近规则、阵地牵制。",
        weakness: "缺少高杀伤输出和稳定自愈；术式需要标记与规则成立，遇到远程火力或高阶解析会受限。",
        setting: "按死灭回游至新宿决战相关状态记录，不把特殊控制术式直接折算为高攻防。",
        basis: "worldbook只用于抽取星绮罗罗姓名；定级依据公开角色资料入口和星间飞行的牵制型表现。"
      })
    })
  ]);
})();
