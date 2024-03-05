import { Timestamp } from "firebase/firestore";
import { z } from "zod";

import { VisibleBy, visibleBySchema } from "./common";
import { userIdSchema } from "./users";

export const conversationTypeSchema = z.enum(["direct", "channel", "thread"]);

export type ConversationType = z.infer<typeof conversationTypeSchema>;

export const editConversationSchema = z.object({
  id: z.string().trim(),
  name: z.string().trim(),
  type: conversationTypeSchema,
  users: z.array(userIdSchema),
});

export type EditConversation = z.infer<typeof editConversationSchema>;

export const conversationSchema = editConversationSchema.extend({
  last_message: z
    .object({
      blurb: z.string().trim(),
      content_id: z.string().trim(),
      sent_on: z.instanceof(Timestamp),
    })
    .optional(),
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
