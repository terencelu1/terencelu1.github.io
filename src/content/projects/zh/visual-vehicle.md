---
title: 智能護伴：用自然語言指揮的載具
event: 校內視覺載具競賽
award: 第 3 名
date: 2025-06-12
summary: 結合無人車與機械手臂，用大語言模型理解口語指令，協助病患拿取物品、移動到指定地點；車體以 ESP32 + PID 控制，IMU 經卡爾曼濾波穩定朝向。
tags: [UGV, LLM, Vision, Embedded]
stack: [Gemini Flash, Python, ESP32, PID, Kalman Filter, OpenCV, gTTS, Live2D]
role: 視覺循線以外的全系統（LLM 指令規格、ESP32 韌體、PID 與濾波、整體串接）
cover: ../../../assets/projects/visual-vehicle/arch.jpg
gallery:
  - src: ../../../assets/projects/visual-vehicle/arch.jpg
    caption: 系統架構：ESP32、Raspberry Pi 4B、IMU、機械手臂與網頁介面
  - src: ../../../assets/projects/visual-vehicle/vehicle.png
    caption: 語音助理架構：語音辨識 → Gemini → 語音合成
links:
  github: []
featured: true
---

## 要解決的問題

在照護現場，病患想拿個東西都得等照護人員；傳統載具又要用遙控器或複雜介面操作，對行動不便的人並不友善。我們希望病患只要說一句「幫我拿桌上的藥」，載具就會去做。

## 做法

- **語音 → LLM → 動作。** 語音辨識後交給 Gemini Flash，並規定它輸出**結構化的指令格式**；Python 中介層解析後轉成載具能執行的動作（移動到點位、夾取物品）。
- **中控層。** 一個中介程式負責接住 LLM 的輸出、對接底層硬體，讓 AI 決策和馬達控制解耦。
- **互動介面。** 網頁端有 Live2D 角色，表情會跟著對話變化，並用 gTTS 把回覆念出來。

## 車體控制

- ESP32 以 PWM 驅動馬達，讀取 IMU 姿態。
- IMU 雜訊一開始讓車頭不停過度修正、來回震盪；在 ESP32 上加入**卡爾曼濾波**降噪，再重新調整 **PID** 參數，最後車體能穩定鎖定指定的 yaw 角，轉向平滑、停點準確。
- 循線部分用 OpenCV 二值化 + ROI。

## 我負責的部分

除了視覺循線以外的整套系統：制定 LLM 輸出規格、寫 ESP32 韌體（PWM 與濾波）、從零學 PID 並調參，並把語音、LLM、載具控制、介面回饋整條鏈路接起來。
