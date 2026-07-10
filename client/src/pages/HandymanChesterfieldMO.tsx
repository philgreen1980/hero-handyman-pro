import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star, Shield, Clock, Wrench, Home, DoorOpen, Hammer } from "lucide-react";
import SEO from "@/components/SEO";
import { FAQAccordion } from "@/components/FAQAccordion";
import PageBreadcrumb from "@/components/PageBreadcrumb";

import { useSeoRoute } from '@/hooks/useSeoRoute';
export default function HandymanChesterfieldMO() {
  const seo = useSeoRoute();
  const faqs = [
    {
      question: "How much does a handyman cost in Chesterfield, MO?",
      answer: "Most handyman jobs in Chesterfield run between $150 and $600 depending on scope. Simple repairs like drywall patching or door adjustments typically fall in the $150–$300 range. Larger projects like deck board replacement or full door installation are usually $350–$700+. We provide free estimates so you know the cost before any work begins.",
    },
    {
      question: "Do you offer same-day handyman service in Chesterfield?",
      answer: "Yes — we offer same-day and next-day availability for most repairs in Chesterfield. For urgent repairs, call us directly at 800-741-6056 and we'll do our best to get to you quickly.",
    },
    {
      question: "Are you licensed and insured to work in Missouri?",
      answer: "Yes. Hero Handyman Pro is fully insured for residential work in Missouri and Illinois. We carry general liability insurance on every job, so you're protected if anything unexpected happens.",
    },
    {
      question: "What areas of Chesterfield do you serve?",
      answer: "We serve all of Chesterfield including Wild Horse Creek Road corridor, Chesterfield Valley, Baxter Road area, Long Road neighborhoods, and surrounding West St. Louis County communities including Ballwin, Ellisville, and Wildwood.",
    },
    {
      question: "Can you handle multiple repairs in one visit in Chesterfield?",
      answer: "Absolutely — our Honey-Do List Knockout package is designed exactly for that. We batch multiple small repairs into one efficient visit so you're not paying multiple trip charges for each item.",
    },
    {
      question: "Do you repair decks in Chesterfield?",
      answer: "Yes. Deck repair is one of our most common requests in Chesterfield. We assess the full structure, replace only what needs replacing, and restore your deck to safe condition without unnecessary upsells.",
    },
  ];

  return (
    <div className="flex flex-col">
      <PageBreadcrumb crumbs={[
    { label: "Home", href: "/" },
    { label: "Service Areas", href: "/service-areas/" },
    { label: "Chesterfield, MO" }
  ]} />
      <SEO {...seo} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white py-16 md:py-24 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-8">
            <p className="text-[#ff5b00] text-sm font-semibold uppercase tracking-widest mb-3">Serving Chesterfield, MO</p>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-4">
              Handyman Services in Chesterfield, MO
            </h1>
            <p className="text-[#e5e7eb] text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Hero Handyman Pro provides reliable handyman services for homeowners in Chesterfield, MO. We specialize in small jobs, punch-list repairs, and fast home maintenance projects — done right the first time, at a fair price.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:800-741-6056">
                <Button className="bg-[#ff5b00] hover:bg-[#e54e00] text-white rounded-full px-10 py-7 text-lg font-semibold flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Now: 800-741-6056
                </Button>
              </a>
              <Link href="/#contact">
                <Button variant="outline" className="rounded-full px-10 py-7 text-lg font-semibold border-2 border-white text-white hover:bg-white/10">
                  Get a Free Quote
                </Button>
              </Link>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {[
              { icon: Star, text: "4.9★ Rated" },
              { icon: Shield, text: "Licensed & Insured" },
              { icon: Clock, text: "Same/Next-Day Available" },
              { icon: Check, text: "Transparent Pricing" },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/10 rounded-full px-5 py-2 text-sm font-medium">
                <badge.icon className="h-4 w-4 text-[#ff5b00]" />
                {badge.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Small Jobs Welcome Section */}
      <section className="py-14 px-6 bg-teal-700 text-white">
        <div className="max-w-[1120px] mx-auto grid md:grid-cols-[3fr_2fr] gap-10 items-center">
          <div>
            <span className="text-teal-200 text-xs font-semibold uppercase tracking-widest">Our Specialty</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Small Jobs Welcome</h2>
            <p className="text-teal-100 text-lg leading-relaxed mb-4">
              We focus on the types of home repairs many contractors don't take — smaller projects that still need to be done right. Whether it's a single drywall patch, a sticking door, a loose railing, or a short punch list before a home sale, we show up, do the work, and leave your home better than we found it.
            </p>
            <p className="text-teal-100 leading-relaxed">
              We serve homeowners throughout Chesterfield and nearby areas including Ballwin, Wildwood, Town and Country, and Des Peres. No job is too small — and every job gets the same care and attention as a larger project.
            </p>
          </div>
          <div className="bg-white/10 rounded-2xl p-8">
            <h3 className="font-bold text-xl mb-4">Common Small Jobs We Handle</h3>
            <ul className="space-y-2">
              {["Single drywall patch or hole repair", "Door that sticks or won't latch", "Loose deck board or wobbly railing", "Trim or baseboard repair", "Fixture installation (fans, lights)", "Pre-sale punch list repairs"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-teal-100 text-sm">
                  <Check className="w-4 h-4 text-teal-300 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b1220]">
              Handyman Services We Provide in Chesterfield
            </h2>
            <p className="text-[#4b5563] text-lg max-w-3xl mx-auto">
              Chesterfield's established neighborhoods — from Kehrs Mill Estates to Long Meadow — feature mature homes that need skilled, attentive care. Here's what we do best:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Drywall Repair */}
            <div className="bg-[#f9fafb] rounded-2xl p-8 border border-[#e5e7eb]">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#ff5b00]/10 rounded-full p-3">
                  <Wrench className="h-6 w-6 text-[#ff5b00]" />
                </div>
                <h3 className="text-xl font-bold text-[#0b1220]">Drywall Repair</h3>
              </div>
              <p className="text-[#4b5563] mb-4">
                Chesterfield homes built in the 1980s and 90s often develop hairline cracks along door frames and ceiling joints as the structure settles. We patch holes from doorknobs, repair water-stained ceilings from HVAC condensation, and match existing texture so repairs are invisible.
              </p>
              <ul className="space-y-2">
                {["Hole patching (small to large)", "Water-damaged drywall replacement", "Ceiling crack repair and retexture", "Smooth finish for paint-ready results"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[#374151] text-sm">
                    <Check className="h-4 w-4 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <Link href="/drywall-repair-chesterfield-mo">
                  <Button variant="outline" className="text-[#ff5b00] border-[#ff5b00] hover:bg-[#ff5b00] hover:text-white text-sm rounded-full px-5 py-2">
                    Drywall Repair in Chesterfield →
                  </Button>
                </Link>
              </div>
            </div>

            {/* Door Installation */}
            <div className="bg-[#f9fafb] rounded-2xl p-8 border border-[#e5e7eb]">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#ff5b00]/10 rounded-full p-3">
                  <DoorOpen className="h-6 w-6 text-[#ff5b00]" />
                </div>
                <h3 className="text-xl font-bold text-[#0b1220]">Door Installation</h3>
              </div>
              <p className="text-[#4b5563] mb-4">
                Chesterfield's temperature swings — from humid Missouri summers to cold winters — cause door frames to shift and doors to stick or gap. We install new entry doors, replace interior doors that have warped, and add storm doors for energy efficiency on older homes.
              </p>
              <ul className="space-y-2">
                {["Entry and exterior door replacement", "Interior door installation and hanging", "Storm door and screen door installation", "Door frame repair and threshold replacement"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[#374151] text-sm">
                    <Check className="h-4 w-4 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/door-installation-chesterfield-mo">
                  <Button variant="outline" className="text-[#ff5b00] border-[#ff5b00] hover:bg-[#ff5b00] hover:text-white text-sm rounded-full px-5 py-2">
                    Door Installation in Chesterfield →
                  </Button>
                </Link>
                <Link href="/door-repair-chesterfield-mo">
                  <Button variant="outline" className="text-[#ff5b00] border-[#ff5b00] hover:bg-[#ff5b00] hover:text-white text-sm rounded-full px-5 py-2">
                    Door Repair in Chesterfield →
                  </Button>
                </Link>
              </div>
            </div>

            {/* Deck Repair */}
            <div className="bg-[#f9fafb] rounded-2xl p-8 border border-[#e5e7eb]">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#ff5b00]/10 rounded-full p-3">
                  <Hammer className="h-6 w-6 text-[#ff5b00]" />
                </div>
                <h3 className="text-xl font-bold text-[#0b1220]">Deck Repair</h3>
              </div>
              <p className="text-[#4b5563] mb-4">
                Many Chesterfield decks were built in the late 1990s and are now showing their age — soft boards, wobbly railings, and rotted ledger boards. We assess structural integrity first, replace only what needs replacing, and restore your deck to safe, solid condition.
              </p>
              <ul className="space-y-2">
                {["Deck board replacement and resurfacing", "Railing and post reinforcement", "Structural ledger board repair", "Stair and step replacement"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[#374151] text-sm">
                    <Check className="h-4 w-4 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <Link href="/deck-repair-chesterfield-mo">
                  <Button variant="outline" className="text-[#ff5b00] border-[#ff5b00] hover:bg-[#ff5b00] hover:text-white text-sm rounded-full px-5 py-2">
                    Deck Repair in Chesterfield →
                  </Button>
                </Link>
              </div>
            </div>

            {/* Carpentry */}
            <div className="bg-[#f9fafb] rounded-2xl p-8 border border-[#e5e7eb]">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#ff5b00]/10 rounded-full p-3">
                  <Home className="h-6 w-6 text-[#ff5b00]" />
                </div>
                <h3 className="text-xl font-bold text-[#0b1220]">Carpentry & General Repairs</h3>
              </div>
              <p className="text-[#4b5563] mb-4">
                From crown molding repairs in Chesterfield's upscale homes to cabinet adjustments in kitchens that have settled over the years, our finish carpentry work is precise and clean. We also handle punch-list repairs for homeowners preparing to sell.
              </p>
              <ul className="space-y-2">
                {["Trim, baseboard, and crown molding repair", "Cabinet door and drawer adjustments", "Custom carpentry and built-in repairs", "Pre-sale punch list repairs"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[#374151] text-sm">
                    <Check className="h-4 w-4 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <Link href="/carpentry-services-chesterfield-mo">
                  <Button variant="outline" className="text-[#ff5b00] border-[#ff5b00] hover:bg-[#ff5b00] hover:text-white text-sm rounded-full px-5 py-2">
                    Carpentry Services in Chesterfield →
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0b1220]">
                Why Chesterfield Homeowners Choose Hero Handyman Pro
              </h2>
              <p className="text-[#4b5563] text-lg mb-6">
                Chesterfield is one of the most desirable communities in St. Louis County, and homeowners here expect a higher standard of workmanship. We deliver it — with professional communication, clean job sites, and repairs that hold up long-term.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Respectful of Your Home", desc: "We protect floors, clean up completely, and treat your home as if it were our own." },
                  { title: "Accurate Estimates", desc: "No surprise charges. You know the cost before we start." },
                  { title: "Experienced Craftsmen", desc: "35+ years of hands-on experience across all residential repair types." },
                  { title: "Serving West St. Louis County", desc: "We regularly work throughout Chesterfield, Ballwin, Wildwood, and surrounding communities." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="bg-[#ff5b00]/10 rounded-full p-2 h-fit mt-1">
                      <Check className="h-5 w-5 text-[#ff5b00]" />
                    </div>
                    <div>
                      <p className="font-bold text-[#0b1220]">{item.title}</p>
                      <p className="text-[#4b5563] text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#ff5b00] to-[#f97316] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-white/90 mb-6 text-lg">
                Call Hero Handyman Pro today for handyman services in Chesterfield MO. We respond quickly and can often schedule same-day or next-day visits.
              </p>
              <a href="tel:800-741-6056" className="block mb-4">
                <Button className="w-full bg-white text-[#ff5b00] hover:bg-white/90 rounded-full py-6 text-lg font-bold flex items-center justify-center gap-2">
                  <Phone className="h-5 w-5" />
                  800-741-6056
                </Button>
              </a>
              <Link href="/#contact">
                <Button variant="outline" className="w-full border-2 border-white text-white hover:bg-white/10 rounded-full py-6 text-lg font-semibold">
                  Get a Free Quote Online
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services Section */}
      <section className="py-16 px-6 bg-white border-t border-gray-100">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold text-[#0b1220] mb-3">Specialized Handyman Services in Chesterfield, MO</h2>
          <p className="text-[#4b5563] mb-8 max-w-2xl">Beyond general handyman work, we offer dedicated service pages for Chesterfield's most common repair needs — each with local expertise and same-day availability.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Drywall Repair", desc: "Hole patching, water damage, ceiling repair, and texture matching for Chesterfield homes.", href: "/drywall-repair-chesterfield-mo" },
              { title: "Deck Repair", desc: "Board replacement, railing repair, structural repairs, and deck maintenance in Chesterfield.", href: "/deck-repair-chesterfield-mo" },
              { title: "Door Repair", desc: "Sticking doors, broken hardware, frame repair, and weatherstripping in Chesterfield.", href: "/door-repair-chesterfield-mo" },
              { title: "Door Installation", desc: "New interior and exterior door installation, storm doors, and entry door upgrades in Chesterfield.", href: "/door-installation-chesterfield-mo" },
              { title: "Carpentry Services", desc: "Trim installation, wood rot repair, exterior carpentry, and finish work in Chesterfield.", href: "/carpentry-services-chesterfield-mo" },
            ].map((service, i) => (
              <Link key={i} href={service.href}>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#ff5b00]/40 hover:shadow-md transition-all cursor-pointer h-full">
                  <h3 className="text-lg font-bold text-[#0b1220] mb-2">{service.title}</h3>
                  <p className="text-[#4b5563] text-sm mb-4">{service.desc}</p>
                  <span className="text-[#ff5b00] text-sm font-semibold">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="py-12 px-6 bg-white border-t border-[#e5e7eb]">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-[#0b1220]">Explore More Hero Handyman Pro Services</h2>
          <p className="text-[#4b5563] mb-6">
            We serve communities across the Greater St. Louis area and Metro East Illinois. Find a{" "}
            <Link href="/handyman-near-me/" className="text-[#ff5b00] hover:underline font-medium">handyman near you</Link>,{" "}
            browse our full{" "}
            <Link href="/handyman-services/" className="text-[#ff5b00] hover:underline font-medium">home repair services</Link>,{" "}
            or visit our{" "}
            <Link href="/gbp/des-peres-mo/" className="text-[#ff5b00] hover:underline font-medium">West St. Louis service page</Link>{" "}
            for more on our West County coverage.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Handyman Near Me", href: "/handyman-near-me/" },
              { label: "All Services", href: "/handyman-services/" },
              { label: "West St. Louis MO", href: "/gbp/des-peres-mo/" },
              { label: "Drywall Repair", href: "/drywall-repair-chesterfield-mo" },
              { label: "Deck Repair", href: "/deck-repair-chesterfield-mo" },
              { label: "Door Repair", href: "/door-repair-chesterfield-mo" },
              { label: "Carpentry Services", href: "/carpentry-services-chesterfield-mo" },
            ].map((link) => (
              <Link key={link.href} href={link.href}>
                <Button variant="outline" className="rounded-full border-[#ff5b00]/30 text-[#ff5b00] hover:bg-[#ff5b00]/5">
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-white border-t border-gray-100">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b1220]">
              Frequently Asked Questions
            </h2>
            <p className="text-[#4b5563] text-lg">
              Common questions from Chesterfield homeowners
            </p>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* FAQPage Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer,
          }
        }))
      })}} />
    </div>
  );
}
