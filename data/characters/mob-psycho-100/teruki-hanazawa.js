(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["灵能百分百"];

  if (!work) {
    throw new Error("灵能百分百 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "teruki-hanazawa",
      name: "花泽辉气",
      en: "Teruki Hanazawa",
      ja: "花沢輝気",
      affiliation: "黑醋中学",
      grade: "强力超能力者",
      appearances: ["正篇", "爪世界支配篇"],
      timelineStatus: "爪篇 / 成熟后",
      aliases: ["花泽", "Teru", "Teruki"],
      fandomSlug: "Teruki_Hanazawa",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["墙级", "楼级｜念动力", "念动力输出和控场强于普通灵能力者。"],
        defense: ["墙级", "楼级｜屏障", "屏障和念动力防御稳定。"],
        movement: ["亚音速", "音速｜念动力机动", "可飞行和高速机动。"],
        reaction: ["亚音速", "音速", "经验提升后可应对高阶超能力战。"],
        vitality: ["强化凡体", "精锐韧体｜屏障保护", "本体仍是少年，防御来自超能力。"],
        healing: ["无自愈", "缓慢自愈｜外部恢复", "无稳定自愈。"],
        energy: ["墙级能量", "楼级能量｜念动力", "储量高于一般超能力者。"],
        energyRegen: ["快速回能", "快速回能", "恢复较快但有上限。"]
      }),
      notes: notes({
        penetration: "念动力可抛掷、压缩、飞行冲撞和屏障反击。攻击速度：花泽发动念动力后，被抛掷物体、压缩作用和飞行冲撞各有不同命中过程；屏障反击还取决于受击触发，现有资料未给统一计时。",
        resistance: "屏障强于普通灵能力者，但会被茂夫和爪高层压制。",
        sensing: "超能力感知和实战经验较强，后期心态更稳定。",
        tactics: "从自负转向协同，能用机动、屏障和远程念动力支援队友。",
        special: "念动力、屏障、飞行、超能力压制。",
        weakness: "面对顶级超能力输出时资源差距明显；早期自负可被利用。",
        setting: "按爪篇成熟后的花泽辉气记录。",
        basis: "依据花泽与茂夫、觉醒者和爪组织相关战斗中的念动力、屏障和机动表现定级。"
      })
    })
  ]);
})();
