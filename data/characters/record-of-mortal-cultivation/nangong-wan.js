(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["凡人修仙传"];

  if (!work) {
    throw new Error("凡人修仙传 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "nangong-wan",
      name: "南宫婉",
      en: "Nangong Wan",
      ja: "",
      affiliation: "掩月宗 / 韩立道侣",
      grade: "女主角之一 / 修仙者",
      appearances: ["正篇", "动画"],
      timelineStatus: "正篇 / 与韩立相关主线",
      aliases: ["南宫婉儿"],
      fandomSlug: "",
      confidence: "review",
      evidenceType: ["中文网文资料入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "萌娘百科：韩立",
          url: "https://zh.moegirl.org.cn/%E9%9F%A9%E7%AB%8B",
          lang: "zh",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对南宫婉与韩立的角色关系；不作为南宫婉具体战力证据。"
        },
        {
          type: "wiki",
          scope: "作品资料入口",
          label: "萌娘百科：《凡人修仙传》",
          url: "https://zh.moegirl.org.cn/%E5%87%A1%E4%BA%BA%E4%BF%AE%E4%BB%99%E4%BC%A0",
          lang: "zh",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对《凡人修仙传》作品和动画CAST中南宫婉出场；不作为量级证据。"
        }
      ],
      revisionNotes: ["从《道友先上我断后》worldbook 的详细人物:南宫婉 key/comment 补入；未采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["无资料", "无资料", "公开入口不足以换算南宫婉具体攻击规模，暂不强行定级。"],
        defense: ["无资料", "无资料", "缺少可直接映射防御量级的公开入口证据。"],
        movement: ["无资料", "无资料", "缺少可换算遁速或战斗机动的公开入口证据。"],
        reaction: ["无资料", "无资料", "缺少可换算反应速度的公开入口证据。"],
        vitality: ["无资料", "无资料", "缺少可换算生命体量的公开入口证据。"],
        healing: ["无资料", "无资料", "缺少可换算自愈或恢复速度的公开入口证据。"],
        energy: ["无资料", "无资料", "修仙者法力池需要原文阶段证据，当前不估算。"],
        energyRegen: ["无资料", "无资料", "缺少可量化回能机制资料。"]
      }),
      notes: notes({
        penetration: "资料入口只足以确认角色关系和出场；具体功法、法宝和攻击性质待原文补证。攻击速度：现有资料未确认具体功法和法宝的发动、飞行或命中方式，不能从修为身份推定近战或远程载体速度。",
        resistance: "防御、护身法宝和境界阶段未在当前公开入口中充分展开，暂不定级。",
        sensing: "神识和修仙者索敌能力需后续原文或资料页补证。",
        tactics: "缺少可用于跨作品面板的战斗策略资料，暂记为待补。",
        special: "修仙者身份、与韩立主线关系；具体功法和法宝后续补证。",
        weakness: "当前条目是低证据入口面板，不能拿来代表南宫婉完整战力。",
        setting: "按《凡人修仙传》正篇南宫婉记录；不同修为阶段后续应拆时间线。",
        basis: "worldbook只用于抽取南宫婉姓名；定级依据公开作品/角色入口，战力维度因证据不足保留无资料。"
      })
    })
  ]);
})();
