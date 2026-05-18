(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["海贼王"];

  if (!work) {
    throw new Error("海贼王 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "marshall-d-teech",
      name: "马歇尔·D·蒂奇",
      en: "Marshall D. Teach",
      ja: "マーシャル・D・ティーチ",
      affiliation: "黑胡子海贼团",
      grade: "四皇 / 黑暗果实与震震果实",
      appearances: ["正篇"],
      timelineStatus: "顶上战争后 / 双果实",
      aliases: [],
      fandomSlug: "Marshall_D._Teach",
      evidenceLinks: [
        {
          type: "source",
          scope: "跨界战力参考",
          label: "VS Battles Wiki：Blackbeard（One Piece）",
          url: "https://vsbattles.fandom.com/wiki/Blackbeard_%28One_Piece%29",
          lang: "en",
          authority: "cross-reference",
          medium: "cross-wiki",
          ratingEvidence: true,
          claim: "用于复核黑胡子双果实、震震果实和暗暗果实的跨界量级口径。"
        },
        {
          type: "setting",
          scope: "日文官方角色卡",
          label: "ONE PIECE.com：VIVRECARD～ONE PIECE図鑑～ LINE UP",
          citation: "ONE PIECE.com「VIVRECARD～ONE PIECE図鑑～ LINE UP」公式ラインナップ（0274 マーシャル・Ｄ・ティーチ）。",
          lang: "ja",
          authority: "official",
          medium: "databook",
          ratingEvidence: true,
          claim: "用于核对马歇尔·D·蒂奇在 VIVRE CARD 官方角色图鉴中的收录和角色资料入口；震震果实峰值仍以原作卷册与争议换算为准。"
        },
        {
          type: "setting",
          scope: "日文官方设定书",
          label: "集英社：ONE PIECE BLUE DEEP CHARACTERS WORLD",
          url: "https://books.shueisha.co.jp/items/contents_amp.html?isbn=978-4-08-870445-6",
          lang: "ja",
          authority: "official",
          medium: "databook",
          ratingEvidence: true,
          claim: "用于核对顶上战争前后角色大名鉴和新世界相关资料；不把四皇地位直接换算为国家级。"
        },
        {
          type: "chapter",
          scope: "日文原作卷册",
          label: "集英社：ONE PIECE 59",
          url: "https://books.shueisha.co.jp/items/contents_amp.html?isbn=978-4-08-870083-0",
          lang: "ja",
          authority: "primary",
          medium: "manga",
          ratingEvidence: true,
          claim: "用于核对顶上战争终盘和黑胡子取得震震果实相关阶段；国家级峰值仍按震震果实争议输出标注。"
        },
        {
          type: "wiki",
          scope: "角色页入口",
          label: "One Piece Wiki：Marshall D. Teach",
          url: "https://onepiece.fandom.com/wiki/Marshall_D._Teach",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对黑胡子角色资料、果实能力和主要战斗入口。"
        }
      ],
      dimensions: dims({
        attack: ["城市级", "国家级｜震震果实｜争议", "震震果实具备大范围地震/海啸级表现，国家级作为争议峰值。"],
        defense: ["街区级", "城市级｜异质身体｜争议", "承伤高但痛觉加倍，防御不是绝对。"],
        movement: ["超音速", "高超音速｜争议", "四皇级战斗速度保守高端。"],
        reaction: ["超音速", "高超音速｜争议", "可参与顶级海贼战斗。"],
        vitality: ["城市级生命阈值｜争议", "城市级生命阈值｜异质身体｜争议", "身体结构特殊且承伤极强。"],
        healing: ["无自愈", "缓慢自愈", "没有稳定再生表现。"],
        energy: ["城市级能量", "国家级能量｜震震果实｜争议", "果实能力总量高，单次与范围需分开。"],
        energyRegen: ["快速回能", "快速回能｜果实能力", "能力可连续使用但会消耗体力。"]
      }),
      notes: notes({
        penetration: "震震果实提供地震、冲击波和海啸级大范围破坏，暗暗果实可吸引能力者并在接触中压制恶魔果实能力；双果实组合既能正面破坏也能绕过能力防御，但国家级峰值仅按争议标签处理。",
        resistance: "黑胡子身体异常且承伤极强，能在重创后继续战斗；暗暗果实会加倍痛觉，缺少元素化规避和高速再生，面对高穿透斩击、毒、封印或被集火时并非安全。",
        sensing: "四皇级霸气和黑暗果实引力能帮助锁定能力者，但感知表现不以未来视见长；接触窗口仍需制造。",
        tactics: "长期谋划和能力夺取策略强，善于用暗暗果实制造能力无效化窗口再接震震输出；痛觉负担和高速远程会限制计划。",
        special: "黑暗果实、震震果实、能力吸引/无效化、四皇级霸气。",
        weakness: "能力无效化需要接触或吸引窗口，暗暗果实痛觉负担会放大受伤代价；双果实大范围输出消耗高，面对高速远程、非果实权能或情报克制时优势下降。",
        setting: "按顶上战争后取得震震果实的双果实版本记录；四皇地位和震震果实传闻不直接转成稳定国家级常态。",
        basis: "依据黑胡子获得双果实后在顶上战争及后续四皇地位相关表现定级。"
      })
    })
  ]);
})();
