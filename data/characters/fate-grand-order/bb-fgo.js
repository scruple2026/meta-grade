(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Grand Order"];

  if (!work) {
    throw new Error("Fate/Grand Order work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "bb-fgo",
      name: "BB",
      en: "BB",
      ja: "BB",
      affiliation: "迦勒底召唤 / MoonCancer",
      grade: "MoonCancer / 电子魔",
      appearances: ["Fate/Grand Order"],
      timelineStatus: "FGO 召唤灵基 / MoonCancer",
      aliases: ["BB亲", "MoonCancer", "Bottom Black", "Moon Gazer", "电子魔", "FGOBB"],
      fandomSlug: "BB_%28Fate%2FGrand_Order%29",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "TYPE-MOON Wiki: BB (Fate/Grand Order)",
          url: "https://typemoon.fandom.com/wiki/BB_%28Fate%2FGrand_Order%29",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对 FGO BB 的 MoonCancer 灵基、SE.RA.PH/AI 管理权限、宝具和 FGO 登场范围。"
        }
      ],
      revisionNotes: [
        "从型月DLC worldbook 的 FGOBB/BB key/comment 补入；未采用 worldbook 正文描述。",
        "泳装 BB、BB 佩蕾、BB 托提普等替代灵基未并入本条主面板。"
      ],
      dimensions: dims({
        attack: ["楼级", "街区级｜MoonCancer/宝具/SE.RA.PH权限｜争议", "FGO 召唤灵基不直接等同 Moon Cell 全权限，峰值按限定系统权限记录。"],
        defense: ["楼级", "街区级｜AI/数据体/系统权限", "数据体和系统权限提高防护与重构能力，但需标注场地依赖。"],
        movement: ["音速", "超音速｜从者机动/数据体位移", "物理机动和电子空间位移需分开理解。"],
        reaction: ["音速", "超音速｜AI处理/从者反应", "AI处理速度有优势，但跨界实战仍按可行动反应记录。"],
        vitality: ["楼级生命阈值", "街区级生命阈值｜数据体/灵基", "数据体性质提高难杀程度，核心权限和载体仍是限制。"],
        healing: ["快速自愈｜AI/灵基修复", "极速自愈｜SE.RA.PH权限/条件", "数据修复强，但依赖系统权限、场地和召唤条件。"],
        energy: ["楼级能量", "街区级能量｜MoonCancer/宝具/系统权限", "能量池含电子空间管理权限，不写成无限级。"],
        energyRegen: ["快速回能｜AI/供魔", "极速回能｜系统权限/条件", "权限内可快速补充资源，离开系统环境后需下调。"]
      }),
      notes: notes({
        penetration: "攻击包含宝具、电子空间干涉和系统权限压制；权限效果不直接换算为纯破坏规模。",
        resistance: "AI/数据体性质和 MoonCancer 灵基提供异常抗性；离开 SE.RA.PH 或权限被限制时防护下降。",
        sensing: "电子空间内索敌、数据监控和从者感知强，现实环境下需按载体与权限判断。",
        tactics: "擅长规则利用、恶作剧式心理战、系统权限压制和资源调度。",
        special: "MoonCancer 灵基、AI/数据体、SE.RA.PH 管理权限、宝具、规则/信息干涉。",
        weakness: "高价值能力依赖系统环境、权限和剧情条件；泳装/外神相关灵基不计入本条。",
        setting: "按 FGO MoonCancer BB 记录，CCC 原始语境与泳装 BB 另行处理。",
        basis: "worldbook只用于抽取 BB 姓名；定级依据公开角色资料入口和 FGO MoonCancer/SE.RA.PH 条件，避免把 Moon Cell 设定直接写成无限或宇宙级。"
      })
    })
  ]);
})();
