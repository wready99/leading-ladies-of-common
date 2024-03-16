import { z } from "zod";

export const visibleBySchema = z.array(z.string().trim());

export type VisibleBy = z.infer<typeof visibleBySchema>;

export const statusSchema = z.enum([
  "active",
  "approved",
  "draft",
  "expired",
  "pending approval",
]);

export type Status = z.infer<typeof statusSchema>;
