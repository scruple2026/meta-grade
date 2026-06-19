(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) {
    throw new Error("咒术回战 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "masamichi-yaga",
      name: "夜蛾正道",
      en: "Masamichi Yaga",
      ja: "夜蛾正道",
      affiliation: "东京咒术高专",
      grade: "一级术师 / 咒骸制造",
      appearances: ["怀玉・玉折", "咒术回战0", "正篇"],
      timelineStatus: "正篇高专校长",
      aliases: ["夜蛾", "Yaga", "Masamichi Yaga", "咒骸", "Cursed Corpse", "胖达制造者"],
      fandomSlug: "Masamichi_Yaga",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Jujutsu Kaisen Wiki: Masamichi Yaga",
          url: "https://jujutsu-kaisen.fandom.com/wiki/Masamichi_Yaga",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对夜蛾正道、东京高专校长、一级术师和咒骸制造相关资料；具体量级按作品内表现保守记录。"
        }
      ],
      revisionNotes: [
        "从咒术回战改 worldbook 的夜蛾正道 key/comment 补入；未采用 worldbook 正文描述。"
      ],
      dimensions: dims({
        attack: ["墙级", "楼级｜咒骸/近战", "一级术师体术与咒骸协同能形成局部压制。"],
        defense: ["墙级", "楼级｜咒力防护/咒骸掩护", "本体为人类术师，防御可由咒骸协同补足但不等同召唤物全部硬度。"],
        movement: ["亚音速", "亚音速｜一级术师体术", "正篇阶段非高速前线型。"],
        reaction: ["亚音速", "音速｜一级术师经验", "具备老练术师和教师级战斗判断。"],
        vitality: ["精锐韧体", "精锐韧体｜咒力强化", "人类术师生命体量，咒骸制造不改变本体生命阈值。"],
        healing: ["无自愈", "无自愈", "缺少稳定反转术式自愈表现。"],
        energy: ["墙级能量", "楼级能量｜咒骸制造/操作", "咒力资源用于咒骸制造、操作和近战强化。"],
        energyRegen: ["中速回能", "快速回能｜一级术师续航", "可长期维护咒骸体系，但正面战斗续航仍按术师资源处理。"]
      }),
      notes: notes({
        penetration: "本体近战和咒骸攻击偏局部物理/咒力杀伤，缺少大范围破坏表现。",
        resistance: "咒力防护和咒骸掩护提升生存，但本体被直接压制时仍是人类术师。",
        sensing: "教师与校长经验带来咒术知识、学生评估和战场判断；非远距索敌型。",
        tactics: "善于训练、布置和使用咒骸，也能根据对手能力调整战术。",
        special: "咒骸制造、自律咒骸知识、胖达相关技术、教师/校长级咒术经验。",
        weakness: "本体没有领域、自愈或高速机动；咒骸需要准备、资源和维护。",
        setting: "按正篇东京高专校长状态记录，胖达等独立咒骸不全部折算为夜蛾本体面板。",
        basis: "worldbook只用于抽取夜蛾正道姓名；定级依据公开角色资料入口和咒骸制造者/一级术师定位。"
      })
    })
  ]);
})();
