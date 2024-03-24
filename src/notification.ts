import { z } from "zod";
import { userIdSchema } from "./users";

export const notificationDataSchema = z.object({
  url: z.string().trim(),
});

export type NotificationData = z.infer<typeof notificationDataSchema>;

export const notificationTypeSchema = z.enum(["broadcast", "direct"]);

export type NotificationType = z.infer<typeof notificationTypeSchema>;

export const editNotificationSchema = z
  .object({
    badge: z.number().optional(),
    body: z.string().trim(),
    data: notificationDataSchema,
    title: z.string().trim(),
    type: notificationTypeSchema,
    users: z.array(userIdSchema).optional(),
  })
  .refine((schema) => {
    if (schema.type === "direct") {
      return schema.users && schema.users.length > 0;
    } else {
      return !schema.users || schema.users.length === 0;
    }
  }, "Must specify users for direct notifications");

export type EditNotification = z.infer<typeof editNotificationSchema>;

export type NotificationToken = {
  active: boolean;
  expo_token: string;
  uid: string;
};
