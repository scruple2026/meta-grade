(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["凡人修仙，谁能比我极阴更阴！"];

  if (!work) {
    throw new Error("凡人修仙，谁能比我极阴更阴！ work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "song-wen",
      name: "宋文",
      en: "Song Wen",
      ja: "",
      affiliation: "魔修 / 极阴语境",
      grade: "主角 / 修仙者",
      appearances: ["道友先上我断后", "凡人修仙，谁能比我极阴更阴！"],
      timelineStatus: "主线综合期 / 魔修语境",
      aliases: ["极阴", "Song Wen"],
      fandomSlug: "",
      confidence: "review",
      evidenceType: ["公开搜索入口", "worldbook姓名字段"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "source",
          scope: "公开搜索入口",
          label: "番茄小说搜索：凡人修仙，谁能比我极阴更阴！",
          url: "https://fanqienovel.com/search?keyword=%E5%87%A1%E4%BA%BA%E4%BF%AE%E4%BB%99%EF%BC%8C%E8%B0%81%E8%83%BD%E6%AF%94%E6%88%91%E6%9E%81%E9%98%B4%E6%9B%B4%E9%98%B4%EF%BC%81",
          lang: "zh",
          authority: "source",
          medium: "other",
          ratingEvidence: false,
          claim: "用于核对作品标题和公开网文入口；宋文具体境界与战斗表现待补可靠资料。"
        }
      ],
      revisionNotes: [
        "从《道友先上我断后》worldbook 的详细人物:宋文 key/comment 补入；未采用 worldbook 正文描述。",
        "当前公开来源不足，不用修仙题材、极阴关键词或 worldbook 关键词抬高主维度。"
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
        penetration: "具体术法、法宝、毒/阴属性杀伤范围待补可靠公开资料或章节依据。攻击速度：具体术法、法宝及毒或阴属性手段的发动与载体未补证，无法判断是近身、远程飞行还是条件生效。",
        resistance: "不能仅凭魔修或修仙主角身份推高防御。",
        sensing: "神识、探查和隐匿能力待补具体资料。",
        tactics: "具体战斗风格待补公开资料。",
        special: "极阴/魔修语境，具体功法和资源待补。",
        weakness: "公开资料入口有限，当前只做姓名和作品归属占位。",
        setting: "《道友先上我断后》worldbook key/comment 中出现宋文与极阴关键词；本条按公开作品线索占位。",
        basis: "worldbook只用于抽取宋文姓名；定级依据不足，暂不写具体破坏、速度或能量档。"
      })
    })
  ]);
})();
