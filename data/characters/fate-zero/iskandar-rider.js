(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Zero"];
  if (!work) throw new Error("Fate/Zero work metadata must load before character files.");

  registerCharacters([work.character({
    id: "iskandar-rider",
    name: "Rider（伊斯坎达尔）",
    en: "Iskandar",
    ja: "イスカンダル",
    aliases: ["伊斯坎达尔", "征服王", "Rider", "Alexander"],
    affiliation: "韦伯阵营 / Rider职阶",
    grade: "从者 / 征服王",
    appearances: ["第四次圣杯战争"],
    timelineStatus: "第四次圣杯战争",
    fandomSlug: "Iskandar",
    confidence: "review",
    evidenceType: ["官方入口", "角色页入口", "宝具峰值"],
    sourceQuality: "entry",
    evidenceLinks: [],
    revisionNotes: ["worldbook 仅用于抽取 Fate/Zero 角色姓名；定级依据公开官方/资料入口并保持保守。"],
    dimensions: dims({
        attack: ["楼宇级", "街区级｜神威车轮/王之军势｜争议", "常态近战和战车强，王之军势偏军团/固有结界机制。"],
        defense: ["楼宇级", "街区级｜战车/军势", "灵基和宝具阵势提高承伤，但非单体硬度无限。"],
        movement: ["音速", "超音速｜神威车轮", "战车提供高机动峰值。"],
        reaction: ["音速", "超音速｜从者战/王者经验", "从者级反应和战场统御。"],
        vitality: ["楼宇级生命阈值", "街区级生命阈值｜从者灵基/军势", "生命体量按本体灵基，军势另作特殊项。"],
        healing: ["中速自愈｜灵体/供魔", "快速自愈｜供魔充足", "恢复依赖供魔。"],
        energy: ["楼宇级能量", "街区级能量｜王之军势/战车", "宝具资源强但受御主与展开条件影响。"],
        energyRegen: ["中速回能", "快速回能｜供魔/宝具展开", "供魔状态影响持续展开。"]
      }),
    notes: notes({
        penetration: "神威车轮偏冲击和机动压制，王之军势是军团/固有结界，不等同单发爆破。攻击速度：神威车轮须先显现，随后由伊斯坎达尔驾车冲锋撞击；王之军势展开后由军团成员分别接近和攻击，不能算成一次车轮弹速。",
        resistance: "从者灵基强，战车和军势可改变战场，但本体仍可被高端宝具击败。",
        sensing: "王者经验和战场统御强，能快速判断士气和局势。",
        tactics: "统帅、鼓舞、正面突破和心理压制极强。",
        special: "神威车轮、王之军势、王者号令、从者灵基。",
        weakness: "御主供魔、正面王道作战倾向，以及对顶级宝具的硬拼风险。",
        setting: "按第四次圣杯战争Rider伊斯坎达尔记录。",
        basis: "worldbook只用于抽取伊斯坎达尔姓名；定级依据官方角色入口与TYPE-MOON Wiki资料入口，王之军势作为特殊军团峰值。"
      })
  })]);
})();
