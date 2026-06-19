(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) {
    throw new Error("咒术回战 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "miguel-oduol",
      name: "米格尔",
      en: "Miguel Oduol",
      ja: "ミゲル・オドゥオール",
      affiliation: "夏油阵营 / 海外术师",
      grade: "术师 / 黑绳",
      appearances: ["咒术回战0", "新宿决战"],
      timelineStatus: "咒术回战0至新宿决战",
      aliases: ["Miguel", "Miguel Oduol", "奥杜尔", "黑绳", "Black Rope"],
      fandomSlug: "Miguel_Oduol",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Jujutsu Kaisen Wiki: Miguel Oduol",
          url: "https://jujutsu-kaisen.fandom.com/wiki/Miguel_Oduol",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对米格尔、黑绳、咒术回战0和新宿决战相关资料；具体量级按作品内表现保守记录。"
        }
      ],
      revisionNotes: [
        "从咒术回战改 worldbook 的米格尔 key/comment 补入；未采用 worldbook 正文描述。"
      ],
      dimensions: dims({
        attack: ["墙级", "楼级｜黑绳/体术", "黑绳扰乱术式并配合高水平体术，但不直接等同大范围破坏。"],
        defense: ["墙级", "楼级｜咒力防护/黑绳牵制", "咒力强化和黑绳对术式干扰提高对强敌周旋能力。"],
        movement: ["亚音速", "音速｜术师体术", "可与高端术师短时周旋，机动按高水平人类术师处理。"],
        reaction: ["亚音速", "音速｜强敌周旋", "能应对高压近战和术式牵制，但不按顶级速度角色处理。"],
        vitality: ["精锐韧体", "精锐韧体｜咒力强化/耐打", "本体是人类术师，承伤依赖体术、咒力和黑绳周旋。"],
        healing: ["无自愈", "无自愈", "缺少稳定反转术式自愈表现。"],
        energy: ["墙级能量", "楼级能量｜黑绳/咒力", "咒力资源与黑绳装备结合，主要用于牵制和近战。"],
        energyRegen: ["中速回能", "快速回能｜高水平术师续航", "能长时间周旋但不是无限资源。"]
      }),
      notes: notes({
        penetration: "黑绳的重点是扰乱术式，配合体术造成局部杀伤；不把反术式特性直接写成破坏上档。",
        resistance: "咒力强化、体术和黑绳牵制能降低术式压制；装备耗损或失去距离后风险上升。",
        sensing: "具备海外术师战斗经验和对强敌术式的应对判断，非远距索敌型。",
        tactics: "擅长拖延、牵制和以装备打断术式节奏，在团队计划中承担强敌周旋任务。",
        special: "黑绳、术式扰乱、高水平体术、海外术师经验。",
        weakness: "黑绳属于消耗/装备资源；缺少领域、自愈和大范围输出。",
        setting: "按咒术回战0至新宿决战的米格尔记录，黑绳反术式效果不直接转换为高攻防。",
        basis: "worldbook只用于抽取米格尔姓名；定级依据公开角色资料入口和黑绳/体术在作品内的表现。"
      })
    })
  ]);
})();
