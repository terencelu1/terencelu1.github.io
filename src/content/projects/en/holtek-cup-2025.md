---
title: UAV × UGV Ground Control Station
event: 20th Holtek Cup MCU Creative Contest
award: Honorable Mention
date: 2025-12-20
summary: One web ground station to monitor, plan and command a drone and a ground vehicle together — live attitude, 3D map waypoints, telemetry playback and system health in one place.
tags: [UAV, UGV, Embedded, Edge]
stack: [Python, Flask, pymavlink, React, Mapbox GL, Three.js, ROS 2 Jazzy, Raspberry Pi 5, RPLIDAR C1, BMduino]
role: GCS; Raspberry Pi programs on the UAV and UGV (video, flight-controller telemetry and LiDAR point clouds); BMduino platform control (stepper motor)
cover: ../../../assets/projects/holtek-2025/1.png
gallery:
  - src: ../../../assets/projects/holtek-2025/1.png
    caption: Overview — both vehicles' status, attitude indicator, mission state and camera feeds
  - src: ../../../assets/projects/holtek-2025/2.png
    caption: Map & missions — Mapbox 3D campus map with waypoint manager
  - src: ../../../assets/projects/holtek-2025/3.png
    caption: System & power — link quality, compute load, health score and battery
links:
  github:
    - https://github.com/terencelu1/Holtek-Cup-GCS-2025
    - https://github.com/terencelu1/UGV_ROS2_LIDAR_C1
featured: true
---

## The problem

Drones and ground vehicles each have mature ground-station software, but when the two have to work together the operator juggles several windows and incompatible data formats. This project puts both into **one web ground station** that opens on any device with a browser.

## Architecture

<div class="arch" role="img" aria-label="Architecture: on the UAV, Pixhawk talks MAVLink to a Raspberry Pi adapter, which talks a custom protocol to the GCS; on the UGV, sensors go through ROS 2 and reach the GCS over WebSocket, MJPEG and HTTP">
  <p class="arch-label">UAV</p>
  <div class="arch-row">
    <div class="arch-node"><b>Pixhawk</b><span>flight controller</span></div>
    <div class="arch-link"><span>MAVLink</span></div>
    <div class="arch-node"><b>Raspberry Pi</b><span>protocol adapter</span></div>
    <div class="arch-link"><span>custom protocol</span></div>
    <div class="arch-node arch-node--hub"><b>GCS</b><span>Flask + React</span></div>
  </div>
  <p class="arch-label">UGV</p>
  <div class="arch-row">
    <div class="arch-node"><b>Sensors</b><span>RPLIDAR C1 · Camera 3 · IMU</span></div>
    <div class="arch-link"><span>ROS 2 /scan</span></div>
    <div class="arch-node"><b>Raspberry Pi 5</b><span>Ubuntu 24.04 · ROS 2 Jazzy</span></div>
    <div class="arch-link"><span>WebSocket · MJPEG · HTTP</span></div>
    <div class="arch-node arch-node--hub"><b>GCS</b><span>same interface</span></div>
  </div>
</div>

## Highlights

- **Custom binary protocol.** Packets start with `0xFF`, followed by source ID, target ID, command type, payload and an 8-bit additive checksum; 18 command types in total. Negative values use big-endian two's complement. The goal: easy to parse even on low-power vehicle hardware.
- **Two-way MAVLink ↔ custom protocol bridge.** A Raspberry Pi on the vehicle translates `HEARTBEAT`, `ATTITUDE`, `VFR_HUD` and other MAVLink messages into the GCS format, and turns GCS commands back into flight-controller commands.
- **Four ground-station views.**
  - *Overview*: attitude indicator, per-vehicle status cards, camera feeds, message center
  - *Map & missions*: Mapbox 2D/3D map, vehicle tracks, home point, waypoint planning
  - *Performance & logs*: attitude, RC input, speed and altitude history with playback and CSV export
  - *System & power*: update rate, heartbeat / latency / packet loss, compute load, a 0–100 health score
- **ROS 2 on the UGV.** A Pi 5 runs Ubuntu 24.04 + ROS 2 Jazzy; LiDAR scans stream to the GCS over WebSocket, the camera over MJPEG, and IMU data as HTTP JSON.
- **BMduino platform control.** A BMduino drives a stepper motor that moves the platform mechanism on the vehicle.

## My part

- **The GCS:** front end and back end of the web ground station.
- **Vehicle-side Raspberry Pi programs:** on both the drone and the UGV, sending video and flight-controller telemetry (attitude, speed, altitude and more) back to the GCS; the UGV also streams LiDAR point clouds.
- **BMduino platform control:** the stepper-motor control code.
