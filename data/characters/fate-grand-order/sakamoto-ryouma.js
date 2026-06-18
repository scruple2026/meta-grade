(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Grand Order"];

  if (!work) {
    throw new Error("Fate/Grand Order work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "sakamoto-ryouma",
      name: "坂本龙马",
      en: "Sakamoto Ryouma",
      ja: "坂本龍馬",
      affiliation: "迦勒底召唤 / 维新志士",
      grade: "Rider / 阿龙小姐搭档",
      appearances: ["Fate/Grand Order"],
      timelineStatus: "FGO 召唤灵基 / Rider",
      aliases: ["坂本龍馬", "龙马", "阿龙小姐", "Oryou", "Sakamoto Ryouma"],
      fandomSlug: "Sakamoto_Ryouma",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "TYPE-MOON Wiki: Sakamoto Ryouma",
          url: "https://typemoon.fandom.com/wiki/Sakamoto_Ryouma",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对坂本龙马 Rider 灵基、阿龙小姐、宝具和 FGO 登场范围。"
        }
      ],
      revisionNotes: [
        "从型月DLC worldbook 的坂本龙马 key/comment 补入；未采用 worldbook 正文描述。",
        "Lancer 龙马和超级阿龙小姐不并入本条主面板。"
      ],
      dimensions: dims({
        attack: ["楼级", "街区级｜阿龙小姐/宝具｜争议", "龙马本体与阿龙小姐协同提高输出，峰值按搭档条件标注。"],
        defense: ["房屋级", "楼级｜阿龙小姐/灵基", "本体防御普通，阿龙小姐和灵基提高承压。"],
        movement: ["音速", "超音速｜Rider机动/阿龙小姐", "Rider 灵基和阿龙小姐支撑高速移动。"],
        reaction: ["音速", "超音速｜从者反应/协同", "从者反应与搭档协同可应对高速战斗。"],
        vitality: ["房屋级生命阈值", "楼级生命阈值｜灵基/阿龙小姐支援", "本体生命体量有限，搭档支援提高续战。"],
        healing: ["中速自愈｜灵基/供魔", "快速自愈｜供魔/搭档支援", "恢复依赖灵基、供魔和阿龙小姐支援。"],
        energy: ["楼级能量", "街区级能量｜宝具/阿龙小姐", "能量峰值来自宝具和搭档协同。"],
        energyRegen: ["中速回能", "快速回能｜供魔/协同", "供魔和协同支撑持续作战。"]
      }),
      notes: notes({
        penetration: "阿龙小姐和宝具提供非普通枪械/近战的杀伤来源，需按搭档条件判断。",
        resistance: "阿龙小姐能提供额外防护和压制，本体硬度不突出。",
        sensing: "从者感知、幕末经验和阿龙小姐协同辅助索敌。",
        tactics: "擅长交涉、机动牵制、搭档协同和突袭。",
        special: "Rider 灵基、阿龙小姐、宝具、幕末维新志士经验。",
        weakness: "强度很大程度依赖阿龙小姐与宝具窗口；Lancer 灵基不计入本条。",
        setting: "按 FGO Rider 坂本龙马召唤灵基记录。",
        basis: "worldbook只用于抽取坂本龙马姓名；定级依据公开角色资料入口和 FGO Rider 灵基，阿龙小姐作为搭档条件写入峰值。"
      })
    })
  ]);
})();
