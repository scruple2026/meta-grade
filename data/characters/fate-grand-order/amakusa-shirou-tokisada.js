(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Grand Order"];

  if (!work) {
    throw new Error("Fate/Grand Order work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "amakusa-shirou-tokisada",
      name: "天草四郎时贞",
      en: "Amakusa Shirou Tokisada",
      ja: "天草四郎時貞",
      affiliation: "迦勒底召唤 / Ruler",
      grade: "Ruler / 远东圣人",
      appearances: ["Fate/Grand Order"],
      timelineStatus: "FGO 召唤灵基 / Ruler",
      aliases: ["天草四郎", "四郎", "四郎·言峰", "Shirou Kotomine", "Amakusa Shirou"],
      fandomSlug: "Amakusa_Shirou_Tokisada",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "TYPE-MOON Wiki: Amakusa Shirou Tokisada",
          url: "https://typemoon.fandom.com/wiki/Amakusa_Shirou_Tokisada",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对天草四郎时贞 Ruler 灵基、双腕宝具、洗礼咏唱和大圣杯相关剧情条件。"
        }
      ],
      revisionNotes: [
        "从型月DLC worldbook 的天草四郎时贞 key/comment 补入；未采用 worldbook 正文描述。",
        "大圣杯计划和第三魔法相关只写入特殊权能/条件峰值，不当作常态裸面板。"
      ],
      dimensions: dims({
        attack: ["楼级", "街区级｜双腕/洗礼咏唱/宝具｜争议", "Ruler 灵基和双腕宝具提高战斗输出；大圣杯计划不写入常态攻击。"],
        defense: ["楼级", "街区级｜Ruler灵基/洗礼防护", "Ruler 灵基与圣职者术式有一定防护。"],
        movement: ["音速", "超音速｜从者机动/体术", "从者级机动和近战体术。"],
        reaction: ["音速", "超音速｜从者反应/战术判断", "可参与高速从者战并进行术式应对。"],
        vitality: ["楼级生命阈值", "街区级生命阈值｜灵基/Ruler", "Ruler 灵基和圣职者术式提高续战。"],
        healing: ["中速自愈｜灵基/供魔", "快速自愈｜供魔/术式支援", "恢复依赖灵基、供魔和术式条件。"],
        energy: ["楼级能量", "街区级能量｜双腕宝具/大圣杯条件｜争议", "自身资源和大圣杯条件必须分开。"],
        energyRegen: ["中速回能", "快速回能｜供魔/仪式条件", "供魔支撑常规战斗，仪式条件另行标注。"]
      }),
      notes: notes({
        penetration: "双腕宝具、洗礼咏唱和圣职者术式具备对灵体/魔术目标的特殊作用，不等同纯破坏规模。",
        resistance: "Ruler 灵基和术式防护有优势，但不是无条件绝对防御。",
        sensing: "从者感知、圣职者经验和仪式知识帮助识别灵体与魔术结构。",
        tactics: "长期布局、仪式设计和战术诱导强；遭遇战仍按从者面板判断。",
        special: "Ruler 灵基、双腕宝具、洗礼咏唱、大圣杯计划、第三魔法相关剧情条件。",
        weakness: "高价值计划依赖仪式、场地和准备时间；常态不等同大圣杯完成状态。",
        setting: "按 FGO Ruler 天草四郎时贞召唤灵基记录。",
        basis: "worldbook只用于抽取天草四郎时贞姓名；定级依据公开角色资料入口和 FGO Ruler 灵基，大圣杯相关只作条件特殊项。"
      })
    })
  ]);
})();
