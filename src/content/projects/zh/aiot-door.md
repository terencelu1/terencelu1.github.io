---
title: 智慧門控系統
event: 校內 AIoT 期末競賽
award: 第 2 名
date: 2024-12-27
summary: 在樹莓派上以 MobileNetV2 即時辨識家人與陌生人，新成員幾分鐘內就能加入、不必重新訓練；搭配 Flutter App 遠端開門、LINE 入侵通報與室內資訊面板。
tags: [AIoT, Vision, Edge]
stack: [MobileNetV2, OpenCV, Raspberry Pi 4B, ESP32, Flutter, LINE Bot, Gemini, WebSocket]
role: 系統架構與大部分開發（辨識模型、三端通訊、介面）
cover: ../../../assets/projects/aiot-door/cover.jpg
gallery:
  - src: ../../../assets/projects/aiot-door/arch.jpg
    caption: 系統架構：硬體層、韌體層、軟體層、應用層
  - src: ../../../assets/projects/aiot-door/build.jpg
    caption: 門禁實體：鏡頭、電磁鎖與控制板
links:
  github: []
  video: https://youtu.be/ktxfUoZdEiE
featured: true
---

## 要解決的問題

忘了帶鑰匙、沒辦法遠端確認門外是誰、出事了才知道——傳統門禁是被動的。我們想要一扇會認人、會通報、能遠端控制的門。

## 做法

- **辨識模型換成 MobileNetV2。** 原本的 OpenCV 方案太慢，改用 MobileNetV2 後推論速度約提升 3 倍，能在樹莓派上即時辨識。
- **增量式特徵更新。** 新增家人時只要更新特徵向量、不必重新訓練整個模型，註冊時間從數小時縮短到幾分鐘。
- **非同步架構。** 影像辨識、通訊、介面各自獨立執行，互不卡住。

## 三端串接

- **Flutter App：** 遠端看鏡頭畫面、開關門。
- **LINE Bot：** 偵測到陌生人時推播通知。
- **室內平板介面：** 監視紀錄、天氣（中央氣象署 API）、Gemini 穿搭建議。
- 門邊也有實體按鈕，透過繼電器手動開門。

## 我負責的部分

擔任技術架構負責人：規劃模組化架構、打通樹莓派、手機 App、LINE Bot 三端的通訊，並完成辨識模型的替換與增量學習機制。
