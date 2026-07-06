import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
}

export default function SEO({
  title,
  description,
  keywords,
  ogImage = 'https://herohandymanpro.com/og-image.jpg',
  ogType = 'website',
  canonicalUrl
}: SEOProps) {
  useEffect(() => {
    // Set page title
    document.title = `${title} | Hero Handyman Pro`;

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
    setMetaTag('og:title', `${title} | Hero Handyman Pro`, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:image', ogImage, true);
    setMetaTag('og:type', ogType, true);
    setMetaTag('og:site_name', 'Hero Handyman Pro', true);
    
    if (canonicalUrl) {
      setMetaTag('og:url', canonicalUrl, true);
    }

    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', `${title} | Hero Handyman Pro`);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', ogImage);

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
  }, [title, description, keywords, ogImage, ogType, canonicalUrl]);

  return null;
}
