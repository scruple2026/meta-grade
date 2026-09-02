(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["东京喰种"];

  if (!work) {
    throw new Error("东京喰种 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "kishou-arima",
      name: "有马贵将",
      en: "Kishou Arima",
      ja: "有馬貴将",
      affiliation: "CCG",
      grade: "特等搜查官 / 白色死神",
      appearances: ["安定区篇", "V14"],
      timelineStatus: "安定区篇至 V14 / 特等搜查官",
      aliases: ["有马", "白色死神", "Arima"],
      fandomSlug: "Kishou_Arima",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["墙体级", "楼宇级｜库因克/鸣神/IXA", "高端库因克和极高技巧带来对喰种的强穿透。"],
        defense: ["墙体级", "楼宇级｜库因克防御/技量", "防御主要来自装备、预判和压制距离。"],
        movement: ["亚音速", "音速｜搜查官体术", "人类侧顶级机动。"],
        reaction: ["亚音速", "音速｜预判/技量", "能压制高端喰种和半赫者。"],
        vitality: ["强化凡体", "精锐韧体", "本体仍接近人类结构，依赖技术和装备避免重伤。"],
        healing: ["无自愈", "无自愈", "无自体再生。"],
        energy: ["砖块级能量", "楼宇级能量｜库因克电击/装备", "资源来自库因克与体力。"],
        energyRegen: ["无回能", "中速回能｜装备/体力", "库因克和体力需要维护恢复。"]
      }),
      notes: notes({
        penetration: "IXA、鸣神等库因克具备高速刺击、电击和对赫子破坏能力，对喰种有强克制。攻击速度：IXA刺击依赖本人近身出手，鸣神电击是库因克释放的独立载体；“高速刺击”不能给两者套同一速度档。",
        resistance: "靠技术、装备和预判避免受击，本体没有喰种再生；失去库因克或视力/身体状态下降会显著削弱。",
        sensing: "战场阅读、动作预判和对喰种习性的理解极强。",
        tactics: "极高单兵技巧和冷静判断，擅长压制对手节奏、切断赫子和利用库因克特性。",
        special: "库因克 IXA、鸣神、对喰种作战经验、白日庭背景。",
        weakness: "本体没有再生，依赖库因克和身体状态；面对大范围持续压制或装备损毁风险上升。",
        setting: "按安定区篇至 V14 的有马记录，不把称号直接换成超常破坏档。",
        basis: "依据有马作为 CCG 白色死神对高端喰种与金木的压制表现保守定级。"
      })
    })
  ]);
})();
