(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Grand Order"];

  if (!work) {
    throw new Error("Fate/Grand Order work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "ritsuka-fujimaru",
      name: "藤丸立香",
      en: "Ritsuka Fujimaru",
      ja: "藤丸立香",
      affiliation: "迦勒底",
      grade: "御主 / 人类最后的御主",
      appearances: ["Fate/Grand Order"],
      timelineStatus: "迦勒底御主 / 召唤契约持有者",
      aliases: ["咕哒男", "咕哒子", "立香", "御主", "Grand Master", "人类最后的御主", "Fujimaru Ritsuka"],
      fandomSlug: "Ritsuka_Fujimaru",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "TYPE-MOON Wiki: Ritsuka Fujimaru",
          url: "https://typemoon.fandom.com/wiki/Ritsuka_Fujimaru",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对藤丸立香、迦勒底御主、人类最后的御主和FGO主角身份。"
        }
      ],
      revisionNotes: ["从型月/FGO worldbook 的藤丸立香 key/comment 补入；未采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["凡人级", "砖级｜礼装/令咒支援", "本体不是正面输出者，峰值来自魔术礼装、令咒和从者指挥支援。"],
        defense: ["凡人级", "砖级｜礼装/防护支援", "本体仍是人类御主，防护依赖礼装和从者。"],
        movement: ["凡人速", "凡人速", "缺少超常移动表现。"],
        reaction: ["凡人速", "凡人速｜战场指挥", "能在高危战场做指挥判断，但不等于从者级身体反应。"],
        vitality: ["凡人肉身", "强化凡体｜高危任务经验", "作为御主经历大量任务但本体仍为人类。"],
        healing: ["无自愈", "无自愈｜医疗/礼装支援", "没有自身自愈体系。"],
        energy: ["凡人能量", "砖级能量｜礼装/令咒资源", "个人魔力和礼装资源有限，真正战力来自召唤契约。"],
        energyRegen: ["中速回能", "中速回能｜休整/迦勒底支援", "按人类御主和迦勒底支援恢复。"]
      }),
      notes: notes({
        penetration: "自身攻击能力很低，主要通过令咒、魔术礼装和从者指挥制造战术效果。",
        resistance: "本体没有从者级防御，依赖礼装、玛修和其他从者保护。",
        sensing: "通过迦勒底管制室、战场通信和从者反馈掌握态势。",
        tactics: "临场决策、从者协同、令咒使用和高压任务适应力是核心价值。",
        special: "御主契约、令咒、魔术礼装、从者召唤/指挥、迦勒底支援。",
        weakness: "本体脆弱，缺少独立输出与高速机动；脱离从者和迦勒底支援时战斗力大幅下降。",
        setting: "按FGO迦勒底御主记录，不把所有从者战力折算进藤丸本体面板。",
        basis: "worldbook只用于抽取藤丸立香姓名；定级依据公开角色资料入口和FGO御主定位，召唤契约与从者战力只写入特殊权能。"
      })
    })
  ]);
})();
