import { z } from "zod";
import { userIdSchema, userProfileSchema } from "./users";
import { GeoPoint } from "firebase/firestore";
import { visibleBySchema } from "./common";

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

// export const isCompanyAdmin = z
//   .function()
//   .args(shared, z.string())
//   .returns(z.boolean())
//   .implement(
//     (shared, uid) =>
//       shared.admin_uids.find((adminUid) => uid == adminUid) !== undefined,
//   );
