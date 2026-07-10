import { useEffect } from "react";

interface LocalBusinessSchemaProps {
  city: string;
  state: string;
  pageUrl: string;
  phone?: string;
}

// Accurate geo coordinates per city
const GEO: Record<string, { lat: number; lng: number }> = {
  "Glen Carbon":    { lat: 38.7567, lng: -89.9845 },
  "Edwardsville":   { lat: 38.8231, lng: -89.9534 },
  "O'Fallon":       { lat: 38.5895, lng: -89.9112 },
  "Collinsville":   { lat: 38.6703, lng: -89.9845 },
  "Belleville":     { lat: 38.5201, lng: -89.9840 },
  "Shiloh":         { lat: 38.5598, lng: -89.9134 },
  "Swansea":        { lat: 38.5320, lng: -89.9987 },
  "Fairview Heights": { lat: 38.5945, lng: -89.9940 },
  "Ballwin":        { lat: 38.5967, lng: -90.5462 },
  "Chesterfield":   { lat: 38.6631, lng: -90.5771 },
  "St. Charles":    { lat: 38.7881, lng: -90.4974 },
  "St. Louis":      { lat: 38.6270, lng: -90.1994 },
};

// Neighboring cities per city for areaServed
const AREA_SERVED: Record<string, Array<{ name: string; region: string }>> = {
  "Glen Carbon":  [
    { name: "Glen Carbon", region: "IL" },
    { name: "Edwardsville", region: "IL" },
    { name: "Maryville", region: "IL" },
    { name: "Collinsville", region: "IL" },
  ],
  "Edwardsville": [
    { name: "Edwardsville", region: "IL" },
    { name: "Glen Carbon", region: "IL" },
    { name: "Troy", region: "IL" },
    { name: "Maryville", region: "IL" },
  ],
  "O'Fallon": [
    { name: "O'Fallon", region: "IL" },
    { name: "Shiloh", region: "IL" },
    { name: "Belleville", region: "IL" },
    { name: "Fairview Heights", region: "IL" },
  ],
  "Collinsville": [
    { name: "Collinsville", region: "IL" },
    { name: "Maryville", region: "IL" },
    { name: "Fairview Heights", region: "IL" },
    { name: "Belleville", region: "IL" },
  ],
  "Belleville": [
    { name: "Belleville", region: "IL" },
    { name: "O'Fallon", region: "IL" },
    { name: "Swansea", region: "IL" },
    { name: "Fairview Heights", region: "IL" },
  ],
  "Shiloh": [
    { name: "Shiloh", region: "IL" },
    { name: "O'Fallon", region: "IL" },
    { name: "Belleville", region: "IL" },
    { name: "Fairview Heights", region: "IL" },
  ],
  "Swansea": [
    { name: "Swansea", region: "IL" },
    { name: "Belleville", region: "IL" },
    { name: "Fairview Heights", region: "IL" },
    { name: "O'Fallon", region: "IL" },
  ],
  "Fairview Heights": [
    { name: "Fairview Heights", region: "IL" },
    { name: "Belleville", region: "IL" },
    { name: "Swansea", region: "IL" },
    { name: "O'Fallon", region: "IL" },
  ],
  "Ballwin": [
    { name: "Ballwin", region: "MO" },
    { name: "Chesterfield", region: "MO" },
    { name: "Ellisville", region: "MO" },
    { name: "Manchester", region: "MO" },
  ],
  "Chesterfield": [
    { name: "Chesterfield", region: "MO" },
    { name: "Ballwin", region: "MO" },
    { name: "Wildwood", region: "MO" },
    { name: "St. Charles", region: "MO" },
  ],
  "St. Charles": [
    { name: "St. Charles", region: "MO" },
    { name: "O'Fallon", region: "MO" },
    { name: "Wentzville", region: "MO" },
    { name: "Chesterfield", region: "MO" },
  ],
  "St. Louis": [
    { name: "St. Louis", region: "MO" },
    { name: "Chesterfield", region: "MO" },
    { name: "Ballwin", region: "MO" },
    { name: "St. Charles", region: "MO" },
  ],
};

export default function LocalBusinessSchema({ city, state, pageUrl, phone = "+1-800-741-6056" }: LocalBusinessSchemaProps) {
  useEffect(() => {
    const geo = GEO[city] ?? (state === "IL"
      ? { lat: 38.7906, lng: -89.9994 }
      : { lat: 38.6270, lng: -90.1994 });

    const areaServed = AREA_SERVED[city] ?? [{ name: city, region: state }];

    const schema = {
      "@context": "https://schema.org",
      "@type": "HomeAndConstructionBusiness",
      "name": "Hero Handyman Pro",
      "image": "https://www.herohandymanpro.com/images/phil-portrait.webp",
      "description": `Professional handyman services in ${city}, ${state}. Deck repair, carpentry, drywall, doors, and all home repairs for ${city} homeowners.`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": city,
        "addressRegion": state,
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": geo.lat,
        "longitude": geo.lng
      },
      "url": `https://www.herohandymanpro.com${pageUrl}`,
      "telephone": phone,
      "priceRange": "$$",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "07:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "08:00",
          "closes": "16:00"
        }
      ],
      "areaServed": areaServed.map(a => ({
        "@type": "City",
        "name": a.name,
        "addressRegion": a.region
      })),
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": `Handyman Services in ${city}, ${state}`,
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Handyman Services" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Deck Repair" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Deck Construction" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Porch Repair" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Exterior Carpentry" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Door Installation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Door Repair" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Drywall Repair" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Interior Trim Carpentry" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ceiling Fan Installation" } }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "127",
        "bestRating": "5"
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
