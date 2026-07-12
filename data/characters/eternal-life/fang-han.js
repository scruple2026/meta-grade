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
        "补全非代表维度：无限寿命、书名和不死称号本身不够；其它维度按大结局最终阶段争议档记录。"
      ],
      dimensions: dims({
        attack: ["有限宇宙级｜纪元之道/永生之门｜宇宙论依赖｜争议", "有限宇宙级｜终章压制仙王｜非无限代表项｜争议", "终章攻击按作品高端宇宙论争议档记录；不从生命无限直接反推攻击无限。"],
        defense: ["有限宇宙级｜永生之门防护｜宇宙论依赖｜争议", "有限宇宙级｜复归不同于硬度｜非无限代表项｜争议", "防御和生命体量分开：能复归不等于常驻硬度无限。"],
        movement: ["有限宇宙尺度超光速｜终章机动｜宇宙论依赖｜争议", "有限宇宙尺度超光速｜永生之门关联位移｜非纯速度｜争议", "终章行动跨越高端宇宙论场景，但不把门/境界关系直接写成无限速度。"],
        reaction: ["有限宇宙尺度超光速｜仙王级交锋｜宇宙论依赖｜争议", "有限宇宙尺度超光速｜终章信息处理｜非纯反应｜争议", "终章信息处理和交锋层级极高，但无所不能语境不直接等于无限反应。"],
        vitality: ["有限宇宙级生命结构｜永生之门｜宇宙论依赖｜争议", "无限级生命结构｜永生之门/永生境界｜宇宙论依赖｜争议", "代表生命体量的无限样例；核心是生命主体、复归和死亡条件覆盖永生之门相关非有限结构。"],
        healing: ["极速自愈｜纪元/永生之门｜条件｜争议", "瞬愈｜永生之门复归｜条件｜争议", "最终阶段存在死亡后复归语境，但恢复速度和触发条件需与生命结构分开。"],
        energy: ["有限宇宙级能量｜纪元之道｜总量非单击｜争议", "有限宇宙级能量｜永生之门资源｜总量/结构依赖｜争议", "能量池按终章高端记录；不把生命结构直接换算成无限能量。"],
        energyRegen: ["极速回能｜永生之门关联｜争议", "极速回能｜复归/结构补充｜非无限尺度｜争议", "补能和复归相关，但不写无限回能。"]
      }),
      notes: notes({
        penetration: "攻击补为有限宇宙级争议档；方寒最终阶段的攻击仍需逐章审证，不能由永生之门生命结构直接外推到无限攻击。攻击速度：方寒的法宝、神通与近身斗法各有独立祭出或发动过程，永生之门相关生命结构不能直接换成所有攻击载体的速度。",
        resistance: "防御补为有限宇宙级争议档；生命代表项强调死亡条件和复归结构，不等于普通防御能级，被击伤、被压制和能否彻底杀死应分开判断。",
        sensing: "最终阶段具备极高宇宙论层面信息优势，但不直接折算反应速度。",
        tactics: "方寒后期以纪元之道、永生之门和终章复归处理仙王级局面，作战更偏境界/结构压制。",
        special: "永生之门、纪元之道、复归、永生境界、终章无所不能语境。",
        weakness: "无限级生命结构只适用于大结局最终阶段；早中期方寒、单纯寿命永恒或书名含义都不能使用该档。",
        setting: "按《永生》第1630章至大结局最终阶段记录，不并入早期凡人、长生、天君或仙王战前版本。",
        basis: "代表维度为生命体量：依据最终阶段方寒与永生之门/永生境界的主体和复归关系，把死亡条件覆盖非有限结构的生命状态收束为无限级生命结构；其它维度按最终阶段保守补档。"
      })
    })
  ]);
})();
