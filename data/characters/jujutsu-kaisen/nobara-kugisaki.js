(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) {
    throw new Error("咒术回战 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "nobara-kugisaki",
      name: "钉崎野蔷薇",
      en: "Nobara Kugisaki",
      ja: "釘崎野薔薇",
      affiliation: "东京咒术高专",
      grade: "主角团 / 芻灵咒法",
      appearances: ["正篇漫画/动画", "八十八桥", "涩谷事变"],
      timelineStatus: "涩谷事变与最终回归综合",
      aliases: ["共鸣", "芻灵咒法", "Kugisaki"],
      fandomSlug: "Nobara_Kugisaki",
      evidenceLinks: [
        {
          type: "official",
          scope: "日文官方角色入口",
          label: "TV动画「咒术回战」角色页",
          url: "https://jujutsukaisen.jp/character/index.php",
          lang: "ja",
          authority: "official",
          medium: "official-site",
          ratingEvidence: false,
          claim: "用于核对角色身份和日文官方动画资料；不直接支撑跨界量级。"
        }
      ],
      dimensions: dims({
        attack: ["墙体级", "楼宇级｜共鸣｜黑闪", "共鸣可通过媒介打击本体或灵魂，破坏规模仍保守处理。"],
        defense: ["凡人级", "墙体级｜咒力防护", "承伤能力低于高阶近战角色。"],
        movement: ["亚音速", "亚音速", "无速度专精表现。"],
        reaction: ["亚音速", "亚音速", "能应对低到中高阶术师战节奏，但缺少稳定音速级有效应对证据。"],
        vitality: ["强化凡体", "精锐韧体", "能承受战斗伤害，但面对灵魂改造类攻击风险极高。"],
        healing: ["无自愈", "无自愈", "没有自愈或反转术式表现。"],
        energy: ["墙体级能量", "楼宇级能量", "咒力量足以支持钉、锤、共鸣和簪。"],
        energyRegen: ["中速回能", "中速回能", "无高强度回能表现。"]
      }),
      notes: notes({
        penetration: "共鸣是条件型高穿透攻击，尤其适合通过身体组织或连接物打击本体。攻击速度：钉崎须先挥锤击钉或准备稻草人与身体组织，共鸣随后沿既有连接打击本体；钉子飞行、锤击和共鸣生效不能合成一个速度。",
        resistance: "对普通物理和低阶咒术有基础防护；对灵魂改造不具备明确抗性。",
        sensing: "主要靠咒力感知、视听观察和媒介确认目标；共鸣可隔空打击但需要组织样本或连接条件，不等同自主索敌。",
        tactics: "能把钉子、稻草人和共鸣组合成条件杀伤，适合配合队友抓破绽；近战容错和媒介不足时战术空间有限。",
        special: "芻灵咒法可通过钉子、稻草人和身体组织建立连接；共鸣能隔空打击本体，簪用于引爆钉子群，黑闪是短时峰值。",
        weakness: "依赖媒介和命中条件；近战防御与恢复能力有限。",
        setting: "涩谷后的状态存在长期缺席与回归争议，本页按已展示战斗能力记录。",
        basis: "依据八十八桥对咒胎九相图、京都交流会和涩谷真人分身战表现保守定级。"
      })
    })
  ]);
})();
