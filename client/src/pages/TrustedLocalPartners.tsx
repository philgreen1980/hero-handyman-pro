import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { Link } from "wouter";

interface Partner {
  category: string;
  name: string;
  description: string;
  url: string;
}

const partners: Partner[] = [
  {
    category: "Restoration & Mold Remediation",
    name: "RCC Restoration",
    description: "Professional restoration and mold remediation services serving homeowners throughout the St. Louis area. When water damage, mold, or structural restoration is needed, RCC delivers fast response and quality work.",
    url: "https://rccrestore.com/"
  },
  {
    category: "Plumbing",
    name: "Embrich Plumbing",
    description: "Licensed, experienced plumbing professionals providing residential plumbing repairs, installations, and emergency services.",
    url: "https://embrichplumbing.com/"
  },
  {
    category: "HVAC",
    name: "Polar Heating & Cooling",
    description: "Reliable HVAC service for heating, cooling, maintenance, and system replacements.",
    url: "https://callpolar.com/"
  },
  {
    category: "Roofing",
    name: "Black Dog Roofing",
    description: "Experienced roofing contractors providing inspections, repairs, and full roof replacements.",
    url: "https://blackdogroof.com/"
  },
  {
    category: "Insurance",
    name: "Redmon Insurance Agency",
    description: "Local insurance professionals helping homeowners protect their property with the right coverage.",
    url: "https://redmonagency.com/"
  },
  {
    category: "Real Estate",
    name: "Red Door Realty Group",
    description: "Experienced real estate professionals helping homeowners buy and sell with confidence.",
    url: "https://www.reddoorrg.com/"
  }
];

export default function TrustedLocalPartners() {
  const seoData = {
    title: "Trusted Local Home Service Partners | Hero Handyman Pro",
    description: "A curated list of trusted local partners we recommend for restoration, plumbing, HVAC, roofing, insurance, and real estate in St. Louis & Metro East.",
    keywords: "trusted partners, local contractors, home services, St. Louis contractors, Metro East contractors",
    canonicalUrl: "https://herohandymanpro.com/trusted-local-partners"
  };

  return (
    <div className="flex flex-col">
      <SEO {...seoData} />
      
      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-teal-50 to-white">
        <div className="max-w-[1120px] mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Trusted Local Partners</h1>
          <div className="max-w-3xl space-y-4 text-lg text-gray-700">
            <p>
              At Hero Handyman Pro, we believe homeowners deserve a trusted network of professionals they can rely on. Over the years, we've built relationships with outstanding local companies who share our commitment to quality workmanship and customer care.
            </p>
            <p>
              If your project requires specialized services beyond handyman repairs, we confidently recommend the following trusted partners.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">Our Recommended Local Pros</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="mb-3">
                    <span className="text-xs uppercase tracking-wider text-teal-600 font-semibold">
                      {partner.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{partner.name}</h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    {partner.description}
                  </p>
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="inline-block"
                  >
                    <Button 
                      variant="outline" 
                      className="w-full group hover:bg-teal-50 hover:border-teal-600 hover:text-teal-700"
                    >
                      Visit Website
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong className="text-gray-900">Disclaimer:</strong> Hero Handyman Pro is not affiliated with these businesses. Recommendations are based on our professional experience and local relationships. Always confirm licensing, insurance, pricing, and availability directly with the provider.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-teal-700 to-teal-900 text-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need help with a repair or home project?</h2>
          <p className="text-xl mb-8 text-teal-50 max-w-2xl mx-auto">
            Get a fast, professional quote from Hero Handyman Pro. Same-day/next-day availability in many areas.
          </p>
          <Link href="/booking/">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-8 py-6 rounded-full"
            >
              Get a Free Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
