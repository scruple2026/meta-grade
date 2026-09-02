(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Zero"];
  if (!work) throw new Error("Fate/Zero work metadata must load before character files.");

  registerCharacters([work.character({
    id: "gilgamesh-fz",
    name: "Archer（吉尔伽美什）",
    en: "Gilgamesh",
    ja: "ギルガメッシュ",
    aliases: ["吉尔伽美什", "金闪闪", "Archer", "英雄王"],
    affiliation: "远坂阵营 / Archer职阶",
    grade: "从者 / 王之财宝",
    appearances: ["第四次圣杯战争"],
    timelineStatus: "第四次圣杯战争",
    fandomSlug: "Gilgamesh",
    confidence: "review",
    evidenceType: ["官方入口", "角色页入口", "宝具峰值"],
    sourceQuality: "entry",
    evidenceLinks: [],
    revisionNotes: ["worldbook 仅用于抽取 Fate/Zero 角色姓名；定级依据公开官方/资料入口并保持保守。"],
    dimensions: dims({
        attack: ["楼宇级", "街区级｜王之财宝/Ea｜争议", "宝具雨和Ea作为条件峰值，常态不按无限火力处理。"],
        defense: ["楼宇级", "街区级｜铠甲/宝具防护", "从者灵基和装备强，傲慢时会降低实战防护。"],
        movement: ["音速", "超音速｜从者机动/飞行宝具", "高速从者行动和载具宝具。"],
        reaction: ["音速", "超音速｜从者战/宝具应对", "反应强但受傲慢和轻敌影响。"],
        vitality: ["楼宇级生命阈值", "街区级生命阈值｜从者灵基/装备", "灵基承伤高，但并非不可杀。"],
        healing: ["中速自愈｜灵体/供魔", "快速自愈｜供魔充足", "恢复依赖供魔和灵基状态。"],
        energy: ["楼宇级能量", "街区级能量｜王之财宝/Ea", "宝库资源极强，但主档仍按FZ表现保守。"],
        energyRegen: ["中速回能", "快速回能｜供魔/宝库资源", "供魔与宝库调用支撑续航。"]
      }),
    notes: notes({
        penetration: "王之财宝偏多宝具压制和穿透，Ea作为高争议峰值特殊说明。攻击速度：吉尔伽美什先展开王之财宝门扉，射出的宝具离门后各自飞行，齐射受门扉展开与发射节奏影响；Ea另有取出和解放过程。",
        resistance: "装备和灵基强，但傲慢、慢热和不愿认真会制造漏洞。",
        sensing: "对宝具、英灵和战场局势判断强，但非全知。",
        tactics: "经验和资源压制极强，实战常受性格影响。",
        special: "王之财宝、Ea、天之锁、飞行宝具、英雄王权威。",
        weakness: "傲慢、轻敌、娱乐心态和御主关系会影响发挥。",
        setting: "按第四次圣杯战争Archer记录，和Fate/stay night第五次版本分开。",
        basis: "worldbook只用于抽取吉尔伽美什FZ姓名；定级依据官方角色入口与TYPE-MOON Wiki资料入口，宝具峰值保守标争议。"
      })
  })]);
})();
