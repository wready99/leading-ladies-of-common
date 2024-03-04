import { z } from "zod";
import { isMobilePhone } from "validator";
import { visibleBySchema } from "./common";

export const documentInfoSchema = z.object({
  name: z.string().trim(),
  url: z.string().url(),
});

export type DocumentInfo = z.infer<typeof documentInfoSchema>;

export const userIdSchema = z.string().startsWith("auth0|").trim();

export type UserId = z.infer<typeof userIdSchema>;

export const userProfileSchema = z.object({
  cell: z.string().trim().refine(isMobilePhone).optional(),
  email: z.string().trim().email().readonly(),
  employer: z.string().trim().optional(),
  location: z.string().trim().optional(),
  name: z.string().trim().optional(),
  nickname: z.string().trim().optional(),
  objectID: z.string().trim(),
  picture: z.string().url(),
  resumes: z.array(documentInfoSchema).optional(),
  skills: z.array(z.string().trim()).optional(),
  tagline: z.string().trim().optional(),
  website: z.string().url().optional(),
  visible_by: visibleBySchema,
});

export type UserProfile = z.infer<typeof userProfileSchema>;

export function getUserTokenFromUid(uid: string) {
  return uid.substring(uid.indexOf("|") + 1);
}
