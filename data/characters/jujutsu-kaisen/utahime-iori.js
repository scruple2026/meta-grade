(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) {
    throw new Error("咒术回战 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "utahime-iori",
      name: "庵歌姬",
      en: "Utahime Iori",
      ja: "庵歌姫",
      affiliation: "京都咒术高专",
      grade: "准一级术师 / 独奏禁区",
      appearances: ["京都姐妹校交流会", "涩谷事变", "新宿决战"],
      timelineStatus: "涩谷事变至新宿决战",
      aliases: ["歌姬", "Utahime", "Utahime Iori", "独奏禁区", "Solo Forbidden Area"],
      fandomSlug: "Utahime_Iori",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Jujutsu Kaisen Wiki: Utahime Iori",
          url: "https://jujutsu-kaisen.fandom.com/wiki/Utahime_Iori",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对庵歌姬、京都高专教师和独奏禁区支援术式相关资料；具体量级按作品内表现保守记录。"
        }
      ],
      revisionNotes: [
        "从咒术回战改 worldbook 的庵歌姬 key/comment 补入；未采用 worldbook 正文描述。"
      ],
      dimensions: dims({
        attack: ["凡人级", "墙级｜咒力基础", "自身正面攻击表现少，主要价值是增幅他人术式输出。"],
        defense: ["砖级", "墙级｜咒力防护", "准一级术师基础防护，缺少前线硬吃高阶攻击表现。"],
        movement: ["凡人速", "亚音速｜术师基础", "非高速机动型。"],
        reaction: ["凡人速", "亚音速｜术师基础", "可执行支援施术和战场配合，但不是主攻前线。"],
        vitality: ["强化凡体", "强化凡体｜咒力强化", "人类术师生命体量。"],
        healing: ["无自愈", "无自愈", "缺少稳定反转术式自愈表现。"],
        energy: ["墙级能量", "楼级能量｜独奏禁区/支援增幅", "咒力资源主要用于仪式化增幅他人，不等同自身单次破坏。"],
        energyRegen: ["中速回能", "中速回能｜支援施术", "支援术式需要准备和施术条件，持续性保守记录。"]
      }),
      notes: notes({
        penetration: "缺少独立高杀伤表现；独奏禁区是增幅型支援，不直接记作自身攻击破坏。",
        resistance: "具备术师基础咒力防护；若被近身压制或打断施术，支援价值会下降。",
        sensing: "具备教师和术师基础判断，非远距索敌型。",
        tactics: "适合战前准备、仪式化支援和团队增幅，正面遭遇战保守处理。",
        special: "独奏禁区、仪式化增幅、团队支援、京都高专教师经验。",
        weakness: "施术准备、舞蹈/音乐/手势等条件明显；自身输出、机动和硬防不突出。",
        setting: "按涩谷事变至新宿决战的庵歌姬记录，支援增幅不直接折算为自身高攻防。",
        basis: "worldbook只用于抽取庵歌姬姓名；定级依据公开角色资料入口和独奏禁区的支援定位。"
      })
    })
  ]);
})();
