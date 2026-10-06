---
title: 從一張照片估算沙拉營養
event: 碩士班先修課程（大學部）
kind: course
date: 2025-12-26
summary: SAM 切出沙拉中的每種食材、DPT-Hybrid 估深度換算體積，再由 Gemini Vision 校正參數，算出熱量、蛋白質、碳水、脂肪與纖維。
tags: [Vision, LLM]
stack: [PyTorch, SAM ViT-H, DPT-Hybrid (MiDaS), Gemini Vision, YOLO, OpenCV]
cover: ../../../assets/projects/food-nutrition/03_sam_segmentation_result.jpg
gallery:
  - src: ../../../assets/projects/food-nutrition/01_original_image.jpg
    caption: 輸入影像
  - src: ../../../assets/projects/food-nutrition/03_sam_segmentation_result.jpg
    caption: SAM 分割出的各食材區域
  - src: ../../../assets/projects/food-nutrition/04_dpt_depth_map.jpg
    caption: DPT-Hybrid 深度圖，用來估算體積
  - src: ../../../assets/projects/food-nutrition/05_final_analysis_result.png
    caption: 最終營養分析報告
links:
  github:
    - https://github.com/terencelu1/Food-Nutrition-Estimation-Using-Vision-Transformers
featured: false
---

## 流程

1. **分割：** 用 SAM（Segment Anything, ViT-H）把沙拉中的每種食材切成獨立區域。
2. **深度：** DPT-Hybrid（MiDaS）估計深度圖，結合面積換算每個區域的體積。
3. **校正：** Gemini Vision 辨識食材種類並校正密度等參數，讓估算更接近實際。
4. **營養：** 依食材與重量計算總熱量、蛋白質、碳水化合物、脂肪與纖維，輸出含視覺化結果的中文報告。

另外也訓練了 YOLO 模型做食材偵測，作為對照。

## 備註

Gemini API 金鑰一律從環境變數讀取，不寫在程式碼裡。
