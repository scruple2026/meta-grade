(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["电锯人"];

  if (!work) {
    throw new Error("电锯人 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "asa-mitaka",
      name: "三鹰朝 / 战争恶魔",
      en: "Asa Mitaka / Yoru",
      ja: "三鷹アサ / ヨル",
      affiliation: "学园篇 / 战争恶魔",
      grade: "学园篇主角 / 战争恶魔宿主",
      appearances: ["学园篇"],
      timelineStatus: "学园篇 / 战争恶魔共生",
      aliases: ["三鹰朝", "战争恶魔", "Yoru"],
      fandomSlug: "Asa_Mitaka",
      evidenceLinks: [
        {
          type: "official",
          scope: "日文官方作品入口",
          label: "动画「电锯人」官方站",
          url: "https://www.chainsawman.dog/tvseries/character/",
          lang: "ja",
          authority: "official",
          medium: "official-site",
          ratingEvidence: false,
          claim: "作为日文官方作品入口保留；三鹰朝/战争恶魔属于漫画第二部资料，仍需原作章节补证。"
        }
      ],
      defaultTimelineKey: "school-war-devil",
      timelinePanels: [
        {
          key: "early-host",
          label: "学园篇早期 / 共生初期",
          status: "战争恶魔接管与基础武器化",
          dimensions: dims({
            attack: ["凡人级", "墙级｜武器化", "早期依赖临场武器化，强度不稳定。"],
            defense: ["凡人级", "凡人级｜宿主肉身", "本体防御接近普通人。"],
            movement: ["凡人速", "凡人速｜恶魔接管", "恶魔接管提升动作但仍缺少高速表现。"],
            reaction: ["凡人速", "凡人速｜恶魔经验", "主要靠战争恶魔经验和情报。"],
            vitality: ["强化凡体", "强化凡体｜恶魔宿主", "宿主结构特殊但不等同混成体。"],
            healing: ["无自愈", "无自愈", "早期缺少稳定恢复表现。"],
            energy: ["凡人能量", "墙级能量｜武器化条件", "能力依赖可武器化对象和罪恶感。"],
            energyRegen: ["常规回能", "常规回能", "资源依赖条件和可用对象。"]
          }),
          notes: "不计入后续更高价值武器化和战争恶魔状态提升。"
        },
        {
          key: "school-war-devil",
          label: "学园篇 / 战争恶魔共生",
          status: "条件型武器化成型",
          dimensions: dims({
            attack: ["墙级", "街区级｜武器化｜战争恶魔｜争议", "武器化强度取决于对象价值、情感和战争恶魔状态。"],
            defense: ["凡人级", "墙级｜恶魔宿主", "本体较脆，主要靠武器化和战术避免受击。"],
            movement: ["凡人速", "亚音速｜恶魔接管", "恶魔接管提升战斗动作，但无音速证据。"],
            reaction: ["凡人速", "亚音速｜恶魔经验", "战争恶魔经验提升反应。"],
            vitality: ["强化凡体", "精锐韧体｜恶魔宿主", "宿主结构特殊但不等同混成体再生。"],
            healing: ["无自愈", "常规自愈｜恶魔影响｜争议", "恢复表现不如混成体，保守记录。"],
            energy: ["墙级能量", "街区级能量｜武器化条件｜争议", "能力强度高度依赖武器化条件。"],
            energyRegen: ["常规回能", "快速回能｜条件型", "随战争恶魔状态与可武器化对象变化。"]
          }),
          notes: "当前主面板版本；按条件型峰值标争议。"
        }
      ],
      dimensions: dims({
        attack: ["墙级", "街区级｜武器化｜战争恶魔｜争议", "武器化强度取决于对象价值、情感和战争恶魔状态。"],
        defense: ["凡人级", "墙级｜恶魔宿主", "本体较脆，主要靠武器化和战术避免受击。"],
        movement: ["凡人速", "亚音速｜恶魔接管", "恶魔接管提升战斗动作，但无音速证据。"],
        reaction: ["凡人速", "亚音速｜恶魔经验", "战争恶魔经验提升反应。"],
        vitality: ["强化凡体", "精锐韧体｜恶魔宿主", "宿主结构特殊但不等同混成体再生。"],
        healing: ["无自愈", "常规自愈｜恶魔影响｜争议", "恢复表现不如混成体，保守记录。"],
        energy: ["墙级能量", "街区级能量｜武器化条件｜争议", "能力强度高度依赖武器化条件。"],
        energyRegen: ["常规回能", "快速回能｜条件型", "随战争恶魔状态与可武器化对象变化。"]
      }),
      notes: notes({
        penetration: "武器化可把拥有感、罪恶感和对象价值转成武器强度，适合制造高单体杀伤、异常材质兵器和临场破甲；这是条件型权能，不把最强情绪武器泛化为常态街区输出。",
        resistance: "三鹰朝本体接近普通学生，战争恶魔接管能提升战斗判断与动作；宿主结构提供部分非人韧性，但缺少电次式混成体复活、高速再生和稳定硬防。",
        sensing: "战争恶魔经验提升战斗警觉和威胁判断，但三鹰本人感知基础有限；武器化对象需要确认所有权与情绪条件。",
        tactics: "夜具备恶魔式战斗经验，能把场景物和关系转化为武器；三鹰的犹豫、罪恶感和控制权切换会影响战术稳定性。",
        special: "战争恶魔共生、物品/生物武器化、罪恶感增幅。",
        weakness: "武器强度高度依赖所有权认知、情绪罪恶感和可用对象；三鹰与夜的控制权、心理状态、社会关系和准备时间都会影响上限。",
        setting: "按漫画学园篇三鹰朝与战争恶魔共生版本记录；战争恶魔名号和恐惧概念只作为机制背景，不直接给主面板高阶宇宙论。",
        basis: "依据学园篇三鹰朝与战争恶魔的武器化机制、对恶魔战和条件型输出保守定级。"
      })
    })
  ]);
})();
