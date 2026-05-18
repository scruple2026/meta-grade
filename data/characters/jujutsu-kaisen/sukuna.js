(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) {
    throw new Error("咒术回战 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "sukuna",
      name: "两面宿傩",
      en: "Ryomen Sukuna",
      ja: "両面宿儺",
      affiliation: "宿傩阵营",
      grade: "最终 Boss / 作品顶层",
      appearances: ["正篇漫画/动画", "涩谷事变", "新宿决战"],
      timelineStatus: "新宿决战 / 完全受肉综合状态",
      aliases: ["诅咒之王", "Sukuna"],
      fandomSlug: "Ryomen_Sukuna",
      dimensions: dims({
        attack: ["楼级", "街区级｜伏魔御厨子｜世界斩｜火焰", "开放领域和斩击范围极强，但按实际破坏规模保守列街区级峰值。"],
        defense: ["楼级", "街区级｜反转术式｜领域", "顶层咒力防护与反转术式，承伤强但不折算国级。"],
        movement: ["音速", "超音速", "顶层近战机动。"],
        reaction: ["音速", "超音速", "能处理五条和多人围攻级别战斗。"],
        vitality: ["精锐韧体", "精锐韧体｜受肉体｜反转术式", "受肉体和反转术式带来极高续战。"],
        healing: ["快速自愈｜反转术式", "极速自愈｜反转术式", "可高速修复重伤，但受术式烧断、输出下降等限制。"],
        energy: ["楼级能量", "街区级能量", "咒力量和咒力操作处作品顶层。"],
        energyRegen: ["快速回能", "极速回能", "长线战斗续航极强。"]
      }),
      notes: notes({
        penetration: "世界斩、解/捌和领域斩击具备极强切割穿透；这是空间/规则式杀伤，不抬破坏主等级。",
        resistance: "顶层咒力防护和反转术式强；灵魂、封印、规则、领域对策仍需具体判断。",
        sensing: "具备顶级咒力感知、灵魂/容器经验和开放领域中的范围掌握；对特殊克制、容器状态和术式恢复窗口仍需按资料限制处理。",
        tactics: "战斗智商极高，善于分析术式、诱导适应、保存底牌并选择破局时机；连续大战和容器/领域状态会压缩战术余裕。",
        special: "伏魔御厨子、开放领域、解、捌、火焰、世界斩、反转术式、十种影法术使用期。",
        weakness: "峰值与容器、受肉阶段、领域状态和术式恢复相关；连续大战会削弱输出。",
        setting: "按完全受肉与新宿决战综合版本记录，不把称号直接换算为跨作品超高量级。",
        basis: "依据涩谷伏魔御厨子、新宿对五条和多人围攻战中的斩击、领域、反转术式表现定级。"
      })
    })
  ]);
})();
