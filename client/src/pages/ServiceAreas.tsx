import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Check } from "lucide-react";
import SEO from '@/components/SEO';
import { useSeoRoute } from '@/hooks/useSeoRoute';
export default function ServiceAreas() {
  const seo = useSeoRoute();
  const cities = [
    {
      name: "O'Fallon, IL",
      url: "/service-areas/ofallon-handyman-services/",
      description: "Serving all O'Fallon neighborhoods including downtown, SWIC area, and surrounding communities with professional handyman services.",
      highlights: ["Deck repair", "Home repairs", "Carpentry work"]
    },
    {
      name: "Edwardsville, IL",
      url: "/service-areas/edwardsville-handyman-services/",
      description: "Professional handyman services for Edwardsville including SIUE, downtown, and all surrounding neighborhoods.",
      highlights: ["Drywall repair", "Door installation", "Exterior repairs"]
    },
    {
      name: "Belleville, IL",
      url: "/service-areas/belleville-handyman-services/",
      description: "Trusted handyman services throughout Belleville, Signal Hill, and Scott AFB area communities.",
      highlights: ["Porch repair", "Interior trim", "Home improvements"]
    },
    {
      name: "St. Louis, MO",
      url: "/service-areas/st-louis-handyman-services/",
      description: "Serving St. Louis neighborhoods from Central West End to South City with reliable handyman services.",
      highlights: ["Deck construction", "Wood rot repair", "All repairs"]
    },
    {
      name: "Collinsville, IL",
      url: "/service-areas/collinsville-handyman-services/",
      description: "Quality handyman services for Collinsville including downtown, Gateway Center, and all local neighborhoods.",
      highlights: ["Ceiling fans", "Faucet repair", "Punch lists"]
    },
    {
      name: "Glen Carbon, IL",
      url: "/service-areas/glen-carbon-handyman-services/",
      description: "Professional home repairs and handyman services throughout Glen Carbon and surrounding areas.",
      highlights: ["Accessibility upgrades", "Minor plumbing", "Carpentry"]
    },
    {
      name: "St. Charles, MO",
      url: "/service-areas/st-charles-handyman-services/",
      description: "Serving St. Charles from Historic Main Street to New Town with expert handyman services.",
      highlights: ["Home repairs", "Deck work", "Interior upgrades"]
    },
    {
      name: "Fenton, MO",
      url: "/service-areas/fenton-handyman-services/",
      description: "Reliable handyman services for Fenton including Gravois Bluffs and all surrounding communities.",
      highlights: ["Exterior repairs", "Door services", "All projects"]
    },
    {
      name: "Chesterfield, MO",
      url: "/handyman-chesterfield-mo",
      description: "Professional handyman services throughout Chesterfield including Chesterfield Valley, Clarkson Road, and surrounding West County communities.",
      highlights: ["Drywall repair", "Deck repair", "Door installation"]
    },
    {
      name: "Ballwin, MO",
      url: "/handyman-ballwin-mo",
      description: "Trusted handyman services for Ballwin homeowners including Kehrs Mill, Manchester Road corridor, and all surrounding neighborhoods.",
      highlights: ["Carpentry", "Home repairs", "Drywall patching"]
    }
  ];

  const serviceHighlights = [
    "Deck repair and construction",
    "Porch and stair repair",
    "Exterior carpentry and wood rot repair",
    "Door and window installation",
    "Drywall and ceiling repair",
    "Interior trim carpentry",
    "Ceiling fan and light installation",
    "Faucet and minor plumbing",
    "Home repair punch lists",
    "Senior accessibility upgrades"
  ];

  return (
    <div className="flex flex-col">
      <SEO {...seo} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white py-16 md:py-24 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-[3.75rem] font-bold leading-tight mb-4">
              Service Areas
            </h1>
            <p className="text-[#ff5b00] text-xl md:text-2xl font-semibold mb-6">
              Professional Handyman Services Across Greater St. Louis & Metro East
            </p>
            <p className="text-[#e5e7eb] text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Hero Handyman Pro proudly serves homeowners throughout the St. Louis metropolitan area and Metro East Illinois. From quick repairs to complete home improvement projects, we're your local handyman experts.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:800-741-6056">
              <Button className="bg-[#ff5b00] hover:bg-[#ff5b00]/90 text-white rounded-full px-10 py-7 text-lg font-semibold flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call Now: 800-741-6056
              </Button>
            </a>
            <Link href="/booking/">
              <Button variant="outline" className="rounded-full px-10 py-7 text-lg font-semibold border-2 border-white text-white hover:bg-white/10">
                Book Online
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Cities We Serve */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b1220]">
              Cities We Serve
            </h2>
            <p className="text-[#4b5563] text-lg max-w-3xl mx-auto">
              Click on your city below to learn more about our handyman services in your area, including local neighborhoods we serve, popular projects, and customer testimonials.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {cities.map((city, i) => (
              <Link key={i} href={city.url}>
                <div className="bg-[#f9fafb] rounded-2xl p-8 border-2 border-[#e5e7eb] hover:border-[#ff5b00] transition-colors cursor-pointer h-full">
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="h-6 w-6 text-[#ff5b00] mt-1 flex-shrink-0" />
                    <h3 className="text-2xl font-bold text-[#0b1220]">{city.name}</h3>
                  </div>
                  <p className="text-[#4b5563] mb-4">{city.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {city.highlights.map((highlight, j) => (
                      <span key={j} className="bg-[#ff5b00]/10 text-[#ff5b00] px-3 py-1 rounded-full text-sm font-medium">
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 text-[#ff5b00] font-semibold flex items-center gap-2">
                    Learn More →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services We Provide */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b1220]">
              Services We Provide Across All Areas
            </h2>
            <p className="text-[#4b5563] text-lg max-w-3xl mx-auto">
              No matter where you're located in our service area, Hero Handyman Pro offers comprehensive home repair and improvement services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {serviceHighlights.map((service, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-[#e5e7eb] flex items-start gap-3">
                <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                <span className="text-[#374151]">{service}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/services/">
              <Button className="bg-[#ff5b00] hover:bg-[#ff5b00]/90 text-white rounded-full px-8 py-6 text-lg font-semibold">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b1220]">
              Our Coverage Area
            </h2>
            <p className="text-[#4b5563] text-lg max-w-3xl mx-auto">
              Hero Handyman Pro serves homeowners throughout Greater St. Louis, Missouri and Metro East Illinois. We're proud to be your local handyman experts, serving both sides of the river.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#ff5b00] to-[#f97316] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Metro East Illinois</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>O'Fallon, IL</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <a href="/service-areas/edwardsville-handyman-services/" className="underline hover:no-underline">handyman Edwardsville IL</a>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <a href="/handyman-belleville-il" className="underline hover:no-underline">handyman Belleville IL</a>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Collinsville, IL</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Glen Carbon, IL</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>And surrounding communities</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#1f2937] to-[#020617] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Greater St. Louis, MO</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>St. Louis, MO</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>St. Charles, MO</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Fenton, MO</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Ballwin, MO</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Maryland Heights, MO</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>And surrounding areas</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 bg-[#f9fafb] rounded-2xl p-8 border border-[#e5e7eb] text-center">
            <p className="text-[#374151] text-lg mb-4">
              <strong>Not sure if we serve your area?</strong> We're expanding our coverage regularly and may already be working in your neighborhood.
            </p>
            <a href="tel:800-741-6056" className="text-[#ff5b00] font-semibold text-lg hover:underline">
              Call 800-741-6056 to confirm coverage
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b1220]">
              Why Homeowners Choose Hero Handyman Pro
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e5e7eb] text-center">
              <div className="bg-[#ff5b00]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-[#ff5b00]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0b1220]">Local Expertise</h3>
              <p className="text-[#4b5563]">
                We know the area, understand local building codes, and are familiar with the unique needs of homes in our region.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e5e7eb] text-center">
              <div className="bg-[#ff5b00]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-[#ff5b00]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0b1220]">Fast Response</h3>
              <p className="text-[#4b5563]">
                Same-day or next-day service available throughout our coverage area. We respond quickly and show up on time.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e5e7eb] text-center">
              <div className="bg-[#ff5b00]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-[#ff5b00]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0b1220]">Transparent Pricing</h3>
              <p className="text-[#4b5563]">
                Clear, upfront estimates with no hidden fees. You'll know exactly what to expect before work begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-[#e5e7eb] text-lg mb-8 max-w-2xl mx-auto">
            Whether you need a quick repair or a complete home improvement project, Hero Handyman Pro is ready to help. Contact us today for fast, professional service.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:800-741-6056">
              <Button className="bg-[#ff5b00] hover:bg-[#ff5b00]/90 text-white rounded-full px-10 py-7 text-lg font-semibold flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call Now: 800-741-6056
              </Button>
            </a>
            <Link href="/booking/">
              <Button variant="outline" className="rounded-full px-10 py-7 text-lg font-semibold border-2 border-white text-white hover:bg-white/10">
                Book Online
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
