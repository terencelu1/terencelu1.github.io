---
title: Assistive rover driven by natural language
event: Vision Vehicle Contest
award: 3rd Place
date: 2025-06-12
summary: A rover with a robot arm that understands spoken requests through an LLM — fetching objects and driving to places for patients — with ESP32 + PID drive control and Kalman-filtered heading.
tags: [UGV, LLM, Vision, Embedded]
stack: [Gemini Flash, Python, ESP32, PID, Kalman Filter, OpenCV, gTTS, Live2D]
role: Everything except line following (LLM command spec, ESP32 firmware, PID and filtering, end-to-end integration)
cover: ../../../assets/projects/visual-vehicle/cover.jpg
gallery:
  - src: ../../../assets/projects/visual-vehicle/arch.jpg
    caption: Architecture — ESP32, Raspberry Pi 4B, IMU, robot arm and web interface
  - src: ../../../assets/projects/visual-vehicle/vehicle.png
    caption: Voice assistant pipeline — speech-to-text → Gemini → text-to-speech
  - src: ../../../assets/projects/visual-vehicle/demo.jpg
    caption: Demo for the judges
links:
  github: []
featured: true
---

## The problem

In care settings, a patient who wants something nearby has to wait for staff, and remote-controlled vehicles are hard to use for people with limited mobility. We wanted a patient to simply say "bring me the medicine on the table" — and have the rover do it.

## Approach

- **Speech → LLM → action.** Speech is transcribed and sent to Gemini Flash, which must reply in a **structured command format**; a Python middle layer parses it into actions the rover can run (go to a waypoint, pick up an object).
- **Control layer.** A middle program receives the LLM output and talks to the hardware, decoupling AI decisions from motor control.
- **Interface.** The web UI has a Live2D character whose expression follows the conversation, with replies spoken via gTTS.

## Drive control

- An ESP32 drives the motors with PWM and reads IMU attitude.
- At first, IMU noise made the rover over-correct and oscillate. Adding a **Kalman filter** on the ESP32 and re-tuning the **PID** loop let it hold a target yaw steadily, turning smoothly and stopping accurately.
- Line following uses OpenCV thresholding with an ROI.

## My part

Everything except line following: the LLM output spec, ESP32 firmware (PWM and filtering), learning and tuning PID from scratch, and wiring speech, LLM, vehicle control and UI feedback into one loop.
