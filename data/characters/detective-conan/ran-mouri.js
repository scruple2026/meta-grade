(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["名侦探柯南"];
  if (!work) throw new Error("名侦探柯南 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "ran-mouri",
    name: "毛利兰",
    en: "Ran Mouri",
    ja: "毛利 蘭",
    aliases: ["Ran", "Mouri Ran", "兰", "空手道主将"],
    affiliation: "帝丹高中 / 毛利家",
    grade: "高中生 / 空手道高手",
    appearances: ["名侦探柯南"],
    timelineStatus: "主线综合 / 空手道高手",
    fandomSlug: "Ran_Mouri",
    confidence: "medium",
    evidenceType: ["官方角色入口", "角色资料入口", "worldbook名字索引"],
    sourceQuality: "entry",
    evidenceLinks: [{
      type: "official",
      scope: "官方角色入口",
      label: "WEB Sunday: 名探偵コナン キャラクター",
      url: "https://websunday.net/conan100/character/",
      lang: "ja",
      authority: "official",
      medium: "official-site",
      ratingEvidence: false,
      claim: "用于核对《名侦探柯南》小学馆官方角色入口。"
    }, {
      type: "wiki",
      scope: "角色资料入口",
      label: "Detective Conan World: Ran Mouri",
      url: "https://www.detectiveconanworld.com/wiki/Ran_Mouri",
      lang: "en",
      authority: "wiki",
      medium: "wiki",
      ratingEvidence: true,
      claim: "用于交叉核对毛利兰的空手道能力、帝丹高中身份和主要战斗表现。"
    }],
    revisionNotes: ["从缄默之秋 worldbook 的毛利兰 key/comment 补入；未采用 worldbook 正文描述。"],
    dimensions: dims({
        attack: ["砖块级｜空手道", "墙体级｜空手道爆发/破物｜武术", "空手道打击显著强于普通人，但按近战破物保守记录。"],
        defense: ["凡人级", "砖块级｜格斗防护/规避", "肉身仍是人类，防御主要来自格斗架势和闪避。"],
        movement: ["凡人速", "亚音速｜空手道步法/短距爆发", "短距突进和闪避强于普通高中生。"],
        reaction: ["凡人速", "亚音速｜格斗反应", "近战和危机反应来自空手道训练。"],
        vitality: ["强化凡体", "精锐韧体｜格斗训练/生还经历", "高水平训练者生命体量，不脱离人类尺度。"],
        healing: ["无自愈", "缓慢自愈｜医疗/休整", "恢复依赖普通医疗和休息。"],
        energy: ["凡人能量", "砖块级能量｜体力/格斗爆发", "资源来自体力和格斗爆发。"],
        energyRegen: ["无回能", "缓慢回能｜休息/补给", "依赖休息恢复。"]
      }),
    notes: notes({
        penetration: "空手道踢击和拳击对普通人、门板、器物等有高效近战杀伤。攻击速度：空手道拳踢随小兰贴身步法与发力完成，未表现可脱离本体飞行的攻击，也没有依据换算超常弹速。",
        resistance: "无超常抗性，靠格斗架势、步法和距离控制避免受击。",
        sensing: "危机直觉、近战距离感和保护他人的警觉性突出。",
        tactics: "擅长正面制止犯人、保护柯南/普通人，并在狭窄空间快速制服对手。",
        special: "空手道高水平训练、强保护欲和近战心理素质。",
        weakness: "缺少远程手段和超自然防护；面对枪械、爆炸物或多人围攻需依赖地形和队友。",
        setting: "按主线综合的毛利兰记录。",
        basis: "worldbook只用于抽取毛利兰姓名；定级依据官方角色入口和Detective Conan World角色入口，空手道作为近战武术峰值。"
      })
  })]);
})();
