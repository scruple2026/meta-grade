(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["灵能百分百"];

  if (!work) {
    throw new Error("灵能百分百 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "shigeo-kageyama",
      name: "影山茂夫",
      en: "Shigeo Kageyama",
      ja: "影山茂夫",
      affiliation: "盐中学 / 灵能商谈所",
      grade: "主角 / 强大超能力者",
      appearances: ["正篇", "爪世界支配篇"],
      timelineStatus: "爪篇后 / 100% 与 ???% 风险",
      aliases: ["茂夫", "Mob", "モブ", "影山茂夫"],
      fandomSlug: "Shigeo_Kageyama",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      revisionNotes: ["从灵能百分百 worldbook 名字池补入；???% 作为不可控峰值。"],
      dimensions: dims({
        attack: ["楼宇级", "街区级｜100%/???%｜不可控", "念动力可大范围抛掷、压碎和破坏建筑群局部；???% 标不可控。"],
        defense: ["楼宇级", "街区级｜念动力屏障", "屏障和念动力抵消大幅提高防御。"],
        movement: ["亚音速", "超音速｜念动力机动｜争议", "可借念动力高速移动和飞行，具体换算保守。"],
        reaction: ["亚音速", "超音速｜感知/屏障", "可在高压灵能力战斗中快速展开防御。"],
        vitality: ["强化凡体", "街区级生命阈值｜屏障保护", "本体是少年肉身，生命阈值主要来自屏障和念动力防护。"],
        healing: ["无自愈", "缓慢自愈｜超能力辅助", "没有稳定自愈体系。"],
        energy: ["楼宇级能量", "街区级能量｜100%/???%", "超能力储量极高，但情绪和状态决定输出。"],
        energyRegen: ["快速回能", "快速回能｜情绪/恢复", "恢复力强但不是无限。"]
      }),
      notes: notes({
        penetration: "念动力可压碎、抛掷、束缚、反弹和大范围清场；???% 是失控峰值，不视为理智常态。攻击速度：茂夫的念动力从锁定目标到压碎、束缚或抛掷并非同一过程，被抛物体的移动也不等于茂夫本体出手速度。",
        resistance: "念动力屏障能挡住大量超能力与物理打击，本体肉身仍脆弱，精神状态会影响防御稳定性。",
        sensing: "可感知灵、恶意和超能力波动，情绪爆发时范围与强度提升。",
        tactics: "茂夫本性克制，通常避免伤人；真正战术收益常来自灵幻引导和自控能力。",
        special: "念动力、灵体感知、屏障、吸收/释放超能力、100% 情绪爆发、???%。",
        weakness: "情绪抑制、保护他人和自我约束会限制输出；???% 不可控，不能当作稳定战术选项。",
        setting: "按爪篇后成熟茂夫记录，???% 标为不可控峰值。",
        basis: "依据茂夫在除灵、爪组织和铃木统一郎相关战斗中的念动力、屏障和情绪爆发表现定级。"
      })
    })
  ]);
})();
