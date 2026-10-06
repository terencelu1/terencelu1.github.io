---
title: Drone landing on a ground vehicle
event: 20th DSP Creative Design Contest
award: Honorable Mention
date: 2025-03-15
summary: A drone finds a UGV with two-stage vision (YOLO-FastestV2 far, AprilTag near) and lands on it autonomously — within 15 cm of the pad center — making recovery fully unmanned.
tags: [UAV, UGV, Vision, Edge]
stack: [YOLO-FastestV2, AprilTag, DroneKit, MAVLink, WebSocket, Raspberry Pi 5, Pixhawk 4]
role: System software and flight control (vision landing, autopilot logic, task coordination)
cover: ../../../assets/projects/dsp-20/cover.jpg
gallery:
  - src: ../../../assets/projects/dsp-20/arch.jpg
    caption: Architecture — hardware, firmware, software and application layers
  - src: ../../../assets/projects/dsp-20/ui.png
    caption: Ground station view and live detection during a landing
links:
  github: []
  video: https://youtu.be/EzeUrY9b8zE
featured: true
---

## The problem

Recovering a drone is dangerous in military settings and labour-intensive in civilian ones. GPS and inertial navigation alone are not precise enough when signal is limited or accuracy matters. The goal: **a drone that finds a moving ground vehicle and lands on it by itself.**

## Approach: two-stage visual landing

- **Far: YOLO-FastestV2.** From altitude, locate the landing platform roughly. The model is light enough to keep a high frame rate and low latency on the onboard computer.
- **Near: AprilTag.** Below a set height, switch to AprilTag for precise position and attitude correction.
- **Control:** combine flight-controller attitude with visual offset into a height-to-offset compensation model, correcting laterally while descending.

Field tests landed **within 15 cm of the pad center**; YOLO alone turned out good enough to complete a full landing.

## Integration

- Drone, ground station and UGV stay in sync over **WebSocket**.
- The ground station lets an operator pick areas on a map and command take-off / landing for both vehicles.
- The UGV uses an Arduino with GPS and motor drivers to act as a mobile landing pad.

## My part

All system software and control: the dual-mode vision landing, DroneKit autonomous landing logic (height checks and lateral correction), task scheduling between drone and UGV, and many rounds of field testing and tuning.
