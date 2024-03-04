import { GeoPoint, Timestamp } from "firebase/firestore";
import { z } from "zod";
import { userProfileSchema } from "./users";
import { companySchema } from "./companies";

const shared = z.object({
  description: z.string(),
  end_date: z.instanceof(Timestamp),
  geopoint: z.instanceof(GeoPoint),
  location: z.string().trim(),
  objectID: z.string().trim(),
  start_date: z.instanceof(Timestamp),
  status: z.enum([
    "active",
    "approved",
    "draft",
    "expired",
    "pending approval",
  ]),
  tags: z.array(z.string().trim()),
  title: z.string().trim(),
  visible_by: z.array(z.string().trim()),
});

export const editJobSchema = shared.extend({
  company: z.string().startsWith("/companies/"),
  posted_by: z.string().startsWith("/user_profiles/"),
});

export type EditJob = z.infer<typeof editJobSchema>;

export const jobSchema = shared.extend({
  company: companySchema,
  posted_by: userProfileSchema,
});

export type Job = z.infer<typeof jobSchema>;
