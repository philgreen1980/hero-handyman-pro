import SEO from "@/components/SEO";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import InlineQuoteForm from "@/components/InlineQuoteForm";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronDown, ChevronUp, CheckCircle, AlertTriangle } from "lucide-react";
import { useState } from "react";
import { useSeoRoute } from '@/hooks/useSeoRoute';
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How Much Does Deck Repair Cost in O'Fallon IL?",
  "description": "Deck repair cost guide for O'Fallon, IL homeowners. Covers minor repairs, board replacement, railing repair, structural repairs, and when to repair vs replace.",
  "datePublished": "2026-05-12",
  "dateModified": "2026-05-12",
  "author": {
    "@type": "Person",
    "name": "Phil Green",
    "jobTitle": "Owner & Master Handyman",
    "worksFor": {
      "@type": "LocalBusiness",
      "name": "Hero Handyman Pro"
    }
  },
  "publisher": {
    "@type": "Organization",
    "name": "Hero Handyman Pro",
    "url": "https://www.herohandymanpro.com"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.herohandymanpro.com/blog/deck-repair-cost-ofallon-il/"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does deck repair cost in O'Fallon, IL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Deck repair in O'Fallon typically ranges from $200–$500 for minor repairs (a few boards, loose fasteners, basic railing tightening), $500–$1,500 for moderate repairs (multiple boards, railing section replacement, stair work), and $1,500–$4,000+ for major structural repairs (joist replacement, full railing rebuild, ledger board work). Full deck replacement runs $8,000–$20,000+ depending on size and materials."
      }
    },
    {
      "@type": "Question",
      "name": "What factors affect deck repair costs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The main factors are: extent of rot or damage, deck size and height, wood type (pressure-treated, composite, cedar), whether structural elements like joists or the ledger board are affected, railing complexity, and whether staining or sealing is included after repair."
      }
    },
    {
      "@type": "Question",
      "name": "How do I know if my deck needs repair or full replacement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Repair is usually the right call when damage is limited to surface boards, a railing section, or a few joists. Replacement makes more sense when the ledger board is rotted, more than 30–40% of the deck boards are damaged, or the structural frame has widespread rot. A professional inspection helps you avoid paying for a new deck when targeted repairs would last another 10–15 years."
      }
    },
    {
      "@type": "Question",
      "name": "What are the most common deck problems in O'Fallon homes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The most common issues we see in O'Fallon are soft or spongy deck boards from moisture rot, wobbly railings with loose fasteners, cracked or splitting boards from freeze-thaw cycles, and stair stringers that have begun to separate. Decks built in the 1990s and early 2000s are especially prone to these issues as original lumber reaches end of life."
      }
    },
    {
      "@type": "Question",
      "name": "How long does deck repair take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Minor repairs (a few boards, railing tightening) typically take half a day to one day. Moderate repairs with board replacement and railing work usually take one to two days. Major structural repairs may take two to four days depending on scope and drying time for any staining."
      }
    },
    {
      "@type": "Question",
      "name": "Is it worth repairing a deck before selling a home in O'Fallon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. A damaged deck is one of the first things home inspectors flag and buyers notice. A $500–$1,500 repair can prevent buyers from requesting thousands in concessions or walking away entirely. It's one of the highest-ROI pre-sale improvements for O'Fallon homes."
      }
    }
  ]
};

const pricingCards = [
  {
    category: "Minor Deck Repairs",
    range: "$200–$500",
    color: "bg-green-50 border-green-200",
    headerColor: "bg-green-600",
    examples: ["A few soft or cracked boards", "Loose fasteners and screws", "Basic railing tightening", "Minor stair repairs"],
    note: "Quick repairs that restore safety and appearance without major labor.",
  },
  {
    category: "Moderate Deck Repairs",
    range: "$500–$1,500",
    color: "bg-yellow-50 border-yellow-200",
    headerColor: "bg-yellow-600",
    examples: ["Multiple board replacement", "Railing section rebuild", "Stair stringer repair", "Partial deck resurfacing"],
    note: "Often includes material costs for new lumber, hardware, and finishing.",
  },
  {
    category: "Major Structural Repairs",
    range: "$1,500–$4,000+",
    color: "bg-red-50 border-red-200",
    headerColor: "bg-red-600",
    examples: ["Joist or beam replacement", "Full railing rebuild", "Ledger board repair", "Post and footing work"],
    note: "Structural repairs require careful inspection and may involve permits depending on scope.",
  },
];

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

export default function DeckRepairCostOFallon() {
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
              { label: "Deck Repair Cost in O'Fallon IL" },
            ]}
          />
        </div>
      </div>

      {/* Article */}
      <article className="container py-12 max-w-3xl mx-auto">
        <header className="mb-10">
          <div className="flex items-center gap-2 text-sm text-[#ff5b00] font-semibold uppercase tracking-wider mb-3">
            <span>Pricing Guide</span>
            <span>·</span>
            <span>May 12, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0b1220] leading-tight mb-4">
            How Much Does Deck Repair Cost in O'Fallon IL?
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Deck damage is one of the most common repair calls we get from homeowners throughout O'Fallon and the Metro East area. Whether it's a few soft boards, a wobbly railing, or a stair that's starting to pull away from the structure — deck problems tend to get worse (and more expensive) the longer they're left alone.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mt-3">
            The most common question homeowners ask first: <em>"How much is this going to cost?"</em> The answer depends on how much of the deck is affected, whether structural elements are involved, and what materials are used for the repair.
          </p>
          <p className="text-gray-600 leading-relaxed mt-3">
            At Hero Handyman Pro, we help homeowners throughout{" "}
            <Link href="/gbp/ofallon-il/" className="text-[#ff5b00] hover:underline">O'Fallon</Link>,{" "}
            <Link href="/handyman-belleville-il" className="text-[#ff5b00] hover:underline">Belleville</Link>,{" "}
            <Link href="/gbp/edwardsville-il/" className="text-[#ff5b00] hover:underline">Edwardsville</Link>,{" "}
            <Link href="/service-areas/collinsville-handyman-services/" className="text-[#ff5b00] hover:underline">Collinsville</Link>, and surrounding Metro East communities restore damaged decks safely and professionally.
          </p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-100">
            <div className="w-10 h-10 rounded-full bg-[#0f766e] flex items-center justify-center text-white font-bold text-sm">PG</div>
            <div>
              <p className="font-semibold text-[#0b1220] text-sm">Phil Green</p>
              <p className="text-gray-500 text-xs">Owner &amp; Master Handyman, Hero Handyman Pro · 35+ Years Experience</p>
            </div>
          </div>
        </header>

        {/* Pricing Cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-6">Average Deck Repair Costs in O'Fallon IL</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Here are general deck repair price ranges homeowners commonly see in the Metro East area:
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {pricingCards.map((card) => (
              <div key={card.category} className={`rounded-xl border-2 overflow-hidden ${card.color}`}>
                <div className={`${card.headerColor} text-white px-4 py-3`}>
                  <p className="font-bold text-sm uppercase tracking-wide">{card.category}</p>
                  <p className="text-2xl font-extrabold mt-1">{card.range}</p>
                </div>
                <div className="px-4 py-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Examples</p>
                  <ul className="space-y-1 mb-3">
                    {card.examples.map((ex) => (
                      <li key={ex} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-gray-400 shrink-0 mt-0.5" />
                        {ex}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-500 italic">{card.note}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3">Prices are estimates for Metro East IL in 2026. Actual cost depends on scope, materials, and access. Contact us for a free photo estimate.</p>
        </section>

        {/* What Affects Cost */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">What Affects Deck Repair Costs?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">Several factors influence how much your deck repair will cost.</p>

          <div className="space-y-6">
            <div className="border-l-4 border-[#ff5b00] pl-5">
              <h3 className="text-lg font-bold text-[#0b1220] mb-1">1. Extent of the Damage</h3>
              <p className="text-gray-700 leading-relaxed">A few soft boards cost far less to repair than widespread rot across multiple joists. Early repairs almost always save money compared to waiting.</p>
            </div>

            <div className="border-l-4 border-[#ff5b00] pl-5">
              <h3 className="text-lg font-bold text-[#0b1220] mb-2">2. Structural vs Surface Damage</h3>
              <p className="text-gray-700 leading-relaxed mb-2">Surface board replacement is straightforward. Structural repairs — joists, beams, ledger boards, posts — require more labor and sometimes permits.</p>
              <ul className="space-y-1">
                {["Surface boards: lower cost, faster repair", "Joists and beams: moderate cost, requires inspection", "Ledger board: higher cost, affects deck attachment to home", "Posts and footings: highest cost, structural foundation"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-[#ff5b00] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-l-4 border-[#ff5b00] pl-5">
              <h3 className="text-lg font-bold text-[#0b1220] mb-2">3. Wood Type and Materials</h3>
              <p className="text-gray-700 leading-relaxed mb-2">Pressure-treated lumber is the most affordable option. Composite decking and cedar cost more but last longer. Matching existing materials adds to cost if the original product is discontinued.</p>
            </div>

            <div className="border-l-4 border-[#ff5b00] pl-5">
              <h3 className="text-lg font-bold text-[#0b1220] mb-2">4. Railing Complexity</h3>
              <p className="text-gray-700 leading-relaxed">Simple wood railings are less expensive to repair than cable, glass, or aluminum systems. Railing work that requires matching an existing style adds labor time.</p>
            </div>

            <div className="border-l-4 border-[#ff5b00] pl-5">
              <h3 className="text-lg font-bold text-[#0b1220] mb-2">5. Staining or Sealing After Repair</h3>
              <p className="text-gray-700 leading-relaxed">New boards won't match weathered wood without staining. Adding a full deck stain or seal after repair improves appearance and protects the repair long-term.</p>
            </div>
          </div>
        </section>

        {/* Common Problems */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">Common Deck Problems in O'Fallon Homes</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Many decks throughout O'Fallon, Belleville, and the Metro East area were built in the 1990s and early 2000s. As original pressure-treated lumber reaches the end of its lifespan, we commonly see:
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {[
              "Soft or spongy deck boards",
              "Wobbly or loose railings",
              "Cracked and splitting boards",
              "Stair stringers pulling away",
              "Rot at post bases and beam ends",
              "Ledger board separation from house",
              "Corroded or missing fasteners",
              "Discoloration from moisture and mold"
            ].map((cause) => (
              <div key={cause} className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2 text-sm text-gray-700">
                <AlertTriangle className="h-4 w-4 text-yellow-500 shrink-0" />
                {cause}
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            O'Fallon's freeze-thaw cycles accelerate wood movement and fastener loosening, making annual spring inspections especially important for decks in this area.
          </p>
        </section>

        {/* Repair vs Replacement */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">Repair vs Replacement: How to Decide</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Many homeowners assume a damaged deck needs full replacement. In our experience, targeted repairs extend deck life by 10–15 years in many cases — at a fraction of replacement cost.
          </p>
          <div className="grid md:grid-cols-2 gap-5 mb-4">
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <p className="font-bold text-green-800 mb-3">Repair is usually the right call when:</p>
              <ul className="space-y-2">
                {["Damage is limited to surface boards", "Railings are loose but structurally sound", "Joists are solid with isolated rot spots", "Stairs need stringer repair only", "Less than 30% of boards are affected"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <p className="font-bold text-red-800 mb-3">Replacement may make more sense when:</p>
              <ul className="space-y-2">
                {["Ledger board is rotted or pulling away", "More than 40% of boards are damaged", "Multiple joists have widespread rot", "Posts or footings are compromised", "Repairs have failed repeatedly"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <AlertTriangle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            A professional inspection helps you make the right call. Learn more about our{" "}
            <Link href="/handyman-services/deck-repair/" className="text-[#ff5b00] hover:underline">deck repair service</Link> or our{" "}
            <Link href="/service-areas/drywall-repair-ofallon-il/" className="text-[#ff5b00] hover:underline">O'Fallon deck repair page</Link>.
          </p>
        </section>

        {/* Real Project Example */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">Real Deck Repair Project in O'Fallon</h2>
          <div className="bg-[#0b1220] text-white rounded-xl p-6">
            <p className="text-gray-300 leading-relaxed mb-4">
              Recently, Hero Handyman Pro repaired a rear deck for a homeowner near Regency Park in O'Fallon. The deck had soft spots, a wobbly railing section, and two stair stringers that had begun to separate from the frame.
            </p>
            <p className="text-sm font-semibold text-[#ff5b00] uppercase tracking-wide mb-2">The project included:</p>
            <ul className="space-y-2">
              {["Replacing six rotted deck boards", "Rebuilding one railing section to code", "Reinforcing two joists that had begun to separate", "Repairing both stair stringers", "Finishing with a semi-transparent stain to match the original color"].map((step) => (
                <li key={step} className="flex items-center gap-2 text-sm text-gray-200">
                  <CheckCircle className="h-4 w-4 text-[#0f766e] shrink-0" />
                  {step}
                </li>
              ))}
            </ul>
            <p className="text-gray-300 text-sm mt-4 italic">
              The entire project was completed in two days. The homeowner avoided a full deck replacement by addressing the damage early.
            </p>
          </div>
        </section>

        {/* Warning Signs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">Warning Signs Your Deck Needs Repair Now</h2>
          <p className="text-gray-700 leading-relaxed mb-4">Don't wait until the damage gets worse. Address deck issues promptly if you notice:</p>
          <div className="grid sm:grid-cols-2 gap-3 mb-4">
            {[
              "Soft or spongy boards underfoot",
              "Visible cracks or splits in boards",
              "Wobbly or loose railings",
              "Stairs that flex or bounce",
              "Dark discoloration or mold growth",
              "Gaps widening between boards",
              "Fasteners popping up or rusting",
              "Deck pulling away from the house"
            ].map((sign) => (
              <div key={sign} className="flex items-center gap-2 bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-2 text-sm text-gray-700">
                <AlertTriangle className="h-4 w-4 text-yellow-500 shrink-0" />
                {sign}
              </div>
            ))}
          </div>
          <p className="text-gray-600 leading-relaxed text-sm">
            Deck damage that involves structural elements — joists, beams, ledger boards — can become a safety hazard if left unaddressed. When in doubt, get a professional inspection.
          </p>
        </section>

        {/* Why Choose Hero Handyman Pro */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">Why O'Fallon Homeowners Choose Hero Handyman Pro for Deck Repair</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            With more than 35 years of experience in home repair and carpentry, Hero Handyman Pro brings professional-grade deck repair to O'Fallon homeowners — with honest assessments, upfront pricing, and no pressure to replace when repair is the right answer.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mb-4">
            {[
              "Honest repair vs replace recommendations",
              "Upfront written estimates",
              "Licensed and insured",
              "Veteran-owned and locally operated",
              "Texture and material matching",
              "Same-day and next-day availability"
            ].map((reason) => (
              <div key={reason} className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-3 py-2 text-sm text-gray-700">
                <CheckCircle className="h-4 w-4 text-green-600 shrink-0" />
                {reason}
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-6">Frequently Asked Questions</h2>
          <div className="border border-gray-200 rounded-xl px-6 divide-y divide-gray-100">
            {faqSchema.mainEntity.map((item) => (
              <FAQItem key={item.name} question={item.name} answer={item.acceptedAnswer.text} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12">
          <div className="bg-[#ff5b00] rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Need Deck Repair in O'Fallon IL?</h2>
            <p className="text-white/90 mb-6">
              If your deck has soft boards, loose railings, or structural damage, Hero Handyman Pro is ready to help. Contact us to request an estimate, send photos for a fast quote, or schedule service in O'Fallon or anywhere in the Metro East area.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:800-741-6056">
                <Button size="lg" className="bg-white text-[#ff5b00] hover:bg-gray-100 font-bold w-full sm:w-auto">
                  Call 800-741-6056
                </Button>
              </a>
              <Link href="/contact/">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#ff5b00] font-bold w-full sm:w-auto">
                  Request a Free Estimate
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Inline Quote Form */}
        <section className="mb-12">
          <InlineQuoteForm />
        </section>

        {/* Related Links */}
        <section className="border-t border-gray-200 pt-10">
          <h2 className="text-xl font-bold text-[#0b1220] mb-6">Related Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-sm font-bold text-[#0b1220] uppercase tracking-wide mb-3">Related Services</h3>
              <ul className="space-y-2">
                <li><Link href="/handyman-services/deck-repair/" className="text-[#ff5b00] hover:underline text-sm">Deck Repair &amp; Restoration</Link></li>
                <li><Link href="/service-areas/drywall-repair-ofallon-il/" className="text-[#ff5b00] hover:underline text-sm">Deck Repair in O'Fallon IL</Link></li>
                <li><Link href="/carpentry-services/" className="text-[#ff5b00] hover:underline text-sm">Exterior Carpentry &amp; Wood Rot Repair</Link></li>
                <li><Link href="/handyman-services/fence-repair/" className="text-[#ff5b00] hover:underline text-sm">Fence Repair</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#0b1220] uppercase tracking-wide mb-3">Service Areas</h3>
              <ul className="space-y-2">
                <li><Link href="/gbp/ofallon-il/" className="text-[#ff5b00] hover:underline text-sm">Handyman in O'Fallon, IL</Link></li>
                <li><Link href="/handyman-belleville-il" className="text-[#ff5b00] hover:underline text-sm">Handyman in Belleville, IL</Link></li>
                <li><Link href="/gbp/edwardsville-il/" className="text-[#ff5b00] hover:underline text-sm">Handyman in Edwardsville, IL</Link></li>
                <li><Link href="/service-areas/collinsville-handyman-services/" className="text-[#ff5b00] hover:underline text-sm">Handyman in Collinsville, IL</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#0b1220] uppercase tracking-wide mb-3">Helpful Articles</h3>
              <ul className="space-y-2">
                <li><Link href="/blog/drywall-repair-cost-ofallon-il/" className="text-[#ff5b00] hover:underline text-sm font-medium">Drywall Repair Cost in O'Fallon IL (2026)</Link></li>
                <li><Link href="/blog/door-repair-cost-ofallon-il/" className="text-[#ff5b00] hover:underline text-sm font-medium">Door Repair Cost in O'Fallon IL (2026)</Link></li>
                <li><Link href="/blog/window-repair-cost-ofallon-il/" className="text-[#ff5b00] hover:underline text-sm font-medium">Window Repair Cost in O'Fallon IL (2026)</Link></li>
                <li><Link href="/blog/signs-your-deck-needs-repair/" className="text-[#ff5b00] hover:underline text-sm">5 Signs Your Deck Needs Repair</Link></li>
                <li><Link href="/blog/2026-handyman-costs-metro-east-il/" className="text-[#ff5b00] hover:underline text-sm">2026 Handyman Costs Guide</Link></li>
              </ul>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
