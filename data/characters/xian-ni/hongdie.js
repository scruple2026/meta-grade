(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["仙逆"];

  if (!work) {
    throw new Error("仙逆 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "hongdie",
      name: "红蝶",
      en: "Hongdie",
      ja: "",
      affiliation: "朱雀星修真界",
      grade: "修士 / 主线早中期重要角色",
      appearances: ["道友先上我断后", "仙逆"],
      timelineStatus: "仙逆主线 / 朱雀星相关阶段",
      aliases: ["红蝶仙子", "Hong Die", "Hongdie"],
      fandomSlug: "",
      confidence: "review",
      evidenceType: ["作品入口", "worldbook姓名字段"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "作品资料入口",
          label: "萌娘百科：《仙逆》",
          url: "https://zh.moegirl.org.cn/%E4%BB%99%E9%80%86",
          lang: "zh",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对《仙逆》作品、王林主线和修真体系入口；红蝶具体战斗表现待补原文章节。"
        },
        {
          type: "official",
          scope: "正版作品页",
          label: "起点中文网：《仙逆》",
          url: "https://www.qidian.com/book/1264634/",
          lang: "zh",
          authority: "official",
          medium: "publisher",
          ratingEvidence: false,
          claim: "用于确认正版作品入口；不单独作为红蝶战力依据。"
        }
      ],
      revisionNotes: [
        "从《道友先上我断后》worldbook 的详细人物:红蝶 key/comment 补入；未采用 worldbook 正文描述。",
        "缺少稳定公开角色页时，不按王林终盘宇宙论给红蝶抬档。"
      ],
      dimensions: dims({
        attack: ["无资料", "无资料", "公开入口不足，暂不强行定级。"],
        defense: ["无资料", "无资料", "公开入口不足，暂不强行定级。"],
        movement: ["无资料", "无资料", "公开入口不足，暂不强行定级。"],
        reaction: ["无资料", "无资料", "公开入口不足，暂不强行定级。"],
        vitality: ["无资料", "无资料", "公开入口不足，暂不强行定级。"],
        healing: ["无资料", "无资料", "公开入口不足，暂不强行定级。"],
        energy: ["无资料", "无资料", "公开入口不足，暂不强行定级。"],
        energyRegen: ["无资料", "无资料", "公开入口不足，暂不强行定级。"]
      }),
      notes: notes({
        penetration: "具体术法、法宝和杀伤范围待补原文或可靠资料入口。",
        resistance: "不能仅凭修士身份或与王林主线相关性推高防御。",
        sensing: "修真神识和感知能力待补具体表现。",
        tactics: "角色定位和战斗决策待补原文依据。",
        special: "仙逆朱雀星相关修士语境；具体神通待补。",
        weakness: "当前缺少可读独立角色资料入口，所有主维度暂不强行定级。",
        setting: "《道友先上我断后》worldbook key/comment 中出现红蝶；本条只作为公开作品角色占位。",
        basis: "worldbook只用于抽取红蝶姓名；定级依据不足，暂以作品入口和正版入口作追溯来源，后续需补原文章节。"
      })
    })
  ]);
})();
