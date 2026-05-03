---
name: meta-grade-wiki-rules
description: Project-specific rules for updating the meta-grade cross-series power wiki. Use when editing this repo's static wiki, adding or revising characters, adding a new work/franchise, changing data/characters.js, changing rating tiers, or modifying search/filter behavior for character power panels.
---

# Meta Grade Wiki Rules

## Core Identity

This project is a cross-series power wiki, not a single-work fan wiki. The main wiki is static HTML/CSS/JS with no images and no generated marketing pages. Vercel is the preferred deployment target when the AI battle page is enabled because `/api/battle` must keep the LLM API key server-side; GitHub Pages may remain a static mirror without battle generation.

Keep agent-maintenance guidance in this skill or a local `AGENTS.md`, not in community PR templates or copyable character proposal snippets. PR templates should stay proposer-facing: data shape, source expectations, review checklist, and directly reusable JS proposals. Do not put internal agent workflow, source-crawling tactics, token-budget policy, delegation policy, or S3 operation rules into PR artifacts.

Project operating notes:

- Reply to the user in English or Chinese only.
- Do not skip needed file reads, source review, or validation just to save context tokens.
- If S3 object operations are needed, use `rclone` with the `aws:` remote prefix.
- Keep the main agent responsive. For large searches, long investigations, or broad refactors, delegate to subagents when the active tool and higher-priority instructions allow it; otherwise do the work locally with progress updates.
- If a local `AGENTS.md` exists, read it and apply it together with this skill, subject to higher-priority system/developer instructions.

Use `reference.md` as the governing schema. Every character entry must use exactly the 8 main dimensions:

1. 攻击能级
2. 防御能级
3. 移动速度
4. 反应速度
5. 生命体量
6. 生命回复速度
7. 能量总量
8. 能量回复速度

Search/list results should show only these 8 main-dimension summaries. Put sources, special abilities, caveats, and detailed reasoning on the character detail page.

## Scope Rules

Do not build exhaustive cast lists by default. For a new work or a new update pass, start with important combat-relevant characters:

- protagonists and core party members
- top-tier or special-grade equivalents
- main villains
- major summons/forms/entities that have independent combat meaning
- other characters only when the user explicitly asks for them

Skip non-combat characters, pure story characters, minor civilians, ordinary support staff, background factions, and low-priority one-off fighters unless the user explicitly asks to include them.

For the current project scope, keep each work to protagonists/core party members plus the final boss or most central combat antagonist unless the user explicitly asks to expand that work. For the current `咒术回战` section, keep 主角团 plus final boss 两面宿傩 only; keep 里香、魔虚罗 and similar summons/external powers inside the relevant character's battle-explanation fields (`notes.*`) instead of separate character files. For the current `鬼灭之刃` section, keep 主角团 plus final boss 鬼舞辻无惨 only; do not re-add 柱、十二鬼月, or other deleted long-tail cast just because a source wiki lists them.

The current added-work initial drafts are intentionally compact:

- `钢之炼金术师`: 艾尔利克兄弟、罗伊、斯卡、布拉德雷、父亲大人.
- `进击的巨人`: 艾伦、三笠、利威尔、阿尔敏、莱纳、吉克.
- `电锯人`: 电次、帕瓦、早川秋、三鹰朝/战争恶魔、玛奇玛.
- `全职猎人`: 小杰、奇犽、酷拉皮卡、雷欧力、西索、尼特罗、梅路艾姆.
- `一拳超人`: 埼玉、杰诺斯、龙卷、饿狼、波罗斯.
- `火影忍者`: 第七班核心与疾风传最终 boss, i.e. 鸣人、佐助、小樱、卡卡西、辉夜.
- `JOJO的奇妙冒险：星尘斗士`: 乔斯达一行核心成员 plus DIO.
- `死神`: 一护、露琪亚、雨龙、织姬、恋次、蓝染、友哈巴赫.
- `海贼王`: 草帽一伙 plus 黑胡子 as the current central combat antagonist placeholder; do not add every arc villain by default.
- `龙珠`: Z 战士核心 plus 弗利萨、沙鲁、魔人布欧; `龙珠超` forms and villains should be split later instead of folded into these files by default.

## Rating Rules

Be conservative. Do not use broad profile templates to inflate many characters at once. Prefer `无资料`, `未知`, `未表现`, or a lower tier when evidence is thin.

Never translate title, reputation, danger class, narrative importance, or “strongest” statements directly into high destructive tiers. A rank such as 特级 means threat/category inside the work, not automatically 国家级, 大陆级, 光速, or similar cross-series tiers.

Special abilities are not main-stat substitutes. Put these in battle-explanation fields (`notes.*`) or tags unless the source clearly shows equivalent destructive scale, travel speed, reaction speed, durability, or recovery:

- domains and sure-hit effects
- sealing
- soul manipulation
- space cutting
- concept/rule/causality effects
- instant-death judgment
- adaptation
- black holes or one-time self-sacrifice peaks
- anti-technique or technique-nullification effects
- summoned allies or stored abilities that are not the character's stable body panel

Work-specific ceilings are not global ceilings. A work can have 城市级, 国家级, 大陆级, 光速, 天体级, or higher main ranks when its own primary/credible sources support those levels. Establish each work's scale independently from `reference.md` and the work's evidence; do not rely on hidden per-work ban lists to force ratings.

Keep high-value mechanics visible through peak labels and battle-explanation fields, e.g. `街区级｜领域`, `街区级｜空间切割`, `街区级｜一次性`, not through inflated main ranks when the destructive, defensive, speed, or energy evidence is not there.

## Evidence Requirements

Each character must have:

- all 8 dimensions with normal/peak/brief fields
- attack nature item, stored in the existing `notes.penetration` field for compatibility
- defense/resistance item
- special power item
- weakness item
- setting/narration item
- rating-basis item
- at least one source link, preferably the character page plus work-level source links
- confidence/source quality metadata, either explicit in the character file or inferred by `data/core.js`
- `timelineStatus` for the rated story stage when the character meaningfully changes across arcs
- `timelinePanels` for characters with major growth, temporary peaks, one-time forms, external power, or final-form jumps; leave this absent for characters whose panel does not materially change
- stable `timelinePanels[].key` values for URL routes, using lowercase letters, digits, and hyphens only; set `defaultTimelineKey` only when timeline panels exist, and point it at the default panel
- Timeline panels should render as the character detail page's left-side timeline list. Clicking one timeline entry must show that entry's panel on the right; do not create a generic "main panel / timeline / notes / sources" left tab list and do not append all timeline panels below the current panel.
- For characters with multiple `timelinePanels`, the main/top-level `dimensions` must be the final timeline state. `defaultTimelineKey` must point to the last panel, and the main dimensions must exactly match that last panel's `normal`, `peak`, and `brief` fields.
- `revisionNotes` may be used to explain rating changes, downgrades, high-risk caveats, or source-driven corrections.

Use source links for traceability. Public wiki pages such as Jujutsu Kaisen Wiki or 萌娘百科 are acceptable source entry points, but do not copy their text. Summarize and rate conservatively.

If evidence is weak, write that weakness into `basis` or `setting`; do not hide uncertainty behind confident tiers.

High-risk entries should gradually add `evidenceLinks` with chapter, episode, setting-book, original-language, or official-source links. Prefer structured evidence links: `{ type, scope, label, url, citation, lang, authority, medium, ratingEvidence, claim }`, where `type` is one of `chapter`, `episode`, `setting`, `official`, `wiki`, or `source`; `lang` should normally be `ja`, `zh`, `en`, or `other`; `authority` should normally be `primary`, `official`, `licensed`, `wiki`, `cross-reference`, `analysis`, or `source`; `medium` should normally be `manga`, `anime`, `databook`, `official-site`, `publisher`, `wiki`, `cross-wiki`, `print`, or `other`. `claim` must explain which rank, form, feat, or setting the link supports. Use `citation` for paper/ebook/volume/chapter evidence without a stable public URL. Set `ratingEvidence: true` only when the source directly supports a rating, form, feat, or high-risk setting; do not set it for generic role pages or work pages.

For Japanese original works, prefer Japanese official/original sources before English fan wikis. `VS Battles Wiki`, Fandom, 萌娘百科, Wikipedia, and JoJo Wiki are useful entry or cross-reference sources, but never mark them as `primary`, `official`, or `licensed`.

## Source Access and Content Review

Separate three concepts:

- Link reachability: whether a URL responds.
- Content readability: whether the page body or API extract can be retrieved.
- Rating support: whether the retrieved content actually supports a specific tier, form, feat, or caveat.

`scripts/check-links.js` is a reachability check only. It uses direct HTTP status checks and does not prove that the source content was read. Soft failures such as 401/403/405/429 usually mean direct page access is blocked or rate-limited; treat them as "content not read by direct link check", not as evidence approval.

Use `scripts/check-source-content.js` when source warnings need repair or when blocked-looking links must be tested for readable content. Current preferred routes:

- Fandom and VS Battles Wiki: use the MediaWiki API parse route, e.g. `/api.php?action=parse&page=<TITLE>&prop=wikitext&format=json&redirects=1`; `Special:Export/<TITLE>` is a fallback for wikitext.
- JoJo Wiki and similar MediaWiki installs: try `action=query&prop=extracts&explaintext=1&titles=<TITLE>&format=json&redirects=1`, then fall back to parse/wikitext if needed.
- 萌娘百科: prefer `https://zh.moegirl.org.cn/api.php?action=query&prop=extracts&explaintext=1&titles=<TITLE>&format=json&redirects=1`; do not rely on Cloudflare-blocked mirrors such as `moegirl.icu`.
- Official, publisher, and licensed pages: use normal GET when available.
- 百度贴吧: treat it as community discussion only. Direct desktop/mobile/search pages commonly return `百度安全验证`, and app-style `c.tieba.baidu.com` endpoints are not acceptable crawl routes if they require app signatures, login context, cookies, CAPTCHA handling, or reverse-engineered parameters. The old official `百度贴吧API` page describes application/cooperation access, not an unauthenticated public crawl endpoint. If a specific thread is manually provided and directly readable without bypassing access controls, it can be a `资料入口` or community `analysis` reference; do not mark Tieba as `primary`, `official`, `licensed`, or original canon evidence. Safety-verification pages must be treated as `blocked`, not `READABLE`.

Do not bypass anti-bot systems, Cloudflare, login walls, or site access controls. Use public APIs, low concurrency, reasonable timeouts, and stable user-agent behavior. A `READABLE` result means "the script retrieved text through an acceptable route"; it does not mean the text has been reviewed or that the rating is supported. Before setting `ratingEvidence: true`, read the relevant content and map it to the exact claim in the character/work file.

Do not commit full scraped copyrighted page bodies to the repo. Store URLs, citations, source metadata, concise claim summaries, and only short necessary excerpts.

## Data Editing Workflow

When updating data files:

1. Keep `data/core.js` limited to shared schema and helper/registry functions.
2. Keep work metadata only in `data/works/<work-slug>.js`; do not put character entries in work metadata files.
3. Keep concrete character entries one-character-per-file under `data/characters/<work-slug>/<character-id>.js`.
4. Keep `data/characters.js` as the lightweight compatibility/manifest entry only.
5. Do not maintain a front-end `category` taxonomy. Character files should use `affiliation` for faction/organization and `grade` only as a descriptive `身份 / 能力` field. Do not put selection or maintenance labels such as `热门战力`, `高讨论度`, `待审核`, or source status wording into `affiliation` or `grade`. Do not expose `grade` as a search filter or sort mode because it tends to become one option per character.
6. Add a new character by creating a new `data/characters/<work-slug>/<character-id>.js` file and adding that path to both `index.html` and `data/characters.js`.
7. Add a new work by creating a new `data/works/<work-slug>.js` file, registering its source metadata inside that file, adding its `<script>` tag in `index.html` after `data/core.js`, and placing its character files after that work script.
8. Keep `POWER_WIKI_DIMENSIONS` compatible with the 8 dimensions in `reference.md`.
9. Preserve `work` as the cross-series work/franchise field via the work wrapper.
10. Preserve `appearances` as the within-work arc/media scope.
11. Use `timelineStatus` for the rated story stage/status when it affects the panel, e.g. final arc, post-awakening, weakened state, external power, or early/late version. Leave it blank when the character has no meaningful stage distinction.
12. Use `timelinePanels` only when it reduces ambiguity: major arc growth, temporary external power, one-time sacrifice forms, final boss absorbed forms, or explicit early/final contrast. Every explicit panel must have a stable `key`; if a default panel is needed, set `defaultTimelineKey` to one of those keys. Do not create filler panels for characters whose panel is effectively unchanged.
13. Keep each work's durable scope notes in `registerWorkSource(...).scaleNotes`: `scope`, `versionPolicy`, `highRisk`, and `conservativeNotes`; set `originalLanguage` and use `canonicalLinks` for original-language official/publisher entry points; use `scaleEvidenceLinks` for work-level scale references that justify broad high-tier density.
14. Keep `aliases` useful for search.
15. Ensure every character has all 8 dimensions and all battle-explanation fields (`notes.*`).
16. Use `｜` labels to explain peak sources, but make filters operate on the text before `｜`.
17. Do not add images or image URLs.
18. Prefer `node scripts/create-character.js <work-slug> <character-id> --name 中文名` when creating a new character file; it syncs `index.html` and `data/characters.js`.
19. Prefer `node scripts/create-work.js <work-slug> --name 作品名` when creating a new work; it creates the work metadata file, the character directory, and syncs the work manifests.
20. Use `node scripts/apply-character-proposal.js proposal.js` for structured community proposals when available; it writes the one-character file and syncs both script lists.
21. Keep the PR template's first section as a copyable full character JS file proposal. Review notes and checklist may follow, but the first code block should be directly convertible into `data/characters/<work-slug>/<character-id>.js`.

When changing `reference.md`, run `node scripts/sync-reference.js` to update `data/reference.js`, which stores the Markdown string rendered by the static `#/reference` route. Keep the raw `reference.md` link available for source review.

When adding a new work:

1. Add only an initial serious shortlist.
2. Establish the work-specific scale ceiling from that work's evidence before assigning tiers.
3. Record durable work-specific scale notes in that work's `scaleNotes`; do not create hidden per-work ban lists in the skill.
4. Prefer a small, defensible dataset over a large speculative dataset.

## Verification

After changes, run at least:

```bash
node scripts/validate-data.js
node --check assets/app.js
node --check data/core.js
node --check data/characters.js
node --check scripts/validate-data.js
node --check scripts/create-character.js
node --check scripts/create-work.js
node --check scripts/apply-character-proposal.js
node --check scripts/sync-reference.js
node --check scripts/check-links.js
node --check scripts/check-source-content.js
node --check data/works/<work-slug>.js
node --check data/characters/<work-slug>/<character-id>.js
```

Also run a data integrity check equivalent to:

- no duplicate character IDs
- every character has all 8 dimensions
- every dimension has normal, peak, and brief
- every character has all required battle-explanation fields (`notes.*`)
- every character has source links
- list/filter options use the main rank before `｜`
- dimension rank filters use per-dimension inclusive `[min, max]` intervals without mixing options from unrelated selected works
- stable character routes use `#/character/<work-slug>/<character-id>/<timeline-key>`; legacy `#/character/<character-id>` remains compatible
- work scripts, character scripts, `index.html`, and `data/characters.js` stay in sync
- `reference.md` and `data/reference.js` stay in sync
- timeline panels have stable keys and defaultTimelineKey matches a key
- characters with multiple timeline panels use the last panel as the default timeline, and the top-level main dimensions exactly match that last panel, including `brief`
- high-risk tiers surface warnings when they lack chapter/episode/setting-book-level `evidenceLinks`
- broad city-plus work density either remains warned or has work-level `scaleEvidenceLinks`
- evidence and scale links include `claim`; high-risk evidence should include `lang`, `authority`, `medium`, and `ratingEvidence`; `node scripts/check-links.js --dry-run` can collect URL-backed sources for link review
- source content checks distinguish `READABLE` from claim support; use `node scripts/check-source-content.js --concurrency 3 --timeout 12000` when blocked-looking links or source warnings need review, but do not treat `READABLE` as rating approval
- `#/audit` lists current high-risk evidence warnings
- `#/work/<work-slug>` renders each work's scope notes, character list, and work-specific audit list
- validator warnings include severity labels and inflation-risk hints; warnings are review debt, not automatic rating approval

Before finalizing, inspect representative high-tier characters and confirm they were not inflated by titles, danger class, domains, or special hax.
