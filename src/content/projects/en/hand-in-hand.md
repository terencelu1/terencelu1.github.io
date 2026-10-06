---
title: Smart pillbox with health monitoring
event: Hand-in-Hand Contest
award: Merit Award
date: 2025-11-29
summary: The pillbox opens only after a fingerprint check and measures heart rate, SpO₂ and temperature at the same time; a BMduino handles sensing and control, a Raspberry Pi serves a REST API and checks medication by vision, and a Flutter app shows live values and 7-day trends.
tags: [AIoT, Embedded, Vision]
role: Software and firmware
stack: [BMduino BM53A367A, AS608, MAX30102, GY-906, Raspberry Pi, REST API, Flutter, Riverpod]
links:
  github:
    - https://github.com/terencelu1/hand_in_hand_aiot_project
featured: false
---

## The problem

Older people often forget or mix up medication, and carers find it hard to keep track of their health. We tied two things together: every time the pillbox is opened, a health reading is recorded.

## Architecture

<div class="arch" role="img" aria-label="Architecture: the BMduino handles sensing and control and connects over USB serial to a Raspberry Pi, which serves a REST API to the Flutter app">
  <div class="arch-row">
    <div class="arch-node"><b>BMduino</b><span>fingerprint · HR/SpO₂ · temp · relays</span></div>
    <div class="arch-link"><span>USB serial 115200</span></div>
    <div class="arch-node"><b>Raspberry Pi</b><span>database · pill check</span></div>
    <div class="arch-link"><span>REST API</span></div>
    <div class="arch-node arch-node--hub"><b>Flutter app</b><span>live values · trends</span></div>
  </div>
</div>

## Approach

- **Three modes on the BMduino:**
  - *Standby*: keep watching the sensors
  - *Active*: after an AS608 fingerprint match, measure heart rate and SpO₂ (MAX30102) and temperature (GY-906)
  - *Receive*: run commands from the Pi and drive relays to unlock the right compartment
- **Standard protocol:** fixed-format packets between BMduino and Pi over native USB.
- **Raspberry Pi:** stores history, checks medication with computer vision and serves a REST API.
- **Flutter app:** live readings, 7-day trend charts, multiple patients, a frosted-glass UI.
