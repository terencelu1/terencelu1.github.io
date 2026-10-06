---
title: 追蹤領航與身分驗證的無人機警衛
event: 第 19 屆 DSP 創思設計競賽
award: 佳作
date: 2024-03-15
summary: 無人機用人臉辨識鎖定目標、CSRT 持續追蹤，並以 ToF 測距維持 1.6 公尺安全距離；也能沿指定航線帶訪客到目的地，請假與核准流程透過 App 和雲端串接。
tags: [UAV, Vision]
stack: [OpenCV, CSRT, DroneKit, MAVLink, ToF LiDAR, Raspberry Pi 4B, Pixhawk 4, Google Drive API, App Inventor]
role: 全端軟體（視覺追蹤、飛控邏輯、雲端與 App）
cover: ../../../assets/projects/dsp-19/cover.jpg
gallery:
  - src: ../../../assets/projects/dsp-19/arch.jpg
    caption: 系統架構：硬體層、韌體層、軟體層、應用層
  - src: ../../../assets/projects/dsp-19/app.jpg
    caption: App Inventor 請假系統畫面
links:
  github: []
  video: https://youtu.be/_obNsRrEifk
featured: false
---

## 要解決的問題

傳統門禁無法主動應對可疑人士，訪客引導又需要人力陪同。我們想讓無人機當巡邏警衛，也能當帶路的引導員。

## 做法

- **人臉辨識 + CSRT 追蹤切換。** 先用人臉辨識鎖定目標，再交給 CSRT 追蹤器持續跟；追蹤信心下降時重新辨識。相較於每幀都做人臉辨識，**FPS 提升一倍**，在光線變化下也更穩。
- **距離控制。** TF Mini（ToF）即時測距，搭配 DroneKit 計算位置修正，穩定維持在 **1.6 公尺**左右：夠近能監控、又不會讓人感到壓迫。
- **領航。** 中控可指定航線，無人機帶訪客前往目的地。
- **請假系統。** App Inventor 做的 App 透過 Google Drive API 上傳請假資料，管理端可查看並核准，QR Code 用 PyZbar 驗證。

## 我負責的部分

整套軟體：視覺追蹤演算法、DroneKit 飛行邏輯（追蹤、保持距離、返航）、Google Drive 雲端架構，以及請假 App。
