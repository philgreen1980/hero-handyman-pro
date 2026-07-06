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
  "name": "Hero Handyman Pro — Door Repair Swansea IL",
  "description": "Professional door repair and installation services in Swansea, Illinois. Sticking doors, broken hardware, weatherstripping, new door installation.",
  "url": "https://herohandymanpro.com/service-areas/door-repair-swansea-il/",
  "telephone": "+1-618-555-0100",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Swansea",
    "addressRegion": "IL",
    "addressCountry": "US"
  },
  "areaServed": { "@type": "City", "name": "Swansea", "containedInPlace": { "@type": "State", "name": "Illinois" } },
  "priceRange": "$$",
  "openingHours": "Mo-Sa 07:00-18:00"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does door repair cost in Swansea IL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Door repair in Swansea typically ranges from $75–$150 for adjustments and hardware fixes, $150–$350 for weatherstripping replacement and threshold repair, and $300–$800+ for door frame repair or new door installation (materials not included). Hero Handyman Pro provides free written estimates before any work begins."
      }
    },
    {
      "@type": "Question",
      "name": "Why is my door sticking in Swansea?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sticking doors in Swansea are most commonly caused by seasonal wood expansion from humidity (very common in Metro East summers), hinge screws that have pulled loose from the frame, or minor foundation settling that has shifted the door frame out of square. We diagnose the cause before recommending a fix."
      }
    },
    {
      "@type": "Question",
      "name": "Can you install a new front door in Swansea?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — we handle full front door replacement in Swansea, including removing the old door, installing the new pre-hung unit, shimming and securing the frame, adding weatherstripping, and installing new hardware. We work with doors you supply or can recommend local suppliers."
      }
    },
    {
      "@type": "Question",
      "name": "Do you repair sliding glass doors in Swansea?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Sliding glass door repairs — including roller replacement, track cleaning and adjustment, lock repair, and weatherstripping — are standard services we provide in Swansea and throughout Metro East IL."
      }
    },
    {
      "@type": "Question",
      "name": "Are you licensed and insured for door repair in Illinois?",
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
  "Sticking door adjustment and planing",
  "Hinge tightening and replacement",
  "Door frame repair and shimming",
  "Weatherstripping replacement (all door types)",
  "Threshold repair and replacement",
  "New exterior door installation (pre-hung)",
  "Sliding glass door roller and track repair",
  "Interior door installation and adjustment",
  "Deadbolt and hardware installation",
  "Storm door installation and repair",
];

const neighborhoods = [
  "Swansea Village Center", "Hartman Lane area", "Near Belleville (west)",
  "Near Fairview Heights", "O'Fallon (nearby)", "Shiloh (nearby)",
];

export default function DoorRepairSwansea() {
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
              { label: "Swansea Handyman", href: "/service-areas/handyman-swansea-il/" },
              { label: "Door Repair" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[#0b1220] text-white py-16">
        <div className="container max-w-4xl">
          <div className="flex items-center gap-2 text-[#ff5b00] text-sm font-semibold uppercase tracking-wider mb-3">
            <span>Swansea, IL</span>
            <span>·</span>
            <span>Door Repair & Installation</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Door Repair & Installation in Swansea, IL
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-6 max-w-2xl">
            Sticking doors, broken hardware, drafty thresholds, or a full new door installation — Hero Handyman Pro handles all door work in Swansea with professional results. Veteran-owned, 35+ years of experience, fully insured.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:6185550100" onClick={() => trackCTAClick("Call Now", "door-swansea-hero")}>
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
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">Door Repair for Swansea Homeowners</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Swansea's residential neighborhoods include a mix of 1960s–1980s ranch homes and newer construction near the Belleville border. In older homes, door frames often shift slightly as the structure settles, causing doors to stick or fail to latch properly. In newer construction, the issue is more often weatherstripping failure or hardware that has worn out after years of use.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Metro East's hot, humid summers cause wood doors to expand — which is why sticking doors are most common in July and August. We diagnose whether the issue is seasonal expansion (a simple plane and adjustment) or a structural problem with the frame before recommending any repair. Most door repairs in Swansea are completed in a single visit.
          </p>
        </section>

        {/* Services List */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">Door Services We Provide in Swansea</h2>
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
          <h2 className="text-xl font-bold text-[#0b1220] mb-3">Recent Swansea Project: Front Door Replacement</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            A homeowner in Swansea called us after their original 1978 steel front door had developed a significant draft and the deadbolt was difficult to operate. The door frame had shifted slightly over the decades, causing the door to bind at the top and leave a gap at the bottom threshold. We removed the old door and frame, installed a new pre-hung fiberglass entry door, shimmed and secured the new frame, added new weatherstripping and an adjustable threshold, and installed a new deadbolt and handle set. The homeowner noted an immediate difference in comfort and security.
          </p>
          <p className="text-gray-600 text-sm italic">— Swansea, IL</p>
        </section>

        {/* Neighborhoods */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">Areas We Serve in and Around Swansea</h2>
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
              <h2 className="text-xl font-bold mb-2">About Your Swansea Door Repair Pro</h2>
              <p className="text-gray-300 leading-relaxed mb-3">
                Hero Handyman Pro was founded by Phil Green — a U.S. Coast Guard veteran with 35+ years in the trades. Phil built this company on a simple principle: homeowners deserve the same dependable communication and professional craftsmanship that military service demands. Every door repair in Swansea is handled by our local Metro East team, not a subcontractor or franchise.
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
          <h2 className="text-2xl font-bold text-[#0b1220] mb-2">Request Your Free Door Repair Estimate in Swansea</h2>
          <p className="text-gray-600 mb-6">
            Tell us what's happening with your door and we'll respond with a clear, written estimate within 24 hours. We also serve{" "}
            <Link href="/service-areas/belleville-handyman-services/" className="text-[#ff5b00] hover:underline">Belleville</Link>,{" "}
            <Link href="/service-areas/ofallon-handyman-services/" className="text-[#ff5b00] hover:underline">O'Fallon</Link>,{" "}
            <Link href="/service-areas/handyman-fairview-heights-il/" className="text-[#ff5b00] hover:underline">Fairview Heights</Link>, and{" "}
            <Link href="/service-areas/handyman-shiloh-il/" className="text-[#ff5b00] hover:underline">Shiloh</Link>.
          </p>
          <InlineQuoteForm
            service="Door Repair Swansea"
            heading="Get Your Free Door Repair Estimate"
            subheading="Describe the issue and we'll respond within 24 hours with a clear, written estimate."
          />
        </section>

        {/* Related Links */}
        <section className="mt-10 pt-10 border-t border-gray-100">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-base font-bold text-[#0b1220] mb-3">Related Services</h3>
              <div className="grid gap-2">
                {[
                  { label: "Door Repair & Installation (All Areas)", href: "/handyman-services/door-repair/" },
                  { label: "Drywall Repair", href: "/handyman-services/drywall-repair/" },
                  { label: "Exterior Carpentry", href: "/handyman-services/exterior-carpentry/" },
                  { label: "Trim Carpentry", href: "/handyman-services/trim-carpentry/" },
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
                  { label: "Swansea IL Handyman", href: "/service-areas/handyman-swansea-il/" },
                  { label: "Belleville Handyman", href: "/service-areas/belleville-handyman-services/" },
                  { label: "O'Fallon Handyman", href: "/service-areas/ofallon-handyman-services/" },
                  { label: "Fairview Heights Handyman", href: "/service-areas/handyman-fairview-heights-il/" },
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
                  { label: "Most Common Home Repairs After Winter", href: "/blog/winter-home-repairs-illinois/" },
                  { label: "Spring Home Repair Checklist", href: "/blog/spring-home-repair-checklist-edwardsville-ofallon/" },
                  { label: "Handyman vs Contractor: Which Do You Need?", href: "/blog/handyman-vs-contractor-metro-east-il/" },
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
