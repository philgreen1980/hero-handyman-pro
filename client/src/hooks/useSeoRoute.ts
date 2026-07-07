/**
 * useSeoRoute — reads SEO metadata for the current route from the shared
 * single source of truth (shared/seo-routes.ts).
 *
 * Usage in a page component:
 *   const seo = useSeoRoute();
 *   return <><SEO {...seo} />{...}</>;
 *
 * Or with an explicit path override (useful for pages at multiple routes):
 *   const seo = useSeoRoute('/handyman-services/deck-repair/');
 */
import { useLocation } from 'wouter';
import { seoRoutes, type RouteSeoDef } from '@shared/seo-routes';

const FALLBACK: RouteSeoDef = {
  title: 'Hero Handyman Pro | Handyman & Home Repair in St. Louis & Metro East',
  description:
    'Hero Handyman Pro provides trusted handyman & home repair services in St. Louis & Metro East. Deck repair, carpentry, drywall, and more — licensed, insured, and easy to schedule.',
  h1: 'Hero Handyman Pro — Trusted Local Handyman Services',
  bodySnippet:
    'Hero Handyman Pro provides trusted handyman and home repair services across St. Louis, MO and Metro East Illinois. Call 800-741-6056 for a free estimate.',
  canonicalUrl: 'https://www.herohandymanpro.com',
};

export function useSeoRoute(overridePath?: string): RouteSeoDef {
  const [location] = useLocation();
  const pathname = overridePath ?? location;

  // Exact match
  if (seoRoutes[pathname]) return seoRoutes[pathname];

  // Try with trailing slash toggled
  const toggled = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname + '/';
  if (seoRoutes[toggled]) return seoRoutes[toggled];

  return FALLBACK;
}
