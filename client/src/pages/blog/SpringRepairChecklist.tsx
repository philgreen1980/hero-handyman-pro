import SEO from "@/components/SEO";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import InlineQuoteForm from "@/components/InlineQuoteForm";
import { Link } from "wouter";
import { trackCTAClick } from "@/lib/analytics";
import { ChevronDown, ChevronUp, CheckSquare } from "lucide-react";
import { useState } from "react";
import { useSeoRoute } from '@/hooks/useSeoRoute';
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Spring Home Repair Checklist for Edwardsville & O'Fallon Homeowners (2026)",
  "description": "A practical spring maintenance checklist for homeowners in Edwardsville IL, O'Fallon IL, and Metro East. Covers decks, gutters, doors, drywall, and more.",
  "datePublished": "2026-04-19",
  "dateModified": "2026-04-20",
  "author": {
    "@type": "Person",
    "name": "Phil Green",
    "jobTitle": "Owner & Master Handyman",
    "worksFor": { "@type": "LocalBusiness", "name": "Hero Handyman Pro" }
  },
  "publisher": {
    "@type": "Organization",
    "name": "Hero Handyman Pro",
    "url": "https://herohandymanpro.com"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://herohandymanpro.com/blog/spring-home-repair-checklist-edwardsville-ofallon/"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "When should I do spring home maintenance in Metro East IL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The best window for spring home maintenance in Edwardsville, O'Fallon, and surrounding Metro East communities is late March through May — after the last hard freeze but before summer heat and humidity set in. This is the ideal time to inspect decks, gutters, exterior wood, and caulking."
      }
    },
    {
      "@type": "Question",
      "name": "What are the most common spring repair issues in Metro East Illinois?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The most common spring repair issues we see in Metro East IL are: rotted deck boards from winter moisture, clogged or damaged gutters, sticking doors and windows from seasonal wood expansion, drywall cracks from freeze-thaw cycles, and peeling exterior paint or caulking around windows and doors."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a spring handyman inspection cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hero Handyman Pro offers free phone and photo estimates for spring repair projects. For a detailed on-site walkthrough and written punch list, we charge a nominal assessment fee that is credited toward the final project cost."
      }
    },
    {
      "@type": "Question",
      "name": "Can a handyman handle spring gutter cleaning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — gutter cleaning and minor gutter repairs (resealing joints, reattaching loose sections) are standard handyman tasks. Hero Handyman Pro handles gutter cleaning as part of spring punch list visits throughout Edwardsville, O'Fallon, Belleville, and the Metro East."
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

type ChecklistSection = {
  title: string;
  items: string[];
  link?: { href: string; label: string };
};

const checklist: ChecklistSection[] = [
  {
    title: "Deck & Porch",
    items: [
      "Walk the entire deck surface — press a screwdriver into boards to test for soft rot",
      "Check all railings for wobble or loose balusters",
      "Inspect stair stringers and treads for cracks or rot",
      "Look for popped nails or screws that could be a tripping hazard",
      "Check ledger board connection to the house for signs of separation",
    ],
    link: { href: "/handyman-services/deck-repair/", label: "Deck repair services →" },
  },
  {
    title: "Exterior Doors & Windows",
    items: [
      "Open and close every exterior door — sticking may indicate frame shift or moisture damage",
      "Check weatherstripping on all exterior doors for tears or compression loss",
      "Inspect door thresholds for gaps that let in air and water",
      "Look for cracked or missing caulk around window frames",
      "Test window locks and hardware — replace any that are seized or broken",
    ],
    link: { href: "/handyman-services/door-repair/", label: "Door repair & installation →" },
  },
  {
    title: "Gutters & Drainage",
    items: [
      "Clear all gutters of winter debris — leaves, seed pods, and shingle grit",
      "Run water through downspouts to confirm they drain freely",
      "Check gutter joints for separation or rust — reseal with gutter caulk",
      "Confirm downspouts direct water at least 4 feet away from the foundation",
      "Look for sagging sections that need re-hanging",
    ],
  },
  {
    title: "Exterior Wood & Carpentry",
    items: [
      "Inspect all fascia and soffit boards for rot, especially at corners",
      "Check wood trim around windows and doors for peeling paint or soft spots",
      "Look for any fence boards that are split, rotted, or missing",
      "Probe porch columns and posts at the base — rot often starts at ground contact",
    ],
    link: { href: "/handyman-services/exterior-carpentry/", label: "Exterior carpentry services →" },
  },
  {
    title: "Interior Drywall & Ceilings",
    items: [
      "Walk through every room and look for new cracks — especially at window and door corners",
      "Check ceilings for water stains that may have appeared over winter",
      "Look for nail pops in drywall — common after a cold, dry winter",
      "Inspect basement walls and ceiling for moisture intrusion",
    ],
    link: { href: "/handyman-services/drywall-repair/", label: "Drywall repair services →" },
  },
  {
    title: "Lighting & Ceiling Fans",
    items: [
      "Switch ceiling fans to counterclockwise (summer) direction",
      "Test all outdoor light fixtures — replace bulbs and check for moisture intrusion",
      "Check for flickering fixtures that may need a new switch or ballast",
    ],
    link: { href: "/handyman-services/ceiling-fan-installation/", label: "Ceiling fan & fixture services →" },
  },
];

export default function SpringRepairChecklist() {
  const seo = useSeoRoute();
  return (
    <div className="min-h-screen bg-white">
      <SEO {...seo} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container py-3">
          <PageBreadcrumb
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog/" },
              { label: "Spring Home Repair Checklist" },
            ]}
          />
        </div>
      </div>

      <article className="container py-12 max-w-3xl mx-auto">
        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-2 text-sm text-[#ff5b00] font-semibold uppercase tracking-wider mb-3">
            <span>Seasonal Guide</span>
            <span>·</span>
            <span>April 19, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0b1220] leading-tight mb-4">
            Spring Home Repair Checklist for Edwardsville &amp; O'Fallon Homeowners (2026)
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Spring in Metro East Illinois means one thing for homeowners: it's time to find out what winter did to your house. Freeze-thaw cycles, ice, and moisture take a toll on decks, doors, gutters, and drywall every year. Catching problems now — before summer heat sets in — is always cheaper than waiting. Here's the checklist I walk through every spring for my own clients in Edwardsville, O'Fallon, Belleville, and the surrounding area.
          </p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-100">
            <div className="w-10 h-10 rounded-full bg-[#0f766e] flex items-center justify-center text-white font-bold text-sm">PG</div>
            <div>
              <p className="font-semibold text-[#0b1220] text-sm">Phil Green</p>
              <p className="text-gray-500 text-xs">Owner & Master Handyman, Hero Handyman Pro · 35+ Years Experience</p>
            </div>
          </div>
        </header>

        {/* Top CTA */}
        <div className="bg-[#0b1220] rounded-xl p-6 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-bold text-lg leading-snug">Ready for your project?</p>
            <p className="text-gray-300 text-sm mt-1">Get a free quote in 24 hrs — no pressure, no obligation.</p>
          </div>
          <Link href="/#contact">
            <button
              className="bg-[#ff5b00] hover:bg-[#e04e00] text-white font-bold px-6 py-3 rounded-lg text-sm whitespace-nowrap transition-colors"
              onClick={() => trackCTAClick("Get a Free Quote", "blog-spring-checklist-top-cta")}
            >
              Get a Free Quote →
            </button>
          </Link>
        </div>

        {/* Intro */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">Why Spring Maintenance Matters in Metro East IL</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Edwardsville and O'Fallon area sees some of the most dramatic seasonal swings in the Midwest — hard freezes in January, ice storms in February, and then rapid warming in March and April. That cycle of freezing and thawing is hard on wood, caulk, drywall, and foundations. A small crack in a deck board that goes unnoticed in November can become a structural problem by July.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The good news: most spring maintenance items are inexpensive to fix when caught early. The checklist below covers every major area of your home, with links to our service pages if you need a professional to handle any of it.
          </p>
        </section>

        {/* Checklist Sections */}
        {checklist.map((section, si) => (
          <section key={si} className="mb-10">
            <h2 className="text-2xl font-bold text-[#0b1220] mb-4 flex items-center gap-2">
              <CheckSquare className="h-6 w-6 text-[#ff5b00]" />
              {section.title}
            </h2>
            <ul className="space-y-3 mb-4">
              {section.items.map((item, ii) => (
                <li key={ii} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-1 h-4 w-4 rounded border-2 border-gray-300 shrink-0 inline-block" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            {section.link && (
              <Link href={section.link.href} className="text-[#ff5b00] hover:underline font-semibold text-sm">
                {section.link.label}
              </Link>
            )}
          </section>
        ))}

        {/* Section: When to Call a Pro */}
        <section className="mb-10 bg-amber-50 border border-amber-200 rounded-xl p-6">
          <h2 className="text-xl font-bold text-[#0b1220] mb-3">When to Call a Pro vs. DIY</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Many spring maintenance tasks — like cleaning gutters, tightening loose hardware, and caulking windows — are DIY-friendly. But some issues are better left to a professional:
          </p>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="flex items-start gap-2"><span className="text-[#ff5b00] font-bold shrink-0">→</span> Soft or rotted deck boards, especially near the ledger or posts</li>
            <li className="flex items-start gap-2"><span className="text-[#ff5b00] font-bold shrink-0">→</span> Water stains on ceilings that indicate an active or past leak</li>
            <li className="flex items-start gap-2"><span className="text-[#ff5b00] font-bold shrink-0">→</span> Doors that won't close properly — this can signal foundation movement</li>
            <li className="flex items-start gap-2"><span className="text-[#ff5b00] font-bold shrink-0">→</span> Any exterior wood that feels soft when probed — rot spreads fast in warm weather</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-3">
            Hero Handyman Pro serves homeowners throughout{" "}
            <Link href="/gbp/edwardsville-il/" className="text-[#ff5b00] hover:underline">Edwardsville</Link>,{" "}
            <Link href="/gbp/ofallon-il/" className="text-[#ff5b00] hover:underline">O'Fallon</Link>,{" "}
            <Link href="/handyman-belleville-il" className="text-[#ff5b00] hover:underline">Belleville</Link>,{" "}
            <Link href="/service-areas/collinsville-handyman-services/" className="text-[#ff5b00] hover:underline">Collinsville</Link>, and{" "}
            <Link href="/service-areas/glen-carbon-handyman-services/" className="text-[#ff5b00] hover:underline">Glen Carbon</Link>.
            Send us a photo and we'll tell you honestly whether it's a DIY fix or needs professional attention.
          </p>
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

        {/* Bottom CTA / Quote Form */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-2">Get Your Spring Repairs Done Right</h2>
          <p className="text-gray-600 mb-6">
            Don't let your spring punch list pile up. Hero Handyman Pro offers same-day and next-day scheduling for homeowners in{" "}
            <Link href="/gbp/edwardsville-il/" className="text-[#ff5b00] hover:underline">Edwardsville</Link>,{" "}
            <Link href="/gbp/ofallon-il/" className="text-[#ff5b00] hover:underline">O'Fallon</Link>, and across Metro East IL.
            Send us a photo of your project and get a free written estimate within 24 hours.
          </p>
          <InlineQuoteForm
            service="Spring Home Repair"
            heading="Get Your Free Spring Repair Quote"
            subheading="Tell us what you found on your spring walkthrough and we'll respond with a clear, upfront estimate within 24 hours."
          />
        </section>

        {/* Related Articles & Resources */}
        <section className="mt-10 pt-10 border-t border-gray-100">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-[#0b1220] mb-4">Related Articles</h3>
              <div className="grid gap-2">
                {[
                  { label: "2026 Handyman Costs in Metro East IL", href: "/blog/2026-handyman-costs-metro-east-il/" },
                  { label: "5 Signs Your Deck Needs Repair", href: "/blog/signs-your-deck-needs-repair/" },
                  { label: "Most Common Home Repairs After Winter in Illinois", href: "/blog/winter-home-repairs-illinois/" },
                  { label: "How Much Does Drywall Repair Cost in O'Fallon?", href: "/blog/drywall-repair-cost-ofallon-il/" },
                  { label: "Edwardsville IL Home Repair Guide", href: "/blog/home-repairs-edwardsville-il/" },
                  { label: "Home Maintenance Tips for Metro East IL", href: "/blog/home-maintenance-tips-metro-east-il/" },
                  { label: "How to Choose a Trusted Handyman", href: "/blog/how-to-choose-handyman-st-louis/" },
                  { label: "Top Home Repairs in Belleville IL", href: "/blog/home-repairs-belleville-il/" },
                ].map((link) => (
                  <Link key={link.href} href={link.href}>
                    <span className="block text-[#ff5b00] hover:underline text-sm font-medium py-1">→ {link.label}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0b1220] mb-4">Service Pages</h3>
              <div className="grid gap-2">
                {[
                  { label: "Deck Repair & Restoration", href: "/handyman-services/deck-repair/" },
                  { label: "Drywall & Ceiling Repair", href: "/handyman-services/drywall-repair/" },
                  { label: "Door Installation & Repair", href: "/handyman-services/door-repair/" },
                  { label: "Ceiling Fan Installation", href: "/handyman-services/ceiling-fan-installation/" },
                  { label: "Exterior Carpentry", href: "/handyman-services/exterior-carpentry/" },
                  { label: "Home Repair Service Packages", href: "/handyman-service-packages" },
                  { label: "Hero Membership Club", href: "/membership/" },
                  { label: "View Completed Projects", href: "/projects/" },
                ].map((link) => (
                  <Link key={link.href} href={link.href}>
                    <span className="block text-[#ff5b00] hover:underline text-sm font-medium py-1">→ {link.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
