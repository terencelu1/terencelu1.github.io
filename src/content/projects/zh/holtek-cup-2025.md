---
title: UAV × UGV 中控系統
event: 第 20 屆盛群杯 HOLTEK MCU 創意大賽
award: 佳作
date: 2025-12-20
summary: 讓一台無人機和一台無人車在同一個網頁中控上被監看、規劃與指揮：即時姿態、3D 地圖航點、性能回放與系統健康，一次看完。
tags: [UAV, UGV, Embedded, Edge]
stack: [Python, Flask, pymavlink, React, Mapbox GL, Three.js, ROS 2 Jazzy, Raspberry Pi 5, RPLIDAR C1, BMduino]
role: 中控 GCS；無人機與無人車上的樹莓派程式（影像、飛控數據與 LiDAR 點雲回傳）；BMduino 平台控制（步進馬達）
cover: ../../../assets/projects/holtek-2025/1.png
gallery:
  - src: ../../../assets/projects/holtek-2025/1.png
    caption: 總覽：雙載具狀態、姿態儀、任務狀態與鏡頭畫面
  - src: ../../../assets/projects/holtek-2025/2.png
    caption: 地圖與任務：Mapbox 3D 校園地圖與航點管理
  - src: ../../../assets/projects/holtek-2025/3.png
    caption: 系統與電源：連線品質、運算模組負載、健康分數與電量
links:
  github:
    - https://github.com/terencelu1/Holtek-Cup-GCS-2025
    - https://github.com/terencelu1/UGV_ROS2_LIDAR_C1
featured: true
---

## 要解決的問題

無人機和無人車各自都有成熟的地面站軟體，但兩台載具要協同作業時，操作員得在好幾個視窗之間切換，資料格式也不一致。這個作品把兩者收進**同一個網頁中控**，任何有瀏覽器的裝置都能打開。

## 系統架構

<div class="arch" role="img" aria-label="系統架構：UAV 端 Pixhawk 經 MAVLink 接樹莓派轉接，再以自訂協定接中控；UGV 端感測器經 ROS 2 與 WebSocket、MJPEG、HTTP 接中控">
  <p class="arch-label">UAV</p>
  <div class="arch-row">
    <div class="arch-node"><b>Pixhawk</b><span>飛控</span></div>
    <div class="arch-link"><span>MAVLink</span></div>
    <div class="arch-node"><b>Raspberry Pi</b><span>協定轉接</span></div>
    <div class="arch-link"><span>自訂協定</span></div>
    <div class="arch-node arch-node--hub"><b>中控 GCS</b><span>Flask + React</span></div>
  </div>
  <p class="arch-label">UGV</p>
  <div class="arch-row">
    <div class="arch-node"><b>感測器</b><span>RPLIDAR C1 · Camera 3 · IMU</span></div>
    <div class="arch-link"><span>ROS 2 /scan</span></div>
    <div class="arch-node"><b>Raspberry Pi 5</b><span>Ubuntu 24.04 · ROS 2 Jazzy</span></div>
    <div class="arch-link"><span>WebSocket · MJPEG · HTTP</span></div>
    <div class="arch-node arch-node--hub"><b>中控 GCS</b><span>同一個介面</span></div>
  </div>
</div>

## 技術重點

- **自訂二進位通訊協定。** 封包以 `0xFF` 起始，接著是來源 ID、目標 ID、指令類型、資料與 8-bit 累加校驗和，共定義 18 種指令。負數一律用大端序的二補數編碼。設計目標是讓算力有限的載具端也能輕鬆解析。
- **MAVLink ↔ 自訂協定雙向轉換。** 載具端的樹莓派負責轉接，把 `HEARTBEAT`、`ATTITUDE`、`VFR_HUD` 等 MAVLink 訊息轉成中控格式，也把中控指令轉回飛控看得懂的命令。
- **四個中控頁面。**
  - *總覽*：姿態儀、雙載具狀態卡、鏡頭畫面、訊息中心
  - *地圖與任務*：Mapbox 2D／3D 地圖、載具軌跡、Home Point、航點規劃
  - *性能與記錄*：姿態、RC 輸入、速度、高度的歷史圖表，可回放、可匯出 CSV
  - *系統與電源*：更新頻率設定、心跳／延遲／掉包率、運算模組負載、0–100 健康分數
- **無人車端用 ROS 2。** Pi 5 上跑 Ubuntu 24.04 + ROS 2 Jazzy，LiDAR 掃描經 WebSocket 即時推送到中控，相機以 MJPEG 串流，IMU 資料走 HTTP JSON。
- **BMduino 平台控制。** 以 BMduino 驅動步進馬達，控制載具上的平台機構。

## 我負責的部分

- **中控 GCS**：整個網頁中控的前後端。
- **載具端樹莓派程式**：無人機與無人車上的樹莓派負責把影像和飛控數據（姿態、速度、高度等）回傳中控；無人車另外回傳 LiDAR 點雲。
- **BMduino 平台控制**：步進馬達的控制程式。
