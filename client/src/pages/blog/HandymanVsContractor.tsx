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
  "headline": "Handyman vs. Contractor: Which Do You Need for Your Home Repair?",
  "description": "A practical guide to understanding the difference between a handyman and a general contractor — and how to choose the right professional for your specific home repair needs.",
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
    "@id": "https://www.herohandymanpro.com/blog/handyman-vs-contractor-metro-east-il/"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What's the difference between a handyman and a general contractor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A handyman handles a wide range of smaller repairs and maintenance tasks — drywall, carpentry, fixtures, doors, decks. A general contractor manages larger construction projects, coordinates subcontractors, and typically handles work that requires licensed trade permits (major electrical, plumbing, HVAC, structural). Handymen are faster to schedule and less expensive for the right type of work."
      }
    },
    {
      "@type": "Question",
      "name": "When should I hire a handyman instead of a contractor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hire a handyman for repairs and maintenance tasks under $2,500 that don't require licensed trade work: drywall repair, deck repair, door installation, fixture replacement, carpentry, painting, and general home maintenance. A handyman can typically schedule within 1–3 days and costs significantly less than a general contractor for these tasks."
      }
    },
    {
      "@type": "Question",
      "name": "Do handymen need to be licensed in Illinois?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Illinois does not require a state handyman license for general repair work. However, handymen should be insured (general liability and workers' compensation) and should not perform work that requires a licensed trade — such as electrical panel work, plumbing rough-in, or HVAC installation. Always ask for proof of insurance before hiring any home repair professional."
      }
    },
    {
      "@type": "Question",
      "name": "Can a handyman do electrical work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A handyman can typically handle simple electrical tasks like replacing light fixtures, ceiling fans, outlets, and switches — work that doesn't require permits or panel work. For new circuits, panel upgrades, or any work requiring an electrical permit, you need a licensed electrician."
      }
    },
    {
      "@type": "Question",
      "name": "How much cheaper is a handyman vs. a general contractor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For small to medium repairs, a handyman is typically 40–60% less expensive than a general contractor for the same work. General contractors have higher overhead, require minimum project sizes, and often subcontract the actual work. For repairs under $2,500, a handyman is almost always the more cost-effective choice."
      }
    }
  ]
};

const comparisonRows = [
  { task: "Drywall repair (small to medium)", handyman: "✓ Yes", contractor: "Overkill", recommendation: "Handyman" },
  { task: "Deck board replacement", handyman: "✓ Yes", contractor: "Overkill", recommendation: "Handyman" },
  { task: "Door installation", handyman: "✓ Yes", contractor: "Overkill", recommendation: "Handyman" },
  { task: "Ceiling fan installation", handyman: "✓ Yes", contractor: "Overkill", recommendation: "Handyman" },
  { task: "Light fixture replacement", handyman: "✓ Yes", contractor: "Overkill", recommendation: "Handyman" },
  { task: "Tile repair (small area)", handyman: "✓ Yes", contractor: "Overkill", recommendation: "Handyman" },
  { task: "Full bathroom remodel", handyman: "Partial", contractor: "✓ Yes", recommendation: "Contractor" },
  { task: "Kitchen addition", handyman: "No", contractor: "✓ Yes", recommendation: "Contractor" },
  { task: "Electrical panel upgrade", handyman: "No", contractor: "✓ Licensed electrician", recommendation: "Licensed electrician" },
  { task: "HVAC installation", handyman: "No", contractor: "✓ Licensed HVAC", recommendation: "Licensed HVAC" },
  { task: "Room addition", handyman: "No", contractor: "✓ Yes", recommendation: "Contractor" },
  { task: "Punch list (multiple small tasks)", handyman: "✓ Ideal", contractor: "Too expensive", recommendation: "Handyman" },
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

export default function HandymanVsContractor() {
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
              { label: "Handyman vs. Contractor" },
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
            Handyman vs. Contractor: Which Do You Need for Your Home Repair?
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            One of the most common questions homeowners ask us is: "Should I hire a handyman or a general contractor for this?" The answer depends on the type of work, the scope, and whether permits or licensed trade work is required. This guide will help you make the right call — and avoid overpaying for work that doesn't need a contractor.
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
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">What Is a Handyman?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A handyman is a skilled professional who handles a wide range of home repair and maintenance tasks — typically smaller jobs that don't require licensed trade work or building permits. Good handymen are generalists with deep practical experience across carpentry, drywall, painting, fixture installation, door and window work, and general maintenance.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The key advantage of a handyman is versatility. When you have a list of five different repairs — a drywall patch, a sticking door, a ceiling fan installation, a deck board replacement, and a leaky faucet — a handyman can handle all of them in a single visit. A general contractor would either decline the work as too small or charge a premium for the minimum project size.
          </p>
          <p className="text-gray-700 leading-relaxed">
            At Hero Handyman Pro, we specialize in exactly this type of work — the repairs and maintenance tasks that keep your home in good shape and your to-do list manageable. With 35+ years of experience, our team handles <Link href="/handyman-services/drywall-repair/" className="text-[#ff5b00] hover:underline font-medium">drywall repair</Link>, <Link href="/handyman-services/deck-repair/" className="text-[#ff5b00] hover:underline font-medium">deck repair</Link>, <Link href="/handyman-services/door-repair/" className="text-[#ff5b00] hover:underline font-medium">door installation and repair</Link>, carpentry, and dozens of other common home repair tasks throughout Metro East Illinois.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">What Is a General Contractor?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A general contractor (GC) manages larger construction projects — additions, full remodels, new construction. They coordinate multiple subcontractors (electricians, plumbers, HVAC technicians, framers) and handle the permitting and inspection process for work that requires it.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            General contractors are the right choice for projects that involve structural changes, require licensed trade work, or are large enough to require project management. A kitchen addition, a full bathroom remodel, a room addition, or a basement finish are all appropriate GC projects.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The downside of a general contractor for small repairs is cost and availability. Most GCs have minimum project sizes ($5,000–$10,000 or more), long lead times (weeks to months), and overhead that makes them expensive for work that doesn't require their level of coordination. Using a GC for a drywall patch or a door installation is like using a semi-truck to deliver a pizza.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">Quick Reference: Handyman vs. Contractor by Task</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0b1220] text-white">
                  <th className="text-left px-4 py-3 font-semibold">Task</th>
                  <th className="text-left px-4 py-3 font-semibold">Handyman</th>
                  <th className="text-left px-4 py-3 font-semibold hidden md:table-cell">Contractor</th>
                  <th className="text-left px-4 py-3 font-semibold">Best Choice</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 text-[#0b1220] font-medium">{row.task}</td>
                    <td className="px-4 py-3 text-gray-600">{row.handyman}</td>
                    <td className="px-4 py-3 text-gray-600 hidden md:table-cell">{row.contractor}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs font-bold px-2 py-1 rounded-full ${row.recommendation === "Handyman" ? "bg-green-100 text-green-700" : row.recommendation === "Contractor" ? "bg-blue-100 text-blue-700" : "bg-purple-100 text-purple-700"}`}>
                        {row.recommendation}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">The "Gray Zone": When It Could Go Either Way</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Some projects fall in the middle — they're larger than typical handyman work but smaller than a full contractor project. Deck rebuilds, bathroom tile replacements, and interior painting projects are examples. For these, the right choice depends on the specific scope and your priorities.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            If speed and cost are priorities, a handyman is often the better choice for gray-zone projects — we can typically schedule within a week and complete the work without the overhead of a GC. If the project requires permits or involves structural changes, a licensed contractor is the right call.
          </p>
          <p className="text-gray-700 leading-relaxed">
            When in doubt, call us. We'll give you an honest assessment of whether the work is in our wheelhouse or whether you need a specialist. We'd rather refer you to the right professional than take on work that isn't the right fit.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">What to Look for When Hiring Either</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Whether you're hiring a handyman or a contractor, the vetting process should include the same basic steps:
          </p>
          <ul className="space-y-4 mb-4">
            {[
              { title: "Proof of insurance", desc: "Ask for a certificate of insurance showing general liability coverage. For contractors, also ask for workers' compensation. Don't hire anyone who can't provide this." },
              { title: "References or reviews", desc: "Ask for references from recent jobs similar to yours, or check Google and Angi reviews. Look for patterns in the feedback — communication, punctuality, and quality of work are the most important factors." },
              { title: "Written estimate", desc: "Get a written estimate before any work starts. It should specify the scope of work, materials to be used, timeline, and total cost. Verbal estimates lead to disputes." },
              { title: "Clear communication", desc: "How quickly do they respond to your initial inquiry? Do they show up on time for the estimate? These are strong indicators of how they'll behave during the job." },
              { title: "No large upfront deposits", desc: "Legitimate handymen and contractors don't require large upfront payments. A small deposit (10–25%) for materials is reasonable; paying more than 50% before work starts is a red flag." },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[#ff5b00] font-bold mt-0.5 shrink-0">✓</span>
                <div>
                  <span className="font-semibold text-[#0b1220]">{item.title}: </span>
                  <span className="text-gray-700">{item.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">How to Save Money: Bundle Your Repairs</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            One of the most effective ways to reduce your home repair costs is to bundle multiple small repairs into a single visit. Trip fees and setup time are a significant portion of the cost for small jobs. If you have a drywall patch, a sticking door, and a ceiling fan installation, scheduling them all at once can reduce the per-repair cost by 20–30%.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our <Link href="/handyman-services/" className="text-[#ff5b00] hover:underline font-medium">service packages</Link> are designed exactly for this — a half-day or full-day block where we work through your repair list efficiently. This approach is particularly popular with homeowners who have accumulated a list of deferred repairs.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For homeowners with ongoing maintenance needs, our <Link href="/membership/" className="text-[#ff5b00] hover:underline font-medium">membership plan</Link> provides priority scheduling, discounted rates, and a dedicated handyman who knows your home. It's the most cost-effective option for homeowners who need regular attention.
          </p>
        </section>

        <div className="bg-[#0b1220] rounded-2xl p-8 text-white text-center mb-10">
          <h2 className="text-2xl font-bold mb-3">Not Sure What You Need? Just Ask.</h2>
          <p className="text-gray-300 mb-6">Describe your repair and we'll tell you honestly whether it's a handyman job or whether you need a specialist. Free estimates, no pressure.</p>
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
              { label: "All Handyman Services", href: "/handyman-services/" },
              { label: "Service Packages", href: "/handyman-services/" },
              { label: "Handyman Membership Plan", href: "/membership/" },
              { label: "How to Choose a Handyman", href: "/blog/how-to-choose-handyman-st-louis/" },
              { label: "2026 Handyman Costs Guide", href: "/blog/2026-handyman-costs-metro-east-il/" },
              { label: "Contact Us for a Free Estimate", href: "/contact/" },
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
