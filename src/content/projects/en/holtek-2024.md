---
title: AIoT smart fridge
event: 19th Holtek Cup MCU Creative Contest
award: Finalist
date: 2024-12-21
summary: A Holtek MCU (BMduino) gathers many sensors over I²C, UART and SPI and shows readings on an LCD; a Raspberry Pi detects changes inside the fridge by image comparison, Gemini suggests recipes and LINE sends alerts.
tags: [AIoT, Embedded, Vision]
role: Software and firmware
stack: [Holtek MCU, BMduino, I²C, UART, SPI, HX711, Raspberry Pi 4B, OpenCV, MQTT, Gemini, LINE]
cover: ../../../assets/projects/holtek-2024/arch.jpg
gallery:
  - src: ../../../assets/projects/holtek-2024/arch.jpg
    caption: Architecture — hardware, firmware, software and application layers
links:
  github: []
featured: false
---

## The problem

You only know what is in the fridge, how long it has been there or whether something is wrong by opening the door — and forgotten food ends up in the bin.

## Approach

- **MCU side:** a Holtek MCU (BMduino) reads temperature / humidity, weight (HX711) and other sensors over several I²C, UART and SPI buses, sends everything out through a custom BMCOM-to-TTL interface, and shows live readings on an LCD.
- **Raspberry Pi side:** a camera watches the inside of the fridge; difference hashing (dHash) / SSIM detects when food is added or removed, and sensor data flags abnormal conditions.
- **Cloud and alerts:** data goes up over Wi-Fi via MQTT; Gemini suggests recipes from what is inside, and LINE pushes alerts when something is off.
