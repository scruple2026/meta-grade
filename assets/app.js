(function () {
  "use strict";

  const app = document.getElementById("app");
  const characters = window.POWER_WIKI_CHARACTERS || window.JJK_CHARACTERS || [];
  const dimensions = window.POWER_WIKI_DIMENSIONS || window.JJK_DIMENSIONS || [];
  const dimensionGroups = [
    { key: "attack", label: "攻击", dimensionKeys: ["attack"] },
    { key: "defense", label: "防御", dimensionKeys: ["defense"] },
    { key: "speed", label: "速度", dimensionKeys: ["movement", "reaction"] },
    { key: "vitality", label: "生命", dimensionKeys: ["vitality", "healing"] },
    { key: "energy", label: "能量", dimensionKeys: ["energy", "energyRegen"] }
  ];
  const battleOutputStyles = [
    { key: "verdict", label: "快速结论", description: "胜负 / 胜率 / 三主因" },
    { key: "analysis", label: "完整裁定", description: "8维 / 权能 / 续航 / 证据" },
    { key: "narrative", label: "过程演绎", description: "开局 / 中盘 / 终局" }
  ];
  const battleRandomRules = [
    { key: "crossWork", label: "跨作品", description: "尽量从不同作品随机对手。" },
    { key: "sameTier", label: "同量级", description: "尽量随机峰值面板接近的对手。" }
  ];
  const battleEnvironments = [
    { key: "standard-arena", label: "标准空旷场", description: "无遮挡、双方可见，地面平整。" },
    { key: "urban-block", label: "城市街区", description: "道路、车辆、低层建筑和巷道充足，存在遮蔽与高低差。" },
    { key: "dense-highrise", label: "高楼密集城区", description: "高层建筑、屋顶、垂直空间和视线遮挡明显。" },
    { key: "indoor-complex", label: "室内建筑群", description: "走廊、房间、墙体和短视距限制机动与大范围招式。" },
    { key: "industrial-zone", label: "工厂设施", description: "金属结构、管线、可燃物、机械设备和复杂遮蔽可被利用。" },
    { key: "ruined-city", label: "大型废墟", description: "瓦砾、断墙、地下空间和不稳定结构利于埋伏、掩体和地形破坏。" },
    { key: "forest-mountain", label: "森林山地", description: "树林、坡地、岩体和自然遮蔽充足，视线与追踪难度上升。" },
    { key: "desert-open", label: "沙漠荒原", description: "遮蔽很少、视野开阔，沙尘和长距离移动会放大续航差距。" },
    { key: "snow-low-temp", label: "雪地低温", description: "低温、积雪、冰面和能见度变化影响移动、体力与火/水/冰相关能力。" },
    { key: "rain-night", label: "雨夜低能见度", description: "雨水、黑暗、湿滑地面和噪声压制影响感知、火焰、导电与潜行。" },
    { key: "coastal-dock", label: "沿海码头", description: "水体、船只、集装箱、开阔海面和岸上遮蔽物并存。" },
    { key: "open-ocean", label: "海上船战", description: "主要落点是船只或漂浮平台，落水、远距追击和水面机动很关键。" },
    { key: "underwater", label: "深水水下", description: "呼吸、水压、视线、阻力和水下机动成为核心限制。" },
    { key: "cave-underground", label: "地下洞窟", description: "封闭、黑暗、狭窄通道、岩体和回声影响机动、感知与大范围破坏。" },
    { key: "sealed-small-arena", label: "封闭小型场", description: "边界明确、空间有限、难以拉开距离或绕开接战。" },
    { key: "long-range-open", label: "远距开阔地", description: "大范围无遮挡，远程火力、索敌和接近能力更重要。" },
    { key: "sky-platform", label: "高空平台", description: "落点有限、坠落风险高，飞行、滞空、抓取和空间位移影响很大。" },
    { key: "resource-rich", label: "资源丰富场", description: "可利用材料、武器、金属、植物、水源和地形机关较多。" },
    { key: "outer-space", label: "太空真空", description: "真空、失重、无空气传播和极端生存环境会强烈限制无对应抗性的角色。" }
  ];
  const battleDistances = [
    { key: "melee-3m", label: "贴身 3 米", description: "开局近身，先手、反应、格斗和瞬发控制权重最高。" },
    { key: "close-10m", label: "近距 10 米", description: "短突进即可接战，近战爆发和瞬时防御很关键。" },
    { key: "room-20m", label: "室内 20 米", description: "房间或走廊尺度，短视距、墙体和拐角会影响命中。" },
    { key: "street-50m", label: "街区 50 米", description: "常见遭遇距离，远近战都有启动空间。" },
    { key: "standard-100m", label: "标准 100 米", description: "默认开局距离，双方通常可见但仍有接近过程。" },
    { key: "medium-300m", label: "中距 300 米", description: "远程压制、机动突入和索敌开始明显影响节奏。" },
    { key: "long-1km", label: "远距 1 公里", description: "长程攻击、视野、感知、飞行和高速接近成为关键。" },
    { key: "extreme-10km", label: "超远 10 公里", description: "需要稳定索敌、长程投射或高速移动才能形成有效交战。" },
    { key: "unknown-roaming", label: "未知游猎", description: "双方先不知道精确位置，搜索、潜行、感知和伏击权重提高。" }
  ];
  const battleIntelPolicies = [
    { key: "encounter", label: "陌生遭遇", description: "双方只知道眼前可见信息，不自动知道隐藏底牌。" },
    { key: "rough-info", label: "大致情报", description: "双方知道对方能力类型和常见战斗方式，不知道精确数值与隐藏条件。" },
    { key: "panel-info", label: "面板情报", description: "双方知道本站面板级信息，但仍需按自身能力、反应与战术执行。" }
  ];
  const workSources = window.POWER_WIKI_WORK_SOURCES || {};
  const confidenceLabels = {
    stable: "稳定",
    medium: "中等",
    review: "待审",
    disputed: "争议"
  };
  const rankOrders = {
    attack: ["昆虫级", "凡人级", "砖级", "墙级", "房屋级", "楼级", "街区级", "城市级", "国家级", "大陆级", "地表级", "行星级", "恒星级", "星系级", "超星系团级", "有限宇宙级", "无限级"],
    defense: ["昆虫级", "凡人级", "砖级", "墙级", "房屋级", "楼级", "街区级", "城市级", "国家级", "大陆级", "地表级", "行星级", "恒星级", "星系级", "超星系团级", "有限宇宙级", "无限级"],
    movement: ["凡人速", "亚音速", "音速", "超音速", "高超音速", "宇宙速度级", "超第三宇宙速度级", "亚光速", "光速", "超光速"],
    reaction: ["凡人速", "亚音速", "音速", "超音速", "高超音速", "宇宙速度级", "超第三宇宙速度级", "亚光速", "光速", "超光速"],
    vitality: ["凡人肉身", "强化凡体", "精锐韧体", "房屋级生命阈值", "楼级生命阈值", "街区级生命阈值", "城市级生命阈值", "国家级生命阈值", "大陆级生命阈值", "地表级生命阈值", "行星级生命结构", "恒星级生命结构", "星系级生命结构", "宇宙级生命结构"],
    healing: ["无自愈", "缓慢自愈", "常规自愈", "快速自愈", "极速自愈", "瞬愈"],
    energy: ["凡人能量", "砖级能量", "墙级能量", "房屋级能量", "楼级能量", "街区级能量", "城市级能量", "国家级能量", "大陆级能量", "地表级能量", "行星级能量", "恒星级能量", "星系级能量", "超星系团级能量", "有限宇宙级能量", "无限级能量"],
    energyRegen: ["无回能", "缓慢回能", "常规回能", "快速回能", "极速回能", "无限回能"]
  };
  const unrankedOptionOrder = ["无资料", "未知", "未表现", "不适用"];
  const state = {
    query: "",
    work: "all",
    affiliation: "all",
    evidenceStatus: "all",
    dimensionScope: "any",
    auditWork: "all",
    auditEvidence: "all",
    auditAuthority: "all",
    dimensionFilters: {},
    mode: "grid",
    battle: {
      leftKey: "",
      rightKey: "",
      leftStageKey: "",
      rightStageKey: "",
      leftSearchOpen: false,
      rightSearchOpen: false,
      leftFilters: createBattleFilters(),
      rightFilters: createBattleFilters(),
      outputStyle: "verdict",
      randomCrossWork: false,
      randomSameTier: false,
      environmentKey: "standard-arena",
      distanceKey: "standard-100m",
      intelPolicyKey: "encounter",
      loading: false,
      cancelled: false,
      error: "",
      streamText: "",
      result: null,
      model: "",
      usage: null,
      elapsedMs: 0,
      statusTrail: [],
      apiStatus: null,
      apiStatusError: "",
      apiStatusLoading: false,
      apiStatusCheckedAt: 0,
      shareMessage: "",
      resultMessage: "",
      abortController: null
    }
  };

  dimensions.forEach((dimension) => {
    state.dimensionFilters[dimension.key] = { min: "all", max: "all" };
  });

  function createBattleFilters() {
    const filters = {
      query: "",
      work: "all",
      evidenceStatus: "all",
      dimensionScope: "any",
      dimensionFilters: {}
    };
    dimensions.forEach((dimension) => {
      filters.dimensionFilters[dimension.key] = { min: "all", max: "all" };
    });
    return filters;
  }

  window.addEventListener("hashchange", renderRoute);
  renderRoute();

  function renderRoute() {
    const rawRoute = location.hash.replace(/^#/, "") || "/";
    const queryIndex = rawRoute.indexOf("?");
    const route = queryIndex >= 0 ? rawRoute.slice(0, queryIndex) || "/" : rawRoute;
    const routeParams = new URLSearchParams(queryIndex >= 0 ? rawRoute.slice(queryIndex + 1) : "");
    const segments = route.split("/").filter(Boolean).map((part) => decodeURIComponent(part));
    if (segments[0] === "character") {
      const target = resolveCharacterRoute(segments.slice(1));
      if (target) {
        renderCharacter(target.character, target.stageKey);
      } else {
        renderMissing("未找到角色", "#/", "返回角色检索");
      }
      return;
    }
    if (segments[0] === "work" && segments[1]) {
      renderWorkPage(segments[1]);
      return;
    }
    if (route === "/audit") {
      renderAudit();
      return;
    }
    if (segments[0] === "battle") {
      renderBattle(routeParams);
      return;
    }
    if (route === "/about") {
      renderAbout();
      return;
    }
    if (route === "/reference") {
      renderReference();
      return;
    }
    renderHome();
  }

  function resolveCharacterRoute(parts) {
    if (!parts.length) return null;
    if (parts.length >= 2) {
      const workName = resolveWorkName(parts[0]);
      if (workName) {
        const character = characters.find((item) => item.work === workName && item.id === parts[1]);
        if (character) return { character, stageKey: parts[2] || "" };
      }
    }
    const character = characters.find((item) => item.id === parts[0]);
    return character ? { character, stageKey: parts[1] || "" } : null;
  }

  function renderMissing(title, href, label) {
    app.innerHTML = `
      <section class="empty-state">
        <h1>${escapeHtml(title)}</h1>
        <p><a href="${escapeAttribute(href)}">${escapeHtml(label)}</a></p>
      </section>
    `;
  }

  function renderHome() {
    app.innerHTML = `
      <div class="wiki-grid">
        <aside class="filters" aria-label="角色筛选器">
          <div class="filter-header">
            <h1>角色检索</h1>
            <p>当前按作品维护核心战斗角色；搜索结果只展示 8 个主维度简介，细节、争议和来源在角色页查看。</p>
            <p class="public-beta-note">公开 Beta：本站用于战力面板讨论和证据修订，含正篇结局与续作剧透；AI 对战生成会按服务端状态启用或暂停。</p>
          </div>
          <form class="filter-body" id="filterForm">
            <div class="field">
              <label for="searchInput">角色名字</label>
              <input id="searchInput" name="query" type="search" placeholder="中文 / 英文 / 别名" autocomplete="off">
            </div>
            <div class="field">
              <label for="workFilter">作品</label>
              <select id="workFilter" name="work"></select>
            </div>
            <div class="field">
              <label for="affiliationFilter">所属</label>
              <select id="affiliationFilter" name="affiliation"></select>
            </div>
            <div class="field">
              <label for="evidenceFilter">证据状态</label>
              <select id="evidenceFilter" name="evidenceStatus">
                <option value="all">全部证据状态</option>
                <option value="stable">稳定</option>
                <option value="review">待审 / 有警告</option>
                <option value="disputed">争议</option>
                <option value="bounded">仅下限 / 仅上限</option>
                <option value="external">外源 / 一次性 / 特殊峰值</option>
              </select>
            </div>
            <div class="field">
              <label for="dimensionScopeFilter">8 维筛选对象</label>
              <select id="dimensionScopeFilter" name="dimensionScope">
                <option value="any">常态或峰值</option>
                <option value="normal">仅常态</option>
                <option value="peak">仅峰值</option>
              </select>
              <p class="field-hint">默认任一命中；切到仅常态可排除一次性或外源峰值。</p>
            </div>
            <div class="dimension-filter-grid" aria-label="8 个主维度筛选">
              ${dimensions
                .map(
                  (dimension) => `
                    <div class="field dimension-range-field">
                      <label>${dimension.label}</label>
                      <div class="range-selects">
                        <div class="range-control">
                          <span>下限</span>
                          <select id="${dimension.key}MinFilter" name="${dimension.key}Min" aria-label="${dimension.label}下限"></select>
                        </div>
                        <div class="range-control">
                          <span>上限</span>
                          <select id="${dimension.key}MaxFilter" name="${dimension.key}Max" aria-label="${dimension.label}上限"></select>
                        </div>
                      </div>
                    </div>
                  `
                )
                .join("")}
            </div>
            <div class="filter-actions">
              <button class="primary-action" type="submit">应用筛选</button>
              <button class="small-action" type="button" id="resetFilters">重置</button>
            </div>
          </form>
        </aside>
        <section class="content-column" aria-live="polite">
          <div class="toolbar">
            <div class="result-count" id="resultCount"></div>
            <div class="view-tools">
              <button class="chip-button" type="button" id="gridMode" aria-pressed="true">网格</button>
              <button class="chip-button" type="button" id="listMode" aria-pressed="false">密集</button>
            </div>
          </div>
          <div id="workScope"></div>
          <div class="results" id="results"></div>
        </section>
      </div>
    `;

    hydrateFilters();
    renderResults();
  }

  function hydrateFilters() {
    const form = document.getElementById("filterForm");
    setSelectOptions("workFilter", ["all", ...collectValues((item) => [item.work])], "全部作品");

    form.querySelector("[name='query']").value = state.query;
    form.querySelector("[name='work']").value = state.work;
    form.querySelector("[name='evidenceStatus']").value = state.evidenceStatus;
    form.querySelector("[name='dimensionScope']").value = state.dimensionScope;
    hydrateScopedFilters(form);

    form.addEventListener("input", (event) => {
      if (event.target.name === "query") {
        state.query = event.target.value.trim();
        renderResults();
      }
    });
    form.addEventListener("change", (event) => {
      readForm(form);
      if (event.target.name === "work" || event.target.name === "dimensionScope") {
        hydrateScopedFilters(form);
      }
      renderResults();
    });
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      readForm(form);
      hydrateScopedFilters(form);
      renderResults();
    });
    document.getElementById("resetFilters").addEventListener("click", () => {
      state.query = "";
      state.work = "all";
      state.affiliation = "all";
      state.evidenceStatus = "all";
      state.dimensionScope = "any";
      dimensions.forEach((dimension) => {
        state.dimensionFilters[dimension.key] = { min: "all", max: "all" };
      });
      renderHome();
    });
    document.getElementById("gridMode").addEventListener("click", () => {
      state.mode = "grid";
      renderResults();
    });
    document.getElementById("listMode").addEventListener("click", () => {
      state.mode = "list";
      renderResults();
    });
  }

  function hydrateScopedFilters(form) {
    const scoped = state.work === "all" ? characters : characters.filter((item) => item.work === state.work);
    setScopedSelectOptions(form, "affiliation", "affiliationFilter", "全部所属", scoped);
    hydrateDimensionFilters(form, scoped);
  }

  function setScopedSelectOptions(form, stateKey, id, allLabel, scopedCharacters) {
    const values = collectValues((item) => [item[stateKey]], scopedCharacters);
    if (state[stateKey] !== "all" && !values.includes(state[stateKey])) {
      state[stateKey] = "all";
    }
    setSelectOptions(id, ["all", ...values], allLabel);
    form.querySelector(`[name='${stateKey}']`).value = state[stateKey];
  }

  function readForm(form) {
    state.query = form.querySelector("[name='query']").value.trim();
    state.work = form.querySelector("[name='work']").value;
    state.affiliation = form.querySelector("[name='affiliation']").value;
    state.evidenceStatus = form.querySelector("[name='evidenceStatus']").value;
    state.dimensionScope = form.querySelector("[name='dimensionScope']").value;
    dimensions.forEach((dimension) => {
      const filter = normalizeDimensionFilter(dimension.key, {
        min: form.querySelector(`[name='${dimension.key}Min']`).value,
        max: form.querySelector(`[name='${dimension.key}Max']`).value
      });
      state.dimensionFilters[dimension.key] = filter;
      form.querySelector(`[name='${dimension.key}Min']`).value = filter.min;
      form.querySelector(`[name='${dimension.key}Max']`).value = filter.max;
    });
  }

  function setSelectOptions(id, values, allLabel) {
    const element = document.getElementById(id);
    element.innerHTML = values
      .map((value) => `<option value="${escapeAttribute(value)}">${escapeHtml(value === "all" ? allLabel : value)}</option>`)
      .join("");
  }

  function collectValues(project, source = characters) {
    return [
      ...new Set(
        source
          .flatMap(project)
          .filter(Boolean)
          .map((value) => String(value).trim())
          .filter(Boolean)
      )
    ].sort((a, b) => a.localeCompare(b, "zh-Hans-CN"));
  }

  function hydrateDimensionFilters(form, scopedCharacters) {
    dimensions.forEach((dimension) => {
      const values = collectRankValues(dimension.key, scopedCharacters, state.dimensionScope);
      const filter = normalizeDimensionFilter(dimension.key, state.dimensionFilters[dimension.key], values);
      state.dimensionFilters[dimension.key] = filter;
      setSelectOptions(`${dimension.key}MinFilter`, ["all", ...values], "不限下限");
      setSelectOptions(`${dimension.key}MaxFilter`, ["all", ...values], "不限上限");
      form.querySelector(`[name='${dimension.key}Min']`).value = filter.min;
      form.querySelector(`[name='${dimension.key}Max']`).value = filter.max;
    });
  }

  function collectRankValues(key, source = characters, scope = "any") {
    const order = rankOrders[key] || [];
    return [
      ...new Set(
        source
          .flatMap((item) => {
            const entry = item.dimensions[key];
            return getDimensionRanks(entry, scope);
          })
          .filter(Boolean)
          .map((value) => String(value).trim())
          .filter((value) => order.includes(value))
      )
    ].sort((a, b) => compareRankOption(key, a, b));
  }

  function normalizeDimensionFilter(key, filter, availableValues = null) {
    const order = rankOrders[key] || [];
    const values = availableValues || order;
    const next = {
      min: filter && filter.min ? filter.min : "all",
      max: filter && filter.max ? filter.max : "all"
    };
    if (next.min !== "all" && !values.includes(next.min)) next.min = "all";
    if (next.max !== "all" && !values.includes(next.max)) next.max = "all";
    const minIndex = next.min === "all" ? -1 : order.indexOf(next.min);
    const maxIndex = next.max === "all" ? -1 : order.indexOf(next.max);
    if (minIndex >= 0 && maxIndex >= 0 && minIndex > maxIndex) {
      return { min: next.max, max: next.min };
    }
    return next;
  }

  function compareRankOption(key, a, b) {
    const order = rankOrders[key] || [];
    const aIndex = order.indexOf(a);
    const bIndex = order.indexOf(b);
    if (aIndex >= 0 && bIndex >= 0) return aIndex - bIndex;
    if (aIndex >= 0) return -1;
    if (bIndex >= 0) return 1;

    const aUnranked = unrankedOptionOrder.indexOf(a);
    const bUnranked = unrankedOptionOrder.indexOf(b);
    if (aUnranked >= 0 && bUnranked >= 0) return aUnranked - bUnranked;
    if (aUnranked >= 0) return 1;
    if (bUnranked >= 0) return -1;

    return a.localeCompare(b, "zh-Hans-CN");
  }

  function getFilteredCharacters() {
    const query = normalize(state.query);
    return characters
      .filter((item) => {
        const haystack = normalize([item.name, item.en, item.ja, item.timelineStatus, ...(item.aliases || [])].join(" "));
        if (query && !haystack.includes(query)) return false;
        if (state.work !== "all" && item.work !== state.work) return false;
        if (state.affiliation !== "all" && item.affiliation !== state.affiliation) return false;
        if (!matchesEvidenceStatus(item, state.evidenceStatus)) return false;
        return dimensions.every((dimension) => {
          const filter = state.dimensionFilters[dimension.key];
          if (!filter || (filter.min === "all" && filter.max === "all")) return true;
          const entry = item.dimensions[dimension.key];
          return matchesDimensionRange(dimension.key, entry, filter, state.dimensionScope);
        });
      })
      .sort(sortCharacters);
  }

  function matchesEvidenceStatus(character, filter) {
    if (filter === "all") return true;
    const text = characterAuditText(character);
    if (filter === "stable") return character.confidence === "stable" && !(character.auditWarnings || []).length;
    if (filter === "review") return character.confidence === "review" || (character.auditWarnings || []).length > 0;
    if (filter === "disputed") return character.confidence === "disputed" || text.includes("争议");
    if (filter === "bounded") return text.includes("仅下限") || text.includes("仅上限");
    if (filter === "external") return /外源|一次性|仪式|特殊位移|不可控|剧情限定|装备/.test(text);
    return true;
  }

  function matchesDimensionRange(key, entry, filter, scope = "any") {
    const order = rankOrders[key] || [];
    if (!order.length) return true;
    const minIndex = filter.min === "all" ? 0 : order.indexOf(filter.min);
    const maxIndex = filter.max === "all" ? order.length - 1 : order.indexOf(filter.max);
    if (minIndex < 0 || maxIndex < 0) return true;
    return getDimensionRanks(entry, scope).some((rank) => {
      const index = order.indexOf(rank);
      return index >= minIndex && index <= maxIndex;
    });
  }

  function getDimensionRanks(entry, scope) {
    if (!entry) return [];
    if (scope === "normal") return [baseRank(entry.normal)];
    if (scope === "peak") return [baseRank(entry.peak)];
    return [baseRank(entry.normal), baseRank(entry.peak)];
  }

  function sortCharacters(a, b) {
    return compare(a.name, b.name);
  }

  function compare(a, b) {
    return String(a).localeCompare(String(b), "zh-Hans-CN");
  }

  function capitalize(value) {
    const text = String(value || "");
    return text ? `${text.charAt(0).toUpperCase()}${text.slice(1)}` : "";
  }

  function renderResults() {
    const resultCount = document.getElementById("resultCount");
    const results = document.getElementById("results");
    const workScope = document.getElementById("workScope");
    const gridButton = document.getElementById("gridMode");
    const listButton = document.getElementById("listMode");
    const filtered = getFilteredCharacters();

    gridButton.setAttribute("aria-pressed", String(state.mode === "grid"));
    listButton.setAttribute("aria-pressed", String(state.mode === "list"));
    results.className = `results ${state.mode === "list" ? "list-mode" : ""}`;
    resultCount.innerHTML = `已显示 <strong>${filtered.length}</strong> / ${characters.length} 个角色`;
    workScope.innerHTML = renderWorkScope();

    if (!filtered.length) {
      results.innerHTML = `
        <div class="empty-state">
          <h2>没有匹配角色</h2>
          <p>放宽名字、作品、所属或 8 维面板筛选后再试。</p>
        </div>
      `;
      return;
    }

    results.innerHTML = filtered.map(renderCharacterRow).join("");
  }

  function renderWorkScope() {
    if (state.work === "all") {
      const reviewCount = characters.filter((item) => matchesEvidenceStatus(item, "review") || matchesEvidenceStatus(item, "disputed")).length;
      return `
        <section class="scope-note">
          <strong>全站范围</strong>
          <span>当前只维护各作品核心战斗角色；长尾角色、非战斗角色和纯剧情角色等待明确需求或社区 PR。</span>
          <span>待审/争议条目：${reviewCount}。</span>
        </section>
      `;
    }
    const source = workSources[state.work] || {};
    const notes = source.scaleNotes || {};
    const items = [
      notes.scope,
      notes.versionPolicy,
      notes.conservativeNotes,
      notes.sourcePolicy || source.sourcePolicy
    ].filter(Boolean);
    const highRisk = Array.isArray(notes.highRisk) ? notes.highRisk : [];
    if (!items.length && !highRisk.length) return "";
    return `
      <section class="scope-note">
        <strong>${escapeHtml(state.work)} 收录口径</strong>
        ${items.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
        ${highRisk.length ? `<span>高风险机制：${escapeHtml(highRisk.join(" / "))}</span>` : ""}
        <span><a href="${escapeAttribute(workHref(state.work))}">查看作品页</a></span>
      </section>
    `;
  }

  function renderCharacterRow(character) {
    return `
      <article class="character-row">
        <div class="character-heading">
          <div>
            <h2><a href="${escapeAttribute(characterHref(character))}">${escapeHtml(character.name)}</a></h2>
            <div class="meta-line">${escapeHtml(character.en)} · <a href="${escapeAttribute(workHref(character.work))}">${escapeHtml(character.work)}</a> · ${escapeHtml(character.affiliation)} · 身份 / 能力：${escapeHtml(character.grade)}</div>
            ${character.timelineStatus ? `<div class="meta-line">时间线状态：${escapeHtml(character.timelineStatus)}</div>` : ""}
            <div class="alias-line">${escapeHtml([character.ja, ...(character.aliases || [])].filter(Boolean).join(" / "))}</div>
          </div>
          <div class="badge-list" aria-label="角色标签">
            <span class="badge${confidenceBadgeClass(character.confidence)}">口径：${escapeHtml(confidenceLabel(character.confidence))}</span>
            ${timelineCount(character) > 1 ? `<span class="badge">时间线 ${timelineCount(character)}</span>` : ""}
            ${character.auditWarnings && character.auditWarnings.length ? `<span class="badge is-warning">待审 ${character.auditWarnings.length}</span>` : ""}
          </div>
        </div>
        <div class="dimension-grid" aria-label="${escapeAttribute(character.name)} 的 5 条属性分组，含 8 个主维度简介">
          ${renderDimensionGroupCards(character.dimensions)}
        </div>
      </article>
    `;
  }

  function renderCharacter(target, stageKey = "") {
    const character = typeof target === "string" ? characters.find((item) => item.id === target) : target;
    if (!character) {
      renderMissing("未找到角色", "#/", "返回角色检索");
      return;
    }
    const panels = getTimelineEntries(character);
    const activeIndex = resolveTimelineIndex(panels, stageKey, character.defaultTimelineKey);
    const activePanel = panels[activeIndex];

    app.innerHTML = `
      <section class="detail-page">
        <div class="back-line"><a href="#/">← 返回角色检索</a></div>
        <article class="detail-card">
          <header class="detail-header">
            <h1>${escapeHtml(character.name)}</h1>
            <p class="detail-subtitle">${escapeHtml(character.en)} · ${escapeHtml(character.ja || "")}</p>
            <div class="detail-meta">
              <a class="badge is-work-link" href="${escapeAttribute(workHref(character.work))}">作品：${escapeHtml(character.work)}</a>
              <span class="badge">${escapeHtml(character.affiliation)}</span>
              <span class="badge">身份 / 能力：${escapeHtml(character.grade)}</span>
              <span class="badge${confidenceBadgeClass(character.confidence)}">口径：${escapeHtml(confidenceLabel(character.confidence))}</span>
              ${renderSourceQualityBadge(character)}
              ${character.timelineStatus ? `<span class="badge">时间线状态：${escapeHtml(character.timelineStatus)}</span>` : ""}
              ${character.appearances.map((appearance) => `<span class="badge">${escapeHtml(appearance)}</span>`).join("")}
            </div>
          </header>
          <div class="detail-layout">
            ${renderTimelineNav(character, panels, activeIndex)}
            <div class="detail-body">
              ${renderTimelineDetail(character, activePanel)}
            </div>
          </div>
        </article>
      </section>
    `;
  }

  function getTimelineEntries(character) {
    const panels = Array.isArray(character.timelinePanels) ? character.timelinePanels : [];
    if (panels.length > 1) {
      return panels.map((panel, index) => ({
        key: panel.key || `stage-${index + 1}`,
        label: panel.label || `时间线 ${index + 1}`,
        status: panel.status || "",
        dimensions: panel.dimensions || character.dimensions,
        notes: panel.notes || "",
        confidence: panel.confidence || character.confidence,
        evidenceType: panel.evidenceType || character.evidenceType || []
      }));
    }
    return [{
      key: "current",
      label: character.timelineStatus || "当前主面板",
      status: character.timelineStatus || "",
      dimensions: character.dimensions,
      notes: "当前维护版本。",
      confidence: character.confidence,
      evidenceType: character.evidenceType || []
    }];
  }

  function resolveTimelineIndex(panels, stageKey, defaultTimelineKey = "") {
    if (stageKey) {
      const index = panels.findIndex((panel) => panel.key === stageKey);
      if (index >= 0) return index;
    }
    if (!stageKey && defaultTimelineKey) {
      const defaultIndex = panels.findIndex((panel) => panel.key === defaultTimelineKey);
      if (defaultIndex >= 0) return defaultIndex;
    }
    return Math.max(0, panels.length - 1);
  }

  function renderTimelineNav(character, panels, activeIndex) {
    return `
      <aside class="timeline-tabs" aria-label="角色时间线">
        <div class="timeline-tabs-title">时间线</div>
        ${panels.map((panel, index) => `
          <a class="timeline-tab ${activeIndex === index ? "is-active" : ""}" href="${escapeAttribute(characterHref(character, panel.key))}" aria-current="${activeIndex === index ? "page" : "false"}">
            <span>${escapeHtml(panel.label)}</span>
            ${panel.status ? `<small>${escapeHtml(panel.status)}</small>` : ""}
          </a>
        `).join("")}
      </aside>
    `;
  }

  function renderTimelineDetail(character, panel) {
    return `
      ${renderAuditWarnings(character)}
      <section class="active-timeline-panel">
        <header>
          <h2>${escapeHtml(panel.label)}</h2>
          ${panel.status ? `<p>${escapeHtml(panel.status)}</p>` : ""}
        </header>
        ${renderTimelineDimensionGroups(panel)}
        ${panel.notes ? `<p class="timeline-panel-note">${escapeHtml(panel.notes)}</p>` : ""}
      </section>
      <div class="notes-grid">
        ${renderNote("攻击性质", character.notes.penetration)}
        ${renderNote("防御抗性", character.notes.resistance)}
        ${renderNote("特殊权能", character.notes.special)}
        ${renderNote("角色短板", character.notes.weakness)}
        ${renderNote("设定/旁白", character.notes.setting)}
        ${renderNote("评级依据", character.notes.basis)}
      </div>
      ${renderRevisionNotes(character)}
      ${renderEvidenceMeta(character)}
      ${renderSourceLinks(character)}
    `;
  }

  function renderTimelineDimensionRow(panel, dimension, showEvidenceColumn = false) {
    const entry = panel.dimensions[dimension.key];
    return `
      <tr>
        <th class="dimension-table-name" scope="row">${escapeHtml(dimension.label)}</th>
        <td class="dimension-table-rank"><span>${escapeHtml(entry.normal)}</span></td>
        <td class="dimension-table-rank"><span>${escapeHtml(entry.peak)}</span></td>
        <td class="dimension-table-brief">${escapeHtml(entry.brief || "按常态/峰值双档记录。")}</td>
        ${showEvidenceColumn ? `<td class="dimension-table-evidence">${entry.evidence && entry.evidence.length ? renderEvidenceList(entry.evidence) : `<span class="muted-line">见下方评级依据与来源。</span>`}</td>` : ""}
      </tr>
    `;
  }

  function renderDimensionGroupCards(dimensionValues) {
    return dimensionGroups.map((group) => {
      const items = group.dimensionKeys.map((key) => {
        const dimension = dimensionByKey(key);
        const entry = dimensionValues && dimensionValues[key];
        if (!dimension || !entry) return "";
        return `
          <div class="dimension-subrow">
            <span class="dimension-sub-label">${escapeHtml(dimension.label)}</span>
            <span class="dimension-value">
              <span>常态【${escapeHtml(entry.normal)}】</span>
              <span>峰值【${escapeHtml(entry.peak)}】</span>
            </span>
          </div>
        `;
      }).filter(Boolean).join("");
      return `
        <section class="dimension-group-card is-${escapeAttribute(group.key)}">
          <h3 class="dimension-group-title">${escapeHtml(group.label)}</h3>
          <div class="dimension-subrows">
            ${items}
          </div>
        </section>
      `;
    }).join("");
  }

  function renderTimelineDimensionGroups(panel) {
    return `
      <div class="dimension-detail-groups" aria-label="${escapeAttribute(panel.label)} 的 5 条属性分组">
        ${dimensionGroups.map((group) => {
          const hasEvidenceColumn = group.dimensionKeys.some((key) => {
            const entry = panel.dimensions && panel.dimensions[key];
            return entry && Array.isArray(entry.evidence) && entry.evidence.length;
          });
          return `
            <section class="dimension-detail-group dimension-group-card is-${escapeAttribute(group.key)}">
              <h3 class="dimension-group-title">${escapeHtml(group.label)}</h3>
              <table class="dimension-table${hasEvidenceColumn ? " has-evidence-column" : ""}">
                <colgroup>
                  <col class="dimension-col-name">
                  <col class="dimension-col-rank">
                  <col class="dimension-col-rank">
                  <col class="dimension-col-brief">
                  ${hasEvidenceColumn ? `<col class="dimension-col-evidence">` : ""}
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">主维度</th>
                    <th scope="col">常态</th>
                    <th scope="col">峰值</th>
                    <th scope="col">判读说明</th>
                    ${hasEvidenceColumn ? `<th scope="col">逐项证据 / 限制</th>` : ""}
                  </tr>
                </thead>
                <tbody>
                  ${group.dimensionKeys.map((key) => {
                    const dimension = dimensionByKey(key);
                    return dimension ? renderTimelineDimensionRow(panel, dimension, hasEvidenceColumn) : "";
                  }).join("")}
                </tbody>
              </table>
            </section>
          `;
        }).join("")}
      </div>
    `;
  }

  function dimensionByKey(key) {
    return dimensions.find((dimension) => dimension.key === key) || null;
  }

  function renderSourceQualityBadge(character, includeLabel = true) {
    const quality = evidenceQuality(character);
    const source = workSources[character.work] || {};
    const label = includeLabel ? "来源：" : "";
    if (quality.hasRatingEvidence && quality.hasAuthoritative && (!source.originalLanguage || quality.hasOriginalLanguage)) {
      return `<span class="badge is-source">${label}含原作/官方量级依据</span>`;
    }
    if (quality.hasRatingEvidence && quality.hasAuthoritative) return `<span class="badge is-source">${label}含官方量级依据</span>`;
    if (quality.hasRatingEvidence) return `<span class="badge is-source">${label}含量级依据</span>`;
    if (quality.hasLinks) return `<span class="badge is-warning">${label}仅入口/跨界参考</span>`;
    return `<span class="badge is-warning">${label}待补具体依据</span>`;
  }

  function hasSpecificEvidence(character) {
    return evidenceQuality(character).hasRatingEvidence;
  }

  function renderEvidenceMeta(character) {
    const evidenceTypes = character.evidenceType && character.evidenceType.length ? character.evidenceType : inferEvidenceTypes(character);
    return `
      <section class="note-block">
        <h3>评级与来源状态</h3>
        <div class="evidence-status-grid">
          <div class="evidence-status-row">
            <span class="evidence-status-label">评级口径</span>
            <div class="evidence-chip-list">
              <span class="badge${confidenceBadgeClass(character.confidence)}">${escapeHtml(confidenceLabel(character.confidence))}</span>
            </div>
          </div>
          <div class="evidence-status-row">
            <span class="evidence-status-label">依据类型</span>
            <div class="evidence-chip-list">
              ${evidenceTypes.map((item) => `<span class="badge is-source">${escapeHtml(item)}</span>`).join("")}
            </div>
          </div>
          <div class="evidence-status-row">
            <span class="evidence-status-label">来源状态</span>
            <div class="evidence-chip-list">
              ${renderSourceQualityBadge(character, false)}
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function renderAuditWarnings(character) {
    const warnings = character.auditWarnings || [];
    if (!warnings.length) return "";
    return `
      <section class="audit-warning">
        <h2>待审提示</h2>
        <ul>
          ${warnings.map((warning) => `<li>${escapeHtml(warning)}</li>`).join("")}
        </ul>
      </section>
    `;
  }

  function renderEvidenceList(items) {
    return `<ul class="evidence-list">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
  }

  function sourceKey(link) {
    const url = (link.url || "").split("#")[0].replace(/\/$/, "").toLowerCase();
    if (url) return `url:${url}`;
    return `text:${[link.type, link.scope, link.label, link.citation].filter(Boolean).join("|").toLowerCase()}`;
  }

  function uniqueSourceLinks(links, blockedKeys = new Set()) {
    const seen = new Set(blockedKeys);
    const result = [];
    for (const link of links) {
      const key = sourceKey(link);
      if (seen.has(key)) continue;
      seen.add(key);
      result.push(link);
    }
    return result;
  }

  function renderSourceItem(link) {
    return `
      <li>
        ${renderSourceLink(link)}
        ${renderSourceMeta(link)}
        ${link.citation ? `<span class="source-citation">${escapeHtml(link.citation)}</span>` : ""}
        ${link.claim ? `<span class="source-claim">${escapeHtml(link.claim)}</span>` : ""}
      </li>
    `;
  }

  function renderSourceLinks(character) {
    const evidenceLinks = character.evidenceLinks || [];
    const ratingLinks = uniqueSourceLinks(evidenceLinks.filter((link) => link.ratingEvidence));
    const ratingKeys = new Set(ratingLinks.map(sourceKey));
    const referenceLinks = uniqueSourceLinks([
      ...evidenceLinks.filter((link) => !link.ratingEvidence),
      ...(character.links || [])
    ], ratingKeys);
    return `
      <section class="note-block">
        <h3>来源</h3>
        <p class="source-help">量级依据用于支撑定级、形态、换算或高风险档位，并参与待审检查；资料入口只用于追溯角色、作品和形态资料，不单独证明高风险量级。</p>
        ${ratingLinks.length ? `
          <h4 class="source-group-title">量级依据</h4>
          <ul class="source-list source-list-block">
            ${ratingLinks.map(renderSourceItem).join("")}
          </ul>
        ` : `<p>当前仍缺少章节、集数、设定书级量级依据；可在后续 PR 中补充到 <code>evidenceLinks</code>。</p>`}
        ${referenceLinks.length ? `
          <h4 class="source-group-title">资料入口</h4>
          <ul class="source-list source-list-block">
            ${referenceLinks.map(renderSourceItem).join("")}
          </ul>
        ` : ""}
      </section>
    `;
  }

  function renderRevisionNotes(character) {
    const revisions = character.revisionNotes || [];
    if (!revisions.length) return "";
    return `
      <section class="note-block">
        <h3>定级变更记录</h3>
        <ul class="evidence-list">
          ${revisions.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </section>
    `;
  }

  function renderBattle(routeParams) {
    if (routeParams) {
      const routeSelection = applyBattleRouteParams(routeParams);
      ensureBattleRouteSelection(routeSelection);
    }
    normalizeBattleState();
    syncBattleRoute();
    const left = battleCharacterByKey(state.battle.leftKey);
    const right = battleCharacterByKey(state.battle.rightKey);
    const battleDisabledReason = battleGenerationDisabledReason();
    const submitDisabled = state.battle.loading || Boolean(battleDisabledReason);
    app.innerHTML = `
      <section class="battle-page">
        <div class="back-line"><a href="#/">← 返回角色检索</a></div>
        <header class="reference-header">
          <div>
            <h1>AI 对战演绎</h1>
            <p>选择两个角色后，由 Vercel Function 调用 LLM，根据本站 8 维常态/峰值面板、能量与续航、时间线、特殊权能、场地距离和待审提示生成对战过程。结果是 AI 演绎，不写回角色定级。</p>
          </div>
          ${renderBattleApiStatus()}
        </header>
        ${battleDisabledReason ? `
          <section class="battle-unavailable notice-block">
            <h2>AI 对战暂时关闭</h2>
            <p>${escapeHtml(battleDisabledReason)}</p>
          </section>
        ` : ""}
        <form class="battle-builder" id="battleForm">
          <div class="battle-picker-grid">
            ${renderBattlePicker("left", "角色 A", left, state.battle.leftStageKey)}
            ${renderBattlePicker("right", "角色 B", right, state.battle.rightStageKey)}
          </div>
          <div class="battle-option-grid">
            <div class="field">
              <span class="field-label">分析模式</span>
              ${renderBattleOutputStyleControl()}
            </div>
            <div class="field">
              <span class="field-label">随机条件</span>
              ${renderBattleRandomRuleControl()}
            </div>
            <div class="battle-actions">
              <button class="small-action" type="button" id="randomBattlePair" ${state.battle.loading ? "disabled" : ""}>随机角色</button>
              <button class="small-action" type="button" id="shareBattleLink" ${state.battle.loading ? "disabled" : ""}>复制链接</button>
              ${state.battle.loading ? `<button class="small-action is-danger" type="button" id="cancelBattleGeneration">取消</button>` : ""}
              <button class="small-action" type="button" id="swapBattleSides" ${state.battle.loading ? "disabled" : ""}>交换</button>
              <button class="primary-action" type="submit" ${submitDisabled ? "disabled" : ""}>${state.battle.loading ? "生成中..." : battleDisabledReason ? "AI 对战暂时关闭" : "生成对战"}</button>
            </div>
          </div>
          ${renderBattleEnvironmentControl()}
          <p class="field-hint battle-hint">公开 Beta 可只开放静态面板。恢复 AI 对战时，需要在 Vercel 配置 <code>OPENAI_API_KEY</code>，并保持 <code>BATTLE_API_DISABLED</code> 未开启；直接打开本地 HTML 时只能预览页面，不能调用 API。</p>
          ${state.battle.shareMessage ? `<p class="field-hint battle-share-status">${escapeHtml(state.battle.shareMessage)}</p>` : ""}
        </form>
        ${renderBattleComparison(left, right)}
        ${renderBattlePanelSummary(left, right)}
        ${renderBattleNotesComparison(left, right)}
        ${renderBattleResult()}
      </section>
    `;

    const form = document.getElementById("battleForm");
    form.addEventListener("change", () => {
      readBattleForm(form);
      clearBattleOutput();
      renderBattle();
    });
    form.addEventListener("input", (event) => {
      if (!event.target.name || !/^(left|right)Query$/.test(event.target.name)) return;
      readBattleForm(form);
      clearBattleOutput();
      renderBattle();
    });
    form.addEventListener("submit", handleBattleSubmit);
    document.getElementById("randomBattlePair").addEventListener("click", () => {
      setRandomBattlePair();
      clearBattleOutput();
      renderBattle();
    });
    document.getElementById("randomBattleEnvironment").addEventListener("click", () => {
      setRandomBattleEnvironment();
      clearBattleOutput();
      renderBattle();
    });
    document.getElementById("shareBattleLink").addEventListener("click", () => {
      readBattleForm(form);
      handleBattleShare();
    });
    const refreshStatus = document.getElementById("refreshBattleStatus");
    if (refreshStatus) {
      refreshStatus.addEventListener("click", () => ensureBattleApiStatus(true));
    }
    const copyResult = document.getElementById("copyBattleResult");
    if (copyResult) {
      copyResult.addEventListener("click", handleBattleResultCopy);
    }
    const cancelButton = document.getElementById("cancelBattleGeneration");
    if (cancelButton) {
      cancelButton.addEventListener("click", cancelBattleGeneration);
    }
    document.getElementById("swapBattleSides").addEventListener("click", () => {
      const nextLeftKey = state.battle.rightKey;
      const nextLeftStage = state.battle.rightStageKey;
      state.battle.rightKey = state.battle.leftKey;
      state.battle.rightStageKey = state.battle.leftStageKey;
      state.battle.leftKey = nextLeftKey;
      state.battle.leftStageKey = nextLeftStage;
      clearBattleOutput();
      renderBattle();
    });
    form.querySelectorAll("[data-battle-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        const side = button.dataset.battleToggle;
        state.battle[`${side}SearchOpen`] = !state.battle[`${side}SearchOpen`];
        renderBattle();
      });
    });
    form.querySelectorAll("[data-battle-reset]").forEach((button) => {
      button.addEventListener("click", () => {
        const side = button.dataset.battleReset;
        state.battle[`${side}Filters`] = createBattleFilters();
        clearBattleOutput();
        renderBattle();
      });
    });
    form.querySelectorAll("[data-battle-pick]").forEach((button) => {
      button.addEventListener("click", () => {
        const side = button.dataset.battlePick;
        state.battle[`${side}Key`] = button.dataset.battleKey;
        const character = battleCharacterByKey(button.dataset.battleKey);
        state.battle[`${side}StageKey`] = normalizeBattleStageKey(character, "");
        state.battle[`${side}SearchOpen`] = false;
        clearBattleOutput();
        renderBattle();
      });
    });
    ensureBattleApiStatus();
  }

  function clearBattleOutput() {
    state.battle.error = "";
    state.battle.cancelled = false;
    state.battle.streamText = "";
    state.battle.result = null;
    state.battle.model = "";
    state.battle.usage = null;
    state.battle.elapsedMs = 0;
    state.battle.statusTrail = [];
    state.battle.shareMessage = "";
    state.battle.resultMessage = "";
  }

  function renderBattleApiStatus() {
    const status = state.battle.apiStatus;
    const error = state.battle.apiStatusError;
    let label = "接口状态：检测中";
    let className = "badge";
    if (status) {
      if (status.disabled) {
        label = "接口状态：已暂停";
        className = "badge is-warning";
      } else {
        label = status.configured ? "接口状态：已配置" : "接口状态：AI 对战关闭";
        className = status.configured ? "badge is-source" : "badge is-warning";
      }
    } else if (error) {
      label = "接口状态：检测失败";
      className = "badge is-warning";
    }
    return `
      <div class="battle-api-status">
        <div class="badge-list">
          <span class="${className}">${escapeHtml(label)}</span>
          ${status && status.model ? `<span class="badge">${escapeHtml(displayModelName(status.model))}</span>` : ""}
          ${status && status.chatFallback ? `<span class="badge">Chat fallback</span>` : ""}
          ${status && status.rateLimit ? `<span class="badge">限流：${escapeHtml(formatRateLimit(status.rateLimit))}</span>` : ""}
        </div>
        <button class="small-action" type="button" id="refreshBattleStatus" ${state.battle.apiStatusLoading ? "disabled" : ""}>刷新状态</button>
      </div>
    `;
  }

  function battleGenerationDisabledReason() {
    const status = state.battle.apiStatus;
    if (status && status.disabled) return status.disabledReason || "服务端已暂停 AI 对战生成。";
    if (status && !status.configured) return "服务端未配置 OPENAI_API_KEY，公开 Beta 期间不会调用上游模型。";
    if (!status && state.battle.apiStatusError) return `无法连接 /api/battle：${state.battle.apiStatusError}`;
    if (!status) return "正在检测 /api/battle 状态，检测完成前不会发起生成。";
    return "";
  }

  async function ensureBattleApiStatus(force = false) {
    const now = Date.now();
    if (state.battle.apiStatusLoading) return;
    if (!force && state.battle.apiStatusCheckedAt && now - state.battle.apiStatusCheckedAt < 60000) return;
    state.battle.apiStatusLoading = true;
    if (force) {
      state.battle.apiStatusError = "";
      renderBattle();
    }
    try {
      const response = await fetch("/api/battle", {
        method: "GET",
        headers: { "Accept": "application/json" }
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.ok) {
        throw new Error(data.error || "接口状态检测失败。");
      }
      state.battle.apiStatus = data;
      state.battle.apiStatusError = "";
    } catch (error) {
      state.battle.apiStatus = null;
      state.battle.apiStatusError = error && error.message ? error.message : "接口状态检测失败。";
    } finally {
      state.battle.apiStatusLoading = false;
      state.battle.apiStatusCheckedAt = Date.now();
      if (location.hash.startsWith("#/battle")) renderBattle();
    }
  }

  async function handleBattleShare() {
    normalizeBattleState();
    syncBattleRoute();
    const url = battleShareUrl();
    try {
      if (!navigator.clipboard || !window.isSecureContext) {
        throw new Error("clipboard unavailable");
      }
      await navigator.clipboard.writeText(url);
      state.battle.shareMessage = "已复制当前对战链接。";
    } catch (error) {
      state.battle.shareMessage = "已把当前对战写入地址栏；当前浏览器不允许自动复制。";
    }
    renderBattle();
  }

  async function handleBattleResultCopy() {
    if (!state.battle.result) return;
    const text = formatBattleResultForCopy();
    try {
      if (!navigator.clipboard || !window.isSecureContext) {
        throw new Error("clipboard unavailable");
      }
      await navigator.clipboard.writeText(text);
      state.battle.resultMessage = "已复制对战结果。";
    } catch (error) {
      state.battle.resultMessage = "当前浏览器不允许自动复制，可手动选择结果文本。";
    }
    renderBattle();
  }

  function cancelBattleGeneration() {
    if (state.battle.abortController) {
      state.battle.abortController.abort();
    }
    state.battle.loading = false;
    state.battle.cancelled = true;
    state.battle.error = "";
    renderBattle();
  }

  function applyBattleRouteParams(params) {
    const left = params.get("left");
    const right = params.get("right");
    const leftStage = params.get("leftStage");
    const rightStage = params.get("rightStage");
    const outputStyle = params.get("style");
    if (left) state.battle.leftKey = left;
    if (right) state.battle.rightKey = right;
    if (leftStage) state.battle.leftStageKey = leftStage;
    if (rightStage) state.battle.rightStageKey = rightStage;
    if (outputStyle) state.battle.outputStyle = outputStyle;
    return {
      hasLeft: Boolean(left),
      hasRight: Boolean(right)
    };
  }

  function ensureBattleRouteSelection(routeSelection) {
    if (!characters.length || !routeSelection) return;
    const keys = battleCharacterKeys();
    const leftKey = keys.includes(state.battle.leftKey) ? state.battle.leftKey : "";
    const rightKey = keys.includes(state.battle.rightKey) ? state.battle.rightKey : "";
    const hasValidLeft = routeSelection.hasLeft && Boolean(leftKey);
    const hasValidRight = routeSelection.hasRight && Boolean(rightKey);
    if (hasValidLeft && hasValidRight) return;
    setRandomBattlePair({
      leftKey: hasValidLeft ? leftKey : "",
      rightKey: hasValidRight ? rightKey : ""
    });
  }

  function syncBattleRoute() {
    if (!location.hash.startsWith("#/battle") || !characters.length) return;
    const nextHash = battleRouteHash();
    if (location.hash === nextHash) return;
    try {
      history.replaceState(null, "", `${location.pathname}${location.search}${nextHash}`);
    } catch (error) {
      // Local file previews can reject replaceState; the page still works without URL sync.
    }
  }

  function battleRouteHash() {
    const params = new URLSearchParams();
    params.set("left", state.battle.leftKey);
    params.set("right", state.battle.rightKey);
    params.set("leftStage", state.battle.leftStageKey);
    params.set("rightStage", state.battle.rightStageKey);
    params.set("style", state.battle.outputStyle);
    return `#/battle?${params.toString()}`;
  }

  function battleShareUrl() {
    const url = new URL(window.location.href);
    url.hash = battleRouteHash();
    return url.toString();
  }

  function formatBattleResultForCopy() {
    const result = state.battle.result || {};
    const left = battleCharacterByKey(state.battle.leftKey);
    const right = battleCharacterByKey(state.battle.rightKey);
    const lines = [
      "AI 对战演绎",
      left ? `角色 A：${formatBattleFighterForCopy(left, state.battle.leftStageKey)}` : "角色 A：未选择",
      right ? `角色 B：${formatBattleFighterForCopy(right, state.battle.rightStageKey)}` : "角色 B：未选择",
      `分析模式：${battleOutputStyleLabel(state.battle.outputStyle)}`,
      `场地环境：${battleEnvironmentSummary()}`,
      state.battle.model ? `模型：${displayModelName(state.battle.model)}` : "",
      state.battle.statusTrail.length ? `路径：${state.battle.statusTrail.join(" / ")}` : "",
      state.battle.elapsedMs ? `耗时：${formatDuration(state.battle.elapsedMs)}` : "",
      usageSummary(state.battle.usage),
      "",
      `胜负：${winnerLabel(result.winner)}`,
      `置信度：${confidenceText(result.confidence)}`,
      result.summary ? `摘要：${result.summary}` : "",
      result.verdict ? `裁定：${result.verdict}` : "",
      result.panelUse ? `口径：${result.panelUse}` : "",
      result.environmentUse ? `场地影响：${result.environmentUse}` : ""
    ].filter(Boolean);
    appendBattleCopyList(lines, "关键因素", result.keyFactors);
    appendBattleCopyPhases(lines, result.phases);
    appendBattleCopyList(lines, "限制与变数", result.caveats);
    lines.push("", `链接：${battleShareUrl()}`);
    return lines.join("\n");
  }

  function formatBattleFighterForCopy(character, stageKey) {
    const panel = battlePanelFor(character, stageKey);
    return `${character.name}（${character.work} / ${panel.label}${panel.status ? ` / ${panel.status}` : ""}）`;
  }

  function renderBattleOutputStyleControl() {
    const disabled = state.battle.loading ? "disabled" : "";
    return `
      <div class="battle-style-options" role="radiogroup" aria-label="分析模式">
        ${battleOutputStyles.map((style) => `
          <label class="battle-style-option${state.battle.outputStyle === style.key ? " is-active" : ""}">
            <input type="radio" name="outputStyle" value="${escapeAttribute(style.key)}" ${state.battle.outputStyle === style.key ? "checked" : ""} ${disabled}>
            <span>${escapeHtml(style.label)}</span>
            <small>${escapeHtml(style.description)}</small>
          </label>
        `).join("")}
      </div>
    `;
  }

  function renderBattleRandomRuleControl() {
    const disabled = state.battle.loading ? "disabled" : "";
    const rules = {
      crossWork: state.battle.randomCrossWork,
      sameTier: state.battle.randomSameTier
    };
    return `
      <div class="battle-random-options" aria-label="随机条件">
        ${battleRandomRules.map((rule) => `
          <label class="battle-random-option${rules[rule.key] ? " is-active" : ""}">
            <input type="checkbox" name="random${capitalize(rule.key)}" ${rules[rule.key] ? "checked" : ""} ${disabled}>
            <span>${escapeHtml(rule.label)}</span>
            <small>${escapeHtml(rule.description)}</small>
          </label>
        `).join("")}
      </div>
      <p class="field-hint">都不选就是纯随机；两个都选则优先随机跨作品且同量级的组合。</p>
    `;
  }

  function renderBattleEnvironmentControl() {
    const disabled = state.battle.loading ? "disabled" : "";
    const environment = battleEnvironmentByKey(state.battle.environmentKey);
    const distance = battleDistanceByKey(state.battle.distanceKey);
    const intel = battleIntelPolicyByKey(state.battle.intelPolicyKey);
    return `
      <section class="battle-environment-control">
        <header>
          <div>
            <h3>场地环境</h3>
            <p>${escapeHtml(battleEnvironmentSummary())}</p>
          </div>
          <button class="small-action" type="button" id="randomBattleEnvironment" ${disabled}>随机场景</button>
        </header>
        <div class="battle-environment-grid">
          <div class="field">
            <label for="battleEnvironment">环境</label>
            <select id="battleEnvironment" name="environmentKey" ${disabled}>
              ${renderSelectOptions(battleEnvironments.map((item) => item.key), state.battle.environmentKey, "", battleEnvironmentLabels())}
            </select>
          </div>
          <div class="field">
            <label for="battleDistance">开局距离</label>
            <select id="battleDistance" name="distanceKey" ${disabled}>
              ${renderSelectOptions(battleDistances.map((item) => item.key), state.battle.distanceKey, "", battleDistanceLabels())}
            </select>
          </div>
          <div class="field">
            <label for="battleIntelPolicy">情报</label>
            <select id="battleIntelPolicy" name="intelPolicyKey" ${disabled}>
              ${renderSelectOptions(battleIntelPolicies.map((item) => item.key), state.battle.intelPolicyKey, "", battleIntelPolicyLabels())}
            </select>
          </div>
        </div>
        <div class="battle-environment-detail">
          <p><strong>${escapeHtml(environment.label)}</strong>：${escapeHtml(environment.description)}</p>
          <p><strong>${escapeHtml(distance.label)}</strong>：${escapeHtml(distance.description)}</p>
          <p><strong>${escapeHtml(intel.label)}</strong>：${escapeHtml(intel.description)}</p>
        </div>
      </section>
    `;
  }

  function battleOutputStyleLabel(value) {
    const style = battleOutputStyles.find((item) => item.key === value);
    return style ? `${style.label}：${style.description}` : "快速结论：胜负 / 胜率 / 三主因";
  }

  function battleEnvironmentLabels() {
    return Object.fromEntries(battleEnvironments.map((environment) => [environment.key, environment.label]));
  }

  function battleDistanceLabels() {
    return Object.fromEntries(battleDistances.map((distance) => [distance.key, distance.label]));
  }

  function battleIntelPolicyLabels() {
    return Object.fromEntries(battleIntelPolicies.map((policy) => [policy.key, policy.label]));
  }

  function battleEnvironmentByKey(key) {
    return battleEnvironments.find((environment) => environment.key === key) || battleEnvironments[0];
  }

  function battleDistanceByKey(key) {
    return battleDistances.find((distance) => distance.key === key) || battleDistances.find((distance) => distance.key === "standard-100m") || battleDistances[0];
  }

  function battleIntelPolicyByKey(key) {
    return battleIntelPolicies.find((policy) => policy.key === key) || battleIntelPolicies[0];
  }

  function battleEnvironmentSummary() {
    const environment = battleEnvironmentByKey(state.battle.environmentKey);
    const distance = battleDistanceByKey(state.battle.distanceKey);
    const intel = battleIntelPolicyByKey(state.battle.intelPolicyKey);
    return [environment.label, distance.label, intel.label].filter(Boolean).join(" / ");
  }

  function formatDuration(ms) {
    const seconds = Math.max(0, Number(ms) || 0) / 1000;
    if (seconds < 10) return `${seconds.toFixed(1)}s`;
    return `${Math.round(seconds)}s`;
  }

  function formatRateLimit(rateLimit) {
    const max = Number(rateLimit && rateLimit.max) || 0;
    const windowMs = Number(rateLimit && rateLimit.windowMs) || 0;
    if (max <= 0) return "关闭";
    return `${max}/${formatDuration(windowMs)}`;
  }

  function displayModelName(value) {
    const raw = String(value || "").trim();
    if (!raw) return "";
    const parts = raw.split("/").filter(Boolean);
    return parts.length ? parts[parts.length - 1] : raw;
  }

  function usageSummary(usage) {
    if (!usage || typeof usage !== "object") return "";
    const total = usage.total_tokens || usage.totalTokens;
    const input = usage.input_tokens || usage.prompt_tokens || usage.inputTokens;
    const output = usage.output_tokens || usage.completion_tokens || usage.outputTokens;
    if (total) return `Token：${total}`;
    if (input || output) return `Token：${input || 0}+${output || 0}`;
    return "";
  }

  function appendBattleCopyList(lines, title, items) {
    const values = Array.isArray(items) ? items.filter(Boolean) : [];
    if (!values.length) return;
    lines.push("", `${title}：`);
    values.forEach((item, index) => {
      lines.push(`${index + 1}. ${item}`);
    });
  }

  function appendBattleCopyPhases(lines, phases) {
    const values = Array.isArray(phases) ? phases.filter((phase) => phase && phase.text) : [];
    if (!values.length) return;
    lines.push("", "对战过程：");
    values.forEach((phase, index) => {
      lines.push(`${index + 1}. ${phase.title || `阶段 ${index + 1}`}：${phase.text}`);
    });
  }

  function renderBattlePicker(side, title, character, stageKey) {
    const filters = battleFilters(side);
    const filtered = getBattleFilteredCharacters(side);
    const activeKey = character ? battleCharacterKey(character) : "";
    const panels = character ? getTimelineEntries(character) : [];
    const disabled = state.battle.loading ? "disabled" : "";
    const isOpen = state.battle[`${side}SearchOpen`];
    return `
      <section class="battle-picker">
        <header class="battle-picker-header">
          <div>
            <h2>${escapeHtml(character ? `${title}：${character.name}` : title)}</h2>
            ${character ? `<p>${escapeHtml(character.work)}</p>` : `<p>未选择角色</p>`}
          </div>
          <button class="small-action" type="button" data-battle-toggle="${side}" ${disabled}>${isOpen ? "收起检索" : "检索角色"}</button>
        </header>
        <div class="field">
          <label for="${side}BattleStage">时间线</label>
          <select id="${side}BattleStage" name="${side}StageKey" ${disabled}>
            ${panels.map((panel) => `<option value="${escapeAttribute(panel.key)}" ${panel.key === stageKey ? "selected" : ""}>${escapeHtml(panel.label)}</option>`).join("")}
          </select>
        </div>
        <input type="hidden" name="${side}Key" value="${escapeAttribute(activeKey)}">
        ${isOpen ? `
          <div class="battle-search-panel">
            <div class="battle-search-grid">
              <div class="field">
                <label for="${side}BattleQuery">角色名字</label>
                <input id="${side}BattleQuery" name="${side}Query" type="search" placeholder="中文 / 英文 / 别名" value="${escapeAttribute(filters.query)}" autocomplete="off" ${disabled}>
              </div>
              <div class="field">
                <label for="${side}BattleWork">作品</label>
                <select id="${side}BattleWork" name="${side}Work" ${disabled}>
                  ${renderSelectOptions(["all", ...collectValues((item) => [item.work])], filters.work, "全部作品")}
                </select>
              </div>
              <div class="field">
                <label for="${side}BattleEvidence">证据状态</label>
                <select id="${side}BattleEvidence" name="${side}EvidenceStatus" ${disabled}>
                  ${renderSelectOptions(["all", "stable", "review", "disputed", "bounded", "external"], filters.evidenceStatus, "全部证据状态", {
                    stable: "稳定",
                    review: "待审 / 有警告",
                    disputed: "争议",
                    bounded: "仅下限 / 仅上限",
                    external: "外源 / 一次性 / 特殊峰值"
                  })}
                </select>
              </div>
              <div class="field">
                <label for="${side}BattleDimensionScope">8 维筛选对象</label>
                <select id="${side}BattleDimensionScope" name="${side}DimensionScope" ${disabled}>
                  ${renderSelectOptions(["any", "normal", "peak"], filters.dimensionScope, "", {
                    any: "常态或峰值",
                    normal: "仅常态",
                    peak: "仅峰值"
                  })}
                </select>
              </div>
            </div>
            <details class="battle-dimension-filter">
              <summary>8 维范围筛选</summary>
              <div class="battle-dimension-filter-grid">
                ${dimensions.map((dimension) => renderBattleDimensionFilter(side, dimension, filters)).join("")}
              </div>
            </details>
            <div class="battle-search-toolbar">
              <span>匹配 ${filtered.length} / ${characters.length}</span>
              <button class="small-action" type="button" data-battle-reset="${side}" ${disabled}>重置检索</button>
            </div>
            <div class="battle-result-list">
              ${renderBattleSearchResults(side, filtered, activeKey)}
            </div>
          </div>
        ` : ""}
      </section>
    `;
  }

  function renderBattleDimensionFilter(side, dimension, filters) {
    const scoped = filters.work === "all" ? characters : characters.filter((item) => item.work === filters.work);
    const values = collectRankValues(dimension.key, scoped, filters.dimensionScope);
    const filter = normalizeDimensionFilter(dimension.key, filters.dimensionFilters[dimension.key], values);
    filters.dimensionFilters[dimension.key] = filter;
    const disabled = state.battle.loading ? "disabled" : "";
    return `
      <div class="field dimension-range-field">
        <label>${escapeHtml(dimension.label)}</label>
        <div class="range-selects">
          <div class="range-control">
            <span>下限</span>
            <select name="${side}${capitalize(dimension.key)}Min" aria-label="${escapeAttribute(dimension.label)}下限" ${disabled}>
              ${renderSelectOptions(["all", ...values], filter.min, "不限下限")}
            </select>
          </div>
          <div class="range-control">
            <span>上限</span>
            <select name="${side}${capitalize(dimension.key)}Max" aria-label="${escapeAttribute(dimension.label)}上限" ${disabled}>
              ${renderSelectOptions(["all", ...values], filter.max, "不限上限")}
            </select>
          </div>
        </div>
      </div>
    `;
  }

  function renderBattleSearchResults(side, filtered, activeKey) {
    if (!filtered.length) {
      return `<p class="muted-copy">没有匹配角色。</p>`;
    }
    return filtered.slice(0, 30).map((character) => {
      const key = battleCharacterKey(character);
      const active = key === activeKey;
      return `
        <button class="battle-character-option${active ? " is-active" : ""}" type="button" data-battle-pick="${side}" data-battle-key="${escapeAttribute(key)}" ${state.battle.loading ? "disabled" : ""}>
          <span>
            <strong>${escapeHtml(character.name)}</strong>
            <small>${escapeHtml(character.work)} · ${escapeHtml(character.affiliation || "未标注所属")}</small>
          </span>
          <span class="badge${confidenceBadgeClass(character.confidence)}">${escapeHtml(confidenceLabel(character.confidence))}</span>
        </button>
      `;
    }).join("");
  }

  function getBattleFilteredCharacters(side) {
    const filters = battleFilters(side);
    const query = normalize(filters.query);
    return characters
      .filter((item) => {
        const haystack = normalize([item.name, item.en, item.ja, item.timelineStatus, ...(item.aliases || [])].join(" "));
        if (query && !haystack.includes(query)) return false;
        if (filters.work !== "all" && item.work !== filters.work) return false;
        if (!matchesEvidenceStatus(item, filters.evidenceStatus)) return false;
        return dimensions.every((dimension) => {
          const filter = filters.dimensionFilters[dimension.key];
          if (!filter || (filter.min === "all" && filter.max === "all")) return true;
          const entry = item.dimensions[dimension.key];
          return matchesDimensionRange(dimension.key, entry, filter, filters.dimensionScope);
        });
      })
      .sort(sortCharacters);
  }

  function renderBattleComparison(left, right) {
    if (!left || !right) {
      return `
        <section class="battle-comparison">
          <h2>面板对照</h2>
          <p class="muted-copy">暂无可对照角色。</p>
        </section>
      `;
    }
    const leftPanel = battlePanelFor(left, state.battle.leftStageKey);
    const rightPanel = battlePanelFor(right, state.battle.rightStageKey);
    return `
      <section class="battle-comparison">
        <header>
          <div>
            <h2>面板对照</h2>
            <p>纵向按五条属性分组对照，内部仍保留 8 维常态/峰值。</p>
          </div>
          <div class="battle-fighter-summary">
            ${renderBattleFighterSummary("A", left, leftPanel)}
            ${renderBattleFighterSummary("B", right, rightPanel)}
          </div>
        </header>
        <div class="battle-compare-grid" aria-label="角色 A 与角色 B 的属性对照">
          ${dimensionGroups.map((group) => renderBattleComparisonGroup(group, leftPanel, rightPanel)).join("")}
        </div>
      </section>
    `;
  }

  function renderBattleFighterSummary(sideLabel, character, panel) {
    return `
      <section>
        <strong>${escapeHtml(sideLabel)}：${escapeHtml(character.name)}</strong>
        <span>${escapeHtml(character.work)} / ${escapeHtml(panel.label)}${panel.status ? ` / ${escapeHtml(panel.status)}` : ""}</span>
      </section>
    `;
  }

  function renderBattleComparisonGroup(group, leftPanel, rightPanel) {
    return `
      <section class="battle-compare-group dimension-group-card is-${escapeAttribute(group.key)}">
        <h3 class="dimension-group-title">${escapeHtml(group.label)}</h3>
        <div class="battle-compare-head">
          <span>主维度</span>
          <span>角色 A</span>
          <span>角色 B</span>
        </div>
        <div class="battle-compare-rows">
          ${group.dimensionKeys.map((key) => {
            const dimension = dimensionByKey(key);
            const leftEntry = leftPanel.dimensions[key];
            const rightEntry = rightPanel.dimensions[key];
            return dimension ? renderBattleComparisonRow(dimension, leftEntry, rightEntry) : "";
          }).join("")}
        </div>
      </section>
    `;
  }

  function renderBattleComparisonRow(dimension, leftEntry, rightEntry) {
    const comparison = compareDimensionEntries(dimension.key, leftEntry, rightEntry);
    return `
      <div class="battle-compare-row">
        <div class="battle-compare-dimension">
          <strong>${escapeHtml(dimension.label)}</strong>
          ${renderBattleAdvantageBadge(comparison)}
        </div>
        <div class="battle-compare-value${comparison.side === "left" ? " is-advantage" : ""}">
          ${renderBattleDimensionValue(leftEntry)}
        </div>
        <div class="battle-compare-value${comparison.side === "right" ? " is-advantage" : ""}">
          ${renderBattleDimensionValue(rightEntry)}
        </div>
      </div>
    `;
  }

  function renderBattleDimensionValue(entry) {
    if (!entry) return `<span class="muted-copy">无资料</span>`;
    return `
      <span><em>常态</em>【${escapeHtml(entry.normal)}】</span>
      <span><em>峰值</em>【${escapeHtml(entry.peak)}】</span>
    `;
  }

  function renderBattleAdvantageBadge(comparison) {
    if (comparison.side === "unknown") return `<span class="badge">不可比</span>`;
    if (comparison.side === "tie") return `<span class="badge">接近</span>`;
    const label = comparison.side === "left" ? "A" : "B";
    return `<span class="badge is-source">${escapeHtml(label)} ${escapeHtml(comparison.stage)}高 ${comparison.delta} 档</span>`;
  }

  function renderBattlePanelSummary(left, right) {
    if (!left || !right) return "";
    const leftPanel = battlePanelFor(left, state.battle.leftStageKey);
    const rightPanel = battlePanelFor(right, state.battle.rightStageKey);
    return `
      <section class="battle-local-summary">
        <header>
          <h2>面板差异</h2>
          <p>本地按同维度档位粗略对照，不调用模型，也不替代最终裁定。</p>
        </header>
        <ul>
          ${dimensionGroups.map((group) => `
            <li>
              <strong>${escapeHtml(group.label)}</strong>
              <span>${group.dimensionKeys.map((key) => summarizeBattleDimension(key, leftPanel, rightPanel)).filter(Boolean).join("；")}</span>
            </li>
          `).join("")}
        </ul>
      </section>
    `;
  }

  function summarizeBattleDimension(key, leftPanel, rightPanel) {
    const dimension = dimensionByKey(key);
    if (!dimension) return "";
    const comparison = compareDimensionEntries(key, leftPanel.dimensions[key], rightPanel.dimensions[key]);
    if (comparison.side === "unknown") return `${dimension.label}不可比`;
    if (comparison.side === "tie") return `${dimension.label}接近`;
    const label = comparison.side === "left" ? "A" : "B";
    return `${dimension.label}${comparison.stage}${label}高${comparison.delta}档`;
  }

  function renderBattleNotesComparison(left, right) {
    if (!left || !right) return "";
    const noteRows = [
      ["攻击性质", "penetration"],
      ["防御抗性", "resistance"],
      ["特殊权能", "special"],
      ["短板", "weakness"]
    ];
    return `
      <section class="battle-notes-comparison">
        <header>
          <h2>机制对照</h2>
          <p>完整说明默认折叠，展开后左右对照。</p>
        </header>
        <div class="battle-note-compare-list">
          ${noteRows.map(([title, key]) => renderBattleNoteComparison(title, key, left, right)).join("")}
        </div>
      </section>
    `;
  }

  function renderBattleNoteComparison(title, key, left, right) {
    const leftNotes = left.notes || {};
    const rightNotes = right.notes || {};
    return `
      <details class="battle-note-compare">
        <summary>${escapeHtml(title)}</summary>
        <div class="battle-note-compare-grid">
          <section>
            <strong>角色 A：${escapeHtml(left.name)}</strong>
            <p>${escapeHtml(leftNotes[key] || "未补充。")}</p>
          </section>
          <section>
            <strong>角色 B：${escapeHtml(right.name)}</strong>
            <p>${escapeHtml(rightNotes[key] || "未补充。")}</p>
          </section>
        </div>
      </details>
    `;
  }

  function compareDimensionEntries(key, leftEntry, rightEntry) {
    const peak = compareRankValues(key, leftEntry && leftEntry.peak, rightEntry && rightEntry.peak);
    if (peak.side === "left" || peak.side === "right") return { ...peak, stage: "峰值" };
    const normal = compareRankValues(key, leftEntry && leftEntry.normal, rightEntry && rightEntry.normal);
    if (normal.side === "left" || normal.side === "right") return { ...normal, stage: "常态" };
    if (peak.side === "tie" || normal.side === "tie") return { side: "tie", delta: 0, stage: "" };
    return { side: "unknown", delta: 0, stage: "" };
  }

  function compareRankValues(key, leftValue, rightValue) {
    const order = rankOrders[key] || [];
    const leftIndex = order.indexOf(baseRank(leftValue));
    const rightIndex = order.indexOf(baseRank(rightValue));
    if (!order.length || leftIndex < 0 || rightIndex < 0) return { side: "unknown", delta: 0 };
    const delta = leftIndex - rightIndex;
    if (delta > 0) return { side: "left", delta };
    if (delta < 0) return { side: "right", delta: Math.abs(delta) };
    return { side: "tie", delta: 0 };
  }

  function renderBattleResult() {
    if (state.battle.loading) {
      return `
        <section class="battle-result is-loading">
          <h2>正在生成</h2>
          <p>正在流式调用 <code>/api/battle</code>，页面会在模型开始输出后持续接收片段。</p>
          ${state.battle.model ? `<p class="battle-stream-meta">模型：${escapeHtml(displayModelName(state.battle.model))}</p>` : ""}
          ${state.battle.statusTrail.length ? `<p class="battle-stream-meta">路径：${state.battle.statusTrail.map(escapeHtml).join(" / ")}</p>` : ""}
          ${state.battle.streamText ? `<pre class="battle-stream-preview">${escapeHtml(trimStreamPreview(state.battle.streamText))}</pre>` : ""}
        </section>
      `;
    }
    if (state.battle.error) {
      return `
        <section class="battle-result is-error">
          <h2>生成失败</h2>
          <p>${escapeHtml(state.battle.error)}</p>
        </section>
      `;
    }
    if (state.battle.cancelled) {
      return `
        <section class="battle-result is-cancelled">
          <h2>已取消生成</h2>
          <p>本次请求已在前端中止，没有写入任何角色定级。</p>
          ${state.battle.streamText ? `<pre class="battle-stream-preview">${escapeHtml(trimStreamPreview(state.battle.streamText))}</pre>` : ""}
        </section>
      `;
    }
    const result = state.battle.result;
    if (!result) {
      const disabledReason = battleGenerationDisabledReason();
      if (disabledReason) {
        return `
          <section class="battle-result">
            <h2>AI 对战暂时关闭</h2>
            <p>${escapeHtml(disabledReason)}</p>
          </section>
        `;
      }
      return `
        <section class="battle-result">
          <h2>等待生成</h2>
          <p>选择角色后点击“生成对战”。公开站点请留意调用成本，后续可继续加限流或登录保护。</p>
        </section>
      `;
    }
    return `
      <section class="battle-result">
        <header>
          <div>
            <h2>${escapeHtml(winnerLabel(result.winner))}</h2>
            <p>${escapeHtml(result.summary)}</p>
          </div>
          <div class="battle-result-tools">
            <div class="badge-list">
              <span class="badge">置信度：${escapeHtml(confidenceText(result.confidence))}</span>
              ${state.battle.model ? `<span class="badge is-source">${escapeHtml(displayModelName(state.battle.model))}</span>` : ""}
              ${state.battle.statusTrail.length ? `<span class="badge">路径：${escapeHtml(state.battle.statusTrail.join(" / "))}</span>` : ""}
              ${state.battle.elapsedMs ? `<span class="badge">耗时：${escapeHtml(formatDuration(state.battle.elapsedMs))}</span>` : ""}
              ${usageSummary(state.battle.usage) ? `<span class="badge">${escapeHtml(usageSummary(state.battle.usage))}</span>` : ""}
            </div>
            <button class="small-action" type="button" id="copyBattleResult">复制结果</button>
          </div>
        </header>
        ${state.battle.resultMessage ? `<p class="battle-share-status">${escapeHtml(state.battle.resultMessage)}</p>` : ""}
        <div class="battle-verdict">${escapeHtml(result.verdict)}</div>
        <section class="battle-result-block">
          <h3>口径</h3>
          <p>${escapeHtml(result.panelUse)}</p>
        </section>
        ${result.environmentUse ? `
          <section class="battle-result-block">
            <h3>场地影响</h3>
            <p>${escapeHtml(result.environmentUse)}</p>
          </section>
        ` : ""}
        <section class="battle-result-block">
          <h3>关键因素</h3>
          <ul>${(result.keyFactors || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </section>
        <section class="battle-result-block">
          <h3>对战过程</h3>
          <div class="battle-phase-list">
            ${(result.phases || []).map((phase) => `
              <article>
                <h4>${escapeHtml(phase.title)}</h4>
                <p>${escapeHtml(phase.text)}</p>
              </article>
            `).join("")}
          </div>
        </section>
        <section class="battle-result-block">
          <h3>限制与变数</h3>
          <ul>${(result.caveats || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </section>
      </section>
    `;
  }

  async function handleBattleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (state.battle.loading) return;
    readBattleForm(form);
    const disabledReason = battleGenerationDisabledReason();
    if (disabledReason) {
      clearBattleOutput();
      state.battle.error = disabledReason;
      renderBattle();
      return;
    }
    const validationError = validateBattleSelection();
    if (validationError) {
      clearBattleOutput();
      state.battle.error = validationError;
      renderBattle();
      return;
    }
    const controller = new AbortController();
    const startedAt = Date.now();
    state.battle.loading = true;
    state.battle.abortController = controller;
    clearBattleOutput();
    renderBattle();
    try {
      const response = await fetch("/api/battle", {
        method: "POST",
        headers: {
          "Accept": "text/event-stream",
          "Content-Type": "application/json"
        },
        signal: controller.signal,
        body: JSON.stringify(buildBattlePayload())
      });
      if (isBattleStream(response)) {
        await readBattleEventStream(response);
      } else {
        const data = await response.json().catch(() => ({}));
        if (!response.ok || !data.ok) {
          throw new Error(data.error || "对战 API 调用失败。");
        }
        state.battle.result = data.result;
        state.battle.model = data.model || "";
        state.battle.usage = data.usage || null;
        state.battle.elapsedMs = Date.now() - startedAt;
      }
    } catch (error) {
      if (state.battle.abortController !== controller) {
        return;
      }
      state.battle.elapsedMs = Date.now() - startedAt;
      if (error && error.name === "AbortError") {
        state.battle.cancelled = true;
        state.battle.error = "";
      } else {
        state.battle.cancelled = false;
        state.battle.error = error && error.message ? error.message : "对战生成失败。";
      }
    } finally {
      if (state.battle.abortController === controller) {
        state.battle.abortController = null;
        state.battle.loading = false;
        renderBattle();
      }
    }
  }

  function validateBattleSelection() {
    const left = battleCharacterByKey(state.battle.leftKey);
    const right = battleCharacterByKey(state.battle.rightKey);
    if (!left || !right) return "请选择两个角色。";
    const leftStage = normalizeBattleStageKey(left, state.battle.leftStageKey);
    const rightStage = normalizeBattleStageKey(right, state.battle.rightStageKey);
    if (state.battle.leftKey === state.battle.rightKey && leftStage === rightStage) {
      return "请选择两个不同角色，或切换同一角色的不同时期。";
    }
    return "";
  }

  function isBattleStream(response) {
    const contentType = response.headers.get("content-type") || "";
    return Boolean(response.body) && contentType.includes("text/event-stream");
  }

  async function readBattleEventStream(response) {
    if (!response.ok) {
      throw new Error("对战 API 调用失败。");
    }
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const parts = buffer.split(/\r?\n\r?\n/);
      buffer = parts.pop() || "";
      for (const part of parts) {
        handleBattleStreamEvent(parseBattleStreamEvent(part));
      }
    }
    buffer += decoder.decode();
    if (buffer.trim()) handleBattleStreamEvent(parseBattleStreamEvent(buffer));
    if (!state.battle.result && !state.battle.error) {
      throw new Error("对战 API 流式响应提前结束。");
    }
  }

  function parseBattleStreamEvent(part) {
    let event = "message";
    const data = [];
    part.split(/\r?\n/).forEach((line) => {
      if (!line || line.startsWith(":")) return;
      const separator = line.indexOf(":");
      const field = separator >= 0 ? line.slice(0, separator) : line;
      const value = separator >= 0 ? line.slice(separator + 1).replace(/^ /, "") : "";
      if (field === "event") event = value;
      if (field === "data") data.push(value);
    });
    if (!data.length) return null;
    return { event, data: JSON.parse(data.join("\n")) };
  }

  function handleBattleStreamEvent(item) {
    if (!item) return;
    const data = item.data || {};
    if (item.event === "meta") {
      state.battle.model = data.model || state.battle.model;
      renderBattle();
      return;
    }
    if (item.event === "status") {
      addBattleStatus(data.message);
      renderBattle();
      return;
    }
    if (item.event === "delta") {
      state.battle.streamText += data.delta || "";
      renderBattle();
      return;
    }
    if (item.event === "done") {
      state.battle.result = data.result || null;
      state.battle.model = data.model || state.battle.model;
      state.battle.usage = data.usage || null;
      state.battle.elapsedMs = data.elapsedMs || state.battle.elapsedMs;
      state.battle.loading = false;
      renderBattle();
      return;
    }
    if (item.event === "error") {
      throw new Error(data.error || "对战生成失败。");
    }
  }

  function addBattleStatus(message) {
    const label = battleStatusLabel(message);
    if (!label || state.battle.statusTrail.includes(label)) return;
    state.battle.statusTrail.push(label);
  }

  function battleStatusLabel(message) {
    if (message === "upstream_connected") return "Responses 已连接";
    if (message === "fallback_chat_completions") return "Chat fallback";
    return cleanInlineLabel(message);
  }

  function cleanInlineLabel(value) {
    return String(value || "").replace(/[_-]+/g, " ").replace(/\s+/g, " ").trim().slice(0, 80);
  }

  function trimStreamPreview(text) {
    const value = String(text || "");
    return value.length > 1800 ? `...${value.slice(-1800)}` : value;
  }

  function readBattleForm(form) {
    state.battle.leftKey = form.querySelector("[name='leftKey']").value;
    state.battle.rightKey = form.querySelector("[name='rightKey']").value;
    state.battle.leftStageKey = form.querySelector("[name='leftStageKey']").value;
    state.battle.rightStageKey = form.querySelector("[name='rightStageKey']").value;
    readBattleFilters(form, "left");
    readBattleFilters(form, "right");
    const outputStyle = form.querySelector("[name='outputStyle']:checked") || form.querySelector("[name='outputStyle']");
    state.battle.outputStyle = outputStyle ? outputStyle.value : state.battle.outputStyle;
    state.battle.randomCrossWork = readOptionalChecked(form, "randomCrossWork", state.battle.randomCrossWork);
    state.battle.randomSameTier = readOptionalChecked(form, "randomSameTier", state.battle.randomSameTier);
    state.battle.environmentKey = readOptionalFormValue(form, "environmentKey", state.battle.environmentKey);
    state.battle.distanceKey = readOptionalFormValue(form, "distanceKey", state.battle.distanceKey);
    state.battle.intelPolicyKey = readOptionalFormValue(form, "intelPolicyKey", state.battle.intelPolicyKey);
    normalizeBattleState();
  }

  function readBattleFilters(form, side) {
    const filters = battleFilters(side);
    filters.query = readOptionalFormValue(form, `${side}Query`, filters.query).trim();
    filters.work = readOptionalFormValue(form, `${side}Work`, filters.work);
    filters.evidenceStatus = readOptionalFormValue(form, `${side}EvidenceStatus`, filters.evidenceStatus);
    filters.dimensionScope = readOptionalFormValue(form, `${side}DimensionScope`, filters.dimensionScope);
    dimensions.forEach((dimension) => {
      const filter = normalizeDimensionFilter(dimension.key, {
        min: readOptionalFormValue(form, `${side}${capitalize(dimension.key)}Min`, filters.dimensionFilters[dimension.key].min),
        max: readOptionalFormValue(form, `${side}${capitalize(dimension.key)}Max`, filters.dimensionFilters[dimension.key].max)
      });
      filters.dimensionFilters[dimension.key] = filter;
    });
  }

  function readOptionalFormValue(form, name, fallback) {
    const element = form.querySelector(`[name='${name}']`);
    return element ? element.value : fallback;
  }

  function readOptionalChecked(form, name, fallback) {
    const element = form.querySelector(`[name='${name}']`);
    return element ? element.checked === true : fallback;
  }

  function normalizeBattleState() {
    if (!characters.length) return;
    const keys = battleCharacterKeys();
    normalizeBattleFilters("left");
    normalizeBattleFilters("right");
    if (!keys.includes(state.battle.leftKey)) state.battle.leftKey = keys[0];
    if (!keys.includes(state.battle.rightKey)) state.battle.rightKey = keys[1] || keys[0];
    const left = battleCharacterByKey(state.battle.leftKey);
    const right = battleCharacterByKey(state.battle.rightKey);
    state.battle.leftStageKey = normalizeBattleStageKey(left, state.battle.leftStageKey);
    state.battle.rightStageKey = normalizeBattleStageKey(right, state.battle.rightStageKey);
    if (!["verdict", "analysis", "narrative"].includes(state.battle.outputStyle)) state.battle.outputStyle = "verdict";
    state.battle.randomCrossWork = state.battle.randomCrossWork === true;
    state.battle.randomSameTier = state.battle.randomSameTier === true;
    state.battle.environmentKey = normalizeBattleEnvironmentKey(state.battle.environmentKey);
    state.battle.distanceKey = normalizeBattleDistanceKey(state.battle.distanceKey);
    state.battle.intelPolicyKey = normalizeBattleIntelPolicyKey(state.battle.intelPolicyKey);
  }

  function normalizeBattleFilters(side) {
    const filters = battleFilters(side);
    const works = collectValues((item) => [item.work]);
    if (filters.work !== "all" && !works.includes(filters.work)) filters.work = "all";
    if (!["all", "stable", "review", "disputed", "bounded", "external"].includes(filters.evidenceStatus)) filters.evidenceStatus = "all";
    if (!["any", "normal", "peak"].includes(filters.dimensionScope)) filters.dimensionScope = "any";
    const scoped = filters.work === "all" ? characters : characters.filter((item) => item.work === filters.work);
    dimensions.forEach((dimension) => {
      const values = collectRankValues(dimension.key, scoped, filters.dimensionScope);
      filters.dimensionFilters[dimension.key] = normalizeDimensionFilter(dimension.key, filters.dimensionFilters[dimension.key], values);
    });
  }

  function battleFilters(side) {
    const key = `${side}Filters`;
    if (!state.battle[key]) state.battle[key] = createBattleFilters();
    return state.battle[key];
  }

  function normalizeBattleStageKey(character, stageKey) {
    if (!character) return "";
    const panels = getTimelineEntries(character);
    if (panels.some((panel) => panel.key === stageKey)) return stageKey;
    return panels[resolveTimelineIndex(panels, "", character.defaultTimelineKey)].key;
  }

  function battleCharacterByKey(key) {
    return characters.find((character) => battleCharacterKey(character) === key) || null;
  }

  function battleCharacterKeys() {
    return characters.map(battleCharacterKey);
  }

  function battleCharacterKey(character) {
    return `${character.workSlug || workSlugForName(character.work) || character.work}::${character.id}`;
  }

  function setRandomBattlePair(selection = {}) {
    const keys = battleCharacterKeys();
    if (!keys.length) return;
    const constraints = normalizeBattleRandomConstraints(selection.constraints || {
      crossWork: state.battle.randomCrossWork,
      sameTier: state.battle.randomSameTier
    });
    const fixedLeft = selection.leftKey && keys.includes(selection.leftKey) ? selection.leftKey : "";
    const fixedRight = selection.rightKey && keys.includes(selection.rightKey) ? selection.rightKey : "";
    let leftKey = fixedLeft;
    let rightKey = fixedRight;
    if (!leftKey && !rightKey) {
      leftKey = randomBattleCharacterKey(keys);
      rightKey = randomBattleCharacterKey(battleRandomCandidateKeys(keys, leftKey, constraints), leftKey);
    } else if (!leftKey) {
      leftKey = randomBattleCharacterKey(battleRandomCandidateKeys(keys, rightKey, constraints), rightKey);
    } else if (!rightKey) {
      rightKey = randomBattleCharacterKey(battleRandomCandidateKeys(keys, leftKey, constraints), leftKey);
    }
    if (leftKey === rightKey && keys.length > 1) {
      rightKey = randomBattleCharacterKey(keys, leftKey);
    }
    state.battle.leftKey = leftKey;
    state.battle.rightKey = rightKey;
    state.battle.leftStageKey = normalizeBattleStageKey(battleCharacterByKey(leftKey), "");
    state.battle.rightStageKey = normalizeBattleStageKey(battleCharacterByKey(rightKey), "");
  }

  function randomBattleCharacterKey(keys, excludedKey = "") {
    const pool = keys.filter((key) => key !== excludedKey);
    const candidates = pool.length ? pool : keys;
    return candidates[Math.floor(Math.random() * candidates.length)] || "";
  }

  function battleRandomCandidateKeys(keys, anchorKey, constraints) {
    const anchor = battleCharacterByKey(anchorKey);
    if (!anchor) return keys;
    const normalized = normalizeBattleRandomConstraints(constraints);
    const attempts = [
      normalized,
      normalized.crossWork && normalized.sameTier ? { crossWork: true, sameTier: false } : null,
      normalized.crossWork && normalized.sameTier ? { crossWork: false, sameTier: true } : null,
      { crossWork: false, sameTier: false }
    ].filter(Boolean);
    for (const attempt of attempts) {
      const candidates = keys.filter((key) => matchesBattleRandomConstraints(key, anchor, anchorKey, attempt));
      if (candidates.length) return candidates;
    }
    return keys.filter((key) => key !== anchorKey);
  }

  function matchesBattleRandomConstraints(key, anchor, anchorKey, constraints) {
    if (key === anchorKey) return false;
    const character = battleCharacterByKey(key);
    if (!character) return false;
    if (constraints.crossWork && character.work === anchor.work) return false;
    if (constraints.sameTier) {
      const anchorScore = battleTierScore(anchor);
      const score = battleTierScore(character);
      if (!Number.isFinite(score) || !Number.isFinite(anchorScore) || Math.abs(score - anchorScore) > 0.16) return false;
    }
    return true;
  }

  function battleTierScore(character) {
    const keys = ["attack", "defense", "movement", "reaction", "vitality", "healing", "energy", "energyRegen"];
    const values = keys.map((key) => {
      const order = rankOrders[key] || [];
      const rank = character.dimensions && character.dimensions[key] ? baseRank(character.dimensions[key].peak) : "";
      const index = order.indexOf(rank);
      return order.length > 1 && index >= 0 ? index / (order.length - 1) : null;
    }).filter((value) => value !== null);
    if (!values.length) return Number.NaN;
    return values.reduce((sum, value) => sum + value, 0) / values.length;
  }

  function normalizeBattleRandomConstraints(value) {
    const constraints = value && typeof value === "object" ? value : {};
    return {
      crossWork: constraints.crossWork === true,
      sameTier: constraints.sameTier === true
    };
  }

  function setRandomBattleEnvironment() {
    state.battle.environmentKey = randomFromList(battleEnvironments).key;
    state.battle.distanceKey = randomFromList(battleDistances).key;
    state.battle.intelPolicyKey = randomFromList(battleIntelPolicies).key;
  }

  function randomFromList(items) {
    return items[Math.floor(Math.random() * items.length)] || items[0];
  }

  function normalizeBattleEnvironmentKey(value) {
    return battleEnvironments.some((environment) => environment.key === value) ? value : "standard-arena";
  }

  function normalizeBattleDistanceKey(value) {
    return battleDistances.some((distance) => distance.key === value) ? value : "standard-100m";
  }

  function normalizeBattleIntelPolicyKey(value) {
    return battleIntelPolicies.some((policy) => policy.key === value) ? value : "encounter";
  }

  function battlePanelFor(character, stageKey) {
    const panels = getTimelineEntries(character);
    return panels[resolveTimelineIndex(panels, stageKey, character.defaultTimelineKey)];
  }

  function buildBattlePayload() {
    const left = battleCharacterByKey(state.battle.leftKey);
    const right = battleCharacterByKey(state.battle.rightKey);
    if (!left || !right) throw new Error("请选择两个角色。");
    return {
      left: buildBattleFighterPayload(left, state.battle.leftStageKey),
      right: buildBattleFighterPayload(right, state.battle.rightStageKey),
      options: {
        outputStyle: state.battle.outputStyle,
        environment: buildBattleEnvironmentPayload()
      }
    };
  }

  function buildBattleEnvironmentPayload() {
    const environment = battleEnvironmentByKey(state.battle.environmentKey);
    const distance = battleDistanceByKey(state.battle.distanceKey);
    const intel = battleIntelPolicyByKey(state.battle.intelPolicyKey);
    return {
      key: environment.key,
      label: environment.label,
      description: environment.description,
      distanceKey: distance.key,
      distanceLabel: distance.label,
      distanceDescription: distance.description,
      intelPolicyKey: intel.key,
      intelPolicyLabel: intel.label,
      intelPolicyDescription: intel.description
    };
  }

  function buildBattleFighterPayload(character, stageKey) {
    const panel = battlePanelFor(character, stageKey);
    return {
      id: character.id,
      name: character.name,
      en: character.en || "",
      ja: character.ja || "",
      work: character.work,
      affiliation: character.affiliation || "",
      grade: character.grade || "",
      confidence: character.confidence || "",
      evidenceType: character.evidenceType || [],
      auditWarnings: character.auditWarnings || [],
      stage: {
        key: panel.key,
        label: panel.label,
        status: panel.status || "",
        notes: panel.notes || "",
        dimensions: panel.dimensions
      },
      notes: buildBattleNotesPayload(character, panel),
      evidenceLinks: (character.evidenceLinks || []).map((link) => ({
        type: link.type || "",
        label: link.label || "",
        claim: link.claim || "",
        citation: link.citation || "",
        ratingEvidence: link.ratingEvidence === true
      }))
    };
  }

  function buildBattleNotesPayload(character, panel) {
    const notes = character.notes || {};
    return {
      penetration: notes.penetration || "未补充攻击性质。",
      resistance: notes.resistance || "未补充防御抗性。",
      special: notes.special || "未补充特殊权能。",
      weakness: notes.weakness || "未补充角色短板。",
      setting: notes.setting || "未补充设定/旁白。",
      basis: notes.basis || "未补充评级依据。",
      timeline: [panel.label, panel.status, panel.notes].filter(Boolean).join(" / ")
    };
  }

  function winnerLabel(value) {
    const labels = {
      left: "角色 A 优势",
      right: "角色 B 优势",
      draw: "接近平局",
      unclear: "无法稳定裁定"
    };
    return labels[value] || "无法稳定裁定";
  }

  function confidenceText(value) {
    const labels = {
      low: "低",
      medium: "中",
      high: "高"
    };
    return labels[value] || "中";
  }

  function renderAudit() {
    const audited = characters.filter((character) => auditFindings(character).length);
    const filtered = audited.filter(matchesAuditFilters);
    const byWork = groupBy(filtered, (character) => character.work);
    const auditWorks = ["all", ...collectValues((character) => [character.work], audited)];
    app.innerHTML = `
      <section class="audit-page">
        <div class="back-line"><a href="#/">← 返回角色检索</a></div>
        <header class="reference-header">
          <div>
            <h1>证据审计</h1>
            <p>集中列出高风险量级、争议峰值或待补章节/集数/设定书级来源的角色，方便社区 PR 逐项补证据。</p>
          </div>
          <span class="badge is-warning">待审 ${audited.length}</span>
        </header>
        <form class="audit-filter-bar" id="auditFilterForm">
          <div class="field">
            <label for="auditWorkFilter">作品</label>
            <select id="auditWorkFilter" name="auditWork">
              ${renderSelectOptions(auditWorks, state.auditWork, "全部作品")}
            </select>
          </div>
          <div class="field">
            <label for="auditEvidenceFilter">来源质量</label>
            <select id="auditEvidenceFilter" name="auditEvidence">
              ${renderSelectOptions(["all", "needs-specific", "entry-only", "missing", "specific"], state.auditEvidence, "全部来源状态", {
                "needs-specific": "缺直接量级证据",
                "entry-only": "仅入口/非量级来源",
                missing: "缺 evidenceLinks",
                specific: "已有量级证据"
              })}
            </select>
          </div>
          <div class="field">
            <label for="auditAuthorityFilter">来源权威</label>
            <select id="auditAuthorityFilter" name="auditAuthority">
              ${renderSelectOptions(["all", "needs-rating", "needs-authoritative", "needs-original", "reference-only", "authoritative"], state.auditAuthority, "全部权威状态", {
                "needs-rating": "缺直接量级证据",
                "needs-authoritative": "缺原作/官方来源",
                "needs-original": "缺原作语言来源",
                "reference-only": "仅入口/跨界参考",
                authoritative: "已有权威量级来源"
              })}
            </select>
          </div>
          <span class="muted-line">当前显示 ${filtered.length} / ${audited.length} 个待审角色</span>
        </form>
        ${filtered.length ? Object.entries(byWork).map(([work, items]) => `
          <section class="audit-work-section">
            <header>
              <h2><a href="${escapeAttribute(workHref(work))}">${escapeHtml(work)}</a></h2>
              <span>${items.length} 个待审角色</span>
            </header>
            <div class="audit-list">
              ${items.map((character) => renderAuditRow(character)).join("")}
            </div>
          </section>
        `).join("") : `
          <section class="empty-state">
            <h2>没有符合筛选的待审条目</h2>
            <p>当前筛选条件下没有角色触发证据审计结果。</p>
          </section>
        `}
      </section>
    `;
    const form = document.getElementById("auditFilterForm");
    form.addEventListener("change", () => {
      state.auditWork = form.querySelector("[name='auditWork']").value;
      state.auditEvidence = form.querySelector("[name='auditEvidence']").value;
      state.auditAuthority = form.querySelector("[name='auditAuthority']").value;
      renderAudit();
    });
  }

  function renderSelectOptions(values, selected, allLabel, labels = {}) {
    return values.map((value) => {
      const label = value === "all" ? allLabel : labels[value] || value;
      return `<option value="${escapeAttribute(value)}" ${value === selected ? "selected" : ""}>${escapeHtml(label)}</option>`;
    }).join("");
  }

  function matchesAuditFilters(character) {
    if (state.auditWork !== "all" && character.work !== state.auditWork) return false;
    const quality = evidenceQuality(character);
    if (state.auditEvidence !== "all") {
      if (state.auditEvidence === "needs-specific" && quality.hasSpecific) return false;
      if (state.auditEvidence === "entry-only" && (!quality.hasLinks || quality.hasSpecific)) return false;
      if (state.auditEvidence === "missing" && quality.hasLinks) return false;
      if (state.auditEvidence === "specific" && !quality.hasSpecific) return false;
    }
    return matchesAuditAuthority(quality);
  }

  function matchesAuditAuthority(quality) {
    if (state.auditAuthority === "all") return true;
    if (state.auditAuthority === "needs-rating") return !quality.hasRatingEvidence;
    if (state.auditAuthority === "needs-authoritative") return !quality.hasAuthoritative;
    if (state.auditAuthority === "needs-original") return quality.needsOriginalLanguage && !quality.hasOriginalLanguage;
    if (state.auditAuthority === "reference-only") return quality.hasOnlyEntryOrReference;
    if (state.auditAuthority === "authoritative") return quality.hasRatingEvidence && quality.hasAuthoritative;
    return true;
  }

  function evidenceQuality(character) {
    const links = character.evidenceLinks || [];
    const source = workSources[character.work] || {};
    const originalLanguage = source.originalLanguage || "";
    const ratingLinks = links.filter(isRatingEvidence);
    const hasRatingEvidence = ratingLinks.length > 0;
    const hasAuthoritative = ratingLinks.some(isAuthoritativeEvidence);
    const hasOriginalLanguage = Boolean(originalLanguage) && ratingLinks.some((link) => link.lang === originalLanguage);
    return {
      hasLinks: links.length > 0,
      hasSpecific: hasRatingEvidence,
      hasRatingEvidence,
      hasAuthoritative,
      hasOriginalLanguage,
      needsOriginalLanguage: Boolean(originalLanguage),
      hasOnlyEntryOrReference: links.length > 0 && !hasRatingEvidence
    };
  }

  function isRatingEvidence(link) {
    if (!link) return false;
    if (link.ratingEvidence === true) return true;
    return ["chapter", "episode", "setting"].includes(link.type) && Boolean(link.claim || link.citation);
  }

  function isAuthoritativeEvidence(link) {
    if (!link) return false;
    if (["primary", "official", "licensed"].includes(link.authority)) return true;
    return ["chapter", "episode", "setting", "official"].includes(link.type) && !["wiki", "cross-reference"].includes(link.authority);
  }

  function renderAuditRow(character) {
    const findings = auditFindings(character);
    return `
      <article class="audit-row">
        <div>
          <h3><a href="${escapeAttribute(characterHref(character))}">${escapeHtml(character.name)}</a></h3>
          <p>${escapeHtml(character.grade)} · ${escapeHtml(character.timelineStatus || "当前主面板")}</p>
        </div>
        <ul class="audit-finding-list">
          ${findings.map((finding) => `
            <li>
              <span class="severity-dot is-${escapeAttribute(finding.severity || "medium")}">${escapeHtml(severityLabel(finding.severity))}</span>
              ${finding.dimensionLabel ? `<strong>${escapeHtml(finding.dimensionLabel)}</strong> ` : ""}
              ${finding.value ? `<code>${escapeHtml(finding.value)}</code> ` : ""}
              ${escapeHtml(finding.message)}
            </li>
          `).join("")}
        </ul>
      </article>
    `;
  }

  function renderWorkPage(workKey) {
    const workName = resolveWorkName(workKey);
    if (!workName) {
      renderMissing("未找到作品", "#/", "返回角色检索");
      return;
    }
    const source = workSources[workName] || {};
    const notes = source.scaleNotes || {};
    const workCharacters = characters.filter((character) => character.work === workName);
    if (!workCharacters.length && !source.pageLabel) {
      renderMissing("未找到作品", "#/", "返回角色检索");
      return;
    }
    const audited = workCharacters.filter((character) => auditFindings(character).length);
    const highRisk = Array.isArray(notes.highRisk) ? notes.highRisk : [];
    const workLinks = [...(source.canonicalLinks || []), ...(source.commonLinks || []), ...(source.scaleEvidenceLinks || [])];
    app.innerHTML = `
      <section class="work-page">
        <div class="back-line"><a href="#/">← 返回角色检索</a></div>
        <header class="reference-header">
          <div>
            <h1>${escapeHtml(workName)}</h1>
            <p>${escapeHtml(notes.scope || "当前作品口径尚未补充。")}</p>
          </div>
          <span class="badge">${workCharacters.length} 个角色</span>
        </header>
        <section class="work-info-grid">
          ${renderWorkInfoBlock("版本口径", notes.versionPolicy)}
          ${renderWorkInfoBlock("保守说明", notes.conservativeNotes)}
          ${renderWorkInfoBlock("来源策略", source.sourcePolicy)}
          ${renderWorkInfoBlock("高风险机制", highRisk.length ? highRisk.join(" / ") : "暂无单独列出。")}
        </section>
        <section class="audit-work-section">
          <header>
            <h2>当前角色</h2>
            <span>${workCharacters.length} 个</span>
          </header>
          <div class="work-character-list">
            ${workCharacters.map((character) => `
              <a href="${escapeAttribute(characterHref(character))}">
                <strong>${escapeHtml(character.name)}</strong>
                <span>${escapeHtml(character.affiliation)} · ${escapeHtml(character.grade)}</span>
              </a>
            `).join("")}
          </div>
        </section>
        <section class="audit-work-section">
          <header>
            <h2>待审条目</h2>
            <span>${audited.length} 个</span>
          </header>
          ${audited.length ? `<div class="audit-list">${audited.map((character) => renderAuditRow(character)).join("")}</div>` : `<p class="muted-line">当前没有触发高风险证据警告。</p>`}
        </section>
        <section class="note-block">
          <h3>作品来源</h3>
          <ul class="source-list">
            ${workLinks.map((link) => `<li>${renderSourceLink(link)}${renderSourceMeta(link)}${link.citation ? `<span class="source-citation">${escapeHtml(link.citation)}</span>` : ""}${link.claim ? `<span class="source-claim">${escapeHtml(link.claim)}</span>` : ""}</li>`).join("")}
          </ul>
        </section>
      </section>
    `;
  }

  function renderWorkInfoBlock(title, value) {
    return `
      <section class="note-block">
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(value || "未补充。")}</p>
      </section>
    `;
  }

  function renderSourceLink(link) {
    const label = link.scope ? `${link.scope}：${link.label}` : link.label;
    if (link.url) {
      return `<a href="${escapeAttribute(link.url)}" target="_blank" rel="noreferrer">${escapeHtml(label)}</a>`;
    }
    return `<span class="source-title">${escapeHtml(label)}</span>`;
  }

  function renderSourceMeta(link) {
    const parts = [
      sourceTypeLabel(link.type),
      languageLabel(link.lang),
      authorityLabel(link.authority),
      mediumLabel(link.medium),
      link.ratingEvidence ? "量级依据" : ""
    ].filter(Boolean);
    return parts.length ? `<span class="source-meta">${escapeHtml(parts.join(" / "))}</span>` : "";
  }

  function sourceTypeLabel(value) {
    const labels = {
      chapter: "章节",
      episode: "集数",
      setting: "设定",
      official: "官方",
      wiki: "维基",
      source: "来源"
    };
    return labels[value] || value || "";
  }

  function languageLabel(value) {
    const labels = {
      ja: "日文",
      zh: "中文",
      en: "英文",
      other: "其他语言"
    };
    return labels[value] || "";
  }

  function authorityLabel(value) {
    const labels = {
      primary: "原作",
      official: "官方",
      licensed: "授权",
      wiki: "粉丝维基",
      "cross-reference": "跨界参考",
      analysis: "二次分析"
    };
    return labels[value] || value || "";
  }

  function mediumLabel(value) {
    const labels = {
      manga: "漫画",
      anime: "动画",
      databook: "设定书",
      "official-site": "官方站",
      publisher: "出版社",
      wiki: "Wiki",
      "cross-wiki": "跨界站",
      print: "纸质",
      other: "其他媒介"
    };
    return labels[value] || value || "";
  }

  function groupBy(items, project) {
    return items.reduce((result, item) => {
      const key = project(item);
      result[key] = result[key] || [];
      result[key].push(item);
      return result;
    }, {});
  }

  function workHref(work) {
    const source = workSources[work] || {};
    return `#/work/${encodeURIComponent(source.slug || work)}`;
  }

  function characterHref(character, stageKey = "") {
    const base = `#/character/${encodeURIComponent(character.workSlug || workSlugForName(character.work) || character.work)}/${encodeURIComponent(character.id)}`;
    return stageKey ? `${base}/${encodeURIComponent(stageKey)}` : base;
  }

  function resolveWorkName(key) {
    if (workSources[key]) return key;
    return Object.keys(workSources).find((work) => (workSources[work] && workSources[work].slug) === key) || "";
  }

  function workSlugForName(work) {
    return workSources[work] && workSources[work].slug;
  }

  function timelineCount(character) {
    return Array.isArray(character.timelinePanels) && character.timelinePanels.length > 1 ? character.timelinePanels.length : 1;
  }

  function auditFindings(character) {
    if (Array.isArray(character.auditFindings) && character.auditFindings.length) return character.auditFindings;
    return (character.auditWarnings || []).map((message) => ({
      severity: "medium",
      dimensionLabel: "",
      value: "",
      message
    }));
  }

  function severityLabel(value) {
    if (value === "high") return "高";
    if (value === "low") return "低";
    return "中";
  }

  function renderNote(title, content) {
    return `
      <section class="note-block">
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(content || "未补充。")}</p>
      </section>
    `;
  }

  function confidenceLabel(value) {
    return confidenceLabels[value] || "待审";
  }

  function confidenceBadgeClass(value) {
    return value === "disputed" || value === "review" ? " is-warning" : "";
  }

  function inferEvidenceTypes(character) {
    const text = characterAuditText(character);
    const types = [];
    if (/直接|表现|破坏|承受|战斗/.test(text)) types.push("表现");
    if (/设定|旁白|宣称/.test(text)) types.push("设定");
    if (/换算|约|km|Mach|光速|焦耳/.test(text)) types.push("换算");
    if (/外源|装备|契约|仪式|一次性/.test(text)) types.push("条件峰值");
    if (/权能|空间|时间|封印|支配|未来|预知/.test(text)) types.push("权能项");
    return types.length ? [...new Set(types)] : ["初稿"];
  }

  function characterAuditText(character) {
    return JSON.stringify({
      confidence: character.confidence,
      dimensions: character.dimensions,
      notes: character.notes,
      auditWarnings: character.auditWarnings,
      evidenceType: character.evidenceType
    });
  }

  function renderAbout() {
    app.innerHTML = `
      <section class="about-page">
        <div class="back-line"><a href="#/">← 返回角色检索</a></div>
        <header class="about-header detail-card">
          <h1>录入口径</h1>
          <p>本站是跨界战力维基公开 Beta，按仓库中的 <code>reference.md</code> 做纯裸面板录入：主表只展示 8 个主维度，不判定实战胜负，非战斗角色已从收录结果中跳过。</p>
        </header>
        <section class="about-section">
          <h2>公开 Beta</h2>
          <p>当前适合小范围传播、挑错和补证据；站内结果用于战力讨论和社区修订，不代表官方强弱结论。</p>
          <p>角色时间线可能包含正篇结局、最终战和续作状态。未补到章节/集数/设定书级依据的条目，应以页面来源状态和待审提示为准。</p>
        </section>
        <section class="about-section">
          <h2>8 个主维度</h2>
          <ul class="schema-list">
            ${dimensions.map((dimension) => `<li>${escapeHtml(dimension.label)}</li>`).join("")}
          </ul>
        </section>
        <section class="about-section">
          <h2>社区 PR</h2>
          <p>社区 PR 是本站核心维护入口。Fork 或开始编辑前先看根目录 <code>CONTRIBUTING.md</code>；创建 PR 时 GitHub 会自动套用 <code>.github/PULL_REQUEST_TEMPLATE.md</code>。新增角色、大幅修订角色或补高风险证据时，PR 最前面应先放完整角色文件提案，第一段代码块要能直接落成 <code>data/characters/&lt;work-slug&gt;/&lt;character-id&gt;.js</code>；说明文字和 checklist 放在代码块后面。仓库地址是 <a href="https://github.com/scruple2026/meta-grade" target="_blank" rel="noopener">https://github.com/scruple2026/meta-grade</a>。</p>
        </section>
        <section class="about-section">
          <h2>部署</h2>
          <p>主体页面仍是静态 HTML/CSS/JS，没有前端构建步骤。AI 对战演绎通过 Vercel Function 的 <code>/api/battle</code> 调用 LLM，因此推荐用 Vercel 作为主部署，并在 Vercel 环境变量中配置 <code>OPENAI_API_KEY</code>；公开测试阶段可用 <code>BATTLE_API_DISABLED=1</code> 暂停生成，GitHub Pages 只能作为静态镜像，无法生成对战结果。</p>
        </section>
        <section class="about-section">
          <h2>数据边界</h2>
          <p>《咒术回战》只收录主角团和最终 Boss 两面宿傩；里香、魔虚罗等召唤/外置战力只写入对应角色的战力解释项，不再单独成条目。</p>
          <p>《鬼灭之刃》当前只收录主角团和最终 Boss 鬼舞辻无惨；柱和十二鬼月暂不进入本版结果。</p>
          <p>新增作品默认只收录核心队伍、核心战力和最终 Boss / 中央反派；长尾角色、非战斗角色和纯剧情人物等待明确需求或社区 PR。</p>
          <p>每个作品都按 <code>reference.md</code> 的通用规则和自身证据定级，不维护隐藏的作品专属禁用上限。证据支持更高主档时，应逐条给出破坏、承受、速度或能量依据。</p>
          <p>领域、必中、规则、灵魂、空间、黑洞、世界斩等特殊杀伤只进标签或战力解释项；除非原作给出可换算表现，否则不折算为更高主面板等级。</p>
        </section>
      </section>
    `;
  }

  function renderReference() {
    const source = window.POWER_WIKI_REFERENCE_MD || "";
    const rendered = renderMarkdownDocument(source);
    app.innerHTML = `
      <section class="reference-page">
        <div class="back-line"><a href="#/">← 返回角色检索</a></div>
        <header class="reference-header">
          <div>
            <h1>量级体系</h1>
            <p>站内渲染版来自 <code>reference.md</code>，用于社区维护时快速阅读 8 维主表、量级边界和保守定级规则。</p>
          </div>
          <a class="small-action" href="reference.md">查看 Markdown 原文</a>
        </header>
        <div class="reference-layout">
          <aside class="reference-toc" aria-label="量级体系目录">
            <h2>目录</h2>
            <nav>
              ${rendered.toc.map((item) => `<a class="toc-level-${item.level}" href="#/reference" data-reference-target="${escapeAttribute(item.id)}">${escapeHtml(item.text)}</a>`).join("")}
            </nav>
          </aside>
          <article class="reference-content">
            ${rendered.html}
          </article>
        </div>
      </section>
    `;
    app.querySelectorAll("[data-reference-target]").forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const target = document.getElementById(link.getAttribute("data-reference-target"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  }

  function renderMarkdownDocument(markdown) {
    const lines = String(markdown || "").replace(/\r\n?/g, "\n").split("\n");
    const html = [];
    const toc = [];
    let paragraph = [];
    let listType = "";
    let listItems = [];
    let codeLines = null;
    let codeLang = "";
    let headingCount = 0;

    function flushParagraph() {
      if (!paragraph.length) return;
      html.push(`<p>${renderInline(paragraph.join(" "))}</p>`);
      paragraph = [];
    }

    function flushList() {
      if (!listType) return;
      html.push(`<${listType}>${listItems.map((item) => `<li>${renderInline(item)}</li>`).join("")}</${listType}>`);
      listType = "";
      listItems = [];
    }

    function flushCode() {
      if (!codeLines) return;
      const langClass = codeLang ? ` class="language-${escapeAttribute(codeLang)}"` : "";
      html.push(`<pre><code${langClass}>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
      codeLines = null;
      codeLang = "";
    }

    for (let index = 0; index < lines.length; index += 1) {
      const line = lines[index];
      const trimmed = line.trim();

      if (codeLines) {
        if (trimmed.startsWith("```")) {
          flushCode();
        } else {
          codeLines.push(line);
        }
        continue;
      }

      if (trimmed.startsWith("```")) {
        flushParagraph();
        flushList();
        codeLines = [];
        codeLang = trimmed.replace(/^```/, "").trim();
        continue;
      }

      if (!trimmed) {
        flushParagraph();
        flushList();
        continue;
      }

      const heading = /^(#{1,6})\s+(.+)$/.exec(trimmed);
      if (heading) {
        flushParagraph();
        flushList();
        const level = heading[1].length;
        const text = stripMarkdown(heading[2]);
        headingCount += 1;
        const id = `ref-${headingCount}`;
        if (level <= 3) {
          toc.push({ id, level, text });
        }
        html.push(`<h${level} id="${id}">${renderInline(heading[2])}</h${level}>`);
        continue;
      }

      if (isTableStart(lines, index)) {
        flushParagraph();
        flushList();
        const tableLines = [lines[index], lines[index + 1]];
        index += 2;
        while (index < lines.length && lines[index].includes("|") && lines[index].trim()) {
          tableLines.push(lines[index]);
          index += 1;
        }
        index -= 1;
        html.push(renderTable(tableLines));
        continue;
      }

      const unordered = /^[-*]\s+(.+)$/.exec(trimmed);
      const ordered = /^\d+\.\s+(.+)$/.exec(trimmed);
      if (unordered || ordered) {
        flushParagraph();
        const nextType = unordered ? "ul" : "ol";
        if (listType && listType !== nextType) {
          flushList();
        }
        listType = nextType;
        listItems.push(unordered ? unordered[1] : ordered[1]);
        continue;
      }

      paragraph.push(trimmed);
    }

    flushParagraph();
    flushList();
    flushCode();
    return { html: html.join("\n"), toc };
  }

  function isTableStart(lines, index) {
    const current = lines[index] || "";
    const next = lines[index + 1] || "";
    return current.includes("|") && /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(next);
  }

  function renderTable(lines) {
    const rows = lines.map((line) => splitTableRow(line));
    const head = rows[0] || [];
    const body = rows.slice(2);
    return `
      <div class="reference-table-wrap">
        <table>
          <thead><tr>${head.map((cell) => `<th>${renderInline(cell)}</th>`).join("")}</tr></thead>
          <tbody>
            ${body.map((row) => `<tr>${row.map((cell) => `<td>${renderInline(cell)}</td>`).join("")}</tr>`).join("")}
          </tbody>
        </table>
      </div>
    `;
  }

  function splitTableRow(line) {
    return line
      .trim()
      .replace(/^\|/, "")
      .replace(/\|$/, "")
      .split("|")
      .map((cell) => cell.trim());
  }

  function renderInline(value) {
    const escaped = escapeHtml(value);
    return escaped
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  }

  function stripMarkdown(value) {
    return String(value || "")
      .replace(/`([^`]+)`/g, "$1")
      .replace(/\*\*([^*]+)\*\*/g, "$1")
      .replace(/<[^>]*>/g, "")
      .trim();
  }

  function normalize(value) {
    return String(value || "")
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function baseRank(value) {
    return String(value || "")
      .split(/[｜|]/)[0]
      .trim();
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function escapeAttribute(value) {
    return escapeHtml(value).replace(/`/g, "&#096;");
  }
})();
