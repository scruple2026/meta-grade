(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["海贼王"];

  if (!work) {
    throw new Error("海贼王 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "charlotte-linlin",
      name: "夏洛特·林林",
      en: "Charlotte Linlin",
      ja: "シャーロット・リンリン",
      affiliation: "BIG MOM海贼团",
      grade: "四皇 / 魂魂果实",
      appearances: ["蛋糕岛篇", "和之国篇"],
      timelineStatus: "和之国篇 / 大妈",
      aliases: ["大妈", "Big Mom", "BIG MOM", "魂魂果实"],
      fandomSlug: "Charlotte_Linlin",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口", "跨界参考"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "source",
          scope: "跨界战力参考",
          label: "VS Battles Wiki：Big Mom",
          url: "https://vsbattles.fandom.com/wiki/Big_Mom",
          lang: "en",
          authority: "cross-reference",
          medium: "cross-wiki",
          ratingEvidence: true,
          claim: "用于复核夏洛特·林林四皇级、魂魂果实、霍米兹和和之国表现的跨界口径。"
        }
      ],
      revisionNotes: [
        "从海贼王 worldbook 名字池补入；主面板按和之国阶段记录，魂魂果实写入特殊权能。"
      ],
      dimensions: dims({
        attack: ["街区级", "城市级｜霍米兹/霸气｜争议", "拿破仑、宙斯/赫拉、普罗米修斯和霸气形成大范围高端输出。"],
        defense: ["街区级", "城市级｜天生肉体/霸气｜争议", "天生怪力肉体与霸气承伤极强。"],
        movement: ["超音速", "高超音速｜霍米兹机动｜争议", "本体机动不如速度型角色，但可借霍米兹飞行。"],
        reaction: ["超音速", "高超音速｜见闻色/经验｜争议", "四皇级战斗经验和霸气反应。"],
        vitality: ["街区级生命阈值", "城市级生命阈值｜四皇体魄｜争议", "极高生命体量和承伤续航。"],
        healing: ["缓慢自愈", "快速自愈｜寿命消耗/霍米兹｜争议", "可消耗寿命强化或修复，但不是无代价再生。"],
        energy: ["街区级能量", "城市级能量｜魂魂果实/霸气｜争议", "魂魂果实、霍米兹和霸气持续消耗巨大。"],
        energyRegen: ["快速回能", "快速回能｜体力/寿命资源", "可用寿命强化但不是无成本回能。"]
      }),
      notes: notes({
        penetration: "巨剑、雷火霍米兹、霸王色缠绕和魂魂果实威慑形成复合杀伤；夺魂需要恐惧等条件，不按纯破坏抬档。",
        resistance: "肉体硬度、霸气和霍米兹协防极强，但失去平衡、被地形/环境放逐、精神失控或能力克制时会暴露窗口。",
        sensing: "四皇级霸气与战场经验，霍米兹可扩展侦查和追击。",
        tactics: "擅长用霍米兹、多方向元素攻击和威慑压制敌人；情绪、饥饿症和轻敌会造成决策波动。",
        special: "魂魂果实、霍米兹、寿命操作、霸王色霸气、拿破仑/赫拉/普罗米修斯。",
        weakness: "能力受恐惧、寿命资源和霍米兹状态影响；精神失控、环境放逐和协同战术可削弱她的正面优势。",
        setting: "按和之国篇大妈记录，不把四皇称号直接抬成国家级。",
        basis: "依据夏洛特·林林在蛋糕岛篇、和之国篇中的体魄、魂魂果实、霍米兹和四皇级交锋表现定级。"
      })
    })
  ]);
})();
