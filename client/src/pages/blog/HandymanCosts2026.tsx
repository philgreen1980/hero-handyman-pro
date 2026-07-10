import SEO from "@/components/SEO";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import InlineQuoteForm from "@/components/InlineQuoteForm";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { trackCTAClick } from "@/lib/analytics";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { useSeoRoute } from '@/hooks/useSeoRoute';
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "2026 Handyman Costs in Metro East IL – What to Expect",
  "description": "Honest pricing guide for handyman services in Metro East Illinois and Greater St. Louis in 2026. Covers drywall repair, deck repair, door installation, ceiling fans, and more.",
  "datePublished": "2026-04-19",
  "dateModified": "2026-04-20",
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
    "@id": "https://www.herohandymanpro.com/blog/2026-handyman-costs-metro-east-il/"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does a handyman cost per hour in Metro East IL in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most handymen in Metro East Illinois charge between $75 and $125 per hour in 2026. Hero Handyman Pro typically provides flat-rate project pricing rather than hourly billing, so you always know the total cost upfront."
      }
    },
    {
      "@type": "Question",
      "name": "How much does drywall repair cost in Edwardsville or O'Fallon IL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Drywall repair in Metro East IL typically ranges from $75 for a small nail-hole patch up to $700+ for water-damaged sections requiring texture matching. Most common repairs (door-handle holes, anchor damage) run $150–$300."
      }
    },
    {
      "@type": "Question",
      "name": "What does deck repair cost in Metro East Illinois?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Deck board replacement and minor repairs typically cost $300–$800. Full deck restoration with new boards, rails, and staining ranges from $1,200–$2,500+. The cost depends on deck size, wood type, and extent of rot damage."
      }
    },
    {
      "@type": "Question",
      "name": "How much does door installation cost near me?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Interior door installation in Metro East IL runs $150–$350 per door including labor. Exterior door installation (entry doors, storm doors) costs $300–$700+ depending on the door type and whether a new frame is needed."
      }
    },
    {
      "@type": "Question",
      "name": "Is it worth hiring a handyman vs. a contractor for small repairs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For repairs under $2,500 that don't require licensed trade work (plumbing, electrical panels, HVAC), a handyman is almost always faster and more cost-effective than a general contractor. Handymen can typically schedule within 1–3 days versus weeks for contractors."
      }
    },
    {
      "@type": "Question",
      "name": "Do handymen charge a trip fee in Metro East IL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Some handymen charge a $50–$100 trip or assessment fee, especially for small jobs. Hero Handyman Pro offers free phone and photo estimates, and we only charge a trip fee for detailed on-site assessments for larger projects — which is credited toward the final invoice."
      }
    }
  ]
};

const pricingTable = [
  { service: "Drywall Repair (small hole)", low: "$75", high: "$150", notes: "Nail holes, anchors, small punctures" },
  { service: "Drywall Repair (large hole)", low: "$250", high: "$450", notes: "Door handle damage, plumbing access" },
  { service: "Drywall Water Damage", low: "$300", high: "$700+", notes: "Includes moisture check & texture match" },
  { service: "Deck Board Replacement", low: "$300", high: "$800", notes: "Per section; includes materials" },
  { service: "Full Deck Restoration", low: "$1,200", high: "$2,500+", notes: "New boards, rails, staining" },
  { service: "Interior Door Installation", low: "$150", high: "$350", notes: "Per door, labor included" },
  { service: "Exterior Door Installation", low: "$300", high: "$700+", notes: "Entry/storm doors, new frame if needed" },
  { service: "Ceiling Fan Installation", low: "$100", high: "$250", notes: "Existing box; add $75–$150 for new box" },
  { service: "Light Fixture Replacement", low: "$75", high: "$175", notes: "Standard ceiling or wall fixture" },
  { service: "Half-Day Handyman (4 hrs)", low: "$250", high: "$450", notes: "Multiple small tasks in one visit" },
  { service: "Full-Day Handyman (8 hrs)", low: "$450", high: "$800", notes: "Larger projects or punch lists" },
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

export default function HandymanCosts2026() {
  const seo = useSeoRoute();
  return (
    <div className="min-h-screen bg-white">
      <SEO {...seo} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container py-3">
          <PageBreadcrumb
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog/" },
              { label: "2026 Handyman Costs in Metro East IL" },
            ]}
          />
        </div>
      </div>

      {/* Article Header */}
      <article className="container py-12 max-w-3xl mx-auto">
        <header className="mb-10">
          <div className="flex items-center gap-2 text-sm text-[#ff5b00] font-semibold uppercase tracking-wider mb-3">
            <span>Pricing Guide</span>
            <span>·</span>
            <span>April 19, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0b1220] leading-tight mb-4">
            2026 Handyman Costs in Metro East IL – What to Expect
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            If you've been putting off home repairs because you're not sure what they'll cost, this guide is for you. As a handyman serving Edwardsville, O'Fallon, Belleville, Collinsville, and the greater St. Louis area, I get asked about pricing every single day. Here's an honest breakdown of what you can expect to pay for the most common handyman jobs in Metro East Illinois in 2026.
          </p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-100">
            <div className="w-10 h-10 rounded-full bg-[#0f766e] flex items-center justify-center text-white font-bold text-sm">PG</div>
            <div>
              <p className="font-semibold text-[#0b1220] text-sm">Phil Green</p>
              <p className="text-gray-500 text-xs">Owner & Master Handyman, Hero Handyman Pro · 35+ Years Experience</p>
            </div>
          </div>
        </header>

        {/* Section 1: Why Prices Vary */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">Why Handyman Prices Vary So Much</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The biggest source of confusion homeowners face is the wide range of prices they see online. A drywall repair might be quoted anywhere from $75 to $500 — and both numbers can be accurate, depending on the size of the hole, the texture match required, and whether painting is included. The same is true for deck repair, door installation, and virtually every other handyman service.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            In Metro East Illinois specifically, labor rates tend to run slightly lower than in downtown St. Louis, but material costs are essentially the same. The best way to get an accurate number is always a photo estimate or a quick phone call — which we offer for free.
          </p>
          <p className="text-gray-700 leading-relaxed">
            That said, the table below gives you a realistic range for the most common jobs we handle in Edwardsville, O'Fallon, Belleville, and surrounding communities.
          </p>
        </section>

        {/* Pricing Table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-6">2026 Handyman Pricing Guide: Metro East IL & St. Louis</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0b1220] text-white">
                  <th className="text-left px-4 py-3 font-semibold">Service</th>
                  <th className="text-center px-4 py-3 font-semibold">Low</th>
                  <th className="text-center px-4 py-3 font-semibold">High</th>
                  <th className="text-left px-4 py-3 font-semibold hidden md:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody>
                {pricingTable.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-[#0b1220]">{row.service}</td>
                    <td className="px-4 py-3 text-center text-green-700 font-semibold">{row.low}</td>
                    <td className="px-4 py-3 text-center text-[#ff5b00] font-semibold">{row.high}</td>
                    <td className="px-4 py-3 text-gray-500 hidden md:table-cell">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            * Prices reflect typical 2026 rates in Metro East IL and Greater St. Louis. Final pricing depends on scope, materials, and site conditions. All estimates are free.
          </p>
        </section>

        {/* Section 2: Most Common Jobs */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">The Most Common Jobs We Handle in Metro East</h2>

          <h3 className="text-xl font-semibold text-[#0b1220] mb-2">Drywall Repair Edwardsville IL & O'Fallon IL</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Drywall repair is our most-requested service. Most jobs fall into two categories: small holes from door handles, anchors, or accidents ($75–$300), and larger repairs from water damage or renovation work ($300–$700+). The key cost driver is texture matching — getting the repaired area to blend seamlessly with your existing wall requires skill and the right materials. We always include texture matching in our quotes.
          </p>
          <div className="my-4">
            <Link href="/handyman-services/drywall-repair/" onClick={() => trackCTAClick('Drywall Repair Blog Link', 'Blog Post Body')}>
              <span className="text-[#ff5b00] font-semibold hover:underline">→ See full drywall repair pricing and process</span>
            </Link>
          </div>

          <h3 className="text-xl font-semibold text-[#0b1220] mb-2 mt-6">Deck Repair O'Fallon IL & Edwardsville IL</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Metro East's weather — hot summers, cold winters, and spring moisture — is hard on wood decks. Board replacement and minor repairs typically run $300–$800. If you're dealing with significant rot in the joists or posts, a full restoration can reach $1,200–$2,500+. We always recommend addressing rot early: a $400 repair today prevents a $2,000 rebuild next year.
          </p>
          <div className="my-4">
            <Link href="/handyman-services/deck-repair/" onClick={() => trackCTAClick('Deck Repair Blog Link', 'Blog Post Body')}>
              <span className="text-[#ff5b00] font-semibold hover:underline">→ See full deck repair pricing and process</span>
            </Link>
          </div>

          <h3 className="text-xl font-semibold text-[#0b1220] mb-2 mt-6">Door Installation Near Me</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Interior door installation is straightforward when the rough opening is already in place — expect to pay $150–$350 per door including labor. Exterior doors are more involved, especially if the frame has rot or the door is pre-hung in a new location. Budget $300–$700+ for exterior work. We handle everything from storm doors to French doors to sliding patio doors.
          </p>
          <div className="my-4">
            <Link href="/handyman-services/door-repair/" onClick={() => trackCTAClick('Door Repair Blog Link', 'Blog Post Body')}>
              <span className="text-[#ff5b00] font-semibold hover:underline">→ See full door installation pricing and process</span>
            </Link>
          </div>
        </section>

        {/* Section 3: How to Save Money */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">How to Save Money on Handyman Work in 2026</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The single best way to reduce your handyman bill is to bundle jobs. If you have three or four small repairs — a drywall patch, a sticky door, a loose railing, and a ceiling fan swap — scheduling them in a single visit cuts the per-job cost significantly because you're not paying for separate mobilization and setup time each time.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our <Link href="/membership/" className="text-[#ff5b00] font-semibold hover:underline">Hero Membership Club</Link> takes this further: members save 15% on every job, get priority scheduling, and receive a free annual home walk-through to catch small issues before they become expensive ones. For homeowners who use handyman services more than twice a year, the membership pays for itself on the first job.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Finally, don't wait. The most expensive handyman repair is always the one that was deferred too long. A $150 drywall patch ignored for a year of moisture intrusion becomes a $700 water-damage repair. A $400 deck board replacement ignored for two seasons becomes a full deck rebuild.
          </p>
        </section>

        {/* CTA Mid-Article */}
        <div className="my-10 bg-[#0b1220] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Get a Free Quote for Your Project</h2>
          <p className="text-gray-300 mb-6">Send us a photo or call — we'll give you an honest estimate, usually the same day.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" onClick={() => trackCTAClick('Get Free Quote - Blog Mid CTA', 'Blog Post 2026 Costs')}>
              <Button className="bg-[#ff5b00] hover:bg-[#ff5b00]/90 text-white rounded-full px-8 py-5 font-bold text-base">
                Get My Free Quote →
              </Button>
            </Link>
            <a href="tel:800-741-6056">
              <Button variant="outline" className="rounded-full px-8 py-5 font-semibold border-2 border-white text-white hover:bg-white/10 text-base">
                Call 800-741-6056
              </Button>
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-6">Frequently Asked Questions</h2>
          <div className="bg-gray-50 rounded-xl px-6 divide-y divide-gray-200">
            {faqSchema.mainEntity.map((item, i) => (
              <FAQItem key={i} question={item.name} answer={item.acceptedAnswer.text} />
            ))}
          </div>
        </section>

        {/* Real Job Examples */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">Real Job Examples: What Homeowners Actually Paid</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Numbers are more useful when they're attached to real situations. Here are a few recent jobs we completed in Metro East Illinois and West St. Louis County, with actual costs.
          </p>
          <div className="space-y-5">
            {[
              {
                city: "O'Fallon, IL",
                job: "Drywall hole from door handle",
                detail: "12-inch hole in a hallway wall, textured finish to match existing orange-peel pattern.",
                cost: "$185"
              },
              {
                city: "Edwardsville, IL",
                job: "Deck board replacement",
                detail: "14 rotted deck boards replaced on a 12×16 pressure-treated deck. No structural work needed.",
                cost: "$620"
              },
              {
                city: "Ballwin, MO",
                job: "Interior door installation",
                detail: "Two interior doors hung in existing frames, including hardware installation and adjustment.",
                cost: "$490"
              },
              {
                city: "Belleville, IL",
                job: "Exterior trim rot repair",
                detail: "Rotted fascia board and two window sill corners replaced and painted to match.",
                cost: "$340"
              },
              {
                city: "Chesterfield, MO",
                job: "Half-day punch list",
                detail: "Ceiling fan swap, two drywall patches, sticky door adjustment, and a cabinet hinge repair — all in one 4-hour visit.",
                cost: "$385"
              }
            ].map((example, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-teal-700 uppercase tracking-wide mb-1">{example.city}</p>
                    <p className="font-bold text-[#0b1220] text-base mb-1">{example.job}</p>
                    <p className="text-gray-600 text-sm">{example.detail}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-xs text-gray-400 mb-0.5">Total cost</p>
                    <p className="text-2xl font-bold text-[#ff5b00]">{example.cost}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4">Job costs shown are representative examples. Actual pricing depends on materials, scope, and site conditions. All estimates are free.</p>
        </section>

        {/* Closing / Author Note */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">The Bottom Line</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Handyman pricing in Metro East Illinois in 2026 is reasonable when you work with someone who gives you a straight answer upfront. The ranges in this guide reflect real jobs we've completed in Edwardsville, O'Fallon, Belleville, Collinsville, and across the St. Louis metro area. Every project is different, but these numbers will help you budget realistically and avoid sticker shock.
          </p>
          <p className="text-gray-700 leading-relaxed">
            If you have a specific project in mind, the fastest way to get an accurate number is to send us a photo or give us a call. We respond within 24 hours, and there's never any obligation to book.
          </p>
        </section>

        {/* Inline Quote Form */}
        <InlineQuoteForm
          service="General Handyman"
          heading="Ready to Get Started? Get Your Free Quote."
          subheading="Tell us about your project. We'll respond within 24 hours with an honest, upfront estimate."
        />

        {/* Related Service Links */}
        <section className="mt-10 pt-10 border-t border-gray-100">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-[#0b1220] mb-4">Related Service Pages</h3>
              <div className="grid gap-2">
                {[
                  { label: "Drywall Repair St. Louis & Metro East", href: "/handyman-services/drywall-repair/" },
                  { label: "Deck Repair & Restoration", href: "/handyman-services/deck-repair/" },
                  { label: "Door Installation & Repair", href: "/handyman-services/door-repair/" },
                  { label: "Ceiling Fan Installation", href: "/handyman-services/ceiling-fan-installation/" },
                  { label: "Handyman Services St. Louis MO", href: "/handyman-st-louis-mo/" },
                  { label: "Edwardsville IL Handyman Services", href: "/gbp/edwardsville-il/" },
                  { label: "O'Fallon IL Handyman Services", href: "/gbp/ofallon-il/" },
                  { label: "View Completed Projects", href: "/projects/" },
                ].map((link) => (
                  <Link key={link.href} href={link.href}>
                    <span className="block text-[#ff5b00] hover:underline text-sm font-medium py-1">→ {link.label}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0b1220] mb-4">Related Articles</h3>
              <div className="grid gap-2">
                {[
                  { label: "How Much Does Drywall Repair Cost in O'Fallon, IL?", href: "/blog/drywall-repair-cost-ofallon-il/" },
                  { label: "5 Signs Your Deck Needs Repair", href: "/blog/signs-your-deck-needs-repair/" },
                  { label: "Handyman vs. Contractor: Which Do You Need?", href: "/blog/handyman-vs-contractor-metro-east-il/" },
                  { label: "Most Common Home Repairs After Winter in Illinois", href: "/blog/common-home-repairs-after-winter-illinois/" },
                  { label: "Edwardsville IL Home Repair Guide", href: "/blog/home-repairs-edwardsville-il/" },
                  { label: "Home Maintenance Tips for Metro East IL", href: "/blog/home-maintenance-tips-metro-east-il/" },
                  { label: "Spring Home Repair Checklist", href: "/blog/spring-home-repair-checklist-edwardsville-ofallon/" },
                  { label: "How to Choose a Trusted Handyman", href: "/blog/how-to-choose-handyman-st-louis/" },
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
