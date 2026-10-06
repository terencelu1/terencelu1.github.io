---
title: 會聽、會看、會下棋的機械手臂
event: 新工程教育計畫
award: 教案開發
kind: program
date: 2023-12-01
summary: 為教育部新工程教育計畫開發機械手臂教案：YOLOv5n 在樹莓派上辨識棋盤、Google Speech 接收語音指令，多執行緒同時處理聽、看、動，讓手臂能跟人下棋。
tags: [Vision, Embedded, Teaching]
stack: [YOLOv5n, Google Speech API, Python threading, Arduino, 大象機械手臂, Raspberry Pi]
role: 幾乎獨立完成：模型訓練與部署、語音模組、Arduino 韌體、系統整合
gallery:
  - src: ../../../assets/projects/new-engineering/arm.jpg
    caption: 機械手臂關節與伺服馬達
  - src: ../../../assets/projects/new-engineering/results.png
    caption: YOLO 模型訓練曲線
links:
  github: []
featured: false
---

## 計畫內容

學校受教育部新工程教育計畫委託開發教案，我們負責機械手臂主題。選擇「下棋」作為情境，因為學生能直接看到 AI「觀察 → 判斷 → 動作」的完整流程。

## 做法

- **視覺：** 自己建資料集、標註並訓練 YOLO 辨識棋盤上的圈叉。原本用 YOLOv5s，但樹莓派跑不動，改用 **YOLOv5n** 才能即時推論。
- **語音：** 用 Google Speech API 接收「移動到左上角」「抓圓形棋子」這類指令，再結合影像結果決定動作。
- **並行處理：** 用 threading 讓語音監聽、影像分析、手臂控制各自執行又能即時協調。
- **硬體：** 寫 Arduino 韌體控制伺服馬達（PWM）並解析樹莓派送來的指令；原本的手臂損壞後，評估並改用大象機器人手臂，重寫整套控制流程。

## 收穫

這是我第一次訓練、部署深度學習模型，也是第一次寫多模組、多執行緒的系統——之後幾乎每個作品都用上了這次學到的架構。
