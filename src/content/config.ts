import { defineCollection, z } from 'astro:content';

const activities = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    title_ja: z.string().optional(),
    description_ja: z.string().optional(),
    date: z.string().optional(),
    date_ja: z.string().optional(),
    detail: z.string().optional(),
    detail_ja: z.string().optional(),
    image: z.string().optional(),
    imagePlaceholder: z.string().optional(),
    imagePlaceholder_ja: z.string().optional(),
    order: z.number().default(0),
  }),
});

const sponsors = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    name_ja: z.string().optional(),
    logo: z.string().optional(),
    tier: z.enum(['gold', 'silver', 'bronze', 'partner']).default('partner'),
    order: z.number().default(0),
  }),
});

const archive = defineCollection({
  type: 'content',
  schema: z.object({
    year: z.number(),
    title: z.string(),
    summary: z.string(),
    title_ja: z.string().optional(),
    summary_ja: z.string().optional(),
    wiki_url: z.string().optional(),
    universities: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = {
  activities,
  sponsors,
  archive,
};
