import { defineCollection, z } from 'astro:content';

const weeksCollection = defineCollection({
  type: 'content',
  schema: z.object({
    weekNumber: z.number(),
    dateRange: z.string(),
    title: z.string(),
    buildUrl: z.string().url(),
    status: z.enum(['SHIPPED', 'FAILED', 'WIP', 'LOGGED', 'PATCHED']).optional(),
    shippedDate: z.string().optional(),
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

