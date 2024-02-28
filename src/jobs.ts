import { GeoPoint, Timestamp } from "firebase/firestore";
import { z } from "zod";
import { userIdSchema } from "./users";

export const jobSchema = z.object({
  company_id: z.string().trim(),
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
});

export type Job = z.infer<typeof jobSchema>;

export const jobApplicationSchema = z.object({
  applicant_uid: userIdSchema,
  applied_on: z.instanceof(Timestamp),
  job_id: z.string().trim(),
  objectID: z.string().trim(),
  resume_url: z.string().url(),
});

export type JobApplication = z.infer<typeof jobApplicationSchema>;

export const companySchema = z.object({
  address: z.string().trim(),
  admin_uids: userIdSchema,
  contact_email: z.string().email(),
  description: z.string(),
  geopoint: z.instanceof(GeoPoint),
  logo: z.string().url(),
  name: z.string().trim(),
  objectID: z.string().trim(),
  status: z.enum(["approved", "draft", "pending approval"]),
  tag_line: z.string(),
  url: z.string().url(),
});

export type Company = z.infer<typeof companySchema>;
