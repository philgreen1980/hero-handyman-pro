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
  "name": "Hero Handyman Pro — Fence Repair Edwardsville IL",
  "description": "Professional fence repair services in Edwardsville, Illinois. Wood fence boards, posts, gates, and privacy fence repairs.",
  "url": "https://www.herohandymanpro.com/service-areas/fence-repair-edwardsville-il/",
  "telephone": "+1-618-555-0100",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Edwardsville",
    "addressRegion": "IL",
    "addressCountry": "US"
  },
  "areaServed": { "@type": "City", "name": "Edwardsville", "containedInPlace": { "@type": "State", "name": "Illinois" } },
  "priceRange": "$$",
  "openingHours": "Mo-Sa 07:00-18:00"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does fence repair cost in Edwardsville IL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fence repair in Edwardsville typically ranges from $100–$250 for a few board replacements, $200–$500 for gate repair or replacement, and $300–$800+ for post replacement (which requires digging out the old post and setting a new one in concrete). Hero Handyman Pro provides free written estimates before any work begins."
      }
    },
    {
      "@type": "Question",
      "name": "Can you repair a leaning fence post in Edwardsville?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — leaning fence posts are one of our most common fence repair calls in Edwardsville. Posts lean when the concrete footing cracks or when the post itself rots at the base. We dig out the old post, install a new pressure-treated post, set it in fresh concrete, and re-attach the fence panels. Most single post replacements are completed in a half-day."
      }
    },
    {
      "@type": "Question",
      "name": "Do you repair wood privacy fences in Edwardsville?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Wood privacy fence repair — including board replacement, picket replacement, cap rail repair, and gate adjustment — is a standard service we provide throughout Edwardsville and the surrounding Madison County area."
      }
    },
    {
      "@type": "Question",
      "name": "How long does fence repair take in Edwardsville?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most fence board and gate repairs are completed in a single visit (2–4 hours). Post replacements that require concrete typically need 24–48 hours for the concrete to cure before the fence panels are re-attached, so these jobs usually span two days."
      }
    },
    {
      "@type": "Question",
      "name": "Are you licensed and insured for fence repair in Illinois?",
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
  "Wood fence board and picket replacement",
  "Leaning or rotted post replacement",
  "Gate repair, rehang, and replacement",
  "Cap rail and top rail repair",
  "Privacy fence panel repair",
  "Post setting in concrete",
  "Fence staining and sealing prep",
  "Storm damage fence repair",
  "Partial fence section rebuilding",
];

const neighborhoods = [
  "Downtown Edwardsville", "Edwardsville Township", "Glen Carbon (nearby)",
  "Maryville (nearby)", "Troy (nearby)", "Worden (nearby)",
  "Collinsville (nearby)", "Granite City (nearby)",
];

export default function FenceRepairEdwardsville() {
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
              { label: "Edwardsville Handyman", href: "/gbp/edwardsville-il/" },
              { label: "Fence Repair" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[#0b1220] text-white py-16">
        <div className="container max-w-4xl">
          <div className="flex items-center gap-2 text-[#ff5b00] text-sm font-semibold uppercase tracking-wider mb-3">
            <span>Edwardsville, IL</span>
            <span>·</span>
            <span>Fence Repair</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Fence Repair in Edwardsville, IL
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-6 max-w-2xl">
            From leaning posts to broken gates and rotted boards, Hero Handyman Pro handles all fence repairs in Edwardsville with quality materials and professional craftsmanship. Veteran-owned, 35+ years of experience, fully insured.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:6185550100" onClick={() => trackCTAClick("Call Now", "fence-edwardsville-hero")}>
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
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">Fence Repair for Edwardsville Homeowners</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Edwardsville's established neighborhoods — from the historic homes near downtown to the newer subdivisions off IL-157 and Troy Road — are full of wood privacy fences that have been in place for 10–20 years. At that age, posts begin to rot at ground level, boards start to warp and split, and gates sag off their hinges. Metro East's freeze-thaw cycles in winter and heavy spring rains accelerate the process.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We handle fence repairs of all sizes in Edwardsville — from replacing a single broken board to rebuilding an entire fence section after storm damage. Every repair starts with an honest assessment of what's salvageable and what needs to be replaced, so you're not paying for work you don't need.
          </p>
        </section>

        {/* Services List */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">Fence Repair Services We Provide in Edwardsville</h2>
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
        <section className="mb-10 bg-green-50 border border-green-100 rounded-xl p-6">
          <h2 className="text-xl font-bold text-[#0b1220] mb-3">Recent Edwardsville Project: Storm Damage Fence Repair</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            After a late-spring storm in Edwardsville, a homeowner near the Troy Road corridor had three fence sections blown down and two posts snapped at ground level. We removed the damaged sections, dug out the broken posts, set four new 4x4 pressure-treated posts in concrete, and re-built the three fence sections with matching cedar boards. We also re-hung the gate that had been knocked off its posts. The entire repair was completed over two days — one day for post setting and one day for fence rebuilding after the concrete cured.
          </p>
          <p className="text-gray-600 text-sm italic">— Edwardsville, IL</p>
        </section>

        {/* Neighborhoods */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">Neighborhoods We Serve in and Around Edwardsville</h2>
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
              <h2 className="text-xl font-bold mb-2">About Your Edwardsville Fence Repair Pro</h2>
              <p className="text-gray-300 leading-relaxed mb-3">
                Hero Handyman Pro was founded by Phil Green — a U.S. Coast Guard veteran with 35+ years in the trades. Phil built this company on a simple principle: homeowners deserve the same dependable communication and professional craftsmanship that military service demands. Every fence repair in Edwardsville is handled by our local Metro East team, not a subcontractor or franchise.
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
          <h2 className="text-2xl font-bold text-[#0b1220] mb-2">Request Your Free Fence Repair Estimate in Edwardsville</h2>
          <p className="text-gray-600 mb-6">
            Send us a photo of the damage and we'll respond with a clear, written estimate within 24 hours. We also serve{" "}
            <Link href="/service-areas/glen-carbon-handyman-services/" className="text-[#ff5b00] hover:underline">Glen Carbon</Link>,{" "}
            <Link href="/service-areas/collinsville-handyman-services/" className="text-[#ff5b00] hover:underline">Collinsville</Link>,{" "}
            <Link href="/gbp/ofallon-il/" className="text-[#ff5b00] hover:underline">O'Fallon</Link>, and{" "}
            <Link href="/handyman-belleville-il" className="text-[#ff5b00] hover:underline">Belleville</Link>.
          </p>
          <InlineQuoteForm
            service="Fence Repair Edwardsville"
            heading="Get Your Free Fence Repair Estimate"
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
                  { label: "Fence Repair (All Areas)", href: "/handyman-services/fence-repair/" },
                  { label: "Deck Repair", href: "/handyman-services/deck-repair/" },
                  { label: "Exterior Carpentry", href: "/carpentry-services/" },
                  { label: "Porch Repair", href: "/handyman-services/porch-repair/" },
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
                  { label: "Edwardsville Handyman Services", href: "/gbp/edwardsville-il/" },
                  { label: "Glen Carbon Handyman", href: "/service-areas/glen-carbon-handyman-services/" },
                  { label: "Collinsville Handyman", href: "/service-areas/collinsville-handyman-services/" },
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
                  { label: "5 Signs Your Deck Needs Repair", href: "/blog/signs-your-deck-needs-repair/" },
                  { label: "Most Common Home Repairs After Winter", href: "/blog/common-home-repairs-after-winter-illinois/" },
                  { label: "Edwardsville IL Home Repair Guide", href: "/gbp/edwardsville-il/" },
                  { label: "Spring Home Repair Checklist", href: "/blog/spring-home-repair-checklist-edwardsville-ofallon/" },
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
