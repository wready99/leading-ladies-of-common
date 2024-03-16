import { z } from "zod";
import { Timestamp } from "firebase/firestore";

import { jobSchema } from "./jobs";
import { visibleBySchema } from "./common";
import { documentInfoSchema, userIdSchema, userProfileSchema } from "./users";

const shared = z.object({
  additional_info: z.string().optional(),
  applied_on: z.instanceof(Timestamp),
  cover_letter: documentInfoSchema.optional(),
  objectID: z.string().trim(),
  resume: documentInfoSchema,
  visible_by: visibleBySchema,
});

export const jobApplicationSchema = shared.extend({
  applicant: userProfileSchema,
  job: jobSchema,
});

export type JobApplication = z.infer<typeof jobApplicationSchema>;

export const editJobApplicationSchema = shared.extend({
  applicant: userIdSchema,
  job: z.string().trim(),
});

export type EditJobApplication = z.infer<typeof editJobApplicationSchema>;
