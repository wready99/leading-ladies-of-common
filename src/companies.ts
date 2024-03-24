import { z } from "zod";

import { statusSchema, visibleBySchema } from "./common";
import { minimalUserSchema, userProfileSchema } from "./users";

const shared = z.object({
  admin_uids: z.array(minimalUserSchema),
  description: z.string().trim().optional(),
  industry: z.string().trim(),
  location: z.string().trim(),
  logo: z.string().url(),
  name: z.string().trim(),
  objectID: z.string().trim(),
  order_number: z.number().optional(),
  size: z.string().trim().optional(),
  sponsor: z.boolean().default(false),
  sponsor_level: z.string().default(""),
  status: statusSchema,
  url: z.string().url(),
  visible_by: visibleBySchema,
});

export const companySchema = shared.extend({
  contacts: z.array(userProfileSchema),
});

export type Company = z.infer<typeof companySchema>;

export const editCompanySchema = shared.extend({
  contacts: z.array(minimalUserSchema),
});

export type EditCompany = z.infer<typeof editCompanySchema>;
