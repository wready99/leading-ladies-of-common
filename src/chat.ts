import { Timestamp } from "firebase/firestore";
import { z } from "zod";

import { VisibleBy, visibleBySchema } from "./common";
import { userIdSchema } from "./users";

export const conversationTypeSchema = z.enum(["direct", "channel", "thread"]);

export type ConversationType = z.infer<typeof conversationTypeSchema>;

const shared = z.object({
  id: z.string().trim(),
  category: z.string().trim().optional(),
  name: z.string().trim(),
  type: conversationTypeSchema,
  users: z.array(userIdSchema),
});

export const editConversationSchema = shared
  .extend({
    message: z.string().trim(),
  })
  .refine((schema) => {
    if (schema.type === "channel") {
      return schema.category && schema.name;
    } else if (schema.type === "direct") {
      return !schema.category && schema.name === "" && schema.users.length > 0;
    } else {
      return false;
    }
  }, "Must choose category and name for channels");

export type EditConversation = z.infer<typeof editConversationSchema>;

export const lastMessageInfoSchema = z.object({
  blurb: z.string().trim(),
  content_id: z.string().trim(),
  sent_on: z.instanceof(Timestamp),
});

export type LastMessageInfo = z.infer<typeof lastMessageInfoSchema>;

export const conversationSchema = shared.extend({
  last_message: lastMessageInfoSchema.optional(),
  started_on: z.instanceof(Timestamp),
  visible_by: visibleBySchema,
});

export type Conversation = z.infer<typeof conversationSchema>;

export type ConversationContent = {
  content: string;
  conversation_id: string;
  from_uid: string;
  id: string;
  read_on: Timestamp;
  sent_on: Timestamp;
  visible_by: VisibleBy;
};
