import { z } from "zod";
import { visibleBySchema } from "./common";

export const documentInfoSchema = z.object({
  name: z.string().trim(),
  url: z.string().url(),
});

export type DocumentInfo = z.infer<typeof documentInfoSchema>;

export const userIdSchema = z.string().trim();

export type UserId = z.infer<typeof userIdSchema>;

export const additionalInfoSchema = z.object({
  help_women: z.string().trim().optional(),
  need_help: z.string().trim().optional(),
  passionate_about: z.string().trim().optional(),
});

export type AdditionalInfo = z.infer<typeof additionalInfoSchema>;

export const editUserProfileSchema = z.object({
  additional_info: additionalInfoSchema.optional(),
  current_role: z.string().trim().optional(),
  employer: z.string().trim().optional(),
  location: z.string().trim().optional(),
  name: z.string().trim().optional(),
  objectID: z.string().trim(),
  picture: z.string().url(),
});

export type EditUserProfile = z.infer<typeof editUserProfileSchema>;

export const userProfileSchema = editUserProfileSchema.extend({
  visible_by: visibleBySchema,
});

export type UserProfile = z.infer<typeof userProfileSchema>;
