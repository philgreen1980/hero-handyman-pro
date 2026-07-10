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
  "headline": "How Much Does Window Repair Cost in O'Fallon IL?",
  "description": "Window repair cost guide for O'Fallon, IL homeowners. Covers foggy glass, failed seals, broken hardware, sash replacement, and full window replacement — with local pricing and real project examples.",
  "datePublished": "2026-05-31",
  "dateModified": "2026-05-31",
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
    "@id": "https://www.herohandymanpro.com/blog/window-repair-cost-ofallon-il/"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does window repair cost in O'Fallon, IL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Window repair in O'Fallon typically ranges from $75–$250 for minor fixes (broken locks, hardware replacement, weatherstripping, balance repairs), $200–$600 for glass-related repairs (seal failure, foggy glass, cracked pane replacement), $400–$900 for sash or frame repair, and $500–$1,500+ per window for full single-window replacement. Whole-house window replacement is a separate larger project."
      }
    },
    {
      "@type": "Question",
      "name": "Why are my windows foggy or cloudy in O'Fallon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Foggy or cloudy windows are caused by failed insulated glass unit (IGU) seals. When the seal between the double or triple pane glass breaks down, moisture enters the air gap and condenses on the inner glass surfaces. This is extremely common in O'Fallon homes built in the 1990s–2010s, as original IGU seals typically last 15–25 years. The fix is replacing the glass unit — not necessarily the entire window frame."
      }
    },
    {
      "@type": "Question",
      "name": "Is it cheaper to repair or replace a window?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Repair is almost always cheaper for functional issues like broken hardware, failed weatherstripping, or a single foggy pane. Glass unit replacement (without replacing the frame) typically runs $200–$500 per window — far less than full window replacement at $500–$1,500+. Full replacement makes sense when the frame is rotted, the window is severely damaged, or you want to upgrade to higher-efficiency glass."
      }
    },
    {
      "@type": "Question",
      "name": "How long does window repair take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most window repairs take 1–3 hours per window. Hardware fixes and weatherstripping replacement are typically done in under an hour. Glass unit replacement takes 1–2 hours once the new unit arrives. Full window replacement (frame and all) takes 2–4 hours per window depending on size and access."
      }
    },
    {
      "@type": "Question",
      "name": "What are signs my window needs repair?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Common warning signs include: foggy or cloudy glass between panes, drafts near closed windows, difficulty opening or closing the window, visible rot or soft wood in the frame, condensation on the interior glass in winter, cracked or broken glass, and windows that won't stay open or closed. Drafts and condensation are especially important to address before winter in Metro East IL."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer same-day window repair in O'Fallon, IL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. For urgent window issues — especially broken glass or windows that won't close and lock — we prioritize same-day or next-day service in O'Fallon and throughout Metro East IL. Hardware fixes and weatherstripping repairs can usually be done same-day. Glass unit replacements require ordering the new unit first, which typically takes a few days. Call us at 800-741-6056 to check current availability."
      }
    }
  ]
};

const pricingCards = [
  {
    category: "Minor Repairs",
    range: "$75–$250",
    color: "bg-green-50 border-green-200",
    headerColor: "bg-green-600",
    examples: ["Broken lock or latch", "Balance/spring replacement", "Weatherstripping replacement", "Caulk and seal refresh"],
    note: "Quick repairs that restore function and energy efficiency without glass work.",
  },
  {
    category: "Glass & Seal Repairs",
    range: "$200–$600",
    color: "bg-yellow-50 border-yellow-200",
    headerColor: "bg-yellow-600",
    examples: ["Foggy/failed IGU seal replacement", "Single cracked pane replacement", "Double-pane glass unit swap", "Condensation between panes fix"],
    note: "Glass unit replacement preserves the existing frame and is far less expensive than full window replacement.",
  },
  {
    category: "Sash, Frame & Full Replacement",
    range: "$400–$1,500+",
    color: "bg-red-50 border-red-200",
    headerColor: "bg-red-600",
    examples: ["Sash replacement (single window)", "Rotted frame repair or rebuild", "Full single window replacement", "Egress window upgrade"],
    note: "Full replacement is warranted when the frame is structurally compromised or the window is beyond repair.",
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

export default function WindowRepairCostOFallon() {
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
              { label: "Window Repair Cost in O'Fallon IL" },
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
            <span>May 31, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0b1220] leading-tight mb-4">
            How Much Does Window Repair Cost in O'Fallon IL?
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Foggy glass, drafty frames, broken locks, and windows that stick or won't stay open — window problems are among the most common repair calls we receive from homeowners throughout O'Fallon and the Metro East area. And unlike many home repairs, window issues tend to compound: a failed seal leads to condensation, condensation leads to mold, and a sticky window becomes a security risk.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mt-3">
            The most common question homeowners ask first: <em>"How much is this going to cost?"</em> The answer depends on what's actually wrong — whether it's a hardware issue, a failed glass seal, a damaged sash, or a frame that needs full replacement.
          </p>
          <p className="text-gray-600 leading-relaxed mt-3">
            At Hero Handyman Pro, we help homeowners throughout{" "}
            <Link href="/gbp/ofallon-il/" className="text-[#ff5b00] hover:underline">O'Fallon</Link>,{" "}
            <Link href="/handyman-belleville-il" className="text-[#ff5b00] hover:underline">Belleville</Link>,{" "}
            <Link href="/gbp/edwardsville-il/" className="text-[#ff5b00] hover:underline">Edwardsville</Link>,{" "}
            <Link href="/service-areas/collinsville-handyman-services/" className="text-[#ff5b00] hover:underline">Collinsville</Link>, and surrounding Metro East communities repair and replace windows efficiently — without unnecessary upselling to full replacement when targeted repairs will do the job.
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
          <h2 className="text-2xl font-bold text-[#0b1220] mb-6">Average Window Repair Costs in O'Fallon IL</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Here are general window repair price ranges homeowners commonly see in the Metro East area:
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
          <p className="text-xs text-gray-400 mt-3">Prices are estimates for Metro East IL in 2026. Actual cost depends on window size, type, and scope. Contact us for a free photo estimate.</p>
        </section>

        {/* What Affects Cost */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">What Affects Window Repair Costs?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">Several factors influence how much your window repair will cost in O'Fallon and Metro East IL.</p>

          <div className="space-y-6">
            <div className="border-l-4 border-[#ff5b00] pl-5">
              <h3 className="text-lg font-bold text-[#0b1220] mb-1">1. Type of Problem</h3>
              <p className="text-gray-700 leading-relaxed">Hardware issues (broken locks, worn balances, failed weatherstripping) are the least expensive repairs. Failed glass seals and foggy panes are mid-range. Rotted frames or full window replacement are the most expensive. Accurate diagnosis is the first step to an accurate estimate.</p>
            </div>

            <div className="border-l-4 border-[#ff5b00] pl-5">
              <h3 className="text-lg font-bold text-[#0b1220] mb-2">2. Window Type and Size</h3>
              <p className="text-gray-700 leading-relaxed mb-2">Double-hung windows are the most common in O'Fallon homes and the easiest to repair. Casement, sliding, and specialty windows require different hardware and more labor. Larger windows cost more to repair or replace due to glass weight and frame complexity.</p>
              <ul className="space-y-1">
                {[
                  "Double-hung: most common, easiest to service",
                  "Casement: crank mechanisms add repair complexity",
                  "Sliding: track and roller wear is common",
                  "Picture/fixed: glass replacement only (no moving parts)",
                  "Egress: code requirements add cost for basement windows"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-[#ff5b00] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-l-4 border-[#ff5b00] pl-5">
              <h3 className="text-lg font-bold text-[#0b1220] mb-2">3. Frame Material</h3>
              <p className="text-gray-700 leading-relaxed">Vinyl frames (most common in O'Fallon homes built after 1990) are durable and low-maintenance but can crack in extreme cold. Wood frames are repairable but prone to rot and paint failure. Aluminum frames are common in older homes and can be repaired but conduct cold poorly. Frame material affects both repair approach and cost.</p>
            </div>

            <div className="border-l-4 border-[#ff5b00] pl-5">
              <h3 className="text-lg font-bold text-[#0b1220] mb-2">4. Glass Type and Pane Count</h3>
              <p className="text-gray-700 leading-relaxed">Single-pane glass is the least expensive to replace but offers poor energy efficiency. Double-pane insulated glass units (IGUs) are standard in most O'Fallon homes and cost more to replace but provide significant energy savings. Triple-pane glass is the most expensive option and is typically only warranted for extreme energy efficiency upgrades.</p>
            </div>

            <div className="border-l-4 border-[#ff5b00] pl-5">
              <h3 className="text-lg font-bold text-[#0b1220] mb-2">5. Frame Rot or Water Damage</h3>
              <p className="text-gray-700 leading-relaxed">Wood rot in window frames is common in O'Fallon homes where original caulking has failed or gutters have overflowed repeatedly. Minor rot can be treated and filled; extensive rot requires frame replacement. Catching rot early dramatically reduces repair cost — a $150 caulk-and-seal job can prevent a $600+ frame repair later.</p>
            </div>
          </div>
        </section>

        {/* Common Window Problems in O'Fallon */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">Common Window Problems in O'Fallon Homes</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Many homes throughout O'Fallon, Belleville, and the Metro East area were built between the 1980s and 2010s with double-pane vinyl windows. As those windows age, we commonly see:
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {[
              "Foggy or cloudy glass between panes",
              "Drafts around closed windows",
              "Windows that stick or won't open",
              "Broken or worn balance springs",
              "Failed or cracked weatherstripping",
              "Broken locks, latches, or cranks",
              "Condensation on interior glass in winter",
              "Rot at the sill or bottom of the frame"
            ].map((cause) => (
              <div key={cause} className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2 text-sm text-gray-700">
                <AlertTriangle className="h-4 w-4 text-yellow-500 shrink-0" />
                {cause}
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            O'Fallon's hot, humid summers and cold winters create significant thermal stress on window seals and frames. Windows on south- and west-facing walls see the most UV and heat exposure and tend to fail first.
          </p>
        </section>

        {/* Repair vs Replacement */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">Repair vs Replacement: How to Decide</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Many homeowners assume foggy or drafty windows need full replacement. In most cases, targeted repairs — glass unit replacement, hardware fixes, or weatherstripping — restore window performance at a fraction of replacement cost.
          </p>
          <div className="grid md:grid-cols-2 gap-5 mb-4">
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <p className="font-bold text-green-800 mb-3">Repair is usually the right call when:</p>
              <ul className="space-y-2">
                {[
                  "Only the glass seal has failed (frame is solid)",
                  "Hardware is broken but frame is intact",
                  "Weatherstripping is worn but window is otherwise sound",
                  "A single pane is cracked (not the full unit)",
                  "Minor rot is limited to the sill or exterior trim"
                ].map((item) => (
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
                {[
                  "Frame is rotted through or structurally compromised",
                  "Window is single-pane and energy upgrade is a priority",
                  "Multiple components have failed simultaneously",
                  "Window style is discontinued and parts unavailable",
                  "Egress code compliance requires a larger opening"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <AlertTriangle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            A professional assessment helps you make the right call. Learn more about our{" "}
            <Link href="/services/window-installation" className="text-[#ff5b00] hover:underline">window repair and installation service</Link>.
          </p>
        </section>

        {/* Real Project Example */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">Real Window Repair Project in O'Fallon</h2>
          <div className="bg-[#0b1220] text-white rounded-xl p-6">
            <p className="text-gray-300 leading-relaxed mb-4">
              Recently, Hero Handyman Pro helped a homeowner in O'Fallon's Hartmann Estates neighborhood address three windows that had become foggy and one that would no longer stay open. The home was built in 2001 with original double-pane vinyl windows.
            </p>
            <p className="text-sm font-semibold text-[#ff5b00] uppercase tracking-wide mb-2">The project included:</p>
            <ul className="space-y-2">
              {[
                "Replacing three failed insulated glass units (IGUs) — foggy panes cleared immediately",
                "Replacing two worn balance springs on the window that wouldn't stay open",
                "Refreshing weatherstripping on two additional windows showing early draft issues",
                "Resealing exterior caulk around all four windows to prevent future moisture intrusion"
              ].map((step) => (
                <li key={step} className="flex items-center gap-2 text-sm text-gray-200">
                  <CheckCircle className="h-4 w-4 text-[#0f766e] shrink-0" />
                  {step}
                </li>
              ))}
            </ul>
            <div className="mt-5 pt-4 border-t border-white/10">
              <p className="text-sm font-semibold text-[#ff5b00] uppercase tracking-wide mb-2">Project Cost Breakdown</p>
              <div className="grid sm:grid-cols-2 gap-2 text-sm text-gray-300">
                {[
                  ["3 IGU replacements", "$480"],
                  ["2 balance spring replacements", "$110"],
                  ["Weatherstripping (2 windows)", "$90"],
                  ["Exterior caulk and seal", "$75"],
                  ["Total", "$755"],
                ].map(([item, cost]) => (
                  <div key={item} className={`flex justify-between px-3 py-1.5 rounded ${item === "Total" ? "bg-white/10 font-bold text-white" : ""}`}>
                    <span>{item}</span>
                    <span>{cost}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-gray-300 text-sm mt-4 italic">
              The homeowner avoided replacing all four windows (estimated at $3,200–$4,800) by addressing only the failed components. The repairs were completed in one day.
            </p>
          </div>
        </section>

        {/* Warning Signs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">Warning Signs Your Windows Need Repair Now</h2>
          <p className="text-gray-700 leading-relaxed mb-4">Don't wait until the damage gets worse. Address window issues promptly if you notice:</p>
          <div className="grid sm:grid-cols-2 gap-3 mb-4">
            {[
              "Foggy or hazy glass that won't wipe clean",
              "Drafts near closed, locked windows",
              "Condensation on the inside of the glass in winter",
              "Windows that stick, bind, or won't stay open",
              "Visible rot or soft wood at the sill or frame",
              "Broken or loose locks and latches",
              "Cracked or chipped glass panes",
              "Gaps in caulk or weatherstripping"
            ].map((sign) => (
              <div key={sign} className="flex items-center gap-2 bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-2 text-sm text-gray-700">
                <AlertTriangle className="h-4 w-4 text-yellow-500 shrink-0" />
                {sign}
              </div>
            ))}
          </div>
          <p className="text-gray-600 leading-relaxed text-sm">
            Drafts and failed seals are especially important to address before winter in Metro East IL. A single drafty window can noticeably increase heating costs and create condensation problems that lead to mold.
          </p>
        </section>

        {/* Why Choose Hero Handyman Pro */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">Why O'Fallon Homeowners Choose Hero Handyman Pro for Window Repair</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            With more than 35 years of experience in home repair, Hero Handyman Pro brings professional window repair to O'Fallon homeowners — with honest assessments, upfront pricing, and no pressure to replace when repair is the right answer.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mb-4">
            {[
              "Honest repair vs replace recommendations",
              "Upfront written estimates",
              "Licensed and insured",
              "Veteran-owned and locally operated",
              "Glass unit ordering and installation",
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
            <h2 className="text-2xl font-bold mb-3">Need Window Repair in O'Fallon IL?</h2>
            <p className="text-white/90 mb-6">
              If your windows are foggy, drafty, or not working properly, Hero Handyman Pro is ready to help. Contact us to request an estimate, send photos for a fast quote, or schedule service in O'Fallon or anywhere in the Metro East area.
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
          <InlineQuoteForm
            heading="Ready to Fix Your Windows?"
            subheading="Submit your details and we'll follow up within 24 hours with a written estimate."
            service="Window Repair"
          />
        </section>

        {/* Related Links */}
        <section className="border-t border-gray-200 pt-10">
          <h2 className="text-xl font-bold text-[#0b1220] mb-6">Related Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-sm font-bold text-[#0b1220] uppercase tracking-wide mb-3">Related Services</h3>
              <ul className="space-y-2">
                <li><Link href="/services/window-installation" className="text-[#ff5b00] hover:underline text-sm">Door &amp; Window Repair Service</Link></li>
                <li><Link href="/carpentry-services/" className="text-[#ff5b00] hover:underline text-sm">Exterior Carpentry &amp; Wood Rot Repair</Link></li>
                <li><Link href="/handyman-services/home-repair-services/" className="text-[#ff5b00] hover:underline text-sm">Home Repair &amp; Punch Lists</Link></li>
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
                <li><Link href="/blog/deck-repair-cost-ofallon-il/" className="text-[#ff5b00] hover:underline text-sm font-medium">Deck Repair Cost in O'Fallon IL (2026)</Link></li>
                <li><Link href="/blog/door-repair-cost-ofallon-il/" className="text-[#ff5b00] hover:underline text-sm font-medium">Door Repair Cost in O'Fallon IL (2026)</Link></li>
                <li><Link href="/blog/2026-handyman-costs-metro-east-il/" className="text-[#ff5b00] hover:underline text-sm">2026 Handyman Costs Guide</Link></li>
              </ul>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
