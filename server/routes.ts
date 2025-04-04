import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

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

  const httpServer = createServer(app);

  return httpServer;
}
