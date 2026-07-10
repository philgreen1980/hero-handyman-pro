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
  "headline": "Home Maintenance Tips for Metro East IL Homeowners",
  "description": "Practical home maintenance tips and seasonal checklists for homeowners in O'Fallon, Edwardsville, Belleville, Collinsville, and the Metro East Illinois area.",
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
    "@id": "https://www.herohandymanpro.com/blog/home-maintenance-tips-metro-east-il/"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much should I budget for home maintenance each year?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A commonly used rule of thumb is 1–2% of your home's value per year for maintenance. For a $300,000 home, that's $3,000–$6,000 annually. Older homes and homes with deferred maintenance may need more. Proactive maintenance is almost always less expensive than reactive repairs."
      }
    },
    {
      "@type": "Question",
      "name": "What home maintenance tasks should I do every spring in Metro East IL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every spring in Metro East IL, homeowners should: inspect the deck for rot and loose railings, check drywall for settling cracks, test all exterior doors for proper sealing, replace failed caulking around windows and doors, check gutters for winter damage, and look for water stains on ceilings from ice dam or plumbing leaks."
      }
    },
    {
      "@type": "Question",
      "name": "What is the most cost-effective home maintenance task?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Caulking replacement around windows and exterior doors is one of the highest-ROI maintenance tasks. It costs $150–$300 in labor and prevents water infiltration that can cause rot, mold, and drywall damage costing thousands to remediate. Gutter cleaning is similarly high-ROI — preventing water from backing up against the foundation or fascia."
      }
    },
    {
      "@type": "Question",
      "name": "How do I know if my home needs professional maintenance or if I can DIY?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Simple tasks like replacing light bulbs, changing HVAC filters, and cleaning gutters are reasonable DIY projects. Tasks involving texture matching, structural assessment, or anything that requires working at height or with electrical systems are better left to professionals. The cost of a bad DIY repair often exceeds the cost of hiring a professional from the start."
      }
    },
    {
      "@type": "Question",
      "name": "What is a handyman maintenance plan and is it worth it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A handyman maintenance plan (like our membership) provides priority scheduling, discounted rates, and a dedicated handyman who knows your home. It's worth it for homeowners with older homes or multiple ongoing repair needs — the savings on individual repairs and the convenience of priority scheduling typically offset the membership cost within the first 1–2 service calls."
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

export default function HomeMaintenanceTipsMetroEast() {
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
              { label: "Home Maintenance Tips for Metro East IL" },
            ]}
          />
        </div>
      </div>

      <article className="container py-12 max-w-3xl mx-auto">
        <header className="mb-10">
          <div className="flex items-center gap-2 text-sm text-[#ff5b00] font-semibold uppercase tracking-wider mb-3">
            <span>Homeowner Guide</span>
            <span>·</span>
            <span>May 12, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0b1220] leading-tight mb-4">
            Home Maintenance Tips for Metro East IL Homeowners (2026)
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Owning a home in Metro East Illinois means dealing with a specific set of maintenance challenges — clay-heavy soil that causes settling, freeze-thaw cycles that stress wood and caulking, hot humid summers that accelerate rot, and cold wet winters that test every seal and joint in your home. After 35+ years of working in this area, we've developed a clear picture of what proactive homeowners do to keep their homes in good shape — and what deferred maintenance looks like when it finally catches up.
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
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">The Core Principle: Proactive vs. Reactive Maintenance</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The single most important thing I can tell any homeowner is this: proactive maintenance is almost always less expensive than reactive repairs. A $200 deck board replacement in spring becomes a $2,000 structural repair if you wait until the rot spreads to the joists. A $150 caulking replacement becomes a $500 drywall repair if water infiltration damages the wall behind it. A $100 door adjustment becomes a $400 frame repair if the door continues to bind and warp.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The challenge is that most homeowners don't know what to look for, or they see a problem and put it on the "I'll deal with it later" list. This guide is designed to help you identify the most important maintenance tasks for Metro East Illinois homes — and understand why addressing them promptly saves money in the long run.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The general rule of thumb for home maintenance budgeting is 1–2% of your home's value per year. For a $300,000 home, that's $3,000–$6,000 annually. Homes with deferred maintenance or older construction may need more. Spreading that budget across proactive maintenance is far more effective than spending it all on emergency repairs.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">The 10 Most Important Maintenance Tasks for Metro East IL Homes</h2>

          <div className="space-y-8">
            {[
              {
                num: "1",
                title: "Annual Deck Inspection and Maintenance",
                body: "Decks are the most maintenance-intensive exterior feature of most Metro East homes. The combination of hot summers, wet springs, and freeze-thaw winters creates ideal conditions for wood deterioration. Inspect your deck every spring: walk every board, push on railings, check post bases for rot, and look for loose fasteners. Seal or stain the deck every 2–3 years to protect the wood from moisture. Early repair is always less expensive than waiting — a few bad boards replaced in spring costs a fraction of what a structural repair costs after the rot spreads.",
                link: { label: "Deck repair service", href: "/handyman-services/deck-repair/" }
              },
              {
                num: "2",
                title: "Caulking Replacement Around Windows and Doors",
                body: "Caulking has a lifespan of 5–10 years, and Metro East's freeze-thaw cycles accelerate its deterioration. Failed caulking around windows and exterior doors allows water infiltration that can lead to rot, mold, and drywall damage. Inspect caulking every spring and replace any that is cracked, pulling away, or missing. This is one of the highest-ROI maintenance tasks a homeowner can do — the $150–$300 cost of recaulking prevents water damage that can cost thousands to remediate.",
                link: null
              },
              {
                num: "3",
                title: "Drywall Crack Monitoring and Repair",
                body: "Metro East's clay-heavy soil causes foundation movement that shows up as diagonal cracks at window and door corners. Monitor these cracks annually — if they're growing, address them promptly. Small cracks (hairline to 1/8 inch) are cosmetic and can be repaired for $150–$200. Wider cracks (1/4 inch or more) may indicate more significant movement and warrant a professional assessment. Don't ignore cracks — they allow moisture infiltration and grow over time.",
                link: { label: "Drywall repair service", href: "/handyman-services/drywall-repair/" }
              },
              {
                num: "4",
                title: "Exterior Door Weatherstripping and Alignment",
                body: "Exterior doors are your home's first line of defense against weather. Weatherstripping deteriorates over time, allowing drafts that increase heating and cooling costs. Door frames shift with settling and seasonal wood movement, causing doors to stick or seal poorly. Check weatherstripping annually — if you can feel a draft around a closed door, the weatherstripping needs replacement. Test door alignment in spring and fall, when temperature and humidity changes are most pronounced.",
                link: { label: "Door repair service", href: "/handyman-services/door-repair/" }
              },
              {
                num: "5",
                title: "Gutter Cleaning and Inspection",
                body: "Clogged gutters cause water to back up against the fascia, soffit, and foundation — leading to rot, moisture infiltration, and foundation issues. Clean gutters at least twice a year: once in late spring after tree seeds and pollen, and once in late fall after leaves have fallen. Inspect gutters for proper slope, secure attachment, and damage. Downspouts should direct water at least 6 feet away from the foundation.",
                link: null
              },
              {
                num: "6",
                title: "Ceiling Fan Installation and Maintenance",
                body: "Ceiling fans are one of the most cost-effective comfort upgrades in Metro East homes. In summer, they allow you to raise the thermostat 4–6 degrees without a noticeable change in comfort — reducing cooling costs significantly. In winter, running fans in reverse at low speed pushes warm air down from the ceiling. If your home doesn't have ceiling fans in the main living areas and bedrooms, spring is the ideal time to install them before the summer heat arrives.",
                link: null
              },
              {
                num: "7",
                title: "Smoke and CO Detector Testing",
                body: "Test smoke and carbon monoxide detectors every six months and replace batteries annually (or when the low-battery alert sounds). Replace the entire unit every 10 years — the sensors degrade over time and become less reliable. This is a simple, inexpensive task that is often overlooked but is critical for home safety.",
                link: null
              },
              {
                num: "8",
                title: "HVAC Filter Replacement",
                body: "Replace HVAC filters every 1–3 months depending on filter type and home conditions (more frequently if you have pets or allergies). A clogged filter forces the HVAC system to work harder, increasing energy costs and reducing the system's lifespan. This is one of the simplest and most cost-effective maintenance tasks a homeowner can do.",
                link: null
              },
              {
                num: "9",
                title: "Exterior Wood Inspection and Painting",
                body: "Exterior wood — trim, fascia, soffits, window frames — needs to be painted or sealed every 5–7 years to prevent rot. Inspect exterior wood annually for peeling paint, soft spots, and discoloration. Address any rot promptly — rot spreads and becomes exponentially more expensive to repair the longer it's left. Touch up paint on any areas where the paint is peeling or cracking to prevent moisture infiltration.",
                link: null
              },
              {
                num: "10",
                title: "Plumbing Leak Detection",
                body: "Slow plumbing leaks are one of the most common causes of significant home damage — and they're often not noticed until the damage is extensive. Check under sinks, around toilets, and near the water heater every six months for signs of moisture. Look for water stains on ceilings, especially under bathrooms and laundry rooms. If you see brown staining on a ceiling, investigate immediately — the longer moisture sits in drywall, the more extensive and expensive the repair.",
                link: null
              },
            ].map((item, i) => (
              <div key={i} className="border-l-4 border-[#ff5b00] pl-5">
                <h3 className="text-xl font-bold text-[#0b1220] mb-2">{item.num}. {item.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-2">{item.body}</p>
                {item.link && (
                  <Link href={item.link.href} className="text-[#ff5b00] hover:underline font-medium text-sm">
                    → {item.link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">How to Save Money on Home Maintenance</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The most effective way to reduce home maintenance costs is to bundle repairs into single visits. Trip fees and setup time are a significant portion of the cost for small jobs. If you have a drywall patch, a sticking door, and a ceiling fan installation, scheduling them all at once can reduce the per-repair cost by 20–30%.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our <Link href="/handyman-services/" className="text-[#ff5b00] hover:underline font-medium">service packages</Link> are designed for exactly this — a half-day or full-day block where we work through your repair list efficiently. Many homeowners use this approach twice a year (spring and fall) to stay ahead of maintenance needs.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For homeowners with ongoing maintenance needs, our <Link href="/membership/" className="text-[#ff5b00] hover:underline font-medium">membership plan</Link> provides priority scheduling, discounted rates, and a dedicated handyman who knows your home. Members typically save 15–20% on individual repairs and benefit from faster scheduling — which matters when you have an urgent repair need.
          </p>
        </section>

        <div className="bg-[#0b1220] rounded-2xl p-8 text-white text-center mb-10">
          <h2 className="text-2xl font-bold mb-3">Schedule Your Home Maintenance Visit</h2>
          <p className="text-gray-300 mb-6">We serve homeowners throughout O'Fallon, Edwardsville, Belleville, Collinsville, Glen Carbon, and the Metro East area. Let us help you stay ahead of your home's maintenance needs.</p>
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
              { label: "Service Packages", href: "/handyman-services/" },
              { label: "Handyman Membership Plan", href: "/membership/" },
              { label: "Deck Repair Service", href: "/handyman-services/deck-repair/" },
              { label: "Drywall Repair Service", href: "/handyman-services/drywall-repair/" },
              { label: "Spring Repair Checklist", href: "/blog/spring-home-repair-checklist-edwardsville-ofallon/" },
              { label: "Home Repairs After Winter", href: "/blog/common-home-repairs-after-winter-illinois/" },
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
