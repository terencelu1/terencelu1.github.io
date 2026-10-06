---
title: A robot arm that listens, sees and plays games
event: New Engineering Education Project
award: Curriculum Developer
kind: program
date: 2023-12-01
summary: Teaching material for the Ministry of Education New Engineering Education project — YOLOv5n reads the board on a Raspberry Pi, Google Speech takes voice commands, and threads handle listening, seeing and moving at once so the arm can play a game with you.
tags: [Vision, Embedded, Teaching]
stack: [YOLOv5n, Google Speech API, Python threading, Arduino, Elephant Robotics arm, Raspberry Pi]
role: Built almost entirely on my own — model training and deployment, speech, Arduino firmware, integration
cover: ../../../assets/projects/new-engineering/cover.jpg
gallery:
  - src: ../../../assets/projects/new-engineering/arm.jpg
    caption: Arm joint and servo
  - src: ../../../assets/projects/new-engineering/results.png
    caption: YOLO training curves
links:
  github: []
featured: false
---

## The project

The school was commissioned to develop teaching material under the Ministry of Education New Engineering Education program; our team took the robot-arm topic. We chose a board game because students can see the whole observe → decide → act loop.

## Approach

- **Vision:** built and labelled a dataset and trained YOLO to read the Xs and Os on the board. YOLOv5s was too heavy for the Raspberry Pi, so **YOLOv5n** was used for real-time inference.
- **Speech:** Google Speech API takes commands like "move to the top left" or "pick up the round piece", combined with the vision result to choose an action.
- **Concurrency:** threads keep speech listening, image analysis and arm control running independently but coordinated.
- **Hardware:** Arduino firmware drives the servos (PWM) and parses commands from the Pi; when the original arm broke, I evaluated and switched to an Elephant Robotics arm and rewrote the control flow.

## What I took away

My first time training and deploying a deep-learning model, and my first multi-module, multi-threaded system — the structure I learned here shows up in almost every project since.
