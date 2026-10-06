---
title: AIoT 智慧冰箱
event: 第 19 屆盛群杯 HOLTEK MCU 創意大賽
award: 入選
date: 2024-12-21
summary: 以 Holtek MCU（BMduino）整合多組感測器，透過 I²C、UART、SPI 匯流資料並顯示在 LCD；樹莓派用影像比對判斷冰箱內容變化，再由 Gemini 推薦食譜、LINE 推播通知。
tags: [AIoT, Embedded, Vision]
role: 軟體與韌體
stack: [Holtek MCU, BMduino, I²C, UART, SPI, HX711, Raspberry Pi 4B, OpenCV, MQTT, Gemini, LINE]
cover: ../../../assets/projects/holtek-2024/arch.jpg
gallery:
  - src: ../../../assets/projects/holtek-2024/arch.jpg
    caption: 系統架構：硬體層、韌體層、軟體層、應用層
links:
  github: []
featured: false
---

## 要解決的問題

冰箱裡有什麼、放了多久、環境是否異常，通常要打開門才知道；食材買了卻忘了用，最後只好丟掉。

## 做法

- **MCU 端：** 以 Holtek MCU（BMduino）為核心，用多組 I²C、UART、SPI 接上溫濕度、重量（HX711）等感測器，自訂 BMCOM 轉 TTL 的介面把資料統一送出，並在 LCD 上即時顯示。
- **樹莓派端：** 用鏡頭拍攝冰箱內部，以差值雜湊（dHash）／SSIM 比對影像變化，判斷食材是否被取用或新增；結合感測器資料判斷環境是否異常。
- **雲端與通知：** 資料透過 Wi-Fi 以 MQTT 上傳；Gemini 依現有食材推薦食譜，異常時以 LINE 推播提醒。
