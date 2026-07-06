import { useEffect } from "react";

interface ServiceSchemaProps {
  serviceName: string;
  description: string;
  serviceType: string;
  areaServed: string;
  priceRange?: string;
  pageUrl: string;
}

export default function ServiceSchema({ 
  serviceName, 
  description, 
  serviceType,
  areaServed,
  priceRange = "$200-$2000",
  pageUrl 
}: ServiceSchemaProps) {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": serviceType,
      "name": serviceName,
      "description": description,
      "provider": {
        "@type": "LocalBusiness",
        "name": "Hero Handyman Pro",
        "image": "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029565453/JLrsrJqAaUkBYHOx.png",
        "telephone": "+1-800-741-6056",
        "url": "https://herohandymanpro.com",
        "priceRange": "$$",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "127"
        }
      },
      "areaServed": {
        "@type": "City",
        "name": areaServed
      },
      "offers": {
        "@type": "Offer",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "USD",
          "price": priceRange
        },
        "availability": "https://schema.org/InStock"
      },
      "url": `https://herohandymanpro.com${pageUrl}`
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);
    script.id = `service-schema-${serviceType.replace(/\s+/g, '-').toLowerCase()}`;
    
    // Remove existing schema if present
    const existing = document.getElementById(script.id);
    if (existing) {
      existing.remove();
    }
    
    document.head.appendChild(script);

    return () => {
      const schemaScript = document.getElementById(script.id);
      if (schemaScript) {
        schemaScript.remove();
      }
    };
  }, [serviceName, description, serviceType, areaServed, priceRange, pageUrl]);

  return null;
}
