(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) throw new Error("咒术回战 work metadata must load before character files.");

  registerCharacters([
    work.character({
      id: "ui-ui",
      name: "忧忧",
      en: "Ui Ui",
      ja: "憂憂",
      affiliation: "冥冥协力者",
      grade: "术师 / 空间转移",
      appearances: ["涩谷事变", "新宿决战"],
      timelineStatus: "涩谷事变至新宿决战",
      aliases: ["Ui Ui", "空间转移", "Spatial Transference", "冥冥弟弟"],
      fandomSlug: "Ui_Ui",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Jujutsu Kaisen Wiki: Ui Ui",
          url: "https://jujutsu-kaisen.fandom.com/wiki/Ui_Ui",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对忧忧、冥冥协力者和空间转移相关资料；具体量级按作品内表现保守记录。"
        }
      ],
      revisionNotes: [
        "从咒术回战改 worldbook 的忧忧 key/comment 与新宿决战高频角色 key/comment 补入；未采用 worldbook 正文描述。"
      ],
      dimensions: dims({
        attack: ["凡人级", "墙级｜咒力基础/工具", "主要定位是支援和转移，缺少稳定正面输出表现。"],
        defense: ["砖级", "墙级｜简易领域/咒力防护", "可用术式和基础防护争取生存，但本体不是前线承伤角色。"],
        movement: ["凡人速", "亚音速｜空间转移", "空间转移改变位置，不按肉身移动速度直接升档。"],
        reaction: ["凡人速", "亚音速｜支援应对", "能配合冥冥和战场撤离，但高速近战反应保守记录。"],
        vitality: ["强化凡体", "强化凡体｜咒力强化", "人类术师生命体量。"],
        healing: ["无自愈", "无自愈", "缺少稳定反转术式自愈表现。"],
        energy: ["墙级能量", "楼级能量｜空间转移/支援", "咒力总量主要用于转移、辅助和防护，不等同单次攻击输出。"],
        energyRegen: ["中速回能", "快速回能｜支援续航", "作为后方支援可多次执行任务，但不是无限转移。"]
      }),
      notes: notes({
        penetration: "缺少高杀伤术式表现，攻击项不按空间转移抬高。",
        resistance: "可用咒力和支援术式降低风险；被近身压制或无法发动术式时承伤有限。",
        sensing: "依赖战场信息和队友配合，非大范围索敌角色。",
        tactics: "擅长撤离、搬运、支援和与冥冥协同，战略价值高于正面输出。",
        special: "空间转移、后方支援、简易领域相关防护、冥冥协同。",
        weakness: "需要术式条件和安全施术窗口；自身攻防不突出。",
        setting: "按涩谷事变至新宿决战阶段记录，空间转移写入特殊权能而不是移动速度无限化。",
        basis: "worldbook只用于抽取忧忧姓名；定级依据公开角色资料入口和其转移/支援定位。"
      })
    })
  ]);
})();
