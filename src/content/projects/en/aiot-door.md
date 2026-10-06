---
title: Smart door access system
event: AIoT Contest
award: 2nd Place
date: 2024-12-27
summary: Real-time recognition of family members and strangers with MobileNetV2 on a Raspberry Pi — new members enrolled in minutes without retraining — plus a Flutter app, LINE alerts and an indoor info panel.
tags: [AIoT, Vision, Edge]
stack: [MobileNetV2, OpenCV, Raspberry Pi 4B, ESP32, Flutter, LINE Bot, Gemini, WebSocket]
role: System architecture and most of the development (recognition, three-way messaging, UI)
cover: ../../../assets/projects/aiot-door/cover.jpg
gallery:
  - src: ../../../assets/projects/aiot-door/arch.jpg
    caption: Architecture — hardware, firmware, software and application layers
  - src: ../../../assets/projects/aiot-door/build.jpg
    caption: The door unit — camera, electromagnetic lock and control boards
links:
  github: []
  video: https://youtu.be/ktxfUoZdEiE
featured: true
---

## The problem

Forgotten keys, no way to check who is at the door remotely, and finding out about trouble only afterwards — conventional door locks are passive. We wanted a door that recognises people, raises alerts and can be controlled remotely.

## Approach

- **Switched recognition to MobileNetV2.** The original OpenCV pipeline was too slow; MobileNetV2 made inference about 3× faster, enough for real time on a Raspberry Pi.
- **Incremental feature updates.** Adding a family member only updates stored feature vectors instead of retraining the model — enrolment went from hours to minutes.
- **Asynchronous design.** Recognition, messaging and UI run independently so none blocks the others.

## Three endpoints

- **Flutter app:** live camera view and remote lock / unlock.
- **LINE Bot:** push alerts when a stranger is detected.
- **Indoor tablet:** event log, weather (Central Weather Administration API) and Gemini outfit suggestions.
- A physical button by the door also opens it through a relay.

## My part

Technical lead: designed the modular architecture, connected the Raspberry Pi, mobile app and LINE Bot, and built the model swap and incremental-learning mechanism.
