(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Prototype"];
  if (!work) throw new Error("Fate/Prototype work metadata must load before character files.");

  registerCharacters([work.character({
    id: "ayaka-sajyou",
    name: "沙条绫香",
    en: "Ayaka Sajyou",
    ja: "沙条綾香",
    aliases: ["绫香", "Ayaka", "Sajyou Ayaka"],
    affiliation: "沙条家 / 第二东京圣杯战争",
    grade: "御主 / 魔术师",
    appearances: ["Fate/Prototype"],
    timelineStatus: "Prototype / Saber御主",
    fandomSlug: "Ayaka_Sajyou",
    confidence: "medium",
    evidenceType: ["角色页入口", "御主/魔术师"],
    sourceQuality: "entry",
    evidenceLinks: [{
      type: "wiki",
      scope: "角色资料入口",
      label: "TYPE-MOON Wiki: Ayaka Sajyou",
      url: "https://typemoon.fandom.com/wiki/Ayaka_Sajyou",
      lang: "en",
      authority: "wiki",
      medium: "wiki",
      ratingEvidence: false,
      claim: "用于核对沙条绫香、Fate/Prototype、Saber御主和魔术师资料入口。"
    }, {
      type: "wiki",
      scope: "中文角色资料入口",
      label: "萌娘百科：沙条绫香",
      url: "https://zh.moegirl.org.cn/沙条绫香",
      lang: "zh",
      authority: "wiki",
      medium: "wiki",
      ratingEvidence: false,
      claim: "中文交叉资料入口；用于核对名称、别名和Prototype女主角定位。"
    }],
    revisionNotes: [
      "从型月DLC worldbook 的沙条绫香 key/comment 补入；未采用 worldbook 正文描述。",
      "Saber契约和令咒属于支援/外源条件，不并入御主本体攻击与防御常态。"
    ],
    dimensions: dims({
        attack: ["凡人级", "砖块级｜魔术/令咒支援｜条件", "本体输出有限，从者输出不并入御主本人。"],
        defense: ["凡人级", "砖块级｜魔术防护/礼装｜条件", "防御依赖基础魔术、礼装和Saber保护。"],
        movement: ["凡人速", "凡人速｜普通人体能", "不是高速战斗角色。"],
        reaction: ["凡人速", "亚音速｜危机场景/魔术判断", "危机判断可提升，但不按从者反应处理。"],
        vitality: ["凡人肉身", "强化凡体｜魔术师体质/礼装条件", "生命体量仍以人类御主为主。"],
        healing: ["无自愈", "缓慢自愈｜治疗/魔术条件", "恢复依赖治疗、魔术或外部支援。"],
        energy: ["凡人能量", "砖块级能量｜魔术回路/令咒", "魔力与令咒能支援从者，但不等同自身高输出。"],
        energyRegen: ["缓慢回能", "缓慢回能｜休整/供魔", "供魔和恢复需要时间。"]
      }),
    notes: notes({
        penetration: "本体攻击依赖基础魔术、礼装或令咒支援；Saber宝具不并入她的主面板。攻击速度：绫香的基础魔术与礼装按本人施术动作和术式作用判断；令咒只负责下达强制指令，Saber接令后的接近与剑击属于Saber自身行动。",
        resistance: "人类御主承伤有限，主要靠魔术防护和从者保护。",
        sensing: "魔术师感知和圣杯战争情报判断。",
        tactics: "作为御主逐步成长，核心优势是与Saber配合、令咒使用和战场判断。",
        special: "Saber御主、令咒、魔术回路、圣杯战争参与者。",
        weakness: "本体脆弱，正面战依赖Saber和准备条件。",
        setting: "按 Fate/Prototype 中沙条绫香记录。",
        basis: "worldbook只用于抽取沙条绫香姓名；定级依据 TYPE-MOON Wiki 和萌娘百科入口，御主支援与从者输出分开记录。"
      })
  })]);
})();
