(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "东京喰种";

  registerWorkSource(WORK, {
    slug: "tokyo-ghoul",
    originalLanguage: "ja",
    pageLabel: "Tokyo Ghoul Wiki 角色页",
    pageBase: "https://tokyoghoul.fandom.com/wiki/",
    pageLanguage: "en",
    canonicalLinks: [
      {
        type: "official",
        scope: "日文官方作品入口",
        label: "週刊ヤングジャンプ「東京喰種トーキョーグール」作品入口",
        url: "https://youngjump.jp/tokyoghoul/",
        lang: "ja",
        authority: "official",
        medium: "publisher",
        claim: "用于核对东京喰种日文原作/官方入口；角色量级仍按正篇表现保守处理。"
      }
    ],
    commonLinks: [
      {
        label: "Tokyo Ghoul Wiki 角色总表",
        url: "https://tokyoghoul.fandom.com/wiki/Category:Characters"
      }
    ],
    scaleNotes: {
      scope: "当前收录安定区篇和枭讨伐相关主要战斗角色：金木研、雾嶋董香、芳村功善、芳村爱特、有马贵将、亚门钢太朗、雾嶋绚都、四方莲示、古间圆儿、入见萱、笛口雏实、西尾锦、篠原幸纪、黑磐岩、铃屋什造、真户晓、丸手斋、法寺项介、神代利世。",
      versionPolicy: "半喰种、赫者、库因克装备、Arata 防具和后期龙状态应按时间线拆分；危险等级、搜查官等级与通缉等级不直接等同跨作品破坏档。",
      highRisk: ["赫者", "再生", "库因克", "危险等级", "龙状态"],
      conservativeNotes: "CCG 危险等级、白色死神等称号和赫子类型只作为作战性质，不自动提高攻击或速度主档。"
    },
    sourcePolicy: "角色页/作品页是入口来源；高争议峰值后续应补原作话数、卷册或设定书资料。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();
