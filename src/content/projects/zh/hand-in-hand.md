---
title: 智慧藥盒健康監測系統
event: 大手拉小手競賽
award: 優選
date: 2025-11-29
summary: 指紋驗證身分後才開藥盒，同時量測心率、血氧與體溫；BMduino 負責感測與控制，樹莓派提供 REST API 與藥物影像辨識，Flutter App 顯示即時數值與 7 天趨勢。
tags: [AIoT, Embedded, Vision]
role: 軟體與韌體
stack: [BMduino BM53A367A, AS608, MAX30102, GY-906, Raspberry Pi, REST API, Flutter, Riverpod]
links:
  github:
    - https://github.com/terencelu1/hand_in_hand_aiot_project
featured: false
---

## 要解決的問題

長者常忘記吃藥、吃錯藥，照顧者也很難隨時掌握他們的身體狀況。我們把「按時取藥」和「量測生理數值」綁在一起：每次打開藥盒，就順便留下一筆健康紀錄。

## 系統架構

<div class="arch" role="img" aria-label="系統架構：BMduino 感測與控制，經 USB 串口連到樹莓派，樹莓派以 REST API 提供給 Flutter App">
  <div class="arch-row">
    <div class="arch-node"><b>BMduino</b><span>指紋 · 心率血氧 · 體溫 · 繼電器</span></div>
    <div class="arch-link"><span>USB 串口 115200</span></div>
    <div class="arch-node"><b>Raspberry Pi</b><span>資料庫 · 藥物辨識</span></div>
    <div class="arch-link"><span>REST API</span></div>
    <div class="arch-node arch-node--hub"><b>Flutter App</b><span>即時數值 · 趨勢</span></div>
  </div>
</div>

## 做法

- **三種運作模式（BMduino）：**
  - *待機*：持續監看感測器
  - *工作*：AS608 指紋辨識成功後，用 MAX30102 量心率血氧、GY-906 量體溫
  - *接收*：執行樹莓派送來的命令，控制繼電器開啟對應藥格的電磁鎖
- **標準化通訊協定：** BMduino 與樹莓派之間以 Native USB 傳送固定格式的封包。
- **樹莓派：** 儲存歷史紀錄、以電腦視覺檢查藥物，並提供 REST API。
- **Flutter App：** 即時數值、7 天趨勢圖、多位病患切換，毛玻璃風格介面。
