
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




const courses = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/courses',
  }),
  schema: z.object({
    name: z.string(),
    image: z.string().optional(),
    instructor: z.string(),
    instructorBio: z.string(),
    topics: z.string(),
    location: z.string(),
    schedule: z.string(),
    duration: z.string(),
    description: z.string(),
    cost: z.string(),
    registration: z.string(),
    sortOrder: z.number().default(0),
  }),
});


export const collections = {
  consultants,
  courses,
};
