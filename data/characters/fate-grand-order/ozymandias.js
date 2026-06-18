(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Grand Order"];

  if (!work) {
    throw new Error("Fate/Grand Order work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "ozymandias",
      name: "奥斯曼狄斯",
      en: "Ozymandias",
      ja: "オジマンディアス",
      affiliation: "迦勒底召唤 / 法老王",
      grade: "Rider / 太阳王",
      appearances: ["Fate/Grand Order"],
      timelineStatus: "FGO 召唤灵基 / Rider",
      aliases: ["奥兹曼迪亚斯", "拉美西斯二世", "太阳王", "法老王", "拉二", "Ozymandias"],
      fandomSlug: "Ozymandias",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "TYPE-MOON Wiki: Ozymandias",
          url: "https://typemoon.fandom.com/wiki/Ozymandias",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对奥斯曼狄斯 Rider 灵基、太阳王、神殿宝具和 FGO 登场范围。"
        }
      ],
      revisionNotes: [
        "从型月DLC worldbook 的奥斯曼狄斯 key/comment 补入；未采用 worldbook 正文描述。"
      ],
      dimensions: dims({
        attack: ["楼级", "街区级｜神殿宝具/太阳神性｜争议", "Rider 灵基和神殿宝具峰值强，但需标注展开条件。"],
        defense: ["楼级", "街区级｜神殿/太阳神性", "神殿与太阳神性提供高防护。"],
        movement: ["音速", "超音速｜从者机动/骑乘", "骑乘和从者灵基支持高速机动。"],
        reaction: ["音速", "超音速｜从者反应/王者判断", "从者反应和统治者判断支撑战场决策。"],
        vitality: ["楼级生命阈值", "街区级生命阈值｜灵基/神殿支援", "灵基与神殿支援提高续战。"],
        healing: ["中速自愈｜灵基/供魔", "快速自愈｜神殿/供魔", "恢复与神殿、供魔和王权支援相关。"],
        energy: ["楼级能量", "街区级能量｜神殿宝具/太阳神性", "神殿宝具和太阳神性提高资源峰值。"],
        energyRegen: ["中速回能", "快速回能｜神殿/供魔", "神殿条件下资源循环更强。"]
      }),
      notes: notes({
        penetration: "太阳神性、神殿宝具和召唤物可形成强压制；神殿展开条件需单独判断。",
        resistance: "神殿、王权和神性提供强防御；离开神殿或未展开时需按普通 Rider 灵基下调。",
        sensing: "从者感知、王者威压和神殿领域内索敌能力辅助战斗。",
        tactics: "擅长以神殿和召唤物建立阵地优势，再用太阳神性和宝具压制。",
        special: "Rider 灵基、太阳王、神殿宝具、神性、召唤物、王权压制。",
        weakness: "高峰值依赖神殿展开、供魔和阵地条件；不能把法老称号直接换算为更高破坏档。",
        setting: "按 FGO Rider 奥斯曼狄斯召唤灵基记录。",
        basis: "worldbook只用于抽取奥斯曼狄斯姓名；定级依据公开角色资料入口和 FGO Rider/神殿宝具语境，保守记录街区级争议峰值。"
      })
    })
  ]);
})();
