import { 
  users, 
  events,
  initiatives,
  teamMembers,
  eventRegistrations,
  type User, 
  type InsertUser,
  type Event,
  type InsertEvent,
  type Initiative,
  type InsertInitiative,
  type TeamMember,
  type InsertTeamMember,
  type EventRegistration,
  type InsertEventRegistration
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Event operations
  getEvents(): Promise<Event[]>;
  getEvent(id: number): Promise<Event | undefined>;
  createEvent(event: InsertEvent): Promise<Event>;
  
  // Event registration operations
  getEventRegistrations(eventId: number): Promise<EventRegistration[]>;
  createEventRegistration(registration: InsertEventRegistration): Promise<EventRegistration>;
  
  // Initiative operations
  getInitiatives(): Promise<Initiative[]>;
  getInitiative(id: number): Promise<Initiative | undefined>;
  createInitiative(initiative: InsertInitiative): Promise<Initiative>;
  
  // Team member operations
  getTeamMembers(): Promise<TeamMember[]>;
  getTeamMember(id: number): Promise<TeamMember | undefined>;
  createTeamMember(member: InsertTeamMember): Promise<TeamMember>;
}

export class DatabaseStorage implements IStorage {
  // User operations
  async getUser(id: number): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id)).limit(1);
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username)).limit(1);
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }
  
  // Event operations
  async getEvents(): Promise<Event[]> {
    return await db.select().from(events).orderBy(events.date);
  }
  
  async getEvent(id: number): Promise<Event | undefined> {
    const result = await db.select().from(events).where(eq(events.id, id)).limit(1);
    return result[0];
  }
  
  async createEvent(event: InsertEvent): Promise<Event> {
    const result = await db.insert(events).values(event).returning();
    return result[0];
  }
  
  // Event registration operations
  async getEventRegistrations(eventId: number): Promise<EventRegistration[]> {
    return await db.select().from(eventRegistrations).where(eq(eventRegistrations.eventId, eventId));
  }
  
  async createEventRegistration(registration: InsertEventRegistration): Promise<EventRegistration> {
    const result = await db.insert(eventRegistrations).values(registration).returning();
    return result[0];
  }
  
  // Initiative operations
  async getInitiatives(): Promise<Initiative[]> {
    return await db.select().from(initiatives).orderBy(initiatives.id);
  }
  
  async getInitiative(id: number): Promise<Initiative | undefined> {
    const result = await db.select().from(initiatives).where(eq(initiatives.id, id)).limit(1);
    return result[0];
  }
  
  async createInitiative(initiative: InsertInitiative): Promise<Initiative> {
    const result = await db.insert(initiatives).values(initiative).returning();
    return result[0];
  }
  
  // Team member operations
  async getTeamMembers(): Promise<TeamMember[]> {
    return await db.select().from(teamMembers).orderBy(teamMembers.order);
  }
  
  async getTeamMember(id: number): Promise<TeamMember | undefined> {
    const result = await db.select().from(teamMembers).where(eq(teamMembers.id, id)).limit(1);
    return result[0];
  }
  
  async createTeamMember(member: InsertTeamMember): Promise<TeamMember> {
    const result = await db.insert(teamMembers).values(member).returning();
    return result[0];
  }
}

// Use database storage
export const storage = new DatabaseStorage();
