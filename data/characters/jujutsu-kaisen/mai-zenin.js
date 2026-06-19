(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) {
    throw new Error("咒术回战 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "mai-zenin",
      name: "禅院真依",
      en: "Mai Zenin",
      ja: "禪院真依",
      affiliation: "京都咒术高专",
      grade: "三级术师 / 构筑术式",
      appearances: ["京都姐妹校交流会", "涩谷事变", "禅院家肃清"],
      timelineStatus: "京都姐妹校交流会至涩谷事变后",
      aliases: ["真依", "Mai", "Mai Zenin", "构筑术式", "Construction Technique"],
      fandomSlug: "Mai_Zenin",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Jujutsu Kaisen Wiki: Mai Zenin",
          url: "https://jujutsu-kaisen.fandom.com/wiki/Mai_Zenin",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对禅院真依、京都高专、构筑术式、枪械战斗和禅院家肃清相关定位；具体量级按作品内表现保守记录。"
        }
      ],
      revisionNotes: [
        "从咒术回战改 worldbook 的禅院真依 key/comment 补入；未采用 worldbook 正文描述。"
      ],
      dimensions: dims({
        attack: ["砖级", "墙级｜枪械/构筑弹丸", "主要靠枪械、咒力弹丸和构筑术式偷袭，正面输出低于一线术师。"],
        defense: ["砖级", "墙级｜咒力防护", "基础术师防护有限。"],
        movement: ["凡人速", "亚音速｜术师体术", "机动弱于真希和一线近战术师。"],
        reaction: ["凡人速", "亚音速｜射击/术师训练", "射击反应和术师训练优于普通人，但非高速战斗者。"],
        vitality: ["强化凡体", "强化凡体｜咒力强化", "人类术师生命体量，承伤有限。"],
        healing: ["无自愈", "无自愈", "缺少稳定自愈表现。"],
        energy: ["砖级能量", "墙级能量｜构筑术式", "构筑术式消耗高，输出资源有限。"],
        energyRegen: ["缓慢回能", "中速回能｜术式恢复", "咒力总量和构筑负担限制连续输出。"]
      }),
      notes: notes({
        penetration: "枪械与构筑弹丸偏低范围穿刺杀伤，适合奇袭和补刀，不是大范围破坏。",
        resistance: "咒力防护和术师训练有限，面对高阶近战、领域或大范围术式容错低。",
        sensing: "常规咒力感知和射手视野，不具备强索敌。",
        tactics: "擅长用距离、枪械和心理压力制造机会；与真希的关系会影响判断。",
        special: "构筑术式、咒力弹丸、枪械战斗、禅院家血缘语境。",
        weakness: "咒力和术式效率有限，近战弱，身体和资源都难以支撑长时间高压战。",
        setting: "按京都姐妹校交流会至禅院家肃清前后真依记录，不把真希觉醒结果回填给真依主面板。",
        basis: "worldbook只用于抽取禅院真依姓名；定级依据公开角色资料入口和京都交流会、禅院家相关表现。"
      })
    })
  ]);
})();
