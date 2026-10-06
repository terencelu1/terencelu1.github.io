---
title: "USR fishery project: drone pond monitoring"
event: University Social Responsibility (USR) Project
award: Research Assistant
kind: program
date: 2025-03-01
summary: Pick start and end points on a map, get an automatic back-and-forth flight path, fly and shoot straight down, then stitch the photos into a pond panorama with SIFT matching — plus drone outreach at the fish farm and a primary school.
tags: [UAV, Vision, Teaching]
stack: [DroneKit, pygame, OpenCV, SIFT, Raspberry Pi]
role: Software (path planning, map UI, image stitching) and outreach
links:
  github: []
  news: https://www.cna.com.tw/postwrite/chi/402187
featured: false
---

## The problem

Fish farmers usually have to walk around a whole pond to check on it. We wanted a drone to fly over automatically and produce one complete overhead image.

## Approach

- **Map UI (pygame):** pick start and end points on a map.
- **Back-and-forth path:** automatically plan a lawn-mower scan that covers every area with enough overlap between neighbouring photos.
- **Flight and capture:** waypoints go to the onboard Raspberry Pi; DroneKit flies the route while the camera shoots straight down.
- **Stitching:** OpenCV matches neighbouring photos with SIFT features, warps and blends them into a panorama — water glare, changing light and airframe vibration were the hard parts.

## Outreach

Two stages: first taking university students to the fish farm, then visiting Qingcao Elementary School in Annan to show children how drones help local fisheries. For the kids, I explained image stitching as a jigsaw puzzle.
