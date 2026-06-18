(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["死神"];

  if (!work) {
    throw new Error("死神 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "byakuya-kuchiki",
      name: "朽木白哉",
      en: "Byakuya Kuchiki",
      ja: "朽木白哉",
      affiliation: "护廷十三队 / 朽木家",
      grade: "六番队队长 / 卍解",
      appearances: ["尸魂界篇", "正篇"],
      timelineStatus: "尸魂界篇 / 千本樱景严",
      aliases: ["白哉", "千本樱", "Byakuya"],
      fandomSlug: "Byakuya_Kuchiki",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      revisionNotes: [
        "从尸魂界篇 worldbook 名字池补入；主面板先按尸魂界篇队长级保守记录，后续千年血战可拆时间线。"
      ],
      dimensions: dims({
        attack: ["楼级", "街区级｜卍解/千本樱", "千本樱景严可形成大范围高速斩击，但不按后期队长成长直接抬档。"],
        defense: ["楼级", "街区级｜灵压/队长级防御", "队长级灵压与鬼道支撑承伤。"],
        movement: ["超音速", "高超音速｜瞬步｜争议", "瞬步和队长级机动突出。"],
        reaction: ["超音速", "高超音速｜瞬步/战斗经验｜争议", "可处理尸魂界篇高端近战与斩魄刀攻防。"],
        vitality: ["精锐韧体", "街区级生命阈值｜灵体", "灵体与队长级灵压提升生命阈值。"],
        healing: ["缓慢自愈", "中速自愈｜灵体恢复", "依赖治疗和灵体恢复，不是高速再生。"],
        energy: ["楼级能量", "街区级能量｜卍解", "卍解展开和持续控制消耗灵压。"],
        energyRegen: ["中速回能", "快速回能｜灵压恢复", "灵压可恢复但连续卍解不是无限。"]
      }),
      notes: notes({
        penetration: "千本樱以大量细刃包围、切割和压制为主，白帝剑等形态强化单点斩击；不是概念即死。",
        resistance: "队长级灵压、鬼道和瞬步规避提供防御，但本体仍可被穿刺、封锁卍解或规则能力威胁。",
        sensing: "依赖灵压感知、瞬步经验和贵族/队长级战斗素养，可快速判断旅祸级对手行动。",
        tactics: "战术冷静，擅长用距离、刃幕和鬼道限制对手行动；过度坚持规则和荣誉会影响早期判断。",
        special: "斩魄刀千本樱、卍解千本樱景严、瞬步、鬼道、队长级灵压。",
        weakness: "卍解需要展开空间和灵压维持；刃幕可被高速突入、范围防御或能力克制处理。",
        setting: "主面板按尸魂界篇白哉记录；千年血战后强化暂不并入本条峰值。",
        basis: "依据尸魂界篇对白一护、露琪亚处刑相关战斗中白哉的卍解、瞬步和队长级灵压表现定级。"
      })
    })
  ]);
})();
