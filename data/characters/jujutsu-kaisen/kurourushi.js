(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) {
    throw new Error("咒术回战 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "kurourushi",
      name: "黑沐死",
      en: "Kurourushi",
      ja: "黒沐死",
      affiliation: "仙台结界 / 特级咒灵",
      grade: "特级咒灵 / 蟑螂咒灵",
      appearances: ["死灭回游"],
      timelineStatus: "死灭回游仙台结界",
      aliases: ["黑沐死", "黒沐死", "Kurourushi", "蟑螂咒灵", "Festering Life Sword", "烂生刀"],
      fandomSlug: "Kurourushi",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Jujutsu Kaisen Wiki: Kurourushi",
          url: "https://jujutsu-kaisen.fandom.com/wiki/Kurourushi",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对黑沐死、特级蟑螂咒灵、仙台结界和烂生刀相关表现；具体量级按作品内表现保守记录。"
        }
      ],
      revisionNotes: [
        "从咒术回战改 worldbook 的黑沐死 key/comment 补入；未采用 worldbook 正文描述。"
      ],
      dimensions: dims({
        attack: ["墙级", "楼级｜烂生刀/虫群", "虫群、特级咒灵体和烂生刀带来高近战与侵蚀杀伤。"],
        defense: ["墙级", "楼级｜特级咒灵体", "咒灵体和虫群性质提高承伤，但可被反转术式正能量克制。"],
        movement: ["亚音速", "音速｜虫群/咒灵机动", "可在仙台结界高速接近和多方向骚扰。"],
        reaction: ["亚音速", "音速｜特级咒灵", "能参与仙台高阶战斗，但反应低于顶级术师。"],
        vitality: ["楼级生命阈值｜咒灵体", "楼级生命阈值｜虫群/再现条件｜争议", "特级咒灵体和虫群带来难杀性，但不是无限生命。"],
        healing: ["中速自愈｜咒灵体", "快速自愈｜虫群/再现条件｜争议", "恢复与再现依赖咒灵体和虫群条件，受正能量克制。"],
        energy: ["墙级能量", "楼级能量｜虫群/咒灵输出", "能支撑虫群、咒具式攻击和持续压制。"],
        energyRegen: ["快速回能", "快速回能｜咒灵体", "咒灵续航强，但不是无限。"]
      }),
      notes: notes({
        penetration: "烂生刀和虫群可制造侵蚀、孵化和多点撕咬杀伤，偏持续与异常伤害。",
        resistance: "咒灵体、虫群和再现条件提高难杀性；反转术式正能量是明确克制。",
        sensing: "虫群可提供近距离压迫和环境覆盖，远距精密索敌不强。",
        tactics: "以数量、恶心战术和持续压迫消耗对手，智能和精细战术低于古代术师。",
        special: "特级蟑螂咒灵、虫群、烂生刀、咒灵恢复与再现语境。",
        weakness: "正能量、反转术式输出、范围清场和高火力能显著克制虫群与咒灵体。",
        setting: "按死灭回游仙台结界黑沐死记录。",
        basis: "worldbook只用于抽取黑沐死姓名；定级依据公开角色资料入口和仙台结界中与乙骨等人的战斗表现。"
      })
    })
  ]);
})();
