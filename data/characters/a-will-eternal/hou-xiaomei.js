(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["一念永恒"];

  if (!work) {
    throw new Error("一念永恒 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "hou-xiaomei",
      name: "侯小妹",
      en: "Hou Xiaomei",
      ja: "",
      affiliation: "一念永恒主线",
      grade: "主要配角",
      appearances: ["正篇", "动画"],
      timelineStatus: "正篇 / 白小纯相关主线",
      aliases: ["候小妹"],
      fandomSlug: "",
      confidence: "review",
      evidenceType: ["中文网文资料入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "作品资料入口",
          label: "萌娘百科：《一念永恒》",
          url: "https://zh.moegirl.org.cn/%E4%B8%80%E5%BF%B5%E6%B0%B8%E6%81%92",
          lang: "zh",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对侯小妹在《一念永恒》动画CAST/角色名单中出现；不作为具体战力证据。"
        }
      ],
      revisionNotes: ["从《道友先上我断后》worldbook 的详细人物:候小妹 key/comment 补入；未采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["无资料", "无资料", "公开入口不足以换算侯小妹具体攻击规模。"],
        defense: ["无资料", "无资料", "缺少可换算防御量级的公开入口证据。"],
        movement: ["无资料", "无资料", "缺少可换算移动速度的公开入口证据。"],
        reaction: ["无资料", "无资料", "缺少可换算反应速度的公开入口证据。"],
        vitality: ["无资料", "无资料", "缺少可换算生命体量的公开入口证据。"],
        healing: ["无资料", "无资料", "缺少恢复速度证据。"],
        energy: ["无资料", "无资料", "缺少可量化法力或能量池资料。"],
        energyRegen: ["无资料", "无资料", "缺少可量化回能机制资料。"]
      }),
      notes: notes({
        penetration: "当前只确认角色出场，攻击性质待原文或资料页补证。攻击速度：现有条目尚未确认侯小妹的具体兵器或术法，连是否存在超常出手都缺少可独立判断的材料。",
        resistance: "防御和保命机制待补证。",
        sensing: "感知/索敌能力待补证。",
        tactics: "战斗策略资料不足，暂记为待补。",
        special: "与白小纯相关主线角色；具体修为和能力待补证。",
        weakness: "当前条目为低证据入口面板，不代表完整战斗表现。",
        setting: "按《一念永恒》正篇侯小妹记录；不同修为阶段后续应拆时间线。",
        basis: "worldbook只用于抽取候小妹姓名；定级依据公开作品入口，战力维度因证据不足保留无资料。"
      })
    })
  ]);
})();
