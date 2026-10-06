---
title: Salad nutrition from a single photo
event: Graduate-level course (taken as an undergraduate)
kind: course
date: 2025-12-26
summary: SAM segments each ingredient, DPT-Hybrid estimates depth to get volume, and Gemini Vision calibrates the parameters — yielding calories, protein, carbs, fat and fibre.
tags: [Vision, LLM]
stack: [PyTorch, SAM ViT-H, DPT-Hybrid (MiDaS), Gemini Vision, YOLO, OpenCV]
cover: ../../../assets/projects/food-nutrition/03_sam_segmentation_result.jpg
gallery:
  - src: ../../../assets/projects/food-nutrition/01_original_image.jpg
    caption: Input image
  - src: ../../../assets/projects/food-nutrition/03_sam_segmentation_result.jpg
    caption: Ingredient regions segmented by SAM
  - src: ../../../assets/projects/food-nutrition/04_dpt_depth_map.jpg
    caption: DPT-Hybrid depth map used for volume
  - src: ../../../assets/projects/food-nutrition/05_final_analysis_result.png
    caption: Final nutrition report
links:
  github:
    - https://github.com/terencelu1/Food-Nutrition-Estimation-Using-Vision-Transformers
featured: false
---

## Pipeline

1. **Segment:** SAM (Segment Anything, ViT-H) splits the salad into one region per ingredient.
2. **Depth:** DPT-Hybrid (MiDaS) estimates a depth map; combined with area it gives each region's volume.
3. **Calibrate:** Gemini Vision identifies ingredients and calibrates density and other parameters.
4. **Nutrition:** from ingredient and weight, compute calories, protein, carbs, fat and fibre, and output a report with visualisations.

A YOLO ingredient detector was also trained as a comparison.

## Note

The Gemini API key is always read from an environment variable, never hard-coded.
