(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["暗杀教室"];

  if (!work) {
    throw new Error("Assassination Classroom work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "kaede-kayano",
      name: "茅野枫",
      en: "Kaede Kayano",
      ja: "茅野カエデ",
      affiliation: "椚丘中学3年E班",
      grade: "E班学生 / 暗杀训练 / 触手植入",
      appearances: ["E班暗杀计划"],
      timelineStatus: "E班训练期至触手暴露",
      aliases: ["茅野", "Kaede", "Kayano", "雪村茜", "Akari Yukimura", "触手植入"],
      fandomSlug: "Kaede_Kayano",
      confidence: "medium",
      evidenceType: ["官方入口", "角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Assassination Classroom Wiki: Kaede Kayano",
          url: "https://ansatsukyoshitsu.fandom.com/wiki/Kaede_Kayano",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对茅野枫、雪村茜身份、E班成员和触手植入相关资料；具体量级按作品内表现保守记录。"
        }
      ],
      revisionNotes: [
        "从暗杀教室 worldbook 的时间线 key/comment 中抽取茅野枫姓名补入；未采用 worldbook 正文描述。"
      ],
      dimensions: dims({
        attack: ["凡人级", "墙体级｜触手植入/反杀老师武器", "日常学生状态攻击低；触手暴露阶段有短时近战威胁。"],
        defense: ["凡人级", "砖块级｜训练/触手辅助", "本体仍是学生肉身，触手可提供短时辅助但不等同杀老师级硬度。"],
        movement: ["凡人速", "亚音速｜训练/触手突进", "日常机动为学生水平，触手阶段可短时突进。"],
        reaction: ["凡人速", "亚音速｜暗杀训练/演技", "暗杀训练和长期伪装提升时机把握，不等同持续高速。"],
        vitality: ["凡人肉身", "强化凡体｜触手植入/意志", "本体生命体量仍以人类学生为主，触手植入带来负担。"],
        healing: ["无自愈", "无自愈", "缺少稳定自愈表现，触手植入反而有身体负担。"],
        energy: ["凡人能量", "墙体级能量｜触手植入/武器资源", "峰值资源来自触手和反杀老师相关武器，不等同常态体能。"],
        energyRegen: ["中速回能", "中速回能｜体能/准备", "普通学生体能恢复，触手使用受身体和心理状态限制。"]
      }),
      notes: notes({
        penetration: "日常主要依赖暗杀训练、演技和反杀老师武器；触手暴露阶段可形成近战穿刺和压制。攻击速度：日常短兵器出手仍随学生暗杀训练，触手穿刺只在植入暴露阶段加速伸展，不能套用杀老师的触手速度。",
        resistance: "普通学生肉身，触手植入不等同杀老师的稳定触手体防御。",
        sensing: "擅长伪装、观察和把握暗杀时机，非远距索敌型。",
        tactics: "长期隐藏身份与情绪，能用演技、团队位置和触手峰值制造杀老师破绽。",
        special: "雪村茜身份、触手植入、暗杀训练、演技伪装、E班协同。",
        weakness: "触手对身体和精神有明显负担；日常正面战力低，缺少重火力和硬防。",
        setting: "按E班训练期至触手暴露的茅野枫记录，不把触手短时峰值写成稳定常态。",
        basis: "worldbook只用于抽取茅野枫姓名；定级依据官方动画入口和Assassination Classroom Wiki角色资料入口。"
      })
    })
  ]);
})();
