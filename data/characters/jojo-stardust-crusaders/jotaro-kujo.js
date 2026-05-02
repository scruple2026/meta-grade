(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["JOJO的奇妙冒险：星尘斗士"];

  if (!work) {
    throw new Error("JOJO的奇妙冒险：星尘斗士 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "jotaro-kujo",
      name: "空条承太郎",
      en: "Jotaro Kujo",
      ja: "空条承太郎",
      category: "主角团",
      affiliation: "乔斯达一行",
      grade: "主角 / 白金之星",
      appearances: ["正篇"],
      timelineStatus: "",
      aliases: [],
      fandomSlug: "Jotaro_Kujo",
      evidenceLinks: [
        {
          type: "official",
          scope: "日文官方角色入口",
          label: "JOJO 官方门户：星尘斗士角色页",
          url: "https://jojo-portal.com/anime/sc/character/",
          lang: "ja",
          authority: "official",
          medium: "official-site",
          ratingEvidence: false,
          claim: "用于核对星尘斗士官方角色和替身入口；替身速度/时间停止仍需原作章节或设定书补证。"
        }
      ],
      defaultTimelineKey: "dio-fight-time-stop",
      timelinePanels: [
        {
          key: "early-crusade",
          label: "旅程前期 / 白金之星",
          status: "精密高速近战成型",
          dimensions: dims({
            attack: ["墙级", "房屋级｜白金之星", "白金之星连打已有高单体破坏。"],
            defense: ["凡人级", "墙级｜替身格挡", "本体是人类，主要由替身格挡保护。"],
            movement: ["凡人速", "亚音速", "本体移动普通，替身短距动作很快。"],
            reaction: ["亚音速", "亚音速｜白金之星", "精密动作和近战反应突出。"],
            vitality: ["强化凡体", "强化凡体", "本体能带伤行动但仍是人类。"],
            healing: ["无自愈", "无自愈", "无自体再生。"],
            energy: ["凡人能量", "房屋级能量｜替身", "替身能量不按传统焦耳池精确换算。"],
            energyRegen: ["常规回能", "常规回能", "替身行动会疲劳。"]
          }),
          notes: "不计入与DIO战中觉醒的时间停止。"
        },
        {
          key: "dio-fight-time-stop",
          label: "DIO战 / 时间停止觉醒",
          status: "白金之星与短时时停",
          dimensions: dims({
            attack: ["墙级", "房屋级｜白金之星", "白金之星近战连打具备高单体破坏，但范围有限。"],
            defense: ["凡人级", "墙级｜替身格挡", "本体是人类，防御主要来自替身格挡和时间停止。"],
            movement: ["凡人速", "亚音速", "本体移动普通，替身短距出拳极快但不等同长途位移。"],
            reaction: ["亚音速", "超音速｜白金之星｜争议", "白金之星精密反应极强，时间停止另写特殊权能。"],
            vitality: ["强化凡体", "精锐韧体", "本体多次重伤仍作战但仍是人类。"],
            healing: ["无自愈", "无自愈", "无自体再生。"],
            energy: ["凡人能量", "房屋级能量｜替身", "替身能量不按传统焦耳池精确换算。"],
            energyRegen: ["常规回能", "常规回能", "时间停止和替身行动会疲劳。"]
          }),
          notes: "当前主面板版本；时间停止作为特殊权能，不抬高本体移动速度。"
        }
      ],
      dimensions: dims({
        attack: ["墙级", "房屋级｜白金之星", "白金之星近战连打具备高单体破坏，但范围有限。"],
        defense: ["凡人级", "墙级｜替身格挡", "本体是人类，防御主要来自替身格挡和时间停止。"],
        movement: ["凡人速", "亚音速", "本体移动普通，替身短距出拳极快但不等同长途位移。"],
        reaction: ["亚音速", "超音速｜白金之星｜争议", "白金之星精密反应极强，时间停止另写特殊权能。"],
        vitality: ["强化凡体", "精锐韧体", "本体多次重伤仍作战但仍是人类。"],
        healing: ["无自愈", "无自愈", "无自体再生。"],
        energy: ["凡人能量", "房屋级能量｜替身", "替身能量不按传统焦耳池精确换算。"],
        energyRegen: ["常规回能", "常规回能", "时间停止和替身行动会疲劳。"]
      }),
      notes: notes({
        penetration: "主要按可见破坏与命中效果记录；特殊机制不直接抬高主攻击能级。",
        resistance: "防御、抗性、再生和特殊免疫分开记录，不把难杀直接换算为高防御。",
        special: "白金之星、精密动作、时间停止、替身格挡。",
        weakness: "存在资源、体力、条件、情报或本体弱点，已在峰值标签和依据中限制。",
        setting: "按当前初稿指定时间线记录，后续可按篇章拆分更细版本。",
        basis: "依据承太郎在星尘斗士篇中对各替身使者和DIO的近战、反应与时间停止表现定级。"
      })
    })
  ]);
})();
