import { z } from "zod";

const resourceQuoteSchema = z.object({
  objectID: z.string(),
  order_by: z.number(),
  url: z.string().url(),
});

export type ResourceQuote = z.infer<typeof resourceQuoteSchema>;
