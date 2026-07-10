import SEO from "@/components/SEO";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import InlineQuoteForm from "@/components/InlineQuoteForm";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { trackCTAClick } from "@/lib/analytics";
import { ChevronDown, ChevronUp, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useSeoRoute } from '@/hooks/useSeoRoute';
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Top Home Repairs Belleville IL Homeowners Tackle Every Spring",
  "description": "A practical guide to the most common spring home repairs in Belleville, IL — from deck boards and drywall to doors and exterior trim.",
  "datePublished": "2026-04-20",
  "dateModified": "2026-04-20",
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
    "@id": "https://www.herohandymanpro.com/blog/home-repairs-belleville-il/"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the most common home repair in Belleville IL in spring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Deck and porch repairs are the most common spring service call in Belleville. The freeze-thaw cycle through winter causes deck boards to warp, crack, or pop nails, and the damage becomes visible once snow melts. Drywall repairs from winter humidity and door adjustments from seasonal settling are also very common."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a handyman cost in Belleville IL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most handyman jobs in Belleville IL range from $75 for small repairs (outlet replacement, caulking) to $800+ for larger projects like deck restoration or door replacement. Hero Handyman Pro provides flat-rate project pricing with a free written estimate before any work begins."
      }
    },
    {
      "@type": "Question",
      "name": "Does Hero Handyman Pro serve Belleville IL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Hero Handyman Pro regularly serves Belleville, IL and surrounding communities including Swansea, Shiloh, O'Fallon, Collinsville, and Fairview Heights. Same-week scheduling is typically available."
      }
    },
    {
      "@type": "Question",
      "name": "Should I repair or replace my deck in Belleville IL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If your deck's structural posts and joists are solid, repair is almost always the better value. Replacing individual boards, tightening hardware, and refinishing the surface can extend a deck's life by 10+ years at a fraction of full replacement cost. A quick inspection will tell you which path makes more sense for your situation."
      }
    }
  ]
};

const repairItems = [
  {
    title: "Deck & Porch Board Replacement",
    icon: "🪵",
    description: "Belleville's freeze-thaw winters are hard on wood. By April, warped boards, popped nails, and soft spots from moisture are the most common issues we find. Addressing them early prevents structural damage to joists and posts.",
    link: "/handyman-services/deck-repair/",
    linkLabel: "Deck Repair Services"
  },
  {
    title: "Drywall Repair & Patching",
    icon: "🔧",
    description: "Winter humidity and temperature swings cause drywall to crack, especially around door frames and corners. Spring is the right time to patch, texture-match, and repaint before the cracks widen.",
    link: "/handyman-services/drywall-repair/",
    linkLabel: "Drywall Repair Services"
  },
  {
    title: "Door Adjustments & Replacement",
    icon: "🚪",
    description: "Doors that stick in winter often swing freely in summer — and vice versa. Spring is the ideal time to plane sticking doors, replace worn weatherstripping, and install new storm doors before the heat arrives.",
    link: "/handyman-services/door-repair/",
    linkLabel: "Door Repair & Installation"
  },
  {
    title: "Exterior Trim & Siding Repairs",
    icon: "🏠",
    description: "Peeling caulk, cracked trim boards, and loose siding are common after a Belleville winter. Left unaddressed, they allow water intrusion that leads to rot and mold. A few hours of trim work in spring prevents thousands in remediation costs later.",
    link: "/handyman-services/exterior-carpentry/",
    linkLabel: "Exterior Carpentry Services"
  },
  {
    title: "Window Caulking & Weatherstripping",
    icon: "🪟",
    description: "Failed caulk around window frames is one of the leading causes of energy loss in older Belleville homes. Re-caulking and replacing weatherstripping is a low-cost repair that pays for itself in reduced cooling bills by June.",
    link: "/handyman-services/window-installation/",
    linkLabel: "Window Services"
  },
  {
    title: "Fence & Gate Repairs",
    icon: "🪚",
    description: "Wood privacy fences take a beating over winter. Loose posts, split rails, and sagging gates are all common spring repairs. Catching them early — before the ground fully dries — makes post-setting much easier.",
    link: "/handyman-services/exterior-carpentry/",
    linkLabel: "Exterior Carpentry Services"
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

export default function BellevilleHomeRepairs() {
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
              { label: "Top Home Repairs Belleville IL" },
            ]}
          />
        </div>
      </div>

      {/* Article Header */}
      <article className="container py-12 max-w-3xl mx-auto">
        <header className="mb-10">
          <div className="flex items-center gap-2 text-sm text-[#ff5b00] font-semibold uppercase tracking-wider mb-3">
            <span>Local Guide · Belleville, IL</span>
            <span>·</span>
            <span>April 20, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0b1220] leading-tight mb-4">
            Top Home Repairs Belleville IL Homeowners Tackle Every Spring
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Spring in Belleville means one thing for most homeowners: the to-do list that built up all winter is finally impossible to ignore. After months of freeze-thaw cycles, wind, and ice, the damage shows up in your deck boards, your drywall, your doors, and your exterior trim. Here's a practical look at the repairs we see most often in Belleville — and why spring is the right time to tackle them.
          </p>
          {/* Author byline */}
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-100">
            <div className="w-10 h-10 rounded-full bg-[#0f766e] flex items-center justify-center text-white font-bold text-sm">PG</div>
            <div>
              <p className="font-semibold text-[#0b1220] text-sm">Phil Green</p>
              <p className="text-gray-500 text-xs">Owner & Master Handyman, Hero Handyman Pro · 35+ Years Experience</p>
            </div>
          </div>
        </header>

        {/* Top CTA */}
        <div className="bg-[#0b1220] rounded-2xl p-6 mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-white font-bold text-lg">Ready for your project?</p>
            <p className="text-gray-300 text-sm">Get a free quote in 24 hrs — no obligation, no pressure.</p>
          </div>
          <Link href="/#contact">
            <Button
              className="bg-[#ff5b00] hover:bg-[#e04e00] text-white font-bold rounded-full px-6 shrink-0"
              onClick={() => trackCTAClick("Get Free Quote", "Belleville Blog Top CTA")}
            >
              Get Free Quote
            </Button>
          </Link>
        </div>

        {/* Why Spring Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">Why Spring Is the Best Time for Home Repairs in Belleville</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Belleville sits in the heart of Metro East Illinois, where winters are cold enough to cause real structural stress on homes but not so extreme that damage is always obvious in the moment. The real impact shows up in spring: boards that absorbed moisture all winter start to warp as they dry out, caulk that contracted in the cold has cracked and pulled away from frames, and doors that swelled shut in January are now sticking in their frames.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The practical reason to act in spring rather than summer is simple: contractors and handymen are easier to schedule in April and May than in July, when every homeowner in St. Clair County is trying to get work done at once. Getting ahead of the rush means faster service, better availability, and often better pricing.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Below are the six repairs we handle most frequently for Belleville homeowners every spring, along with what to watch for and when to call.
          </p>
        </section>

        {/* Repair Items Grid */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-6">The 6 Most Common Spring Repairs in Belleville, IL</h2>
          <div className="grid gap-6">
            {repairItems.map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-6 hover:border-[#0f766e] transition-colors">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{item.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#0b1220] mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">{item.description}</p>
                    <Link href={item.link}>
                      <span className="text-[#0f766e] text-sm font-semibold hover:underline cursor-pointer">
                        {item.linkLabel} →
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Belleville-specific section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">What Makes Belleville Homes Different</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Belleville has a wide mix of housing stock — from older craftsman bungalows near the historic downtown to newer construction in subdivisions off Frank Scott Parkway. The older homes (pre-1980) tend to need more attention to exterior trim, original wood windows, and plaster-to-drywall transitions. Newer homes more commonly need deck maintenance, door hardware upgrades, and caulking around vinyl windows and siding.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            We've worked in virtually every neighborhood in Belleville — from Shiloh Valley to the West Main Street corridor — and understand the specific materials and construction methods common in each area. That local knowledge means fewer surprises and faster project completion.
          </p>
          <div className="bg-teal-50 border border-teal-200 rounded-xl p-5">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-teal-900 text-sm">Serving All of Belleville, IL</p>
                <p className="text-teal-700 text-sm mt-1">
                  Including Shiloh, Swansea, Fairview Heights, O'Fallon, and surrounding St. Clair County communities.{" "}
                  <Link href="/handyman-belleville-il">
                    <span className="underline font-medium cursor-pointer">See our Belleville service page →</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* When to DIY vs Call */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">When to DIY vs. When to Call a Handyman</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Not every spring repair requires a professional. Replacing a single loose hinge, touching up paint on a trim board, or re-caulking a single window are all reasonable DIY tasks for a handy homeowner with a few hours and the right materials.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Where it makes sense to call us: when the repair involves multiple systems (a door that sticks because the frame has shifted, which also means checking the threshold and weatherstripping), when texture-matching is required on drywall, or when you're dealing with rot — because rot almost always extends further than it looks from the surface.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The rule of thumb we tell every Belleville homeowner: if you're not sure what you're looking at, a free estimate costs nothing and tells you exactly what you're dealing with before you commit to anything.
          </p>
        </section>

        {/* Internal links */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-[#0b1220] mb-4">Related Services & Resources</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Handyman Services in Belleville IL", href: "/handyman-belleville-il" },
              { label: "Deck Repair Services", href: "/handyman-services/deck-repair/" },
              { label: "Drywall Repair Services", href: "/handyman-services/drywall-repair/" },
              { label: "Door Repair & Installation", href: "/handyman-services/door-repair/" },
              { label: "Exterior Carpentry", href: "/carpentry-services/" },
              { label: "2026 Handyman Costs in Metro East IL", href: "/blog/2026-handyman-costs-metro-east-il/" },
              { label: "Spring Repair Checklist for Edwardsville & O'Fallon", href: "/blog/spring-home-repair-checklist-edwardsville-ofallon/" },
              { label: "5 Signs Your Deck Needs Repair", href: "/blog/signs-your-deck-needs-repair/" },
              { label: "Most Common Home Repairs After Winter in Illinois", href: "/blog/common-home-repairs-after-winter-illinois/" },
              { label: "Handyman vs. Contractor: Which Do You Need?", href: "/blog/handyman-vs-contractor-metro-east-il/" },
              { label: "Home Maintenance Tips for Metro East IL", href: "/blog/home-maintenance-tips-metro-east-il/" },
              { label: "Edwardsville IL Home Repair Guide", href: "/blog/home-repairs-edwardsville-il/" },
              { label: "View Completed Projects", href: "/projects/" },
            ].map(link => (
              <Link key={link.href} href={link.href}>
                <span className="inline-block border border-gray-300 text-gray-700 hover:border-[#0f766e] hover:text-[#0f766e] font-medium px-4 py-2 rounded-full text-sm cursor-pointer transition-colors">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-6">Frequently Asked Questions</h2>
          <div className="border border-gray-200 rounded-xl overflow-hidden px-4">
            {faqSchema.mainEntity.map((item, i) => (
              <FAQItem key={i} question={item.name} answer={item.acceptedAnswer.text} />
            ))}
          </div>
        </section>

        {/* Inline Quote Form */}
        <section className="mb-10">
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-[#0b1220] mb-2">Ready for your project? Get a free quote in 24 hrs.</h2>
            <p className="text-gray-600 mb-6">
              Tell us about your repair and we'll get back to you within one business day with a clear, flat-rate estimate. No obligation, no pressure.
            </p>
            <InlineQuoteForm service="Handyman Services – Belleville IL" />
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="bg-[#0b1220] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Serving Belleville, IL and All of Metro East</h2>
          <p className="text-gray-300 mb-6">
            Same-week scheduling available. Free written estimate before any work begins.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/#contact">
              <Button
                className="bg-[#ff5b00] hover:bg-[#e04e00] text-white font-bold rounded-full px-8"
                onClick={() => trackCTAClick("Get Free Quote", "Belleville Blog Bottom CTA")}
              >
                Get Free Quote
              </Button>
            </Link>
            <a href="tel:800-741-6056">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#0b1220] font-bold rounded-full px-8">
                Call 800-741-6056
              </Button>
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
