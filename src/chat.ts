import { Timestamp } from "firebase/firestore";
import { VisibleBy } from "./common";

export type ConversationType = "direct" | "channel" | "thread";

export type LastMessageInfo = {
  blurb: string;
  content_id: string;
  sent_on: Timestamp;
};

export type Conversation = {
  id: string;
  last_message: LastMessageInfo;
  name: string;
  started_on: Timestamp;
  type: ConversationType;
  users: string[];
  visible_by: VisibleBy;
};

export type ConversationContent = {
  content: string;
  conversation_id: string;
  from_uid: string;
  id: string;
  read_on: Timestamp;
  sent_on: Timestamp;
  visible_by: VisibleBy;
};
