import { Timestamp } from "firebase/firestore";
import { ContentType } from "./userMetrics";

export type ReadContent = {
  content_id: string;
  content_type: ContentType;
  id: string;
  read_on: Timestamp;
  uid: string;
};
