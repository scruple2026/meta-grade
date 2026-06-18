(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["龙珠"];

  if (!work) {
    throw new Error("龙珠 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "recoome",
      name: "力库姆",
      en: "Recoome",
      ja: "リクーム",
      affiliation: "基纽特战队 / 弗利萨军",
      grade: "基纽特战队成员",
      appearances: ["那美克星篇"],
      timelineStatus: "那美克星篇 / 基纽特战队成员",
      aliases: ["Recoome", "リクーム"],
      fandomSlug: "Recoome",
      confidence: "review",
      evidenceType: ["官方角色展示", "跨界参考"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "official",
          scope: "角色定位与那美克星篇",
          label: "DRAGON BALL Official Site: Weekly Character Showcase #79 Recoome",
          url: "https://en.dragon-ball-official.com/news/01_1458.html",
          citation: "Weekly Character Showcase #79: Recoome!, Tale 272-275 references",
          lang: "en",
          authority: "official",
          medium: "official-site",
          ratingEvidence: false,
          claim: "核对力库姆为弗利萨军精英基纽特战队成员，在那美克星篇与贝吉塔、悟饭、克林战斗，并以高耐打表现压制贝吉塔。"
        },
        {
          type: "source",
          scope: "跨界战力参考",
          label: "VS Battles Wiki: Recoome",
          url: "https://vsbattles.fandom.com/wiki/Recoome",
          lang: "en",
          authority: "cross-reference",
          medium: "cross-wiki",
          ratingEvidence: true,
          claim: "用于交叉复核那美克星篇力库姆与基纽特战队成员的相对量级；本站按基纽队长以下保守记录。"
        }
      ],
      revisionNotes: ["从龙珠那美克星篇 worldbook 的 comment/key 姓名池补入；不采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["城市级", "城市级｜气功/体术｜争议", "强于那美克星篇贝吉塔早段对手，低于基纽队长和悟空到场后的压制线。"],
        defense: ["城市级", "城市级｜耐打/气防御｜争议", "官方资料强调其承受贝吉塔猛攻后仍能嘲讽，防御和耐打是主要特点。"],
        movement: ["高超音速", "宇宙速度级｜飞行/高速战斗｜争议", "可高速飞行和近战，但低于到场悟空的速度压制。"],
        reaction: ["高超音速", "宇宙速度级｜争议", "能参与那美克星篇高速战斗，但被悟空瞬间压制。"],
        vitality: ["城市级生命阈值", "城市级生命阈值｜耐打/气防御｜争议", "高耐打和宇宙人身体支撑续战。"],
        healing: ["无自愈", "缓慢自愈｜医疗/休整", "无稳定再生。"],
        energy: ["城市级能量", "城市级能量｜气功｜争议", "气储量和输出强，但低于基纽队长。"],
        energyRegen: ["快速回能", "快速回能｜气恢复", "可持续战斗，重伤后需要恢复或医疗。"]
      }),
      notes: notes({
        penetration: "以重击、近战压制和气功为主，杀伤方式直接，不具特殊穿透。",
        resistance: "耐打和气防御突出，但悟空到场后被速度与力量差距压制，不能上推到基纽队长级。",
        sensing: "依赖战斗力探测器、弗利萨军经验和气感知；摆姿势和轻敌会暴露窗口。",
        tactics: "偏正面碾压和心理折磨，喜欢用夸张姿势与游戏感拖延战斗。",
        special: "气功、舞空术、基纽特战队协同、高耐打。",
        weakness: "轻敌、表演欲强，面对远高于自己的速度和力量时应对不足。",
        setting: "按那美克星篇力库姆记录。",
        basis: "worldbook只用于抽取力库姆姓名；定级依据Dragon Ball官方角色展示与那美克星篇基纽特战队相对战力，低于基纽队长保守记录。"
      })
    })
  ]);
})();
