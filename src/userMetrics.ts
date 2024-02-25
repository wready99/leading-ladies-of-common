import { Timestamp } from "firebase/firestore";

export enum ContentType {
  CONVERSATION_CONTENT = "conversation_content",
  EVENTS = "events",
  JOBS = "jobs",
  NEWS = "news",
  USERS = "users",
  VIDEOS = "videos",
}

export type UserMetrics = {
  id: string;
  new_conversation_content_count: number;
  new_events_count: number;
  new_jobs_count: number;
  new_news_count: number;
  new_users_count: number;
  new_videos_count: number;
  updated_on: Timestamp;
};
