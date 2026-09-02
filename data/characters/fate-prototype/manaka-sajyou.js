(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Prototype"];
  if (!work) throw new Error("Fate/Prototype work metadata must load before character files.");

  registerCharacters([work.character({
    id: "manaka-sajyou",
    name: "沙条爱歌",
    en: "Manaka Sajyou",
    ja: "沙条愛歌",
    aliases: ["爱歌", "Manaka", "根源皇女", "Sajyou Manaka"],
    affiliation: "沙条家 / 第一东京圣杯战争",
    grade: "御主 / 根源接续者 / 中央反派",
    appearances: ["Fate/Prototype"],
    timelineStatus: "Prototype / 圣杯与Beast关联峰值",
    fandomSlug: "Manaka_Sajyou",
    confidence: "disputed",
    evidenceType: ["角色页入口", "根源/圣杯/Beast机制"],
    sourceQuality: "entry",
    evidenceLinks: [{
      type: "wiki",
      scope: "角色资料入口",
      label: "TYPE-MOON Wiki: Manaka Sajyou",
      url: "https://typemoon.fandom.com/wiki/Manaka_Sajyou",
      lang: "en",
      authority: "wiki",
      medium: "wiki",
      ratingEvidence: false,
      claim: "用于核对沙条爱歌、Fate/Prototype、根源接续、圣杯战争和Beast关联资料入口。"
    }, {
      type: "wiki",
      scope: "中文角色资料入口",
      label: "萌娘百科：沙条爱歌",
      url: "https://zh.moegirl.org.cn/沙条爱歌",
      lang: "zh",
      authority: "wiki",
      medium: "wiki",
      ratingEvidence: false,
      claim: "中文交叉资料入口；用于核对名称、别名和Prototype中央反派定位。"
    }],
    revisionNotes: [
      "从型月DLC worldbook 的沙条爱歌 key/comment 补入；未采用 worldbook 正文描述。",
      "根源接续、圣杯和Beast相关峰值均按机制/外源处理，不写成日常肉身高防或无条件高输出。"
    ],
    dimensions: dims({
        attack: ["砖块级｜魔术师肉身", "街区级｜圣杯/Beast关联/根源接续｜外源｜争议", "日常肉身不强；峰值来自根源、圣杯和Beast相关机制，需标外源与争议。"],
        defense: ["凡人级", "房屋级｜魔术/圣杯条件｜外源｜争议", "本体防御不能等同其机制支配力。"],
        movement: ["凡人速", "亚音速｜魔术/准备条件", "缺少稳定高速移动证据。"],
        reaction: ["凡人速", "亚音速｜根源接续/魔术判断｜争议", "高价值在认知与机制支配，不按高速近战角色处理。"],
        vitality: ["凡人肉身", "房屋级生命阈值｜圣杯/仪式条件｜外源｜争议", "生命体量与复归条件依赖圣杯/仪式语境，不写成无限生命。"],
        healing: ["无自愈", "快速自愈｜圣杯/外源条件｜争议", "恢复若成立也依赖外源或仪式条件。"],
        energy: ["砖块级能量｜魔术师", "街区级能量｜圣杯/Beast关联/根源接续｜外源｜争议", "能量池和支配力主要来自高风险机制，不等同常态体力。"],
        energyRegen: ["缓慢回能", "快速回能｜圣杯/外源条件｜争议", "峰值回能依赖圣杯或外部机制。"]
      }),
    notes: notes({
        penetration: "根源接续、圣杯和Beast关联更偏规则/仪式/支配机制，不把称号直接换成物理破坏档。攻击速度：根源接续、圣杯与Beast关联以仪式和支配条件生效，没有可当作弹道测量的统一传播过程；具体魔术仍须按各自发动步骤判断。",
        resistance: "本体防御与机制权限分开；常态肉身仍可被针对。",
        sensing: "根源接续带来异常认知和信息优势，但具体范围需原设补证。",
        tactics: "操控圣杯战争、利用御主/从者关系和长期布局能力极强。",
        special: "根源接续、圣杯战争操盘、Beast关联、从者契约和高阶魔术。",
        weakness: "许多峰值依赖圣杯战争、仪式和Beast条件；跨界对战需剥离外源。",
        setting: "按 Fate/Prototype 中沙条爱歌记录。",
        basis: "worldbook只用于抽取沙条爱歌姓名；定级依据 TYPE-MOON Wiki 和萌娘百科入口，根源/圣杯/Beast相关能力统一写成外源或争议峰值。"
      })
  })]);
})();
