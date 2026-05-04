# 公开传播检查清单

## 当前状态

- 站点定位：公开 Beta。
- 主推能力：静态战力面板、时间线状态、8 维常态 / 峰值、战力解释项、来源与审计入口。
- 暂不主推能力：AI 对战生成。当前生产环境没有 `OPENAI_API_KEY`，`/api/battle` 返回 `configured:false`。
- 成本保护：已支持 `BATTLE_API_DISABLED=1` 一键暂停 AI 对战；暂停时 POST 直接 503，不调用上游模型。
- 传播文案：见 `PROMOTION.md`。

## 已完成

- [x] 首页说明公开 Beta、证据修订和剧透边界。
- [x] 首页提供热门角色入口，降低新用户首次使用成本。
- [x] 首页和顶部导航提供 GitHub Issues / PR 反馈路径。
- [x] About 页面说明反馈错误方式。
- [x] Battle 页面在 Key 缺失或服务端暂停时显示关闭态并禁用生成按钮。
- [x] 服务端支持 `BATTLE_API_DISABLED` 总开关。
- [x] HTML 补充 description、canonical、Open Graph 和 Twitter summary。
- [x] GitHub Issue 模板覆盖角色修订和证据补充。
- [x] GitHub Pages workflow 同步公开文档。
- [x] 通过 `node scripts/validate-data.js`，当前数据 warning 为 0。
- [x] 通过 `node --check assets/app.js`、`node --check api/battle.js` 和全量数据脚本语法检查。

## 高热角色抽检摘要

这不是原作逐页复核结论，只是公开传播前的结构风险扫描。大范围传播后，以下条目最容易被截图讨论，应优先补章节、集数、设定书或官方资料级证据。

| 优先级 | 条目 | 当前风险 |
| --- | --- | --- |
| 高 | 五条悟、两面宿傩、乙骨忧太 | 咒术高热角色，当前主要是入口来源，缺少具体章节级量级 evidenceLinks。 |
| 高 | 路飞 | 海贼主角高热条目，当前 sourceQuality 仍是 entry，城市级 / 高超音速争议需要更具体原作证据。 |
| 高 | 更木剑八 | 仍触发多条高风险审计警告，传播前应优先补直接量级证据或降级/改写争议说明。 |
| 中 | 凯多、香克斯、白胡子 | 已有部分具体证据，但高热争议高，建议继续补章节级 claim。 |
| 中 | 鸣人、佐助、辉夜、斑 | 已有 specific evidenceLinks，但大陆级 / 行星级 / 高超音速等争议应保持醒目标注。 |
| 中 | 一护、蓝染、友哈巴赫 | 已有 specific evidenceLinks，但超第三宇宙速度级和大陆/地表级争议需要保持严格解释边界。 |
| 中 | 悟空、弗利萨、布欧、沙鲁 | 已有 specific evidenceLinks，但龙珠高端量级天然争议，需避免把宣称和可复现战斗表现混用。 |
| 中 | 埼玉、饿狼、波罗斯、龙卷 | 已有 specific evidenceLinks，但“一拳超人”高端表现需要严格区分仅下限、争议和一次性。 |

## 大范围传播建议

1. 对外说“公开 Beta / 面板体系 / 证据口径 / 社区修订”，不要说“官方强弱榜”。
2. 如果 AI 对战关闭，宣传文案必须明确“AI 对战生成暂时关闭，静态面板可用”。
3. 面向未完读者传播时，加“含结局、最终战和续作时间线状态剧透”。
4. 高热角色被质疑时，优先引导到 GitHub Issue 模板；已有完整改法时引导提交 PR。
5. 恢复 AI 对战前，除 `BATTLE_API_DISABLED` 外，还应评估访问码、预算限制、日志监控和更严格限流。
