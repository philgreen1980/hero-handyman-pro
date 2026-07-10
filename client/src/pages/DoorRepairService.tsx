import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star, Wrench, DollarSign, ArrowRight } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import SEO from "@/components/SEO";
import InlineQuoteForm from "@/components/InlineQuoteForm";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { trackCTAClick, trackPhoneClick } from "@/lib/analytics";
import LazyProjectGallery from "@/components/LazyProjectGallery";
import type { ProjectPair } from "@/components/ProjectGallery";
import { useSeoRoute } from '@/hooks/useSeoRoute';

const doorProjects: ProjectPair[] = [
  {
    beforeSrc: "/images/door-before-stcharles.webp",
    afterSrc: "/images/door-after-stcharles.webp",
    beforeAlt: "Old damaged front door with peeling paint and torn weatherstripping – St. Charles MO",
    afterAlt: "New navy blue fiberglass front door with sidelights installed – St. Charles MO",
    caption: "Front door replacement",
    city: "St. Charles, MO",
  },
  {
    beforeSrc: "/images/carpentry-before-belleville.webp",
    afterSrc: "/images/carpentry-after-belleville.webp",
    beforeAlt: "Damaged door casing trim with peeling paint – Belleville IL",
    afterAlt: "Freshly repaired and painted door casing trim – Belleville IL",
    caption: "Door casing & trim repair",
    city: "Belleville, IL",
  },
];

export default function DoorRepairService() {
  const seo = useSeoRoute();  const processSteps = [
    { num: "1", title: "Diagnosis", desc: "We assess the door, frame, hinges, and weatherstripping to identify the root cause — not just the symptom." },
    { num: "2", title: "Clear Estimate", desc: "You receive a written, itemized estimate before any work begins. No surprises." },
    { num: "3", title: "Material Sourcing", desc: "We source the right door, hardware, or parts — or work with what you've already purchased." },
    { num: "4", title: "Installation / Repair", desc: "Precise installation with proper shimming, leveling, and weatherstripping for a tight, energy-efficient fit." },
    { num: "5", title: "Test & Adjust", desc: "We test the door through multiple open/close cycles, adjust the latch and hinges, and verify the lock engages properly." },
  ];

  const pricingRanges = [
    { type: "Door Adjustment / Rehang", range: "$75 – $200", note: "Sticking, sagging, or hard-to-close doors" },
    { type: "Weatherstripping Replacement", range: "$100 – $250", note: "Drafts, energy loss, or worn seals" },
    { type: "Interior Door Installation", range: "$150 – $400", note: "Pre-hung or slab door, labor only" },
    { type: "Exterior Entry Door Install", range: "$300 – $700", note: "Labor only; door supplied by homeowner or us" },
    { type: "Storm Door Installation", range: "$200 – $450", note: "Full installation including hardware" },
    { type: "Door Frame Repair", range: "$200 – $600", note: "Rot, damage, or failed frame repair" },
  ];

  const faqs = [
    {
      question: "Why is my door sticking or hard to close?",
      answer: "The most common causes are seasonal wood swelling (humidity changes in St. Louis summers), hinge screws that have worked loose, a settling foundation shifting the door frame, or paint buildup on the door edges. We diagnose the root cause so the fix lasts — not just a quick plane that comes back next season."
    },
    {
      question: "Can you install a door I already purchased?",
      answer: "Yes — we install doors you've purchased from Home Depot, Lowe's, or any supplier. Just make sure you have the correct rough opening size before buying. We can also help you select the right door if you'd like our guidance."
    },
    {
      question: "How long does door installation take?",
      answer: "A standard interior door installation takes 1–3 hours. An exterior entry door with new weatherstripping and hardware takes 2–4 hours. We can typically complete most door jobs in a single visit."
    },
    {
      question: "How much does door installation cost in St. Louis?",
      answer: "Interior door installation (labor only) runs $150–$400. Exterior entry door installation is $300–$700 for labor. Storm door installation is $200–$450. Door adjustments for sticking or sagging start at $75. We provide a firm written estimate before starting any work."
    },
    {
      question: "Can you fix a door that won't latch properly?",
      answer: "Yes. A door that won't latch is usually caused by a misaligned strike plate, loose hinges, or a shifted door frame. We diagnose the cause and fix it properly — often in under an hour."
    },
    {
      question: "Do you install storm doors?",
      answer: "Yes. We install storm doors from all major brands including Andersen, Larson, and Pella. Storm doors improve energy efficiency and protect your entry door from the elements. Installation typically takes 2–3 hours."
    },
    {
      question: "Can you repair a door frame with rot damage?",
      answer: "Yes. Rotted door frames are common in St. Louis due to moisture and freeze-thaw cycles. We remove the rotted material, treat the area, and rebuild the frame with pressure-treated or composite materials that resist future rot."
    },
    {
      question: "Do you install pet doors?",
      answer: "Yes — we install pet doors in both interior and exterior doors, including sliding glass doors. We'll cut the opening precisely and install the pet door unit with proper weatherstripping to maintain energy efficiency."
    },
  ];

  return (
    <div className="flex flex-col">
      <PageBreadcrumb crumbs={[
    { label: "Home", href: "/" },
    { label: "Services", href: "/handyman-services/" },
    { label: "Door Installation & Repair" }
  ]} />
      <SEO {...seo} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white py-16 md:py-24 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#ff5b00] text-sm font-bold uppercase tracking-widest mb-4 block">Door Installation &amp; Repair</span>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Door Installation &amp; Repair Services
              </h1>
              <p className="text-[#e5e7eb] text-lg mb-6">
                Sticking doors, broken frames, new entry doors, storm doors, and interior door installations — done right the first time. Serving St. Louis, Edwardsville, O'Fallon, and all of Metro East IL.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Free Quote in 24 hrs", "Same/Next-Day Available", "Licensed & Insured", "30+ Years Experience"].map((badge) => (
                  <span key={badge} className="bg-white/10 text-white text-sm px-3 py-1.5 rounded-full font-medium">{badge}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/#contact" onClick={() => trackCTAClick('Get Free Quote in 24 Hours', 'Door Installation Hero Section')}>
                  <Button className="bg-[#ff5b00] hover:bg-[#ff5b00]/90 text-white rounded-full px-8 py-6 text-base font-bold shadow-lg shadow-[#ff5b00]/30">
                    Get Free Quote in 24 Hours
                  </Button>
                </Link>
                <a href="tel:800-741-6056" onClick={() => trackPhoneClick('800-741-6056', 'Door Installation Hero Section')}>
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
                  "Entry, storm, interior & sliding doors",
                  "Diagnose root cause — not just symptoms",
                  "Upfront pricing — no surprises",
                  "Serving St. Louis & Metro East IL",
                  "Install doors you purchase or we source",
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

      {/* What We Do */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b1220] mb-4">Door Installation &amp; Repair Services</h2>
            <p className="text-[#4b5563] text-lg max-w-2xl mx-auto">From a sticking interior door to a full entry door replacement, we handle all door work in St. Louis and Metro East.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Door Repairs", items: ["Sticking or hard-to-close doors", "Doors that won't latch", "Sagging or misaligned doors", "Broken hinges or hardware"] },
              { title: "Door Installation", items: ["Exterior entry door replacement", "Storm door installation", "Interior door installation", "Pet door installation"] },
              { title: "Frame & Weatherproofing", items: ["Rotted door frame repair", "Weatherstripping replacement", "Door sweep installation", "Draft elimination"] },
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
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b1220] mb-4">Our Door Installation Process</h2>
            <p className="text-[#4b5563] text-lg max-w-2xl mx-auto">A precise, professional process — from diagnosis to final test.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b1220] mb-4">Door Repair &amp; Installation Pricing</h2>
            <p className="text-[#4b5563] text-lg max-w-2xl mx-auto">
              Transparent, upfront pricing — you'll know the cost before we start. These ranges reflect typical door projects in the St. Louis and Metro East area.
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
            * Prices are labor estimates. Door and hardware costs are additional unless otherwise noted. Final price confirmed before work begins.
          </p>
        </div>
      </section>

      {/* Inline Quote Form */}
      <section className="py-16 px-6 bg-[#0b1220]">
        <div className="max-w-[600px] mx-auto">
          <InlineQuoteForm
            service="Door Installation & Repair"
            heading="Get Your Free Door Quote in 24 Hours"
            subheading="Tell us about your door project and we'll respond within 24 hours with a clear, upfront estimate."
          />
        </div>
      </section>

      {/* Before/After Project Gallery */}
      <LazyProjectGallery
        projects={doorProjects}
        title="Recent Door Projects in Your Area"
        subtitle="Before-and-after results from door replacements and repairs across St. Louis & Metro East."
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
              { text: "My front door wouldn't close properly for two years. Hero Handyman diagnosed a shifted frame and fixed it in 90 minutes. Should have called sooner.", author: "David H., O'Fallon IL" },
              { text: "They installed a new storm door and replaced all the weatherstripping on my entry door. My energy bill dropped noticeably the next month.", author: "Jennifer M., Edwardsville IL" },
              { text: "Quick, professional, and reasonably priced. Fixed three interior doors that were sticking. All work done in one visit.", author: "Ron S., St. Louis MO" },
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b1220] mb-4">Door Installation FAQs</h2>
            <p className="text-[#4b5563]">Common questions from St. Louis and Metro East homeowners about door installation and repair.</p>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Service Area Links */}
      <section className="py-16 px-6 bg-white border-t border-[#e5e7eb]">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">Door Installation Near You</h2>
          <p className="text-[#4b5563] mb-6">We serve all of St. Louis and Metro East Illinois. Find your city below.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "handyman Edwardsville IL", href: "/gbp/edwardsville-il/" },
              { name: "O'Fallon, IL", href: "/door-installation-ofallon-il" },
              { name: "handyman Belleville IL", href: "/handyman-belleville-il" },
              { name: "Collinsville, IL", href: "/door-installation-collinsville-il" },
              { name: "Glen Carbon, IL", href: "/door-installation-glen-carbon-il" },
              { name: "St. Charles, MO", href: "/door-installation-st-charles-mo" },
              { name: "Chesterfield, MO", href: "/door-installation-chesterfield-mo" },
              { name: "Ballwin, MO", href: "/door-installation-ballwin-mo" },
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

      {/* Helpful Articles */}
      <section className="py-14 px-6 bg-[#f9fafb] border-t border-[#e5e7eb]">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-6">Helpful Articles for O'Fallon Homeowners</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: "How Much Does Door Repair Cost in O'Fallon IL?", href: "/blog/door-repair-cost-ofallon-il/", desc: "Pricing guide: minor repairs, frame work, and full door replacement costs in 2026" },
              { label: "Handyman Pricing Guide", href: "/handyman-pricing/", desc: "Full pricing transparency across all handyman services" },
              { label: "Get a Free Estimate", href: "/estimator/", desc: "Use our online estimator to get a ballpark price for your project" },
            ].map((link, i) => (
              <Link key={i} href={link.href}>
                <div className="p-5 bg-white rounded-xl border border-[#e5e7eb] hover:border-[#ff5b00] hover:shadow-sm transition-all cursor-pointer h-full">
                  <p className="font-semibold text-[#0b1220] text-sm mb-1">{link.label}</p>
                  <p className="text-[#6b7280] text-xs">{link.desc}</p>
                </div>
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
