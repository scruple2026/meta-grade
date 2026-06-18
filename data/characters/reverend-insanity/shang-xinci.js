(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["蛊真人"];

  if (!work) {
    throw new Error("蛊真人 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "shang-xinci",
      name: "商心慈",
      en: "Shang Xinci",
      ja: "",
      affiliation: "商家城 / 商家",
      grade: "主要配角 / 商家相关人物",
      appearances: ["正篇"],
      timelineStatus: "商家城至后期相关主线",
      aliases: ["心慈"],
      fandomSlug: "",
      confidence: "review",
      evidenceType: ["中文网文资料入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "萌娘百科：古月方源",
          url: "https://zh.moegirl.org.cn/%E5%8F%A4%E6%9C%88%E6%96%B9%E6%BA%90",
          lang: "zh",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对商心慈在方源商家城相关剧情中的出场和人物关系；不作为商心慈具体战力证据。"
        },
        {
          type: "wiki",
          scope: "作品资料入口",
          label: "萌娘百科：《蛊真人》",
          url: "https://zh.moegirl.org.cn/%E8%9B%8A%E7%9C%9F%E4%BA%BA",
          lang: "zh",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对作品资料入口；商心慈战斗面板仍需原文或角色资料补证。"
        }
      ],
      revisionNotes: ["从《道友先上我断后》worldbook 的详细人物设定:商心慈 key/comment 补入；未采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["凡人级", "砖级｜蛊师资源｜争议", "商心慈的主要价值不在正面杀伤；峰值仅按可能持有蛊师资源保守记录。"],
        defense: ["凡人级", "砖级｜蛊师资源｜争议", "缺少明确防御表现，峰值按资源/护卫语境保守处理。"],
        movement: ["凡人速", "凡人速", "公开入口不足以支持超常机动。"],
        reaction: ["凡人速", "凡人速", "公开入口不足以支持超常反应。"],
        vitality: ["凡人肉身", "强化凡体｜争议", "缺少高阶生命结构证据。"],
        healing: ["无自愈", "无自愈", "缺少自愈表现。"],
        energy: ["无资料", "无资料", "缺少可量化蛊师资源或能量池资料。"],
        energyRegen: ["无资料", "无资料", "缺少可量化回能机制资料。"]
      }),
      notes: notes({
        penetration: "没有足够公开证据支撑高攻击档；如使用蛊虫或资源，应另按具体蛊虫补证。",
        resistance: "本体按低档处理，商家资源和护卫不并入个人防御主表。",
        sensing: "缺少战斗索敌资料。",
        tactics: "人物强项偏政治、人情和商家城资源网络，不直接换算主面板。",
        special: "商家城相关身份、方源相关剧情线；具体蛊虫和修为待补证。",
        weakness: "正面战斗表现资料不足，不能用剧情重要性抬高战力。",
        setting: "按《蛊真人》商家城至后期相关主线商心慈记录；具体阶段待后续拆分。",
        basis: "worldbook只用于抽取商心慈姓名；定级依据公开角色/作品入口，战力维度按低证据保守处理。"
      })
    })
  ]);
})();
