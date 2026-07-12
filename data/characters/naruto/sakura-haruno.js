(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["火影忍者"];

  if (!work) {
    throw new Error("火影忍者 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "sakura-haruno",
      name: "春野樱",
      en: "Sakura Haruno",
      ja: "春野サクラ",
      affiliation: "木叶隐村",
      grade: "医疗忍者 / 百豪之术",
      appearances: ["正篇"],
      timelineStatus: "第四次忍界大战后期 / 百豪",
      aliases: [],
      fandomSlug: "Sakura_Haruno",
      evidenceLinks: [
        {
          type: "official",
          scope: "日文官方作品入口",
          label: "NARUTO OFFICIAL SITE：NARUTOとは",
          url: "https://naruto-official.com/about/",
          lang: "ja",
          authority: "official",
          medium: "official-site",
          ratingEvidence: false,
          claim: "用于核对官方作品概述和日文入口；六道/尾兽高端量级仍需原作卷话或设定书补证。"
        }
      ],
      defaultTimelineKey: "war-byakugo",
      timelinePanels: [
        {
          key: "kazekage-rescue",
          label: "风影夺还篇 / 怪力医疗忍者",
          status: "纲手训练后初期",
          dimensions: dims({
            attack: ["楼级", "楼级｜怪力", "查克拉强化拳已能造成显著地形破坏。"],
            defense: ["墙级", "墙级｜查克拉防护", "肉身仍较脆，依靠闪避和医疗知识。"],
            movement: ["亚音速", "亚音速｜忍者机动", "疾风传初期忍者机动。"],
            reaction: ["亚音速", "亚音速", "战术判断和医疗观察能力强。"],
            vitality: ["精锐韧体", "精锐韧体", "训练后承伤提高。"],
            healing: ["快速自愈", "快速自愈｜医疗忍术", "可处理伤势，但百豪尚未开放。"],
            energy: ["楼级能量", "楼级能量｜怪力", "怪力输出依赖查克拉控制。"],
            energyRegen: ["中速回能", "中速回能", "没有百豪储备释放。"]
          }),
          notes: "不计入第四次忍界大战的百豪之术。"
        },
        {
          key: "war-byakugo",
          label: "第四次忍界大战 / 百豪",
          status: "百豪之术开放",
          dimensions: dims({
            attack: ["楼级", "街区级｜怪力", "查克拉强化拳可造成大范围地形破坏。"],
            defense: ["墙级", "楼级｜百豪承伤", "肉身防御不等同再生，靠医疗忍术续战。"],
            movement: ["亚音速", "超音速｜忍者机动｜争议", "后期可参与高端战场，但不按顶级六道速度。"],
            reaction: ["亚音速", "超音速｜争议", "战斗经验和医疗判断强。"],
            vitality: ["精锐韧体", "楼级生命阈值｜百豪", "百豪提升重伤续战。"],
            healing: ["快速自愈", "极速自愈｜百豪之术", "可战斗中快速恢复明显伤势。"],
            energy: ["楼级能量", "街区级能量｜百豪储备", "百豪长期储存查克拉。"],
            energyRegen: ["中速回能", "快速回能｜百豪释放", "释放储备时可支撑爆发。"]
          }),
          notes: "当前主面板版本。"
        }
      ],
      dimensions: dims({
        attack: ["楼级", "街区级｜怪力", "查克拉强化拳可造成大范围地形破坏。"],
        defense: ["墙级", "楼级｜百豪承伤", "肉身防御不等同再生，靠医疗忍术续战。"],
        movement: ["亚音速", "超音速｜忍者机动｜争议", "后期可参与高端战场，但不按顶级六道速度。"],
        reaction: ["亚音速", "超音速｜争议", "战斗经验和医疗判断强。"],
        vitality: ["精锐韧体", "楼级生命阈值｜百豪", "百豪提升重伤续战。"],
        healing: ["快速自愈", "极速自愈｜百豪之术", "可战斗中快速恢复明显伤势。"],
        energy: ["楼级能量", "街区级能量｜百豪储备", "百豪长期储存查克拉。"],
        energyRegen: ["中速回能", "快速回能｜百豪释放", "释放储备时可支撑爆发。"]
      }),
      notes: notes({
        penetration: "查克拉怪力把精准控制的查克拉集中到拳脚，适合破坏地形、打碎大型目标和近身爆发；蛞蝓与医疗忍术偏支援，不把治疗能力换成攻击范围。攻击速度：小樱的怪力拳脚必须近身挥击并接触目标，地形破坏发生在命中之后；蛞蝓和医疗忍术属于支援，不参与出手计速。",
        resistance: "百豪之术和医疗忍术让小樱能在重伤中持续作战，蛞蝓可分担治疗与保护；肉身硬度本身仍低于再生表现，斩首、封印、查克拉封锁和远程规则能力仍危险。",
        sensing: "医疗忍者训练让她能读取伤势、查克拉消耗和战场风险，百豪状态提高持续应对；缺少瞳术或远距索敌。",
        tactics: "医疗判断和资源管理优秀，擅长在队友保护、怪力爆发和蛞蝓支援之间切换；面对高速远程时需要抓接近窗口。",
        special: "怪力、医疗忍术、百豪之术、通灵蛞蝓。",
        weakness: "主要依赖近身命中和百豪储备；面对高速远程、空间封锁、毒/精神能力或被迫保护队友时，攻击效率会明显下降。",
        setting: "按第四次忍界大战后期开启百豪的版本记录；风影夺还篇怪力医疗忍者阶段已拆入时间线，不把医疗支援直接计作个人硬防。",
        basis: "依据小樱在疾风传后期、第四次忍界大战与辉夜战支援表现定级。"
      })
    })
  ]);
})();
