import { z } from "zod";

export const orderItemSchema = z.object({
  productId: z.string(),
  title: z.string(),
  price: z.number().min(0),
  quantity: z.number().int().min(1),
});

export const createOrderSchema = z.object({
  items: z.array(orderItemSchema).min(1),
  amount: z.number().min(0),
  address: z.object({
    name: z.string(),
    phone: z.string(),
    line1: z.string(),
    line2: z.string().optional(),
    city: z.string(),
    state: z.string().optional(),
    zip: z.string().optional(),
    country: z.string(),
  }),
});
export type CreateOrderInput = z.infer<typeof createOrderSchema>;
