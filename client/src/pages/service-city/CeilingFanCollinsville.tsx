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
  "name": "Hero Handyman Pro — Ceiling Fan Installation Collinsville IL",
  "description": "Professional ceiling fan installation and replacement in Collinsville, Illinois. New installs, fan replacements, and light fixture swaps.",
  "url": "https://www.herohandymanpro.com/service-areas/ceiling-fan-installation-collinsville-il/",
  "telephone": "+1-618-555-0100",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Collinsville",
    "addressRegion": "IL",
    "addressCountry": "US"
  },
  "areaServed": { "@type": "City", "name": "Collinsville", "containedInPlace": { "@type": "State", "name": "Illinois" } },
  "priceRange": "$$",
  "openingHours": "Mo-Sa 07:00-18:00"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does ceiling fan installation cost in Collinsville IL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ceiling fan installation in Collinsville typically ranges from $75–$150 to replace an existing fan on an existing box, $150–$300 to install a new fan where a light fixture currently exists, and $250–$500+ if a new electrical box or brace needs to be installed. Hero Handyman Pro provides free written estimates before any work begins."
      }
    },
    {
      "@type": "Question",
      "name": "Can you install a ceiling fan where there's no existing fixture in Collinsville?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — we can install a ceiling fan in rooms that don't currently have an overhead fixture, provided there is accessible attic space above. We install a fan-rated electrical box, run wiring from a nearby circuit, and complete the installation. This typically takes 2–4 hours depending on attic access."
      }
    },
    {
      "@type": "Question",
      "name": "Do you install ceiling fans with remote controls in Collinsville?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We install ceiling fans with remote controls, wall controls, and smart home compatibility (including Alexa and Google Home compatible fans). We'll make sure the control system is properly configured before we leave."
      }
    },
    {
      "@type": "Question",
      "name": "My ceiling fan wobbles — can you fix it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Wobbly ceiling fans are usually caused by unbalanced blades, loose blade brackets, or an improperly installed mounting bracket. We diagnose the cause and fix it — often in under an hour. If the mounting box is not fan-rated, we'll replace it with a proper fan brace."
      }
    },
    {
      "@type": "Question",
      "name": "Are you licensed and insured for ceiling fan installation in Illinois?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Hero Handyman Pro is fully insured with general liability coverage. Phil Green, owner and master handyman, has 35+ years of experience and is a Coast Guard veteran. We provide proof of insurance on request. Note: we handle standard fan installations and replacements; panel work and new circuit runs require a licensed electrician."
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
  "Ceiling fan replacement (fan-for-fan swap)",
  "Ceiling fan installation over existing light fixture",
  "New ceiling fan installation (with attic access)",
  "Fan-rated electrical box installation",
  "Remote control and wall control setup",
  "Smart fan installation (Alexa/Google Home)",
  "Wobble diagnosis and blade balancing",
  "Light kit installation and replacement",
  "Outdoor ceiling fan installation (covered porches)",
];

const neighborhoods = [
  "Downtown Collinsville", "Maryville (nearby)", "Troy (nearby)",
  "Glen Carbon (nearby)", "Edwardsville (nearby)", "Caseyville (nearby)",
];

export default function CeilingFanCollinsville() {
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
              { label: "Collinsville Handyman", href: "/service-areas/collinsville-handyman-services/" },
              { label: "Ceiling Fan Installation" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[#0b1220] text-white py-16">
        <div className="container max-w-4xl">
          <div className="flex items-center gap-2 text-[#ff5b00] text-sm font-semibold uppercase tracking-wider mb-3">
            <span>Collinsville, IL</span>
            <span>·</span>
            <span>Ceiling Fan Installation</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Ceiling Fan Installation in Collinsville, IL
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-6 max-w-2xl">
            New fan installation, replacements, wobble fixes, and smart fan setup — Hero Handyman Pro handles all ceiling fan work in Collinsville. Veteran-owned, 35+ years of experience, fully insured.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:6185550100" onClick={() => trackCTAClick("Call Now", "ceiling-fan-collinsville-hero")}>
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
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">Ceiling Fan Installation for Collinsville Homeowners</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Collinsville's housing stock includes a range of 1960s–1990s ranch homes and split-levels, many of which were built before ceiling fans were standard. Homeowners frequently call us to install fans in bedrooms and living rooms that currently have only a light fixture — a straightforward job when there's attic access, and still very manageable without it.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Metro East summers are hot and humid, making ceiling fans one of the most cost-effective comfort upgrades you can make. A properly installed fan on the right setting can reduce perceived temperature by 4–8 degrees, lowering your cooling costs without a major investment. We install fans in all room types — including covered porches and garages — and handle everything from basic replacements to smart home-connected fans.
          </p>
        </section>

        {/* Services List */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">Ceiling Fan Services We Provide in Collinsville</h2>
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
          <h2 className="text-xl font-bold text-[#0b1220] mb-3">Recent Collinsville Project: 4-Fan Installation</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            A homeowner in Collinsville purchased a 1980s ranch home and wanted ceiling fans installed in all four bedrooms, none of which had existing overhead fixtures. We installed fan-rated ceiling boxes in each room, ran wiring from the existing switch loops, and installed four 52" ceiling fans with remote controls. All four rooms were completed in a single day. The homeowner noted the house felt noticeably cooler within the first week of summer.
          </p>
          <p className="text-gray-600 text-sm italic">— Collinsville, IL</p>
        </section>

        {/* Neighborhoods */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">Areas We Serve in and Around Collinsville</h2>
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
              <h2 className="text-xl font-bold mb-2">About Your Collinsville Ceiling Fan Pro</h2>
              <p className="text-gray-300 leading-relaxed mb-3">
                Hero Handyman Pro was founded by Phil Green — a U.S. Coast Guard veteran with 35+ years in the trades. Phil built this company on a simple principle: homeowners deserve the same dependable communication and professional craftsmanship that military service demands. Every ceiling fan installation in Collinsville is handled by our local Metro East team, not a subcontractor or franchise.
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
          <h2 className="text-2xl font-bold text-[#0b1220] mb-2">Request Your Free Ceiling Fan Estimate in Collinsville</h2>
          <p className="text-gray-600 mb-6">
            Tell us how many fans you need and where, and we'll respond with a clear, written estimate within 24 hours. We also serve{" "}
            <Link href="/service-areas/glen-carbon-handyman-services/" className="text-[#ff5b00] hover:underline">Glen Carbon</Link>,{" "}
            <Link href="/gbp/edwardsville-il/" className="text-[#ff5b00] hover:underline">Edwardsville</Link>,{" "}
            <Link href="/handyman-belleville-il" className="text-[#ff5b00] hover:underline">Belleville</Link>, and{" "}
            <Link href="/gbp/ofallon-il/" className="text-[#ff5b00] hover:underline">O'Fallon</Link>.
          </p>
          <InlineQuoteForm
            service="Ceiling Fan Installation Collinsville"
            heading="Get Your Free Ceiling Fan Estimate"
            subheading="Tell us how many fans and where, and we'll respond within 24 hours with a clear, written estimate."
          />
        </section>

        {/* Related Links */}
        <section className="mt-10 pt-10 border-t border-gray-100">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-base font-bold text-[#0b1220] mb-3">Related Services</h3>
              <div className="grid gap-2">
                {[
                  { label: "Ceiling Fan Installation (All Areas)", href: "/handyman-services/ceiling-fan-installation/" },
                  { label: "Drywall Repair", href: "/handyman-services/drywall-repair/" },
                  { label: "Home Repair Services", href: "/handyman-services/home-repair-services/" },
                  { label: "Senior Accessibility Upgrades", href: "/handyman-services/senior-accessibility-upgrades/" },
                  { label: "Home Repair Packages", href: "/handyman-services/" },
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
                  { label: "Collinsville Handyman Services", href: "/service-areas/collinsville-handyman-services/" },
                  { label: "Glen Carbon Handyman", href: "/service-areas/glen-carbon-handyman-services/" },
                  { label: "Edwardsville Handyman", href: "/gbp/edwardsville-il/" },
                  { label: "O'Fallon Handyman", href: "/gbp/ofallon-il/" },
                  { label: "Belleville Handyman", href: "/handyman-belleville-il" },
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
                  { label: "Home Maintenance Tips for Metro East IL", href: "/blog/home-maintenance-tips-metro-east-il/" },
                  { label: "Spring Home Repair Checklist", href: "/blog/spring-home-repair-checklist-edwardsville-ofallon/" },
                  { label: "2026 Handyman Costs Guide", href: "/blog/2026-handyman-costs-metro-east-il/" },
                  { label: "How to Choose a Trusted Handyman", href: "/blog/how-to-choose-handyman-st-louis/" },
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
