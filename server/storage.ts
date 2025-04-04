import { 
  users, visitors, contacts, pageAnalytics,
  type User, type InsertUser,
  type Visitor, type InsertVisitor,
  type Contact, type InsertContact,
  type PageAnalytics, type InsertPageAnalytics
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Visitor tracking methods
  logVisit(visitor: InsertVisitor): Promise<Visitor>;
  getVisitsByPage(pagePath: string): Promise<Visitor[]>;
  getRecentVisits(limit?: number): Promise<Visitor[]>;
  
  // Contact form methods
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(limit?: number): Promise<Contact[]>;
  markContactAsRead(id: number): Promise<void>;
  
  // Analytics methods
  incrementPageView(pagePath: string): Promise<void>;
  getPageAnalytics(pagePath?: string): Promise<PageAnalytics[]>;
}

export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }
  
  // Visitor tracking methods
  async logVisit(visitor: InsertVisitor): Promise<Visitor> {
    const [result] = await db.insert(visitors).values(visitor).returning();
    return result;
  }
  
  async getVisitsByPage(pagePath: string): Promise<Visitor[]> {
    return await db.select().from(visitors).where(eq(visitors.page_visited, pagePath));
  }
  
  async getRecentVisits(limit: number = 100): Promise<Visitor[]> {
    return await db.select().from(visitors).limit(limit);
  }
  
  // Contact form methods
  async createContact(contact: InsertContact): Promise<Contact> {
    const [result] = await db.insert(contacts).values(contact).returning();
    return result;
  }
  
  async getContacts(limit: number = 100): Promise<Contact[]> {
    return await db.select().from(contacts).limit(limit);
  }
  
  async markContactAsRead(id: number): Promise<void> {
    await db.update(contacts).set({ is_read: true }).where(eq(contacts.id, id));
  }
  
  // Analytics methods
  async incrementPageView(pagePath: string): Promise<void> {
    // Check if entry exists
    const [existingEntry] = await db.select().from(pageAnalytics).where(eq(pageAnalytics.page_path, pagePath));
    
    if (existingEntry) {
      // Update existing entry
      await db.update(pageAnalytics)
        .set({ 
          views: existingEntry.views + 1,
          last_updated: new Date()
        })
        .where(eq(pageAnalytics.id, existingEntry.id));
    } else {
      // Create new entry
      await db.insert(pageAnalytics).values({
        page_path: pagePath,
        views: 1,
        unique_visitors: 1
      });
    }
  }
  
  async getPageAnalytics(pagePath?: string): Promise<PageAnalytics[]> {
    if (pagePath) {
      return await db.select().from(pageAnalytics).where(eq(pageAnalytics.page_path, pagePath));
    }
    return await db.select().from(pageAnalytics);
  }
}

export const storage = new DatabaseStorage();
