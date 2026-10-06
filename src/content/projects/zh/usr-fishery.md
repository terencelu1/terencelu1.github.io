---
title: USR 藏碳蘊漁：無人機魚塭監測
event: 大學社會責任實踐計畫（USR）
award: 計畫助理
kind: program
date: 2025-03-01
summary: 在地圖上點選起終點，系統自動規劃「己」字形航線，無人機邊飛邊垂直拍攝，再以 SIFT 特徵比對拼接成魚塭全景圖；並到魚塭與國小做無人機教學推廣。
tags: [UAV, Vision, Teaching]
stack: [DroneKit, pygame, OpenCV, SIFT, Raspberry Pi]
role: 軟體開發（航線規劃、地圖介面、影像拼接）與教學推廣
cover: ../../../assets/projects/usr-fishery/cover.jpg
gallery:
  - src: ../../../assets/projects/usr-fishery/group.jpg
    caption: 魚塭現地教學
  - src: ../../../assets/projects/usr-fishery/field.jpg
    caption: 國小操場的無人機示範
  - src: ../../../assets/projects/usr-fishery/school.jpg
    caption: 青草國小推廣活動
links:
  github: []
  news: https://www.cna.com.tw/postwrite/chi/402187
featured: false
---

## 要解決的問題

養殖戶要掌握整片魚塭的狀況，往往得親自巡一圈。我們想讓無人機自動飛一趟，產出一張完整的魚塭俯瞰圖。

## 做法

- **地圖介面（pygame）：** 在地圖上點選起點與終點。
- **「己」字形航線：** 自動計算來回掃描的航線，確保每一區都被拍到，並讓相鄰照片有足夠的重疊。
- **飛行與拍攝：** 航點傳到機載樹莓派，DroneKit 控制飛行、同時垂直向下拍照。
- **影像拼接：** OpenCV 以 SIFT 特徵比對相鄰照片，透視轉換後融合成全景圖；水面反光、光線變化與機身震動是主要的難點。

## 教學推廣

分兩階段：先帶大學生到魚塭現地學習，再到安南區青草國小向小朋友展示無人機怎麼應用在在地漁業。跟小朋友解釋影像拼接時，我把它比喻成「拼圖」。
