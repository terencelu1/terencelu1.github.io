---
title: AreaGuided：無人機實體導引
event: 2025 技職盃黑客松 · 中部分區賽
award: 佳作
date: 2025-04-20
summary: 30 小時內做出的導航服務：用 App 叫一台無人機，它會飛在前面帶你走到目的地。路線由演算法規劃，現場用 DroneKit-SITL 模擬飛行展示。
tags: [UAV]
stack: [DroneKit-SITL, MAVLink, WebSocket, Web UI, 路徑規劃, 手機 App]
role: 系統整合與技術負責（SITL 模擬、WebSocket、中控介面、Demo）
cover: ../../../assets/projects/hackathon-central/cover.jpg
gallery:
  - src: ../../../assets/projects/hackathon-central/sim.jpg
    caption: DroneKit-SITL 模擬飛行與地面站畫面
  - src: ../../../assets/projects/hackathon-central/ui.png
    caption: 中控畫面：無人機位置、規劃路線與狀態
  - src: ../../../assets/projects/hackathon-central/arch.jpg
    caption: 系統架構
  - src: ../../../assets/projects/hackathon-central/app.jpg
    caption: 手機 App：呼叫無人機並選擇目的地
  - src: ../../../assets/projects/hackathon-central/work.jpg
    caption: 30 小時開發中
  - src: ../../../assets/projects/hackathon-central/team.jpg
    caption: 團隊合照
links:
  github: []
featured: false
---

## 要解決的問題

大型園區、商場或活動散場時，地圖標示不清、路線複雜，人們乾脆不想走路。我們的想法是：**讓無人機直接飛在前面帶路**，鼓勵步行、也減少碳排。

## 做法

- 使用者在 App 上呼叫無人機並選目的地。
- 中控以貪婪演算法規劃路線，把航點傳給無人機。
- 比賽場地不能實飛，所以用 **DroneKit-SITL** 建立擬真飛行環境，透過 **WebSocket** 即時同步狀態；評審能在網頁上看著無人機模擬起飛、帶路、抵達。

## 30 小時怎麼做完

三人明確分工、平行開發：硬體、App、後端整合各自進行，用事先約定好的介面接起來。

## 我負責的部分

系統整合與技術統籌：排定時程與分工、建 SITL 模擬環境、實作 WebSocket 通訊與網頁中控，並主導現場 Demo 與技術說明。
