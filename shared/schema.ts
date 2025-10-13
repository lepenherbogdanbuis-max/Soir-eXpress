import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const cartItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
  quantity: z.number().min(1),
  variant: z.string().optional(),
  image: z.string(),
});

export const paymentMethodSchema = z.enum(["card", "cash"]);

export const deliveryAddressSchema = z.object({
  fullAddress: z.string().min(5),
  lat: z.number().optional(),
  lng: z.number().optional(),
  verified: z.boolean().default(false),
});

export const orderSchema = z.object({
  items: z.array(cartItemSchema),
  total: z.number(),
  paymentMethod: paymentMethodSchema,
  deliveryAddress: deliveryAddressSchema,
});

export type CartItem = z.infer<typeof cartItemSchema>;
export type PaymentMethod = z.infer<typeof paymentMethodSchema>;
export type DeliveryAddress = z.infer<typeof deliveryAddressSchema>;
export type Order = z.infer<typeof orderSchema>;
