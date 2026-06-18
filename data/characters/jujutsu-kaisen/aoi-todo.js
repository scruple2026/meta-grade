(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) {
    throw new Error("咒术回战 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "aoi-todo",
      name: "东堂葵",
      en: "Aoi Todo",
      ja: "東堂葵",
      affiliation: "京都咒术高专",
      grade: "一级术师 / 不义游戏",
      appearances: ["京都姐妹校交流会", "涩谷事变"],
      timelineStatus: "涩谷事变 / 不义游戏",
      aliases: ["东堂", "Todo", "不义游戏", "Boogie Woogie"],
      fandomSlug: "Aoi_Todo",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      revisionNotes: [
        "从咒术回战 worldbook 名字池补入；主面板按涩谷事变前后东堂记录。"
      ],
      dimensions: dims({
        attack: ["墙级", "楼级｜咒力强化/黑闪", "体术与咒力强化强，输出偏近战单体。"],
        defense: ["墙级", "楼级｜咒力强化", "一级术师体魄和咒力防御。"],
        movement: ["亚音速", "音速｜不义游戏换位", "本体移动不等于瞬移；换位属于特殊位移。"],
        reaction: ["亚音速", "音速｜战斗智商", "可在高速近战中用换位制造反应优势。"],
        vitality: ["强化凡体", "精锐韧体｜咒力强化", "可承受重击继续战斗。"],
        healing: ["无自愈", "无自愈", "无反转术式自愈表现。"],
        energy: ["墙级能量", "楼级能量｜咒力强化/术式", "咒力用于体术强化和换位。"],
        energyRegen: ["快速回能", "快速回能", "可持续近战，但术式条件受身体状态限制。"]
      }),
      notes: notes({
        penetration: "近战打击、黑闪和不义游戏换位制造错位命中；不义游戏是位置交换，不是破坏力升档。",
        resistance: "咒力强化和体魄强，但缺少再生、护盾或对领域的稳定抗性。",
        sensing: "战斗直觉、咒力感知和对节奏的把握极强，能快速判断队友与敌人的位置交换收益。",
        tactics: "高战斗智商，擅长用不义游戏、假动作和节奏欺骗让队友获得命中窗口。",
        special: "不义游戏、咒力强化、黑闪经验、团队换位战术。",
        weakness: "术式需要拍手或等效触发条件，手部受损后战术上限下降；远程范围压制和领域会限制换位收益。",
        setting: "按涩谷事变阶段东堂记录，不把后续失去术式后的状态并入。",
        basis: "依据东堂在交流会、与花御、真人战斗中的体术、不义游戏和团队战术表现定级。"
      })
    })
  ]);
})();
