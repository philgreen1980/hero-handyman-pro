import { FAQAccordion } from "@/components/FAQAccordion";
import SEO from "@/components/SEO";
import InlineQuoteForm from "@/components/InlineQuoteForm";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star, Wrench, DollarSign, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { trackCTAClick, trackPhoneClick } from "@/lib/analytics";
import LazyProjectGallery from "@/components/LazyProjectGallery";
import type { ProjectPair } from "@/components/ProjectGallery";
import { useSeoRoute } from '@/hooks/useSeoRoute';

const drywallProjects: ProjectPair[] = [
  {
    beforeSrc: "/images/drywall-before-stlouis.webp",
    afterSrc: "/images/drywall-after-stlouis.webp",
    beforeAlt: "Water-damaged ceiling with large brown stain and cracked drywall – St. Louis MO",
    afterAlt: "Repaired and freshly painted ceiling, smooth and stain-free – St. Louis MO",
    caption: "Water-damaged ceiling drywall repair",
    city: "St. Louis, MO",
  },
  {
    beforeSrc: "/images/carpentry-before-belleville.webp",
    afterSrc: "/images/carpentry-after-belleville.webp",
    beforeAlt: "Damaged door casing trim with peeling paint – Belleville IL",
    afterAlt: "Freshly repaired and painted door casing trim – Belleville IL",
    caption: "Interior trim & drywall finish repair",
    city: "Belleville, IL",
  },
];

export default function DrywallRepairService() {
  const seo = useSeoRoute();  const processSteps = [
    { num: "1", title: "Photo Estimate", desc: "Send us a photo of the damage. We'll give you a ballpark estimate by phone or text — often the same day." },
    { num: "2", title: "On-Site Assessment", desc: "For larger jobs, we visit to assess the damage, check for moisture or structural issues, and confirm the final price." },
    { num: "3", title: "Patch & Texture", desc: "We apply joint compound in multiple coats, sand smooth, and texture to match your existing wall — orange peel, knockdown, or smooth." },
    { num: "4", title: "Prime & Paint", desc: "We prime the repaired area so it's ready for paint. Touch-up painting available on request." },
    { num: "5", title: "Final Walkthrough", desc: "We walk through the finished repair with you. If anything doesn't look right, we fix it before we leave." },
  ];

  const pricingRanges = [
    { type: "Small Hole (< 2 inches)", range: "$75 – $150", note: "Nail holes, anchors, small punctures" },
    { type: "Medium Hole (2–6 inches)", range: "$150 – $300", note: "Door handle impacts, plumbing access" },
    { type: "Large Hole (6–12 inches)", range: "$250 – $450", note: "Fist-size damage, electrical cutouts" },
    { type: "Water Damage Repair", range: "$300 – $700+", note: "Includes moisture assessment and texture match" },
    { type: "Ceiling Patch", range: "$200 – $500", note: "Sagging, cracks, or water stains" },
    { type: "Full Wall Section", range: "$400 – $900+", note: "Larger sections requiring new drywall panels" },
  ];

  const faqs = [
    {
      question: "How long does drywall repair take?",
      answer: "Most small to medium patches take 1–2 days because joint compound needs 24 hours to dry between coats. Larger repairs or water-damaged areas may take 2–3 days. We'll give you a clear timeline before we start."
    },
    {
      question: "Can you match my existing wall texture?",
      answer: "Yes — texture matching is one of our specialties. We can replicate orange peel, knockdown, skip trowel, smooth, and most other common textures. We test on a small area first to confirm the match before finishing the repair."
    },
    {
      question: "Do I need to repaint after drywall repair?",
      answer: "The repaired area will need to be painted to blend in. We prime the patch so it's ready for paint. We can also paint the repaired area or the full wall on request — just let us know when you book."
    },
    {
      question: "What causes drywall cracks and holes?",
      answer: "Common causes include settling foundations (hairline cracks along seams), moisture or water leaks (soft spots, bubbling), physical impact (holes from doorknobs or accidents), and poor original installation (tape popping, nail pops). We assess the root cause before patching to prevent recurrence."
    },
    {
      question: "How do I know if my drywall has water damage?",
      answer: "Signs include discoloration or staining, soft or spongy texture when pressed, bubbling or peeling paint, visible mold, or a musty smell. If you suspect water damage, it's important to fix the source first. We can help assess the damage and recommend next steps."
    },
    {
      question: "Can you repair popcorn or textured ceilings?",
      answer: "Yes. We repair holes, cracks, and water stains in popcorn and textured ceilings. Matching popcorn texture is more difficult than smooth or knockdown — we'll be upfront about what's achievable and show you a test patch before committing."
    },
    {
      question: "Do you repair drywall in bathrooms and kitchens?",
      answer: "Yes, including moisture-resistant (greenboard) and cement board repairs in wet areas. Bathrooms and kitchens require special materials to prevent future moisture damage — we use the right products for each location."
    },
    {
      question: "How much does drywall repair cost in St. Louis?",
      answer: "Small patches typically run $75–$150. Medium holes (2–6 inches) are $150–$300. Water damage or ceiling repairs range from $250–$700+. We provide a firm, upfront price before starting any work — no surprise charges."
    },
  ];

  return (
    <div className="flex flex-col">
      <PageBreadcrumb crumbs={[
    { label: "Home", href: "/" },
    { label: "Services", href: "/handyman-services/" },
    { label: "Drywall Repair" }
  ]} />
      <SEO {...seo} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white py-16 md:py-24 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#ff5b00] text-sm font-bold uppercase tracking-widest mb-4 block">Drywall Repair</span>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Drywall Repair St. Louis & Metro East
              </h1>
              <p className="text-[#e5e7eb] text-lg mb-6">
                Holes, cracks, water damage, and ceiling repairs — patched, textured, and finished to match your existing walls. Serving St. Louis, Edwardsville, O'Fallon, and all of Metro East IL.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Free Quote in 24 hrs", "Texture Matching", "Licensed & Insured", "30+ Years Experience"].map((badge) => (
                  <span key={badge} className="bg-white/10 text-white text-sm px-3 py-1.5 rounded-full font-medium">{badge}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/#contact" onClick={() => trackCTAClick('Get Free Quote in 24 Hours', 'Drywall Repair Hero Section')}>
                  <Button className="bg-[#ff5b00] hover:bg-[#ff5b00]/90 text-white rounded-full px-8 py-6 text-base font-bold shadow-lg shadow-[#ff5b00]/30">
                    Get Free Quote in 24 Hours
                  </Button>
                </Link>
                <a href="tel:800-741-6056" onClick={() => trackPhoneClick('800-741-6056', 'Drywall Repair Hero Section')}>
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
                  "Seamless texture matching on all wall types",
                  "Same-day or next-day appointments available",
                  "Upfront pricing — no surprises",
                  "Serving St. Louis & Metro East IL",
                  "Cleanup included on every job",
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b1220] mb-4">What We Repair</h2>
            <p className="text-[#4b5563] text-lg max-w-2xl mx-auto">From small nail holes to large water-damaged sections, we handle all types of drywall repair in St. Louis and Metro East.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Holes & Punctures", items: ["Nail and screw holes", "Doorknob impact holes", "Fist-size and larger holes", "Electrical cutout patches"] },
              { title: "Cracks & Seams", items: ["Hairline settling cracks", "Corner bead damage", "Tape popping and bubbling", "Stress cracks around windows/doors"] },
              { title: "Water & Ceiling Damage", items: ["Water stain removal", "Soft or sagging sections", "Ceiling cracks and holes", "Popcorn/textured ceiling repair"] },
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b1220] mb-4">Our Drywall Repair Process</h2>
            <p className="text-[#4b5563] text-lg max-w-2xl mx-auto">A clean, proven process that delivers seamless results — no guesswork, no surprises.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b1220] mb-4">Drywall Repair Pricing in St. Louis</h2>
            <p className="text-[#4b5563] text-lg max-w-2xl mx-auto">
              Transparent, upfront pricing — you'll know the cost before we start. These ranges reflect typical projects in the St. Louis and Metro East area.
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
            * Prices are estimates. Final price confirmed before work begins. Painting and priming available at additional cost.
          </p>
        </div>
      </section>

      {/* Inline Quote Form */}
      <section className="py-16 px-6 bg-[#0b1220]">
        <div className="max-w-[600px] mx-auto">
          <InlineQuoteForm
            service="Drywall Repair"
            heading="Get Your Free Drywall Repair Quote"
            subheading="Send us a photo of the damage and we'll respond within 24 hours with a clear, upfront estimate."
          />
        </div>
      </section>

      {/* Before/After Project Gallery */}
      <LazyProjectGallery
        projects={drywallProjects}
        title="Recent Drywall Projects in Your Area"
        subtitle="Before-and-after results from drywall and ceiling repairs across St. Louis & Metro East."
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
              { text: "Hero Handyman patched a large hole from a plumbing repair. You can't even tell it was there. The texture match was perfect.", author: "Tom K., Edwardsville IL" },
              { text: "They fixed three drywall cracks in my living room and matched the knockdown texture flawlessly. Professional, clean, and on time.", author: "Lisa M., O'Fallon IL" },
              { text: "Had a big water stain on my ceiling. They patched it, primed it, and it looks brand new. Honest pricing and great work.", author: "James R., St. Louis MO" },
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b1220] mb-4">Drywall Repair FAQs</h2>
            <p className="text-[#4b5563]">Common questions from St. Louis and Metro East homeowners about drywall repair.</p>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Drywall Repair Types Deep Dive */}
      <section className="py-16 px-6 bg-white border-t border-[#e5e7eb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b1220] mb-4">Types of Drywall Repair We Handle</h2>
            <p className="text-[#4b5563] text-lg max-w-2xl mx-auto">Every drywall repair is different. Here's how we approach the most common types in St. Louis and Metro East homes.</p>
          </div>
          <div className="space-y-8">
            {/* Hole Repair */}
            <div className="grid md:grid-cols-2 gap-8 items-start bg-[#f9fafb] rounded-2xl p-8 border border-[#e5e7eb]">
              <div>
                <h3 className="text-2xl font-bold text-[#0b1220] mb-3">Drywall Hole Repair</h3>
                <p className="text-[#4b5563] mb-4">Holes from doorknobs, anchors, plumbing access, or accidents are the most common drywall repair. Small holes under 2 inches can be patched with a mesh patch kit. Larger holes (2–12 inches) require a California patch or a backing board to support the new drywall piece.</p>
                <p className="text-[#4b5563] mb-4">We feather the joint compound out 12–18 inches from the patch edge to create a seamless blend, then texture to match your existing wall. Most hole repairs are complete in 1–2 visits.</p>
                <div className="flex flex-wrap gap-2">
                  {["Nail & screw holes", "Doorknob impacts", "Plumbing access holes", "Electrical cutouts", "Accidental damage"].map(t => (
                    <span key={t} className="bg-white border border-[#e5e7eb] text-[#374151] text-xs font-medium px-3 py-1.5 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-[#e5e7eb]">
                <p className="text-sm font-bold text-[#0b1220] mb-3">Typical Cost</p>
                <div className="space-y-2">
                  {[
                    { size: "Small (< 2 in)", cost: "$75 – $150" },
                    { size: "Medium (2–6 in)", cost: "$150 – $300" },
                    { size: "Large (6–12 in)", cost: "$250 – $450" },
                  ].map(r => (
                    <div key={r.size} className="flex justify-between items-center py-2 border-b border-[#f3f4f6] last:border-0">
                      <span className="text-[#4b5563] text-sm">{r.size}</span>
                      <span className="text-[#ff5b00] font-bold text-sm">{r.cost}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Water Damage */}
            <div className="grid md:grid-cols-2 gap-8 items-start bg-[#f9fafb] rounded-2xl p-8 border border-[#e5e7eb]">
              <div>
                <h3 className="text-2xl font-bold text-[#0b1220] mb-3">Water-Damaged Drywall Repair</h3>
                <p className="text-[#4b5563] mb-4">Water damage is the most complex drywall repair because the source must be fixed first. We assess moisture levels with a meter before patching. If drywall is soft, crumbling, or shows mold, it must be cut out and replaced — not just painted over.</p>
                <p className="text-[#4b5563] mb-4">After the source is dry, we cut out the damaged section, install new moisture-resistant drywall where appropriate, tape, mud, and texture to match. For ceiling water stains without structural damage, a stain-blocking primer and skim coat often resolves the issue without full replacement.</p>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-2">
                  <p className="text-amber-900 text-sm font-semibold">⚠️ Fix the source first</p>
                  <p className="text-amber-800 text-sm mt-1">We won't patch over active moisture. If you have a leak, we'll help you identify the source and coordinate with a plumber if needed before the drywall repair begins.</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-[#e5e7eb]">
                <p className="text-sm font-bold text-[#0b1220] mb-3">Water Damage Repair Cost</p>
                <div className="space-y-2">
                  {[
                    { type: "Ceiling stain (no structural damage)", cost: "$150 – $350" },
                    { type: "Small wet section (< 2 sq ft)", cost: "$250 – $450" },
                    { type: "Medium section (2–8 sq ft)", cost: "$400 – $700" },
                    { type: "Large area (8+ sq ft)", cost: "$600 – $1,200+" },
                  ].map(r => (
                    <div key={r.type} className="flex justify-between items-start py-2 border-b border-[#f3f4f6] last:border-0 gap-4">
                      <span className="text-[#4b5563] text-sm">{r.type}</span>
                      <span className="text-[#ff5b00] font-bold text-sm whitespace-nowrap">{r.cost}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Ceiling Repair */}
            <div className="grid md:grid-cols-2 gap-8 items-start bg-[#f9fafb] rounded-2xl p-8 border border-[#e5e7eb]">
              <div>
                <h3 className="text-2xl font-bold text-[#0b1220] mb-3">Ceiling Drywall Repair</h3>
                <p className="text-[#4b5563] mb-4">Ceiling repairs are more labor-intensive than wall repairs because working overhead requires scaffolding or ladders and the mud must be applied in thinner coats to prevent sagging. We take extra time to feather ceiling patches properly — a visible ceiling patch is one of the most noticeable drywall failures.</p>
                <p className="text-[#4b5563] mb-4">Common ceiling issues we repair: water stains, sagging sections, cracks along joists, popcorn texture damage, and holes from recessed lighting changes. We can also remove popcorn texture and skim coat ceilings smooth.</p>
                <div className="flex flex-wrap gap-2">
                  {["Water stain repair", "Sagging drywall", "Crack repair", "Popcorn texture match", "Smooth skim coat", "Recessed light holes"].map(t => (
                    <span key={t} className="bg-white border border-[#e5e7eb] text-[#374151] text-xs font-medium px-3 py-1.5 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-[#e5e7eb]">
                <p className="text-sm font-bold text-[#0b1220] mb-3">Ceiling Repair Cost</p>
                <div className="space-y-2">
                  {[
                    { type: "Stain blocking & skim coat", cost: "$150 – $300" },
                    { type: "Small patch (< 6 in)", cost: "$200 – $400" },
                    { type: "Medium section (1–4 sq ft)", cost: "$350 – $600" },
                    { type: "Large section (4+ sq ft)", cost: "$500 – $900+" },
                  ].map(r => (
                    <div key={r.type} className="flex justify-between items-start py-2 border-b border-[#f3f4f6] last:border-0 gap-4">
                      <span className="text-[#4b5563] text-sm">{r.type}</span>
                      <span className="text-[#ff5b00] font-bold text-sm whitespace-nowrap">{r.cost}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Cracks & Texture */}
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="bg-[#f9fafb] rounded-2xl p-8 border border-[#e5e7eb]">
                <h3 className="text-xl font-bold text-[#0b1220] mb-3">Crack Repair</h3>
                <p className="text-[#4b5563] mb-4">Hairline cracks along seams or corners are usually cosmetic — caused by settling, humidity changes, or original tape failure. We open the crack slightly, apply mesh tape, and feather joint compound over 2–3 coats. Structural cracks (stair-step pattern, wide gaps) may indicate foundation movement and warrant a structural assessment first.</p>
                <div className="space-y-2">
                  {[
                    { type: "Hairline seam crack", cost: "$100 – $250" },
                    { type: "Corner bead crack", cost: "$150 – $300" },
                    { type: "Multiple cracks (same area)", cost: "$250 – $500" },
                  ].map(r => (
                    <div key={r.type} className="flex justify-between items-center py-2 border-b border-[#f3f4f6] last:border-0">
                      <span className="text-[#4b5563] text-sm">{r.type}</span>
                      <span className="text-[#ff5b00] font-bold text-sm">{r.cost}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#f9fafb] rounded-2xl p-8 border border-[#e5e7eb]">
                <h3 className="text-xl font-bold text-[#0b1220] mb-3">Texture Matching</h3>
                <p className="text-[#4b5563] mb-4">Texture matching is what separates a professional drywall repair from a visible patch. We replicate orange peel, knockdown, skip trowel, and smooth finishes. We always test on a small area first and adjust before finishing the repair.</p>
                <div className="space-y-2">
                  {[
                    { type: "Orange peel", note: "Spray-applied; most common in Metro East homes" },
                    { type: "Knockdown", note: "Trowel-applied; common in St. Louis area" },
                    { type: "Skip trowel", note: "Hand-applied; requires skill to match" },
                    { type: "Smooth finish", note: "Skim coat required; most labor-intensive" },
                  ].map(r => (
                    <div key={r.type} className="py-2 border-b border-[#f3f4f6] last:border-0">
                      <p className="text-[#0b1220] font-semibold text-sm">{r.type}</p>
                      <p className="text-[#6b7280] text-xs">{r.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Helpful Resources */}
      <section className="py-14 px-6 bg-[#0b1220] text-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Drywall Repair Across Metro East & St. Louis</h2>
              <p className="text-[#e5e7eb] mb-4">
                We repair drywall in O'Fallon, Edwardsville, Belleville, Glen Carbon, Collinsville, Swansea, Shiloh, and all of Metro East IL, as well as St. Louis, Chesterfield, Ballwin, and St. Charles in Missouri. Most calls come from homeowners dealing with water damage, old nail pops, or holes left after renovation work.
              </p>
              <p className="text-[#e5e7eb] mb-4">
                Older Metro East homes — particularly those built in the 1970s and 1980s — often have plaster-over-drywall walls that require a different repair approach. We're experienced with both standard drywall and older plaster systems.
              </p>
              <p className="text-[#9ca3af] text-sm">
                Small jobs welcome. You don't need a full renovation to get a professional drywall repair. We handle single holes, single cracks, and single ceiling stains — no minimum job size.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#ff5b00]">Helpful Resources</h3>
              <div className="space-y-3">
                <Link href="/blog/drywall-repair-cost-ofallon-il/" className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-colors">
                  <DollarSign className="h-5 w-5 text-[#ff5b00] flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white text-sm">Drywall Repair Cost Guide — O'Fallon IL</p>
                    <p className="text-[#9ca3af] text-xs">Typical prices, real project examples, and what affects cost</p>
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
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">Drywall Repair Near You</h2>
          <p className="text-[#4b5563] mb-6">We serve all of St. Louis and Metro East Illinois. Find your city below for local pricing and availability.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "handyman Edwardsville IL", href: "/gbp/edwardsville-il/" },
              { name: "O'Fallon, IL", href: "/drywall-repair-ofallon-il" },
              { name: "handyman Belleville IL", href: "/handyman-belleville-il" },
              { name: "Collinsville, IL", href: "/drywall-repair-collinsville-il" },
              { name: "Glen Carbon, IL", href: "/drywall-repair-glen-carbon-il" },
              { name: "St. Charles, MO", href: "/drywall-repair-st-charles-mo" },
              { name: "Chesterfield, MO", href: "/drywall-repair-chesterfield-mo" },
              { name: "Ballwin, MO", href: "/drywall-repair-ballwin-mo" },
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
