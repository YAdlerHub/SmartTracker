import { pgTable, text, serial, integer, boolean, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const visitors = pgTable("visitors", {
  id: serial("id").primaryKey(),
  ip_address: text("ip_address"),
  user_agent: text("user_agent"),
  referrer: text("referrer"),
  page_visited: text("page_visited").notNull(),
  visit_time: timestamp("visit_time").defaultNow().notNull(),
});

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email"),
  phone: text("phone"),
  message: text("message").notNull(),
  contact_time: timestamp("contact_time").defaultNow().notNull(),
  is_read: boolean("is_read").default(false).notNull(),
});

export const pageAnalytics = pgTable("page_analytics", {
  id: serial("id").primaryKey(),
  page_path: text("page_path").notNull(),
  views: integer("views").default(0).notNull(),
  unique_visitors: integer("unique_visitors").default(0).notNull(),
  last_updated: timestamp("last_updated").defaultNow().notNull(),
});

// User schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

// Visitor schemas
export const insertVisitorSchema = createInsertSchema(visitors).pick({
  ip_address: true,
  user_agent: true,
  referrer: true,
  page_visited: true,
});

// Contact schemas
export const insertContactSchema = createInsertSchema(contacts).pick({
  name: true,
  email: true,
  phone: true,
  message: true,
});

// Page analytics schemas
export const insertPageAnalyticsSchema = createInsertSchema(pageAnalytics).pick({
  page_path: true,
  views: true,
  unique_visitors: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertVisitor = z.infer<typeof insertVisitorSchema>;
export type Visitor = typeof visitors.$inferSelect;

export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;

export type InsertPageAnalytics = z.infer<typeof insertPageAnalyticsSchema>;
export type PageAnalytics = typeof pageAnalytics.$inferSelect;
