import { defineCollection, z } from 'astro:content';

const weeksCollection = defineCollection({
  type: 'content',
  schema: z.object({
    weekNumber: z.number(),
    dateRange: z.string(),
    title: z.string(),
    heroImage: z.string(),
    buildUrl: z.string().url(),
    status: z.enum(['SHIPPED', 'FAILED', 'WIP', 'LOGGED']).optional(),
    shippedDate: z.string().optional(), // Single date when project was finished (e.g., "Jan 11, 2026")
    oneLiner: z.string().optional(),
    timeTaken: z.string().optional(),
    experience: z.string().optional(),
    active: z.boolean().optional(), // Set to true to show, false to hide. If not set, defaults to showing (handled in filter)
  }),
});

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  weeks: weeksCollection,
  pages: pagesCollection,
};

