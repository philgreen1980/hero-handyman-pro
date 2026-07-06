import SEO from "@/components/SEO";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import InlineQuoteForm from "@/components/InlineQuoteForm";
import { Link } from "wouter";
import { trackCTAClick } from "@/lib/analytics";
import { ChevronDown, ChevronUp, CheckCircle, Shield, Clock, Star } from "lucide-react";
import { useState } from "react";
import { useSeoRoute } from '@/hooks/useSeoRoute';
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Hero Handyman Pro — Drywall Repair O'Fallon IL",
  "description": "Professional drywall repair services in O'Fallon, Illinois. Holes, cracks, water damage, texture matching, and full drywall replacement.",
  "url": "https://herohandymanpro.com/service-areas/drywall-repair-ofallon-il/",
  "telephone": "+1-618-555-0100",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "O'Fallon",
    "addressRegion": "IL",
    "addressCountry": "US"
  },
  "areaServed": { "@type": "City", "name": "O'Fallon", "containedInPlace": { "@type": "State", "name": "Illinois" } },
  "priceRange": "$$",
  "openingHours": "Mo-Sa 07:00-18:00"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does drywall repair cost in O'Fallon IL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Drywall repair in O'Fallon typically ranges from $75–$150 for small holes, $150–$350 for medium patches, and $350–$700+ for water-damaged sections requiring texture matching and repainting. Hero Handyman Pro provides free written estimates before any work begins."
      }
    },
    {
      "@type": "Question",
      "name": "Can you match existing drywall texture in O'Fallon homes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Texture matching is one of our specialties. Whether your home has orange peel, knockdown, skip trowel, or smooth finish, we match the existing texture so repairs are invisible. Many O'Fallon homes built in the 1990s–2000s have orange peel or knockdown texture — we handle both routinely."
      }
    },
    {
      "@type": "Question",
      "name": "How long does drywall repair take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most drywall repairs in O'Fallon are completed in a single visit of 1–3 hours. Larger water-damaged sections may require two visits — one to patch and texture, one to prime and paint after drying. We'll give you a clear timeline upfront."
      }
    },
    {
      "@type": "Question",
      "name": "Do you repair drywall after plumbing leaks in O'Fallon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — we regularly repair drywall after plumbing leaks, pipe bursts, and water intrusion in O'Fallon homes. We remove damaged sheetrock, treat for moisture, apply new drywall, texture, prime, and paint to match. We always recommend confirming the leak source is fixed before patching."
      }
    },
    {
      "@type": "Question",
      "name": "Are you licensed and insured for drywall repair in Illinois?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Hero Handyman Pro is fully insured with general liability coverage. Phil Green, owner and master handyman, has 35+ years of experience and is a Coast Guard veteran. We provide proof of insurance on request."
      }
    }
  ]
};

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="w-full flex justify-between items-start py-4 text-left gap-4"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-[#0b1220] text-base">{question}</span>
        {open ? <ChevronUp className="h-5 w-5 text-[#ff5b00] shrink-0 mt-0.5" /> : <ChevronDown className="h-5 w-5 text-gray-400 shrink-0 mt-0.5" />}
      </button>
      {open && <p className="pb-4 text-gray-600 text-sm leading-relaxed">{answer}</p>}
    </div>
  );
}

const services = [
  "Small hole repair (doorknob holes, anchor holes, nail pops)",
  "Medium patch repair (4\"–12\" sections)",
  "Water damage repair and mold-safe replacement",
  "Ceiling crack and sag repair",
  "Texture matching (orange peel, knockdown, skip trowel, smooth)",
  "Full section replacement after plumbing or HVAC work",
  "Prime and paint to match existing walls",
  "Basement drywall repair and moisture-resistant installation",
];

const neighborhoods = [
  "Downtown O'Fallon", "Scott Air Force Base area", "Hartman Estates",
  "Pheasant Run", "Wingate Estates", "Summerfield", "Shiloh (nearby)",
  "Fairview Heights (nearby)", "Lebanon (nearby)",
];

export default function DrywallRepairOFallon() {
  const seo = useSeoRoute();
  return (
    <div className="min-h-screen bg-white">
      <SEO {...seo} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container py-3">
          <PageBreadcrumb
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Service Areas", href: "/service-areas/" },
              { label: "O'Fallon Handyman", href: "/service-areas/ofallon-handyman-services/" },
              { label: "Drywall Repair" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[#0b1220] text-white py-16">
        <div className="container max-w-4xl">
          <div className="flex items-center gap-2 text-[#ff5b00] text-sm font-semibold uppercase tracking-wider mb-3">
            <span>O'Fallon, IL</span>
            <span>·</span>
            <span>Drywall Repair</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Drywall Repair in O'Fallon, IL
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-6 max-w-2xl">
            From small nail holes to water-damaged ceilings, Hero Handyman Pro handles all drywall repairs in O'Fallon with professional texture matching and a clean finish. Veteran-owned, 35+ years of experience, fully insured.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:6185550100" onClick={() => trackCTAClick("Call Now", "drywall-ofallon-hero")}>
              <button className="bg-[#ff5b00] hover:bg-[#e04e00] text-white font-bold px-6 py-3 rounded-lg transition-colors">
                Call for a Free Estimate
              </button>
            </a>
            <Link href="/#contact">
              <button className="border border-white/30 hover:border-white text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                Request Your Estimate →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-[#ff5b00] py-4">
        <div className="container max-w-4xl">
          <div className="flex flex-wrap gap-6 justify-center md:justify-start text-white text-sm font-semibold">
            {[
              { icon: <Shield className="h-4 w-4" />, text: "Fully Insured" },
              { icon: <Star className="h-4 w-4" />, text: "235+ 5-Star Reviews" },
              { icon: <Clock className="h-4 w-4" />, text: "Same-Week Service" },
              { icon: <CheckCircle className="h-4 w-4" />, text: "Veteran-Owned" },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2">{badge.icon}{badge.text}</div>
            ))}
          </div>
        </div>
      </section>

      <div className="container max-w-4xl py-12">
        {/* Hyper-local intro */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">Drywall Repair for O'Fallon Homeowners</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            O'Fallon's housing stock ranges from 1970s ranch homes near downtown to newer construction in Hartman Estates and Wingate Estates. Older homes often develop nail pops and hairline cracks as the structure settles; newer homes near Scott Air Force Base frequently need drywall repair after military moves — doorknob holes, anchor damage, and wall patches from relocated fixtures are among the most common calls we receive.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Water damage is another frequent issue. Metro East's humid summers and occasional ice dam events in winter can leave ceiling stains and soft drywall that need to be cut out, treated, and replaced. We handle the full process — from removing damaged sheetrock to texture matching and painting — so you're left with a seamless finish, not a visible patch.
          </p>
        </section>

        {/* Services List */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">Drywall Services We Provide in O'Fallon</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {services.map((service, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-[#ff5b00] shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">{service}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Project Example */}
        <section className="mb-10 bg-blue-50 border border-blue-100 rounded-xl p-6">
          <h2 className="text-xl font-bold text-[#0b1220] mb-3">Recent O'Fallon Project: Water-Damaged Ceiling Repair</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            A homeowner in O'Fallon's Pheasant Run neighborhood called us after a second-floor bathroom leak left a 2-foot water stain and soft spot in the first-floor ceiling. We removed the damaged sheetrock, treated the exposed framing with a mold-inhibiting primer, installed new 5/8" drywall, applied two coats of joint compound, matched the existing orange peel texture, and repainted the ceiling to match. The repair was invisible and completed in two visits over three days — including dry time.
          </p>
          <p className="text-gray-600 text-sm italic">— Pheasant Run neighborhood, O'Fallon IL</p>
        </section>

        {/* Neighborhoods */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">Neighborhoods We Serve in O'Fallon</h2>
          <div className="flex flex-wrap gap-2">
            {neighborhoods.map((n) => (
              <span key={n} className="bg-gray-100 text-gray-700 text-sm px-3 py-1.5 rounded-full">{n}</span>
            ))}
          </div>
        </section>

        {/* Phil EEAT */}
        <section className="mb-10 bg-[#0b1220] rounded-xl p-6 text-white">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#ff5b00] flex items-center justify-center text-white font-bold text-lg shrink-0">PG</div>
            <div>
              <h2 className="text-xl font-bold mb-2">About Your O'Fallon Drywall Repair Pro</h2>
              <p className="text-gray-300 leading-relaxed mb-3">
                Hero Handyman Pro was founded by Phil Green — a U.S. Coast Guard veteran with 35+ years in the trades. Phil built this company on a simple principle: homeowners deserve the same dependable communication and professional craftsmanship that military service demands. Every drywall repair in O'Fallon is handled by our local Metro East team, not a subcontractor or franchise.
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                {["35+ Years Experience", "Veteran-Owned", "Licensed & Insured", "Local Metro East Team"].map((b) => (
                  <span key={b} className="bg-white/10 px-3 py-1 rounded-full text-white">{b}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-6">Frequently Asked Questions</h2>
          <div className="border border-gray-200 rounded-xl divide-y divide-gray-200 overflow-hidden">
            {faqSchema.mainEntity.map((item, i) => (
              <FAQItem key={i} question={item.name} answer={item.acceptedAnswer.text} />
            ))}
          </div>
        </section>

        {/* Quote Form */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-2">Request Your Free Drywall Repair Estimate</h2>
          <p className="text-gray-600 mb-6">
            Send us a photo of the damage and we'll respond with a clear, written estimate within 24 hours. No pressure, no obligation. We also serve{" "}
            <Link href="/service-areas/edwardsville-handyman-services/" className="text-[#ff5b00] hover:underline">Edwardsville</Link>,{" "}
            <Link href="/service-areas/belleville-handyman-services/" className="text-[#ff5b00] hover:underline">Belleville</Link>,{" "}
            <Link href="/service-areas/collinsville-handyman-services/" className="text-[#ff5b00] hover:underline">Collinsville</Link>, and{" "}
            <Link href="/service-areas/glen-carbon-handyman-services/" className="text-[#ff5b00] hover:underline">Glen Carbon</Link>.
          </p>
          <InlineQuoteForm
            service="Drywall Repair O'Fallon"
            heading="Get Your Free Drywall Repair Estimate"
            subheading="Describe the damage or send a photo and we'll respond within 24 hours with a clear, written estimate."
          />
        </section>

        {/* Related Links */}
        <section className="mt-10 pt-10 border-t border-gray-100">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-base font-bold text-[#0b1220] mb-3">Related Services</h3>
              <div className="grid gap-2">
                {[
                  { label: "Drywall Repair (All Areas)", href: "/handyman-services/drywall-repair/" },
                  { label: "Ceiling Fan Installation", href: "/handyman-services/ceiling-fan-installation/" },
                  { label: "Door Repair & Installation", href: "/handyman-services/door-repair/" },
                  { label: "Interior Painting", href: "/handyman-services/home-repair-services/" },
                  { label: "Home Repair Packages", href: "/handyman-service-packages" },
                ].map((l) => (
                  <Link key={l.href} href={l.href}>
                    <span className="block text-[#ff5b00] hover:underline text-sm py-0.5">→ {l.label}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-base font-bold text-[#0b1220] mb-3">Service Areas</h3>
              <div className="grid gap-2">
                {[
                  { label: "O'Fallon Handyman Services", href: "/service-areas/ofallon-handyman-services/" },
                  { label: "Edwardsville Handyman", href: "/service-areas/edwardsville-handyman-services/" },
                  { label: "Belleville Handyman", href: "/service-areas/belleville-handyman-services/" },
                  { label: "Collinsville Handyman", href: "/service-areas/collinsville-handyman-services/" },
                  { label: "Shiloh IL Handyman", href: "/service-areas/handyman-shiloh-il/" },
                ].map((l) => (
                  <Link key={l.href} href={l.href}>
                    <span className="block text-[#ff5b00] hover:underline text-sm py-0.5">→ {l.label}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-base font-bold text-[#0b1220] mb-3">Helpful Articles</h3>
              <div className="grid gap-2">
                {[
                  { label: "Drywall Repair Cost in O'Fallon IL", href: "/blog/drywall-repair-cost-ofallon-il/" },
                  { label: "Most Common Home Repairs After Winter", href: "/blog/winter-home-repairs-illinois/" },
                  { label: "Spring Home Repair Checklist", href: "/blog/spring-home-repair-checklist-edwardsville-ofallon/" },
                  { label: "2026 Handyman Costs Guide", href: "/blog/2026-handyman-costs-metro-east-il/" },
                ].map((l) => (
                  <Link key={l.href} href={l.href}>
                    <span className="block text-[#ff5b00] hover:underline text-sm py-0.5">→ {l.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
