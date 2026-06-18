(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["魔法少女小圆"];

  if (!work) {
    throw new Error("魔法少女小圆 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "kyubey",
      name: "丘比",
      en: "Kyubey",
      ja: "キュゥべえ",
      affiliation: "孵化者",
      grade: "契约者 / 孵化者个体",
      appearances: ["TV动画"],
      timelineStatus: "TV本篇 / 孵化者系统代理",
      aliases: ["QB", "孵化者", "Incubator"],
      fandomSlug: "Kyubey",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["昆虫级", "凡人级｜啃咬/契约诱导", "个体物理攻击极低，真正威胁来自契约系统。"],
        defense: ["昆虫级", "凡人级", "单个身体可被轻易杀死。"],
        movement: ["凡人速", "凡人速", "小型个体移动。"],
        reaction: ["凡人速", "凡人速", "无高速反应表现。"],
        vitality: ["昆虫级生命阈值", "未知｜孵化者群体替换", "单个身体脆弱，但群体可替换个体。"],
        healing: ["无自愈", "不适用｜个体替换", "不是同一身体再生。"],
        energy: ["无资料", "未知｜契约系统/文明资源", "无法用单个个体能量池衡量孵化者系统。"],
        energyRegen: ["不适用", "不适用｜群体系统", "无个人回能意义。"]
      }),
      notes: notes({
        penetration: "物理杀伤很弱，核心威胁是愿望契约、灵魂宝石和魔女化系统。",
        resistance: "单体脆弱，但群体替换和缺乏情感使其很难通过杀死个体终止系统。",
        sensing: "能识别魔法少女资质、情绪能量和契约收益。",
        tactics: "极强信息操控和长期系统运营，善于用不完整信息诱导契约。",
        special: "愿望契约、灵魂宝石制造、情绪能量收集、孵化者群体替换。",
        weakness: "单个个体战斗力极低；依赖目标同意契约和系统规则。",
        setting: "按TV本篇丘比/孵化者个体记录。",
        basis: "依据丘比在TV本篇中签订契约、解释灵魂宝石和魔女化系统的表现定级。"
      })
    })
  ]);
})();
