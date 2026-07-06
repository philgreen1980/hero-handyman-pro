import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star, Wrench, DollarSign, ArrowRight, AlertTriangle } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import SEO from "@/components/SEO";
import InlineQuoteForm from "@/components/InlineQuoteForm";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { trackCTAClick, trackPhoneClick } from "@/lib/analytics";
import LazyProjectGallery from "@/components/LazyProjectGallery";
import type { ProjectPair } from "@/components/ProjectGallery";
import { useSeoRoute } from '@/hooks/useSeoRoute';

const deckProjects: ProjectPair[] = [
  {
    beforeSrc: "/images/deck-before-glencarbonIL.webp",
    afterSrc: "/images/deck-after-glencarbonIL.webp",
    beforeAlt: "Severely rotted deck boards with holes and moss growth – Glen Carbon IL",
    afterAlt: "New pressure-treated deck boards installed with stainless screws – Glen Carbon IL",
    caption: "Deck board replacement",
    city: "Glen Carbon, IL",
  },
  {
    beforeSrc: "/images/carpentry-before-collinsville.webp",
    afterSrc: "/images/carpentry-after-collinsville.webp",
    beforeAlt: "Rotted wooden privacy fence with missing boards – Collinsville IL",
    afterAlt: "New cedar fence boards installed – Collinsville IL",
    caption: "Fence & deck board replacement",
    city: "Collinsville, IL",
  },
];

export default function DeckRepairService() {
  const seo = useSeoRoute();  const processSteps = [
    { num: "1", title: "Free Inspection", desc: "We inspect every board, joist, railing, and fastener. You get a written report with photos before any work begins." },
    { num: "2", title: "Transparent Estimate", desc: "Clear, itemized pricing — you'll know exactly what needs fixing and what it costs before we start." },
    { num: "3", title: "Material Selection", desc: "We help you choose the right lumber or composite materials to match your existing deck and budget." },
    { num: "4", title: "Expert Repairs", desc: "Our crew completes all repairs using quality pressure-treated lumber and stainless or galvanized fasteners." },
    { num: "5", title: "Safety Walkthrough", desc: "We test every railing, step, and board with you before we pack up. Your deck must pass our safety check." },
  ];

  const pricingRanges = [
    { type: "Board Replacement (per board)", range: "$50 – $150", note: "Includes labor and pressure-treated lumber" },
    { type: "Railing Repair / Replacement", range: "$300 – $800", note: "Per section; wood or composite" },
    { type: "Stair Repair", range: "$200 – $600", note: "Stringers, treads, or full stair rebuild" },
    { type: "Joist / Structural Repair", range: "$400 – $1,200+", note: "Depends on extent of rot damage" },
    { type: "Full Deck Resurfacing", range: "$1,500 – $4,500", note: "All boards replaced, railings inspected" },
    { type: "Ledger Board Repair", range: "$500 – $1,500", note: "Critical structural repair — prevents deck collapse" },
  ];

  const faqs = [
    {
      question: "How do I know if my deck needs repair or replacement?",
      answer: "If less than 30% of the structure is damaged, repair is almost always more cost-effective. Warning signs that repair is needed: soft or spongy boards, loose railings, visible rot, large cracks, and wobbly posts. If the ledger board or more than half the joists are rotted, replacement may be the better investment. We'll give you an honest assessment during our free inspection."
    },
    {
      question: "How long does deck repair take?",
      answer: "Board replacements and railing repairs typically take 1 day. Structural repairs or full resurfacing take 2–4 days. We'll give you a firm timeline before we start so you can plan accordingly."
    },
    {
      question: "How much does deck repair cost in St. Louis?",
      answer: "Simple board replacements start around $50–$150 per board. Railing repairs run $300–$800 per section. Full deck resurfacing ranges from $1,500–$4,500 depending on deck size. Structural repairs vary widely based on the extent of rot. We provide a detailed written estimate before any work begins."
    },
    {
      question: "What type of wood do you use for deck repairs?",
      answer: "We primarily use pressure-treated pine (ACQ or CA-C treated) for structural members and decking boards — the industry standard for outdoor use in the St. Louis climate. We can also work with cedar, redwood, or composite decking if you prefer to match your existing material or upgrade."
    },
    {
      question: "Can you match my existing deck boards?",
      answer: "We do our best to match your existing decking material in species, profile, and dimension. Exact color matches are difficult with weathered wood, but we can stain or seal the new boards to blend. For a fully uniform look, we can resurface the entire deck at the same time."
    },
    {
      question: "What's the best time of year for deck repairs?",
      answer: "Spring and fall are ideal — moderate temperatures help lumber and sealants cure properly. However, we perform deck repairs year-round in St. Louis. If your deck has safety concerns (loose railings, soft boards), don't wait for the right season — call us now."
    },
    {
      question: "Do you repair composite decks?",
      answer: "Yes. We repair and replace composite decking boards from most major brands including Trex, TimberTech, and Fiberon. We'll source matching materials when possible, or recommend the closest available option."
    },
    {
      question: "Can you fix a deck that failed a home inspection?",
      answer: "Absolutely — this is one of our most common calls. We can repair specific items flagged in a home inspection report (loose railings, rotted boards, improper ledger attachment) quickly, often within 1–2 days, to help keep your real estate transaction on track."
    },
  ];

  return (
    <div className="flex flex-col">
      <PageBreadcrumb crumbs={[
    { label: "Home", href: "/" },
    { label: "Services", href: "/handyman-services/" },
    { label: "Deck Repair" }
  ]} />
      <SEO {...seo} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white py-16 md:py-24 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#ff5b00] text-sm font-bold uppercase tracking-widest mb-4 block">Deck Repair</span>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Professional Deck Repair &amp; Staining
              </h1>
              <p className="text-[#e5e7eb] text-lg mb-6">
                Rotted boards, loose railings, damaged stairs, and structural repairs — fixed right the first time. Serving St. Louis, Edwardsville, O'Fallon, and all of Metro East IL.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Free Inspection", "Written Estimate", "Licensed & Insured", "30+ Years Experience"].map((badge) => (
                  <span key={badge} className="bg-white/10 text-white text-sm px-3 py-1.5 rounded-full font-medium">{badge}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/#contact" onClick={() => trackCTAClick('Get Free Quote in 24 Hours', 'Deck Repair Hero Section')}>
                  <Button className="bg-[#ff5b00] hover:bg-[#ff5b00]/90 text-white rounded-full px-8 py-6 text-base font-bold shadow-lg shadow-[#ff5b00]/30">
                    Get Free Quote in 24 Hours
                  </Button>
                </Link>
                <a href="tel:800-741-6056" onClick={() => trackPhoneClick('800-741-6056', 'Deck Repair Hero Section')}>
                  <Button variant="outline" className="rounded-full px-8 py-6 text-base font-semibold border-2 border-white text-white hover:bg-white/10 flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    800-741-6056
                  </Button>
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-[#ff5b00] text-[#ff5b00]" />)}
                  </div>
                  <span className="text-white font-semibold">4.9 · 127+ Reviews</span>
                </div>
                {[
                  "Free safety inspection with every estimate",
                  "Pressure-treated lumber & quality fasteners",
                  "Same-day or next-day appointments available",
                  "Serving St. Louis & Metro East IL",
                  "Structural repairs & full resurfacing",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 mb-3">
                    <Check className="h-5 w-5 text-[#ff5b00] flex-shrink-0" />
                    <span className="text-[#e5e7eb]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Repair */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b1220] mb-4">Deck Repair St. Louis — What We Fix</h2>
            <p className="text-[#4b5563] text-lg max-w-2xl mx-auto">From single board replacements to full structural rebuilds, we handle every type of deck repair in St. Louis and Metro East.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Decking Surface", items: ["Rotted or soft deck boards", "Cracked or splintered planks", "Cupped or warped boards", "Full deck resurfacing"] },
              { title: "Railings & Stairs", items: ["Loose or wobbly railings", "Damaged balusters/spindles", "Rotted stair stringers", "Broken or unsafe treads"] },
              { title: "Structure & Framing", items: ["Rotted joists or beams", "Ledger board repair", "Post base replacement", "Improper flashing correction"] },
            ].map((cat, i) => (
              <div key={i} className="bg-[#f9fafb] rounded-2xl p-6 border border-[#e5e7eb]">
                <div className="bg-[#ff5b00]/10 rounded-full p-3 w-fit mb-4">
                  <Wrench className="h-6 w-6 text-[#ff5b00]" />
                </div>
                <h3 className="text-xl font-bold text-[#0b1220] mb-3">{cat.title}</h3>
                <ul className="space-y-2">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-[#4b5563]">
                      <Check className="h-4 w-4 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-6 flex items-start gap-4">
            <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-amber-900 mb-1">Don't Ignore Deck Rot</h3>
              <p className="text-amber-800 text-sm">A small soft spot today can become a structural failure in one season. In the St. Louis climate, freeze-thaw cycles accelerate wood rot rapidly. Early repair costs a fraction of full replacement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b1220] mb-4">Our Deck Repair Process</h2>
            <p className="text-[#4b5563] text-lg max-w-2xl mx-auto">From free inspection to final safety walkthrough — here's exactly how we work.</p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {processSteps.map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e5e7eb] h-full text-center">
                  <div className="bg-[#ff5b00] text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-[#0b1220] mb-2">{step.title}</h3>
                  <p className="text-[#4b5563] text-sm">{step.desc}</p>
                </div>
                {i < processSteps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-2 z-10 items-center justify-center">
                    <ArrowRight className="h-4 w-4 text-[#ff5b00]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Ranges */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b1220] mb-4">Deck Repair Cost in St. Louis</h2>
            <p className="text-[#4b5563] text-lg max-w-2xl mx-auto">
              Upfront pricing — no guesswork. These ranges reflect typical deck repair projects in the St. Louis and Metro East area.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {pricingRanges.map((item, i) => (
              <div key={i} className="bg-[#f9fafb] rounded-2xl p-6 border border-[#e5e7eb]">
                <div className="flex items-start gap-3">
                  <div className="bg-[#ff5b00]/10 rounded-full p-2 mt-0.5">
                    <DollarSign className="h-5 w-5 text-[#ff5b00]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0b1220] mb-1">{item.type}</h3>
                    <p className="text-[#ff5b00] font-bold text-lg mb-1">{item.range}</p>
                    <p className="text-[#6b7280] text-sm">{item.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-[#4b5563] text-sm">
            * Prices are estimates. Final price confirmed in writing before work begins. Materials and complexity affect final cost.
          </p>
        </div>
      </section>

      {/* Inline Quote Form */}
      <section className="py-16 px-6 bg-[#0b1220]">
        <div className="max-w-[600px] mx-auto">
          <InlineQuoteForm
            service="Deck Repair"
            heading="Get Your Free Deck Repair Quote"
            subheading="Tell us about your deck and we'll respond within 24 hours with a clear, upfront estimate. Free inspection included."
          />
        </div>
      </section>

      {/* Before/After Project Gallery */}
      <LazyProjectGallery
        projects={deckProjects}
        title="Recent Deck Projects in Your Area"
        subtitle="Before-and-after results from deck and fence repairs across St. Louis & Metro East."
      />

      {/* Testimonials */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0b1220] mb-2">What Homeowners Are Saying</h2>
            <div className="flex items-center justify-center gap-2 text-[#ff5b00]">
              {[...Array(5)].map((_, j) => <Star key={j} className="h-5 w-5 fill-[#ff5b00]" />)}
              <span className="text-[#4b5563] ml-2">4.9 average · 127+ reviews</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { text: "Our deck had severe rot damage. Hero Handyman replaced the damaged joists and boards for $2,800 — far less than the $15,000 replacement quote we got elsewhere.", author: "Mark T., Edwardsville IL" },
              { text: "Deck boards were soft and the railing was wobbly. They assessed the whole structure, replaced what needed replacing, and didn't try to upsell me. Fair pricing, great result.", author: "Chris B., O'Fallon IL" },
              { text: "Failed a home inspection for loose railings. Hero Handyman came out next day, fixed everything, and we closed on time. Lifesavers.", author: "Sarah L., St. Louis MO" },
            ].map((t, i) => (
              <div key={i} className="bg-[#f9fafb] rounded-2xl p-6 border border-[#e5e7eb]">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-[#ff5b00] text-[#ff5b00]" />)}
                </div>
                <p className="text-[#374151] italic mb-4">"{t.text}"</p>
                <p className="text-[#6b7280] text-sm font-semibold">— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b1220] mb-4">Deck Repair FAQs</h2>
            <p className="text-[#4b5563]">Common questions from St. Louis and Metro East homeowners about deck repair.</p>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Deck Repairs, Not Full New Builds */}
      <section className="py-14 px-6 bg-[#f9fafb] border-t border-[#e5e7eb]">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0b1220] mb-4">Deck Repairs, Not Full New Builds</h2>
          <p className="text-[#4b5563] text-lg leading-relaxed">
            We focus on practical deck repair and maintenance projects such as replacing damaged boards, repairing loose railings, fixing wood rot, staining, sealing, and helping homeowners keep their decks safe and usable. Small jobs welcome — you don't need a full rebuild to get a safe, attractive deck again.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {["Board replacement", "Railing repair", "Wood rot repair", "Deck staining", "Deck sealing", "Stair repair", "Deck maintenance", "Small deck projects"].map((tag) => (
              <span key={tag} className="bg-white border border-[#e5e7eb] text-[#374151] text-sm font-medium px-4 py-2 rounded-full">{tag}</span>
            ))}
          </div>
          <div className="mt-8 bg-white border border-[#e5e7eb] rounded-2xl p-6">
            <p className="text-[#374151] font-medium mb-2">Have a small repair or punch-list project?</p>
            <p className="text-[#4b5563] mb-4">Call Hero Handyman Pro at <a href="tel:800-741-6056" className="text-[#ff5b00] font-bold hover:underline">800-741-6056</a> or request a free quote below.</p>
            <Link href="/#contact">
              <Button className="bg-[#ff5b00] hover:bg-[#ff5b00]/90 text-white rounded-full px-6 py-3 font-bold">
                Request a Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Deck Staining & Restoration Section */}
      <section className="py-16 px-6 bg-white border-t border-[#e5e7eb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#ff5b00] text-sm font-bold uppercase tracking-widest mb-3 block">Staining & Sealing</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0b1220] mb-4">Deck Staining & Restoration in St. Louis</h2>
              <p className="text-[#4b5563] text-lg mb-4">
                A fresh stain or sealant does more than improve curb appeal — it protects your investment. In the St. Louis and Metro East climate, UV exposure, humidity, and freeze-thaw cycles break down unprotected wood fast. We recommend restaining every 2–3 years.
              </p>
              <p className="text-[#4b5563] mb-6">
                We clean, sand, and prep the surface before applying a premium penetrating stain or solid color sealant. The result is a deck that looks great and is protected against the elements for years to come.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  "Deck cleaning & prep",
                  "Penetrating oil stains",
                  "Solid color sealants",
                  "Semi-transparent stains",
                  "Deck brightening",
                  "UV & weather protection",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-[#374151] text-sm">
                    <Check className="h-4 w-4 text-[#ff5b00] flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-[#6b7280] text-sm italic">Staining cost: $2–$4 per sq ft depending on prep work needed. A 300 sq ft deck typically runs $600–$1,200 fully prepped and stained.</p>
            </div>
            <div className="bg-[#f9fafb] rounded-2xl p-8 border border-[#e5e7eb]">
              <h3 className="text-xl font-bold text-[#0b1220] mb-4">Signs Your Deck Needs Staining</h3>
              <div className="space-y-3">
                {[
                  { sign: "Water no longer beads on the surface", detail: "When water soaks in instead of beading, the sealant is gone and wood is absorbing moisture." },
                  { sign: "Gray or silver color on wood", detail: "Unprotected wood oxidizes and turns gray. This is surface weathering — often reversible with cleaning and brightening." },
                  { sign: "Peeling or flaking old stain", detail: "Old film-forming stains peel when they fail. Requires stripping before recoating." },
                  { sign: "Soft or spongy spots", detail: "If you can press a screwdriver into the wood, rot has started. Repair first, then stain." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 p-3 bg-white rounded-xl border border-[#e5e7eb]">
                    <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#0b1220] text-sm">{item.sign}</p>
                      <p className="text-[#6b7280] text-xs mt-0.5">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Authority Section */}
      <section className="py-14 px-6 bg-[#0b1220] text-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Deck Repair Across Metro East & St. Louis</h2>
              <p className="text-[#e5e7eb] mb-4">
                We've repaired decks in O'Fallon, Edwardsville, Belleville, Glen Carbon, Collinsville, Chesterfield, Ballwin, and dozens of other communities across the St. Louis metro area. Most of our deck repair calls come from homeowners with wood decks built in the 1990s and 2000s that are showing their age.
              </p>
              <p className="text-[#e5e7eb] mb-4">
                The St. Louis climate is hard on wood decks. Hot, humid summers cause boards to swell and check. Cold winters cause freeze-thaw cycles that split wood and loosen fasteners. If your deck is 10+ years old and hasn't been maintained, there's a good chance it needs at least a few boards replaced and a fresh stain.
              </p>
              <p className="text-[#9ca3af] text-sm">
                We work on all deck types: pressure-treated pine, cedar, redwood, Trex, TimberTech, and Fiberon composite. Ground-level decks, elevated decks, wraparound decks, and pool decks.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#ff5b00]">Helpful Resources</h3>
              <div className="space-y-3">
                <Link href="/blog/deck-repair-cost-ofallon-il/" className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-colors">
                  <DollarSign className="h-5 w-5 text-[#ff5b00] flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white text-sm">Deck Repair Cost Guide — O'Fallon IL</p>
                    <p className="text-[#9ca3af] text-xs">Typical prices, real project examples, and what affects cost</p>
                  </div>
                </Link>
                <Link href="/handyman-services/deck-construction/" className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-colors">
                  <Wrench className="h-5 w-5 text-[#ff5b00] flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white text-sm">New Deck Construction</p>
                    <p className="text-[#9ca3af] text-xs">When repair isn't enough — we build new decks too</p>
                  </div>
                </Link>
                <Link href="/handyman-pricing/" className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-colors">
                  <DollarSign className="h-5 w-5 text-[#ff5b00] flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white text-sm">Full Handyman Pricing Guide</p>
                    <p className="text-[#9ca3af] text-xs">Transparent pricing for all services</p>
                  </div>
                </Link>
                <Link href="/gbp/ofallon-il/" className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-colors">
                  <Star className="h-5 w-5 text-[#ff5b00] flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white text-sm">O'Fallon IL Handyman Services</p>
                    <p className="text-[#9ca3af] text-xs">Local service page for O'Fallon and Metro East</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Links */}
      <section className="py-16 px-6 bg-white border-t border-[#e5e7eb]">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">Deck Repair Near You</h2>
          <p className="text-[#4b5563] mb-6">We serve all of St. Louis and Metro East Illinois. Find your city below.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Edwardsville, IL", href: "/deck-repair-edwardsville-il" },
              { name: "O'Fallon, IL", href: "/deck-repair-ofallon-il" },
              { name: "Belleville, IL", href: "/deck-repair-belleville-il" },
              { name: "Collinsville, IL", href: "/deck-repair-collinsville-il" },
              { name: "Glen Carbon, IL", href: "/deck-repair-glen-carbon-il" },
              { name: "St. Charles, MO", href: "/deck-repair-st-charles-mo" },
              { name: "Chesterfield, MO", href: "/deck-repair-chesterfield-mo" },
              { name: "Ballwin, MO", href: "/deck-repair-ballwin-mo" },
            ].map((area) => (
              <Link key={area.name} href={area.href}>
                <Button variant="outline" className="rounded-full border-[#e5e7eb] hover:border-[#ff5b00] hover:text-[#ff5b00]">
                  {area.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        }))
      }) }} />
    </div>
  );
}
