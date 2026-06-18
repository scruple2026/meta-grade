(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["新世纪福音战士"];

  if (!work) {
    throw new Error("新世纪福音战士 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "kaworu-nagisa",
      name: "渚薰",
      en: "Kaworu Nagisa",
      ja: "渚カヲル",
      affiliation: "SEELE / 第17使徒",
      grade: "第五适格者 / Tabris",
      appearances: ["TV版", "The End of Evangelion相关"],
      timelineStatus: "TV末期 / 第17使徒",
      aliases: ["薰", "Kaworu", "Tabris"],
      fandomSlug: "Kaworu_Nagisa",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["凡人级", "城市级｜AT力场/二号机操控｜争议", "本体攻击表现有限，峰值来自AT力场和远程操控EVA二号机。"],
        defense: ["凡人级", "城市级｜AT力场｜争议", "AT力场极强，但本体可被初号机物理处决。"],
        movement: ["凡人速", "亚音速｜浮空/使徒能力", "可浮空下降，不按高速移动处理。"],
        reaction: ["凡人速", "亚音速｜AT力场/使徒感知", "可操控二号机并应对初号机追击。"],
        vitality: ["凡人肉身", "街区级生命阈值｜使徒/AT力场｜争议", "生命阈值主要来自AT力场和使徒性质。"],
        healing: ["无自愈", "无自愈", "无明确战斗再生。"],
        energy: ["未知", "城市级能量｜AT力场/使徒能力｜争议", "AT力场和EVA操控显示高能级机制，但不按纯输出常态化。"],
        energyRegen: ["未知", "快速回能｜使徒能力｜争议", "缺少可量化回能资料。"]
      }),
      notes: notes({
        penetration: "威胁来自AT力场和对二号机的同步/操控，不是本体近战破坏。",
        resistance: "AT力场强，但若主动放弃抵抗或被特殊条件限制，本体仍可被处决。",
        sensing: "使徒身份、同步控制和对Adam/Lilith相关信息的感知突出。",
        tactics: "以心理、同步和目标选择推进计划；主动选择死亡是剧情核心限制。",
        special: "Tabris使徒身份、AT力场、EVA二号机远程操控、高同步率。",
        weakness: "行动受SEELE计划、Adam/Lilith判断和自我选择限制；本体物理承伤并非同档。",
        setting: "按 TV 末期第17使徒渚薰记录。",
        basis: "依据渚薰进入Terminal Dogma、操控二号机、AT力场和与初号机对峙表现定级。"
      })
    })
  ]);
})();
