(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) throw new Error("咒术回战 work metadata must load before character files.");

  registerCharacters([
    work.character({
      id: "mimiko-hasaba",
      name: "枷场美美子",
      en: "Mimiko Hasaba",
      ja: "枷場美々子",
      affiliation: "夏油阵营",
      grade: "诅咒师",
      appearances: ["咒术回战0", "涩谷事变"],
      timelineStatus: "咒术回战0至涩谷事变",
      aliases: ["美美子", "Mimiko", "Mimiko Hasaba", "枷场姐妹", "夏油家族"],
      fandomSlug: "Mimiko_Hasaba",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Jujutsu Kaisen Wiki: Mimiko Hasaba",
          url: "https://jujutsu-kaisen.fandom.com/wiki/Mimiko_Hasaba",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对枷场美美子、夏油阵营和涩谷事变相关资料；具体量级按作品内表现保守记录。"
        }
      ],
      revisionNotes: [
        "从咒术回战改 worldbook 的美美子和菜菜子 key/comment 拆分补入；未采用 worldbook 正文描述。"
      ],
      dimensions: dims({
        attack: ["砖级", "墙级｜诅咒师术式", "缺少高破坏正面表现，按低阶诅咒师术式和工具杀伤记录。"],
        defense: ["砖级", "墙级｜咒力防护", "基础咒力防护，面对高阶术师和宿傩级存在毫无容错。"],
        movement: ["凡人速", "亚音速｜术师基础", "按低阶术师体术记录。"],
        reaction: ["凡人速", "亚音速｜术师基础", "具备术师基础反应，缺少高压战绩。"],
        vitality: ["强化凡体", "强化凡体｜咒力强化", "人类诅咒师生命体量。"],
        healing: ["无自愈", "无自愈", "缺少稳定反转术式自愈表现。"],
        energy: ["砖级能量", "墙级能量｜术式/咒力", "咒力资源按低阶诅咒师记录。"],
        energyRegen: ["中速回能", "中速回能｜低阶术师续航", "缺少持续高强度输出表现。"]
      }),
      notes: notes({
        penetration: "缺少大范围或高穿透明确表现，攻击按低阶术式保守记录。",
        resistance: "人类诅咒师防护，面对高阶火力和领域几乎无容错。",
        sensing: "具备基础咒力感知，非远距索敌型。",
        tactics: "常与菜菜子一起行动，依赖夏油阵营保护和情报差。",
        special: "夏油阵营成员、枷场姐妹协同、低阶诅咒师术式。",
        weakness: "正面战力低，独立战斗表现少，遇到高阶角色极易被压制。",
        setting: "按咒术回战0至涩谷事变阶段记录，不把夏油阵营身份写成高战力。",
        basis: "worldbook只用于抽取美美子和菜菜子姓名；定级依据公开角色资料入口和低阶诅咒师定位。"
      })
    })
  ]);
})();
