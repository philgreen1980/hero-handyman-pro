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
  "headline": "How Much Does Door Repair Cost in O'Fallon IL?",
  "description": "Door repair cost guide for O'Fallon, IL homeowners. Covers sticking doors, broken hardware, frame repair, storm door installation, and full entry door replacement.",
  "datePublished": "2026-05-24",
  "dateModified": "2026-05-24",
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
    "url": "https://herohandymanpro.com"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://herohandymanpro.com/blog/door-repair-cost-ofallon-il/"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does door repair cost in O'Fallon, IL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Door repair in O'Fallon typically ranges from $75–$200 for minor adjustments (sticking doors, hinge tightening, latch alignment), $200–$500 for hardware replacement and weatherstripping, $400–$900 for frame repair or partial replacement, and $800–$2,500+ for full entry door replacement with installation."
      }
    },
    {
      "@type": "Question",
      "name": "Why is my door sticking or hard to close in O'Fallon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The most common causes in O'Fallon and Metro East IL are seasonal wood expansion from humidity, foundation settling that shifts the door frame, loose or worn hinges, and paint buildup on the door edges. Most sticking door issues can be fixed for $75–$200 without replacing the door."
      }
    },
    {
      "@type": "Question",
      "name": "Is it cheaper to repair or replace a door?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Repair is almost always cheaper for functional issues like sticking, misalignment, or broken hardware. Replacement makes more sense when the door has significant rot, major frame damage, poor energy efficiency, or security concerns. A professional assessment helps determine the most cost-effective path."
      }
    },
    {
      "@type": "Question",
      "name": "How long does door repair take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most door repairs take 1–3 hours. A sticking door adjustment or hinge replacement is typically done in under an hour. Storm door installation takes 2–4 hours. Full entry door replacement with frame work can take 4–8 hours depending on the scope."
      }
    },
    {
      "@type": "Question",
      "name": "What are signs my door frame needs repair?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Warning signs include visible gaps between the door and frame, daylight visible around the door edges, drafts or energy loss, difficulty latching or locking, visible rot or soft wood in the frame, and doors that swing open or closed on their own due to an out-of-plumb frame."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer same-day door repair in O'Fallon, IL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. For urgent door issues — especially exterior doors that won't close or lock properly — we prioritize same-day or next-day service in O'Fallon and throughout Metro East IL. Call us at 800-741-6056 to check current availability."
      }
    }
  ]
};

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#e5e7eb] rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-[#f9fafb] transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-[#0b1220] pr-4">{question}</span>
        {open ? <ChevronUp className="h-5 w-5 text-[#ff5b00] flex-shrink-0" /> : <ChevronDown className="h-5 w-5 text-[#ff5b00] flex-shrink-0" />}
      </button>
      {open && (
        <div className="px-5 pb-5 bg-white text-[#4b5563] leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function DoorRepairCostOFallon() {
  const seo = useSeoRoute();
  return (
    <div className="flex flex-col">
      <SEO {...seo} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageBreadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Blog", href: "/blog/" },
        { label: "Door Repair Cost O'Fallon IL" }
      ]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white py-14 md:py-20 px-6">
        <div className="max-w-[860px] mx-auto">
          <div className="flex items-center gap-2 text-[#ff5b00] text-sm font-bold uppercase tracking-widest mb-4">
            <span>Cost Guide · O'Fallon, IL · 2026</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
            How Much Does Door Repair Cost in O'Fallon IL?
          </h1>
          <p className="text-[#e5e7eb] text-lg mb-6 max-w-2xl">
            Sticking door? Broken hardware? Frame rot? This guide covers what O'Fallon homeowners actually pay for door repairs and replacements in 2026 — with real project examples and no fluff.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            {["Written by Phil Green, Owner", "30+ Years Experience", "Serving O'Fallon & Metro East IL"].map((b) => (
              <span key={b} className="bg-white/10 text-white px-3 py-1.5 rounded-full">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-12 px-6 bg-[#f9fafb]">
        <div className="max-w-[860px] mx-auto">
          <div className="bg-white border-l-4 border-[#ff5b00] rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-[#0b1220] mb-3">Quick Answer: Door Repair Costs in O'Fallon, IL</h2>
            <p className="text-[#4b5563] mb-4">
              Most door repairs in O'Fallon range from <strong>$75 to $2,500+</strong> depending on the type of repair. Minor adjustments and hardware fixes are on the low end. Full entry door replacement with frame work is on the high end. Here's a breakdown:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { label: "Minor Repair", range: "$75 – $200", note: "Sticking door, hinge tightening, latch adjustment, weatherstripping" },
                { label: "Hardware & Frame", range: "$200 – $900", note: "Lock replacement, hardware upgrade, partial frame repair, storm door install" },
                { label: "Door Replacement", range: "$800 – $2,500+", note: "Full entry door replacement with new frame, installation, and finishing" },
              ].map((tier) => (
                <div key={tier.label} className="bg-[#f9fafb] rounded-xl p-5 border border-[#e5e7eb]">
                  <div className="text-[#ff5b00] font-bold text-sm uppercase tracking-wide mb-1">{tier.label}</div>
                  <div className="text-2xl font-bold text-[#0b1220] mb-2">{tier.range}</div>
                  <div className="text-[#6b7280] text-sm">{tier.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cost Factors That Increase Price */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-[860px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0b1220] mb-3">What Makes Door Repair More Expensive</h2>
          <p className="text-[#4b5563] mb-8">
            Several factors can push your door repair cost higher than the base estimate. Understanding these helps you plan your budget and avoid surprises.
          </p>
          <div className="space-y-4">
            {[
              {
                title: "Frame Rot or Structural Damage",
                desc: "Rotted door frames are common in O'Fallon homes built in the 1980s–2000s, especially on south- and west-facing exterior doors. Frame repair or replacement adds $200–$600+ to the job depending on how far the rot has spread. We always probe the frame before quoting to give you an accurate number."
              },
              {
                title: "Exterior vs. Interior Door",
                desc: "Exterior doors are more complex — they require proper weatherproofing, security hardware, and precise shimming for a tight seal. Exterior door repairs typically cost 30–50% more than comparable interior door work."
              },
              {
                title: "Door Type and Material",
                desc: "Fiberglass and steel doors are more durable but cost more to source and install. Solid wood doors require more careful adjustment and finishing. Storm doors add a separate installation cost of $200–$500 on top of the primary door work."
              },
              {
                title: "Hardware and Lock Upgrades",
                desc: "Upgrading to a deadbolt, smart lock, or heavy-duty commercial-grade hardware adds $100–$400 in parts alone. If you're replacing a door, it's often worth upgrading the hardware at the same time since labor is already allocated."
              },
              {
                title: "Foundation Settling",
                desc: "O'Fallon's clay-heavy soil causes foundation movement that shifts door frames out of plumb over time. If a door is sticking due to foundation settling, the repair involves shimming and adjusting the frame — not just planing the door edge. This adds time and cost."
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-5 bg-[#f9fafb] rounded-xl border border-[#e5e7eb]">
                <AlertTriangle className="h-5 w-5 text-[#ff5b00] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-[#0b1220] mb-1">{item.title}</h3>
                  <p className="text-[#4b5563] text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Factors That Lower Price */}
      <section className="py-14 px-6 bg-[#f9fafb]">
        <div className="max-w-[860px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0b1220] mb-3">What Keeps Door Repair Costs Down</h2>
          <p className="text-[#4b5563] mb-8">
            Not every door problem requires a full replacement. These factors can keep your repair cost on the lower end.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Catching it early", desc: "A door that sticks slightly costs $75–$150 to fix. The same door left for two more seasons may need frame work at $400+. Early action saves money." },
              { title: "Repair vs. replace", desc: "Most sticking, misaligned, or hard-to-latch doors can be repaired without replacement. We always explore repair options first." },
              { title: "Bundling multiple repairs", desc: "If you have a sticking door, a broken latch, and a torn weatherstrip, bundling all three in one visit saves on trip charges and labor time." },
              { title: "Providing your own door", desc: "If you've already purchased a door from a home improvement store, we can install it. Supplying your own door removes material markup from the quote." },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 p-5 bg-white rounded-xl border border-[#e5e7eb]">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-[#0b1220] mb-1">{item.title}</h3>
                  <p className="text-[#4b5563] text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common O'Fallon Door Problems */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-[860px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0b1220] mb-3">Common Door Problems in O'Fallon & Metro East</h2>
          <p className="text-[#4b5563] mb-8">
            O'Fallon's climate — hot humid summers, cold winters, and clay soil — creates specific door problems that we see repeatedly across the area.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { problem: "Seasonal sticking in summer", cause: "Wood expands in humidity; doors that fit fine in winter bind in July and August", fix: "$75–$150 — plane or sand the binding edge" },
              { problem: "Frame shifting near Scott AFB", cause: "Vibration and clay soil movement near the base causes gradual frame settling", fix: "$200–$500 — re-shim and adjust frame" },
              { problem: "Rotted threshold and bottom rail", cause: "Standing water from flat driveways and poor grading wicks into the door bottom", fix: "$250–$600 — replace threshold, bottom rail, and weatherstripping" },
              { problem: "Broken storm door closer", cause: "Pneumatic closers fail after 5–8 years of use, especially in temperature extremes", fix: "$75–$150 — replace closer and adjust tension" },
              { problem: "Deadbolt misalignment", cause: "Foundation movement shifts the strike plate out of alignment with the bolt", fix: "$75–$200 — adjust strike plate or re-bore" },
              { problem: "Pet door deterioration", cause: "Flap seals crack and frames warp over time, causing drafts and energy loss", fix: "$100–$300 — replace pet door insert or full unit" },
            ].map((item, i) => (
              <div key={i} className="bg-[#f9fafb] rounded-xl p-5 border border-[#e5e7eb]">
                <h3 className="font-bold text-[#0b1220] mb-1">{item.problem}</h3>
                <p className="text-[#6b7280] text-xs mb-2"><span className="font-medium">Cause:</span> {item.cause}</p>
                <p className="text-[#ff5b00] text-sm font-semibold">{item.fix}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repair vs. Replacement */}
      <section className="py-14 px-6 bg-[#f9fafb]">
        <div className="max-w-[860px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0b1220] mb-3">Repair vs. Replace: How to Decide</h2>
          <p className="text-[#4b5563] mb-8">
            The most common question we get: "Should I repair this door or just replace it?" Here's how we think through it.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="font-bold text-green-800 text-lg mb-4">Repair Makes Sense When…</h3>
              <ul className="space-y-2">
                {[
                  "The door is structurally sound — no rot or warping",
                  "The problem is mechanical (hinges, latch, hardware)",
                  "The door is sticking due to seasonal expansion",
                  "The frame is solid and just needs adjustment",
                  "The door is less than 15–20 years old",
                  "You want to preserve original wood or historic character",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-green-800 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="font-bold text-red-800 text-lg mb-4">Replacement Makes Sense When…</h3>
              <ul className="space-y-2">
                {[
                  "The door has significant rot, especially in the bottom rail",
                  "The frame is severely damaged or out of square",
                  "Energy bills are high due to poor door sealing",
                  "The door has been repaired multiple times",
                  "You want to upgrade security (new steel or fiberglass door)",
                  "The door is 25+ years old and showing its age",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-red-800 text-sm">
                    <AlertTriangle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Real Project Example */}
      <section className="py-14 px-6 bg-[#0b1220] text-white">
        <div className="max-w-[860px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Real O'Fallon Door Project: What It Actually Cost</h2>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#ff5b00] rounded-full px-4 py-1 text-sm font-bold uppercase tracking-wide">Completed Job</div>
              <span className="text-[#9ca3af] text-sm">O'Fallon, IL — Regency Park neighborhood</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Front Entry Door Replacement + Storm Door Install</h3>
            <p className="text-[#e5e7eb] mb-6">
              A homeowner near Scott Air Force Base contacted us about a front door that had become increasingly difficult to close and lock. The original door — installed in 1998 — had a rotted bottom rail, a frame that had shifted out of plumb due to foundation settling, and weatherstripping that had completely failed. The deadbolt would only engage about half the time.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-bold text-[#ff5b00] mb-3">Work Performed</h4>
                <ul className="space-y-2 text-[#e5e7eb] text-sm">
                  {[
                    "Removed original door and rotted frame sections",
                    "Installed new fiberglass entry door (owner-supplied)",
                    "Shimmed and plumbed new frame",
                    "Installed new deadbolt and lever handle set",
                    "Added new threshold and weatherstripping",
                    "Installed new aluminum storm door",
                    "Painted exterior trim to match",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#ff5b00] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#ff5b00] mb-3">Cost Breakdown</h4>
                <div className="space-y-2 text-sm">
                  {[
                    { item: "Frame repair & prep", cost: "$280" },
                    { item: "Door installation (owner-supplied door)", cost: "$350" },
                    { item: "Hardware (deadbolt + lever set)", cost: "$145" },
                    { item: "Threshold + weatherstripping", cost: "$95" },
                    { item: "Storm door installation", cost: "$275" },
                    { item: "Trim painting", cost: "$120" },
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-[#e5e7eb]">{row.item}</span>
                      <span className="font-bold text-white">{row.cost}</span>
                    </div>
                  ))}
                  <div className="flex justify-between pt-2">
                    <span className="font-bold text-[#ff5b00]">Total</span>
                    <span className="font-bold text-[#ff5b00] text-lg">$1,265</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-[#9ca3af] text-sm italic">
              Note: The homeowner supplied the fiberglass door ($650 from Home Depot), which is not included in the labor/materials total above. Full project cost including the door: ~$1,915.
            </p>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-[860px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0b1220] mb-3">Warning Signs Your Door Needs Immediate Attention</h2>
          <p className="text-[#4b5563] mb-8">
            Some door issues are cosmetic annoyances. Others are security or energy risks that should be addressed quickly.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { sign: "Door won't latch or lock reliably", urgency: "High — security risk", color: "red" },
              { sign: "Visible daylight around door edges", urgency: "High — energy loss and pest entry", color: "red" },
              { sign: "Soft or spongy wood in the frame or threshold", urgency: "High — rot is spreading", color: "red" },
              { sign: "Door swings open or closed on its own", urgency: "Medium — frame is out of plumb", color: "yellow" },
              { sign: "Noticeable draft around a closed door", urgency: "Medium — weatherstripping failure", color: "yellow" },
              { sign: "Door sticks seasonally but closes fine otherwise", urgency: "Low — monitor and adjust", color: "green" },
            ].map((item, i) => (
              <div key={i} className={`flex gap-3 p-4 rounded-xl border ${item.color === "red" ? "bg-red-50 border-red-200" : item.color === "yellow" ? "bg-yellow-50 border-yellow-200" : "bg-green-50 border-green-200"}`}>
                <AlertTriangle className={`h-5 w-5 flex-shrink-0 mt-0.5 ${item.color === "red" ? "text-red-500" : item.color === "yellow" ? "text-yellow-500" : "text-green-600"}`} />
                <div>
                  <p className={`font-semibold text-sm ${item.color === "red" ? "text-red-800" : item.color === "yellow" ? "text-yellow-800" : "text-green-800"}`}>{item.sign}</p>
                  <p className={`text-xs mt-0.5 ${item.color === "red" ? "text-red-600" : item.color === "yellow" ? "text-yellow-600" : "text-green-600"}`}>{item.urgency}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Hero Handyman Pro */}
      <section className="py-14 px-6 bg-[#f9fafb]">
        <div className="max-w-[860px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0b1220] mb-3">Why O'Fallon Homeowners Choose Hero Handyman Pro</h2>
          <p className="text-[#4b5563] mb-8">
            We've been repairing and installing doors across O'Fallon and Metro East IL for over 30 years. Here's what sets us apart from the big box store installers and one-man-band contractors.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Written estimates before we start", desc: "You know the exact price before we touch anything. No hourly surprises, no scope creep." },
              { title: "We diagnose before we quote", desc: "We probe frames, test hinges, and check plumb before giving you a number — so the estimate reflects the actual job." },
              { title: "Small jobs welcome", desc: "A sticking door is worth fixing. We don't require a minimum job size or bundle unnecessary work." },
              { title: "Same-day availability for urgent issues", desc: "If your exterior door won't close or lock, we prioritize getting there. Call 800-741-6056 to check availability." },
              { title: "Licensed & insured in Illinois", desc: "Fully licensed and insured in IL and MO. Proof of insurance available on request." },
              { title: "15% off with Hero Membership", desc: "Members save on every job. A single door repair can pay for the annual membership fee." },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 p-5 bg-white rounded-xl border border-[#e5e7eb]">
                <CheckCircle className="h-5 w-5 text-[#ff5b00] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-[#0b1220] mb-1">{item.title}</h3>
                  <p className="text-[#4b5563] text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-[860px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0b1220] mb-3">Frequently Asked Questions</h2>
          <p className="text-[#4b5563] mb-8">Answers to the most common questions O'Fallon homeowners ask about door repair costs.</p>
          <div className="space-y-3">
            {faqSchema.mainEntity.map((faq, i) => (
              <FAQItem key={i} question={faq.name} answer={faq.acceptedAnswer.text} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-6 bg-[#ff5b00]">
        <div className="max-w-[860px] mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Get a Free Door Repair Quote in O'Fallon</h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            Tell us about your door problem and we'll give you a written estimate — usually within 24 hours. No obligation, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/#contact">
              <Button className="bg-white text-[#ff5b00] hover:bg-white/90 font-bold px-8 py-6 text-base rounded-full">
                Request a Free Estimate
              </Button>
            </Link>
            <a href="tel:800-741-6056">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-6 text-base rounded-full">
                Call 800-741-6056
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Inline Quote Form */}
      <section className="py-14 px-6 bg-[#f9fafb]">
        <div className="max-w-[860px] mx-auto">
          <InlineQuoteForm
            heading="Ready to Fix Your Door?"
            subheading="Submit your details and we'll follow up within 24 hours with a written estimate."
            service="Door Repair"
          />
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 px-6 bg-white border-t border-[#e5e7eb]">
        <div className="max-w-[860px] mx-auto">
          <h2 className="text-xl font-bold text-[#0b1220] mb-6">Related Resources</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: "Door Repair & Installation Service", href: "/handyman-services/door-repair/", desc: "Full service page with project gallery and pricing" },
              { label: "Handyman in O'Fallon, IL", href: "/service-areas/ofallon-il-handyman/", desc: "All handyman services in O'Fallon and nearby areas" },
              { label: "See also: Drywall Repair Cost Guide", href: "/blog/drywall-repair-cost-ofallon-il/", desc: "What drywall repair costs in O'Fallon in 2026" },
              { label: "See also: Deck Repair Cost Guide", href: "/blog/deck-repair-cost-ofallon-il/", desc: "What deck repair costs in O'Fallon in 2026" },
              { label: "See also: Window Repair Cost Guide", href: "/blog/window-repair-cost-ofallon-il/", desc: "What window repair costs in O'Fallon in 2026" },
              { label: "Handyman Pricing Guide", href: "/handyman-pricing/", desc: "Full pricing transparency across all services" },
              { label: "Get a Free Estimate", href: "/estimator/", desc: "Use our online estimator to get a ballpark price" },
            ].map((link, i) => (
              <Link key={i} href={link.href}>
                <div className="p-4 bg-[#f9fafb] rounded-xl border border-[#e5e7eb] hover:border-[#ff5b00] hover:shadow-sm transition-all cursor-pointer h-full">
                  <p className="font-semibold text-[#0b1220] text-sm mb-1 group-hover:text-[#ff5b00]">{link.label}</p>
                  <p className="text-[#6b7280] text-xs">{link.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
