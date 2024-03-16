import { z } from "zod";

import { statusSchema, visibleBySchema } from "./common";
import { userIdSchema, userProfileSchema } from "./users";

const shared = z.object({
  admin_uids: z.array(userIdSchema),
  description: z.string().trim().optional(),
  industry: z.string().trim(),
  location: z.string().trim(),
  logo: z.string().url(),
  name: z.string().trim(),
  objectID: z.string().trim(),
  size: z.string().trim().optional(),
  status: statusSchema,
  url: z.string().url().optional(),
  visible_by: visibleBySchema,
});

export const companySchema = shared.extend({
  contacts: z.array(userProfileSchema),
});

export type Company = z.infer<typeof companySchema>;

export const editCompanySchema = shared.extend({
  contacts: z.array(userIdSchema),
});

export type EditCompany = z.infer<typeof editCompanySchema>;
