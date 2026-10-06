export const EMAIL = 'terencelu.taiwan@gmail.com';
export const GITHUB = 'https://github.com/terencelu1';

export const languages = { zh: '中', en: 'EN' } as const;
export type Lang = keyof typeof languages;

export const ui = {
  zh: {
    'site.title': '盧亭潤 Terence Lu',
    'site.description': '盧亭潤的作品集 — 碩士生，研究毫米波雷達跌倒偵測與邊緣運算；無人機、無人車與 AIoT 系統整合。',
    'nav.home': 'home',
    'nav.research': 'research',
    'nav.projects': 'projects',
    'nav.log': 'log',
    'nav.contact': 'contact',
    'theme.toggle': '切換深淺色',
    'lang.switch': '切換語言',
    'hero.role': '碩士生 · 毫米波雷達 × 邊緣運算',
    'hero.intro':
      '我做的東西多半是「感測 → 運算 → 控制」的完整系統：從無人機、無人車到 AIoT 裝置，把感測器、嵌入式板子與網頁中控串在一起。現在把這些經驗帶進研究，用毫米波雷達做非接觸式的跌倒偵測，並讓模型能在邊緣裝置上即時運行。',
    'status.focus': '研究',
    'status.focusValue': 'mmWave · Edge AI',
    'status.awards': '競賽獲獎',
    'status.location': '所在地',
    'status.locationValue': 'Taiwan',
    'status.time': '當地時間',
    'research.title': '研究方向',
    'research.status': '進行中',
    'research.mmwave.title': '毫米波雷達跌倒偵測',
    'research.mmwave.body':
      '以毫米波雷達量測人體的距離、速度與姿態變化，辨識跌倒事件。雷達不拍攝影像，能兼顧隱私，也不受光線影響，適合用在居家與長照環境。',
    'research.edge.title': '邊緣運算',
    'research.edge.body':
      '讓偵測模型直接在嵌入式平台上推論：輕量化、低延遲、低功耗，資料不必上傳雲端也能即時反應。',
    'projects.title': '精選作品',
    'projects.more': '查看詳細',
    'projects.pending': '詳細頁整理中',
    'projects.viewAll': '看全部作品',
    'projects.allTitle': '全部作品',
    'projects.allIntro': '競賽、計畫與課堂專題，依時間由新到舊。點標籤可以篩選。',
    'filter.all': '全部',
    'filter.label': '依領域篩選',
    'project.prev': '較新',
    'project.next': '較舊',
    'log.title': '經歷',
    'contact.title': '聯絡',
    'contact.body': '研究合作、專案或任何問題，都歡迎來信。',
    'contact.copy': '複製',
    'contact.copied': '已複製',
    'project.back': '回首頁',
    'project.event': '競賽',
    'project.date': '日期',
    'project.stack': '技術',
    'project.role': '負責',
    'project.links': '連結',
    'project.gallery': '畫面',
    'project.video': '影片',
    'boot.skip': '按任意鍵略過',
    'footer.built': '以 Astro 建置',
  },
  en: {
    'site.title': 'Terence Lu',
    'site.description': "Terence Lu's portfolio — master's student researching mmWave radar fall detection and edge computing; UAV, UGV and AIoT system integration.",
    'nav.home': 'home',
    'nav.research': 'research',
    'nav.projects': 'projects',
    'nav.log': 'log',
    'nav.contact': 'contact',
    'theme.toggle': 'Toggle light / dark',
    'lang.switch': 'Switch language',
    'hero.role': "Master's student · mmWave radar × Edge computing",
    'hero.intro':
      'Most of what I build is a full sense → compute → act loop: drones, ground vehicles and AIoT devices, with the sensors, embedded boards and web ground stations wired together. I am now bringing that into research — contactless fall detection with mmWave radar, running in real time on edge devices.',
    'status.focus': 'focus',
    'status.focusValue': 'mmWave · Edge AI',
    'status.awards': 'awards',
    'status.location': 'location',
    'status.locationValue': 'Taiwan',
    'status.time': 'local time',
    'research.title': 'Research',
    'research.status': 'in progress',
    'research.mmwave.title': 'mmWave radar fall detection',
    'research.mmwave.body':
      'Using mmWave radar to measure range, velocity and posture changes of the human body and recognise falls. Radar captures no images, so it preserves privacy and works in any lighting — a good fit for homes and long-term care.',
    'research.edge.title': 'Edge computing',
    'research.edge.body':
      'Running detection models directly on embedded platforms: lightweight, low-latency and low-power, reacting in real time without sending data to the cloud.',
    'projects.title': 'Selected work',
    'projects.more': 'Read more',
    'projects.pending': 'Write-up in progress',
    'projects.viewAll': 'All projects',
    'projects.allTitle': 'All projects',
    'projects.allIntro': 'Competitions, programs and coursework, newest first. Click a tag to filter.',
    'filter.all': 'all',
    'filter.label': 'Filter by area',
    'project.prev': 'newer',
    'project.next': 'older',
    'log.title': 'Log',
    'contact.title': 'Contact',
    'contact.body': 'Research collaboration, projects or questions — feel free to email me.',
    'contact.copy': 'copy',
    'contact.copied': 'copied',
    'project.back': 'Back home',
    'project.event': 'Event',
    'project.date': 'Date',
    'project.stack': 'Stack',
    'project.role': 'Role',
    'project.links': 'Links',
    'project.gallery': 'Screens',
    'project.video': 'Video',
    'boot.skip': 'press any key to skip',
    'footer.built': 'Built with Astro',
  },
} as const;

export const tagLabels: Record<Lang, Record<string, string>> = {
  zh: {
    UAV: 'UAV 無人機',
    UGV: 'UGV 無人車',
    AIoT: 'AIoT',
    Vision: '電腦視覺',
    Embedded: '嵌入式',
    Edge: '邊緣運算',
    LLM: 'LLM',
    Teaching: '教學',
  },
  en: {
    UAV: 'UAV',
    UGV: 'UGV',
    AIoT: 'AIoT',
    Vision: 'Vision',
    Embedded: 'Embedded',
    Edge: 'Edge',
    LLM: 'LLM',
    Teaching: 'Teaching',
  },
};

export type UIKey = keyof (typeof ui)['zh'];

export function t(lang: Lang, key: UIKey): string {
  return ui[lang][key];
}

/** 中文在根目錄，英文在 /en/ 底下 */
export function localePath(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === 'zh' ? clean : `/en${clean === '/' ? '/' : clean}`;
}

/** 目前頁面在另一個語言的對應網址 */
export function alternatePath(pathname: string, target: Lang): string {
  const bare = pathname.replace(/^\/en(?=\/|$)/, '') || '/';
  return localePath(target, bare);
}

/** 從 YouTube 網址取出影片 ID 與起始秒數，轉成內嵌網址 */
export function youtubeEmbed(url: string): string | undefined {
  const u = new URL(url);
  const id =
    u.hostname === 'youtu.be'
      ? u.pathname.slice(1)
      : u.searchParams.get('v') ?? u.pathname.match(/^\/(?:live|embed|shorts)\/([\w-]{11})/)?.[1];
  if (!id) return undefined;
  const start = u.searchParams.get('t') ?? u.searchParams.get('start');
  return `https://www.youtube-nocookie.com/embed/${id}${start ? `?start=${parseInt(start, 10)}` : ''}`;
}

export function formatDate(date: Date): string {
  return `${date.getUTCFullYear()}.${String(date.getUTCMonth() + 1).padStart(2, '0')}`;
}
