(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) {
    throw new Error("咒术回战 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "tengen",
      name: "天元",
      en: "Tengen",
      ja: "天元",
      affiliation: "咒术界 / 薨星宫",
      grade: "不死术式持有者 / 国内结界核心",
      appearances: ["怀玉·玉折", "死灭回游", "新宿决战"],
      timelineStatus: "死灭回游至新宿决战 / 结界核心与残骸",
      aliases: [
        "天元大人",
        "Master Tengen",
        "Tengen-sama",
        "星浆体",
        "薨星宫",
        "天元结界",
        "纯净结界",
        "天元合并",
        "人类合并",
        "大合并",
        "超重叠同化",
        "超重複同化",
        "天元残骸",
        "原作天元",
        "原作新宿决战"
      ],
      fandomSlug: "Tengen",
      confidence: "review",
      evidenceType: ["官方角色页", "角色页入口"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "official",
          scope: "日文官方角色页",
          label: "TV动画「咒术回战」角色页：天元",
          url: "https://jujutsukaisen.jp/character/",
          lang: "ja",
          authority: "official",
          medium: "official-site",
          ratingEvidence: true,
          claim: "官方角色页说明天元持有不死术式，并是薨星宫本殿中的国内结界核心；本站不把结界规模折算为攻击或肉身防御。"
        },
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Jujutsu Kaisen Wiki: Tengen",
          url: "https://jujutsu-kaisen.fandom.com/wiki/Tengen",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于交叉核对天元的不死术式、结界维护、薨星宫位置、星浆体同化和后期被羂索利用的剧情语境。"
        },
        {
          type: "wiki",
          scope: "术式资料入口",
          label: "Jujutsu Kaisen Wiki: Immortality",
          url: "https://jujutsu-kaisen.fandom.com/wiki/Immortality",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "术式资料入口；不死术式属于寿命和进化条件，不直接支撑无限生命体量或高速自愈。"
        }
      ],
      revisionNotes: ["从新宿决战 worldbook 的 char_天元 key/comment 补入；未采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["无资料", "无资料｜结界支援", "缺少稳定直接攻击表现；结界、同化计划和规则价值不折算为破坏输出。"],
        defense: ["凡人级", "房屋级｜结界/薨星宫｜条件", "本体不按强战斗肉身处理；安全性主要来自薨星宫和结界条件。"],
        movement: ["凡人速", "凡人速", "长期驻留薨星宫，缺少战斗机动表现。"],
        reaction: ["凡人速", "亚音速｜结界操作/经验", "能处理结界与情报判断，但缺少高速近战反应表现。"],
        vitality: ["凡人肉身", "精锐韧体｜不死术式/进化体｜非承伤换算", "不死术式延续寿命并引发进化，不等于无限承伤、无限再生或不可杀。"],
        healing: ["无自愈", "无自愈｜不死术式非恢复", "不死术式不是战斗中高速修复；伤害恢复能力缺少表现。"],
        energy: ["楼级能量", "街区级能量｜国内结界维持｜非输出", "结界维持资源极重要，但不等同单次攻击输出或硬防。"],
        energyRegen: ["中速回能", "快速回能｜长期结界维持", "以长期维持和结界管理体现续航，不按瞬时回能处理。"]
      }),
      notes: notes({
        penetration: "几乎不作为直接攻击者记录；核心价值来自结界术、不死术式和同化/合并条件。",
        resistance: "薨星宫与结界提供隔离和安全条件；本体被羂索控制说明结界核心不等于不可攻破防御。",
        sensing: "极长期存在、结界管理和咒术界情报理解很强，但不是全知，也不等于战斗索敌全覆盖。",
        tactics: "擅长结界维持、情报说明和长期制度支撑；遭遇顶级术师/诅咒师时战斗主动性很低。",
        special: "不死术式、国内结界核心、纯净结界、薨星宫、星浆体同化、天元合并/人类合并条件。",
        weakness: "缺少直接战斗输出和机动；不死不等于不老或不可杀，进化、同化失败、封印/控制和羂索计划都是关键风险。",
        setting: "按死灭回游至新宿决战语境记录；天元残骸和人类合并计划属于剧情/规则条件，不写成无限级主面板。",
        basis: "worldbook只用于抽取天元姓名与别名；定级依据官方角色页和公开角色资料，结界规模、同化计划和不死术式均按特殊权能处理。"
      })
    })
  ]);
})();
