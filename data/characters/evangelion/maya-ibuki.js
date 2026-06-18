(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["新世纪福音战士"];

  if (!work) {
    throw new Error("新世纪福音战士 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "maya-ibuki",
      name: "伊吹摩耶",
      en: "Maya Ibuki",
      ja: "伊吹マヤ",
      affiliation: "NERV / 技术部",
      grade: "技术员 / 操作员",
      appearances: ["TV版", "The End of Evangelion"],
      timelineStatus: "旧剧场版 / NERV操作员",
      aliases: ["摩耶", "Maya", "Ibuki Maya", "NERV技术员", "律子助手"],
      fandomSlug: "Maya_Ibuki",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Evangelion Wiki: Maya Ibuki",
          url: "https://evangelion.fandom.com/wiki/Maya_Ibuki",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对伊吹摩耶、NERV技术员、赤木律子助手和旧剧场版NERV中枢阶段。"
        }
      ],
      revisionNotes: ["从 EVA worldbook 的 state_伊吹摩耶_旧剧场版状态 key/comment 补入；未采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["凡人级", "凡人级", "缺少个人武装或主动攻击表现。"],
        defense: ["凡人级", "凡人级", "本体是普通技术人员。"],
        movement: ["凡人速", "凡人速", "无超常移动表现。"],
        reaction: ["凡人速", "凡人速", "操作反应和技术判断不等于超人战斗反应。"],
        vitality: ["凡人肉身", "凡人肉身", "普通人生命体量。"],
        healing: ["无自愈", "无自愈", "依赖医疗，没有自愈体系。"],
        energy: ["凡人能量", "凡人能量｜操作系统不计入个人储量", "NERV操作台和系统资源不作为个人能量池。"],
        energyRegen: ["中速回能", "中速回能", "按普通人体力恢复。"]
      }),
      notes: notes({
        penetration: "无稳定个人杀伤手段；主要作用是技术操作和战场数据处理。",
        resistance: "没有个人防御能力，面对常规武器、爆炸或EVA/使徒冲突没有承伤优势。",
        sensing: "依靠NERV监控、MAGI数据和操作员界面读取战场信息。",
        tactics: "技术执行可靠，可支撑EVA启动、战况监控和NERV中枢运作；不适合正面战斗。",
        special: "NERV操作员权限、EVA启动/监控流程、MAGI数据读取。",
        weakness: "本体战斗能力接近普通人，强依赖NERV中枢设施和上级指挥。",
        setting: "按 TV/旧剧场版伊吹摩耶记录，不混入 Rebuild 设定。",
        basis: "worldbook只用于抽取伊吹摩耶姓名；定级依据公开角色资料入口和其NERV技术员、旧剧场版操作员定位。"
      })
    })
  ]);
})();
