import { z } from "zod";

import { userIdSchema, userProfileSchema } from "./users";
import { Timestamp } from "firebase/firestore";
import { jobSchema } from "./jobs";
import { visibleBySchema } from "./common";

const shared = z.object({
  applied_on: z.instanceof(Timestamp),
  objectID: z.string().trim(),
  resume_url: z.string().url(),
  visible_by: visibleBySchema,
});

export const jobApplicationSchema = shared.extend({
  applicant: userProfileSchema,
  job: jobSchema,
});

export type JobApplication = z.infer<typeof jobApplicationSchema>;

export const editJobApplicationSchema = shared.extend({
  applicant: userIdSchema,
  job_id: z.string().trim(),
});

export type EditJobApplication = z.infer<typeof editJobApplicationSchema>;
