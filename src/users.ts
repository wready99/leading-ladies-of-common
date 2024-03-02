import { z } from "zod";
import { isMobilePhone } from "validator";

export const userIdSchema = z.string().startsWith("auth0|").trim();

export const userProfileSchema = z.object({
  cell: z.string().trim().refine(isMobilePhone).optional(),
  email: z.string().trim().email().readonly(),
  employer: z.string().trim().optional(),
  location: z.string().trim().optional(),
  name: z.string().trim().optional(),
  nickname: z.string().trim().optional(),
  objectID: z.string().trim(),
  picture: z.string().url(),
  resumes: z.array(z.string().url()).optional(),
  skills: z.array(z.string().trim()).optional(),
  tagline: z.string().trim().optional(),
  website: z.string().url().optional(),
});

export type UserProfile = z.infer<typeof userProfileSchema>;

export function getUserTokenFromUid(uid: string) {
  return uid.substring(uid.indexOf("|") + 1);
}
