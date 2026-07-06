import "dotenv/config";
import express from "express";
import { createServer } from "http";
import net from "net";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { registerOAuthRoutes } from "./oauth";
import { appRouter } from "../routers";
import { createContext } from "./context";
import { serveStatic, setupVite } from "./vite";

function isPortAvailable(port: number): Promise<boolean> {
  return new Promise(resolve => {
    const server = net.createServer();
    server.listen(port, () => {
      server.close(() => resolve(true));
    });
    server.on("error", () => resolve(false));
  });
}

async function findAvailablePort(startPort: number = 3000): Promise<number> {
  for (let port = startPort; port < startPort + 20; port++) {
    if (await isPortAvailable(port)) {
      return port;
    }
  }
  throw new Error(`No available port found starting from ${startPort}`);
}

async function startServer() {
  const app = express();
  const server = createServer(app);
  // Configure body parser with larger size limit for file uploads
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));
  // OAuth callback under /api/oauth/callback
  registerOAuthRoutes(app);
  
  // Leads API endpoint
  const leadsRouter = (await import("../routes/leads")).default;
  app.use("/api/leads", leadsRouter);
  
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, phone, city, service, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !phone || !city || !service || !message) {
        return res.status(400).json({ error: "All fields are required" });
      }
      
      // Send notification email
      const { notifyOwner } = await import("./notification");
      await notifyOwner({
        title: "New Contact Form Submission",
        content: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCity: ${city}\nService: ${service}\n\nMessage:\n${message}`,
      });
      
      // Return success
      return res.json({ success: true, message: "Thank you! We'll get back to you within one business day." });
    } catch (error) {
      console.error("Contact form error:", error);
      return res.status(500).json({ error: "Something went wrong. Please call 800-741-6056" });
    }
  });
  // 301 Redirects for old/problematic URLs flagged in Google Search Console
  const redirects: Record<string, string> = {
    "/handyman-services/exterior-carpentry/": "/carpentry-services/",
    "/service-areas/ofallon-il/": "/service-areas/ofallon-handyman-services/",
    "/service-areas/edwardsville-il/": "/service-areas/edwardsville-handyman-services/",
    "/service-areas/chesterfield-mo/": "/handyman-chesterfield-mo/",
    "/service-areas/ofallon-il-handyman/": "/service-areas/ofallon-handyman-services/",
    "/service-areas/edwardsville-il-handyman/": "/service-areas/edwardsville-handyman-services/",
    "/service-areas/belleville-il-handyman/": "/service-areas/belleville-handyman-services/",
    "/service-areas/collinsville-il-handyman/": "/service-areas/collinsville-handyman-services/",
    "/service-areas/glen-carbon-il-handyman/": "/service-areas/glen-carbon-handyman-services/",
    "/service-areas/st-charles-mo-handyman/": "/service-areas/st-charles-handyman-services/",
    "/service-areas/fenton-mo-handyman/": "/service-areas/fenton-handyman-services/",
  };
  app.use((req, res, next) => {
    const target = redirects[req.path];
    if (target) {
      return res.redirect(301, target);
    }
    next();
  });

  // tRPC API
  app.use(
    "/api/trpc",
    createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );
  // development mode uses Vite, production mode uses static files
  if (process.env.NODE_ENV === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const preferredPort = parseInt(process.env.PORT || "3000");
  const port = await findAvailablePort(preferredPort);

  if (port !== preferredPort) {
    console.log(`Port ${preferredPort} is busy, using port ${port} instead`);
  }

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
