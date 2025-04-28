import { pgTable, text, serial, integer, boolean, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Users table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  firstName: text("first_name"),
  lastName: text("last_name"),
  email: text("email").unique(),
  phone: text("phone"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Event registrations table
export const eventRegistrations = pgTable("event_registrations", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  eventId: integer("event_id").notNull(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  attendees: integer("attendees").notNull().default(1),
  specialRequests: text("special_requests"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Events table
export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  date: timestamp("date").notNull(),
  location: text("location").notNull(),
  image: text("image"),
  capacity: integer("capacity"),
  registrationOpen: boolean("registration_open").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

// Initiatives table
export const initiatives = pgTable("initiatives", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  image: text("image"),
  active: boolean("active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

// Team members table
export const teamMembers = pgTable("team_members", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role").notNull(),
  bio: text("bio").notNull(),
  image: text("image"),
  order: integer("order").default(0),
  socialLinks: text("social_links").array(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Insert schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  firstName: true,
  lastName: true,
  email: true,
  phone: true,
});

export const insertEventRegistrationSchema = createInsertSchema(eventRegistrations).pick({
  eventId: true,
  firstName: true,
  lastName: true,
  email: true,
  phone: true,
  attendees: true,
  specialRequests: true,
  userId: true,
});

export const insertEventSchema = createInsertSchema(events).pick({
  title: true,
  description: true,
  date: true,
  location: true,
  image: true,
  capacity: true,
  registrationOpen: true,
});

export const insertInitiativeSchema = createInsertSchema(initiatives).pick({
  title: true,
  description: true,
  image: true,
  active: true,
});

export const insertTeamMemberSchema = createInsertSchema(teamMembers).pick({
  name: true,
  role: true,
  bio: true,
  image: true,
  order: true,
  socialLinks: true,
});

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertEventRegistration = z.infer<typeof insertEventRegistrationSchema>;
export type EventRegistration = typeof eventRegistrations.$inferSelect;

export type InsertEvent = z.infer<typeof insertEventSchema>;
export type Event = typeof events.$inferSelect;

export type InsertInitiative = z.infer<typeof insertInitiativeSchema>;
export type Initiative = typeof initiatives.$inferSelect;

export type InsertTeamMember = z.infer<typeof insertTeamMemberSchema>;
export type TeamMember = typeof teamMembers.$inferSelect;
