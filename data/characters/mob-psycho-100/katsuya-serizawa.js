(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["灵能百分百"];

  if (!work) {
    throw new Error("灵能百分百 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "katsuya-serizawa",
      name: "芹泽克也",
      en: "Katsuya Serizawa",
      ja: "芹沢克也",
      affiliation: "爪 / 灵能商谈所",
      grade: "强力超能力者",
      appearances: ["爪世界支配篇", "后日谈"],
      timelineStatus: "爪篇 / 伞与念动力",
      aliases: ["芹泽", "Serizawa"],
      fandomSlug: "Katsuya_Serizawa",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["楼级", "街区级｜念动力/情绪爆发", "念动力输出强，可形成大范围压制。"],
        defense: ["楼级", "街区级｜屏障", "屏障防御强，常与伞作为心理支点配合。"],
        movement: ["亚音速", "音速｜念动力机动", "可用超能力移动和防御。"],
        reaction: ["亚音速", "音速", "可参与爪高层战斗。"],
        vitality: ["强化凡体", "街区级生命阈值｜屏障保护", "本体是成年人，生命阈值主要来自屏障。"],
        healing: ["无自愈", "缓慢自愈｜外部恢复", "无稳定自愈。"],
        energy: ["楼级能量", "街区级能量｜念动力", "储量高但心理状态影响发挥。"],
        energyRegen: ["快速回能", "快速回能", "可恢复灵能力但不无限。"]
      }),
      notes: notes({
        penetration: "念动力冲击、屏障和范围压制为主。",
        resistance: "屏障强，但心理支点和自信会影响稳定性。",
        sensing: "高灵能力感知和情绪敏感，后期更能控制输出。",
        tactics: "前期依赖统一郎指令，后期在灵幻团队中更适合防守与支援。",
        special: "强念动力、屏障、伞作为心理锚点。",
        weakness: "心理压力和自我否定会削弱发挥；缺少复杂战术经验。",
        setting: "按爪篇芹泽记录。",
        basis: "依据芹泽作为爪高层与茂夫阵营交战时的念动力和屏障表现定级。"
      })
    })
  ]);
})();
