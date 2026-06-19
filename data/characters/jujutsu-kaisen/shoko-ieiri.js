(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) {
    throw new Error("咒术回战 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "shoko-ieiri",
      name: "家入硝子",
      en: "Shoko Ieiri",
      ja: "家入硝子",
      affiliation: "东京都立咒术高专",
      grade: "医疗术师 / 反转术式",
      appearances: ["怀玉・玉折", "涩谷事变", "新宿决战"],
      timelineStatus: "涩谷事变至新宿决战",
      aliases: ["Shoko Ieiri", "Ieiri Shoko", "反转术式", "高专校医"],
      fandomSlug: "Shoko_Ieiri",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Jujutsu Kaisen Wiki: Shoko Ieiri",
          url: "https://jujutsu-kaisen.fandom.com/wiki/Shoko_Ieiri",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对家入硝子、高专医生和反转术式治疗能力；不把医疗稀有性折算为正面攻防。"
        },
        {
          type: "source",
          scope: "角色交叉资料入口",
          label: "Wikipedia: List of Jujutsu Kaisen characters",
          url: "https://en.wikipedia.org/wiki/List_of_Jujutsu_Kaisen_characters",
          lang: "en",
          authority: "cross-reference",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于交叉核对家入硝子作为高专医生和反转术式治疗者的定位；具体战力以保守支援面板记录。"
        }
      ],
      revisionNotes: [
        "从咒术回战新宿决战 worldbook 的新宿决战高频角色 key/comment 补入；未采用 worldbook 正文描述。",
        "家入硝子属于关键医疗支援角色，不按正面战斗高端录入。"
      ],
      dimensions: dims({
        attack: ["凡人级", "墙级｜咒力基础", "主要定位是医疗支援，缺少正面战斗输出表现。"],
        defense: ["凡人级", "墙级｜咒力防护", "高专术师基础防护可保守记入峰值，但不是前线承伤角色。"],
        movement: ["凡人速", "亚音速｜术师基础", "缺少高速机动表现。"],
        reaction: ["凡人速", "亚音速｜术师基础", "常态不参与高压前线交锋。"],
        vitality: ["凡人肉身", "强化凡体｜术师体质", "本体生命体量仍是人类范围。"],
        healing: ["快速自愈｜反转术式/医疗支援", "瞬愈｜反转术式治疗输出｜条件", "反转术式重点是治疗自己或他人；作为回复维度记录，但不等同不死。"],
        energy: ["墙级能量", "楼级能量｜反转术式治疗", "咒力资源主要用于医疗和反转术式输出。"],
        energyRegen: ["中速回能", "快速回能｜医疗待机/补给", "作为后方医疗支援可持续处理伤员，但不是无限咒力。"]
      }),
      notes: notes({
        penetration: "缺少正面攻击术式表现，攻击项只记录基础咒力和自卫可能。",
        resistance: "可用反转术式处理伤势，但如果被瞬间击杀或无法发动术式，医疗优势无法转化为硬防。",
        sensing: "高专医疗和尸检经验带来咒术知识判断，不等同远距索敌。",
        tactics: "作为校医和后方支援，重在伤员处理、尸检和战后信息；遭遇战执行力保守记录。",
        special: "反转术式治疗、输出正能量治疗他人、尸检与医疗支援。",
        weakness: "正面战斗表现少，缺少高机动、领域和大范围攻击；医疗价值依赖安全后方和施术窗口。",
        setting: "按涩谷事变至新宿决战高专校医状态记录，不把稀有医疗能力写成高攻防。",
        basis: "worldbook只用于抽取家入硝子姓名；定级依据公开角色资料入口和反转术式医疗定位。"
      })
    })
  ]);
})();
