(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["新世纪福音战士"];

  if (!work) {
    throw new Error("新世纪福音战士 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "rei-ayanami",
      name: "绫波丽",
      en: "Rei Ayanami",
      ja: "綾波レイ",
      affiliation: "NERV",
      grade: "第一适格者 / EVA零号机驾驶员",
      appearances: ["TV版", "The End of Evangelion"],
      timelineStatus: "旧剧场版前后 / 零号机驾驶员与Lilith关联",
      aliases: ["绫波", "Rei", "第一适格者"],
      fandomSlug: "Rei_Ayanami",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["凡人级", "城市级｜EVA零号机/自爆｜外部机体｜争议", "本体普通，峰值来自零号机和战术自爆。"],
        defense: ["凡人级", "街区级｜EVA零号机/AT力场｜外部机体", "战斗防御来自机体和AT力场。"],
        movement: ["凡人速", "亚音速｜EVA机动", "本体普通。"],
        reaction: ["凡人速", "亚音速｜同步/驾驶", "驾驶反应受同步和命令影响。"],
        vitality: ["凡人肉身", "街区级生命阈值｜EVA/替换体｜争议", "本体可被杀伤，替换体和Lilith关联属于特殊机制。"],
        healing: ["无自愈", "不适用｜替换体/特殊存在｜争议", "不是战斗中高速自愈。"],
        energy: ["凡人能量", "城市级能量｜N2/自爆/机体｜外部资源｜争议", "高峰来自机体、爆炸物和仪式关联。"],
        energyRegen: ["中速回能", "不适用｜替换体/外部机体", "无个人回能体系。"]
      }),
      notes: notes({
        penetration: "零号机作战、狙击支援和自爆属于外部机体/战术资源；本体无同档攻击。",
        resistance: "本体脆弱，EVA和AT力场提供战斗防护；替换体机制不是即时再生。",
        sensing: "同步感知、NERV支援和Lilith关联提供特殊信息，但不等同全知。",
        tactics: "执行命令冷静，常承担盾役、牺牲和关键仪式位置；自主战术表达较少。",
        special: "EVA同步、零号机、AT力场、Lilith关联、替换体和补完关联。",
        weakness: "主体身份与替换体依赖外部系统；本体可被普通伤害杀死。",
        setting: "按 TV/旧剧场版绫波丽记录，不把巨型Rei/Lilith仪式全部折算为个人常态面板。",
        basis: "依据绫波作为第一适格者驾驶零号机、参与对使徒战和旧剧场版Lilith关联表现定级。"
      })
    })
  ]);
})();
