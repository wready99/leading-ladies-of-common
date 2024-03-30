import { z } from "zod";
import { visibleBySchema } from "./common";

export const faqCategorySchema = z.enum([
  "Account & Membership",
  "Community Interaction",
  "Sponsorship",
  "Security",
]);

export type FaqCategory = z.infer<typeof faqCategorySchema>;

export const faqSchema = z.object({
  answer: z.string().trim(),
  category: z.string().trim(),
  icon: z.string().trim().default("account-group"),
  objectID: z.string().trim(),
  order_number: z.number(),
  question: z.string().trim(),
  visible_by: visibleBySchema.default(["everyone"]),
});

export type FAQ = z.infer<typeof faqSchema>;
