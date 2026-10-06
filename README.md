# terencelu1.github.io

盧亭潤 Terence Lu 的個人網站，用 Astro 建置，推上 `main` 後由 GitHub Actions 自動部署到 GitHub Pages。

## 開發

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 輸出到 dist/
```

## 新增作品

1. 圖片放到 `src/assets/projects/<slug>/`
2. 新增 `src/content/projects/zh/<slug>.md` 與 `src/content/projects/en/<slug>.md`（欄位見 `src/content.config.ts`）
3. 還沒寫內文的作品設 `hasDetail: false`，只會出現卡片、不產生詳細頁

## 結構

- `src/i18n/ui.ts` — 介面文字（中 / 英）
- `src/data/log.ts` — 首頁經歷時間軸
- `src/styles/global.css` — 色彩、字型等設計 token
