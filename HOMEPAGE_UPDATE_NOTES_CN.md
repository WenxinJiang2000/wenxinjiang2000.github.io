# 2026 年 11 月主页更新说明

此项目基于你上传的原始网站 ZIP 做最小改动；没有重置布局、CSS、照片、旧论文或旧新闻。

## 已完成

- MSSP 2026：发现 `_publications/2026/mssp.md` 原已存在，题名、作者、卷号、文章号和 DOI 均正确，保留原条目，不重复添加。
- SRSE 2026：新增 `_publications/2026/srse-neural-unrolling.md`。将页码写为 214–220（源 BibTeX 的 1–7 与正式记录不一致）。
- IEEE Internet of Things Journal 2026：新增 `_publications/2026/ieee-iot-spiking-graph.md`。暂按 2026 年展示，不擅自添加尚未确认的卷期和页码。
- Huawei TechArena Italy 2026：新增 `_news/2026-11-huawei-techarena.md`，标注 2026 年 11 月获一等奖，指向你提供的 LinkedIn URL。
- 由于原站的新闻列表只显示标题，新增对 `external_url` 和 `display_date` 的兼容，在新闻标题上放可点击链接，不影响之前的新闻。
- `_data/profile.yml` 中精简研究简介，补充 EAAI 和 JVC 的 Reviewer 经历。
- 相应同步更新 `_config.yml`、`index.html` 和 `_layouts/default.html` 的搜索引擎描述。
- `_includes/widgets/experience_card.html` 在 Experience 右栏下方增加 Academic Service；未增加未经确认的其他期刊。

## 没有修改

- `_data/display.yml` 中首页 Selected Publications 开关仍为 `false`，因此全部论文会在 Publications 页面展示，首页不出现 Selected Publications 区块。可按需要把该项改为 `true`。
- 页脚 `Last updated` 原来使用 Jekyll 构建时间 `{{ "now" | date: "%b %Y" }}`，无需手工改动。
- 原有新闻、所有其他论文、图片、CSS、JS、导航布局均保留。

## 发布步骤

将本 ZIP 解压后得到的**项目内部文件**放到本地 GitHub 仓库根目录，覆盖同名文件。注意：GitHub 下载的 ZIP 自带一层目录，不要把那一层嵌套复制进去。

然后在仓库根目录运行：

```powershell
git status
git add _publications/2026/ieee-iot-spiking-graph.md _publications/2026/srse-neural-unrolling.md _news/2026-11-huawei-techarena.md _data/profile.yml _includes/widgets/experience_card.html _includes/widgets/news_card.html _config.yml index.html _layouts/default.html HOMEPAGE_UPDATE_NOTES_CN.md
git commit -m "Update publications, award news, and academic service"
git push
```

请先确认你当前所处的是 GitHub Pages 的发布分支（一般是 `main`），否则需要合并 Pull Request 到发布分支之后线上网站才会更新。也可以通过 GitHub 网页逐个上传替换这些文件。

## 日期与核实

- SRSE 会议举办日期为 2026-08-07 至 2026-08-10；这次用 8 月 7 日对会议论文排序，不宣称论文正式上线日期。
- Huawei 获奖仅确认 2026 年 11 月，新闻 `date: 2026-11-01` 只是 Jekyll 排序键，前端显示 `Nov 2026`，避免凭空编造获奖日。
- LinkedIn 短链接已直接采用用户提供值；若需要替换为完整帖子永久链接，可修改 `external_url`。
- IEEE IoT Journal 在线日期参考 2026-10-27 的公开论文信息，完整正式卷期请以最终 IEEE 记录为准。
