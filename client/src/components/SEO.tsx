import { useEffect } from 'react';

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Hero Handyman Pro",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Swansea",
    "addressRegion": "IL",
    "postalCode": "62226",
    "addressCountry": "US"
  },
  "telephone": "800-741-6056",
  "url": "https://www.herohandymanpro.com/",
  "openingHours": "Mo-Su 08:00-17:00",
  "priceRange": "$$",
  "description": "Fast, honest handyman services in St. Louis and Metro East IL"
};

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  /** When true, uses title as-is without appending "| Hero Handyman Pro" */
  fullTitle?: boolean;
  /** When true, adds <meta name="robots" content="noindex, follow"> to prevent indexing */
  noindex?: boolean;
}

export default function SEO({
  title,
  description,
  keywords,
  ogImage = '/images/og-image-hero-handyman-pro.png',
  ogType = 'website',
  canonicalUrl,
  fullTitle = false,
  noindex = false
}: SEOProps) {
  useEffect(() => {
    const displayTitle = fullTitle ? title : `${title} | Hero Handyman Pro`;

    // Set page title
    document.title = displayTitle;

    // Set or update meta tags
    const setMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Standard meta tags
    setMetaTag('description', description);
    if (keywords) {
      setMetaTag('keywords', keywords);
    }

    // Open Graph tags
    setMetaTag('og:title', displayTitle, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:image', ogImage, true);
    setMetaTag('og:type', ogType, true);
    setMetaTag('og:site_name', 'Hero Handyman Pro', true);
    
    if (canonicalUrl) {
      setMetaTag('og:url', canonicalUrl, true);
    }

    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', displayTitle);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', ogImage);

    // Robots meta tag
    const robotsContent = noindex ? 'noindex, follow' : 'index, follow';
    setMetaTag('robots', robotsContent);

    // Canonical URL
    if (canonicalUrl) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonicalUrl);
    }

    // Inject LocalBusiness JSON-LD schema (once per page, keyed by id)
    const schemaId = 'local-business-schema';
    let schemaScript = document.getElementById(schemaId);
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.setAttribute('type', 'application/ld+json');
      schemaScript.id = schemaId;
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(LOCAL_BUSINESS_SCHEMA);

  }, [title, description, keywords, ogImage, ogType, canonicalUrl, fullTitle]);

  return null;
}
