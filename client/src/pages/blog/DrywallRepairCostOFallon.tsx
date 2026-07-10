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
  "headline": "How Much Does Drywall Repair Cost in O'Fallon IL?",
  "description": "Drywall repair cost guide for O'Fallon, IL homeowners. Covers small repairs, medium repairs, ceiling repairs, water damage, texture matching, and repair vs replacement.",
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
    "url": "https://herohandymanpro.com"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://herohandymanpro.com/blog/drywall-repair-cost-ofallon-il/"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does drywall repair cost in O'Fallon, IL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Drywall repair in O'Fallon typically ranges from $150–$350 for small cosmetic repairs (nail pops, hairline cracks, small dents), $350–$850 for medium repairs (larger holes, damaged corners, multiple cracks), and $450–$1,500+ for ceiling repairs involving water damage, sagging drywall, or texture damage."
      }
    },
    {
      "@type": "Question",
      "name": "What factors affect drywall repair costs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The main factors are: size of the damage, whether water damage is involved (which may require insulation replacement, mold prevention, and full drywall removal), texture matching requirements (orange peel, knockdown, smooth, hand textures), ceiling vs wall location, and whether painting is needed after the repair."
      }
    },
    {
      "@type": "Question",
      "name": "Can you match my existing drywall texture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Texture matching is one of the most important parts of a quality drywall repair. We match orange peel, knockdown, smooth finish, and hand textures. Poor texture matching is one of the biggest signs of low-quality drywall repair."
      }
    },
    {
      "@type": "Question",
      "name": "When should drywall be repaired vs replaced?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Many drywall issues can be repaired without replacing entire walls or ceilings. However, replacement may be recommended if water damage is extensive, drywall is sagging, mold is present, structural movement continues, or repairs have failed repeatedly. A professional inspection helps determine the best long-term solution."
      }
    },
    {
      "@type": "Question",
      "name": "What are warning signs that drywall damage needs immediate repair?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You should address drywall issues if you notice spreading cracks, soft drywall, ceiling sagging, bubbling paint, water stains, loose tape joints, or recurring nail pops. Ignoring drywall damage can sometimes lead to larger moisture or structural problems."
      }
    },
    {
      "@type": "Question",
      "name": "Why are ceiling drywall repairs more expensive?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ceiling repairs are typically more labor-intensive due to overhead work, texture blending challenges, moisture treatment requirements, and the need for structural inspection. Water-damaged ceilings are especially common after plumbing leaks or roof issues, which adds to the scope and cost."
      }
    }
  ]
};

const pricingCards = [
  {
    category: "Small Drywall Repairs",
    range: "$150–$350",
    color: "bg-green-50 border-green-200",
    headerColor: "bg-green-600",
    examples: ["Nail pops", "Hairline cracks", "Small dents", "Anchor holes"],
    note: "Often cosmetic repairs that can usually be completed quickly.",
  },
  {
    category: "Medium Drywall Repairs",
    range: "$350–$850",
    color: "bg-yellow-50 border-yellow-200",
    headerColor: "bg-yellow-600",
    examples: ["Larger holes", "Damaged corners", "Multiple cracks", "Partial wall repairs"],
    note: "Often require patch installation, sanding, texture matching, priming and painting.",
  },
  {
    category: "Ceiling Drywall Repairs",
    range: "$450–$1,500+",
    color: "bg-red-50 border-red-200",
    headerColor: "bg-red-600",
    examples: ["Water-damaged ceilings", "Sagging drywall", "Plumbing leak damage", "Texture damage"],
    note: "More labor-intensive due to overhead work, texture blending, moisture treatment, and structural inspection.",
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

export default function DrywallRepairCostOFallon() {
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
              { label: "Drywall Repair Cost in O'Fallon IL" },
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
            How Much Does Drywall Repair Cost in O'Fallon IL?
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Drywall damage is one of the most common repair issues homeowners face throughout O'Fallon and the Metro East region. From small nail pops and settlement cracks to water-damaged ceilings and accidental holes, drywall problems can quickly make an otherwise beautiful home feel neglected.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mt-3">
            One of the first questions homeowners ask is: <em>"How much does drywall repair cost?"</em> The answer depends on several factors, including the type of damage, the size of the repair, ceiling vs wall repairs, texture matching requirements, and whether moisture damage is involved.
          </p>
          <p className="text-gray-600 leading-relaxed mt-3">
            At Hero Handyman Pro, we help homeowners throughout{" "}
            <Link href="/gbp/ofallon-il/" className="text-[#ff5b00] hover:underline">O'Fallon</Link>,{" "}
            <Link href="/handyman-belleville-il" className="text-[#ff5b00] hover:underline">Belleville</Link>,{" "}
            <Link href="/handyman-swansea-il/" className="text-[#ff5b00] hover:underline">Swansea</Link>,{" "}
            <Link href="/handyman-shiloh-il/" className="text-[#ff5b00] hover:underline">Shiloh</Link>, and surrounding Metro East communities restore damaged drywall professionally and efficiently.
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
          <h2 className="text-2xl font-bold text-[#0b1220] mb-6">Average Drywall Repair Costs in O'Fallon IL</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Here are general drywall repair price ranges homeowners commonly see in the Metro East area:
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
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">What Affects Drywall Repair Costs?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">Several factors influence drywall repair pricing.</p>

          <div className="space-y-6">
            <div className="border-l-4 border-[#ff5b00] pl-5">
              <h3 className="text-lg font-bold text-[#0b1220] mb-1">1. Size of the Damage</h3>
              <p className="text-gray-700 leading-relaxed">Small cosmetic repairs cost less than large damaged sections requiring replacement.</p>
            </div>

            <div className="border-l-4 border-[#ff5b00] pl-5">
              <h3 className="text-lg font-bold text-[#0b1220] mb-2">2. Water Damage</h3>
              <p className="text-gray-700 leading-relaxed mb-2">Water damage often increases costs because:</p>
              <ul className="space-y-1 text-gray-700">
                {["Insulation may need replacement", "Framing may require inspection", "Mold prevention may be necessary", "Damaged drywall must be fully removed"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-[#ff5b00] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 text-sm mt-2">Water-damaged ceilings are especially common after plumbing leaks or roof issues.</p>
            </div>

            <div className="border-l-4 border-[#ff5b00] pl-5">
              <h3 className="text-lg font-bold text-[#0b1220] mb-2">3. Texture Matching</h3>
              <p className="text-gray-700 leading-relaxed mb-2">Matching existing textures can require additional labor and experience. Common texture styles include:</p>
              <ul className="grid grid-cols-2 gap-1">
                {["Orange peel", "Knockdown", "Smooth finish", "Hand textures"].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-[#0f766e] shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 text-sm mt-2 italic">Poor texture matching is one of the biggest signs of low-quality drywall repair.</p>
            </div>

            <div className="border-l-4 border-[#ff5b00] pl-5">
              <h3 className="text-lg font-bold text-[#0b1220] mb-1">4. Ceiling vs Wall Repairs</h3>
              <p className="text-gray-700 leading-relaxed">Ceiling repairs are typically more difficult and time-consuming than wall repairs.</p>
            </div>

            <div className="border-l-4 border-[#ff5b00] pl-5">
              <h3 className="text-lg font-bold text-[#0b1220] mb-2">5. Painting Requirements</h3>
              <p className="text-gray-700 leading-relaxed mb-2">Some drywall repairs only require patching, while others may require:</p>
              <ul className="space-y-1">
                {["Priming", "Full wall repainting", "Ceiling repainting", "Color blending"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-[#0f766e] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Common Problems */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">Common Drywall Problems in Metro East Homes</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Many homes throughout O'Fallon, Belleville, and surrounding Illinois communities experience drywall damage caused by:
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {["Seasonal humidity changes", "Home settling", "Midwest temperature fluctuations", "Plumbing leaks", "Roof leaks", "Accidental impacts", "Aging materials"].map((cause) => (
              <div key={cause} className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2 text-sm text-gray-700">
                <AlertTriangle className="h-4 w-4 text-yellow-500 shrink-0" />
                {cause}
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mb-3">Older ranch homes often develop:</p>
          <ul className="space-y-1">
            {["Stress cracks", "Nail pops", "Corner separation", "Ceiling movement"].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle className="h-4 w-4 text-[#ff5b00] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Repair vs Replacement */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">Repair vs Replacement</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Many homeowners assume damaged drywall always requires full replacement. In reality, many issues can be repaired effectively without replacing entire walls or ceilings.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">However, replacement may be recommended if:</p>
          <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-4">
            <ul className="space-y-2">
              {["Water damage is extensive", "Drywall is sagging", "Mold is present", "Structural movement continues", "Repairs have failed repeatedly"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <AlertTriangle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-gray-700 leading-relaxed">
            A professional inspection helps determine the best long-term solution. Learn more about our{" "}
            <Link href="/handyman-services/drywall-repair/" className="text-[#ff5b00] hover:underline">drywall repair service</Link>.
          </p>
        </section>

        {/* Real Project Example */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">Real Drywall Repair Project in O'Fallon</h2>
          <div className="bg-[#0b1220] text-white rounded-xl p-6">
            <p className="text-gray-300 leading-relaxed mb-4">
              Recently, Hero Handyman Pro repaired a water-damaged ceiling for a homeowner in O'Fallon after a second-floor plumbing leak caused staining, cracking, and sagging drywall.
            </p>
            <p className="text-sm font-semibold text-[#ff5b00] uppercase tracking-wide mb-2">The project included:</p>
            <ul className="space-y-2">
              {["Removing damaged drywall", "Moisture inspection", "Texture matching", "Priming and repainting"].map((step) => (
                <li key={step} className="flex items-center gap-2 text-sm text-gray-200">
                  <CheckCircle className="h-4 w-4 text-[#0f766e] shrink-0" />
                  {step}
                </li>
              ))}
            </ul>
            <p className="text-gray-300 text-sm mt-4 italic">
              The homeowner was able to avoid a much larger replacement by addressing the issue early.
            </p>
          </div>
        </section>

        {/* Warning Signs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">How to Know When Drywall Damage Should Be Repaired</h2>
          <p className="text-gray-700 leading-relaxed mb-4">You should address drywall issues if you notice:</p>
          <div className="grid sm:grid-cols-2 gap-3 mb-4">
            {["Spreading cracks", "Soft drywall", "Ceiling sagging", "Bubbling paint", "Water stains", "Loose tape joints", "Recurring nail pops"].map((sign) => (
              <div key={sign} className="flex items-center gap-2 bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-2 text-sm text-gray-700">
                <AlertTriangle className="h-4 w-4 text-yellow-500 shrink-0" />
                {sign}
              </div>
            ))}
          </div>
          <p className="text-gray-600 leading-relaxed text-sm">
            Ignoring drywall damage can sometimes lead to larger moisture or structural problems.
          </p>
        </section>

        {/* Why Choose Hero Handyman Pro */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">Why Homeowners Choose Hero Handyman Pro</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Homeowners throughout O'Fallon and the Metro East area choose Hero Handyman Pro because we focus on:
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mb-4">
            {["Clear communication", "Professional workmanship", "Dependable scheduling", "Honest recommendations", "High-quality repairs"].map((reason) => (
              <div key={reason} className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-3 py-2 text-sm text-gray-700">
                <CheckCircle className="h-4 w-4 text-green-600 shrink-0" />
                {reason}
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            With more than 35 years of experience, we help homeowners complete repairs properly while making the process simple and stress-free.
          </p>
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
            <h2 className="text-2xl font-bold mb-3">Need Drywall Repair in O'Fallon IL?</h2>
            <p className="text-white/90 mb-2">
              If you need drywall repair, ceiling repair, texture matching, or water-damage restoration in O'Fallon or the Metro East area, Hero Handyman Pro is here to help.
            </p>
            <p className="text-white/80 text-sm mb-6">Contact us today to request an estimate, send photos for a fast quote, schedule service, or discuss your repair needs.</p>
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
                <li><Link href="/handyman-services/drywall-repair/" className="text-[#ff5b00] hover:underline text-sm">Drywall Repair Service</Link></li>
                <li><Link href="/services/handyman-home-repair/" className="text-[#ff5b00] hover:underline text-sm">Home Repair &amp; Maintenance</Link></li>
                <li><Link href="/handyman-services/" className="text-[#ff5b00] hover:underline text-sm">Interior Painting</Link></li>
                <li><Link href="/handyman-services/ceiling-fan-installation/" className="text-[#ff5b00] hover:underline text-sm">Ceiling Fan Installation</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#0b1220] uppercase tracking-wide mb-3">Service Areas</h3>
              <ul className="space-y-2">
                <li><Link href="/gbp/ofallon-il/" className="text-[#ff5b00] hover:underline text-sm">Handyman in O'Fallon, IL</Link></li>
                <li><Link href="/handyman-belleville-il" className="text-[#ff5b00] hover:underline text-sm">Handyman in Belleville, IL</Link></li>
                <li><Link href="/handyman-swansea-il/" className="text-[#ff5b00] hover:underline text-sm">Handyman in Swansea, IL</Link></li>
                <li><Link href="/handyman-shiloh-il/" className="text-[#ff5b00] hover:underline text-sm">Handyman in Shiloh, IL</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#0b1220] uppercase tracking-wide mb-3">Helpful Articles</h3>
              <ul className="space-y-2">
                <li><Link href="/blog/deck-repair-cost-ofallon-il/" className="text-[#ff5b00] hover:underline text-sm font-medium">Deck Repair Cost in O'Fallon IL (2026)</Link></li>
                <li><Link href="/blog/door-repair-cost-ofallon-il/" className="text-[#ff5b00] hover:underline text-sm font-medium">Door Repair Cost in O'Fallon IL (2026)</Link></li>
                <li><Link href="/blog/window-repair-cost-ofallon-il/" className="text-[#ff5b00] hover:underline text-sm font-medium">Window Repair Cost in O'Fallon IL (2026)</Link></li>
                <li><Link href="/blog/2026-handyman-costs-metro-east-il/" className="text-[#ff5b00] hover:underline text-sm">2026 Handyman Costs Guide</Link></li>
                <li><Link href="/blog/2026-handyman-costs-metro-east-il/" className="text-[#ff5b00] hover:underline text-sm">Home Maintenance Tips: Metro East</Link></li>
              </ul>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
