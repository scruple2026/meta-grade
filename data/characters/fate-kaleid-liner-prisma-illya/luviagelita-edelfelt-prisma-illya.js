(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/kaleid liner 魔法少女☆伊莉雅"];

  if (!work) {
    throw new Error("Fate/kaleid liner 魔法少女☆伊莉雅 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "luviagelita-edelfelt-prisma-illya",
      name: "露维亚瑟琳塔·艾德费尔特",
      en: "Luviagelita Edelfelt",
      ja: "ルヴィアゼリッタ・エーデルフェルト",
      affiliation: "魔术协会 / 时钟塔 / 艾德费尔特家",
      grade: "魔术师 / 宝石魔术 / 格斗",
      appearances: ["职阶卡回收事件", "2wei", "3rei"],
      timelineStatus: "职阶卡回收事件 / Sapphire前契约者",
      aliases: ["露维亚", "Luviagelita", "Luvia", "蓝宝石前主人", "艾德费尔特"],
      fandomSlug: "Luviagelita_Edelfelt_(Fate/kaleid)",
      confidence: "medium",
      evidenceType: ["官方入口", "角色页入口", "worldbook姓名字段"],
      sourceQuality: "entry",
      evidenceLinks: [{
        type: "official",
        scope: "日文动画角色入口",
        label: "动画「プリズマ☆イリヤ ドライ!!」官方角色页",
        url: "https://anime.prisma-illya.jp/3rei/character/detail.php",
        lang: "ja",
        authority: "official",
        medium: "official-site",
        ratingEvidence: false,
        claim: "用于核对露维亚瑟琳塔·艾德费尔特、Magical Sapphire前主人、与美游/凛的角色关系和动画角色定位。"
      }, {
        type: "wiki",
        scope: "角色资料入口",
        label: "TYPE-MOON Wiki: Luviagelita Edelfelt (Fate/kaleid)",
        url: "https://typemoon.fandom.com/wiki/Luviagelita_Edelfelt_(Fate/kaleid)",
        lang: "en",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "用于核对Prisma Illya世界线的露维亚、Sapphire契约和职阶卡回收任务资料入口。"
      }, {
        type: "wiki",
        scope: "中文角色资料入口",
        label: "萌娘百科：露维亚瑟琳塔·艾德费尔特",
        url: "https://zh.moegirl.org.cn/露维亚瑟琳塔·艾德费尔特",
        lang: "zh",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "中文交叉资料入口；用于核对名称、宝石魔术、格斗风格和Prisma Illya登场信息。"
      }],
      revisionNotes: [
        "从魔法少女伊莉雅 worldbook 的 comment/key 姓名池补入；不采用 worldbook 正文描述。",
        "本条按 Prisma Illya 露维亚记录，不并入其他世界线或FGO灵基。"
      ],
      dimensions: dims({
        attack: ["砖级", "墙级｜宝石魔术/格斗", "宝石魔术与摔角格斗可形成对人压制。"],
        defense: ["凡人级", "墙级｜魔术防护/礼装", "本体人类，防御依赖礼装和技巧。"],
        movement: ["凡人速", "亚音速｜魔术辅助/格斗", "优秀人类格斗机动。"],
        reaction: ["凡人速", "亚音速｜魔术战经验", "可参与Class Card相关魔术战。"],
        vitality: ["强化凡体", "强化凡体｜训练/魔术师体质", "训练人类水平。"],
        healing: ["无自愈", "缓慢自愈｜治疗/休整", "依赖治疗和休整。"],
        energy: ["砖级能量", "墙级能量｜宝石/礼装", "魔力和宝石储备有限。"],
        energyRegen: ["中速回能", "中速回能｜休整/宝石补充", "需要休整与资源补充。"]
      }),
      notes: notes({
        penetration: "宝石魔术和强化格斗适合对人爆发，不等同英灵宝具破坏。",
        resistance: "魔术防护有限，面对英灵影和高端宝具需依赖队友与魔杖。",
        sensing: "具备魔术师探查、结界识别和Class Card任务经验。",
        tactics: "贵族魔术师风格，擅长资源准备、正面压制和与凛互相牵制式协同。",
        special: "宝石魔术、格斗术、魔术礼装、Class Card回收任务经验，曾为Magical Sapphire契约者。",
        weakness: "本体人类，资源有限；与凛的竞争和自尊会造成战术噪音。",
        setting: "按Prisma Illya早期露维亚记录。",
        basis: "worldbook只用于抽取露维亚瑟琳塔姓名；定级依据官方角色页、TYPE-MOON Wiki和萌娘百科入口，魔杖契约历史与本体战力分开记录。"
      })
    })
  ]);
})();
