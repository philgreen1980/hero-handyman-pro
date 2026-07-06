import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Wrench, Home, Clock, Shield, MessageSquare, Star, Hammer, DoorOpen } from "lucide-react";
import SEO from "@/components/SEO";

import { useSeoRoute } from '@/hooks/useSeoRoute';
export default function HandymanBellevilleIL() {
  const seo = useSeoRoute();
  const faqs = [
    {
      q: "How much does a handyman cost in Belleville, IL?",
      a: "Most handyman jobs in Belleville run between $150 and $500 depending on the scope. Simple repairs like drywall patching or door adjustments typically fall in the $150–$250 range. Larger projects like deck board replacement or full door installation are usually $300–$600+. We provide free estimates so you know the cost before any work begins.",
    },
    {
      q: "Do you offer same-day handyman service in Belleville?",
      a: "Yes — we offer same-day and next-day availability for most repairs in Belleville. For urgent repairs, call us directly at 800-741-6056 and we'll do our best to get to you quickly.",
    },
    {
      q: "Are you licensed and insured to work in Illinois?",
      a: "Yes. Hero Handyman Pro is fully insured for residential work in Illinois and Missouri. We carry general liability insurance on every job, so you're protected if anything unexpected happens.",
    },
    {
      q: "What neighborhoods in Belleville do you serve?",
      a: "We serve all of Belleville including historic downtown, neighborhoods near Scott Air Force Base, Shiloh, Swansea, O'Fallon IL, and surrounding communities throughout St. Clair County.",
    },
    {
      q: "Can you handle multiple repairs in one visit in Belleville?",
      a: "Absolutely — our Honey-Do List Knockout package is designed exactly for that. We batch multiple small repairs into one efficient visit so you're not paying multiple trip charges for each item.",
    },
    {
      q: "Do you repair decks in Belleville?",
      a: "Yes. Deck repair is one of our most common requests in Belleville. We assess the full structure, replace only what needs replacing, and restore your deck to safe condition without unnecessary upsells.",
    },
  ];

  return (
    <div className="flex flex-col">
      <SEO {...seo} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white py-16 md:py-24 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-8">
            <p className="text-[#ff5b00] text-sm font-semibold uppercase tracking-widest mb-3">Serving Belleville & St. Clair County, IL</p>
            <h1 className="text-4xl md:text-5xl lg:text-[3.75rem] font-bold leading-tight mb-4">
              Handyman Belleville IL — Home Repairs, Decks & Carpentry
            </h1>
            <p className="text-[#ff5b00] text-xl md:text-2xl font-semibold mb-6">
              Trusted, Professional Home Repairs for Belleville Homeowners
            </p>
            <p className="text-[#e5e7eb] text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Hero Handyman Pro is your reliable local handyman serving Belleville, IL and the surrounding St. Clair County communities. From small repairs to larger home improvement projects, we deliver quality workmanship, clear communication, and dependable service every time.
            </p>
          </div>

          {/* Key Points */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
              <Clock className="h-10 w-10 text-[#ff5b00] mx-auto mb-3" />
              <p className="text-white font-medium">Same-day or next-day service when available</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
              <Shield className="h-10 w-10 text-[#ff5b00] mx-auto mb-3" />
              <p className="text-white font-medium">Licensed, insured handyman professionals</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
              <MessageSquare className="h-10 w-10 text-[#ff5b00] mx-auto mb-3" />
              <p className="text-white font-medium">Honest pricing and clear communication</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:800-741-6056">
              <Button className="bg-[#ff5b00] hover:bg-[#ff5b00]/90 text-white rounded-full px-10 py-7 text-lg font-semibold flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call 800-741-6056
              </Button>
            </a>
            <Link href="/#contact">
              <Button variant="outline" className="rounded-full px-10 py-7 text-lg font-semibold border-2 border-white text-white hover:bg-white/10">
                Get a Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b1220]">
              Why Belleville Homeowners Choose Hero Handyman Pro
            </h2>
            <p className="text-[#4b5563] text-lg max-w-3xl mx-auto">
              Belleville families choose us because we treat every home like our own — showing up on time, communicating clearly, and delivering work we're proud of.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              { icon: Home, text: "Local professionals serving Belleville and St. Clair County families" },
              { icon: Wrench, text: "Experienced in decks, carpentry, drywall, doors, and home repairs" },
              { icon: Shield, text: "Fully licensed and insured for your protection" },
              { icon: MessageSquare, text: "Clear communication with text and email updates" },
              { icon: Clock, text: "Transparent pricing and flexible scheduling" },
              { icon: Star, text: "5-star rated service from real Belleville homeowners" },
            ].map((item, i) => (
              <div key={i} className="bg-[#f9fafb] rounded-xl p-6 border border-[#e5e7eb]">
                <div className="flex items-start gap-4">
                  <div className="bg-[#ff5b00]/10 rounded-full p-3 mt-1">
                    <item.icon className="h-6 w-6 text-[#ff5b00]" />
                  </div>
                  <p className="text-[#374151] flex-1">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-[#ff5b00] to-[#f97316] rounded-2xl p-8 text-white">
            <p className="text-lg leading-relaxed">
              We proudly serve neighborhoods throughout Belleville — from historic downtown and areas near Scott Air Force Base to residential communities in Shiloh, Swansea, and O'Fallon IL. If you're in or near Belleville, we're already working in your area.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b1220]">
              Popular Handyman Services in Belleville, IL
            </h2>
            <p className="text-[#4b5563] text-lg">
              Here are the most common projects Belleville homeowners trust us with:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Deck & Exterior */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e5e7eb]">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#ff5b00]/10 rounded-full p-3">
                  <Hammer className="h-7 w-7 text-[#ff5b00]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0b1220]">Deck & Exterior Repairs</h3>
              </div>
              <ul className="space-y-3">
                {["Deck board repair and resurfacing", "Loose railing and stair repair", "Porch and stair repair", "Rot repair and wood replacement", "Fence repair and gate installation", "Exterior trim and fascia repair"].map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#374151]">
                    <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Interior Repairs */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e5e7eb]">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#ff5b00]/10 rounded-full p-3">
                  <Home className="h-7 w-7 text-[#ff5b00]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0b1220]">Interior Repairs</h3>
              </div>
              <ul className="space-y-3">
                {["Drywall hole patching and repair", "Ceiling crack and water damage repair", "Interior door installation and adjustment", "Trim and baseboard repair", "Caulking and weatherstripping", "Light fixture and ceiling fan installation"].map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#374151]">
                    <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Doors & Windows */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e5e7eb]">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#ff5b00]/10 rounded-full p-3">
                  <DoorOpen className="h-7 w-7 text-[#ff5b00]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0b1220]">Doors & Windows</h3>
              </div>
              <ul className="space-y-3">
                {["Entry door replacement and installation", "Storm door installation", "Interior door installation", "Door frame repair", "Sliding door repair", "Window caulking and weatherstripping"].map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#374151]">
                    <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* General Handyman */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e5e7eb]">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#ff5b00]/10 rounded-full p-3">
                  <Wrench className="h-7 w-7 text-[#ff5b00]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0b1220]">General Handyman</h3>
              </div>
              <ul className="space-y-3">
                {["Honey-do list projects", "TV and shelf mounting", "Furniture assembly", "Grab bar and safety rail installation", "Gutter cleaning and minor repairs", "Pressure washing prep work"].map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#374151]">
                    <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b1220]">
              Belleville Neighborhoods We Serve
            </h2>
            <p className="text-[#4b5563] text-lg max-w-3xl mx-auto">
              From historic downtown to newer developments near Scott Air Force Base, we're proud to serve homeowners throughout Belleville and St. Clair County.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Historic Downtown Belleville",
              "Near Scott Air Force Base",
              "Shiloh, IL",
              "Swansea, IL",
              "O'Fallon, IL",
              "Mascoutah, IL",
              "Lebanon, IL",
              "Freeburg, IL",
              "Millstadt, IL",
              "Smithton, IL",
              "New Athens, IL",
              "Fairview Heights, IL",
            ].map((neighborhood, i) => (
              <div key={i} className="bg-[#f9fafb] rounded-lg p-4 border border-[#e5e7eb] flex items-center gap-3">
                <Home className="h-5 w-5 text-[#ff5b00] flex-shrink-0" />
                <span className="text-[#374151] text-sm">{neighborhood}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b1220]">
              What Belleville Homeowners Say
            </h2>
            <div className="flex justify-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-6 w-6 fill-[#ff5b00] text-[#ff5b00]" />
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "Hero Handyman fixed our deck and replaced a rotted fascia board in the same visit. Professional, on time, and reasonably priced.", author: "Belleville Homeowner" },
              { text: "They patched drywall and installed a new storm door in one afternoon. Great communication throughout the whole job.", author: "Belleville Homeowner" },
              { text: "Finally a handyman who shows up when they say they will. Fair pricing and quality work. Will use again for sure.", author: "Belleville Homeowner" },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-[#e5e7eb]">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-[#ff5b00] text-[#ff5b00]" />
                  ))}
                </div>
                <p className="text-[#374151] mb-6 italic">"{testimonial.text}"</p>
                <p className="text-[#6b7280] font-medium">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[760px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b1220] mb-3">Frequently Asked Questions — Handyman Services in Belleville</h2>
            <p className="text-[#4b5563]">Common questions from Belleville homeowners about our services, pricing, and availability.</p>
          </div>
          <div className="space-y-6">
            {faqs.map((item, i) => (
              <div key={i} className="border border-[#e5e7eb] rounded-xl p-6 bg-[#f9fafb]">
                <h3 className="font-bold text-[#0b1220] text-lg mb-3">{item.q}</h3>
                <p className="text-[#4b5563] leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Cities */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0b1220] mb-2">Also Serving Nearby Communities</h2>
            <p className="text-[#4b5563]">We cover the full Metro East Illinois area and cross the river into St. Louis, MO.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Collinsville, IL", href: "/handyman-collinsville-il" },
              { label: "Edwardsville, IL", href: "/service-areas/edwardsville-handyman-services/" },
              { label: "O'Fallon, IL", href: "/service-areas/ofallon-handyman-services/" },
              { label: "St. Louis, MO", href: "/handyman-st-louis-mo" },
              { label: "Chesterfield, MO", href: "/handyman-chesterfield-mo" },
              { label: "All Service Areas", href: "/service-areas/" },
            ].map((city) => (
              <Link key={city.label} href={city.href}>
                <Button variant="outline" className="rounded-full border-[#e5e7eb] text-[#374151] hover:border-[#ff5b00] hover:text-[#ff5b00] text-sm">
                  {city.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-[#ff5b00] text-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Your Belleville Home Fixed Right?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Call today for a free estimate. Same-day and next-day appointments available for most repairs in Belleville and St. Clair County.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:800-741-6056">
              <Button size="lg" className="w-full sm:w-auto bg-white text-[#ff5b00] hover:bg-white/90 font-bold text-lg h-14 px-8 rounded-full">
                <Phone className="h-5 w-5 mr-2" />
                Call 800-741-6056
              </Button>
            </a>
            <Link href="/#contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-[#ff5b00] font-bold text-lg h-14 px-8 rounded-full">
                Request a Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQPage Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(item => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a,
          }
        }))
      })}} />

      {/* LocalBusiness Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Hero Handyman Pro",
        "description": "Professional handyman services in Belleville IL including drywall repair, deck repair, door installation, and carpentry.",
        "url": "https://herohandymanpro.com/handyman-belleville-il",
        "telephone": "800-741-6056",
        "areaServed": [
          { "@type": "City", "name": "Belleville", "sameAs": "https://en.wikipedia.org/wiki/Belleville,_Illinois" },
          { "@type": "City", "name": "Shiloh", "addressRegion": "IL" },
          { "@type": "City", "name": "Swansea", "addressRegion": "IL" },
          { "@type": "City", "name": "O'Fallon", "addressRegion": "IL" },
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Belleville",
          "addressRegion": "IL",
          "addressCountry": "US"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "47"
        }
      })}} />
    </div>
  );
}
