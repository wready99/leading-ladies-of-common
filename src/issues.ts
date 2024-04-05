import { z } from "zod";

export const issueCategorySchema = z.enum([
  "Account & Membership Issues",
  "Sponsorship Issues",
  "Issues With Another Member",
  "Other Issues",
]);

export type IssueCategory = z.infer<typeof issueCategorySchema>;

export const issueSchema = z.object({
  category: z.string().trim(),
  message: z.string().trim(),
  subject: z.string().trim(),
  to: z.array(z.string().trim()),
});

export type Issue = z.infer<typeof issueSchema>;
