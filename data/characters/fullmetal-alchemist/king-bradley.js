(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["钢之炼金术师"];

  if (!work) {
    throw new Error("钢之炼金术师 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "king-bradley",
      name: "金·布拉德雷",
      en: "King Bradley",
      ja: "キング・ブラッドレイ",
      affiliation: "人造人 / 亚美斯多利斯总统",
      grade: "人造人「愤怒」",
      appearances: ["正篇"],
      timelineStatus: "",
      aliases: ["拉斯", "Wrath", "大总统"],
      fandomSlug: "King_Bradley",
      dimensions: dims({
        attack: ["墙级", "房屋级｜剑术连斩", "以高速剑术和精准切割为主，范围破坏有限。"],
        defense: ["凡人级", "墙级｜格挡", "本体耐久高于常人但不具备多数人造人的再生，主要靠闪避和格挡。"],
        movement: ["亚音速", "亚音速｜短距突进", "近战爆发、突进和身法极强，但不按音速定级。"],
        reaction: ["亚音速", "亚音速｜最强之眼", "最强之眼提供洞察与预判，不直接等于更高物理速度。"],
        vitality: ["精锐韧体", "精锐韧体", "可在重伤、老化和多次围攻下继续作战，但不会快速再生。"],
        healing: ["无自愈", "无自愈", "没有常规人造人的快速再生。"],
        energy: ["砖级能量｜人造人体能", "墙级能量｜体能", "无传统能量池，但能量总量包含体力、肌耐力和连续作战持久度；大总统稳定体能高于普通凡人。"],
        energyRegen: ["中速回能", "中速回能", "无超常回能，依赖休息恢复体力。"]
      }),
      notes: notes({
        penetration: "剑术可精准切开武器、炮弹和人体要害，但不是大范围能量攻击。",
        resistance: "缺少再生，依赖技术避免受击；老化和伤势会叠加。",
        sensing: "最强之眼提供极高动态洞察、轨迹判断和弱点识别；需要视野，烟雾、遮蔽和多方向压制会降低价值。",
        tactics: "总统级经验和剑术判断极强，擅长在极短窗口内选择要害、格挡和突进路线；年龄、体力和无再生限制长战。",
        special: "最强之眼、超高剑术、战场预判、总统级战术经验。",
        weakness: "无快速再生，体力和年龄限制明显；视野被遮蔽或多方向压制会削弱优势。",
        setting: "按正篇大总统身份暴露后的战斗状态记录。",
        basis: "依据布拉德雷对抗古利德、斯卡、军队和多名战士时的剑术、反应和承伤表现定级。"
      })
    })
  ]);
})();
