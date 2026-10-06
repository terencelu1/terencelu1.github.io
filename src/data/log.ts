import type { Lang } from '../i18n/ui';

type Kind = 'award' | 'program' | 'teaching' | 'event';

interface LogEntry {
  date: string;
  kind: Kind;
  award?: Record<Lang, string>;
  text: Record<Lang, string>;
  /** 對應的作品頁 slug；有的話時間軸那一列可以點 */
  slug?: string;
}

// 時間由新到舊
export const log: LogEntry[] = [
  {
    date: '2025.12',
    kind: 'award',
    award: { zh: '佳作', en: 'Honorable Mention' },
    text: { zh: '第 20 屆盛群杯 · UAV × UGV 中控系統', en: '20th Holtek Cup · UAV × UGV ground control station' },
    slug: 'holtek-cup-2025',
  },
  {
    date: '2025.12',
    kind: 'program',
    text: { zh: '碩士班先修課程 · 從一張照片估算沙拉營養', en: 'Graduate-level course · salad nutrition from a single photo' },
    slug: 'food-nutrition',
  },
  {
    date: '2025.11',
    kind: 'award',
    award: { zh: '優選', en: 'Merit Award' },
    text: { zh: '大手拉小手競賽 · 智慧藥盒健康監測系統', en: 'Hand-in-Hand Contest · smart pillbox health monitor' },
    slug: 'hand-in-hand',
  },
  {
    date: '2025.08',
    kind: 'program',
    text: { zh: 'iPBL 國際共學計畫 · 學員', en: 'iPBL international co-learning program · participant' },
  },
  {
    date: '2025.06',
    kind: 'award',
    award: { zh: '第 3 名', en: '3rd Place' },
    text: { zh: '校內視覺載具競賽 · 智能護伴（LLM 控制載具）', en: 'Vision Vehicle Contest · LLM-controlled assistive rover' },
    slug: 'visual-vehicle',
  },
  {
    date: '2025.05',
    kind: 'event',
    text: { zh: '高雄自動化工業展 · 無人機自動降落系統展出', en: 'Kaohsiung Automation Expo · exhibited drone auto-landing system' },
  },
  {
    date: '2025.05',
    kind: 'event',
    text: { zh: '技職盃黑客松全國賽 · 智慧公車站人流監控', en: 'TVE Hackathon national final · bus-stop crowd monitoring by drone' },
    slug: 'hackathon-national',
  },
  {
    date: '2025.04',
    kind: 'award',
    award: { zh: '佳作', en: 'Honorable Mention' },
    text: { zh: '技職盃黑客松中部分區賽 · AreaGuided 無人機導引', en: 'TVE Hackathon central regional · AreaGuided drone wayfinding' },
    slug: 'hackathon-central',
  },
  {
    date: '2025.03',
    kind: 'teaching',
    text: { zh: 'USR 藏碳蘊漁計畫 · 計畫助理（無人機魚塭監測）', en: 'USR fishery-carbon project · research assistant (drone pond monitoring)' },
    slug: 'usr-fishery',
  },
  {
    date: '2025.03',
    kind: 'award',
    award: { zh: '佳作', en: 'Honorable Mention' },
    text: { zh: '第 20 屆 DSP 創思設計競賽 · 無人機降落於無人車', en: '20th DSP Creative Design Contest · drone landing on a UGV' },
    slug: 'dsp-20',
  },
  {
    date: '2024.12',
    kind: 'event',
    award: { zh: '入選', en: 'Finalist' },
    text: { zh: '第 19 屆盛群杯 HOLTEK MCU 創意大賽 · AIoT 智慧冰箱', en: '19th Holtek Cup MCU Contest · AIoT smart fridge' },
    slug: 'holtek-2024',
  },
  {
    date: '2024.12',
    kind: 'award',
    award: { zh: '第 2 名', en: '2nd Place' },
    text: { zh: '校內 AIoT 期末競賽 · 智慧門控系統', en: 'AIoT Contest · smart door access system' },
    slug: 'aiot-door',
  },
  {
    date: '2024.08',
    kind: 'teaching',
    text: { zh: 'iPBL 國際共學計畫 · 助教（從零打造智慧無人機）', en: 'iPBL international program · TA (building a smart drone from scratch)' },
    slug: 'ipbl-2024',
  },
  {
    date: '2024.07',
    kind: 'program',
    text: { zh: '中正大學 無人機設計與製造儲訓班', en: 'CCU drone design & manufacturing training program' },
  },
  {
    date: '2024.03',
    kind: 'award',
    award: { zh: '佳作', en: 'Honorable Mention' },
    text: { zh: '第 19 屆 DSP 創思設計競賽 · 無人機警衛系統', en: '19th DSP Creative Design Contest · drone security guard system' },
    slug: 'dsp-19',
  },
  {
    date: '2024.01',
    kind: 'program',
    text: { zh: 'Microchip 校園菁英班', en: 'Microchip campus elite program' },
  },
  {
    date: '2023.12',
    kind: 'teaching',
    text: { zh: '新工程教育計畫 · 機械手臂教案製作', en: 'New Engineering Education project · robot-arm teaching materials' },
    slug: 'new-engineering',
  },
];

export const awardCount = log.filter((e) => e.kind === 'award').length;
