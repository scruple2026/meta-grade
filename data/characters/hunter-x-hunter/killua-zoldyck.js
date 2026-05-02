(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["全职猎人"];

  if (!work) {
    throw new Error("全职猎人 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "killua-zoldyck",
      name: "奇犽·揍敌客",
      en: "Killua Zoldyck",
      ja: "キルア＝ゾルディック",
      affiliation: "揍敌客家族 / 猎人协会",
      grade: "主角团 / 变化系念能力者",
      appearances: ["猎人考试篇", "贪婪之岛篇", "蚁王篇"],
      timelineStatus: "神速掌握后",
      aliases: ["奇犽", "神速"],
      fandomSlug: "Killua_Zoldyck",
      defaultTimelineKey: "chimera-ant-godspeed",
      timelinePanels: [
        {
          key: "exam-assassin",
          label: "猎人考试篇 / 暗杀训练",
          status: "未掌握念",
          dimensions: dims({
            attack: ["凡人级", "墙级｜暗杀术", "暗杀手刀和体术远超常人。"],
            defense: ["凡人级", "墙级｜暗杀训练", "抗毒抗电训练突出。"],
            movement: ["凡人速", "亚音速｜暗杀步法", "短距爆发和潜行强。"],
            reaction: ["凡人速", "亚音速", "早期反应依赖暗杀训练。"],
            vitality: ["强化凡体", "强化凡体", "身体训练优异。"],
            healing: ["无自愈", "无自愈", "无超常恢复。"],
            energy: ["凡人能量", "墙级能量｜体力", "未掌握念。"],
            energyRegen: ["常规回能", "常规回能", "依赖休息。"]
          }),
          notes: "不计入念能力和神速。"
        },
        {
          key: "greed-island-nen",
          label: "贪婪之岛 / 电气念",
          status: "变化系电气念成型",
          dimensions: dims({
            attack: ["墙级", "房屋级｜电击念", "念强化和电击提升单体杀伤。"],
            defense: ["墙级", "房屋级｜念防御", "念防御和身体训练提升承伤。"],
            movement: ["亚音速", "亚音速｜念强化", "机动强但神速尚未成型。"],
            reaction: ["亚音速", "亚音速", "念战经验提升反应。"],
            vitality: ["强化凡体", "精锐韧体｜念强化", "抗毒抗电和念强化支撑续战。"],
            healing: ["无自愈", "无自愈", "无超常恢复。"],
            energy: ["墙级能量", "房屋级能量｜电击念", "念与电力储备限制输出。"],
            energyRegen: ["常规回能", "常规回能｜充电条件", "电力需外部补充。"]
          }),
          notes: "不计入蚁王篇神速自动反应。"
        },
        {
          key: "chimera-ant-godspeed",
          label: "蚁王篇 / 神速掌握后",
          status: "电光石火与疾风迅雷",
          dimensions: dims({
            attack: ["墙级", "房屋级｜电击念", "暗杀术、念强化和电击可造成强单体杀伤。"],
            defense: ["墙级", "房屋级｜念防御", "身体训练和念防御较强，但不等同建筑级硬抗所有攻击。"],
            movement: ["亚音速", "超音速｜神速｜短距", "神速是短时电信号强化机动，保守记为超音速短距峰值。"],
            reaction: ["亚音速", "超音速｜神速自动反应", "神速包含预设电信号自动应对，不完全等同自主反应。"],
            vitality: ["强化凡体", "精锐韧体｜念强化", "抗毒、抗电和暗杀训练提升生存力。"],
            healing: ["无自愈", "无自愈", "无超常恢复。"],
            energy: ["墙级能量", "房屋级能量｜蓄电", "念与电力储备共同限制神速持续时间。"],
            energyRegen: ["常规回能", "快速回能｜充电条件", "念可恢复，电力需外部补充。"]
          }),
          notes: "当前主面板版本。"
        }
      ],
      dimensions: dims({
        attack: ["墙级", "房屋级｜电击念", "暗杀术、念强化和电击可造成强单体杀伤。"],
        defense: ["墙级", "房屋级｜念防御", "身体训练和念防御较强，但不等同建筑级硬抗所有攻击。"],
        movement: ["亚音速", "超音速｜神速｜短距", "神速是短时电信号强化机动，保守记为超音速短距峰值。"],
        reaction: ["亚音速", "超音速｜神速自动反应", "神速包含预设电信号自动应对，不完全等同自主反应。"],
        vitality: ["强化凡体", "精锐韧体｜念强化", "抗毒、抗电和暗杀训练提升生存力。"],
        healing: ["无自愈", "无自愈", "无超常恢复。"],
        energy: ["墙级能量", "房屋级能量｜蓄电", "念与电力储备共同限制神速持续时间。"],
        energyRegen: ["常规回能", "快速回能｜充电条件", "念可恢复，电力需外部补充。"]
      }),
      notes: notes({
        penetration: "暗杀手刀和电击针对神经、要害有穿透优势。",
        resistance: "抗毒抗电训练突出，但不是全类型抗性。",
        special: "变化系电气念、神速、电光石火、疾风迅雷、暗杀术。",
        weakness: "神速持续时间和蓄电条件有限，面对规则型能力仍需情报。",
        setting: "按蚁王篇掌握神速后的奇犽记录。",
        basis: "依据奇犽对炸弹魔、嵌合蚁和护送亚路嘉前后的速度、电击与暗杀表现定级。"
      })
    })
  ]);
})();
