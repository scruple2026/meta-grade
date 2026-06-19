(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["心理测量者"];

  if (!work) throw new Error("Psycho-Pass work metadata must load before character files.");

  registerCharacters([
    work.character({
      id: "mitsuru-sasayama",
      name: "佐佐山光留",
      en: "Mitsuru Sasayama",
      ja: "佐々山光留",
      affiliation: "厚生省公安局刑事课一系",
      grade: "执行官 / 标本事件受害者",
      appearances: ["标本事件前史", "第一季回忆"],
      timelineStatus: "标本事件前史",
      aliases: ["佐佐山", "Sasayama", "Mitsuru Sasayama", "公安一系执行官"],
      fandomSlug: "Mitsuru_Sasayama",
      confidence: "medium",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Psycho-Pass Wiki: Mitsuru Sasayama",
          url: "https://psychopass.fandom.com/wiki/Mitsuru_Sasayama",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对佐佐山光留、公安一系执行官和标本事件前史相关资料；具体量级按近未来警用武装保守记录。"
        }
      ],
      revisionNotes: [
        "从心理测量者 worldbook 的标本事件/佐佐山光留 key/comment 补入；未采用 worldbook 正文描述。"
      ],
      dimensions: dims({
        attack: ["凡人级", "墙级｜Dominator/枪械", "执行官个人近战有限，峰值来自Dominator或警用武装。"],
        defense: ["凡人级", "凡人级｜防护装备", "普通人肉身，装备不能抵消致命埋伏。"],
        movement: ["凡人速", "凡人速｜刑警训练", "警员级机动。"],
        reaction: ["凡人速", "凡人速｜执行官训练", "刑警经验和枪械反应强于普通人，但不超出现实人类范畴。"],
        vitality: ["凡人肉身", "凡人肉身", "普通人生命体量。"],
        healing: ["无自愈", "无自愈", "无自愈。"],
        energy: ["凡人能量", "墙级能量｜Dominator/公安装备", "战斗资源来自Dominator、枪械和公安补给。"],
        energyRegen: ["无回能", "缓慢回能｜装备补给", "外部装备需要补给和系统授权。"]
      }),
      notes: notes({
        penetration: "Dominator或枪械可形成警用火力；本人没有超自然攻击。",
        resistance: "普通人承伤，面对连环杀人和埋伏风险极高。",
        sensing: "刑侦经验和现场判断，依赖公安情报与Dominator扫描。",
        tactics: "执行官实务经验丰富，是狡啮前史和标本事件的重要线索人物。",
        special: "执行官权限、Dominator、刑侦经验、标本事件关联。",
        weakness: "肉身普通，容易被预谋犯罪、陷阱和非正面战斗方式杀害。",
        setting: "按标本事件前史阶段佐佐山光留记录。",
        basis: "worldbook只用于抽取佐佐山光留姓名；定级依据公开角色资料入口和执行官/标本事件定位。"
      })
    })
  ]);
})();
