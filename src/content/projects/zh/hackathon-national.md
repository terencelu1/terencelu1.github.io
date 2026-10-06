---
title: 智慧公車站人流監控與調度
event: 2025 技職盃黑客松 · 全國賽
date: 2025-05-29
summary: 無人機從高處拍攝公車站，用 AprilTag 定位、CSRT 穩定畫面並統計人數，中控依人流建議加派班次或改派小巴。
tags: [UAV, Vision]
stack: [DroneKit-SITL, MAVLink, AprilTag, CSRT, OpenCV, WebSocket, Web UI]
role: 網頁中控平台與系統整合、現場 Demo
cover: ../../../assets/projects/hackathon-national/cover.jpg
gallery:
  - src: ../../../assets/projects/hackathon-national/arch.jpg
    caption: 系統架構
  - src: ../../../assets/projects/hackathon-national/map.jpg
    caption: 標示 A、B 站點的示範地圖
  - src: ../../../assets/projects/hackathon-national/demo.jpg
    caption: 以 AprilTag 標記的示範地圖
  - src: ../../../assets/projects/hackathon-national/pitch.jpg
    caption: 全國賽簡報
links:
  github: []
  video: https://www.youtube.com/live/SbkAAlBGK-s?t=11878
featured: false
---

## 要解決的問題

大型活動散場時，公車調度多半靠經驗：車派太多浪費，派太少又有人等不到車。我們想用**空中視角的即時人流數據**來做調度建議。

## 做法

- 無人機可隨時移動部署，從高處取得站點影像。
- 用 **AprilTag** 定位畫面中的站點區域，**CSRT** 穩定追蹤，再統計人數。
- 中控在地圖上顯示每站人數，依密度給出建議：人少時派小巴保障基本服務，人多時加派班次。
- 程式改為模組化設計，各子系統透過統一的資料格式與 WebSocket 溝通。

## 我負責的部分

網頁中控平台（即時顯示無人機狀態、影像與人流分析結果），確保無人機、中控、網頁三端資料同步，並主導現場 Demo 與評審問答。
