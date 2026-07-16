import express, { type Express } from "express";
import fs from "fs";
import { type Server } from "http";
import { nanoid } from "nanoid";
import path from "path";
import { createServer as createViteServer } from "vite";
import viteConfig from "../../vite.config";
import { injectRouteMeta } from "./routeMeta";
import { seoRoutes } from "@shared/seo-routes";

/**
 * Determine whether a pathname corresponds to a real page.
 * Used to decide whether the SPA fallback should respond 200 (real page,
 * client router will render it) or 404 (no such page — prevents soft 404s
 * where every made-up URL silently returns 200 with the "Home" fallback
 * or Not-Found component, which search engines then index as valid).
 */
function isKnownRoute(pathname: string): boolean {
  const normalized =
    pathname !== "/" && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;
  if (seoRoutes[pathname] || seoRoutes[normalized]) return true;
  // Fallback: allow known non-SEO'd app routes (admin, api-adjacent client pages, etc.)
  // that aren't part of the SEO metadata map but are still real client routes.
  const knownNonSeoRoutes = new Set([
    "/brand-preview",
    "/admin/login",
    "/admin/leads",
    "/admin/estimator-leads",
    "/dashboard/membership",
  ]);
  return knownNonSeoRoutes.has(pathname) || knownNonSeoRoutes.has(normalized);
}

export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "../..",
        "client",
        "index.html"
      );

      // always reload the index.html file from disk incase it changes
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      let page = await vite.transformIndexHtml(url, template);
      // Use originalUrl pathname (strip query string) for route matching
      // req.path may be '/' in Vite middleware mode; originalUrl has the real path
      const pathname = req.originalUrl.split('?')[0].split('#')[0];
      page = injectRouteMeta(page, pathname);
      const statusCode = isKnownRoute(pathname) ? 200 : 404;
      res.status(statusCode).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: Express) {
  const distPath =
    process.env.NODE_ENV === "development"
      ? path.resolve(import.meta.dirname, "../..", "dist", "public")
      : path.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    console.error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }

  // Serve static assets with long-lived cache headers for images, fonts, JS, CSS
  app.use(
    express.static(distPath, {
      // index:false so "/" falls through to the injectRouteMeta handler below
      // (otherwise express.static serves the raw index.html for the homepage,
      // skipping per-route <title>/description/H1 injection).
      index: false,
      maxAge: "1y",
      immutable: true,
      setHeaders(res, filePath) {
        // HTML should never be cached aggressively (it changes on deploy)
        if (filePath.endsWith(".html")) {
          res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
        } else if (/\.(webp|jpg|jpeg|png|gif|svg|ico|woff2|woff|ttf|otf)$/.test(filePath)) {
          // Images and fonts: 1 year immutable
          res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
        } else if (/\.(js|css|mjs)$/.test(filePath)) {
          // JS/CSS with content hashes: 1 year immutable
          res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
        }
      },
    })
  );

  // fall through to index.html if the file doesn't exist, injecting per-route metadata
  app.use("*", (req, res) => {
    const htmlPath = path.resolve(distPath, "index.html");
    fs.readFile(htmlPath, "utf-8", (err, html) => {
      if (err) {
        res.status(500).send("Internal Server Error");
        return;
      }
      // req.path is unreliable here because this handler is mounted with
      // app.use("*", ...) — Express can report the wrong (often "/") path
      // in that case. originalUrl always has the real requested path.
      // (Same fix already applied in the dev-mode Vite middleware branch above.)
      const pathname = req.originalUrl.split('?')[0].split('#')[0];
      const injected = injectRouteMeta(html, pathname);
      const statusCode = isKnownRoute(pathname) ? 200 : 404;
      // HTML is generated per-request with per-page metadata baked in, and
      // this content changes on every deploy — never let any edge/CDN cache
      // hold onto a stale copy the way it just did after this file's own fix.
      res
        .status(statusCode)
        .set({
          "Content-Type": "text/html",
          "Cache-Control": "no-cache, no-store, must-revalidate",
        })
        .send(injected);
    });
  });
}
