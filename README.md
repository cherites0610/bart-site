# bart-site

廖柏安（Bart）的個人網站：技術筆記、作品集與聯絡方式。

> 我是全端開發者，從人的需求出發，把事情做成系統。

網站：<https://site.cherites.org>

## 功能

- **首頁**：固定一屏，以作品與定位為主
- **Blog**：技術筆記，支援標籤頁、RSS、程式碼高亮
- **Projects**：程式作品集，每個專案有獨立詳情頁（摘要、技術棧、角色、Demo／原始碼連結）
- **About**：證件照郵票與自我介紹
- **Links**：GitHub 與 Email
- 深色模式切換
- 僅支援繁體中文（zh-Hant）

## 技術棧

- [Astro](https://astro.build)（靜態輸出）
- Content Collections（Markdown 內容 + Zod schema 驗證）
- 部署於 Cloudflare Pages

## 快速開始

需要 Node.js `>= 22.23.4`。

```sh
npm install
npm run dev
```

開發伺服器預設在 `http://localhost:4321`。

| 指令              | 說明                          |
| :---------------- | :---------------------------- |
| `npm install`     | 安裝相依套件                  |
| `npm run dev`     | 啟動本機開發伺服器            |
| `npm run build`   | 建置正式版本至 `./dist/`      |
| `npm run preview` | 本機預覽建置結果              |
| `npm run astro …` | 執行 Astro CLI（如 `astro check`） |

## 專案結構

```text
/
├── design/               # 圖示、OG 圖的設計原始檔
├── public/               # 靜態資源（favicon、og.png、robots.txt）
├── src/
│   ├── assets/           # 圖片等資源
│   ├── components/       # 共用元件（如 ThemeToggle）
│   ├── content/
│   │   ├── blog/         # 文章（Markdown）
│   │   └── projects/     # 專案（Markdown）
│   ├── layouts/Base.astro
│   ├── pages/            # 路由：/、/blog、/projects、/about、/links、/rss.xml、404
│   ├── styles/global.css
│   └── content.config.ts # 內容集合 schema
├── DESIGN.md             # 設計系統
├── PRODUCT.md            # 產品定位與範圍
└── astro.config.mjs
```

## 新增內容

### 文章

在 `src/content/blog/` 新增 `.md` 檔，網址為 `/blog/<檔名>`：

```md
---
title: 文章標題
description: 一句話摘要
pubDate: 2026-01-01
tags: [astro, web]
draft: false # true 時不會發布
---

內文……
```

### 專案

在 `src/content/projects/` 新增 `.md` 檔，網址為 `/projects/<檔名>`：

```md
---
title: 專案名稱
summary: 一句話摘要
role: 負責的角色
stack: [Astro, TypeScript]
demo: https://example.com # 選填
source: https://github.com/cherites0610/example # 選填
date: 2026-01-01
draft: false
---

詳細介紹……
```

## 部署

專案為純靜態輸出，在 Cloudflare Pages 上設定：

- Build command：`npm run build`
- Output directory：`dist`

## 授權

版權所有 © 廖柏安。
