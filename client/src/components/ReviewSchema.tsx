import { useEffect } from "react";

interface Review {
  author: string;
  location: string;
  rating: number;
  date: string;
  reviewBody: string;
  project?: string;
}

interface ReviewSchemaProps {
  serviceName: string;
  serviceUrl: string;
  reviews: Review[];
  aggregateRating: {
    ratingValue: number;
    reviewCount: number;
  };
}

export function ReviewSchema({ serviceName, serviceUrl, reviews, aggregateRating }: ReviewSchemaProps) {
  useEffect(() => {
    // Create the schema markup
    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": `${serviceName} - Hero Handyman Pro`,
      "url": `https://www.herohandymanpro.com${serviceUrl}`,
      "provider": {
        "@type": "LocalBusiness",
        "name": "Hero Handyman Pro",
        "telephone": "800-741-6056",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "St. Louis",
          "addressRegion": "MO",
          "addressCountry": "US"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": aggregateRating.ratingValue.toString(),
        "reviewCount": aggregateRating.reviewCount.toString(),
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": reviews.map(review => ({
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": review.author
        },
        "datePublished": review.date,
        "reviewBody": review.reviewBody,
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": review.rating.toString(),
          "bestRating": "5",
          "worstRating": "1"
        }
      }))
    };

    // Add schema to head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    script.id = 'review-schema';
    
    // Remove existing schema if present
    const existing = document.getElementById('review-schema');
    if (existing) {
      existing.remove();
    }
    
    document.head.appendChild(script);

    // Cleanup on unmount
    return () => {
      const schemaScript = document.getElementById('review-schema');
      if (schemaScript) {
        schemaScript.remove();
      }
    };
  }, [serviceName, serviceUrl, reviews, aggregateRating]);

  return null; // This component doesn't render anything visible
}
