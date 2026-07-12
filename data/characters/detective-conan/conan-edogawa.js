(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["名侦探柯南"];
  if (!work) throw new Error("名侦探柯南 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "conan-edogawa",
    name: "江户川柯南",
    en: "Conan Edogawa",
    ja: "江戸川 コナン",
    aliases: ["工藤新一", "Shinichi Kudo", "Conan", "少年侦探"],
    affiliation: "毛利侦探事务所 / 少年侦探团",
    grade: "少年侦探 / 身体幼化的高中生侦探",
    appearances: ["名侦探柯南"],
    timelineStatus: "主线综合 / 侦探道具携带",
    fandomSlug: "Conan_Edogawa",
    confidence: "medium",
    evidenceType: ["官方角色入口", "角色资料入口", "worldbook名字索引"],
    sourceQuality: "entry",
    evidenceLinks: [{
      type: "official",
      scope: "官方角色入口",
      label: "YTV: 名探偵コナン キャラクター",
      url: "https://www.ytv.co.jp/conan/character/",
      lang: "ja",
      authority: "official",
      medium: "official-site",
      ratingEvidence: false,
      claim: "用于核对《名侦探柯南》动画官方角色入口。"
    }, {
      type: "wiki",
      scope: "角色资料入口",
      label: "Detective Conan World: Conan Edogawa",
      url: "https://www.detectiveconanworld.com/wiki/Conan_Edogawa",
      lang: "en",
      authority: "wiki",
      medium: "wiki",
      ratingEvidence: true,
      claim: "用于交叉核对柯南的身份、侦探能力、麻醉针、脚力增强鞋和滑板等道具。"
    }],
    revisionNotes: ["从缄默之秋 worldbook 的江户川柯南 key/comment 补入；未采用 worldbook 正文描述。"],
    dimensions: dims({
        attack: ["凡人级", "砖级｜脚力增强鞋/足球/麻醉针｜装备", "本体为儿童体型，战斗峰值来自阿笠博士道具和足球。"],
        defense: ["凡人级", "凡人级｜规避/小体型", "身体防御仍是儿童人类尺度。"],
        movement: ["凡人速", "亚音速｜滑板/短距闪避｜装备", "常态为儿童体能；滑板和短距闪避提供机动峰值。"],
        reaction: ["凡人速", "亚音速｜案件应变/道具使用", "观察和应变强，但身体反应仍在人类尺度。"],
        vitality: ["凡人肉身", "凡人肉身", "儿童体型生命体量，不因推理能力提高。"],
        healing: ["无自愈", "缓慢自愈｜医疗/休整", "恢复依赖普通医疗和休整。"],
        energy: ["凡人能量", "砖级能量｜道具电池/足球/麻醉针", "资源来自道具、足球和体力，不是超自然能量池。"],
        energyRegen: ["无回能", "缓慢回能｜补给/道具维护", "依赖补充麻醉针、足球和道具维护。"]
      }),
    notes: notes({
        penetration: "麻醉针、脚力增强鞋足球、伸缩吊带和滑板等道具可破局，但不代表本体攻击。攻击速度：麻醉针由手表瞄准并发射，足球由脚力增强鞋强化后踢出，二者离开装置或脚部后各有独立弹道，均不同于柯南本体跑动。",
        resistance: "儿童身体脆弱，主要靠规避、隐蔽、道具和提前推理避免正面承伤。",
        sensing: "观察力、推理、痕迹分析、声音/现场线索识别极强。",
        tactics: "擅长用证据链、伪装发声、麻醉针和场地机关制造非正面制胜。",
        special: "APTX幼化状态、变声器、麻醉手表、脚力增强鞋、滑板、侦探徽章等道具。",
        weakness: "儿童体型导致力量、防御和续航受限；道具缺失或被限制时战斗能力显著下降。",
        setting: "按主线综合、常带侦探道具的江户川柯南记录。",
        basis: "worldbook只用于抽取江户川柯南姓名；定级依据官方角色入口和Detective Conan World角色入口，推理与道具峰值和本体面板分开。"
      })
  })]);
})();
