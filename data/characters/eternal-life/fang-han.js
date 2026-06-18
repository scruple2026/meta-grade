(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["永生"];

  if (!work) {
    throw new Error("永生 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "fang-han",
      name: "方寒",
      en: "Fang Han",
      ja: "",
      affiliation: "纪元门 / 永生之门",
      grade: "主角 / 永生境界最终阶段",
      appearances: ["正篇"],
      timelineStatus: "大结局 / 永生之门最终阶段",
      aliases: ["纪元门掌教"],
      fandomSlug: "",
      confidence: "disputed",
      evidenceType: ["中文网文原作", "高风险无限档", "最终阶段"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "chapter",
          scope: "最终章",
          label: "微信读书：《永生》第1634章 永生（大结局）目录",
          url: "https://weread.qq.com/web/bookDetail/dcd3224057ae00dcda5e300",
          citation: "梦入神机《永生》第1630章《我无所不能》、第1634章《永生（大结局）》。",
          lang: "zh",
          authority: "licensed",
          medium: "publisher",
          ratingEvidence: true,
          claim: "支撑方寒最终阶段、永生之门主体/复归关系和永生境界；生命无限按生命主体与死亡条件记录。"
        },
        {
          type: "official",
          scope: "正版作品页",
          label: "起点中文网：《永生》",
          url: "https://www.qidian.com/book/3236044/",
          lang: "zh",
          authority: "official",
          medium: "publisher",
          ratingEvidence: false,
          claim: "用于确认作品、作者、章节总数和最终章标题入口；具体量级仍看章名 citation。"
        }
      ],
      revisionNotes: [
        "中文网文无限生命体量代表样例：只按最终章方寒与永生之门/复归条件记录无限级生命结构。",
        "无限寿命、书名和不死称号本身不够；本条把证据约束在大结局最终阶段。"
      ],
      dimensions: dims({
        attack: ["未知", "未知", "本条不把永生之门最终阶段自动换算为攻击无限。"],
        defense: ["未知", "未知", "防御需独立承伤或抵消证据，不由生命体量反推。"],
        movement: ["未知", "未知", "终章宇宙论位置关系不直接换算连续移动速度。"],
        reaction: ["未知", "未知", "无所不能等终章描述不直接换算身体反应速度。"],
        vitality: ["宇宙级生命结构｜永生之门｜宇宙论依赖｜争议", "无限级生命结构｜永生之门/永生境界｜宇宙论依赖｜争议", "代表生命体量的无限样例；核心是生命主体、复归和死亡条件覆盖永生之门相关非有限结构。"],
        healing: ["未知", "瞬愈｜永生之门复归｜条件｜争议", "最终阶段存在死亡后复归语境，但恢复速度和触发条件需与生命结构分开。"],
        energy: ["未知", "未知", "不把生命结构直接换算为能量总量。"],
        energyRegen: ["未知", "未知", "补能速度无独立量化证据。"]
      }),
      notes: notes({
        penetration: "本条不主打攻击定级；方寒最终阶段的攻击可另行审证，不能由永生之门生命结构直接外推。",
        resistance: "生命代表项强调死亡条件和复归结构，不等于普通防御能级；被击伤、被压制和能否彻底杀死应分开判断。",
        sensing: "最终阶段具备极高宇宙论层面信息优势，但不直接折算反应速度。",
        tactics: "方寒后期以纪元之道、永生之门和终章复归处理仙王级局面，作战更偏境界/结构压制。",
        special: "永生之门、纪元之道、复归、永生境界、终章无所不能语境。",
        weakness: "无限级生命结构只适用于大结局最终阶段；早中期方寒、单纯寿命永恒或书名含义都不能使用该档。",
        setting: "按《永生》第1630章至大结局最终阶段记录，不并入早期凡人、长生、天君或仙王战前版本。",
        basis: "代表维度为生命体量：依据最终阶段方寒与永生之门/永生境界的主体和复归关系，把死亡条件覆盖非有限结构的生命状态收束为无限级生命结构。"
      })
    })
  ]);
})();
