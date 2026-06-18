(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["在地下城寻求邂逅是否搞错了什么"];

  if (!work) {
    throw new Error("DanMachi work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "eina-tulle",
      name: "埃伊娜·祖尔",
      en: "Eina Tulle",
      ja: "エイナ・チュール",
      affiliation: "公会",
      grade: "公会顾问 / 接待员",
      appearances: ["异端儿篇"],
      timelineStatus: "异端儿篇 / 公会顾问期",
      aliases: ["埃伊娜", "Eina"],
      fandomSlug: "Eina_Tulle",
      confidence: "medium",
      evidenceType: ["官方角色页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["凡人级", "凡人级", "非战斗人员，不按冒险者输出定级。"],
        defense: ["凡人级", "凡人级", "缺少战斗防护表现。"],
        movement: ["凡人速", "凡人速", "日常行动速度。"],
        reaction: ["凡人速", "凡人速", "不以战斗反应为主。"],
        vitality: ["凡人肉身", "凡人肉身", "普通文职人员生命体量。"],
        healing: ["无自愈", "无自愈", "没有自愈机制。"],
        energy: ["不适用", "不适用", "没有可量化战斗能量池。"],
        energyRegen: ["不适用", "不适用", "没有回能面板。"]
      }),
      notes: notes({
        penetration: "主要贡献是情报、地图和冒险指导，不是直接杀伤。",
        resistance: "缺少战斗抗性，依赖环境与他人保护。",
        sensing: "熟悉地下城楼层、任务风险和公会信息。",
        tactics: "能用规则、知识和风险评估保护冒险者，战斗执行能力有限。",
        special: "公会渠道、地下城知识、冒险者顾问身份。",
        weakness: "本体战斗能力低，遭遇怪物或袭击时危险很高。",
        setting: "按异端儿篇公会顾问身份记录。",
        basis: "worldbook只用于抽取埃伊娜姓名；定级依据官方角色入口与DanMachi Wiki资料入口，公会知识写入解释项。"
      })
    })
  ]);
})();
