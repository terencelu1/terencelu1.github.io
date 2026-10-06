---
title: 無人機降落於無人車
event: 第 20 屆 DSP 創思設計競賽
award: 佳作
date: 2025-03-15
summary: 無人機以雙階段視覺（YOLO-FastestV2 遠距 + AprilTag 近距）找到無人車並自動降落，降落誤差在中心 15 公分內，讓回收過程完全無人化。
tags: [UAV, UGV, Vision, Edge]
stack: [YOLO-FastestV2, AprilTag, DroneKit, MAVLink, WebSocket, Raspberry Pi 5, Pixhawk 4]
role: 系統軟體與飛行控制（視覺降落、飛控邏輯、任務協調）
cover: ../../../assets/projects/dsp-20/cover.jpg
gallery:
  - src: ../../../assets/projects/dsp-20/arch.jpg
    caption: 系統架構：硬體層、韌體層、軟體層、應用層
  - src: ../../../assets/projects/dsp-20/ui.png
    caption: 降落過程的地面站畫面與即時辨識
links:
  github: []
  video: https://youtu.be/EzeUrY9b8zE
featured: true
---

## 要解決的問題

無人機回收在軍事上是高風險環節，在民用上則耗人力又難自動化。單靠 GPS 與慣性導航，在訊號受限或需要高精度的場合不夠準。我們想做的是：**無人機自己找到移動的無人車、自己降落上去**。

## 做法：雙階段視覺降落

- **遠距：YOLO-FastestV2。** 在高處先辨識降落平台的大致位置。模型夠輕，能在機載電腦上維持高幀率、低延遲。
- **近距：AprilTag。** 接近到一定高度後切換成 AprilTag，做精確的位置與姿態修正。
- **控制：** 結合飛控回傳的姿態與視覺偏差，建立「高度—偏差補償」模型，邊下降邊做橫向修正。

實測降落誤差在**平台中心 15 公分內**；YOLO 的表現甚至好到能單獨完成整段降落。

## 系統整合

- 無人機、地面中控、無人車三個節點用 **WebSocket** 同步狀態與任務。
- 地面中控可在地圖上指定區域，控制無人機與無人車的起降。
- 無人車端用 Arduino 整合 GPS 與馬達驅動，成為移動式降落平台。

## 我負責的部分

整套系統的軟體與控制：雙模式視覺降落演算法、DroneKit 自主降落邏輯（高度判斷與橫向修正）、無人機與無人車之間的任務調度，以及大量外場測試與參數調校。
