(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/stay night"];
  if (!work) throw new Error("Fate/stay night work metadata must load before character files.");

  registerCharacters([work.character({
    id: "medea-caster",
    name: "Caster（美狄亚）",
    en: "Medea",
    ja: "メディア",
    aliases: ["Caster", "美狄亚", "魔女"],
    affiliation: "Caster职阶 / 柳洞寺阵营",
    grade: "从者 / 神代魔术师",
    appearances: ["Fate", "Unlimited Blade Works", "Heaven's Feel"],
    timelineStatus: "第五次圣杯战争 / 柳洞寺阵地",
    fandomSlug: "Medea_(Caster)",
    confidence: "review",
    evidenceType: ["官方入口", "角色页入口", "阵地/宝具"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["房屋级", "街区级｜神代魔术/阵地｜争议", "魔术火力强，阵地内峰值显著提高。"],
      defense: ["墙级", "楼级｜结界/阵地", "本体防御低于战士从者，阵地结界很关键。"],
      movement: ["亚音速", "音速｜魔术飞行/转移", "机动依赖魔术。"],
      reaction: ["亚音速", "音速｜魔术战", "魔术战反应强。"],
      vitality: ["房屋级生命阈值", "楼级生命阈值｜阵地/供魔", "灵基承伤一般，靠阵地与魔术补足。"],
      healing: ["中速自愈｜灵体/供魔", "快速自愈｜阵地供魔", "阵地和供魔提高恢复。"],
      energy: ["楼级能量", "街区级能量｜柳洞寺阵地｜争议", "神代魔术和阵地魔力储备强。"],
      energyRegen: ["快速回能｜阵地", "快速回能｜阵地/供魔", "阵地内回能优势明显。"]
    }),
    notes: notes({
      penetration: "神代魔术和Rule Breaker偏术式干涉、契约破坏和结界压制。",
      resistance: "阵地防护强，本体被近身时风险高。",
      sensing: "柳洞寺阵地、使魔和魔术探查优秀。",
      tactics: "擅长阵地经营、契约夺取和魔术压制。",
      special: "神代魔术、Rule Breaker、柳洞寺阵地、契约夺取。",
      weakness: "近战和本体防御短板明显，阵地外优势下降。",
      setting: "按第五次圣杯战争Caster记录。",
      basis: "worldbook只用于抽取美狄亚姓名；定级依据官方入口与TYPE-MOON Wiki资料入口，阵地作为条件峰值。"
    })
  })]);
})();
