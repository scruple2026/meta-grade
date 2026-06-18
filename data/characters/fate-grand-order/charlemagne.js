(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Grand Order"];

  if (!work) {
    throw new Error("Fate/Grand Order work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "charlemagne",
      name: "查理曼",
      en: "Charlemagne",
      ja: "シャルルマーニュ",
      affiliation: "迦勒底召唤 / 查理曼十二勇士",
      grade: "Saber / 圣骑士帝",
      appearances: ["Fate/Grand Order", "Fate/EXTELLA LINK"],
      timelineStatus: "FGO 召唤灵基 / Saber",
      aliases: ["查理", "圣骑士帝", "遍历的圣骑士", "Joyeuse", "Charlemagne"],
      fandomSlug: "Charlemagne",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "TYPE-MOON Wiki: Charlemagne",
          url: "https://typemoon.fandom.com/wiki/Charlemagne",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对查理曼、Saber 灵基、Joyeuse、Fate/EXTELLA LINK 与 FGO 登场范围。"
        }
      ],
      revisionNotes: [
        "从型月DLC worldbook 的查理曼 key/comment 补入；未采用 worldbook 正文描述。",
        "Karl der Große 等相关形态/概念不并入本条主面板。"
      ],
      dimensions: dims({
        attack: ["楼级", "街区级｜Joyeuse/宝具｜争议", "Saber 灵基与圣剑宝具提供高爆发，缺少大范围破坏证据时保守记录。"],
        defense: ["楼级", "街区级｜灵基/圣骑士武装", "圣骑士灵基和武装提高正面承伤。"],
        movement: ["音速", "超音速｜从者机动/骑士冲锋", "Saber 从者的高速近战机动。"],
        reaction: ["音速", "超音速｜从者反应/骑士武艺", "从者级反应和剑术适合高速交锋。"],
        vitality: ["楼级生命阈值", "街区级生命阈值｜灵基/圣骑士续战", "灵基与圣骑士武装提高生命阈值。"],
        healing: ["中速自愈｜灵基/供魔", "快速自愈｜供魔/战斗续行", "恢复依赖灵基和供魔。"],
        energy: ["楼级能量", "街区级能量｜Joyeuse/宝具", "宝具和圣骑士灵基提高能量峰值。"],
        energyRegen: ["中速回能", "快速回能｜供魔/宝具循环", "供魔支撑连续近战和宝具窗口。"]
      }),
      notes: notes({
        penetration: "Joyeuse 与圣骑士剑技偏集中爆发和近战穿透，不自动等同大范围歼灭。",
        resistance: "从者灵基和圣骑士武装提供防护；概念、精神和封印类仍需单独判断。",
        sensing: "从者感知和骑士战斗经验辅助识别威胁。",
        tactics: "擅长正面冲锋、鼓舞队伍和以高速剑技制造节奏优势。",
        special: "Saber 灵基、Joyeuse、圣骑士帝、查理曼十二勇士相关传承。",
        weakness: "部分高价值设定依赖 Fate/EXTELLA LINK 语境；Karl der Große 不并入本条。",
        setting: "按 FGO 召唤灵基与 Fate/EXTELLA LINK 公开角色资料综合记录。",
        basis: "worldbook只用于抽取查理曼姓名；定级依据公开角色资料入口和 Saber 灵基，传说称号不直接抬高主档。"
      })
    })
  ]);
})();
