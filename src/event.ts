import { Timestamp } from "firebase/firestore";
import { z } from "zod";
import { visibleBySchema } from "./common";

export const eventSchema = z.object({
  description: z.string().trim(),
  end_date: z.instanceof(Timestamp).optional(),
  image_url: z.string().url(),
  location: z.string().trim(),
  name: z.string().trim(),
  objectID: z.string().trim(),
  registration_link: z.string().url(),
  start_date: z.instanceof(Timestamp),
  visible_by: visibleBySchema,
});

export type Event = z.infer<typeof eventSchema>;
