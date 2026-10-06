---
title: "AreaGuided: drone wayfinding"
event: 2025 TVE Hackathon · Central Regional
award: Honorable Mention
date: 2025-04-20
summary: A navigation service built in 30 hours — call a drone from an app and it flies ahead to lead you to your destination. Routes are planned automatically and the demo ran in DroneKit-SITL.
tags: [UAV]
stack: [DroneKit-SITL, MAVLink, WebSocket, Web UI, Path planning, Mobile app]
role: System integration and technical lead (SITL, WebSocket, ground-station UI, demo)
cover: ../../../assets/projects/hackathon-central/cover.jpg
gallery:
  - src: ../../../assets/projects/hackathon-central/sim.jpg
    caption: DroneKit-SITL simulation and ground-station view
  - src: ../../../assets/projects/hackathon-central/ui.png
    caption: Ground station — drone position, planned route and status
  - src: ../../../assets/projects/hackathon-central/arch.jpg
    caption: Architecture
  - src: ../../../assets/projects/hackathon-central/app.jpg
    caption: Mobile app — call a drone and pick a destination
  - src: ../../../assets/projects/hackathon-central/work.jpg
    caption: Mid-way through the 30 hours
  - src: ../../../assets/projects/hackathon-central/team.jpg
    caption: The team
links:
  github: []
featured: false
---

## The problem

In large campuses, malls or after big events, unclear maps and tangled routes put people off walking. Our idea: **let a drone fly ahead and lead the way**, encouraging walking and cutting emissions.

## Approach

- The user calls a drone in the app and picks a destination.
- The ground station plans a route with a greedy algorithm and sends waypoints to the drone.
- Flying was not allowed at the venue, so we built a realistic **DroneKit-SITL** simulation synced over **WebSocket** — judges watched the drone take off, guide and arrive on a web map.

## Getting it done in 30 hours

Three people working in parallel with a clear split — hardware, app and back-end integration — joined through interfaces agreed up front.

## My part

Integration and technical lead: schedule and task split, the SITL environment, WebSocket messaging and the web ground station, plus running the live demo and technical pitch.
