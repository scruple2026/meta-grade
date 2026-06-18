(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["葬送的芙莉莲"];

  if (!work) {
    throw new Error("葬送的芙莉莲 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "gluck",
      name: "格吕克",
      en: "Glück",
      ja: "グリュック",
      affiliation: "维泽 / 黄金乡",
      grade: "领主 / 黄金乡关键人物",
      appearances: ["黄金乡篇"],
      timelineStatus: "黄金乡篇 / 非战斗关键人物",
      aliases: ["Gluck", "Glück", "维泽领主"],
      fandomSlug: "Gl%C3%BCck",
      confidence: "review",
      evidenceType: ["官方漫画入口", "资料入口"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "official",
          scope: "作品入口",
          label: "小学馆 Sunday Webry：葬送のフリーレン",
          url: "https://websunday.net/work/708/",
          lang: "ja",
          authority: "official",
          medium: "publisher",
          ratingEvidence: false,
          claim: "用于核对《葬送的芙莉莲》漫画官方作品入口；不单独作为格吕克战斗量级依据。"
        },
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Frieren Wiki: Glück",
          url: "https://frieren.fandom.com/wiki/Gl%C3%BCck",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于交叉核对格吕克为黄金乡篇维泽相关关键人物；其政治与剧情重要性不换算战斗主面板。"
        }
      ],
      revisionNotes: ["从黄金乡篇 worldbook 的 comment/key 姓名池补入；不采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["凡人级", "凡人级", "非战斗领主，缺少可跨界定级的战斗输出。"],
        defense: ["凡人级", "凡人级", "普通人承伤，不把剧情重要性换算为防御。"],
        movement: ["凡人速", "凡人速", "普通人移动。"],
        reaction: ["凡人速", "凡人速", "政治判断强不等同战斗反应。"],
        vitality: ["凡人肉身", "凡人肉身", "普通人生命体量。"],
        healing: ["无自愈", "缓慢自愈｜休整/医疗", "依赖自然恢复和医疗。"],
        energy: ["凡人能量", "凡人能量", "无稳定战斗资源池。"],
        energyRegen: ["中速回能", "中速回能｜休息/进食", "普通人恢复。"]
      }),
      notes: notes({
        penetration: "无正式战斗输出，政治交易和剧情影响不计入攻击能级。",
        resistance: "普通人承伤；黄金乡相关状态若发生，属于外部特殊魔法环境。",
        sensing: "政治判断、人物观察和长期博弈能力突出，但无超常索敌。",
        tactics: "擅长政治权衡、长期目标和与马哈特的复杂关系处理；这属于剧情/政治层面的战术。",
        special: "维泽领主身份、黄金乡篇关键政治人物、与马哈特的长期关系。",
        weakness: "正面战斗能力低，面对魔族或魔法战需要他人保护。",
        setting: "按黄金乡篇格吕克记录。",
        basis: "worldbook只用于抽取格吕克姓名；定级依据公开作品入口和角色资料入口，按非战斗关键人物保守记录。"
      })
    })
  ]);
})();
