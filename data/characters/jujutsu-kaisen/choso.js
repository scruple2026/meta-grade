(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) throw new Error("咒术回战 work metadata must load before character files.");

  registerCharacters([
    work.character({
      id: "choso",
      name: "胀相",
      en: "Choso",
      ja: "脹相",
      affiliation: "咒胎九相图 / 虎杖阵营",
      grade: "特级咒物受肉体 / 赤血操术",
      appearances: ["涩谷事变", "死灭回游", "新宿决战"],
      timelineStatus: "新宿决战 / 虎杖协同状态",
      aliases: ["Choso", "脹相", "九相图长兄", "赤血操术"],
      fandomSlug: "Choso",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Jujutsu Kaisen Wiki: Choso",
          url: "https://jujutsu-kaisen.fandom.com/wiki/Choso",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对胀相身份、赤血操术和主要篇章；具体量级按作品内表现保守记录。"
        }
      ],
      revisionNotes: ["从咒术回战改 worldbook 的胀相 key/comment 补入；未采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["墙级", "楼级｜穿血/超新星", "赤血操术具高速穿刺、爆裂和近中距压制。"],
        defense: ["墙级", "楼级｜咒力防护/血液操作", "受肉体与咒力防护强于普通术师，但不按特级咒灵硬度处理。"],
        movement: ["亚音速", "音速", "可参与高阶术师近战和机动。"],
        reaction: ["亚音速", "音速", "能处理涩谷至新宿阶段的高速术师战。"],
        vitality: ["精锐韧体", "精锐韧体｜受肉体/九相图", "受肉体生命结构特殊，但仍可被高阶术式致命伤击倒。"],
        healing: ["中速自愈｜血液补充", "快速自愈｜咒力/血液操作", "能通过咒力转化血液支撑续战，不等同反转术式全修复。"],
        energy: ["墙级能量", "楼级能量｜咒力/血液资源", "血液与咒力资源可持续支撑多轮术式。"],
        energyRegen: ["中速回能", "快速回能｜血液生成", "续航强于普通赤血操术使用者，但仍受咒力和伤势限制。"]
      }),
      notes: notes({
        penetration: "穿血、超新星、赤鳞跃动和血刃偏高速穿刺与局部爆裂。",
        resistance: "受肉体和血液操作提升承伤；毒血和血液资源是优势，但高阶火力与领域仍能压制。",
        sensing: "咒力感知、血缘感应和战斗经验较强，索敌范围不按全域处理。",
        tactics: "从敌对咒物转为协同战后，能用血液术式保护、牵制和补位；情绪与兄弟执念会影响判断。",
        special: "咒胎九相图、赤血操术、毒血、血液补充、虎杖血缘感应。",
        weakness: "血液资源和咒力仍有限，面对高阶领域、火焰、空间切割或大范围压制风险高。",
        setting: "按新宿决战前后胀相记录，不把九相图身份直接折算为更高破坏档。",
        basis: "worldbook只用于抽取胀相姓名；定级依据公开角色资料入口和赤血操术在涩谷、死灭回游、新宿中的表现。"
      })
    })
  ]);
})();
