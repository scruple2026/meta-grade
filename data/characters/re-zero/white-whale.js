(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Re:从零开始的异世界生活"];

  if (!work) {
    throw new Error("Re:Zero work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "white-whale",
      name: "白鲸",
      en: "White Whale",
      ja: "白鯨",
      affiliation: "三大魔兽",
      grade: "三大魔兽 / 雾之魔兽",
      appearances: ["白鲸讨伐"],
      timelineStatus: "白鲸讨伐战",
      aliases: ["Hakugei", "消去之雾"],
      fandomSlug: "White_Whale",
      confidence: "review",
      evidenceType: ["角色页入口", "权能项"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["房屋级", "街区级｜巨体冲撞/雾/分裂｜争议", "巨型魔兽与雾权能可造成大范围战场威胁。"],
        defense: ["房屋级", "街区级｜巨体/魔兽生命力｜争议", "需要联军长期围攻才能讨伐，按巨型魔兽保守记录。"],
        movement: ["亚音速", "超音速｜空中突进｜争议", "空中巨兽机动快，但缺少精确速度换算。"],
        reaction: ["凡人速", "亚音速｜魔兽本能", "战斗反应按巨兽本能和战场压制记录。"],
        vitality: ["房屋级生命阈值", "街区级生命阈值｜分裂/巨体｜争议", "生命体量来自巨体、分裂和魔兽耐久。"],
        healing: ["缓慢自愈", "未知｜魔兽生命力", "缺少明确快速再生资料。"],
        energy: ["房屋级能量", "街区级能量｜雾/分裂/巨体｜争议", "总战斗资源体现在长时间战场压制。"],
        energyRegen: ["缓慢回能", "未知｜魔兽权能", "缺少可量化回能资料。"]
      }),
      notes: notes({
        penetration: "巨体冲撞、飞行压制、雾和存在消去相关权能形成复合威胁。",
        resistance: "巨型魔兽生命力强，但仍可被联军、战术和集中火力讨伐。",
        sensing: "依赖魔兽本能、空中视野和雾中战场优势。",
        tactics: "以巨体、雾、分裂和恐惧压迫联军，非人型精密战术较弱。",
        special: "消去之雾、分裂、三大魔兽级存在、空中巨体压制。",
        weakness: "体型巨大且可被诱导；遭遇准备充分的联军与针对性计划时可被分割击破。",
        setting: "按白鲸讨伐战记录。",
        basis: "worldbook只用于抽取白鲸姓名；定级依据Re:Zero Wiki资料入口和白鲸讨伐战定位，消去之雾写入特殊权能。"
      })
    })
  ]);
})();
