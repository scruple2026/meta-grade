(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) throw new Error("咒术回战 work metadata must load before character files.");

  registerCharacters([
    work.character({
      id: "larue",
      name: "拉鲁",
      en: "Larue",
      ja: "ラルゥ",
      affiliation: "夏油阵营 / 术师",
      grade: "术师 / 心身掌握",
      appearances: ["咒术回战0", "新宿决战"],
      timelineStatus: "咒术回战0至新宿决战",
      aliases: ["Larue", "ラルゥ", "心身掌握", "Heart Catch", "夏油家族"],
      fandomSlug: "Larue",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Jujutsu Kaisen Wiki: Larue",
          url: "https://jujutsu-kaisen.fandom.com/wiki/Larue",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对拉鲁、夏油阵营和新宿决战支援术式相关资料；具体量级按作品内表现保守记录。"
        }
      ],
      revisionNotes: [
        "从咒术回战改 worldbook 的拉鲁 key/comment 补入；未采用 worldbook 正文描述。"
      ],
      dimensions: dims({
        attack: ["砖级", "墙级｜心身掌握/牵制", "术式以牵引和注意力控制为主，直接破坏表现有限。"],
        defense: ["砖级", "墙级｜咒力防护", "人类术师基础防护，主要依靠支援和控制创造安全窗口。"],
        movement: ["凡人速", "亚音速｜术师体术", "非高速机动型。"],
        reaction: ["凡人速", "亚音速｜支援应对", "可在高压战场提供辅助，但不按顶级近战反应处理。"],
        vitality: ["强化凡体", "强化凡体｜咒力强化", "人类术师生命体量。"],
        healing: ["无自愈", "无自愈", "缺少稳定反转术式自愈表现。"],
        energy: ["砖级能量", "墙级能量｜心身掌握", "咒力资源用于牵制、辅助和短时控制。"],
        energyRegen: ["中速回能", "中速回能｜支援术式续航", "支援术式可持续一段时间，但不适合高强度正面输出。"]
      }),
      notes: notes({
        penetration: "心身掌握偏控制/牵制，不能当作破坏力上档。",
        resistance: "咒力防护基础，若控制失败或被远程高火力压制，本体风险高。",
        sensing: "具备术师基础判断和团队支援意识，非索敌特化。",
        tactics: "适合在队友进攻窗口中拉扯敌人注意力或身体位置，团队价值高于单挑。",
        special: "心身掌握、注意力牵引、身体牵制、夏油阵营经验。",
        weakness: "直接输出低，依赖术式命中、距离和队友配合。",
        setting: "按咒术回战0至新宿决战相关状态记录，控制术式不折算为高攻防。",
        basis: "worldbook只用于抽取拉鲁姓名；定级依据公开角色资料入口和新宿决战支援表现。"
      })
    })
  ]);
})();
