---
name: 廖柏安 Bart 個人網站
description: 集郵冊：每個專案是一張貼在深藍相簿頁上的郵票，每篇文章是蓋了郵戳的信封。
colors:
  album-navy: "#14213a"
  album-navy-dark: "#172640"
  paper: "#f3eee2"
  paper-dark: "#0a111f"
  ink: "#14213a"
  ink-dark: "#ece6d6"
  muted: "#4f5a74"
  muted-dark: "#a3adc2"
  post-office-green: "#1f5f4a"
  post-office-green-dark: "#6fbf9c"
  postmark-red: "#b3261e"
  postmark-red-dark: "#ff7566"
  postmark-stamp-red: "#d8402f"
  stamp-face: "#f4efe3"
  stamp-ink: "#14213a"
  stamp-muted: "#5a6479"
  album-ink: "#ece6d6"
  album-muted: "#aab4c8"
  hairline: "#cfc8b6"
  hairline-dark: "#26334f"
typography:
  display:
    fontFamily: "Noto Serif TC, Songti TC, serif"
    fontSize: "clamp(3rem, 6vw, 6rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Noto Serif TC, Songti TC, serif"
    fontSize: "clamp(1.5rem, 2.6vw, 2.125rem)"
    fontWeight: 700
    lineHeight: 1.3
  title:
    fontFamily: "Noto Serif TC, Songti TC, serif"
    fontSize: "1.0625rem"
    fontWeight: 700
    lineHeight: 1.4
  body:
    fontFamily: "Noto Sans TC, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.8
  tagline:
    fontFamily: "Noto Sans TC, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 2vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.06em"
rounded:
  album: "6px"
  slot: "2px"
spacing:
  sm: "0.9rem"
  md: "1.75rem"
  lg: "clamp(1.5rem, 4vw, 4.5rem)"
components:
  album-page:
    backgroundColor: "{colors.album-navy}"
    textColor: "{colors.album-ink}"
    rounded: "{rounded.album}"
    padding: "clamp(1.5rem, 4vw, 4.5rem) clamp(1.5rem, 5vw, 7rem)"
  stamp:
    backgroundColor: "{colors.stamp-face}"
    textColor: "{colors.stamp-ink}"
    padding: "0.9rem"
  stamp-link:
    backgroundColor: "{colors.stamp-face}"
    textColor: "{colors.stamp-ink}"
    typography: "{typography.title}"
    padding: "0.7rem 0.9rem"
  slot:
    textColor: "{colors.album-muted}"
    rounded: "{rounded.slot}"
    padding: "1rem"
---

# Design System: 廖柏安 Bart 個人網站

## Overview

**Creative North Star: "The Stamp Album"**

整個網站是一本集郵冊。首頁是封面，Portfolio 是貼滿專案郵票的相簿頁，Blog 是依日期排列、蓋了郵戳的信封，About 與 Links 是單頁。視覺不用等大卡片排成的網格，而是大小不一、貼在深藍紙頁上的齒孔郵票。

氣質是安靜、有手感、像被好好保存的收藏：深藍相簿頁、米白郵票、郵局綠負責結構、郵戳紅只用在日期和目前位置。它不是履歷範本，不炫技、不用過多動畫，也不走冷硬的駭客風。尚未完成的內容以虛線「待蓋郵戳」位置明講，不留空洞，也不假裝有內容。

**Key Characteristics:**
- 深藍相簿頁是舞台，郵票是唯一的亮面物件。
- 郵票有齒孔、護貼條與下方投影，像真的貼在頁面上。
- 紅色只屬於郵戳與「目前頁面」。
- 標題用宋體粗體，內文用黑體，日期與標籤用等寬字。
- 唯一的動態：郵戳蓋下去。

## Colors

深藍、米白、郵局綠、郵戳紅四色；相簿頁與郵票是「物件」，不隨亮暗主題改變，只有周圍的頁面底色與文字會切換。

### Primary
- **郵戳紅 Postmark Red** (#b3261e 淺色 / #ff7566 深色)：目前頁面的導覽底線、文字選取底色、focus 外框。
- **郵戳印泥紅 Stamp Red** (#d8402f)：首頁圓形郵戳本身；要同時壓在深藍與米白上，兩邊對比都 ≥3:1。

### Secondary
- **郵局綠 Post-Office Green** (#1f5f4a 淺色 / #6fbf9c 深色)：結構用色，如郵票內框線、郵票上的小標、scrollbar。

### Neutral
- **相簿深藍 Album Navy** (#14213a；深色主題 #172640)：相簿頁底色。
- **紙頁 Paper** (#f3eee2 / #0a111f)：頁面外層底色。
- **墨 Ink** (#14213a / #ece6d6)：主要文字。
- **次要文字 Muted** (#4f5a74 / #a3adc2)：導覽、頁尾、說明。
- **郵票面 Stamp Face** (#f4efe3)：郵票底色，兩種主題相同。
- **相簿頁文字 Album Ink / Muted** (#ece6d6 / #aab4c8)：深藍相簿頁上的文字。
- **髮絲線 Hairline** (#cfc8b6 / #26334f)：導覽 hover 底線、主題切換按鈕外框。

### Named Rules
**The Red Is Rare Rule.** 紅色只標日期與「現在在哪」，不拿來裝飾、不做按鈕底色。
**The Object Rule.** 相簿頁與郵票不跟著亮暗主題反轉；它們是放在桌上的物件，換的是桌面。

## Typography

**Display Font:** Noto Serif TC（備援 Songti TC, serif）
**Body Font:** Noto Sans TC（備援 system-ui）
**Label/Mono Font:** JetBrains Mono

**Character:** 宋體粗體像郵票上的面額與題字，黑體負責安靜地好讀，等寬字像郵局的日期戳。三者各管一件事，不混用。

### Hierarchy
- **Display** (700, clamp(3rem, 6vw, 6rem), 1.05, -0.02em)：首頁名字「廖柏安」。上限 6rem。
- **Headline** (700, clamp(1.5rem, 2.6vw, 2.125rem), 1.3)：大郵票上的專案標題。
- **Title** (700, 1.0625rem, 1.4)：小郵票與郵票形連結上的動作文字。
- **Tagline** (400, clamp(1.125rem, 2vw, 1.5rem), 1.7)：定位句，比名字小一階；以逗號分段，各段不可拆行。
- **Body** (400, 1rem, 1.8)：內文與文章；中文每行約 35 個全形字（約 65–75ch）。
- **Label** (500, 0.75rem, 0.06em)：郵票小標、導覽、日期、程式碼。全大寫只用於英文標籤。

### Named Rules
**The Three Voices Rule.** 宋體說「是什麼」，黑體說「為什麼」，等寬字說「何時／多少」。不要用等寬字假裝技術感。

## Layout

首頁是一頁式「相簿頁」，從導覽列下方開始填滿視窗（最小高度 `100svh − 7.5rem`）。寬度最大 160rem，左右留白隨螢幕縮放（`clamp(1.5rem, 5vw, 7rem)`），不再把內容鎖在窄欄。

**桌面（>1200px）**：兩欄 5fr / 7fr。左欄：名字與定位句在上，聯絡郵票在下（兩端對齊）。右欄：一張 4:5 的大郵票（高度 `clamp(24rem, min(66svh, 38vw), 50rem)`）加一欄 3 個小郵票或空位（欄寬 `clamp(9rem, 13vw, 17rem)`），整組在右欄置中。

**平板與窄螢幕（≤1200px）**：單欄，由上到下：名字與定位句、聯絡郵票、郵票區。直式平板（如 iPad Pro）時相簿頁仍撐滿視窗高度，郵票區吃掉剩餘高度，底部不留空白。

**手機（≤36rem）**：相簿頁依內容高度；大郵票全寬，三個小郵票排成一列；郵戳縮小。

文章頁等內容頁維持 44rem 的閱讀寬度。

## Elevation & Depth

郵票是被貼上去的物件，所以用向下、有模糊的投影；相簿頁本身只有極淡的內緣亮線與底部陰影。深度只表示「這張貼在紙上」，不做光暈。

### Shadow Vocabulary
- **大郵票** (`filter: drop-shadow(0 10px 14px rgb(4 8 20 / 0.5))`)
- **小郵票** (`filter: drop-shadow(0 6px 8px rgb(4 8 20 / 0.45))`)
- **郵票形連結** (`filter: drop-shadow(0 4px 6px rgb(4 8 20 / 0.45))`)
- **相簿頁** (`box-shadow: 0 1px 0 rgb(255 255 255 / 0.06) inset, 0 18px 40px -18px rgb(5 10 25 / 0.55)`)

### Named Rules
**The Pasted-On Rule.** 影子永遠向下、有偏移、有模糊；不使用零偏移光暈，也不使用硬邊色塊陰影。

## Shapes

- 相簿頁圓角 6px；虛線空位圓角 2px；郵票本身是直角加齒孔，沒有圓角。
- 齒孔：用 `radial-gradient` 在四邊畫出與相簿同色的半圓孔洞（大郵票孔半徑 6px、間距 14px；郵票形連結 4px、10px）。
- 郵票內框：1px 郵局綠細線，內縮約一個內距。
- 郵票上方有一條半透明「護貼條」（`rgb(236 230 214 / 0.16)` 加細邊，略微旋轉 −1.5°）。
- 空位：1.5px 虛線 `rgb(236 230 214 / 0.38)`，文字靠左下；只有輪廓，不假裝有內容。
- 郵票底紋：同心圓，只用幾何線條（郵局綠、不透明度 0.22），不畫仿真插圖。
- 郵戳：雙圈圓，外圈沿路徑排字、內圈放今日日期，整體旋轉 −14°。

## Components

### 相簿頁 Album Page
深藍底、6px 圓角，整頁最大的容器；內部不再嵌套卡片。

### 郵票 Stamp
- **Shape:** 米白郵票面、齒孔四邊、1px 綠色內框、直角。
- **大郵票：** 4:5 直式，內距 1.4rem，標題用 Headline，左下對齊；上方護貼條。
- **小郵票：** 內距 0.7rem，標題 1rem；兩張略微旋轉（+1.2° / −0.8°）增加手貼感。
- **Hover / Focus（僅連結郵票）：** 上移 4px 並旋轉 −0.6°，0.35s、`cubic-bezier(0.16, 1, 0.3, 1)`；focus 外框改用郵戳印泥紅、偏移 5px。

### 空位 Slot
虛線外框，標示「待蓋郵戳」。專案完成後由真郵票取代，一個空位對應一個預留。

### 郵票形連結 Stamp Link
GitHub 與 Email：小郵票（孔半徑 4px），上排等寬小標、下排宋體動作文字（「看我的程式碼」「寄信給我」）。

### 郵戳 Postmark
SVG 圓形，右上角壓在相簿頁邊角，日期在載入時改為訪客當天。載入時唯一的動態：由放大、模糊、較大傾斜縮到定位（0.7s，指數 ease-out，延遲 0.25s）。尊重 `prefers-reduced-motion`。

### 導覽 Navigation
等寬字 0.875rem；預設次要文字色，hover 加髮絲底線，目前頁面為郵戳紅加紅底線。右側是圓形主題切換按鈕（畫出來的 SVG 半月圖示，2.25rem，細外框）。

## Do's and Don'ts

### Do:
- **Do** 讓每個專案以一張郵票出現，大小代表主次；最新專案用最大的一張。
- **Do** 未完成的位置一律用虛線「待蓋郵戳」空位並明確標示為預留。
- **Do** 用郵戳紅標日期與目前頁面，其餘結構用郵局綠。
- **Do** 在相簿頁上的所有文字至少 4.5:1 對比（`#ece6d6` / `#aab4c8` 在 `#14213a`）。
- **Do** 保持中文內文行高 1.8、每行約 35 個全形字。
- **Do** 文字選取、focus 外框、scrollbar 都使用調色盤的顏色。

### Don't:
- **Don't** 把專案排成大小一樣的卡片網格，或在郵票上再嵌套卡片。
- **Don't** 做成履歷範本、浮誇動畫、冷硬駭客風，也不要空蕩蕩。
- **Don't** 在標題上方加小標籤（eyebrow）或章節編號。
- **Don't** 虛構專案、文章、雇主、技能或見證；沒有內容就用空位。
- **Don't** 用零偏移的發光或硬邊色塊陰影。
- **Don't** 讓相簿頁與郵票隨暗色主題反轉。
- **Don't** 用 emoji 或 Unicode 符號當圖示；圖示一律是畫出來的 SVG。
- **Don't** 在郵票內畫仿真插圖；底紋只用幾何線條。
