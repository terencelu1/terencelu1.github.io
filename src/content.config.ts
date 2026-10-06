import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// 每個作品一個 Markdown 檔：src/content/projects/{zh,en}/<slug>.md
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      event: z.string(),
      award: z.string().optional(),
      date: z.coerce.date(),
      summary: z.string(),
      tags: z.array(z.string()).default([]),
      stack: z.array(z.string()).default([]),
      role: z.string().optional(),
      // competition 競賽 / program 計畫與教學 / course 課堂專題
      kind: z.enum(['competition', 'program', 'course']).default('competition'),
      cover: image().optional(),
      gallery: z.array(z.object({ src: image(), caption: z.string() })).default([]),
      links: z
        .object({
          github: z.array(z.string()).default([]),
          video: z.string().optional(),
          news: z.string().optional(),
        })
        .default({ github: [] }),
      featured: z.boolean().default(false),
      // 詳細頁還沒寫好的作品，只出現在卡片上、不產生頁面
      hasDetail: z.boolean().default(true),
    }),
});

export const collections = { projects };
