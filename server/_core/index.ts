import "dotenv/config";
import express from "express";
import compression from "compression";
import { createServer } from "http";
import net from "net";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { registerOAuthRoutes } from "./oauth";
import { registerAdminAuthRoutes } from "./adminAuth";
import { appRouter } from "../routers";
import { createContext } from "./context";
import { serveStatic, setupVite } from "./vite";
import { createContactSubmission, markContactSubmissionNotified } from "../db";

// Deduplication guard: prevent duplicate notifications from double-clicks or retries
// Key = hash of name+phone+email, value = timestamp of last notification
const recentSubmissions = new Map<string, number>();
const DEDUP_WINDOW_MS = 60_000; // 60 seconds

function deduplicationKey(name: string, phone: string, email: string): string {
  return `${name.trim().toLowerCase()}|${phone.replace(/\D/g, '')}|${email.trim().toLowerCase()}`;
}

function isRecentDuplicate(key: string): boolean {
  const last = recentSubmissions.get(key);
  if (!last) return false;
  if (Date.now() - last < DEDUP_WINDOW_MS) return true;
  recentSubmissions.delete(key);
  return false;
}

function recordSubmission(key: string): void {
  recentSubmissions.set(key, Date.now());
  // Prune old entries to prevent memory leaks
  if (recentSubmissions.size > 500) {
    const cutoff = Date.now() - DEDUP_WINDOW_MS;
    for (const [k, ts] of Array.from(recentSubmissions.entries())) {
      if (ts < cutoff) recentSubmissions.delete(k);
    }
  }
}

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

  // Trust proxy headers (required for HTTPS detection behind load balancers/CDN)
  app.set("trust proxy", 1);

  // Gzip/Brotli compression for all responses
  app.use(compression());

  // Security headers
  app.use((_req, res, next) => {
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("X-Frame-Options", "SAMEORIGIN");
    res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
    res.setHeader("X-XSS-Protection", "1; mode=block");
    res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
    // HSTS: enforce HTTPS for 1 year (only in production)
    if (process.env.NODE_ENV === "production") {
      res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
    }
    next();
  });

  // HTTPS enforcement in production: redirect HTTP → HTTPS
  if (process.env.NODE_ENV === "production") {
    app.use((req, res, next) => {
      const proto = req.headers["x-forwarded-proto"];
      if (proto && proto !== "https") {
        return res.redirect(301, `https://${req.headers.host}${req.url}`);
      }
      next();
    });
  }

  // Non-www → www enforcement: GoDaddy's Domain Forwarding only forwards
  // the bare root path ("/"), not subpaths — anyone hitting
  // herohandymanpro.com/anything (no www) currently hits GoDaddy's own
  // "Not Found" page and never reaches this server at all. Once the apex
  // domain's DNS is pointed at Railway directly (see deployment notes),
  // this makes sure every path 301s to the working www version instead.
  app.use((req, res, next) => {
    const host = req.headers.host;
    if (host === "herohandymanpro.com") {
      return res.redirect(301, `https://www.herohandymanpro.com${req.originalUrl}`);
    }
    next();
  });

  // Configure body parser with larger size limit for file uploads
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));
  // OAuth callback under /api/oauth/callback (legacy Manus login - inert
  // unless OAUTH_SERVER_URL is set to a real OAuth provider)
  registerOAuthRoutes(app);

  // Standalone admin login (replaces Manus OAuth for /admin/* pages)
  registerAdminAuthRoutes(app);

  // Leads API endpoint
  const leadsRouter = (await import("../routes/leads")).default;
  app.use("/api/leads", leadsRouter);

  // Photo upload endpoint for contact form
  const multer = (await import("multer")).default;
  const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 10 * 1024 * 1024 }, // 10MB max
    fileFilter: (_req, file, cb) => {
      const allowed = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
      if (allowed.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(new Error('Only JPG, PNG, WEBP, and GIF images are allowed'));
      }
    },
  });

  app.post("/api/upload-photo", upload.single('photo'), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No file provided' });
      }
      const { storagePut } = await import("../storage");
      const ext = req.file.originalname.split('.').pop() || 'jpg';
      const key = `contact-photos/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
      const { url } = await storagePut(key, req.file.buffer, req.file.mimetype);
      return res.json({ success: true, url });
    } catch (error) {
      console.error('Photo upload error:', error);
      return res.status(500).json({ error: 'Photo upload failed. You can still submit without a photo.' });
    }
  });

  // Estimator photo upload endpoint (accepts multiple photos)
  const uploadMultiple = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 10 * 1024 * 1024 },
    fileFilter: (_req, file, cb) => {
      const allowed = ['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/heif'];
      if (allowed.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(new Error('Only image files are allowed'));
      }
    },
  });

  app.post("/api/upload-estimator-photo", uploadMultiple.single('file'), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No file provided' });
      }
      const { storagePut } = await import("../storage");
      const ext = req.file.originalname.split('.').pop() || 'jpg';
      const key = `estimator-photos/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
      const { url } = await storagePut(key, req.file.buffer, req.file.mimetype);
      return res.json({ success: true, url });
    } catch (error) {
      console.error('Estimator photo upload error:', error);
      return res.status(500).json({ error: 'Photo upload failed. You can still submit without photos.' });
    }
  });

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, phone, city, service, message, photoUrl } = req.body;

      // Validate required fields
      if (!name || !email || !phone || !city || !service || !message) {
        return res.status(400).json({ error: "All fields are required" });
      }

      // Deduplication: ignore duplicate submissions within 60 seconds
      const dedupKey = deduplicationKey(name, phone, email);
      if (isRecentDuplicate(dedupKey)) {
        console.log('[Contact] Duplicate submission ignored for:', email);
        return res.json({ success: true, message: "Thank you! We'll get back to you within one business day." });
      }
      recordSubmission(dedupKey);

      // Save first so the submission is never lost, even if the
      // notification below fails or isn't configured (this used to be the
      // ONLY thing this endpoint did - a failed notification meant the
      // lead vanished with no record anywhere).
      const submissionId = await createContactSubmission({
        source: "contact",
        name,
        email,
        phone,
        city,
        service,
        message,
        photoUrl: photoUrl || null,
      });

      // Send notification email (best-effort)
      const { notifyOwner } = await import("./notification");
      const photoSection = photoUrl
        ? `\n\n📷 Project Photo:\nView Project Photo → ${photoUrl}`
        : '';
      const sent = await notifyOwner({
        title: `New Lead: ${service} — ${city}`,
        content: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nCity: ${city}\nService: ${service}\n\nMessage:\n${message}${photoSection}`,
      }).catch(() => false);

      if (sent && submissionId) {
        await markContactSubmissionNotified(submissionId);
      }

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
    "/service-areas/ofallon-il/": "/gbp/ofallon-il/",
    "/service-areas/edwardsville-il/": "/gbp/edwardsville-il/",
    "/service-areas/chesterfield-mo/": "/handyman-chesterfield-mo",
    "/service-areas/ofallon-il-handyman/": "/gbp/ofallon-il/",
    "/service-areas/edwardsville-il-handyman/": "/gbp/edwardsville-il/",
    "/service-areas/belleville-il-handyman/": "/handyman-belleville-il",
    "/service-areas/collinsville-il-handyman/": "/service-areas/collinsville-handyman-services/",
    "/service-areas/glen-carbon-il-handyman/": "/service-areas/glen-carbon-handyman-services/",
    "/service-areas/st-charles-mo-handyman/": "/service-areas/st-charles-handyman-services/",
    "/service-areas/fenton-mo-handyman/": "/service-areas/fenton-handyman-services/",
    // Phase 4: Duplicate URL consolidation (trailing-slash canonical)
    "/handyman-near-me": "/handyman-near-me/",
    "/handyman-services": "/handyman-services/",
    "/handyman-services/faucet-install-and-repair": "/handyman-services/faucet-install-and-repair/",
    // Phase 2: Ghost URL 301 redirects (old URLs indexed by Google but not in sitemap)
    "/drywall-repair": "/handyman-services/drywall-repair/",
    "/services": "/handyman-services/",
    "/services/": "/handyman-services/",
    "/handyman-collinsville-il": "/service-areas/collinsville-handyman-services/",
    // NOTE: intentionally NOT redirected — O'Fallon, MO (St. Charles County/West
    // County) is a distinct city from O'Fallon, IL (Metro East). This URL has its
    // own real page (HandymanOFallonMO component + unique seo-routes.ts entry).
    // A prior redirect had been silently sending this city's traffic to the O'Fallon
    // IL GBP page — removed so it serves its own content again.
    "/about-rebrand": "/about/",
    "/deck-repair": "/handyman-services/deck-repair/",
    "/fence-repair": "/handyman-services/fence-repair/",
    "/ceiling-fan-installation": "/handyman-services/ceiling-fan-installation/",
    // Duplicate-content fix: this path used to render its own copy of the
    // ceiling fan page via a second wouter Route (removed from App.tsx) —
    // now consolidated into the one canonical page below.
    "/ceiling-fan-installation/": "/handyman-services/ceiling-fan-installation/",
    "/window-installation": "/handyman-services/window-installation/",
    "/senior-accessibility-upgrades": "/handyman-services/senior-accessibility-upgrades/",
    "/faucet-install-and-repair": "/handyman-services/faucet-install-and-repair/",
    "/deck-construction": "/handyman-services/deck-construction/",
    // SEO instructions: thin pages → canonical pages
    "/deck-staining": "/handyman-services/deck-repair/",
    "/deck-staining/": "/handyman-services/deck-repair/",
    "/deck-builders": "/handyman-services/deck-construction/",
    "/deck-builders/": "/handyman-services/deck-construction/",
    "/door-installation": "/handyman-services/door-repair/",
    "/door-installation/": "/handyman-services/door-repair/",
    // Short-form city URLs → canonical service-area paths
    "/chesterfield-mo/": "/handyman-chesterfield-mo",
    "/chesterfield-mo": "/handyman-chesterfield-mo",
    "/chesterfield/": "/handyman-chesterfield-mo",
    "/chesterfield": "/handyman-chesterfield-mo",
    "/ofallon-il/": "/gbp/ofallon-il/",
    "/ofallon-il": "/gbp/ofallon-il/",
    "/edwardsville-il/": "/gbp/edwardsville-il/",
    "/edwardsville-il": "/gbp/edwardsville-il/",
    "/belleville-il/": "/handyman-belleville-il",
    "/belleville-il": "/handyman-belleville-il",
    // Rapid Repair Pro old brand references → redirect to About page
    "/blog/rapid-repair-pro/": "/about/",
    "/blog/rapid-repair-pro": "/about/",
    // GBP page trailing-slash redirects
    "/gbp/ofallon": "/gbp/ofallon-il/",
    "/gbp/ofallon-il": "/gbp/ofallon-il/",
    "/gbp/edwardsville": "/gbp/edwardsville-il/",
    "/gbp/edwardsville-il": "/gbp/edwardsville-il/",
    "/gbp/des-peres": "/gbp/des-peres-mo/",
    "/gbp/des-peres-mo": "/gbp/des-peres-mo/",
    // Task 1: Soft 404 fixes — old /services/* paths → canonical /handyman-services/*
    "/services/drywall-repair": "/handyman-services/drywall-repair/",
    "/services/drywall-repair/": "/handyman-services/drywall-repair/",
    "/services/ceiling-fan-installation": "/handyman-services/ceiling-fan-installation/",
    "/services/ceiling-fan-installation/": "/handyman-services/ceiling-fan-installation/",
    "/services/interior-painting": "/handyman-services/",
    "/services/interior-painting/": "/handyman-services/",
    // Task 1: Old /handyman-services/* aliases → canonical pages
    "/handyman-services/gutter-cleaning": "/handyman-services/",
    "/handyman-services/gutter-cleaning/": "/handyman-services/",
    "/handyman-services/faucet-repair": "/handyman-services/faucet-install-and-repair/",
    "/handyman-services/faucet-repair/": "/handyman-services/faucet-install-and-repair/",
    "/handyman-services/deck-porch-repair": "/handyman-services/deck-repair/",
    "/handyman-services/deck-porch-repair/": "/handyman-services/deck-repair/",
    "/handyman-services/carpentry": "/carpentry-services/",
    "/handyman-services/carpentry/": "/carpentry-services/",
    "/handyman-services/general-handyman": "/handyman-services/",
    "/handyman-services/general-handyman/": "/handyman-services/",
    "/handyman-services/door-installation": "/handyman-services/door-repair/",
    "/handyman-services/door-installation/": "/handyman-services/door-repair/",
    "/handyman-services/home-repair": "/handyman-services/",
    "/handyman-services/home-repair/": "/handyman-services/",
    "/handyman-services/pressure-washing": "/handyman-services/",
    "/handyman-services/pressure-washing/": "/handyman-services/",
    "/handyman-services/painting": "/handyman-services/",
    // Task 1: Duplicate blog slugs → canonical blog posts
    "/blog/5-signs-your-deck-needs-repair": "/blog/signs-your-deck-needs-repair/",
    "/blog/5-signs-your-deck-needs-repair/": "/blog/signs-your-deck-needs-repair/",
    "/blog/5-signs-deck-needs-repair": "/blog/signs-your-deck-needs-repair/",
    "/blog/5-signs-deck-needs-repair/": "/blog/signs-your-deck-needs-repair/",
    "/blog/handyman-vs-contractor-which-do-you-need": "/blog/handyman-vs-contractor-metro-east-il/",
    "/blog/handyman-vs-contractor-which-do-you-need/": "/blog/handyman-vs-contractor-metro-east-il/",
    "/blog/winter-home-repairs-illinois": "/blog/common-home-repairs-after-winter-illinois/",
    "/blog/winter-home-repairs-illinois/": "/blog/common-home-repairs-after-winter-illinois/",
    "/blog/home-maintenance-tips-metro-east": "/blog/2026-handyman-costs-metro-east-il/",
    "/blog/home-maintenance-tips-metro-east/": "/blog/2026-handyman-costs-metro-east-il/",
    "/blog/belleville-home-repairs": "/handyman-belleville-il",
    "/blog/belleville-home-repairs/": "/handyman-belleville-il",
    "/blog/edwardsville-il-home-repair-guide": "/gbp/edwardsville-il/",
    "/blog/edwardsville-il-home-repair-guide/": "/gbp/edwardsville-il/",
    // Task 1: Duplicate service-area URLs → canonical pages
    "/service-areas/swansea-il-handyman-services": "/handyman-swansea-il/",
    "/service-areas/swansea-il-handyman-services/": "/handyman-swansea-il/",
    "/service-areas/swansea-il-handyman": "/handyman-swansea-il/",
    "/service-areas/swansea-il-handyman/": "/handyman-swansea-il/",
    "/service-areas/handyman-swansea-il": "/handyman-swansea-il/",
    "/service-areas/handyman-swansea-il/": "/handyman-swansea-il/",
    "/service-areas/shiloh-il-handyman-services": "/handyman-shiloh-il/",
    "/service-areas/shiloh-il-handyman-services/": "/handyman-shiloh-il/",
    "/service-areas/shiloh-il-handyman": "/handyman-shiloh-il/",
    "/service-areas/shiloh-il-handyman/": "/handyman-shiloh-il/",
    "/service-areas/handyman-shiloh-il": "/handyman-shiloh-il/",
    "/service-areas/handyman-shiloh-il/": "/handyman-shiloh-il/",
    "/service-areas/handyman-fairview-heights-il": "/handyman-fairview-heights-il/",
    "/service-areas/handyman-fairview-heights-il/": "/handyman-fairview-heights-il/",
    "/service-areas/fairview-heights-il-handyman-services": "/handyman-fairview-heights-il/",
    "/service-areas/fairview-heights-il-handyman-services/": "/handyman-fairview-heights-il/",
    "/service-areas/ballwin-handyman-services": "/handyman-ballwin-mo",
    "/service-areas/ballwin-handyman-services/": "/handyman-ballwin-mo",
    "/service-areas/chesterfield-mo-handyman-services": "/handyman-chesterfield-mo",
    "/service-areas/chesterfield-mo-handyman-services/": "/handyman-chesterfield-mo",
    "/service-areas/chesterfield-mo-handyman": "/handyman-chesterfield-mo",
    "/service-areas/chesterfield-mo-handyman/": "/handyman-chesterfield-mo",
    "/service-areas/st-charles-mo-handyman-services": "/service-areas/st-charles-handyman-services/",
    "/service-areas/st-charles-mo-handyman-services/": "/service-areas/st-charles-handyman-services/",
    "/service-areas/ballwin-mo-handyman-services": "/handyman-ballwin-mo",
    "/service-areas/ballwin-mo-handyman-services/": "/handyman-ballwin-mo",
    "/service-areas/drywall-repair-edwardsville-il": "/drywall-repair-edwardsville-il",
    "/service-areas/drywall-repair-edwardsville-il/": "/drywall-repair-edwardsville-il",
    "/service-areas/deck-repair-st-louis-mo": "/service-areas/deck-repair-st-louis-mo/",
    "/service-areas/deck-repair-st-louis-mo/": "/service-areas/deck-repair-st-louis-mo/",
    "/service-areas/door-installation-ofallon-il": "/door-installation-ofallon-il",
    "/service-areas/door-installation-ofallon-il/": "/door-installation-ofallon-il",
    "/service-areas/door-installation-edwardsville-il": "/door-installation-edwardsville-il",
    "/service-areas/door-installation-edwardsville-il/": "/door-installation-edwardsville-il",
    // Task 1: /service-packages/ → /handyman-services/
    "/service-packages": "/handyman-services/",
    "/service-packages/": "/handyman-services/",
    // Task 1: homepage with $ suffix
    "/$": "/",
    // Task 3: Duplicate canonical fixes — no-trailing-slash → canonical trailing-slash
    "/trusted-local-partners": "/trusted-local-partners/",
    "/reviews/bathroom-remodeling": "/reviews/bathroom-remodeling/",
    "/membership": "/membership/",
    "/reviews/handyman": "/reviews/handyman/",
    "/reviews/window-installation": "/reviews/window-installation/",
    "/reviews/door-installation": "/reviews/door-installation/",
    // Task 3: /carpentry-services → /carpentry-services/
    "/carpentry-services": "/carpentry-services/",
    // Task 3: /service-areas → /service-areas/
    "/service-areas": "/service-areas/",
    // Task 3: /handyman-service-packages → /handyman-services/
    "/handyman-service-packages": "/handyman-services/",
    // Task 3: /services/window-installation-ofallon-il → /handyman-services/window-installation/
    "/services/window-installation-ofallon-il": "/service-areas/window-installation-ofallon-il/",
    "/services/window-installation-ofallon-il/": "/service-areas/window-installation-ofallon-il/",
    // Task 3: city pages trailing-slash canonical
    "/handyman-fairview-heights-il": "/handyman-fairview-heights-il/",
    "/handyman-shiloh-il": "/handyman-shiloh-il/",
    "/handyman-swansea-il": "/handyman-swansea-il/",
    // Crawled-not-indexed fixes: /reviews/deck-building/ → main reviews page
    "/reviews/deck-building": "/reviews/",
    "/reviews/deck-building/": "/reviews/",
    // Crawled-not-indexed fixes: /service-areas/st-louis-handyman-services/ → canonical St. Louis page
    "/service-areas/st-louis-handyman-services": "/service-areas/st-louis-mo-handyman/",
    "/service-areas/st-louis-handyman-services/": "/service-areas/st-louis-mo-handyman/",
    // Phase 5: GSC duplicate/competing-URL redirect map (2026-07-08)
    "/handyman-services/door-repair": "/handyman-services/door-repair/",
    "/handyman-chesterfield-mo/": "/handyman-chesterfield-mo",
    "/handyman-services/deck-repair": "/handyman-services/deck-repair/",
    "/handyman-service-packages/": "/handyman-services/",
    "/handyman-ballwin-mo/": "/handyman-ballwin-mo",
    "/service-areas/edwardsville-il-handyman": "/gbp/edwardsville-il/",
    "/service-areas/ofallon-handyman-services/": "/gbp/ofallon-il/",
    "/service-areas/edwardsville-handyman-services/": "/gbp/edwardsville-il/",
    "/service-areas/belleville-handyman-services/": "/handyman-belleville-il",
    "/services/electrical-fixtures": "/services/electrical-fixtures/",
    "/services/deck-repair": "/handyman-services/deck-repair/",
    "/services/porch-repair": "/handyman-services/porch-repair/",
    "/services/bathroom-remodeling": "/handyman-services/bathroom-remodeling/",
    // Content consolidation (2026-07-10): door replacement page merged into
    // the main door installation page (pricing table + FAQs folded in) —
    // per owner decision, since both pages targeted the same searcher intent.
    "/services/door-replacement": "/door-installation",
  };
  app.use((req, res, next) => {
    const target = redirects[req.path];
    if (target) {
      return res.redirect(301, target);
    }
    next();
  });

  // Task 1: 410 Gone for /location-services/* routes (never existed as real pages)
  app.use((req, res, next) => {
    if (req.path.startsWith('/location-services/')) {
      return res.status(410).send('Gone');
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
