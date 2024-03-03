import { z } from "zod";
import { userIdSchema, userProfileSchema } from "./users";
import { GeoPoint } from "firebase/firestore";

const shared = z.object({
  address: z.string().trim(),
  admin_uids: z.array(userIdSchema),
  description: z.string(),
  geopoint: z.instanceof(GeoPoint),
  logo: z.string().url(),
  name: z.string().trim(),
  objectID: z.string().trim(),
  status: z.enum(["approved", "draft", "pending approval"]),
  tag_line: z.string(),
  url: z.string().url(),
  visible_by: z.array(z.string().trim()),
});

export const companySchema = shared.extend({
  contacts: z.array(userProfileSchema),
});

export type Company = z.infer<typeof companySchema>;

export const editCompanySchema = shared.extend({
  contacts: z.array(userIdSchema),
});

export type EditCompany = z.infer<typeof editCompanySchema>;
