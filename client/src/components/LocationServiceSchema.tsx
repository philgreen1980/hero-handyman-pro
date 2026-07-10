import { useEffect } from 'react';

interface LocationServiceSchemaProps {
  serviceName: string;
  serviceType: string;
  city: string;
  state: string;
  zipCode?: string;
  description: string;
  priceRange: string;
  pageUrl: string;
  latitude: number;
  longitude: number;
  radiusMiles?: number;
}

/**
 * Enhanced schema markup for location-specific service pages
 * Combines LocalBusiness, Service, and GeoCircle for maximum local SEO impact
 */
export default function LocationServiceSchema({
  serviceName,
  serviceType,
  city,
  state,
  zipCode,
  description,
  priceRange,
  pageUrl,
  latitude,
  longitude,
  radiusMiles = 10
}: LocationServiceSchemaProps) {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        // LocalBusiness Schema
        {
          "@type": "LocalBusiness",
          "@id": `https://www.herohandymanpro.com/#localbusiness-${city.toLowerCase()}`,
          "name": "Hero Handyman Pro",
          "image": "https://www.herohandymanpro.com/images/phil-portrait.webp",
          "description": `Professional handyman and home repair services in ${city}, ${state}`,
          "url": "https://www.herohandymanpro.com",
          "telephone": "800-741-6056",
          "email": "info@herohandymanpro.com",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": city,
            "addressRegion": state,
            "postalCode": zipCode || "",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": latitude,
            "longitude": longitude
          },
          "areaServed": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": latitude,
              "longitude": longitude
            },
            "geoRadius": `${radiusMiles} mi`
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "08:00",
              "closes": "18:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Saturday",
              "opens": "09:00",
              "closes": "17:00"
            }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "127"
          }
        },
        // Service Schema
        {
          "@type": "Service",
          "@id": `https://www.herohandymanpro.com${pageUrl}#service`,
          "serviceType": serviceType,
          "name": serviceName,
          "description": description,
          "provider": {
            "@id": `https://www.herohandymanpro.com/#localbusiness-${city.toLowerCase()}`
          },
          "areaServed": {
            "@type": "City",
            "name": city,
            "containedInPlace": {
              "@type": "State",
              "name": state
            }
          },
          "offers": {
            "@type": "Offer",
            "priceRange": priceRange,
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "url": `https://www.herohandymanpro.com${pageUrl}`
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": `${serviceType} Services in ${city}`,
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": `Residential ${serviceType}`,
                  "description": `Professional ${serviceType.toLowerCase()} for homes in ${city}, ${state}`
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": `Emergency ${serviceType}`,
                  "description": `Same-day and next-day ${serviceType.toLowerCase()} services available`
                }
              }
            ]
          }
        },
        // BreadcrumbList Schema
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.herohandymanpro.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Services",
              "item": "https://www.herohandymanpro.com/services"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": serviceName,
              "item": `https://www.herohandymanpro.com${pageUrl}`
            }
          ]
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    script.id = `location-service-schema-${city.toLowerCase()}`;
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById(`location-service-schema-${city.toLowerCase()}`);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [serviceName, serviceType, city, state, zipCode, description, priceRange, pageUrl, latitude, longitude, radiusMiles]);

  return null;
}
