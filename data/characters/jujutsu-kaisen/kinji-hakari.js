(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) throw new Error("咒术回战 work metadata must load before character files.");

  registerCharacters([
    work.character({
      id: "kinji-hakari",
      name: "秤金次",
      en: "Kinji Hakari",
      ja: "秤金次",
      affiliation: "东京咒术高专 / 停学中",
      grade: "领域型术师 / 坐杀博徒",
      appearances: ["死灭回游", "新宿决战"],
      timelineStatus: "死灭回游至新宿决战 / Jackpot窗口",
      aliases: ["Hakari", "Kinji Hakari", "坐杀博徒", "Private Pure Love Train", "Jackpot"],
      fandomSlug: "Kinji_Hakari",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Jujutsu Kaisen Wiki: Kinji Hakari",
          url: "https://jujutsu-kaisen.fandom.com/wiki/Kinji_Hakari",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于支撑坐杀博徒 Jackpot 期间的限时无限咒力和自动反转术式；该证据只支持窗口规则，不支持常态无限输出或无限破坏范围。"
        }
      ],
      revisionNotes: ["从咒术回战改 worldbook 的秤金次/坐杀博徒 key/comment 补入；未采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["墙级", "楼级｜Jackpot肉搏", "主要依靠高咒力肉搏和领域循环，破坏范围不按无限咒力直接抬档。"],
        defense: ["墙级", "楼级｜Jackpot自动反转术式", "Jackpot窗口生存力来自自动恢复，不是肉身硬度无限。"],
        movement: ["亚音速", "音速", "高阶术师肉搏机动。"],
        reaction: ["亚音速", "音速", "能与鹿紫云等高速战斗者周旋。"],
        vitality: ["精锐韧体", "楼级生命阈值｜Jackpot续战", "限时无限咒力和自动反转显著提高续战，但窗口外仍可被杀。"],
        healing: ["无自愈", "瞬愈｜Jackpot自动反转术式｜限时", "Jackpot中自动反转极快；窗口外不保持该恢复。"],
        energy: ["墙级能量", "无限级能量｜Jackpot限时窗口", "Jackpot期间咒力不随消耗下降；窗口外按普通术师资源处理。"],
        energyRegen: ["中速回能", "不适用｜Jackpot限时无限咒力窗口", "限时无限咒力池没有回能概念；非Jackpot阶段仍需重新开领域抽取。"]
      }),
      notes: notes({
        penetration: "以肉搏、粗糙咒力性质和领域循环压制为主；Jackpot不自动提高单击破坏范围。",
        resistance: "Jackpot自动反转术式极强，但领域抽签、窗口时长和窗口外状态是关键限制。",
        sensing: "战斗直觉和赌局规则把控强，远距离索敌不突出。",
        tactics: "擅长围绕领域概率、Jackpot窗口和对手误判打消耗战；对必中即死或封印型能力仍需具体判断。",
        special: "坐杀博徒、Jackpot、限时无限咒力、自动反转术式、粗糙咒力。",
        weakness: "能力强度依赖领域抽签和窗口循环；Jackpot外防御与恢复大幅下降。",
        setting: "按死灭回游至新宿决战记录，限时无限咒力不写成稳定无限攻击或无限生命体量。",
        basis: "worldbook只用于抽取秤金次姓名与坐杀博徒别名；定级依据公开角色资料入口和死灭回游战斗表现。"
      })
    })
  ]);
})();
