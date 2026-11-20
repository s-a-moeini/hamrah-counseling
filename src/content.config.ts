
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const consultants = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/consultants',
  }),

  schema: z.object({
    name: z.string(),
    image: z.string().optional(),
    title: z.string(),
    degree: z.string(),
    specialties: z.string(),
    bio: z.string(),
    experience: z.string(),
    sortOrder: z.number().default(0),
  }),
});

export const collections = {
  consultants,
};
