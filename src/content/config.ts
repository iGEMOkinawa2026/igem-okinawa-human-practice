import { defineCollection, z } from 'astro:content';

const activities = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    imagePlaceholder: z.string().optional(),
    order: z.number().default(0),
  }),
});

const sponsors = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
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
    order: z.number().default(0),
  }),
});

export const collections = {
  activities,
  sponsors,
  archive,
};
