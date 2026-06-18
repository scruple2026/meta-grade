(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Grand Order"];

  if (!work) {
    throw new Error("Fate/Grand Order work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "gawain",
      name: "高文",
      en: "Gawain",
      ja: "ガウェイン",
      affiliation: "迦勒底召唤 / 圆桌骑士",
      grade: "Saber / 太阳骑士",
      appearances: ["Fate/Grand Order"],
      timelineStatus: "FGO 召唤灵基 / Saber",
      aliases: ["高文卿", "太阳骑士", "圆桌骑士", "Excalibur Galatine", "Gawain"],
      fandomSlug: "Gawain",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "TYPE-MOON Wiki: Gawain",
          url: "https://typemoon.fandom.com/wiki/Gawain",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对高文 Saber 灵基、圣者数字、Excalibur Galatine 和圆桌骑士定位。"
        }
      ],
      revisionNotes: [
        "从型月DLC worldbook 的高文 key/comment 补入；未采用 worldbook 正文描述。",
        "太阳条件下的圣者数字作为峰值标签，不写成全天候常态。"
      ],
      dimensions: dims({
        attack: ["楼级", "街区级｜Excalibur Galatine/圣者数字｜条件｜争议", "太阳条件和圣剑宝具提高爆发，缺少大范围破坏证据时保守到街区级。"],
        defense: ["楼级", "街区级｜圣者数字/灵基", "圆桌骑士灵基和太阳加成提高承伤。"],
        movement: ["音速", "超音速｜从者机动/骑士武艺", "Saber 从者机动和近战突进。"],
        reaction: ["音速", "超音速｜从者反应/骑士武艺", "圆桌骑士级反应和剑术应对。"],
        vitality: ["楼级生命阈值", "街区级生命阈值｜灵基/圣者数字", "生命体量受灵基和太阳条件加成，但不是无限续战。"],
        healing: ["中速自愈｜灵基/供魔", "快速自愈｜供魔/太阳条件", "恢复依赖灵基和供魔，太阳加成按条件处理。"],
        energy: ["楼级能量", "街区级能量｜圣剑宝具/太阳加成", "圣剑和太阳加成提高资源峰值。"],
        energyRegen: ["中速回能", "快速回能｜供魔/太阳条件", "供魔和条件加成支撑高强度战斗。"]
      }),
      notes: notes({
        penetration: "圣剑 Galatine 和太阳加成提供高爆发与火焰/日轮属性，但范围和耦合仍需按表现判断。",
        resistance: "从者灵基、骑士武艺和圣者数字条件下防御较强。",
        sensing: "从者感知与骑士战斗经验辅助对敌。",
        tactics: "正面战斗稳定，擅长以高压剑术和太阳条件压制敌人。",
        special: "Saber 灵基、圆桌骑士、圣者数字、Excalibur Galatine。",
        weakness: "峰值依赖太阳/时间条件；夜间或条件不满足时面板下降。",
        setting: "按 FGO Saber 高文召唤灵基记录。",
        basis: "worldbook只用于抽取高文姓名；定级依据公开角色资料入口和 FGO Saber 灵基，太阳加成只作条件峰值。"
      })
    })
  ]);
})();
