(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["火影忍者"];

  if (!work) {
    throw new Error("火影忍者 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "might-guy",
      name: "迈特凯",
      en: "Might Guy",
      ja: "マイト・ガイ",
      affiliation: "木叶隐村",
      grade: "体术专家 / 八门遁甲",
      appearances: ["正篇", "第四次忍界大战"],
      timelineStatus: "第四次忍界大战 / 八门遁甲峰值",
      aliases: ["凯", "八门凯", "夜凯"],
      fandomSlug: "Might_Guy",
      confidence: "review",
      evidenceType: ["原作表现", "设定书入口", "跨界参考"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "source",
          scope: "跨界战力参考",
          label: "VS Battles Wiki：Might Guy",
          url: "https://vsbattles.fandom.com/wiki/Might_Guy",
          lang: "en",
          authority: "cross-reference",
          medium: "cross-wiki",
          ratingEvidence: true,
          claim: "用于复核七门、八门和夜凯峰值的跨界量级口径；本站将八门标为一次性争议峰值。"
        },
        {
          type: "setting",
          scope: "日文官方设定书",
          label: "集英社：NARUTO―ナルト―［秘伝・陣の書］",
          citation: "岸本斉史『NARUTO―ナルト―［秘伝・陣の書］キャラクターオフィシャルデータBOOK』集英社, 2014年。",
          lang: "ja",
          authority: "official",
          medium: "databook",
          ratingEvidence: true,
          claim: "用于核对八门遁甲、昼虎、夕象、夜凯等资料。"
        }
      ],
      defaultTimelineKey: "eighth-gate",
      timelinePanels: [
        {
          key: "sixth-seventh-gate",
          label: "七门前后 / 昼虎",
          status: "第六门至第七门体术峰值",
          dimensions: dims({
            attack: ["楼级", "街区级｜昼虎", "七门昼虎是高压空气冲击，不按忍术能量池处理。"],
            defense: ["墙级", "楼级｜八门负荷前", "体术体魄极强，但防御不是核心优势。"],
            movement: ["超音速", "高超音速｜八门遁甲｜争议", "八门大幅提高短距速度。"],
            reaction: ["超音速", "高超音速｜体术经验｜争议", "高端近战反应突出。"],
            vitality: ["精锐韧体", "街区级生命阈值｜八门负荷", "可承受极高负荷，但会自损。"],
            healing: ["无自愈", "无自愈", "无自体恢复。"],
            energy: ["楼级能量", "街区级能量｜昼虎", "八门将体能爆发为短时输出。"],
            energyRegen: ["常规回能", "常规回能", "八门后需要休养，非稳定回能。"]
          }),
          notes: "不计入第八门死门。"
        },
        {
          key: "eighth-gate",
          label: "死门 / 夜凯",
          status: "第八门一次性峰值",
          dimensions: dims({
            attack: ["街区级", "国家级｜夜凯｜一次性｜争议", "夜凯是自毁式体术峰值，按单体冲击和高端对手承压保守列争议。"],
            defense: ["墙级", "街区级｜八门负荷", "八门提高身体输出而非等比例提高防御；反噬极强。"],
            movement: ["超音速", "高超音速｜夜凯｜争议", "短时突进极快，但不按光速。"],
            reaction: ["超音速", "高超音速｜体术经验｜争议", "高端近战判断和连击节奏极强。"],
            vitality: ["精锐韧体", "街区级生命阈值｜死门反噬", "死门会主动摧毁身体，生命阈值不按攻击峰值抬升。"],
            healing: ["无自愈", "无自愈", "无自愈，死门后需外部拯救。"],
            energy: ["街区级能量", "国家级能量｜死门爆发｜一次性｜争议", "把生命力转化为短时爆发，非可持续能量池。"],
            energyRegen: ["常规回能", "无回能｜死门代价", "第八门是一次性代价，不存在战斗中回能。"]
          }),
          notes: "当前主面板版本；八门峰值明确标为一次性自毁。"
        }
      ],
      dimensions: dims({
        attack: ["街区级", "国家级｜夜凯｜一次性｜争议", "夜凯是自毁式体术峰值，按单体冲击和高端对手承压保守列争议。"],
        defense: ["墙级", "街区级｜八门负荷", "八门提高身体输出而非等比例提高防御；反噬极强。"],
        movement: ["超音速", "高超音速｜夜凯｜争议", "短时突进极快，但不按光速。"],
        reaction: ["超音速", "高超音速｜体术经验｜争议", "高端近战判断和连击节奏极强。"],
        vitality: ["精锐韧体", "街区级生命阈值｜死门反噬", "死门会主动摧毁身体，生命阈值不按攻击峰值抬升。"],
        healing: ["无自愈", "无自愈", "无自愈，死门后需外部拯救。"],
        energy: ["街区级能量", "国家级能量｜死门爆发｜一次性｜争议", "把生命力转化为短时爆发，非可持续能量池。"],
        energyRegen: ["常规回能", "无回能｜死门代价", "第八门是一次性代价，不存在战斗中回能。"]
      }),
      notes: notes({
        penetration: "昼虎、夕象、夜凯是高压体术冲击和连击穿透，不代表大范围地表破坏。",
        resistance: "八门不提供等比例防御，反而造成严重自损；承伤不能按夜凯攻击峰值反推。",
        special: "八门遁甲、昼虎、夕象、夜凯、高端体术。",
        weakness: "缺少忍术/幻术体系广度；八门尤其第八门代价极高，峰值不可持续。",
        setting: "按第四次忍界大战死门峰值记录，常态和七门拆入时间线。",
        basis: "依据凯在鬼鲛战、第四次忍界大战对六道斑时的七门/八门表现保守定级。"
      })
    })
  ]);
})();
