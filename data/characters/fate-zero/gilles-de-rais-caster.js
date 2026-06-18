(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Zero"];
  if (!work) throw new Error("Fate/Zero work metadata must load before character files.");

  registerCharacters([work.character({
    id: "gilles-de-rais-caster",
    name: "Caster（吉尔·德·雷）",
    en: "Gilles de Rais",
    ja: "ジル・ド・レェ",
    aliases: ["吉尔·德·雷", "青髭", "Caster"],
    affiliation: "雨生阵营 / Caster职阶",
    grade: "从者 / 魔导书召唤",
    appearances: ["第四次圣杯战争"],
    timelineStatus: "第四次圣杯战争",
    fandomSlug: "Gilles_de_Rais",
    confidence: "review",
    evidenceType: ["官方入口", "角色页入口", "召唤峰值"],
    sourceQuality: "entry",
    evidenceLinks: [],
    revisionNotes: ["worldbook 仅用于抽取 Fate/Zero 角色姓名；定级依据公开官方/资料入口并保持保守。"],
    dimensions: dims({
        attack: ["房屋级", "街区级｜魔导书/怪物召唤｜争议", "本体近战一般，威胁来自召唤物和大规模怪物。"],
        defense: ["房屋级", "街区级｜召唤怪物/术式", "本体承伤低于顶尖从者，召唤物可扩大耐久。"],
        movement: ["亚音速", "音速｜从者行动", "机动不突出。"],
        reaction: ["亚音速", "音速｜从者反应", "从者基础反应，但不以高速近战见长。"],
        vitality: ["房屋级生命阈值", "街区级生命阈值｜怪物召唤/术式", "生命威胁常由召唤物和魔导书延展。"],
        healing: ["中速自愈｜灵体/供魔", "快速自愈｜召唤物补充", "恢复和续战依赖魔导书与供魔。"],
        energy: ["楼级能量", "街区级能量｜Prelati's Spellbook", "魔导书提供召唤资源，峰值标争议。"],
        energyRegen: ["中速回能", "快速回能｜魔导书/供魔", "续航与魔导书和供魔相关。"]
      }),
    notes: notes({
        penetration: "魔导书与召唤物偏持续压制、吞噬和范围污染，不等同纯爆破。",
        resistance: "本体不算顶级硬，依赖召唤物、场面和魔导书保护。",
        sensing: "精神异常和仪式行动强，常规索敌一般。",
        tactics: "擅长恐怖仪式和召唤压制，但理性和战术纪律差。",
        special: "Prelati's Spellbook、怪物召唤、Caster术式、精神污染。",
        weakness: "本体近战弱、精神异常、对高端对军宝具和集火脆弱。",
        setting: "按第四次圣杯战争Caster吉尔·德·雷记录。",
        basis: "worldbook只用于抽取吉尔·德·雷姓名；定级依据官方角色入口与TYPE-MOON Wiki资料入口，召唤峰值保守到街区级并标争议。"
      })
  })]);
})();
