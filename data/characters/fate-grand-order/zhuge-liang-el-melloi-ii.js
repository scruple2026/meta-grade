(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Grand Order"];

  if (!work) {
    throw new Error("Fate/Grand Order work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "zhuge-liang-el-melloi-ii",
      name: "诸葛孔明〔埃尔梅罗二世〕",
      en: "Zhuge Liang (Lord El-Melloi II)",
      ja: "諸葛孔明〔エルメロイII世〕",
      affiliation: "迦勒底召唤 / 时钟塔君主",
      grade: "Caster / 拟似从者",
      appearances: ["Fate/Grand Order"],
      timelineStatus: "FGO 召唤灵基 / Caster",
      aliases: ["诸葛孔明", "孔明", "埃尔梅罗二世", "君主·埃尔梅罗II世", "韦伯", "Waver Velvet", "Lord El-Melloi II"],
      fandomSlug: "Zhuge_Liang",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "TYPE-MOON Wiki: Zhuge Liang",
          url: "https://typemoon.fandom.com/wiki/Zhuge_Liang",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对 FGO 诸葛孔明〔埃尔梅罗二世〕的 Caster 灵基、拟似从者、军师支援和宝具语境。"
        }
      ],
      revisionNotes: [
        "从命运之夜酒馆助手 worldbook 的诸葛孔明埃尔梅罗二世 key/comment 补入；未采用 worldbook 正文描述。",
        "Fate/Zero 韦伯已另有第四次圣杯战争条目，本条只记录 FGO Caster 拟似从者。"
      ],
      dimensions: dims({
        attack: ["房屋级", "楼级｜军师支援/宝具｜争议", "Caster 孔明主强项是支援、削弱和控制，裸输出保守记录。"],
        defense: ["房屋级", "楼级｜防御支援/灵基", "防御依赖 Caster 灵基、战术防护和队伍支援。"],
        movement: ["亚音速", "音速｜从者灵基/支援", "本体不以高速机动见长，峰值按从者灵基和支援补正。"],
        reaction: ["亚音速", "音速｜军师判断/从者反应", "战术判断强于身体速度，反应峰值按从者灵基记录。"],
        vitality: ["房屋级生命阈值", "楼级生命阈值｜灵基/防御支援", "拟似从者灵基提高承伤，但不是前排硬抗型。"],
        healing: ["中速自愈｜灵基/供魔", "快速自愈｜支援/供魔", "恢复和续战主要靠供魔、支援与战术节流。"],
        energy: ["房屋级能量", "楼级能量｜军师支援/宝具", "能量池偏支援和宝具控制，不按大范围输出处理。"],
        energyRegen: ["中速回能", "快速回能｜供魔/支援循环", "供魔与技能循环可支撑队伍爆发。"]
      }),
      notes: notes({
        penetration: "直接攻击规模有限，核心价值在防御削弱、战术支援、控制和宝具效果。",
        resistance: "具备 Caster 灵基与防御支援，但本体不适合正面硬吃高输出。",
        sensing: "魔术师知识、军师视角和从者感知可辅助局势读取。",
        tactics: "顶级支援军师，擅长资源调度、队伍强化、敌方削弱和战斗节奏控制。",
        special: "拟似从者、诸葛孔明军师权能、埃尔梅罗二世魔术知识、宝具、队伍充能与强化。",
        weakness: "个人输出和身体机动偏弱；强度高度依赖队友、准备和战术执行。",
        setting: "按 FGO Caster 诸葛孔明〔埃尔梅罗二世〕记录，不并入 Fate/Zero 少年韦伯面板。",
        basis: "worldbook只用于抽取诸葛孔明〔埃尔梅罗二世〕姓名；定级依据公开角色资料入口和 FGO 支援型 Caster 定位。"
      })
    })
  ]);
})();
