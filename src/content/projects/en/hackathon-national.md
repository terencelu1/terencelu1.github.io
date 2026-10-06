---
title: Bus-stop crowd monitoring and dispatch
event: 2025 TVE Hackathon · National Final
date: 2025-05-29
summary: A drone films bus stops from above, locates them with AprilTag, stabilises tracking with CSRT and counts people; the ground station then suggests extra buses or a shuttle.
tags: [UAV, Vision]
stack: [DroneKit-SITL, MAVLink, AprilTag, CSRT, OpenCV, WebSocket, Web UI]
role: Web ground station, system integration and live demo
cover: ../../../assets/projects/hackathon-national/cover.jpg
gallery:
  - src: ../../../assets/projects/hackathon-national/arch.jpg
    caption: Architecture
  - src: ../../../assets/projects/hackathon-national/demo.jpg
    caption: Demo map marked with AprilTags
links:
  github: []
  video: https://www.youtube.com/live/SbkAAlBGK-s?t=11878
featured: false
---

## The problem

When a big event ends, bus dispatch is mostly guesswork: too many buses wastes resources, too few leaves people stranded. We wanted dispatch suggestions driven by **live crowd data from above**.

## Approach

- The drone can be redeployed anywhere and films the stops from altitude.
- **AprilTag** marks each stop area in the frame, **CSRT** keeps tracking stable, and people are counted.
- The ground station shows head counts per stop on a map and suggests a response: a shuttle when crowds are small, extra runs when they are large.
- The code was restructured into modules that share one data format over WebSocket.

## My part

The web ground station (live drone status, video and crowd analysis), keeping drone, ground station and web views in sync, and leading the live demo and Q&A.
