import { defineCollection, z } from "astro:content";

const offerings = defineCollection({
  type: "content",
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    featuredImage: z.string().optional(),
    imageAlt: z.string().optional()
  })
});

export const collections = { offerings };
