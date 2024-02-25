import { GeoPoint, Timestamp } from "firebase/firestore";

export type Event = {
  active: boolean;
  address?: string;
  description: string;
  details_url?: string;
  end_time: Timestamp;
  geopoint?: GeoPoint;
  id: string;
  image_url: string;
  name: string;
  start_time: Timestamp;
  virtual_links?: string[];
};
