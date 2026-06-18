(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["无限恐怖"];

  if (!work) {
    throw new Error("无限恐怖 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "lord-god",
      name: "主神",
      en: "Lord God",
      ja: "",
      affiliation: "主神空间",
      grade: "主神系统 / 主神空间核心",
      appearances: ["主神空间"],
      timelineStatus: "原作主神系统 / 空间核心",
      aliases: ["主神核心", "光球", "主神空间", "主神空间大光球", "Main God", "Lord God Space"],
      fandomSlug: "",
      confidence: "review",
      evidenceType: ["作品页入口", "资料页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "official",
          scope: "作品官方连载入口",
          label: "起点中文网：《无限恐怖》",
          url: "https://www.qidian.com/book/109222/",
          lang: "zh",
          authority: "official",
          medium: "publisher",
          ratingEvidence: true,
          claim: "用于核对《无限恐怖》作品、作者 zhttty 与起点连载入口；主神系统能力仍按公开资料和原作语境保守处理。"
        },
        {
          type: "wiki",
          scope: "作品资料入口",
          label: "中文维基百科：无限恐怖",
          url: "https://zh.wikipedia.org/wiki/%E7%84%A1%E9%99%90%E6%81%90%E6%80%96",
          lang: "zh",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对主神系统要求角色遵循规则、在不同世界完成任务与求生的作品框架。"
        }
      ],
      revisionNotes: ["从主神空间 worldbook 的 char_主神 key/comment 补入；未采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["无资料", "无资料｜抹杀/规则权限不折算", "公开入口能确认主神系统与任务规则，但缺少可换算为直接攻击能级的稳定战斗表现。"],
        defense: ["无资料", "无资料｜系统核心不折算", "主神空间核心的可被攻击性、承伤结构和防御量级资料不足。"],
        movement: ["不适用", "不适用｜空间传送", "主神作为系统/空间核心，不按普通移动速度排序；传送属于特殊权能。"],
        reaction: ["不适用", "不适用｜系统响应", "任务结算、兑换与修复属于系统响应，不能直接换算成战斗反应速度。"],
        vitality: ["不适用", "无资料｜系统实体", "缺少可确认的生物肉身或可破坏本体阈值。"],
        healing: ["不适用", "不适用｜修复权限", "主神可提供修复/复活类功能，但这不是自身生命回复速度。"],
        energy: ["无资料", "未知｜兑换/修复/传送资源池", "系统资源池上限和可战斗释放方式资料不足，不写成无限能量。"],
        energyRegen: ["不适用", "不适用｜系统资源", "没有可比较的个人回能循环。"]
      }),
      notes: notes({
        penetration: "主神的威胁来自任务规则、抹杀、兑换、传送和空间权限；这些属于规则/系统权能，不按普通单次破坏量级记录。",
        resistance: "公开入口不足以判断主神核心能承受何种直接攻击，不能把系统地位自动换算为高防御。",
        sensing: "主神可进行任务发布、结算、修复和兑换管理，说明其对轮回者状态有系统级监控；范围和机制边界仍按资料不足处理。",
        tactics: "本身不是常规参战者；通过任务世界、奖励点、支线剧情、抹杀规则和兑换体系塑造轮回者行动。",
        special: "主神空间、任务传送、奖励点/支线剧情结算、兑换系统、修复/复活、规则抹杀。",
        weakness: "缺少常规实体、主动战斗、承伤和资源上限资料；同人或泛无限流设定不得自动套入原作主神。",
        setting: "按《无限恐怖》原作主神空间/主神系统记录，不把后续同人、其他无限流作品或用户自定义设定混入。",
        basis: "worldbook只用于抽取主神姓名；定级依据起点作品页、公开资料入口和《无限恐怖》主神系统框架，所有系统权限均留在特殊权能而非主面板升档。"
      })
    })
  ]);
})();
