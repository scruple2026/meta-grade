(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/hollow ataraxia"];

  if (!work) {
    throw new Error("Fate/hollow ataraxia work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "caren-hortensia-hollow",
      name: "卡莲·奥尔黛西亚",
      en: "Caren Hortensia",
      ja: "カレン・オルテンシア",
      affiliation: "圣堂教会",
      grade: "教会人员 / 代行者系支援角色",
      appearances: ["Fate/hollow ataraxia"],
      timelineStatus: "hollow ataraxia循环期",
      aliases: ["卡莲", "Caren", "言峰花莲", "Magdalene"],
      fandomSlug: "Caren_Hortensia",
      confidence: "review",
      evidenceType: ["资料入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "TYPE-MOON Wiki：Caren Hortensia",
          url: "https://typemoon.fandom.com/wiki/Caren_Hortensia",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对卡莲、Fate/hollow ataraxia、圣堂教会、恶魔祓除/圣骸布和痛觉体质语境。"
        },
        {
          type: "wiki",
          scope: "作品资料入口",
          label: "TYPE-MOON Wiki：Fate/hollow ataraxia",
          url: "https://typemoon.fandom.com/wiki/Fate/hollow_ataraxia",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对本作和hollow ataraxia语境；不作为单独量级依据。"
        },
        {
          type: "official",
          scope: "正版作品页",
          label: "Steam：Fate/hollow ataraxia REMASTERED",
          url: "https://store.steampowered.com/app/3343760/Fatehollow_ataraxia_REMASTERED/",
          lang: "en",
          authority: "licensed",
          medium: "publisher",
          ratingEvidence: false,
          claim: "用于核对 Fate/hollow ataraxia REMASTERED 正版入口。"
        }
      ],
      revisionNotes: ["从型月 DLC worldbook 的卡莲·奥尔黛西亚 key/comment 补入；未采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["凡人级", "砖块级｜教会礼装/圣骸布", "本体输出有限，峰值来自教会装备、圣骸布和恶魔祓除语境。"],
        defense: ["凡人级", "砖块级｜圣骸布/痛觉体质", "承伤更多来自异常体质和礼装，不是高硬度肉身。"],
        movement: ["凡人速", "凡人速", "不是高速战斗角色。"],
        reaction: ["凡人速", "亚音速｜教会训练/危机判断", "可处理教会任务和异常现象，但不按从者反应处理。"],
        vitality: ["凡人肉身", "强化凡体｜痛觉体质/异常耐受", "痛觉与恶魔相关体质提高耐受说明，不直接变成大型生命结构。"],
        healing: ["无自愈", "缓慢自愈｜治疗/教会支援", "缺少稳定自愈表现。"],
        energy: ["凡人能量", "砖块级能量｜教会礼装/圣骸布", "个人资源和礼装规模有限。"],
        energyRegen: ["缓慢回能", "缓慢回能｜休整/外部支援", "补给依赖休整、礼装和教会资源。"]
      }),
      notes: notes({
        penetration: "教会礼装、圣骸布和恶魔祓除能力偏异常目标/灵性处理，不等同大范围破坏。攻击速度：圣骸布和教会礼装需由卡莲操纵或展开，祓除效果针对灵性条件生效；本体没有持续高速连击或无前摇远射表现。",
        resistance: "痛觉体质、圣骸布和教会训练提高耐受；本体仍是人类，面对高火力、从者近战或概念攻击风险很高。",
        sensing: "对恶魔、异常和教会任务对象具备一定识别经验；缺少大范围索敌资料。",
        tactics: "擅长用教会知识、话术、痛觉承受和仪式/礼装处理异常事件；正面对战不是强项。",
        special: "圣堂教会、恶魔祓除、圣骸布Magdalene、痛觉/恶魔相关体质、hollow ataraxia循环语境。",
        weakness: "本体脆弱，战斗依赖礼装、场景和支援；FGO Amor/Caren灵基不并入本条。",
        setting: "按 Fate/hollow ataraxia 中卡莲记录；FGO从者灵基和其他外传状态分开。",
        basis: "worldbook只用于抽取卡莲姓名；定级依据 TYPE-MOON Wiki 角色/作品资料和正版作品入口，教会能力写入特殊项而非抬高主面板。"
      })
    })
  ]);
})();
