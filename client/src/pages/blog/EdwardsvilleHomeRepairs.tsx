import SEO from "@/components/SEO";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import InlineQuoteForm from "@/components/InlineQuoteForm";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { useSeoRoute } from '@/hooks/useSeoRoute';
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Edwardsville IL Home Repair Guide: What Local Homeowners Need to Know",
  "description": "A practical home repair guide for Edwardsville, IL homeowners covering common repair needs, seasonal maintenance, and how to find reliable local handyman help.",
  "datePublished": "2026-05-12",
  "dateModified": "2026-05-12",
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
    "@id": "https://herohandymanpro.com/blog/home-repairs-edwardsville-il/"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the most common home repairs in Edwardsville, IL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The most common home repairs we handle in Edwardsville include deck repair and restoration, drywall repair from settling cracks, door adjustments and installation, ceiling fan and fixture installation, and exterior carpentry. Edwardsville's older neighborhoods near SIUE and downtown have more settling-related issues, while newer subdivisions tend to have more impact damage and builder-grade material repairs."
      }
    },
    {
      "@type": "Question",
      "name": "How do I find a reliable handyman in Edwardsville, IL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Look for a handyman who is insured, has verifiable local reviews, provides written estimates, and communicates clearly before and during the job. Ask for references from recent jobs in Edwardsville specifically — a handyman who works regularly in the area will understand local housing stock and common repair needs."
      }
    },
    {
      "@type": "Question",
      "name": "Does Hero Handyman Pro serve Edwardsville, IL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Edwardsville is one of our primary service areas. We serve homeowners throughout Edwardsville — from established neighborhoods near downtown and SIUE to newer subdivisions in the northern and eastern parts of the city. We're typically available within 1–3 business days for most repairs."
      }
    },
    {
      "@type": "Question",
      "name": "What should I do about drywall cracks in my Edwardsville home?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Diagonal cracks at window and door corners are very common in Edwardsville homes, especially in older neighborhoods where the clay-heavy soil causes more foundation movement. These are cosmetic in most cases and can be repaired for $150–$300 per location. Address them before they grow — wider cracks are more expensive to repair and can allow moisture infiltration."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a handyman cost in Edwardsville, IL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Handyman rates in Edwardsville typically run $75–$125 per hour, or flat-rate project pricing for common repairs. A half-day visit (4 hours) to address multiple small repairs typically costs $250–$450. Hero Handyman Pro provides written estimates before starting any work so you know the total cost upfront."
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
      {open && (
        <p className="pb-4 text-gray-600 text-sm leading-relaxed">{answer}</p>
      )}
    </div>
  );
}

export default function EdwardsvilleHomeRepairs() {
  const seo = useSeoRoute();
  return (
    <div className="min-h-screen bg-white">
      <SEO {...seo} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container py-3">
          <PageBreadcrumb
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog/" },
              { label: "Edwardsville IL Home Repair Guide" },
            ]}
          />
        </div>
      </div>

      <article className="container py-12 max-w-3xl mx-auto">
        <header className="mb-10">
          <div className="flex items-center gap-2 text-sm text-[#ff5b00] font-semibold uppercase tracking-wider mb-3">
            <span>Local Guide</span>
            <span>·</span>
            <span>May 12, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0b1220] leading-tight mb-4">
            Edwardsville IL Home Repair Guide: What Local Homeowners Need to Know
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Edwardsville is one of the most desirable communities in Metro East Illinois — great schools, a walkable downtown, and a mix of historic homes and newer developments that attract families and professionals from across the region. It's also a city with a wide range of home repair needs, from the older craftsman homes near SIUE and downtown to the newer subdivisions along Route 157 and beyond. Here's what Edwardsville homeowners need to know about maintaining and repairing their homes.
          </p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-100">
            <div className="w-10 h-10 rounded-full bg-[#0f766e] flex items-center justify-center text-white font-bold text-sm">PG</div>
            <div>
              <p className="font-semibold text-[#0b1220] text-sm">Phil Green</p>
              <p className="text-gray-500 text-xs">Owner & Master Handyman, Hero Handyman Pro · 35+ Years Experience</p>
            </div>
          </div>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">Edwardsville's Housing Stock: What You're Working With</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Edwardsville has one of the most diverse housing stocks in Metro East Illinois. The neighborhoods near downtown and Southern Illinois University Edwardsville (SIUE) include homes dating back to the early 1900s — craftsman bungalows, Victorian-era houses, and mid-century ranches that have been updated over the decades. These homes have character and craftsmanship that newer construction can't match, but they also have repair needs that reflect their age.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The northern and eastern parts of Edwardsville — neighborhoods like Plum Creek, Goshen Pointe, and the subdivisions along Governors' Parkway — are predominantly newer construction from the 1990s through the 2010s. These homes have different repair profiles: more impact damage, builder-grade materials that wear faster than premium alternatives, and the settling issues that come with homes built on the clay-heavy soil common in this part of Madison County.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Understanding the age and construction of your home helps you anticipate repair needs and maintain it proactively. Older homes near downtown need more attention to wood rot, settling cracks, and aging fixtures. Newer homes need more attention to builder-grade materials that are reaching the end of their expected lifespan.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">Most Common Home Repairs in Edwardsville</h2>

          <h3 className="text-xl font-bold text-[#0b1220] mb-2 mt-6">Deck Repair and Restoration</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Deck repair is our most common call in Edwardsville. The combination of hot, humid summers and cold, wet winters creates ideal conditions for wood deterioration. Decks built in the 1990s and early 2000s — which represent a large portion of Edwardsville's housing stock — are now at or past the expected lifespan of the original pressure-treated lumber.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            We recently restored a deck in an Edwardsville home near the SIUE campus — the homeowner had noticed soft spots on the surface boards and wobbly railings. Our assessment found significant rot in three of the deck boards and two railing posts, with the rest of the structure in good condition. We replaced the damaged boards and posts, reinforced the remaining railing connections, and applied a penetrating wood sealer to protect against future moisture damage. The homeowner had a safe, solid deck for the summer season at a fraction of the cost of full replacement.
          </p>
          <p className="text-gray-700 leading-relaxed">
            If your deck is showing any signs of wear, spring is the right time to address it. <Link href="/handyman-services/deck-repair/" className="text-[#ff5b00] hover:underline font-medium">Deck repair</Link> before the summer season is always less expensive than emergency repairs after a failure.
          </p>

          <h3 className="text-xl font-bold text-[#0b1220] mb-2 mt-6">Drywall Repair from Settling Cracks</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Edwardsville's clay-heavy soil expands and contracts significantly with moisture changes — more than sandy or loamy soil. This causes foundation movement that shows up as diagonal cracks at window and door corners, horizontal cracks along ceiling-wall joints, and vertical cracks near corners. These are cosmetic in most cases, but they need to be addressed before they grow.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <Link href="/handyman-services/drywall-repair/" className="text-[#ff5b00] hover:underline font-medium">Drywall repair</Link> for settling cracks typically costs $150–$300 per location and takes 2–3 hours including texture matching and priming. The best time to address them is spring or early summer, before the humidity causes them to widen further.
          </p>

          <h3 className="text-xl font-bold text-[#0b1220] mb-2 mt-6">Door Adjustments and Installation</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sticking and misaligned doors are a frequent repair call in Edwardsville, particularly in older homes where the door frames have shifted over decades of settling. Exterior doors are also affected by Edwardsville's humidity — wood frames absorb moisture in spring and summer, causing doors to bind or stick.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Most <Link href="/handyman-services/door-repair/" className="text-[#ff5b00] hover:underline font-medium">door repairs</Link> take 1–2 hours and cost $100–$250. If your exterior door is drafty or difficult to seal, addressing it before summer will also help with cooling costs.
          </p>

          <h3 className="text-xl font-bold text-[#0b1220] mb-2 mt-6">Fixture and Ceiling Fan Installation</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ceiling fan installation is one of our most popular services in Edwardsville, especially in spring before the summer heat arrives. Many Edwardsville homes — particularly those built in the 1980s and 1990s — have ceiling boxes that were designed for light fixtures, not fans. We handle the box upgrade and fan installation in a single visit.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We also handle light fixture replacement, bathroom exhaust fan installation, and other fixture work throughout Edwardsville. These are quick, affordable upgrades that make a noticeable difference in comfort and energy efficiency.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">Seasonal Maintenance Calendar for Edwardsville Homeowners</h2>
          <div className="space-y-4">
            {[
              {
                season: "Spring (March–May)",
                color: "bg-green-50 border-green-200",
                tasks: [
                  "Inspect deck for soft spots, loose railings, and damaged boards",
                  "Check drywall for settling cracks at window and door corners",
                  "Test all exterior doors for sticking or poor sealing",
                  "Inspect and replace failed caulking around windows and doors",
                  "Check gutters and downspouts for winter damage",
                  "Look for water stains on ceilings from ice dam or plumbing leaks",
                ]
              },
              {
                season: "Summer (June–August)",
                color: "bg-yellow-50 border-yellow-200",
                tasks: [
                  "Install ceiling fans before peak heat",
                  "Check deck staining and reseal if needed",
                  "Inspect exterior trim and fascia for rot or paint peeling",
                  "Address any pest damage (carpenter ants, woodpeckers) to exterior wood",
                  "Check window screens and replace damaged ones",
                ]
              },
              {
                season: "Fall (September–November)",
                color: "bg-orange-50 border-orange-200",
                tasks: [
                  "Inspect and caulk around windows and doors before winter",
                  "Check weatherstripping on all exterior doors",
                  "Repair any deck damage before winter moisture sets in",
                  "Test smoke and CO detectors, replace batteries",
                  "Check attic insulation and ventilation",
                ]
              },
              {
                season: "Winter (December–February)",
                color: "bg-blue-50 border-blue-200",
                tasks: [
                  "Monitor for ice dam formation on roof",
                  "Check for drafts around windows and doors",
                  "Inspect basement for moisture infiltration",
                  "Make a list of repairs to address in spring",
                ]
              },
            ].map((season, i) => (
              <div key={i} className={`rounded-xl p-5 border ${season.color}`}>
                <h3 className="font-bold text-[#0b1220] mb-3">{season.season}</h3>
                <ul className="space-y-1">
                  {season.tasks.map((task, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="text-[#ff5b00] font-bold mt-0.5 shrink-0">•</span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">How to Find Reliable Home Repair Help in Edwardsville</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Finding reliable home repair help in Edwardsville can be challenging. The area has a mix of experienced local professionals and less reliable operators who don't show up, don't communicate, or don't finish the job properly. Here's what to look for:
          </p>
          <ul className="space-y-4 mb-4">
            {[
              { title: "Local presence", desc: "Look for a handyman who works regularly in Edwardsville — not someone who drives in from St. Louis for a single job. Local professionals understand the housing stock, know local suppliers, and have a reputation to protect in the community." },
              { title: "Insurance", desc: "Always ask for proof of general liability insurance. If a handyman damages your property or gets injured on your property and isn't insured, you could be liable." },
              { title: "Written estimates", desc: "Any reputable handyman will provide a written estimate before starting work. This protects both parties and prevents disputes about scope and cost." },
              { title: "Clear communication", desc: "How quickly do they respond to your initial inquiry? Do they show up on time for the estimate? These are the best predictors of how they'll behave during the job." },
              { title: "References and reviews", desc: "Check Google reviews and ask for references from recent Edwardsville jobs. Look for patterns in the feedback — consistent positive comments about communication and quality are a good sign." },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[#ff5b00] font-bold mt-0.5 shrink-0">✓</span>
                <div>
                  <span className="font-semibold text-[#0b1220]">{item.title}: </span>
                  <span className="text-gray-700">{item.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <div className="bg-[#0b1220] rounded-2xl p-8 text-white text-center mb-10">
          <h2 className="text-2xl font-bold mb-3">Reliable Handyman Service in Edwardsville, IL</h2>
          <p className="text-gray-300 mb-2">Hero Handyman Pro serves Edwardsville homeowners throughout the city — from established neighborhoods near SIUE and downtown to newer subdivisions along Route 157 and Governors' Parkway.</p>
          <p className="text-gray-400 text-sm mb-6">Founded by Coast Guard veteran Phil Green · 35+ Years Experience · Licensed & Insured · Veteran-Owned</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:800-741-6056">
              <Button className="bg-[#ff5b00] hover:bg-[#ff5b00]/90 text-white rounded-full px-8 py-6 text-base font-semibold">
                Call 800-741-6056
              </Button>
            </a>
            <Link href="/service-areas/edwardsville-handyman-services/">
              <Button variant="outline" className="rounded-full px-8 py-6 text-base font-semibold border-2 border-white text-white hover:bg-white/10">
                Edwardsville Service Page
              </Button>
            </Link>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-6">Frequently Asked Questions</h2>
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            {faqSchema.mainEntity.map((item, i) => (
              <FAQItem key={i} question={item.name} answer={item.acceptedAnswer.text} />
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">Related Services & Resources</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { label: "Handyman Services in Edwardsville", href: "/service-areas/edwardsville-handyman-services/" },
              { label: "Deck Repair Service", href: "/handyman-services/deck-repair/" },
              { label: "Drywall Repair Service", href: "/handyman-services/drywall-repair/" },
              { label: "Door Repair & Installation", href: "/handyman-services/door-repair/" },
              { label: "Service Packages", href: "/handyman-service-packages/" },
              { label: "2026 Handyman Costs Guide", href: "/blog/2026-handyman-costs-metro-east-il/" },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="flex items-center gap-2 text-[#ff5b00] hover:underline font-medium text-sm p-3 bg-gray-50 rounded-lg border border-gray-100 hover:border-[#ff5b00]/20 transition-colors">
                <span>→</span> {link.label}
              </Link>
            ))}
          </div>
        </section>

        <InlineQuoteForm />
      </article>
    </div>
  );
}
