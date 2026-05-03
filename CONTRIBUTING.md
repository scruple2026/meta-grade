# 贡献指南

Fork 或开始改文件前，先按这个顺序看：

1. 先确认要改的是哪个角色。新增或修订角色时，优先只改一个 `data/characters/<work-slug>/<character-id>.js` 文件。
2. 先读同作品已有角色文件，复用现有字段结构、证据写法和保守定级口径。
3. PR 正文最前面必须放完整角色文件提案。GitHub 创建 PR 时会自动套用 `.github/PULL_REQUEST_TEMPLATE.md`，但开始编辑前也可以先打开这个文件看模板。
4. 高风险量级要补 `evidenceLinks`，写清 `claim`、`lang`、`authority`、`medium`、`ratingEvidence`。缺少章节、集数、设定书或官方资料时，保留待审说明，不要把称号、危险等级或剧情评价直接换算成主量级。
5. 改完至少运行 `node scripts/validate-data.js`；改到 JS 文件时，再跑对应的 `node --check <file>`。
6. 如果改到 AI 对战页或 `/api/battle`，要确认没有把 LLM API key 写入前端或仓库；密钥只放在 Vercel 环境变量或本地 `.env.local` 里。仓库里只能提交 `.env.example` 这种占位样例。

## 常用入口

- GitHub Repo: <https://github.com/scruple2026/meta-grade>
- PR 自动模板: `.github/PULL_REQUEST_TEMPLATE.md`
- 在线查看 PR 模板: <https://github.com/scruple2026/meta-grade/blob/main/.github/PULL_REQUEST_TEMPLATE.md>
- 新建 PR: <https://github.com/scruple2026/meta-grade/compare>

## 角色文件位置

角色按作品分目录维护：

```text
data/characters/<work-slug>/<character-id>.js
```

示例：

- `data/characters/demon-slayer/tanjiro-kamado.js`
- `data/characters/jujutsu-kaisen/yuji-itadori.js`

不要把多个无关角色混进同一个 PR。新增作品或批量补证据可以拆成多个 PR，方便逐条审。

## 最小自检

```bash
node scripts/validate-data.js
node --check data/characters/<work-slug>/<character-id>.js
node --check assets/app.js
node --check api/battle.js
```

涉及来源链接时，再跑：

```bash
node scripts/check-links.js --dry-run
```

如果修改了 `reference.md`，还需要运行：

```bash
node scripts/sync-reference.js
```
