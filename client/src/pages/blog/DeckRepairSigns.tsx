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
  "headline": "5 Signs Your Deck Needs Repair",
  "description": "A practical guide to identifying deck damage before it becomes a safety hazard. Covers soft boards, loose railings, rot, structural issues, and when to repair vs. replace.",
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
    "url": "https://www.herohandymanpro.com"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.herohandymanpro.com/blog/5-signs-deck-needs-repair/"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I know if my deck needs repair or replacement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If the damage is limited to surface boards, railings, or isolated rot, repair is usually the right choice. If the structural framing (joists, beams, ledger board) is significantly rotted or compromised, replacement may be more cost-effective. A professional inspection will give you a clear recommendation."
      }
    },
    {
      "@type": "Question",
      "name": "How much does deck repair cost in Metro East Illinois?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Deck board replacement and minor repairs typically cost $300–$800. Railing repair or replacement runs $200–$600 per section. Full deck restoration with new boards, rails, and staining ranges from $1,200–$2,500+. The cost depends on deck size, wood type, and extent of damage."
      }
    },
    {
      "@type": "Question",
      "name": "Is a deck with soft spots safe to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Soft or spongy deck boards indicate rot, which means the wood has lost its structural integrity. A rotted board can fail suddenly under weight, creating a fall hazard. Stop using the deck until the damaged boards are replaced."
      }
    },
    {
      "@type": "Question",
      "name": "How often should I inspect my deck?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Inspect your deck every spring after winter and every fall before winter. Pay special attention after any severe weather events. Decks over 10 years old should be inspected annually by a professional who can assess the structural framing, not just the surface boards."
      }
    },
    {
      "@type": "Question",
      "name": "What is the ledger board and why does it matter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The ledger board is the horizontal board that attaches your deck to the house. It carries a significant portion of the deck's load. Rot or improper fastening of the ledger board is one of the most common causes of deck collapse. It should be inspected annually and is often hidden behind the deck boards, making professional inspection important."
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

export default function DeckRepairSigns() {
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
              { label: "5 Signs Your Deck Needs Repair" },
            ]}
          />
        </div>
      </div>

      <article className="container py-12 max-w-3xl mx-auto">
        <header className="mb-10">
          <div className="flex items-center gap-2 text-sm text-[#ff5b00] font-semibold uppercase tracking-wider mb-3">
            <span>Deck Repair Guide</span>
            <span>·</span>
            <span>May 12, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0b1220] leading-tight mb-4">
            5 Signs Your Deck Needs Repair (Before It Becomes a Safety Hazard)
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Deck failures are one of the most preventable home accidents. In Metro East Illinois, the combination of hot summers, wet springs, and freeze-thaw winters creates ideal conditions for deck deterioration. Knowing what to look for — and acting early — can save you thousands of dollars and prevent a serious injury. Here are the five warning signs every homeowner should know.
          </p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-100">
            <div className="w-10 h-10 rounded-full bg-[#0f766e] flex items-center justify-center text-white font-bold text-sm">PG</div>
            <div>
              <p className="font-semibold text-[#0b1220] text-sm">Phil Green</p>
              <p className="text-gray-500 text-xs">Owner & Master Handyman, Hero Handyman Pro · 35+ Years Experience</p>
            </div>
          </div>
        </header>

        {/* Sign 1 */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-full bg-[#ff5b00] text-white flex items-center justify-center font-bold text-lg shrink-0">1</span>
            <h2 className="text-2xl font-bold text-[#0b1220]">Soft, Spongy, or Discolored Boards</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            This is the most obvious and most dangerous sign of deck damage. Walk every board on your deck and press down firmly with your foot. A healthy deck board should feel solid and firm. If a board feels soft, spongy, or gives under pressure, it has rot — and rot means the wood has lost its structural integrity.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dark discoloration (gray-black staining) is another indicator of rot or prolonged moisture exposure. Boards that are cracking along the grain, checking (splitting at the ends), or pulling away from the joists below are also signs of deterioration.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            In Metro East Illinois, the most common cause of soft deck boards is the freeze-thaw cycle. Water gets into small cracks in the wood, freezes and expands, widening the crack, and allowing more water in the next cycle. Over several winters, this process can turn a structurally sound board into a rotted one.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
            <p className="text-amber-800 font-semibold text-sm">⚠️ Safety Note: Stop using the deck immediately if you find soft or spongy boards. A rotted board can fail suddenly under weight, creating a serious fall hazard.</p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Individual board replacement is often the right solution when rot is limited to a few boards. Our <Link href="/handyman-services/deck-repair/" className="text-[#ff5b00] hover:underline font-medium">deck repair service</Link> includes board-by-board assessment to identify all damaged areas before starting work.
          </p>
        </section>

        {/* Sign 2 */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-full bg-[#ff5b00] text-white flex items-center justify-center font-bold text-lg shrink-0">2</span>
            <h2 className="text-2xl font-bold text-[#0b1220]">Loose or Wobbly Railings</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Deck railings are a critical safety feature, especially on elevated decks. Stand at the railing and push on it firmly — it should not move. If it wobbles, flexes, or feels unstable, it needs immediate attention. A railing that fails when someone leans against it can result in a serious fall.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Loose railings are usually caused by one of three things: rotted post bases where the post meets the deck surface, loose or corroded fasteners, or rot in the top rail or balusters. The fix depends on the cause — sometimes it's as simple as replacing corroded lag bolts, and sometimes the post base needs to be rebuilt.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Building codes in Illinois require deck railings to withstand a 200-pound lateral load. If your railing doesn't feel like it could handle that, it doesn't meet code — which matters both for safety and for home sale inspections.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We regularly repair and replace deck railings in O'Fallon, Edwardsville, Belleville, and surrounding communities. Railing repair typically costs $200–$600 per section depending on the extent of the damage and the material.
          </p>
        </section>

        {/* Sign 3 */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-full bg-[#ff5b00] text-white flex items-center justify-center font-bold text-lg shrink-0">3</span>
            <h2 className="text-2xl font-bold text-[#0b1220]">Loose or Corroded Fasteners</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Deck fasteners — screws, nails, bolts, and joist hangers — are the connective tissue of your deck. When they corrode or work loose, the deck's structural integrity is compromised even if the wood looks fine. Look for rust staining around fastener heads, screws or nails that have backed out of the wood, and joist hangers that are pulling away from the framing.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Older decks built before modern deck screws were common may have been built with nails, which are more prone to backing out over time. If your deck was built in the 1980s or early 1990s, it's worth having the fasteners assessed — replacing nails with deck screws is a relatively inexpensive upgrade that significantly improves structural integrity.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The ledger board connection — where the deck attaches to the house — deserves special attention. This connection carries a significant portion of the deck's load, and improper or deteriorated fastening here is one of the most common causes of deck collapse. This area is often hidden and requires a professional to assess properly.
          </p>
        </section>

        {/* Sign 4 */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-full bg-[#ff5b00] text-white flex items-center justify-center font-bold text-lg shrink-0">4</span>
            <h2 className="text-2xl font-bold text-[#0b1220]">Rot at the Ledger Board or Post Bases</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            The ledger board and post bases are the two most structurally critical areas of a deck, and they're also the two areas most prone to rot because they're constantly exposed to moisture. The ledger board sits against the house and is often trapped against moisture that can't dry out. Post bases sit on or near the ground where water pools.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ledger board rot is particularly serious because it's often not visible from the surface — you need to look behind the deck boards at the ledger to assess its condition. Signs of ledger board problems include the deck pulling slightly away from the house, water staining on the house siding near the ledger, and soft wood when you probe the ledger with a screwdriver.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Post base rot is more visible — look for dark discoloration at the base of the posts, soft wood when you probe with a screwdriver, and posts that feel unstable when you push on them. In Metro East Illinois, post bases that are set directly in concrete are particularly prone to rot because the concrete holds moisture against the wood.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Ledger board and post base repairs are more involved than surface board replacement, but they're essential for deck safety. If you suspect structural rot, have a professional assess the deck before using it.
          </p>
        </section>

        {/* Sign 5 */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-full bg-[#ff5b00] text-white flex items-center justify-center font-bold text-lg shrink-0">5</span>
            <h2 className="text-2xl font-bold text-[#0b1220]">The Deck Is More Than 10–15 Years Old and Has Never Been Maintained</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Age alone isn't a reason to replace a deck — a well-maintained deck can last 25–30 years. But a deck that has never been sealed, stained, or inspected is a different story. Untreated wood exposed to Metro East Illinois weather for 10–15 years without maintenance is likely to have significant deterioration that isn't visible from the surface.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you've recently purchased a home and don't know the maintenance history of the deck, have it professionally inspected before the summer season. This is especially important for homes built in the 1990s and early 2000s, when many decks were built with standard construction lumber rather than pressure-treated wood — and those decks are now well past their expected service life.
          </p>
          <p className="text-gray-700 leading-relaxed">
            A professional deck inspection takes 30–60 minutes and gives you a clear picture of the deck's condition, what repairs are needed, and whether repair or replacement is the more cost-effective path. We offer deck inspections as part of our <Link href="/handyman-services/" className="text-[#ff5b00] hover:underline font-medium">service packages</Link> for homeowners in O'Fallon, Edwardsville, Belleville, and surrounding communities.
          </p>
        </section>

        {/* Repair vs Replace */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">When to Repair vs. Replace Your Deck</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The decision to repair or replace depends on the extent and location of the damage. As a general rule:
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-4">
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <h3 className="font-bold text-green-800 mb-3">Repair Makes Sense When:</h3>
              <ul className="space-y-2 text-green-700 text-sm">
                <li>• Damage is limited to surface boards</li>
                <li>• Structural framing is sound</li>
                <li>• Railings need tightening or replacement</li>
                <li>• Isolated rot in 1–3 boards</li>
                <li>• Fasteners are loose or corroded</li>
                <li>• Deck is less than 15 years old</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <h3 className="font-bold text-red-800 mb-3">Replacement Makes Sense When:</h3>
              <ul className="space-y-2 text-red-700 text-sm">
                <li>• Structural framing (joists, beams) is rotted</li>
                <li>• Ledger board is compromised</li>
                <li>• More than 40% of boards need replacement</li>
                <li>• Multiple post bases are rotted</li>
                <li>• Deck is 20+ years old with no maintenance history</li>
                <li>• Repair cost exceeds 60% of replacement cost</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            When in doubt, get a professional assessment. We'll give you an honest recommendation — we won't push replacement if repair is the right answer.
          </p>
        </section>

        <div className="bg-[#0b1220] rounded-2xl p-8 text-white text-center mb-10">
          <h2 className="text-2xl font-bold mb-3">Schedule a Deck Inspection or Repair</h2>
          <p className="text-gray-300 mb-6">We serve homeowners throughout O'Fallon, Edwardsville, Belleville, Collinsville, and the Metro East area. Get a free estimate for your deck repair.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:800-741-6056">
              <Button className="bg-[#ff5b00] hover:bg-[#ff5b00]/90 text-white rounded-full px-8 py-6 text-base font-semibold">
                Call 800-741-6056
              </Button>
            </a>
            <Link href="/contact/">
              <Button variant="outline" className="rounded-full px-8 py-6 text-base font-semibold border-2 border-white text-white hover:bg-white/10">
                Request Your Estimate
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
              { label: "Deck Repair Service", href: "/handyman-services/deck-repair/" },
              { label: "Handyman Services in O'Fallon", href: "/gbp/ofallon-il/" },
              { label: "Handyman Services in Edwardsville", href: "/gbp/edwardsville-il/" },
              { label: "Service Packages", href: "/handyman-services/" },
              { label: "Home Repairs After Winter", href: "/blog/common-home-repairs-after-winter-illinois/" },
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
