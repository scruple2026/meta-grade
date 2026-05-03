(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["海贼王"];

  if (!work) {
    throw new Error("海贼王 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "sanji",
      name: "山治",
      en: "Sanji",
      ja: "サンジ",
      affiliation: "草帽一伙",
      grade: "厨师 / 杰尔马改造体觉醒",
      appearances: ["正篇"],
      timelineStatus: "和之国后 / 外骨骼觉醒",
      aliases: [],
      fandomSlug: "Sanji",
      evidenceLinks: [
        {
          type: "official",
          scope: "日文官方作品入口",
          label: "少年ジャンプ官方《ONE PIECE》作品页",
          url: "https://www.shonenjump.com/j/rensai/onepiece.html",
          lang: "ja",
          authority: "official",
          medium: "official-site",
          ratingEvidence: false,
          claim: "作为日文官方作品入口保留；霸气/外骨骼高风险量级仍需原作卷话补证。"
        }
      ],
      defaultTimelineKey: "wano-exoskeleton",
      timelinePanels: [
        {
          key: "enies-lobby",
          label: "司法岛后 / 恶魔风脚",
          status: "黑足与恶魔风脚成型",
          dimensions: dims({
            attack: ["楼级", "街区级｜恶魔风脚", "火焰踢击和体术爆发提升。"],
            defense: ["楼级", "街区级｜体魄", "承伤强但无外骨骼。"],
            movement: ["亚音速", "超音速｜高速移动", "短距高速移动突出。"],
            reaction: ["亚音速", "超音速｜战斗经验", "近战反应强。"],
            vitality: ["精锐韧体", "街区级生命阈值", "可重伤续战。"],
            healing: ["无自愈", "缓慢自愈", "依赖医疗和休息。"],
            energy: ["楼级能量", "街区级能量｜恶魔风脚", "高温踢击消耗体力。"],
            energyRegen: ["常规回能", "常规回能", "无特殊回能。"]
          }),
          notes: "不计入新世界霸气和杰尔马外骨骼。"
        },
        {
          key: "whole-cake",
          label: "蛋糕岛篇 / 空中机动与霸气",
          status: "新世界黑足与见闻色强化",
          dimensions: dims({
            attack: ["街区级", "街区级｜恶魔风脚/霸气", "踢击与火焰威力提升。"],
            defense: ["街区级", "街区级｜武装色", "武装色提升防御。"],
            movement: ["超音速", "高超音速｜高速移动｜争议", "空中机动和高速移动突出。"],
            reaction: ["超音速", "高超音速｜见闻色｜争议", "见闻色反应强。"],
            vitality: ["街区级生命阈值", "街区级生命阈值", "体魄和承伤强。"],
            healing: ["缓慢自愈", "缓慢自愈", "依赖休息和医疗。"],
            energy: ["街区级能量", "街区级能量｜恶魔风脚/霸气", "霸气和火焰踢击消耗体力。"],
            energyRegen: ["常规回能", "快速回能｜体力恢复", "依赖体力恢复。"]
          }),
          notes: "不计入和之国外骨骼觉醒。"
        },
        {
          key: "wano-exoskeleton",
          label: "和之国后 / 外骨骼觉醒",
          status: "魔神风脚与改造体恢复",
          dimensions: dims({
            attack: ["街区级", "城市级｜魔神风脚｜争议", "踢击、火焰和外骨骼觉醒后单体杀伤极强。"],
            defense: ["街区级", "城市级｜外骨骼｜争议", "杰尔马外骨骼与武装色提升防御。"],
            movement: ["超音速", "高超音速｜高速移动｜争议", "高速移动和空中机动是核心优势。"],
            reaction: ["超音速", "高超音速｜见闻色｜争议", "见闻色和高速战斗反应突出。"],
            vitality: ["街区级生命阈值", "城市级生命阈值｜外骨骼觉醒｜争议", "外骨骼和恢复力提升生存。"],
            healing: ["缓慢自愈", "快速自愈｜改造体恢复｜争议", "外骨骼觉醒后可恢复骨骼类损伤。"],
            energy: ["街区级能量", "城市级能量｜魔神风脚｜争议", "高温踢击与霸气消耗体力。"],
            energyRegen: ["常规回能", "快速回能｜体力恢复", "依赖体力。"]
          }),
          notes: "当前主面板版本。"
        }
      ],
      dimensions: dims({
        attack: ["街区级", "城市级｜魔神风脚｜争议", "踢击、火焰和外骨骼觉醒后单体杀伤极强。"],
        defense: ["街区级", "城市级｜外骨骼｜争议", "杰尔马外骨骼与武装色提升防御。"],
        movement: ["超音速", "高超音速｜高速移动｜争议", "高速移动和空中机动是核心优势。"],
        reaction: ["超音速", "高超音速｜见闻色｜争议", "见闻色和高速战斗反应突出。"],
        vitality: ["街区级生命阈值", "城市级生命阈值｜外骨骼觉醒｜争议", "外骨骼和恢复力提升生存。"],
        healing: ["缓慢自愈", "快速自愈｜改造体恢复｜争议", "外骨骼觉醒后可恢复骨骼类损伤。"],
        energy: ["街区级能量", "城市级能量｜魔神风脚｜争议", "高温踢击与霸气消耗体力。"],
        energyRegen: ["常规回能", "快速回能｜体力恢复", "依赖体力。"]
      }),
      notes: notes({
        penetration: "黑足高速踢击、恶魔风脚/魔神风脚的高温灼烧和武装色可形成连续踢击破甲；魔神风脚更偏单体高速连打与热伤害，不把火焰特效直接换算为大范围城市破坏。",
        resistance: "杰尔马外骨骼觉醒后骨骼、皮肤和内脏承伤显著增强，配合武装色可硬吃更高强度打击；精神控制风险、女性目标限制、霸气耗尽、斩切/规则伤害和外骨骼状态不稳仍是限制。",
        special: "黑足、月步、恶魔风脚、魔神风脚、见闻色、杰尔马外骨骼。",
        weakness: "高温踢击和高速机动持续消耗体力，外骨骼觉醒不是无限再生；山治有明确不攻击女性的战斗原则，遇到针对该原则的敌人会被战术克制。",
        setting: "按和之国后外骨骼觉醒和魔神风脚版本记录；司法岛恶魔风脚、蛋糕岛见闻色与空中机动已拆入时间线。",
        basis: "依据山治至和之国篇对奎因战中的速度、外骨骼和火焰踢击表现定级。"
      })
    })
  ]);
})();
