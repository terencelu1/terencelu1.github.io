// 產生給 AI 讀的純文字版網站內容（/llms.txt、/llms-full.txt，格式參考 llmstxt.org）
import { getCollection, type CollectionEntry } from 'astro:content';
import { log } from '../data/log';
import { t, localePath, formatDate, EMAIL, GITHUB, type Lang } from '../i18n/ui';

const SITE = 'https://terencelu1.github.io';
const langs: Lang[] = ['zh', 'en'];
const slugOf = (e: CollectionEntry<'projects'>) => e.id.split('/')[1];
const urlOf = (lang: Lang, path: string) => SITE + localePath(lang, path);

async function projectsOf(lang: Lang) {
  return (await getCollection('projects', (e) => e.id.startsWith(`${lang}/`))).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );
}

/** 作品的一行重點：競賽 · 獎項 · 日期 */
function metaLine(e: CollectionEntry<'projects'>) {
  const p = e.data;
  return [p.event, p.award, formatDate(p.date)].filter(Boolean).join(' · ');
}

/** 把 Markdown 內文裡的 HTML 架構圖換成它的文字說明 */
function cleanBody(body = '') {
  return body
    .replace(/^<div class="arch"[^>]*aria-label="([^"]*)"[^>]*>[\s\S]*?^<\/div>$/gm, '> $1')
    .trim();
}

function about(lang: Lang) {
  const research = (['mmwave', 'edge'] as const)
    .map((id) => `- **${t(lang, `research.${id}.title`)}**：${t(lang, `research.${id}.body`)}`)
    .join('\n');
  return [
    t(lang, 'hero.role'),
    '',
    t(lang, 'hero.intro'),
    '',
    `### ${t(lang, 'research.title')}`,
    '',
    lang === 'en' ? research.replaceAll('**：', '**: ') : research,
  ].join('\n');
}

function logList(lang: Lang) {
  return log
    .map((e) => {
      const award = e.award ? `[${e.award[lang]}] ` : '';
      const link = e.slug ? ` — ${urlOf(lang, `/projects/${e.slug}/`)}` : '';
      return `- ${e.date} ${award}${e.text[lang]}${link}`;
    })
    .join('\n');
}

function contact() {
  return `- Email: ${EMAIL}\n- GitHub: ${GITHUB}`;
}

const heading = (lang: Lang) => (lang === 'zh' ? '中文' : 'English');

export async function llmsIndex() {
  const out = [
    '# 盧亭潤 Terence Lu',
    '',
    `> ${t('zh', 'site.description')}`,
    `> ${t('en', 'site.description')}`,
    '',
    `Personal portfolio of Terence Lu (盧亭潤). Chinese pages live at ${SITE}/ and English pages at ${SITE}/en/. ` +
      `The full text of every project is in ${SITE}/llms-full.txt.`,
    '',
  ];
  for (const lang of langs) {
    out.push(`## ${lang === 'zh' ? '關於' : 'About'} (${heading(lang)})`, '', about(lang), '');
    out.push(`## ${lang === 'zh' ? '作品' : 'Projects'} (${heading(lang)})`, '');
    for (const e of await projectsOf(lang)) {
      const title = e.data.hasDetail ? `[${e.data.title}](${urlOf(lang, `/projects/${slugOf(e)}/`)})` : e.data.title;
      out.push(`- ${title} — ${metaLine(e)}: ${e.data.summary}`);
    }
    out.push('');
  }
  out.push('## 經歷 Log', '', logList('zh'), '', logList('en'), '');
  out.push('## Contact', '', contact(), '');
  out.push('## Optional', '', `- [Full content of all projects](${SITE}/llms-full.txt)`, `- [Sitemap](${SITE}/sitemap-index.xml)`, '');
  return out.join('\n');
}

export async function llmsFull() {
  const out = [
    '# 盧亭潤 Terence Lu — full site content',
    '',
    `> ${t('zh', 'site.description')}`,
    `> ${t('en', 'site.description')}`,
    '',
    `Source: ${SITE}/ (Chinese) · ${SITE}/en/ (English)`,
    '',
  ];
  for (const lang of langs) {
    const L = (zh: string, en: string) => (lang === 'zh' ? zh : en);
    out.push(`# ${heading(lang)}`, '', `## ${L('關於', 'About')}`, '', about(lang), '');
    out.push(`## ${t(lang, 'log.title')}`, '', logList(lang), '');
    out.push(`## ${L('聯絡', 'Contact')}`, '', contact(), '');
    out.push(`## ${L('作品', 'Projects')}`, '');
    for (const e of await projectsOf(lang)) {
      const p = e.data;
      out.push(`### ${p.title}`, '');
      if (p.hasDetail) out.push(`- URL: ${urlOf(lang, `/projects/${slugOf(e)}/`)}`);
      out.push(`- ${t(lang, 'project.event')}: ${metaLine(e)}`);
      if (p.role) out.push(`- ${t(lang, 'project.role')}: ${p.role}`);
      if (p.stack.length) out.push(`- ${t(lang, 'project.stack')}: ${p.stack.join(', ')}`);
      for (const g of p.links.github) out.push(`- GitHub: ${g}`);
      if (p.links.video) out.push(`- ${t(lang, 'project.video')}: ${p.links.video}`);
      if (p.links.news) out.push(`- News: ${p.links.news}`);
      out.push('', p.summary, '');
      const body = cleanBody(e.body).replace(/^(#{1,4}) /gm, '##$1 ');
      if (body) out.push(body, '');
    }
  }
  return out.join('\n');
}
