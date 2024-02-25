import { Timestamp } from "firebase/firestore";

export type NewsItem = {
  blurb: string;
  content: string;
  created_on: Timestamp;
  id: string;
  image_url: string;
  subtitle: string;
  title: string;
};
