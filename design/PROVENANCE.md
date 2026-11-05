# 點陣圖來源

`public/og.png`、`public/apple-touch-icon.png` 由本資料夾的 HTML 以 Chrome headless 截圖產生，不含外部圖片或 AI 生成素材。

- `og.html` → `public/og.png`（1200×630）：`chrome --headless --window-size=1200,630 --virtual-time-budget=8000 --screenshot=public/og.png design/og.html`
- `icon.html`（內嵌 `public/favicon.svg`）→ `public/apple-touch-icon.png`（180×180）：同上，視窗 180×180
- 字型：Noto Serif TC、Noto Sans TC、JetBrains Mono（SIL OFL，經 Google Fonts）。
