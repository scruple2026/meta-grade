(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["新世纪福音战士"];

  if (!work) {
    throw new Error("新世纪福音战士 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "kozo-fuyutsuki",
      name: "冬月耕造",
      en: "Kozo Fuyutsuki",
      ja: "冬月コウゾウ",
      affiliation: "NERV",
      grade: "副司令 / 前大学教授",
      appearances: ["TV版", "The End of Evangelion"],
      timelineStatus: "旧剧场版 / NERV副司令",
      aliases: ["冬月", "Fuyutsuki", "Kouzou Fuyutsuki", "NERV副司令"],
      fandomSlug: "Kozo_Fuyutsuki",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Evangelion Wiki: Kozo Fuyutsuki",
          url: "https://evangelion.fandom.com/wiki/Kozo_Fuyutsuki",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对冬月耕造、NERV副司令、碇唯旧识和TV/旧剧场版阶段。"
        }
      ],
      revisionNotes: ["从 EVA worldbook 的 state_冬月耕造_旧剧场版状态 key/comment 补入；未采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["凡人级", "凡人级", "缺少个人武装或超常输出表现。"],
        defense: ["凡人级", "凡人级", "本体是普通老年人。"],
        movement: ["凡人速", "凡人速", "无超常移动表现。"],
        reaction: ["凡人速", "凡人速", "以指挥和判断为主，不按战斗反应升档。"],
        vitality: ["凡人肉身", "凡人肉身", "普通人生命体量。"],
        healing: ["无自愈", "无自愈", "依赖医疗，没有自愈体系。"],
        energy: ["凡人能量", "凡人能量｜NERV权限不计入个人储量", "NERV指挥资源不作为个人能量池。"],
        energyRegen: ["中速回能", "中速回能", "按普通人体力恢复。"]
      }),
      notes: notes({
        penetration: "无稳定个人杀伤手段；战场影响来自副司令权限和对补完计划情报的掌握。",
        resistance: "没有超常抗性，面对常规武器或EVA/使徒级冲突没有个人防护优势。",
        sensing: "依靠NERV情报系统、长期研究经历和对SEELE/Gehirn背景的理解判断局势。",
        tactics: "擅长组织指挥、保密和政治判断，是源堂计划的重要协作者。",
        special: "NERV副司令权限、补完计划相关知识、与碇唯和Gehirn时期的背景关联。",
        weakness: "本体战斗力极低，影响力依赖NERV组织结构和情报权限。",
        setting: "按 TV/旧剧场版冬月耕造记录，不混入 Rebuild 设定。",
        basis: "worldbook只用于抽取冬月耕造姓名；定级依据公开角色资料入口和其NERV副司令、研究者、旧剧场版组织定位。"
      })
    })
  ]);
})();
