(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) {
    throw new Error("咒术回战 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "panda",
      name: "胖达",
      en: "Panda",
      ja: "パンダ",
      affiliation: "东京咒术高专",
      grade: "主角团 / 突然变异咒骸",
      appearances: ["咒术回战0", "正篇漫画/动画", "京都交流会", "死灭回游"],
      timelineStatus: "完整多核心咒骸状态",
      aliases: ["咒骸", "Panda"],
      fandomSlug: "Panda",
      dimensions: dims({
        attack: ["墙级", "楼级｜核心转换", "以咒骸肉搏和核心转换提升输出。"],
        defense: ["墙级", "楼级｜咒骸结构", "咒骸结构比普通人耐打，但核心被毁会重创。"],
        movement: ["亚音速", "亚音速", "近战咒骸机动，未表现稳定声速位移。"],
        reaction: ["亚音速", "亚音速", "能参与高专级术师战，但不按同场战斗自动抬到音速。"],
        vitality: ["强化凡体", "精锐韧体｜多核心", "多核心提高失能阈值。"],
        healing: ["无自愈", "缓慢自愈｜修复", "恢复依修理或核心状态，不是生物再生。"],
        energy: ["墙级能量", "楼级能量", "咒骸核心提供战斗能量。"],
        energyRegen: ["常规回能", "常规回能", "无异常回能表现。"]
      }),
      notes: notes({
        penetration: "以钝击、撕扯和形态力量为主，无特殊穿透。",
        resistance: "咒骸结构可承受部分肢体损伤，但核心受损是致命短板。",
        special: "突然变异咒骸具备自律意识和多个核心，核心转换可切换力量、速度和防御取向；核心受损会直接改变战斗形态。",
        weakness: "核心数量下降后战力急剧下滑；缺少远程和高穿透手段。",
        setting: "按完整多核心时期记录，死灭回游后严重削弱状态不另开版本。",
        basis: "依据咒术回战0、京都交流会与死灭回游中的咒骸肉搏和核心损伤表现定级。"
      })
    })
  ]);
})();
