---
title: Drone security guard with tracking and identity check
event: 19th DSP Creative Design Contest
award: Honorable Mention
date: 2024-03-15
summary: A drone locks onto a person with face recognition, keeps tracking with CSRT and holds a 1.6 m distance using ToF ranging; it can also guide visitors along set routes, with leave requests handled through an app and the cloud.
tags: [UAV, Vision]
stack: [OpenCV, CSRT, DroneKit, MAVLink, ToF LiDAR, Raspberry Pi 4B, Pixhawk 4, Google Drive API, App Inventor]
role: Full-stack software (visual tracking, flight logic, cloud and app)
cover: ../../../assets/projects/dsp-19/cover.jpg
gallery:
  - src: ../../../assets/projects/dsp-19/arch.jpg
    caption: Architecture — hardware, firmware, software and application layers
  - src: ../../../assets/projects/dsp-19/event.jpg
    caption: Poster and demo at the competition
  - src: ../../../assets/projects/dsp-19/team.jpg
    caption: The team with the drone
  - src: ../../../assets/projects/dsp-19/app.jpg
    caption: Leave-request app built with App Inventor
links:
  github: []
  video: https://youtu.be/_obNsRrEifk
featured: false
---

## The problem

Access control cannot actively respond to suspicious people, and guiding visitors takes staff time. We wanted a drone that patrols like a guard and also leads the way like a guide.

## Approach

- **Face recognition hands off to CSRT.** Face recognition picks the target, then a CSRT tracker follows it; when tracking confidence drops, recognition runs again. Compared with recognising every frame this **doubled the frame rate** and held up better under changing light.
- **Distance keeping.** A TF Mini ToF sensor measures range in real time and DroneKit corrects position to hold about **1.6 m** — close enough to watch, far enough not to intimidate.
- **Guiding.** The ground station sets a route and the drone leads a visitor to the destination.
- **Leave requests.** An App Inventor app uploads requests through the Google Drive API for staff to review and approve; QR codes are verified with PyZbar.

## My part

All the software: the tracking pipeline, DroneKit flight logic (tracking, distance keeping, return-to-home), the Google Drive back end and the leave-request app.
