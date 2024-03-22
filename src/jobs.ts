import { Timestamp } from "firebase/firestore";
import { z } from "zod";

import { statusSchema, visibleBySchema } from "./common";
import { companySchema } from "./companies";
import { userProfileSchema } from "./users";

export const jobTypeSchema = z.enum([
  "Full-Time",
  "Part-Time",
  "Contract",
  "Internship",
]);

export type JobType = z.infer<typeof jobTypeSchema>;

export const salaryInfoSchema = z.object({
  hourly_range: z.string().trim().optional(),
  yearly_range: z.string().trim().optional(),
});

export type SalaryInfo = z.infer<typeof salaryInfoSchema>;

const shared = z.object({
  description: z.string(),
  job_type: jobTypeSchema,
  location: z.string().trim(),
  objectID: z.string().trim(),
  post_end_date: z.instanceof(Timestamp),
  role: z.string().trim(),
  salary_info: salaryInfoSchema.optional(),
  status: statusSchema,
  tags: z.array(z.string().trim()),
  visible_by: visibleBySchema,
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
