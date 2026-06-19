(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "咒术回战";

  registerWorkSource(WORK, {
    slug: "jujutsu-kaisen",
    originalLanguage: "ja",
    pageLabel: "Jujutsu Kaisen Wiki 角色页",
    pageBase: "https://jujutsu-kaisen.fandom.com/wiki/",
    pageLanguage: "en",
    canonicalLinks: [
      {
        type: "official",
        scope: "日文官方角色入口",
        label: "TV动画「咒术回战」角色页",
        url: "https://jujutsukaisen.jp/character/index.php",
        lang: "ja",
        authority: "official",
        medium: "official-site",
        claim: "用于核对角色身份、术式/等级等日文官方动画资料；不直接支撑跨界量级。"
      }
    ],
    commonLinks: [
      { label: "Jujutsu Kaisen Wiki 角色总表", url: "https://jujutsu-kaisen.fandom.com/wiki/List_of_Characters" }
    ],
    scaleNotes: {
          "scope": "当前收录主角团、高专核心和终局反派核心：虎杖、伏黑、钉崎、五条、真希、狗卷、胖达、乙骨、羂索、里梅和最终 Boss 两面宿傩；支援人员、普通术师、死灭回游长尾和阶段性咒灵不再按 worldbook 名字池自动扩入。",
          "versionPolicy": "高成长角色按 timelineStatus 限定，结局状态与早期状态后续可拆 timelinePanels。",
          "highRisk": [
                "领域",
                "必中",
                "灵魂",
                "空间切割",
                "召唤",
                "天元结界",
                "人类合并",
                "星之怒黑洞",
                "坐杀博徒Jackpot",
                "处刑人之剑",
                "超人术式",
                "雅各布天梯",
                "灾害咒灵",
                "死累累涌军",
                "冰凝咒法",
                "黑鸟操术",
                "反转术式治疗",
                "十划咒法",
                "傀儡操术",
                "投射咒法",
                "构筑术式",
                "再契象",
                "天空术式",
                "花岗岩爆破",
                "蟑螂咒灵",
                "式神轨道领域",
                "完全球",
                "星间飞行",
                "赤血操术",
                "简易领域",
                "新阴流",
                "来访瑞兽",
                "独奏禁区",
                "咒骸",
                "黑绳",
                "蚀烂腐术",
                "空间转移",
                "付丧操术",
                "咒力音波",
                "心身掌握",
                "手机术式",
                "星浆体",
                "受肉载体"
          ],
          "conservativeNotes": "特殊术式不自动抬攻击/防御/速度主档。"
    },
    sourcePolicy: "角色页/作品页是入口来源；高争议峰值后续应补章节、集数、设定书或官方资料链接。",
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();
