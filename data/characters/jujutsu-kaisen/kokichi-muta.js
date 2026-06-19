(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) {
    throw new Error("咒术回战 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "kokichi-muta",
      name: "与幸吉 / 究极机械丸",
      en: "Kokichi Muta / Ultimate Mechamaru",
      ja: "与幸吉 / 究極メカ丸",
      affiliation: "京都咒术高专",
      grade: "准一级术师 / 傀儡操术",
      appearances: ["京都姐妹校交流会", "涩谷事变前夕"],
      timelineStatus: "涩谷事变前后",
      aliases: ["与幸吉", "究极机械丸", "机械丸", "Kokichi Muta", "Ultimate Mechamaru", "Mechamaru", "傀儡操术"],
      fandomSlug: "Kokichi_Muta",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Jujutsu Kaisen Wiki: Kokichi Muta",
          url: "https://jujutsu-kaisen.fandom.com/wiki/Kokichi_Muta",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对与幸吉、究极机械丸、傀儡操术、天与咒缚身体限制和装甲峰值；具体量级按作品内表现保守记录。"
        }
      ],
      revisionNotes: [
        "从咒术回战改 worldbook 的与幸吉/究极机械丸 key/comment 补入；未采用 worldbook 正文描述。"
      ],
      dimensions: dims({
        attack: ["墙级", "街区级｜究极机械丸绝对形态/蓄积咒力｜争议", "常规傀儡输出有限，巨大装甲和多年蓄积咒力带来一次性高峰值。"],
        defense: ["墙级", "楼级｜傀儡/装甲", "常规傀儡和装甲可承受近战火力，本体极脆弱。"],
        movement: ["亚音速", "音速｜傀儡机动/装甲", "傀儡可远程行动，巨大装甲机动不等于本体速度。"],
        reaction: ["亚音速", "音速｜远程操控", "操控与判断可参与高阶战斗，但本体反应和傀儡延迟需分开。"],
        vitality: ["凡人肉身｜本体病弱", "楼级生命阈值｜装甲/傀儡外壳", "生命体量分本体与载具；装甲耐久不能写成本体肉身。"],
        healing: ["无自愈", "中速自愈｜真人修复后/条件", "身体修复是剧情交易条件，不是稳定自愈能力。"],
        energy: ["墙级能量", "街区级能量｜多年蓄积咒力/装甲", "天与咒缚带来大范围傀儡操控和蓄积资源，峰值不可长期复制。"],
        energyRegen: ["缓慢回能", "中速回能｜远程傀儡运用", "常规续航依赖储备和操控，装甲决战是消耗型峰值。"]
      }),
      notes: notes({
        penetration: "傀儡炮击、机械武装和巨大装甲能量输出偏远程压制；峰值来自蓄积咒力，不代表常态。",
        resistance: "傀儡和装甲可替本体承伤；本体原本极度脆弱，修复后仍缺少稳定自愈。",
        sensing: "天与咒缚扩大傀儡操控范围，可远程侦察和投射行动；本体视野依赖傀儡。",
        tactics: "善于布置远程傀儡、预存资源和用装甲对抗强敌；情报泄露和本体位置是核心风险。",
        special: "傀儡操术、天与咒缚、大范围远程操控、究极机械丸绝对形态、蓄积咒力。",
        weakness: "本体脆弱、远程操控依赖傀儡和信号/咒力资源；装甲峰值是消耗性决战资源。",
        setting: "按涩谷事变前后与幸吉记录，常规傀儡和巨大装甲峰值分开标注。",
        basis: "worldbook只用于抽取与幸吉/究极机械丸姓名；定级依据公开角色资料入口和与真人决战中的傀儡操术、装甲与蓄积咒力表现。"
      })
    })
  ]);
})();
