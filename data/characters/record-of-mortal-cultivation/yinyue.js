(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["凡人修仙传"];

  if (!work) {
    throw new Error("凡人修仙传 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "yinyue",
      name: "银月",
      en: "Yinyue",
      ja: "",
      affiliation: "韩立相关主线",
      grade: "主要配角 / 银月",
      appearances: ["正篇"],
      timelineStatus: "正篇 / 银月相关阶段",
      aliases: ["雪玲"],
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
          claim: "用于核对银月为韩立相关主要女性角色之一；不作为银月具体战力证据。"
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
          claim: "用于核对作品资料入口；具体身份和能力仍需后续原文补证。"
        }
      ],
      revisionNotes: ["从《道友先上我断后》worldbook 的详细人物:银月 key/comment 补入；未采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["无资料", "无资料", "公开入口不足以换算银月具体攻击规模，暂不强行定级。"],
        defense: ["无资料", "无资料", "缺少可直接映射防御量级的公开入口证据。"],
        movement: ["无资料", "无资料", "缺少可换算移动速度的公开入口证据。"],
        reaction: ["无资料", "无资料", "缺少可换算反应速度的公开入口证据。"],
        vitality: ["无资料", "无资料", "缺少可换算生命体量或存在形态的公开入口证据。"],
        healing: ["无资料", "无资料", "缺少恢复速度证据。"],
        energy: ["无资料", "无资料", "缺少可量化能量池资料。"],
        energyRegen: ["无资料", "无资料", "缺少可量化回能机制资料。"]
      }),
      notes: notes({
        penetration: "当前只记录姓名与作品归属，攻击性质待公开角色页或原文卷章补证。攻击速度：当前连银月采用何种兵器、术法或载体都未补证，缺少判断前摇、传播和连击频率的资料。",
        resistance: "存在形态、防御和保命机制待补证。",
        sensing: "感知/索敌能力待补证。",
        tactics: "战斗策略资料不足，暂记为待补。",
        special: "银月/雪玲相关身份待后续公开资料和原文补证。",
        weakness: "当前条目为低证据入口面板，不代表完整战斗表现。",
        setting: "按《凡人修仙传》正篇银月记录；不同形态或阶段后续应拆时间线。",
        basis: "worldbook只用于抽取银月/雪玲姓名；定级依据公开作品/角色入口，战力维度因证据不足保留无资料。"
      })
    })
  ]);
})();
