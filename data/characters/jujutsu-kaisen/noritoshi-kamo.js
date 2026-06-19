(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) {
    throw new Error("咒术回战 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "noritoshi-kamo",
      name: "加茂宪纪",
      en: "Noritoshi Kamo",
      ja: "加茂憲紀",
      affiliation: "京都咒术高专 / 加茂家",
      grade: "准一级术师 / 赤血操术",
      appearances: ["京都姐妹校交流会", "死灭回游"],
      timelineStatus: "京都姐妹校交流会至死灭回游",
      aliases: ["加茂", "Noritoshi", "Noritoshi Kamo", "赤血操术", "Blood Manipulation", "穿血"],
      fandomSlug: "Noritoshi_Kamo",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Jujutsu Kaisen Wiki: Noritoshi Kamo",
          url: "https://jujutsu-kaisen.fandom.com/wiki/Noritoshi_Kamo",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对加茂宪纪、京都高专、加茂家和赤血操术相关资料；具体量级按作品内表现保守记录。"
        }
      ],
      revisionNotes: [
        "从咒术回战改 worldbook 的加茂宪纪 key/comment 补入；未采用 worldbook 正文描述。"
      ],
      dimensions: dims({
        attack: ["墙级", "楼级｜赤血操术/穿血", "穿血、赤鳞跃动和血刃提供稳定中近距杀伤。"],
        defense: ["墙级", "楼级｜咒力防护/赤鳞跃动", "咒力强化和赤鳞跃动提高肉体表现，但不按胀相的咒胎体质处理。"],
        movement: ["亚音速", "音速｜赤鳞跃动", "术式强化后近战机动提升，仍非高速移动型。"],
        reaction: ["亚音速", "音速｜准一级术师经验", "能参与京都校与死灭回游阶段的术师战。"],
        vitality: ["精锐韧体", "精锐韧体｜咒力强化", "本体是人类术师，承伤和血量管理明显受限。"],
        healing: ["无自愈", "无自愈", "缺少稳定反转术式自愈表现。"],
        energy: ["墙级能量", "楼级能量｜赤血操术", "咒力和血液资源支撑穿血、血刃与强化体术。"],
        energyRegen: ["中速回能", "快速回能｜术式管理", "续航强于普通学生术师，但人类血量限制会约束持续输出。"]
      }),
      notes: notes({
        penetration: "穿血和压缩血液攻击具备高局部穿透，血刃适合近战切割。",
        resistance: "咒力防护和赤鳞跃动可强化肉体；失血、毒素和持续消耗仍是明显风险。",
        sensing: "具备术师基础咒力判断和远近距离控制意识；非专职索敌。",
        tactics: "能在中距离压制、近战强化和血液资源管理之间切换，战斗风格较规整。",
        special: "赤血操术、穿血、赤鳞跃动、血刃、血液操控。",
        weakness: "人类术师血量有限，不能像胀相那样长期无代价造血；缺少领域和自愈。",
        setting: "按京都姐妹校交流会至死灭回游的加茂宪纪记录，不把御三家身份直接折算为更高量级。",
        basis: "worldbook只用于抽取加茂宪纪姓名；定级依据公开角色资料入口和赤血操术在作品内的表现。"
      })
    })
  ]);
})();
