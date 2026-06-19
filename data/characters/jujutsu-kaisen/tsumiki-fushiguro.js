(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) throw new Error("咒术回战 work metadata must load before character files.");

  registerCharacters([
    work.character({
      id: "tsumiki-fushiguro",
      name: "伏黑津美纪",
      en: "Tsumiki Fushiguro",
      ja: "伏黒津美紀",
      affiliation: "伏黑家 / 死灭回游受肉载体",
      grade: "普通人 / 受肉载体",
      appearances: ["幼年回忆", "死灭回游"],
      timelineStatus: "死灭回游",
      aliases: ["津美纪", "Tsumiki", "Tsumiki Fushiguro", "伏黑惠姐姐", "万的受肉载体"],
      fandomSlug: "Tsumiki_Fushiguro",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引", "非战斗保守"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Jujutsu Kaisen Wiki: Tsumiki Fushiguro",
          url: "https://jujutsu-kaisen.fandom.com/wiki/Tsumiki_Fushiguro",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对伏黑津美纪、伏黑惠关系和死灭回游受肉载体相关资料；不把万的战力回填给津美纪本人。"
        }
      ],
      revisionNotes: [
        "从咒术回战改 worldbook 的伏黑津美纪 key/comment 补入；未采用 worldbook 正文描述。",
        "万已作为独立角色收录；伏黑津美纪本人按普通人/受肉载体分开记录。"
      ],
      dimensions: dims({
        attack: ["凡人级", "凡人级", "津美纪本人缺少战斗攻击表现；万的构筑术式不回填给她。"],
        defense: ["凡人级", "凡人级", "普通人承伤，受肉载体身份不等同自身硬防。"],
        movement: ["凡人速", "凡人速", "普通人移动。"],
        reaction: ["凡人速", "凡人速", "普通人反应。"],
        vitality: ["凡人肉身", "凡人肉身｜受肉载体", "本体生命体量按普通人处理。"],
        healing: ["缓慢自愈", "缓慢自愈｜医疗", "按普通人自然恢复和外部医疗处理。"],
        energy: ["凡人能量", "凡人能量", "津美纪本人无稳定战斗能源表现。"],
        energyRegen: ["无回能", "无回能", "不存在可排序的战斗回能体系。"]
      }),
      notes: notes({
        penetration: "无特殊攻击性质；万的术式属于受肉者万，不计入津美纪本人。",
        resistance: "普通人承伤，剧情风险来自诅咒和受肉而非自身防御。",
        sensing: "普通人感知，不具备战斗索敌。",
        tactics: "缺少战斗战术表现。",
        special: "伏黑惠的姐姐、死灭回游受肉载体、万相关剧情节点。",
        weakness: "无战斗能力，受诅咒、昏迷和受肉影响极大。",
        setting: "按死灭回游的津美纪本人记录，与万的正式面板分离。",
        basis: "worldbook只用于抽取伏黑津美纪姓名；定级依据公开角色资料入口和普通人/受肉载体定位。"
      })
    })
  ]);
})();
