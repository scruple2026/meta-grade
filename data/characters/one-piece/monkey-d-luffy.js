(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["海贼王"];

  if (!work) {
    throw new Error("海贼王 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "monkey-d-luffy",
      name: "蒙奇·D·路飞",
      en: "Monkey D. Luffy",
      ja: "モンキー・D・ルフィ",
      affiliation: "草帽一伙",
      grade: "船长 / 尼卡果实觉醒",
      appearances: ["正篇"],
      timelineStatus: "和之国后 / 五档觉醒",
      aliases: [],
      fandomSlug: "Monkey_D._Luffy",
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
          claim: "作为日文官方作品入口保留；霸气/果实高风险量级仍需原作卷话补证。"
        }
      ],
      defaultTimelineKey: "wano-gear-five",
      timelinePanels: [
        {
          key: "enies-lobby",
          label: "司法岛后 / 二档三档",
          status: "二档、三档成型",
          dimensions: dims({
            attack: ["楼级", "街区级｜二档/三档", "橡胶体术和巨大化打击显著提升。"],
            defense: ["楼级", "街区级｜橡胶体质", "承伤强，但霸气体系尚未成熟。"],
            movement: ["超音速", "超音速｜二档", "二档以短时高速为核心。"],
            reaction: ["亚音速", "超音速｜二档", "近战反应随二档提升。"],
            vitality: ["精锐韧体", "街区级生命阈值", "高意志和橡胶体质支撑续战。"],
            healing: ["常规自愈", "常规自愈｜进食/休息", "无稳定再生。"],
            energy: ["楼级能量", "街区级能量｜二档/三档", "爆发消耗体力。"],
            energyRegen: ["快速回能", "快速回能｜进食恢复", "恢复依赖进食和休息。"]
          }),
          notes: "不计入武装色、见闻色未来视和觉醒。"
        },
        {
          key: "dressrosa-wci",
          label: "德雷斯罗萨至蛋糕岛 / 四档",
          status: "四档与高级霸气前夜",
          dimensions: dims({
            attack: ["街区级", "城市级｜四档｜争议", "四档可对大型强敌造成高端破坏。"],
            defense: ["街区级", "城市级｜四档/武装色｜争议", "霸气和弹性防御结合。"],
            movement: ["超音速", "高超音速｜四档｜争议", "四档机动大幅提升。"],
            reaction: ["超音速", "高超音速｜见闻色｜争议", "见闻色提升预判和反应。"],
            vitality: ["街区级生命阈值", "城市级生命阈值｜争议", "极限承伤和续战能力很高。"],
            healing: ["常规自愈", "快速自愈｜进食恢复｜争议", "恢复依赖外部补给。"],
            energy: ["街区级能量", "城市级能量｜四档｜争议", "霸气消耗限制持续时间。"],
            energyRegen: ["快速回能", "快速回能｜进食恢复", "四档后有明显空窗。"]
          }),
          notes: "五档觉醒前版本。"
        },
        {
          key: "wano-gear-five",
          label: "和之国后 / 五档觉醒",
          status: "尼卡果实觉醒与高级霸气",
          dimensions: dims({
            attack: ["街区级", "城市级｜五档｜霸气｜争议", "五档和高级霸气可对大型目标造成巨大破坏，国家级以上暂不使用。"],
            defense: ["街区级", "城市级｜武装色/五档｜争议", "橡胶体质、霸气和觉醒提供强承伤。"],
            movement: ["超音速", "高超音速｜四档/五档｜争议", "高端速度极快，但不按光速。"],
            reaction: ["超音速", "高超音速｜见闻色预知｜争议", "见闻色未来视属于预判增强。"],
            vitality: ["街区级生命阈值", "城市级生命阈值｜五档｜争议", "极高意志和果实觉醒续战。"],
            healing: ["常规自愈", "快速自愈｜进食/五档恢复｜争议", "恢复依食物、休息和觉醒状态，不是稳定再生。"],
            energy: ["街区级能量", "城市级能量｜五档", "霸气和果实觉醒消耗巨大。"],
            energyRegen: ["快速回能", "快速回能｜进食恢复", "进食可快速恢复体力，仍有极限。"]
          }),
          notes: "当前主面板版本。"
        }
      ],
      dimensions: dims({
        attack: ["街区级", "城市级｜五档｜霸气｜争议", "五档和高级霸气可对大型目标造成巨大破坏，国家级以上暂不使用。"],
        defense: ["街区级", "城市级｜武装色/五档｜争议", "橡胶体质、霸气和觉醒提供强承伤。"],
        movement: ["超音速", "高超音速｜四档/五档｜争议", "高端速度极快，但不按光速。"],
        reaction: ["超音速", "高超音速｜见闻色预知｜争议", "见闻色未来视属于预判增强。"],
        vitality: ["街区级生命阈值", "城市级生命阈值｜五档｜争议", "极高意志和果实觉醒续战。"],
        healing: ["常规自愈", "快速自愈｜进食/五档恢复｜争议", "恢复依食物、休息和觉醒状态，不是稳定再生。"],
        energy: ["街区级能量", "城市级能量｜五档", "霸气和果实觉醒消耗巨大。"],
        energyRegen: ["快速回能", "快速回能｜进食恢复", "进食可快速恢复体力，仍有极限。"]
      }),
      notes: notes({
        penetration: "五档的巨大化、弹性改写式打击、霸王色缠绕和内部破坏型武装色能把钝击、压缩、反弹与霸气伤害叠加到单体目标；尼卡式自由变形属于命中方式和战术优势，不直接换算为更高破坏范围。",
        resistance: "橡胶体质、武装色、霸王色对冲和五档觉醒让路飞对钝击、冲击与常规肉搏有极强承受力；斩击、海水/海楼石、霸气耗尽、五档衰竭和精神/规则类控制仍需单独判断。",
        special: "橡胶/尼卡果实、二档到五档、武装色、见闻色未来视、霸王色缠绕。",
        weakness: "五档和高阶霸气消耗大，爆发后会出现体力空窗；果实能力仍受海水、海楼石和能力者通用限制影响，遇到高阶斩击或规则型能力不能只靠橡胶体质硬吃。",
        setting: "按和之国后五档觉醒版本记录；司法岛二档三档、德雷斯罗萨至蛋糕岛四档已拆入时间线，尼卡传说和解放叙事不直接转成天体级主面板。",
        basis: "依据路飞至和之国后期五档、霸气和与凯多战表现定级。"
      })
    })
  ]);
})();
