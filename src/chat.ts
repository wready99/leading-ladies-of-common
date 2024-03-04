import { Timestamp } from "firebase/firestore";

export type LastMessageInfo = {
  blurb: string;
  content_id: string;
  sent_on: Timestamp;
};

export type Conversation = {
  id: string;
  last_message: LastMessageInfo;
  started_on: Timestamp;
  users: string[];
};

export type ConversationContent = {
  content: string;
  conversation_id: string;
  from_uid: string;
  id: string;
  read_on: Timestamp;
  sent_on: Timestamp;
};
