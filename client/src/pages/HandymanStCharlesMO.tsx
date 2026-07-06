import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star, Shield, Clock, Wrench, Home, DoorOpen, Hammer } from "lucide-react";
import SEO from "@/components/SEO";
import { FAQAccordion } from "@/components/FAQAccordion";
import PageBreadcrumb from "@/components/PageBreadcrumb";

import { useSeoRoute } from '@/hooks/useSeoRoute';
const faqs = [
  {
    question: "How much does a handyman cost in St. Charles, MO?",
    answer: "Most handyman jobs in St. Charles run between $150 and $600 depending on scope. Simple repairs like drywall patching or door adjustments typically fall in the $150–$300 range. Larger projects like deck board replacement or full door installation are usually $350–$700+. We provide free estimates so you know the cost before any work begins.",
  },
  {
    question: "Do you offer same-day handyman service in St. Charles?",
    answer: "Yes — we offer same-day and next-day availability for most repairs in St. Charles. For urgent repairs, call us directly at 800-741-6056 and we'll do our best to get to you quickly.",
  },
  {
    question: "Are you licensed and insured to work in Missouri?",
    answer: "Yes. Hero Handyman Pro is fully insured for residential work in Missouri and Illinois. We carry general liability insurance on every job, so you're protected if anything unexpected happens.",
  },
  {
    question: "What areas of St. Charles do you serve?",
    answer: "We serve all of St. Charles including the historic district near First Capitol Drive, Mid Rivers Mall corridor, Dardenne Prairie, O'Fallon MO, and surrounding St. Charles County communities.",
  },
  {
    question: "Can you handle multiple repairs in one visit in St. Charles?",
    answer: "Absolutely — our Honey-Do List Knockout package is designed exactly for that. We batch multiple small repairs into one efficient visit so you're not paying multiple trip charges for each item.",
  },
  {
    question: "Do you work on historic homes in St. Charles?",
    answer: "Yes. We have experience with older construction methods, plaster walls, and period-appropriate materials common in St. Charles's historic district. We match existing finishes carefully to preserve the character of your home.",
  },
];

export default function HandymanStCharlesMO() {
  const seo = useSeoRoute();
  return (
    <div className="flex flex-col">
      <PageBreadcrumb crumbs={[
    { label: "Home", href: "/" },
    { label: "Service Areas", href: "/service-areas/" },
    { label: "St. Charles, MO" }
  ]} />
      <SEO {...seo} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white py-16 md:py-24 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-8">
            <p className="text-[#ff5b00] text-sm font-semibold uppercase tracking-widest mb-3">Serving St. Charles, MO</p>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-4">
              Reliable Handyman Services in St Charles MO
            </h1>
            <p className="text-[#e5e7eb] text-lg md:text-xl max-w-3xl mx-auto mb-8">
              From the historic homes near First Capitol Drive to the newer subdivisions off Mid Rivers Mall Drive, Hero Handyman Pro serves St. Charles homeowners with skilled, dependable repair work. We handle the jobs that matter — done right, on schedule, and at a fair price.
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
              { icon: Check, text: "Upfront Pricing" },
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
              Handyman Services We Provide in St. Charles
            </h2>
            <p className="text-[#4b5563] text-lg max-w-3xl mx-auto">
              St. Charles is one of Missouri's fastest-growing communities, with a mix of historic properties downtown and newer construction in outlying neighborhoods. Both require different repair approaches — and we're experienced with both.
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
                St. Charles's newer subdivisions often see drywall cracks develop within the first few years as new construction settles. Older homes near the historic district may have lath-and-plaster walls that require specialized patching techniques. We handle both with precision, leaving surfaces paint-ready.
              </p>
              <ul className="space-y-2">
                {["New construction settlement crack repair", "Plaster and drywall patching", "Ceiling water damage and stain repair", "Smooth and textured finish matching"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[#374151] text-sm">
                    <Check className="h-4 w-4 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
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
                St. Charles sits along the Missouri River, and the humidity and freeze-thaw cycles here are hard on outdoor wood structures. Decks built in the early 2000s are reaching the point where boards, railings, and connections need attention. We restore decks to safe, solid condition without unnecessary full replacements.
              </p>
              <ul className="space-y-2">
                {["Board replacement and structural assessment", "Railing and baluster repair", "Stair tread and riser replacement", "Ledger board and joist inspection"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[#374151] text-sm">
                    <Check className="h-4 w-4 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
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
                Whether you're upgrading an entry door on a historic St. Charles home or replacing a hollow-core interior door in a newer subdivision, proper installation is critical. We ensure doors are plumb, swing freely, seal tightly, and operate smoothly through Missouri's full range of seasons.
              </p>
              <ul className="space-y-2">
                {["Entry and front door installation", "Interior door replacement and hanging", "Storm door and screen door installation", "Door frame squaring and weatherstripping"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[#374151] text-sm">
                    <Check className="h-4 w-4 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* General Home Repairs */}
            <div className="bg-[#f9fafb] rounded-2xl p-8 border border-[#e5e7eb]">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#ff5b00]/10 rounded-full p-3">
                  <Home className="h-6 w-6 text-[#ff5b00]" />
                </div>
                <h3 className="text-xl font-bold text-[#0b1220]">General Home Repairs</h3>
              </div>
              <p className="text-[#4b5563] mb-4">
                St. Charles homeowners often have a running list of small repairs that accumulate over time — a loose handrail, a leaky faucet, a sticky cabinet door, a cracked tile. We tackle these efficiently in a single visit, clearing your to-do list so you can enjoy your home.
              </p>
              <ul className="space-y-2">
                {["Handrail tightening and repair", "Caulking and weatherproofing", "Minor fixture and hardware replacement", "Pre-listing punch list repairs"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[#374151] text-sm">
                    <Check className="h-4 w-4 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
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
                Serving St. Charles with Pride
              </h2>
              <p className="text-[#4b5563] text-lg mb-6">
                St. Charles is a community that values its heritage and takes pride in its homes. We bring that same pride to every repair job — whether it's a quick patch or a multi-day project. Our work is built to last, and we stand behind it.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Historic Home Experience", desc: "Comfortable working with older construction methods, plaster walls, and period-appropriate materials." },
                  { title: "New Construction Knowledge", desc: "Familiar with modern building codes and materials used in St. Charles's newer subdivisions." },
                  { title: "Fast Response Times", desc: "We serve St. Charles regularly and can typically schedule within 1-2 business days." },
                  { title: "Satisfaction Guaranteed", desc: "We don't consider a job done until you're happy with the results." },
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
              <h3 className="text-2xl font-bold mb-4">Get Your Free Quote Today</h3>
              <p className="text-white/90 mb-6 text-lg">
                Call Hero Handyman Pro for reliable handyman services in St. Charles MO. We serve the entire St. Charles County area and respond quickly to all inquiries.
              </p>
              <a href="tel:800-741-6056" className="block mb-4">
                <Button className="w-full bg-white text-[#ff5b00] hover:bg-white/90 rounded-full py-6 text-lg font-bold flex items-center justify-center gap-2">
                  <Phone className="h-5 w-5" />
                  800-741-6056
                </Button>
              </a>
              <Link href="/#contact">
                <Button variant="outline" className="w-full border-2 border-white text-white hover:bg-white/10 rounded-full py-6 text-lg font-semibold">
                  Request a Free Quote Online
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-[#f9fafb] border-t border-[#e5e7eb]">
        <div className="max-w-[780px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0b1220] mb-3">Frequently Asked Questions</h2>
            <p className="text-[#4b5563]">Common questions from St. Charles homeowners</p>
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
            <Link href="/gbp/edwardsville" className="text-[#ff5b00] hover:underline font-medium">Edwardsville handyman services</Link>{" "}
            page for our Metro East coverage.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Drywall Repair", href: "/handyman-services/drywall-repair/" },
              { label: "Deck Repair", href: "/handyman-services/deck-repair/" },
              { label: "Door Installation", href: "/handyman-services/door-repair/" },
              { label: "Exterior Carpentry", href: "/handyman-services/exterior-carpentry/" },
              { label: "All Services", href: "/services/" },
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
