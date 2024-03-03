import { Timestamp } from "firebase/firestore";

export type Conversation = {
  id: string;
  last_content_id: string;
  last_message_on: Timestamp;
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
