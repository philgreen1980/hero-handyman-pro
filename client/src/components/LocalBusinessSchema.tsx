import { useEffect } from "react";

interface LocalBusinessSchemaProps {
  city: string;
  state: string;
  pageUrl: string;
  phone?: string;
}

export default function LocalBusinessSchema({ city, state, pageUrl, phone = "+1-800-741-6056" }: LocalBusinessSchemaProps) {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Hero Handyman Pro",
      "image": "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029565453/JLrsrJqAaUkBYHOx.png",
      "description": `Professional handyman services in ${city}, ${state}. Deck repair, carpentry, drywall, doors, and all home repairs.`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": city,
        "addressRegion": state,
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": state === "IL" ? "38.7906" : "38.6270",
        "longitude": state === "IL" ? "-90.1994" : "-90.1994"
      },
      "url": `https://herohandymanpro.com${pageUrl}`,
      "telephone": phone,
      "priceRange": "$$",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "07:00",
          "closes": "19:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "08:00",
          "closes": "17:00"
        }
      ],
      "areaServed": {
        "@type": "City",
        "name": city,
        "containedInPlace": {
          "@type": "State",
          "name": state === "IL" ? "Illinois" : "Missouri"
        }
      },
      "serviceType": [
        "Handyman Services",
        "Deck Repair",
        "Deck Construction",
        "Porch Repair",
        "Exterior Carpentry",
        "Door Installation",
        "Drywall Repair",
        "Interior Trim Carpentry",
        "Ceiling Fan Installation",
        "Faucet Repair"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "127"
      }
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);
    script.id = `local-business-schema-${city.replace(/\s+/g, '-').toLowerCase()}`;
    
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
  }, [city, state, pageUrl]);

  return null;
}
