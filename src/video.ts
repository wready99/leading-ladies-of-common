import { VisibleBy } from "./common";

export type Video = {
  category: string;
  embed: string;
  id: string;
  order_number: number;
  thumbnail_uri: string;
  title: string;
  uri: string;
  visible_by: VisibleBy;
};
