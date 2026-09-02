(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Grand Order"];

  if (!work) {
    throw new Error("Fate/Grand Order work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "mash-kyrielight",
      name: "玛修·基列莱特",
      en: "Mash Kyrielight",
      ja: "マシュ・キリエライト",
      affiliation: "迦勒底",
      grade: "亚从者 / Shielder",
      appearances: ["Fate/Grand Order"],
      timelineStatus: "迦勒底主线 / Shielder灵基",
      aliases: ["玛修", "Mash", "Mashu", "Shielder", "盾娘", "基列莱特"],
      fandomSlug: "Mash_Kyrielight",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "TYPE-MOON Wiki: Mash Kyrielight",
          url: "https://typemoon.fandom.com/wiki/Mash_Kyrielight",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对玛修、亚从者、Shielder职阶、盾牌和防御宝具定位。"
        }
      ],
      revisionNotes: ["从型月/FGO worldbook 的英灵:玛修基列莱特 key/comment 补入；未采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["楼宇级", "街区级｜盾击/灵基强化", "以盾击和近战支援为主，攻击不是主要强项。"],
        defense: ["楼宇级", "街区级｜防御宝具/盾", "Shielder灵基和宝具偏高防御与队友保护。"],
        movement: ["音速", "超音速｜从者机动", "具备从者级近战机动。"],
        reaction: ["音速", "超音速｜防御反应", "擅长用盾应对高速攻击与保护御主。"],
        vitality: ["楼宇级生命阈值", "街区级生命阈值｜亚从者灵基", "亚从者灵基显著高于普通人。"],
        healing: ["中速自愈｜灵基/医疗支援", "快速自愈｜迦勒底支援", "恢复依赖灵基、御主和迦勒底支援。"],
        energy: ["楼宇级能量", "街区级能量｜防御宝具", "魔力主要服务于防御宝具和护卫。"],
        energyRegen: ["中速回能", "快速回能｜御主/迦勒底支援", "供魔和迦勒底支援影响续航。"]
      }),
      notes: notes({
        penetration: "盾击和近战可压制普通敌人，但核心价值是防御与保护，不按大范围输出抬档。攻击速度：巨盾挥击与盾冲随玛修近身接战，防御宝具需展开阵地而非飞向目标；她没有以高速远程弹体为主的输出方式。",
        resistance: "盾、防御宝具和Shielder灵基提供强防护；概念攻击、精神干涉和剧情级敌人仍需单独判断。",
        sensing: "依靠从者感知、迦勒底通信和保护御主的战场观察。",
        tactics: "擅长站位、护卫、承伤和配合藤丸立香指挥。",
        special: "亚从者灵基、Shielder职阶、巨盾、防御宝具、御主护卫。",
        weakness: "输出偏弱，强依赖御主、迦勒底支援和防御站位。",
        setting: "按FGO主线Shielder玛修记录，不把所有后续外部支援写入常态。",
        basis: "worldbook只用于抽取玛修姓名；定级依据公开角色资料入口和Shielder/亚从者定位，宝具峰值保守记录。"
      })
    })
  ]);
})();
