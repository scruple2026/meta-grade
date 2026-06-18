(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["海贼王"];

  if (!work) {
    throw new Error("海贼王 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "portgas-d-ace",
      name: "波特卡斯·D·艾斯",
      en: "Portgas D. Ace",
      ja: "ポートガス・D・エース",
      affiliation: "白胡子海贼团",
      grade: "二番队队长 / 烧烧果实",
      appearances: ["阿拉巴斯坦篇", "顶上战争"],
      timelineStatus: "顶上战争 / 火拳艾斯",
      aliases: ["艾斯", "火拳", "Ace"],
      fandomSlug: "Portgas_D._Ace",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      revisionNotes: [
        "从海贼王 worldbook 名字池补入；主面板按顶上战争前后稳定战斗状态记录。"
      ],
      dimensions: dims({
        attack: ["楼级", "街区级｜火焰/炎帝", "烧烧果实提供大范围火焰输出，峰值按街区级保守处理。"],
        defense: ["楼级", "街区级｜自然系元素化/霸气", "自然系元素化可规避常规物理，但霸气、海楼石和岩浆克制仍有效。"],
        movement: ["超音速", "高超音速｜争议", "新世界队长级战斗机动，具体换算保守标争议。"],
        reaction: ["超音速", "高超音速｜争议", "可参与白胡子团和海军高端战场。"],
        vitality: ["精锐韧体", "街区级生命阈值｜自然系/意志", "自然系规避与强意志支撑续战，本体仍可被霸气与属性克制重创。"],
        healing: ["缓慢自愈", "缓慢自愈", "没有稳定快速再生。"],
        energy: ["楼级能量", "街区级能量｜烧烧果实", "火焰输出和霸气消耗体力。"],
        energyRegen: ["快速回能", "快速回能｜体力恢复", "可连续战斗但非无限。"]
      }),
      notes: notes({
        penetration: "火拳、火枪、炎戒和炎帝以火焰灼烧、爆发和范围压制为主；自然系火焰不等同无视所有防御。",
        resistance: "元素化可规避大量常规物理打击，但武装色霸气、海楼石、海水、属性克制和保护他人时的主动承伤会绕过优势。",
        sensing: "具备新世界海贼经验和霸气基础，但资料不足以按未来视处理。",
        tactics: "擅长用火焰范围压制、牵制和保护队友；性格冲动与保护路飞的决策会制造承伤风险。",
        special: "烧烧果实、自然系元素化、火焰塑形、霸气基础。",
        weakness: "海水、海楼石、霸气和岩浆属性克制明显；情绪化和保护对象会降低规避收益。",
        setting: "按顶上战争前后的火拳艾斯记录，不把血统或称号转化为额外战力。",
        basis: "依据艾斯在阿拉巴斯坦、与黑胡子交战和顶上战争中的火焰输出、自然系规避和承伤表现定级。"
      })
    })
  ]);
})();
