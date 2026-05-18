(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["海贼王"];

  if (!work) {
    throw new Error("海贼王 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "kaido",
      name: "凯多",
      en: "Kaido",
      ja: "カイドウ",
      affiliation: "百兽海贼团",
      grade: "四皇 / 鱼鱼果实幻兽种",
      appearances: ["和之国篇"],
      timelineStatus: "和之国篇 / 龙人形态与焰云",
      aliases: ["百兽凯多", "最强生物", "青龙"],
      fandomSlug: "Kaidou",
      confidence: "review",
      evidenceType: ["原作表现", "官方入口", "跨界参考"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "source",
          scope: "跨界战力参考",
          label: "VS Battles Wiki：Kaido",
          url: "https://vsbattles.fandom.com/wiki/Kaido",
          lang: "en",
          authority: "cross-reference",
          medium: "cross-wiki",
          ratingEvidence: true,
          claim: "用于复核凯多四皇级、青龙形态、霸气和焰云相关跨界口径；本站不把称号直接折算为国家级。"
        },
        {
          type: "official",
          scope: "日文官方作品入口",
          label: "少年ジャンプ官方《ONE PIECE》作品页",
          url: "https://www.shonenjump.com/j/rensai/onepiece.html",
          lang: "ja",
          authority: "official",
          medium: "official-site",
          ratingEvidence: false,
          claim: "作为日文官方作品入口保留；凯多具体量级仍需原作卷话补证。"
        }
      ],
      defaultTimelineKey: "wano-flame-dragon",
      timelinePanels: [
        {
          key: "wano-dragon-hybrid",
          label: "和之国 / 青龙与龙人形态",
          status: "青龙、龙人形态、霸王色缠绕",
          dimensions: dims({
            attack: ["街区级", "城市级｜青龙/霸气｜争议", "龙形态热息、雷鸣八卦和霸气峰值很高，但不按称号抬到国家级。"],
            defense: ["街区级", "城市级｜幻兽种/霸气｜争议", "幻兽种体质、鳞甲和霸气提供高承伤。"],
            movement: ["超音速", "高超音速｜争议", "四皇级近战速度很高。"],
            reaction: ["超音速", "高超音速｜见闻色/战斗经验｜争议", "可应对和之国顶级战场。"],
            vitality: ["街区级生命阈值", "城市级生命阈值｜幻兽种｜争议", "极端承伤和动物系生命力是核心。"],
            healing: ["缓慢自愈", "快速自愈｜动物系恢复｜争议", "恢复力强但不是即刻再生。"],
            energy: ["街区级能量", "城市级能量｜霸气/果实｜争议", "果实与霸气消耗巨大。"],
            energyRegen: ["快速回能", "快速回能｜动物系体力", "续航极强但非无限。"]
          }),
          notes: "不计入最终升龙火焰八卦峰值。"
        },
        {
          key: "wano-flame-dragon",
          label: "和之国终盘 / 焰云与火龙大炬",
          status: "龙人形态、焰云、升龙火焰八卦",
          dimensions: dims({
            attack: ["街区级", "城市级｜升龙火焰八卦｜争议", "终盘峰值巨大，但按本站海贼尺度保守停留在城市级争议。"],
            defense: ["街区级", "城市级｜幻兽种/霸气｜争议", "承伤极强，防御来自幻兽种体质、霸气和鳞甲。"],
            movement: ["超音速", "高超音速｜争议", "近战和空中机动速度高。"],
            reaction: ["超音速", "高超音速｜见闻色/战斗经验｜争议", "与五档路飞持续交锋。"],
            vitality: ["街区级生命阈值", "城市级生命阈值｜幻兽种｜争议", "极高生命体量和长战续航。"],
            healing: ["缓慢自愈", "快速自愈｜动物系恢复｜争议", "动物系恢复和体力支撑长战。"],
            energy: ["街区级能量", "城市级能量｜霸气/果实｜争议", "霸气、焰云和果实能力持续消耗。"],
            energyRegen: ["快速回能", "快速回能｜动物系体力", "续航极强但终盘会耗竭。"]
          }),
          notes: "当前主面板版本。"
        }
      ],
      dimensions: dims({
        attack: ["街区级", "城市级｜升龙火焰八卦｜争议", "终盘峰值巨大，但按本站海贼尺度保守停留在城市级争议。"],
        defense: ["街区级", "城市级｜幻兽种/霸气｜争议", "承伤极强，防御来自幻兽种体质、霸气和鳞甲。"],
        movement: ["超音速", "高超音速｜争议", "近战和空中机动速度高。"],
        reaction: ["超音速", "高超音速｜见闻色/战斗经验｜争议", "与五档路飞持续交锋。"],
        vitality: ["街区级生命阈值", "城市级生命阈值｜幻兽种｜争议", "极高生命体量和长战续航。"],
        healing: ["缓慢自愈", "快速自愈｜动物系恢复｜争议", "动物系恢复和体力支撑长战。"],
        energy: ["街区级能量", "城市级能量｜霸气/果实｜争议", "霸气、焰云和果实能力持续消耗。"],
        energyRegen: ["快速回能", "快速回能｜动物系体力", "续航极强但终盘会耗竭。"]
      }),
      notes: notes({
        penetration: "霸王色缠绕、雷鸣八卦和热息具备强单体/范围杀伤；称号“最强生物”不直接换算为更高破坏级。",
        resistance: "幻兽种体质、鳞甲和霸气抗打极强；海楼石、消耗战、内部破坏和高阶霸气仍可威胁。",
        sensing: "见闻色、顶级霸气和丰富战斗经验支撑四皇级近战预判；巨体与醉态会改变风险暴露方式。",
        tactics: "偏正面压制但经验极多，能按敌人强度切换人兽形、焰云和霸王色缠绕；自负与消耗战会给强敌成长窗口。",
        special: "鱼鱼果实幻兽种青龙形态、热息、焰云、霸王色缠绕、酒龙八卦、升龙火焰八卦。",
        weakness: "高端形态与焰云维持会消耗体力；巨体目标也更易被集火。",
        setting: "按和之国终盘凯多记录，不把称号或传闻直接上调到国家级。",
        basis: "依据凯多在和之国对赤鞘、超新星、大和和五档路飞战中的攻击、防御、续航和焰云表现定级。"
      })
    })
  ]);
})();
