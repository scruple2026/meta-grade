(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Re:从零开始的异世界生活"];

  if (!work) {
    throw new Error("Re:Zero work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "emilia",
      name: "爱蜜莉雅",
      en: "Emilia",
      ja: "エミリア",
      affiliation: "爱蜜莉雅阵营 / 王选候选人",
      grade: "半精灵 / 精灵术师",
      appearances: ["王选篇"],
      timelineStatus: "王选篇 / 帕克契约期",
      aliases: ["Emilia", "艾米莉亚"],
      fandomSlug: "Emilia",
      confidence: "medium",
      evidenceType: ["官方角色页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["砖块级", "街区级｜冰魔法/帕克协同｜争议", "本人可用冰魔法，峰值部分依赖契约精灵协同。"],
        defense: ["凡人级", "墙体级｜冰防御/精灵术", "肉身有限，防护来自魔法和精灵术。"],
        movement: ["凡人速", "亚音速｜魔法辅助", "本体机动不按高速角色处理。"],
        reaction: ["凡人速", "亚音速｜魔法战斗", "魔法战斗反应优于普通人。"],
        vitality: ["凡人肉身", "强化凡体｜魔法支撑", "肉身仍较脆弱。"],
        healing: ["无自愈", "缓慢自愈｜治疗辅助可能", "缺少稳定自愈表现。"],
        energy: ["砖块级能量", "街区级能量｜冰魔法/帕克协同｜争议", "魔力资源和帕克协同提供峰值。"],
        energyRegen: ["缓慢回能", "中速回能｜精灵术", "魔力恢复依赖状态和契约条件。"]
      }),
      notes: notes({
        penetration: "冰魔法可冻结、束缚和造成范围控制，帕克协同时威胁提升。攻击速度：艾米莉亚的冰魔法需区分施法发动、冰体形成与后续传播，当前条目不足以确认不同冻结、束缚招式是否采用同一种投送方式。",
        resistance: "防御依赖冰魔法、精灵术和距离，本体肉身不高。",
        sensing: "可与帕克协同感知，普通索敌范围有限。",
        tactics: "性格善良，战斗中偏保护与控制；经验在王选篇仍有限。",
        special: "冰魔法、精灵术、帕克契约、王选候选人身份。",
        weakness: "心理压力、歧视环境和契约状态会影响发挥；本体防御有限。",
        setting: "按王选篇爱蜜莉雅记录，帕克独立列条。",
        basis: "worldbook只用于抽取爱蜜莉雅姓名；定级依据官方角色页与Re:Zero Wiki资料入口，精灵协同作为条件峰值。"
      })
    })
  ]);
})();
