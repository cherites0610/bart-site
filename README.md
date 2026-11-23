# bart-site

廖柏安（Bart）的個人網站：技術筆記、作品集與聯絡方式。

> 我是全端開發者，從人的需求出發，把事情做成系統。

網站：<https://site.cherites.org>

## 功能

- **首頁**：固定一屏，以作品與定位為主
- **Blog**：技術筆記，支援標籤頁、RSS、程式碼高亮
- **Projects**：程式作品集，每個專案有獨立詳情頁（摘要、技術棧、角色、Demo／原始碼連結）
- **About**：證件照郵票與自我介紹
- 深色模式切換
- 僅支援繁體中文（zh-Hant）

## 技術棧

- [Astro](https://astro.build)（靜態輸出）
- Content Collections（Markdown 內容 + Zod schema 驗證）
- 部署於 Cloudflare Pages

## 快速開始

需要 Node.js `>= 22.23.4` 與 pnpm。

```sh
pnpm install
pnpm dev
```

開發伺服器預設在 `http://localhost:4321`。

| 指令              | 說明                               |
| :---------------- | :--------------------------------- |
| `pnpm install`    | 安裝相依套件                       |
| `pnpm dev`        | 啟動本機開發伺服器                 |
| `pnpm build`      | 建置正式版本至 `./dist/`           |
| `pnpm preview`    | 本機預覽建置結果                   |
| `pnpm astro …`    | 執行 Astro CLI（如 `astro check`） |

## 專案結構

```text
/
├── design/               # 圖示、OG 圖的設計原始檔
├── public/               # 固定網址的靜態檔（favicon、og.png、robots.txt）
│   └── admin/            # Sveltia CMS 後台（/admin）
├── src/
│   ├── assets/           # 元件共用的圖片（會被 Astro 最佳化）
│   ├── components/       # 共用元件（如 ThemeToggle）
│   ├── content/
│   │   ├── blog/         # 文章：每篇一個資料夾，圖片放在旁邊
│   │   └── projects/     # 專案：同上
│   ├── layouts/Base.astro
│   ├── pages/            # 路由：/、/blog、/projects、/about、/rss.xml、404
│   ├── styles/global.css
│   └── content.config.ts # 內容集合 schema
├── DESIGN.md             # 設計系統
├── PRODUCT.md            # 產品定位與範圍
└── astro.config.mjs
```

## 新增內容

### 用後台寫（推薦）

打開 <https://site.cherites.org/admin/>，選「使用存取權杖登入」並貼上 GitHub fine-grained token（Repository access 只選 `bart-site`，權限 Contents: Read and write），即可新增、編輯文章與專案。token 存在該瀏覽器，換裝置或過期時重新貼一次。存檔會直接 commit 到 `master`，Cloudflare Pages 約一分鐘後自動部署。

- 標題是中文，建立時請把 slug 改成英數（例如 `astro-image-notes`），它就是網址。
- 新文章預設為草稿，確定要公開時再取消「草稿」。
- 內文插入的圖片會存在該文章的資料夾裡。

本機也能用：`pnpm dev` 後用 Chrome／Edge 打開 <http://localhost:4321/admin/index.html>，選「Work with Local Repository」並指定專案資料夾，修改會直接寫入本機檔案（不需登入，commit 自己來）。

後台設定在 `public/admin/config.yml`，修改 `src/content.config.ts` 的 schema 時要同步更新。

### 手寫 Markdown

每篇內容一個資料夾，圖片和 `index.md` 放在一起，用相對路徑引用（`![說明](./圖.png)`），Astro 會自動壓縮成 webp。

### 文章

新增 `src/content/blog/<slug>/index.md`，網址為 `/blog/<slug>`：

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

新增 `src/content/projects/<slug>/index.md`，網址為 `/projects/<slug>`：

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

- Build command：`pnpm build`（Cloudflare 會依 `pnpm-lock.yaml` 自動使用 pnpm）
- Output directory：`dist`

## 授權

版權所有 © 廖柏安。
