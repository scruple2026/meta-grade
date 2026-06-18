(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["新世纪福音战士"];

  if (!work) {
    throw new Error("新世纪福音战士 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "ritsuko-akagi",
      name: "赤木律子",
      en: "Ritsuko Akagi",
      ja: "赤木リツコ",
      affiliation: "NERV / 技术部",
      grade: "首席科学家 / MAGI管理者",
      appearances: ["TV版", "The End of Evangelion"],
      timelineStatus: "旧剧场版 / NERV技术中枢",
      aliases: ["律子", "Ritsuko", "Akagi Ritsuko", "MAGI", "赤木直子之女"],
      fandomSlug: "Ritsuko_Akagi",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Evangelion Wiki: Ritsuko Akagi",
          url: "https://evangelion.fandom.com/wiki/Ritsuko_Akagi",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对赤木律子、NERV首席科学家、MAGI关联和旧剧场版中与MAGI自爆相关的剧情阶段。"
        }
      ],
      revisionNotes: ["从 EVA worldbook 的 state_赤木律子_旧剧场版状态 key/comment 补入；未采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["凡人级", "砖级｜手枪/设施权限", "个人直接输出为枪械和设施操作，不把MAGI/NERV资源折算为肉身攻击。"],
        defense: ["凡人级", "凡人级", "本体是普通成年人科学家。"],
        movement: ["凡人速", "凡人速", "无超常移动表现。"],
        reaction: ["凡人速", "凡人速", "依靠技术判断与现场反应，不按超人反应定级。"],
        vitality: ["凡人肉身", "凡人肉身", "普通人生命体量。"],
        healing: ["无自愈", "无自愈", "依赖医疗，没有自愈体系。"],
        energy: ["凡人能量", "凡人能量｜设备权限不计入个人储量", "MAGI和NERV设施是外部系统，不作为个人能量池。"],
        energyRegen: ["中速回能", "中速回能", "按普通人体力恢复。"]
      }),
      notes: notes({
        penetration: "可使用手枪和设施权限造成威胁；主要影响是系统操作、MAGI权限和技术破坏，不是个人破坏能级。",
        resistance: "没有超常防御或AT力场，面对枪械、爆炸、EVA/使徒级冲突极脆弱。",
        sensing: "通过MAGI、NERV监控和技术分析理解战场态势，非个人超感知。",
        tactics: "科学判断、系统权限和对NERV机密的理解是核心价值；正面战斗能力有限。",
        special: "MAGI系统管理、EVA/使徒技术解析、NERV设施权限、旧剧场版自毁相关操作。",
        weakness: "依赖NERV设施和权限，本体战斗力接近普通人；设施被切断时影响力大幅下降。",
        setting: "按 TV/旧剧场版赤木律子记录，不混入 Rebuild 设定。",
        basis: "worldbook只用于抽取赤木律子姓名；定级依据公开角色资料入口和其科学家、MAGI管理者、旧剧场版设施操作定位。"
      })
    })
  ]);
})();
