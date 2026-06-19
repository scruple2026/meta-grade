(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["学园默示录 HIGHSCHOOL OF THE DEAD"];
  if (!work) throw new Error("学园默示录 HIGHSCHOOL OF THE DEAD work metadata must load before character files.");

  registerCharacters([work.character({
    id: "saeko-busujima",
    name: "毒岛冴子",
    en: "Saeko Busujima",
    ja: "毒島冴子",
    aliases: ["Saeko", "Busujima", "剑道部主将"],
    affiliation: "藤美学园幸存者小队 / 剑道部",
    grade: "剑道高手 / 学生幸存者",
    appearances: ["丧尸爆发篇"],
    timelineStatus: "爆发期幸存者",
    fandomSlug: "Saeko_Busujima",
    confidence: "medium",
    evidenceType: ["授权出版入口", "角色资料入口", "worldbook名字索引"],
    sourceQuality: "entry",
    evidenceLinks: [{
      type: "source",
      scope: "英文授权出版入口",
      label: "Yen Press: Highschool of the Dead",
      url: "https://yenpress.com/series/highschool-of-the-dead",
      lang: "en",
      authority: "licensed",
      medium: "publisher",
      ratingEvidence: false,
      claim: "用于核对作品授权出版入口。"
    }, {
      type: "wiki",
      scope: "角色资料入口",
      label: "Highschool of the Dead Wiki: Saeko Busujima",
      url: "https://highschoolofthedead.fandom.com/wiki/Saeko_Busujima",
      lang: "en",
      authority: "wiki",
      medium: "wiki",
      ratingEvidence: true,
      claim: "用于核对毒岛冴子的剑道部主将、近战杀伤和幸存者小队身份。"
    }],
    revisionNotes: ["从缄默之秋 worldbook 的毒岛冴子 key/comment 补入；未采用 worldbook 正文描述。"],
    dimensions: dims({
        attack: ["砖级｜木刀/近战", "砖级｜真剑/要害斩击｜武器", "剑道和刀具让她对丧尸有高效单体杀伤，但不按大范围破坏处理。"],
        defense: ["凡人级", "凡人级｜规避/剑道距离控制", "本体仍为人类，防御主要来自步法和距离。"],
        movement: ["凡人速", "亚音速｜剑道爆发/短距突进", "短距离突进和闪避强于普通学生。"],
        reaction: ["凡人速", "亚音速｜剑道反应", "剑道训练和实战压力提高近战反应。"],
        vitality: ["凡人肉身", "强化凡体｜训练/生还经历", "体能和抗压优秀，但不脱离人类生命体量。"],
        healing: ["无自愈", "缓慢自愈｜急救/休整", "恢复依赖休整和医疗物资。"],
        energy: ["凡人能量", "砖级能量｜刀具/体力", "能量资源来自体力和武器。"],
        energyRegen: ["无回能", "缓慢回能｜休息/补给", "依赖休息和补给。"]
      }),
    notes: notes({
        penetration: "真剑、木刀和剑道技巧偏要害斩击，对丧尸清场效率高但范围有限。",
        resistance: "本体为训练人类，避免被咬比硬抗更重要。",
        sensing: "近战距离判断、敌群间隙和队伍路线判断突出。",
        tactics: "擅长前排清路、断后、保护队友和利用狭窄空间。",
        special: "剑道部主将、刀剑使用、近战心理素质。",
        weakness: "被包围、体力耗尽或失去武器后风险显著上升。",
        setting: "按丧尸爆发期毒岛冴子记录。",
        basis: "worldbook只用于抽取毒岛冴子姓名；定级依据授权出版入口和角色资料入口，剑道与刀具作为武器峰值。"
      })
  })]);
})();
