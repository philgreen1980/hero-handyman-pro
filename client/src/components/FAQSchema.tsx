import { useEffect } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
  pageUrl: string;
}

export default function FAQSchema({ faqs, pageUrl }: FAQSchemaProps) {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);
    script.id = `faq-schema-${pageUrl.replace(/\//g, '-')}`;
    
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
  }, [faqs, pageUrl]);

  return null;
}
