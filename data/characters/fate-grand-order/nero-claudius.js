(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Grand Order"];

  if (!work) {
    throw new Error("Fate/Grand Order work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "nero-claudius",
      name: "尼禄·克劳狄乌斯",
      en: "Nero Claudius",
      ja: "ネロ・クラウディウス",
      affiliation: "迦勒底召唤 / 皇帝从者",
      grade: "Saber / 蔷薇之皇帝",
      appearances: ["Fate/Grand Order"],
      timelineStatus: "FGO 召唤灵基 / Saber",
      aliases: ["尼禄", "红Saber", "红呆毛", "蔷薇之皇帝", "UMU", "Nero Claudius"],
      fandomSlug: "Nero_Claudius",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "TYPE-MOON Wiki: Nero Claudius",
          url: "https://typemoon.fandom.com/wiki/Nero_Claudius",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对尼禄·克劳狄乌斯的 Saber 灵基、皇帝特权、黄金剧场和 FGO 登场范围。"
        }
      ],
      revisionNotes: [
        "从命运之夜酒馆助手和型月DLC worldbook 的尼禄 Saber key/comment 补入；未采用 worldbook 正文描述。",
        "Bride、Caster、Saber Venus 和皇帝神话礼装未并入本条主面板。"
      ],
      dimensions: dims({
        attack: ["房屋级", "楼级｜黄金剧场/皇帝特权｜争议", "Saber 灵基可达从者级输出，峰值来自固有结界与皇帝特权支撑。"],
        defense: ["房屋级", "楼级｜灵基/皇帝特权", "承伤按 Saber 灵基和皇帝特权补正记录。"],
        movement: ["音速", "超音速｜从者机动", "从者级近战机动，未合并神话礼装或其他灵基。"],
        reaction: ["音速", "超音速｜从者反应/剑技", "近战剑技和从者反应支撑高速攻防。"],
        vitality: ["房屋级生命阈值", "楼级生命阈值｜灵基/皇帝特权", "续战强于凡人，峰值需靠灵基和技能补正。"],
        healing: ["中速自愈｜灵基/供魔", "快速自愈｜皇帝特权/供魔", "恢复和异常应对可由皇帝特权等技能补足。"],
        energy: ["房屋级能量", "楼级能量｜黄金剧场/皇帝特权", "资源池按 Saber 灵基和黄金剧场峰值记录。"],
        energyRegen: ["中速回能", "快速回能｜供魔/黄金剧场", "供魔与场地支援可提高续航。"]
      }),
      notes: notes({
        penetration: "以剑技、魔力释放和黄金剧场支撑的近战为主，破坏范围不按剧场规模直接换算。",
        resistance: "从者灵基和皇帝特权可补足多种弱项，但效果有技能性质和场地限制。",
        sensing: "从者感知、艺术家直觉和近战经验辅助判断；远距索敌不是核心强项。",
        tactics: "自信、擅长舞台控制和正面压迫；黄金剧场可把战斗导向有利节奏。",
        special: "皇帝特权、黄金剧场、Saber 灵基、剑技、艺术/皇帝相关补正。",
        weakness: "基础灵基不是顶级破坏型，很多强项依赖技能成功、场地和供魔；其他替代灵基不计入本条。",
        setting: "按 FGO Saber 尼禄记录，Bride、Caster、Saber Venus 等状态分开处理。",
        basis: "worldbook只用于抽取尼禄姓名；定级依据公开角色资料入口和 FGO Saber 灵基，峰值保守写楼级争议。"
      })
    })
  ]);
})();
