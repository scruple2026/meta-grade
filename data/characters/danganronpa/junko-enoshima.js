(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["弹丸论破"];
  if (!work) throw new Error("弹丸论破 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "junko-enoshima",
    name: "江之岛盾子",
    en: "Junko Enoshima",
    ja: "江ノ島盾子",
    aliases: ["Junko", "Junko Enoshima", "江之岛", "超高校级的绝望", "Ultimate Despair"],
    affiliation: "希望之峰学园 / 绝望残党",
    grade: "超高校级辣妹 / 超高校级绝望",
    appearances: ["Danganronpa: Trigger Happy Havoc", "Danganronpa 系列"],
    timelineStatus: "主线幕后主谋 / 黑白熊与处刑装置资源",
    fandomSlug: "Junko_Enoshima",
    confidence: "medium",
    evidenceType: ["官方系列入口", "角色资料入口", "worldbook名字索引"],
    sourceQuality: "entry",
    evidenceLinks: [{
      type: "official",
      scope: "官方系列入口",
      label: "Danganronpa Official Website",
      url: "https://www.danganronpa.us/",
      lang: "en",
      authority: "official",
      medium: "official-site",
      ratingEvidence: false,
      claim: "用于核对《Danganronpa》官方系列入口。"
    }, {
      type: "wiki",
      scope: "角色资料入口",
      label: "Danganronpa Wiki: Junko Enoshima",
      url: "https://danganronpa.fandom.com/wiki/Junko_Enoshima",
      lang: "en",
      authority: "wiki",
      medium: "wiki",
      ratingEvidence: true,
      claim: "用于交叉核对江之岛盾子的超高校级称号、幕后主谋身份、黑白熊和绝望事件资料。"
    }],
    revisionNotes: ["从缄默之秋 worldbook 的江之岛盾子 key/comment 补入；未采用 worldbook 正文描述。"],
    dimensions: dims({
        attack: ["凡人级", "砖级｜黑白熊/处刑装置/陷阱｜外部资源", "本体攻击为普通人尺度；峰值来自设施、黑白熊和处刑机关。"],
        defense: ["凡人级", "凡人级｜替身/幕后操控", "本体防御普通，生存优势来自隐藏身份、替身和操控局面。"],
        movement: ["凡人速", "凡人速", "没有稳定超人移动表现。"],
        reaction: ["凡人速", "亚音速｜高分析/预判", "可用观察和心理预判提高应对，但不等同高速身体反应。"],
        vitality: ["凡人肉身", "凡人肉身", "本体生命体量为普通人类。"],
        healing: ["无自愈", "无自愈", "缺少自愈或超常恢复表现。"],
        energy: ["凡人能量", "砖级能量｜设施/黑白熊/处刑资源｜外部资源", "自身无超自然能量池；峰值是可调动设施和机器资源。"],
        energyRegen: ["无回能", "缓慢回能｜设施补给/预设机关", "依靠预设设施、黑白熊和组织资源补充。"]
      }),
    notes: notes({
        penetration: "本体攻击很低；处刑装置、陷阱、爆炸和黑白熊等外部资源可造成更高杀伤。攻击速度：盾子本体只具凡人动作，黑白熊、爆炸物与处刑装置按各自机械触发和弹药速度运作，并不随她本人行动。",
        resistance: "本体承伤普通，主要靠身份伪装、幕后操控、替身和规则设计避免正面承伤。",
        sensing: "超高校级分析、观察、心理洞察和人心操控极强，但不是超感知。",
        tactics: "擅长长期布局、规则操控、心理崩坏、煽动和信息差压制。",
        special: "绝望煽动、人格演出、黑白熊操控、处刑装置、社会工程、组织残党影响。",
        weakness: "本体脆弱，正面遭遇缺乏稳定超人战斗力；很多峰值依赖设施、规则和事前布局。",
        setting: "按主线幕后主谋、可调动黑白熊与处刑装置资源的江之岛盾子记录。",
        basis: "worldbook只用于抽取江之岛盾子姓名；定级依据官方系列入口和Danganronpa Wiki角色入口，绝望事件和社会影响写入特殊/战术，不转化为本体面板。"
      })
  })]);
})();
