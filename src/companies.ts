import { z } from "zod";

import { statusSchema, visibleBySchema } from "./common";
import { minimalUserSchema, userIdSchema, userProfileSchema } from "./users";

const sponsorTypeSchema = z.enum(["annual", "event"]);

export type SponsorType = z.infer<typeof sponsorTypeSchema>;

const sponsorLevelSchema = z.object({
  name: z.string().trim(),
  objectID: z.string().trim(),
  order_number: z.number(),
  type: sponsorTypeSchema,
});

export type SponsorLevel = z.infer<typeof sponsorLevelSchema>;

const shared = z.object({
  admin_uids: z.array(userIdSchema),
  admins: z.array(minimalUserSchema),
  description: z.string().trim().optional(),
  industry: z.string().trim(),
  location: z.string().trim(),
  logo: z.string().url(),
  name: z.string().trim(),
  objectID: z.string().trim(),
  order_number: z.number().optional(),
  size: z.string().trim().optional(),
  sponsor: z.boolean().default(false),
  sponsor_level: sponsorLevelSchema,
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
