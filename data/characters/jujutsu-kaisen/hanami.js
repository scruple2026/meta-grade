(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) {
    throw new Error("咒术回战 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "hanami",
      name: "花御",
      en: "Hanami",
      ja: "花御",
      affiliation: "灾害咒灵阵营",
      grade: "特级咒灵 / 大地灾害咒灵",
      appearances: ["交流会", "涩谷事变"],
      timelineStatus: "交流会至涩谷事变 / 植物术式",
      aliases: ["Hanami", "花御", "花之领域", "咒灵花御"],
      fandomSlug: "Hanami",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Jujutsu Kaisen Wiki: Hanami",
          url: "https://jujutsu-kaisen.fandom.com/wiki/Hanami",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对花御、未登记特级咒灵、植物术式、高耐久身体和与漏瑚/陀艮/真人同阵营。"
        }
      ],
      revisionNotes: ["从咒术回战 worldbook 的 char_花御 key/comment 补入；未采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["楼级", "街区级｜植物术式/咒种", "植物控制、根系与咒种可形成范围压制，但不按称号抬到城市级。"],
        defense: ["楼级", "街区级｜高耐久咒灵身体｜争议", "花御以灾害咒灵中突出的硬度和咒力承伤见长。"],
        movement: ["亚音速", "音速", "灾害咒灵级近战与撤离速度。"],
        reaction: ["亚音速", "音速", "能应对虎杖、东堂等高强度近战配合。"],
        vitality: ["精锐韧体", "街区级生命阈值｜咒灵身体", "咒灵身体和高耐久使其能承受多轮重击。"],
        healing: ["快速自愈｜咒灵恢复", "快速自愈｜咒灵恢复", "咒灵体可恢复，但被领域/术式压倒时仍会失去战力。"],
        energy: ["楼级能量", "街区级能量｜植物术式", "咒力支撑植物术式、咒种和大范围控制。"],
        energyRegen: ["快速回能", "快速回能｜咒力恢复", "灾害咒灵续航强，但不是无限。"]
      }),
      notes: notes({
        penetration: "植物术式、咒种和根系穿刺可限制行动并消耗目标咒力；花海干涉更偏扰乱感知和控场，不按纯破坏抬档。",
        resistance: "高硬度咒灵身体是主要防御优势；面对五条、领域压制、反转术式输出或高穿透术式仍可被突破。",
        sensing: "咒力感知和隐匿气息能力突出，适合偷袭、撤离和配合其他灾害咒灵行动。",
        tactics: "擅长以植物控场、隐匿和耐久拖住术师；能配合真人、漏瑚、陀艮执行救援和围攻。",
        special: "植物术式、咒种、花海干涉、咒灵恢复、隐匿气息。",
        weakness: "输出更多依赖控制和消耗，对顶级术师或强领域对抗缺少决定性破局；身体硬度不等于全类型抗性。",
        setting: "按交流会至涩谷事变阶段花御记录，不把特级咒灵称号直接换算成更高破坏档。",
        basis: "worldbook只用于抽取花御姓名；定级依据公开角色资料入口和交流会/涩谷事变相关植物术式、耐久与灾害咒灵表现。"
      })
    })
  ]);
})();
