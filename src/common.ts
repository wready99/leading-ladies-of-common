import { z } from "zod";

export const visibleBySchema = z.array(z.string().trim());

export type VisibleBy = z.infer<typeof visibleBySchema>;
