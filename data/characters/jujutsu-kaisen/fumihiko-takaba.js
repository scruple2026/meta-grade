(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) throw new Error("咒术回战 work metadata must load before character files.");

  registerCharacters([
    work.character({
      id: "fumihiko-takaba",
      name: "高羽史彦",
      en: "Fumihiko Takaba",
      ja: "髙羽史彦",
      affiliation: "死灭回游泳者 / 搞笑艺人",
      grade: "觉醒术师 / 超人",
      appearances: ["死灭回游", "新宿决战"],
      timelineStatus: "新宿决战 / 对羂索喜剧对局",
      aliases: ["高羽", "Takaba", "Fumihiko Takaba", "超人", "Comedian"],
      fandomSlug: "Fumihiko_Takaba",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Jujutsu Kaisen Wiki: Fumihiko Takaba",
          url: "https://jujutsu-kaisen.fandom.com/wiki/Fumihiko_Takaba",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对高羽史彦和超人术式；搞笑现实改写作为规则/剧情型术式，不换算为普通破坏档。"
        }
      ],
      revisionNotes: ["从咒术回战改 worldbook 的高羽史彦 key/comment 补入；未采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["凡人级", "楼级｜超人术式｜规则/争议", "直接战斗输出低；术式按本人觉得好笑的规则改写场面，难以换算破坏范围。"],
        defense: ["凡人级", "楼级｜超人术式｜规则/争议", "生存力主要来自术式扭曲结果，不是肉身硬度。"],
        movement: ["凡人速", "亚音速｜术式演出", "本体缺少高速表现，术式可制造荒诞位移或场面变化。"],
        reaction: ["凡人速", "亚音速｜喜剧节奏", "战斗反应依赖术式和喜剧节奏，不按顶级近战反应处理。"],
        vitality: ["凡人肉身", "精锐韧体｜术式保护", "本体是普通觉醒术师，难杀来自术式保护和场面规则。"],
        healing: ["无自愈", "中速自愈｜术式演出｜争议", "伤害处理多由术式喜剧化，不等同稳定反转术式。"],
        energy: ["墙级能量", "楼级能量｜术式维持", "术式影响巨大但资源消耗和上限难以稳定量化。"],
        energyRegen: ["中速回能", "快速回能｜术式节奏", "续航取决于精神状态和喜剧自信。"]
      }),
      notes: notes({
        penetration: "超人术式可按“好笑”改写局面，属于规则/叙事型干涉，不按拳脚破坏档处理。",
        resistance: "防御来自术式让伤害喜剧化或无效化；精神受挫、笑点失效和规则理解会削弱。",
        sensing: "主动索敌弱，依靠即兴反应和对搞笑节奏的感受。",
        tactics: "非传统战术，靠即兴喜剧和对手被卷入节奏制造优势；对不配合或心理压制存在波动。",
        special: "超人术式、喜剧现实改写、精神状态依赖、规则型对局。",
        weakness: "术式强度依赖本人觉得好笑且通常不自知；信心崩溃或笑点被压制会显著削弱。",
        setting: "按新宿决战对羂索对局记录，术式效果强但不写成稳定无限攻击、防御或速度。",
        basis: "worldbook只用于抽取高羽史彦姓名；定级依据公开角色资料入口和对羂索战中的超人术式表现。"
      })
    })
  ]);
})();
