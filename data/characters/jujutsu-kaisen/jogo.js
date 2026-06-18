(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) {
    throw new Error("咒术回战 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "jogo",
      name: "漏瑚",
      en: "Jogo",
      ja: "漏瑚",
      affiliation: "灾害咒灵阵营",
      grade: "特级咒灵 / 火山咒灵",
      appearances: ["交流会前后", "涩谷事变"],
      timelineStatus: "涩谷事变 / 火山术式与领域",
      aliases: ["Jogo", "蓋棺鉄圍山", "火山头"],
      fandomSlug: "Jogo",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      revisionNotes: [
        "从咒术回战 worldbook 名字池补入；主面板按涩谷事变前后的灾害咒灵状态记录。"
      ],
      dimensions: dims({
        attack: ["楼级", "街区级｜火山术式/领域", "火山喷发、熔岩与领域有强范围热伤。"],
        defense: ["墙级", "楼级｜咒灵身体/咒力", "特级咒灵承伤强，但被五条、宿傩级压制明显。"],
        movement: ["亚音速", "音速", "灾害咒灵高速近战与突进。"],
        reaction: ["亚音速", "音速", "可快速处理普通高阶术师，但顶层角色远超他。"],
        vitality: ["精锐韧体", "街区级生命阈值｜咒灵身体", "咒灵生命力强，断肢重伤后仍可行动。"],
        healing: ["快速自愈｜咒灵恢复", "快速自愈｜咒灵恢复", "咒灵体可恢复，但被压倒性咒力攻击会失去战斗力。"],
        energy: ["楼级能量", "街区级能量｜火山术式/领域", "高热术式和领域消耗咒力。"],
        energyRegen: ["快速回能", "快速回能｜咒力恢复", "咒灵续航强但不是无限。"]
      }),
      notes: notes({
        penetration: "火山术式以高热、熔岩、火砾虫和领域热环境压制为主，适合范围杀伤和限制走位。",
        resistance: "咒灵体和高咒力提供恢复与承伤，但领域对抗、反转术式输出和顶级术师可直接压制。",
        sensing: "咒力感知和灾害咒灵本能突出，但面对五条、宿傩等顶层存在判断余地有限。",
        tactics: "擅长以高热范围控制逼退普通术师，配合真人、花御、陀艮等阵营作战；自尊心会诱发正面对抗强敌。",
        special: "火山术式、火砾虫、领域展开盖棺铁围山、咒灵恢复。",
        weakness: "面对顶级速度、领域压制或反转术式输出时容易被突破；高热攻击对耐热或远程强者收益下降。",
        setting: "按涩谷事变阶段记录，不把被五条/宿傩压制的反差直接作为低档唯一依据。",
        basis: "依据漏瑚在与五条、七海组、宿傩等战斗中的火山术式、领域和咒灵恢复表现定级。"
      })
    })
  ]);
})();
