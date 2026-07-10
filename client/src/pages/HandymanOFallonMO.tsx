import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star, Shield, Clock, Wrench, Home, DoorOpen, Hammer } from "lucide-react";
import SEO from "@/components/SEO";
import { FAQAccordion } from "@/components/FAQAccordion";

import { useSeoRoute } from '@/hooks/useSeoRoute';
const faqs = [
  {
    question: "How much does a handyman cost in O'Fallon, MO?",
    answer: "Most handyman jobs in O'Fallon MO run between $150 and $650 depending on scope. Simple repairs like drywall patching or door adjustments typically fall in the $150–$300 range. Larger projects like deck board replacement or full door installation are usually $350–$750+. We provide free estimates so you know the cost before any work begins.",
  },
  {
    question: "Do you offer same-day handyman service in O'Fallon, MO?",
    answer: "Yes — we offer same-day and next-day availability for most repairs in O'Fallon MO. For urgent repairs, call us directly at 800-741-6056 and we'll do our best to get to you quickly.",
  },
  {
    question: "Are you licensed and insured to work in Missouri?",
    answer: "Yes. Hero Handyman Pro is fully insured for residential work in Missouri and Illinois. We carry general liability insurance on every job, so you're protected if anything unexpected happens.",
  },
  {
    question: "What areas of O'Fallon, MO do you serve?",
    answer: "We serve all of O'Fallon MO including Winghaven, Hawk Ridge, Highway K neighborhoods, and surrounding St. Charles County communities including St. Peters, Wentzville, and Lake St. Louis.",
  },
  {
    question: "Can you handle multiple repairs in one visit in O'Fallon, MO?",
    answer: "Absolutely — our Honey-Do List Knockout package is designed exactly for that. We batch multiple small repairs into one efficient visit so you're not paying multiple trip charges for each item on your list.",
  },
  {
    question: "Do you repair decks in O'Fallon, MO?",
    answer: "Yes. Deck repair is one of our most common requests in O'Fallon MO. St. Charles County's clay-heavy soils and freeze-thaw cycles accelerate post movement and board warping. We inspect for soft spots, replace compromised boards and posts, and reinforce railings to bring your deck back to safe condition.",
  },
];

export default function HandymanOFallonMO() {
  const seo = useSeoRoute();
  return (
    <div className="flex flex-col">
      <SEO {...seo} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white py-16 md:py-24 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-8">
            <p className="text-[#ff5b00] text-sm font-semibold uppercase tracking-widest mb-3">Serving O'Fallon, MO</p>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-4">
              Professional Handyman Services in O'Fallon MO
            </h1>
            <p className="text-[#e5e7eb] text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Hero Handyman Pro brings reliable, skilled home repair services to O'Fallon MO homeowners. From drywall patches and door replacements to deck repairs and finish carpentry, we handle the projects that matter most — done right the first time.
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

      {/* Services Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b1220]">
              Handyman Services We Provide in O'Fallon MO
            </h2>
            <p className="text-[#4b5563] text-lg max-w-3xl mx-auto">
              O'Fallon's growing neighborhoods — from Winghaven and Hawk Ridge to the established subdivisions off Bryan Road — feature homes that need skilled, attentive care. Here's what we do best:
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
                O'Fallon MO homes — many built in the 2000s and 2010s — develop cracks around door frames, nail pops, and holes from doorknobs or wall anchors. We patch holes of all sizes, repair water-stained ceilings, and match existing texture so repairs blend in seamlessly.
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
                <Link href="/drywall-repair-ofallon-mo">
                  <Button variant="outline" className="text-[#ff5b00] border-[#ff5b00] hover:bg-[#ff5b00] hover:text-white text-sm rounded-full px-5 py-2">
                    Drywall Repair in O'Fallon MO →
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
                Missouri's temperature swings — from humid summers to cold winters — cause door frames to shift and doors to stick or gap. We install new entry doors, replace interior doors that have warped, and add storm doors for energy efficiency on O'Fallon homes.
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
                <Link href="/door-installation-ofallon-mo">
                  <Button variant="outline" className="text-[#ff5b00] border-[#ff5b00] hover:bg-[#ff5b00] hover:text-white text-sm rounded-full px-5 py-2">
                    Door Installation in O'Fallon MO →
                  </Button>
                </Link>
                <Link href="/door-repair-ofallon-mo">
                  <Button variant="outline" className="text-[#ff5b00] border-[#ff5b00] hover:bg-[#ff5b00] hover:text-white text-sm rounded-full px-5 py-2">
                    Door Repair in O'Fallon MO →
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
                Many O'Fallon MO decks built in the early 2000s are now showing their age — soft boards, wobbly railings, and rotted ledger boards. We assess structural integrity first, replace only what needs replacing, and restore your deck to safe, solid condition.
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
                <Link href="/deck-repair-ofallon-mo">
                  <Button variant="outline" className="text-[#ff5b00] border-[#ff5b00] hover:bg-[#ff5b00] hover:text-white text-sm rounded-full px-5 py-2">
                    Deck Repair in O'Fallon MO →
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
                From trim and baseboard repairs in O'Fallon's newer homes to cabinet adjustments in kitchens that have settled over the years, our finish carpentry work is precise and clean. We also handle punch-list repairs for homeowners preparing to sell.
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
                <Link href="/carpentry-services-ofallon-mo">
                  <Button variant="outline" className="text-[#ff5b00] border-[#ff5b00] hover:bg-[#ff5b00] hover:text-white text-sm rounded-full px-5 py-2">
                    Carpentry Services in O'Fallon MO →
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
                Why O'Fallon MO Homeowners Choose Hero Handyman Pro
              </h2>
              <p className="text-[#4b5563] text-lg mb-6">
                O'Fallon is one of the fastest-growing cities in Missouri, and homeowners here expect professional, reliable service. We deliver it — with prompt communication, clean job sites, and repairs that hold up long-term.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Respectful of Your Home", desc: "We protect floors, clean up completely, and treat your home as if it were our own." },
                  { title: "Accurate Estimates", desc: "No surprise charges. You know the cost before we start." },
                  { title: "Experienced Craftsmen", desc: "35+ years of hands-on experience across all residential repair types." },
                  { title: "Serving St. Charles County", desc: "We regularly work throughout O'Fallon MO, St. Peters, Wentzville, and surrounding communities." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="bg-[#ff5b00]/10 rounded-full p-2 h-fit mt-1">
                      <Check className="h-5 w-5 text-[#ff5b00]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#0b1220]">{item.title}</p>
                      <p className="text-[#4b5563] text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#ff5b00] to-[#f97316] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-white/90 mb-6 text-lg">
                Call Hero Handyman Pro today for handyman services in O'Fallon MO. We respond quickly and can often schedule same-day or next-day visits.
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
          <h2 className="text-3xl font-bold text-[#0b1220] mb-3">Specialized Handyman Services in O'Fallon, MO</h2>
          <p className="text-[#4b5563] mb-8 max-w-2xl">Beyond general handyman work, we offer dedicated service pages for O'Fallon's most common repair needs — each with local expertise and same-day availability.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Drywall Repair", desc: "Hole patching, water damage, ceiling repair, and texture matching for O'Fallon MO homes.", href: "/drywall-repair-ofallon-mo" },
              { title: "Deck Repair", desc: "Board replacement, railing repair, structural repairs, and deck maintenance in O'Fallon MO.", href: "/deck-repair-ofallon-mo" },
              { title: "Door Repair", desc: "Sticking doors, broken hardware, frame repair, and weatherstripping in O'Fallon MO.", href: "/door-repair-ofallon-mo" },
              { title: "Door Installation", desc: "New interior and exterior door installation, storm doors, and entry door upgrades in O'Fallon MO.", href: "/door-installation-ofallon-mo" },
              { title: "Carpentry Services", desc: "Trim installation, wood rot repair, exterior carpentry, and finish work in O'Fallon MO.", href: "/carpentry-services-ofallon-mo" },
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

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-[#f9fafb] border-t border-[#e5e7eb]">
        <div className="max-w-[780px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0b1220] mb-3">Frequently Asked Questions</h2>
            <p className="text-[#4b5563]">Common questions from O'Fallon MO homeowners</p>
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
          },
        })),
      })}} />

      {/* Internal Links Section */}
      <section className="py-12 px-6 bg-white border-t border-[#e5e7eb]">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-[#0b1220]">Explore More Hero Handyman Pro Services</h2>
          <p className="text-[#4b5563] mb-6">
            We serve communities across the Greater St. Louis area and Metro East Illinois. Visit our{" "}
            <Link href="/" className="text-[#ff5b00] hover:underline font-medium">homepage</Link>{" "}
            to learn more, or explore our{" "}
            <Link href="/handyman-chesterfield-mo" className="text-[#ff5b00] hover:underline font-medium">Chesterfield MO handyman services</Link>{" "}
            and{" "}
            <Link href="/handyman-st-charles-mo" className="text-[#ff5b00] hover:underline font-medium">St. Charles MO handyman services</Link>{" "}
            pages for nearby coverage.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Drywall Repair", href: "/drywall-repair-ofallon-mo" },
              { label: "Deck Repair", href: "/deck-repair-ofallon-mo" },
              { label: "Door Repair", href: "/door-repair-ofallon-mo" },
              { label: "Door Installation", href: "/door-installation-ofallon-mo" },
              { label: "Carpentry Services", href: "/carpentry-services-ofallon-mo" },
              { label: "All Services", href: "/handyman-services/" },
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
    </div>
  );
}
