import SEO from "@/components/SEO";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import InlineQuoteForm from "@/components/InlineQuoteForm";
import { Link } from "wouter";
import { trackCTAClick } from "@/lib/analytics";
import { ChevronDown, ChevronUp, CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";
import { useSeoRoute } from '@/hooks/useSeoRoute';
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Choose a Trusted Handyman in St. Louis & Metro East (2026 Guide)",
  "description": "A practical 2026 guide to finding a reliable, vetted handyman in St. Louis and Metro East Illinois. Covers licensing, reviews, red flags, and questions to ask before hiring.",
  "datePublished": "2026-04-19",
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
    "@id": "https://www.herohandymanpro.com/blog/how-to-choose-handyman-st-louis/"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What should I look for when hiring a handyman near me?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Look for verifiable Google reviews, proof of liability insurance, a clear written estimate before work begins, and a track record of completing similar projects. Avoid anyone who demands full payment upfront or refuses to provide references."
      }
    },
    {
      "@type": "Question",
      "name": "Does a handyman need to be licensed in Illinois or Missouri?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In Illinois and Missouri, general handyman work does not require a state license for most repairs under a certain dollar threshold. However, licensed trade work (electrical panels, plumbing rough-in, HVAC) always requires a licensed contractor. A reputable handyman will tell you upfront when a job requires a licensed trade."
      }
    },
    {
      "@type": "Question",
      "name": "How do I verify a handyman is insured?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ask for a certificate of insurance (COI) showing general liability coverage. A legitimate handyman will provide this without hesitation. Hero Handyman Pro carries full liability insurance on every job."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best handyman in St. Louis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The best handyman for your project is one who has strong local reviews, communicates clearly, provides written estimates, and has experience with your specific type of repair. Hero Handyman Pro has 235+ five-star reviews across St. Louis and Metro East Illinois."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can a handyman come to my home?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most reputable handymen in the St. Louis area can schedule within 1–5 business days for non-urgent repairs. Hero Handyman Pro offers same-day and next-day availability for urgent issues in Edwardsville, O'Fallon, Belleville, and surrounding communities."
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
      {open && <p className="pb-4 text-gray-600 text-sm leading-relaxed">{answer}</p>}
    </div>
  );
}

const greenFlags = [
  "Verified Google reviews with responses from the owner",
  "Proof of liability insurance available on request",
  "Written estimate before any work begins",
  "Clear communication about timeline and scope",
  "References from local homeowners in your area",
  "Transparent about what they can and can't do",
  "Charges a fair deposit (25–50%), not full payment upfront",
];

const redFlags = [
  "No online presence or reviews whatsoever",
  "Demands full cash payment before starting",
  "Can't provide proof of insurance",
  "Gives a verbal-only estimate with no written breakdown",
  "Pressures you to decide immediately",
  "Significantly undercuts every other quote (often signals shortcuts)",
  "Doesn't show up for the initial estimate without calling",
];

export default function HowToChooseHandyman() {
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
              { label: "How to Choose a Trusted Handyman" },
            ]}
          />
        </div>
      </div>

      <article className="container py-12 max-w-3xl mx-auto">
        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-2 text-sm text-[#ff5b00] font-semibold uppercase tracking-wider mb-3">
            <span>Hiring Guide</span>
            <span>·</span>
            <span>April 19, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0b1220] leading-tight mb-4">
            How to Choose a Trusted Handyman in St. Louis &amp; Metro East (2026 Guide)
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Searching "handyman near me" returns dozens of results — but how do you know who to trust inside your home? After 30 years in the trades and thousands of jobs across St. Louis and Metro East Illinois, I've seen what separates a great handyman from a nightmare hire. Here's exactly what to look for.
          </p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-100">
            <div className="w-10 h-10 rounded-full bg-[#0f766e] flex items-center justify-center text-white font-bold text-sm">PG</div>
            <div>
              <p className="font-semibold text-[#0b1220] text-sm">Phil Green</p>
              <p className="text-gray-500 text-xs">Owner & Master Handyman, Hero Handyman Pro · 35+ Years Experience</p>
            </div>
          </div>
        </header>

        {/* Top CTA */}
        <div className="bg-[#0b1220] rounded-xl p-6 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-bold text-lg leading-snug">Ready for your project?</p>
            <p className="text-gray-300 text-sm mt-1">Get a free quote in 24 hrs — no pressure, no obligation.</p>
          </div>
          <Link href="/#contact">
            <button
              className="bg-[#ff5b00] hover:bg-[#e04e00] text-white font-bold px-6 py-3 rounded-lg text-sm whitespace-nowrap transition-colors"
              onClick={() => trackCTAClick("Get a Free Quote", "blog-choose-handyman-top-cta")}
            >
              Get a Free Quote →
            </button>
          </Link>
        </div>

        {/* Section 1 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">Start With Reviews — But Read Them Carefully</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Google reviews are the single most reliable signal for a local handyman. Look for a business with at least 20–30 reviews and a rating above 4.5 stars. More importantly, read the content of the reviews: do they mention specific jobs, the handyman's name, and real details about the experience? Generic five-star reviews with no text are easy to fake.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Also check how the owner responds to reviews — especially negative ones. A professional who responds calmly and constructively to criticism is far more trustworthy than one who argues with unhappy customers online.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Hero Handyman Pro has 235+ verified Google reviews from homeowners in{" "}
            <Link href="/gbp/edwardsville-il/" className="text-[#ff5b00] hover:underline">Edwardsville</Link>,{" "}
            <Link href="/gbp/ofallon-il/" className="text-[#ff5b00] hover:underline">O'Fallon</Link>,{" "}
            <Link href="/handyman-belleville-il" className="text-[#ff5b00] hover:underline">Belleville</Link>, and across the Metro East.
          </p>
        </section>

        {/* Green Flags / Red Flags */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-6">Green Flags vs. Red Flags When Hiring a Handyman</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5" /> Green Flags (Hire with Confidence)
              </h3>
              <ul className="space-y-2">
                {greenFlags.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-green-900">
                    <CheckCircle className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <h3 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                <XCircle className="h-5 w-5" /> Red Flags (Proceed with Caution)
              </h3>
              <ul className="space-y-2">
                {redFlags.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-red-900">
                    <XCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">Always Get a Written Estimate</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A verbal quote is not a quote — it's a starting point for a higher final bill. Any reputable handyman should provide a written estimate that itemizes labor and materials before a single tool comes out of the truck. This protects both of you.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            For larger projects like{" "}
            <Link href="/handyman-services/deck-repair/" className="text-[#ff5b00] hover:underline">deck repair</Link> or{" "}
            <Link href="/handyman-services/door-repair/" className="text-[#ff5b00] hover:underline">door installation</Link>, ask for a scope-of-work document that lists exactly what is and isn't included. "Deck repair" can mean very different things to different people.
          </p>
          <p className="text-gray-700 leading-relaxed">
            At Hero Handyman Pro, every job starts with a free photo or phone estimate. We provide a written scope before scheduling, so there are no surprises on invoice day.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">Ask About Insurance — Every Time</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If a handyman damages your property or gets injured on your job site, you could be liable if they don't carry insurance. Always ask for a certificate of general liability insurance before work begins. A legitimate professional will provide it without hesitation.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This is especially important for jobs involving ladders, power tools, or work near plumbing and electrical — such as{" "}
            <Link href="/handyman-services/ceiling-fan-installation/" className="text-[#ff5b00] hover:underline">ceiling fan installation</Link> or{" "}
            <Link href="/carpentry-services/" className="text-[#ff5b00] hover:underline">exterior carpentry</Link>.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">Match the Handyman to the Job</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Not every handyman is equally skilled at every task. Someone who excels at painting and drywall may not have the carpentry background for a structural deck repair. When you call, describe your project in detail and ask directly: "Have you done this type of work before? Can you show me examples?"
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Hero Handyman Pro specializes in{" "}
            <Link href="/handyman-services/drywall-repair/" className="text-[#ff5b00] hover:underline">drywall repair</Link>,{" "}
            <Link href="/handyman-services/deck-repair/" className="text-[#ff5b00] hover:underline">deck and porch repair</Link>,{" "}
            <Link href="/handyman-services/door-repair/" className="text-[#ff5b00] hover:underline">door installation and repair</Link>,{" "}
            <Link href="/carpentry-services/" className="text-[#ff5b00] hover:underline">exterior carpentry</Link>, and general{" "}
            <Link href="/handyman-services/home-repair-services/" className="text-[#ff5b00] hover:underline">home repair punch lists</Link> across St. Louis and Metro East.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-6">Frequently Asked Questions</h2>
          <div className="border border-gray-200 rounded-xl divide-y divide-gray-200 overflow-hidden">
            {faqSchema.mainEntity.map((item, i) => (
              <FAQItem key={i} question={item.name} answer={item.acceptedAnswer.text} />
            ))}
          </div>
        </section>

        {/* Bottom CTA / Quote Form */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-2">Ready to Hire a Handyman You Can Trust?</h2>
          <p className="text-gray-600 mb-6">
            Hero Handyman Pro serves homeowners across{" "}
            <Link href="/service-areas/st-louis-mo-handyman/" className="text-[#ff5b00] hover:underline">St. Louis</Link>,{" "}
            <Link href="/gbp/edwardsville-il/" className="text-[#ff5b00] hover:underline">Edwardsville</Link>,{" "}
            <Link href="/gbp/ofallon-il/" className="text-[#ff5b00] hover:underline">O'Fallon</Link>,{" "}
            <Link href="/handyman-belleville-il" className="text-[#ff5b00] hover:underline">Belleville</Link>, and surrounding Metro East communities.
            Send us a photo of your project and get a free, written estimate within 24 hours.
          </p>
          <InlineQuoteForm
            service="General Handyman"
            heading="Get Your Free Quote in 24 Hours"
            subheading="No pressure. No obligation. Just an honest estimate from a handyman you can trust."
          />
        </section>

        {/* Related Articles & Resources */}
        <section className="mt-10 pt-10 border-t border-gray-100">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-[#0b1220] mb-4">Related Articles</h3>
              <div className="grid gap-2">
                {[
                  { label: "2026 Handyman Costs in Metro East IL", href: "/blog/2026-handyman-costs-metro-east-il/" },
                  { label: "5 Signs Your Deck Needs Repair", href: "/blog/signs-your-deck-needs-repair/" },
                  { label: "Most Common Home Repairs After Winter in Illinois", href: "/blog/common-home-repairs-after-winter-illinois/" },
                  { label: "How Much Does Drywall Repair Cost in O'Fallon?", href: "/blog/drywall-repair-cost-ofallon-il/" },
                  { label: "Edwardsville IL Home Repair Guide", href: "/blog/home-repairs-edwardsville-il/" },
                  { label: "Home Maintenance Tips for Metro East IL", href: "/blog/home-maintenance-tips-metro-east-il/" },
                  { label: "Spring Home Repair Checklist", href: "/blog/spring-home-repair-checklist-edwardsville-ofallon/" },
                  { label: "Top Home Repairs in Belleville IL", href: "/blog/home-repairs-belleville-il/" },
                ].map((link) => (
                  <Link key={link.href} href={link.href}>
                    <span className="block text-[#ff5b00] hover:underline text-sm font-medium py-1">→ {link.label}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0b1220] mb-4">Service Pages</h3>
              <div className="grid gap-2">
                {[
                  { label: "Deck Repair & Restoration", href: "/handyman-services/deck-repair/" },
                  { label: "Drywall & Ceiling Repair", href: "/handyman-services/drywall-repair/" },
                  { label: "Door Installation & Repair", href: "/handyman-services/door-repair/" },
                  { label: "Ceiling Fan Installation", href: "/handyman-services/ceiling-fan-installation/" },
                  { label: "Exterior Carpentry", href: "/carpentry-services/" },
                  { label: "Home Repair Service Packages", href: "/handyman-services/" },
                  { label: "Hero Membership Club", href: "/membership/" },
                  { label: "View Completed Projects", href: "/projects/" },
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
