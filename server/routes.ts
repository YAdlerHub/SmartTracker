import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import { insertContactSchema, insertVisitorSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint to get Yoni's personal info
  app.get("/api/personal-info", (_req, res) => {
    res.json({
      name: "יוני אדלר",
      birthDate: "13.5.2002",
      height: "1.73",
      about: "יוני הוא בחור ערכי, שאפתן, עם חיבור עמוק לעולם התורני ולתורה. בעל אישיות חמה, ראש פתוח, חריצות והתמדה. נמצא בשלב של בניית עתידו המקצועי והאישי תוך השקעה בעבודתו, לימודיו ובפיתוח עצמי.",
      lookingFor: "בחורה דתית-תורנית, ערכית וחכמה, השואפת להקים בית המבוסס על ערכי תורה ודרך ארץ, לצד פתיחות מחשבתית ואהבה ללמידה והתפתחות. עדיפות לרקע אקדמי."
    });
  });

  // Health check endpoint
  app.get("/api/health", (_req, res) => {
    res.json({ status: "healthy" });
  });

  // Log visitor
  app.post("/api/visitor", async (req: Request, res: Response) => {
    try {
      const data = insertVisitorSchema.parse(req.body);
      const visitor = await storage.logVisit(data);
      
      // Increment page view count
      await storage.incrementPageView(data.page_visited);
      
      res.status(201).json(visitor);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid data", details: error.format() });
      } else {
        console.error("Error logging visitor:", error);
        res.status(500).json({ error: "Failed to log visitor" });
      }
    }
  });

  // Get recent visitors
  app.get("/api/visitors", async (_req, res: Response) => {
    try {
      const visitors = await storage.getRecentVisits();
      res.json(visitors);
    } catch (error) {
      console.error("Error fetching visitors:", error);
      res.status(500).json({ error: "Failed to fetch visitors" });
    }
  });

  // Get visitors by page
  app.get("/api/visitors/:page", async (req: Request, res: Response) => {
    try {
      const pagePath = req.params.page;
      const visitors = await storage.getVisitsByPage(pagePath);
      res.json(visitors);
    } catch (error) {
      console.error("Error fetching visitors by page:", error);
      res.status(500).json({ error: "Failed to fetch visitors" });
    }
  });

  // Submit contact form
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const data = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(data);
      res.status(201).json(contact);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid data", details: error.format() });
      } else {
        console.error("Error creating contact:", error);
        res.status(500).json({ error: "Failed to submit contact form" });
      }
    }
  });

  // Get all contacts (admin route)
  app.get("/api/contacts", async (_req, res: Response) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ error: "Failed to fetch contacts" });
    }
  });

  // Mark contact as read
  app.patch("/api/contacts/:id/read", async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid ID" });
      }
      
      await storage.markContactAsRead(id);
      res.json({ success: true });
    } catch (error) {
      console.error("Error marking contact as read:", error);
      res.status(500).json({ error: "Failed to mark contact as read" });
    }
  });

  // Get page analytics
  app.get("/api/analytics", async (req: Request, res: Response) => {
    try {
      const pagePath = req.query.page as string | undefined;
      const analytics = await storage.getPageAnalytics(pagePath);
      res.json(analytics);
    } catch (error) {
      console.error("Error fetching analytics:", error);
      res.status(500).json({ error: "Failed to fetch analytics" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
