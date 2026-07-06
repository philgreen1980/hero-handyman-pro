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
  "name": "Hero Handyman Pro — Deck Repair Belleville IL",
  "description": "Professional deck repair services in Belleville, Illinois. Rotted boards, railing replacement, stair repair, ledger board repair, and full deck restoration.",
  "url": "https://herohandymanpro.com/service-areas/deck-repair-belleville-il/",
  "telephone": "+1-618-555-0100",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Belleville",
    "addressRegion": "IL",
    "addressCountry": "US"
  },
  "areaServed": { "@type": "City", "name": "Belleville", "containedInPlace": { "@type": "State", "name": "Illinois" } },
  "priceRange": "$$",
  "openingHours": "Mo-Sa 07:00-18:00"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does deck repair cost in Belleville IL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Deck repair in Belleville typically ranges from $200–$500 for board replacement, $400–$900 for railing repair or replacement, and $800–$2,500+ for structural repairs including ledger boards, posts, or stair stringers. Hero Handyman Pro provides free written estimates before any work begins."
      }
    },
    {
      "@type": "Question",
      "name": "How do I know if my deck in Belleville needs repair or replacement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If individual boards are soft or rotted but the frame and ledger are solid, repair is usually the right call. If more than 30–40% of the deck surface is damaged, or if the ledger board (where the deck attaches to the house) shows rot, a full replacement may be more cost-effective. We'll give you an honest assessment."
      }
    },
    {
      "@type": "Question",
      "name": "Do you repair deck railings in Belleville?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — railing repair and replacement is one of our most common deck services in Belleville. We repair wobbly posts, replace rotted balusters, and rebuild entire railing sections to meet current code requirements. Loose railings are a safety hazard and should be addressed promptly."
      }
    },
    {
      "@type": "Question",
      "name": "How long does deck repair take in Belleville?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most deck board replacements and railing repairs in Belleville are completed in a single day. Larger structural repairs may take 2–3 days. We'll give you a clear timeline before we start so you can plan accordingly."
      }
    },
    {
      "@type": "Question",
      "name": "Are you licensed and insured for deck repair in Illinois?",
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
  "Rotted deck board replacement",
  "Railing repair and full replacement",
  "Stair stringer and tread repair",
  "Ledger board inspection and repair",
  "Post and beam replacement",
  "Deck cleaning and prep for staining",
  "Structural assessment and written report",
  "Composite and pressure-treated wood repairs",
];

const neighborhoods = [
  "Downtown Belleville", "Mascoutah Road corridor", "West Belleville",
  "Swansea (nearby)", "Fairview Heights (nearby)", "O'Fallon (nearby)",
  "Shiloh (nearby)", "Lebanon (nearby)",
];

export default function DeckRepairBelleville() {
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
              { label: "Belleville Handyman", href: "/service-areas/belleville-handyman-services/" },
              { label: "Deck Repair" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[#0b1220] text-white py-16">
        <div className="container max-w-4xl">
          <div className="flex items-center gap-2 text-[#ff5b00] text-sm font-semibold uppercase tracking-wider mb-3">
            <span>Belleville, IL</span>
            <span>·</span>
            <span>Deck Repair</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Deck Repair in Belleville, IL
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-6 max-w-2xl">
            From rotted boards to unsafe railings, Hero Handyman Pro handles all deck repairs in Belleville with quality materials and professional craftsmanship. Veteran-owned, 35+ years of experience, fully insured.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:6185550100" onClick={() => trackCTAClick("Call Now", "deck-belleville-hero")}>
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
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">Deck Repair for Belleville Homeowners</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Belleville's housing stock includes a mix of mid-century homes near downtown, 1980s–1990s construction in the western neighborhoods, and newer builds closer to Swansea and Fairview Heights. Many of these homes have wood decks that are 15–25 years old — right at the age when boards start to soften, railings begin to wobble, and stair stringers show the first signs of rot.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Metro East's humid summers and wet springs accelerate wood decay, especially on decks that don't drain well or have boards installed too close together. We inspect every deck repair job thoroughly — checking not just the visible boards but the ledger, posts, and footings — so you know exactly what you're dealing with before any work begins. Our goal is to give you an honest assessment, not upsell you on work you don't need.
          </p>
        </section>

        {/* Services List */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">Deck Repair Services We Provide in Belleville</h2>
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
        <section className="mb-10 bg-amber-50 border border-amber-100 rounded-xl p-6">
          <h2 className="text-xl font-bold text-[#0b1220] mb-3">Recent Belleville Project: Railing Replacement & Board Repair</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            A homeowner in west Belleville contacted us after noticing their deck railing had significant wobble and two boards near the steps had gone soft. We found the railing posts had rotted at the base where they attached to the rim joist — a common failure point on older pressure-treated decks. We replaced all four corner posts, installed new composite balusters, replaced the two rotted deck boards, and re-secured the stair stringer that had begun to pull away from the house. The deck is now solid, safe, and ready for summer entertaining.
          </p>
          <p className="text-gray-600 text-sm italic">— West Belleville, IL</p>
        </section>

        {/* Neighborhoods */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">Neighborhoods We Serve in Belleville</h2>
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
              <h2 className="text-xl font-bold mb-2">About Your Belleville Deck Repair Pro</h2>
              <p className="text-gray-300 leading-relaxed mb-3">
                Hero Handyman Pro was founded by Phil Green — a U.S. Coast Guard veteran with 35+ years in the trades. Phil built this company on a simple principle: homeowners deserve the same dependable communication and professional craftsmanship that military service demands. Every deck repair in Belleville is handled by our local Metro East team, not a subcontractor or franchise.
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
          <h2 className="text-2xl font-bold text-[#0b1220] mb-2">Request Your Free Deck Repair Estimate in Belleville</h2>
          <p className="text-gray-600 mb-6">
            Send us a photo of your deck and we'll respond with a clear, written estimate within 24 hours. We also serve{" "}
            <Link href="/service-areas/ofallon-handyman-services/" className="text-[#ff5b00] hover:underline">O'Fallon</Link>,{" "}
            <Link href="/service-areas/edwardsville-handyman-services/" className="text-[#ff5b00] hover:underline">Edwardsville</Link>,{" "}
            <Link href="/service-areas/collinsville-handyman-services/" className="text-[#ff5b00] hover:underline">Collinsville</Link>, and{" "}
            <Link href="/service-areas/handyman-swansea-il/" className="text-[#ff5b00] hover:underline">Swansea</Link>.
          </p>
          <InlineQuoteForm
            service="Deck Repair Belleville"
            heading="Get Your Free Deck Repair Estimate"
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
                  { label: "Deck Repair (All Areas)", href: "/handyman-services/deck-repair/" },
                  { label: "Exterior Carpentry", href: "/handyman-services/exterior-carpentry/" },
                  { label: "Porch Repair", href: "/handyman-services/porch-repair/" },
                  { label: "Fence Repair", href: "/handyman-services/fence-repair/" },
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
                  { label: "Belleville Handyman Services", href: "/service-areas/belleville-handyman-services/" },
                  { label: "O'Fallon Handyman", href: "/service-areas/ofallon-handyman-services/" },
                  { label: "Swansea IL Handyman", href: "/service-areas/handyman-swansea-il/" },
                  { label: "Fairview Heights Handyman", href: "/service-areas/handyman-fairview-heights-il/" },
                  { label: "Collinsville Handyman", href: "/service-areas/collinsville-handyman-services/" },
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
