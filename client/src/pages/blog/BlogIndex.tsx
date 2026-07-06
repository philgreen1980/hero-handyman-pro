import { Link } from "wouter";
import SEO from "@/components/SEO";
import { ArrowRight, Calendar, DollarSign, Tag } from "lucide-react";

import { useSeoRoute } from '@/hooks/useSeoRoute';
const posts = [
  {
    title: "2026 Handyman Costs in Metro East IL – What Homeowners Should Expect",
    slug: "/blog/2026-handyman-costs-metro-east-il/",
    date: "April 2026",
    excerpt:
      "Wondering what a handyman costs in Edwardsville, O'Fallon, or the greater St. Louis area in 2026? We break down typical pricing for drywall repair, deck work, door installation, and more — so you know what to expect before you call.",
    tags: ["Pricing", "Metro East IL", "Drywall", "Deck Repair"],
  },
  {
    title: "How to Choose a Trusted Handyman in St. Louis & Metro East (2026 Guide)",
    slug: "/blog/how-to-choose-handyman-st-louis/",
    date: "April 2026",
    excerpt:
      "Not all handymen are created equal. This guide walks you through exactly what to look for — licensing, reviews, communication, and red flags — so you can hire with confidence in St. Louis and Metro East Illinois.",
    tags: ["Hiring Tips", "St. Louis MO", "Metro East IL"],
  },
  {
    title: "Spring Home Repair Checklist for Edwardsville & O'Fallon Homeowners",
    slug: "/blog/spring-home-repair-checklist-edwardsville-ofallon/",
    date: "April 2026",
    excerpt:
      "Spring is the best time to catch small problems before they become expensive ones. Use this room-by-room checklist to inspect your deck, doors, windows, drywall, and exterior — with local tips for Metro East Illinois homes.",
    tags: ["Seasonal", "Edwardsville IL", "O'Fallon IL", "Checklist"],
  },
  {
    title: "Top Home Repairs Belleville IL Homeowners Tackle Every Spring",
    slug: "/blog/home-repairs-belleville-il/",
    date: "April 2026",
    excerpt:
      "Belleville's freeze-thaw winters leave a mark on every home. Here are the six repairs we see most often in Belleville, IL every spring — from deck boards and drywall to doors, exterior trim, and fence posts — and why spring is the right time to tackle them.",
    tags: ["Belleville IL", "Seasonal", "Deck Repair", "Drywall"],
  },
  {
    title: "How Much Does Drywall Repair Cost in O'Fallon IL?",
    slug: "/blog/drywall-repair-cost-ofallon-il/",
    date: "May 2026",
    excerpt:
      "Small repairs run $150–$350, medium repairs $350–$850, and ceiling repairs $450–$1,500+. This guide covers what drives drywall repair costs in O'Fallon and the Metro East area — water damage, texture matching, ceiling vs wall, and painting — plus a real local project example and warning signs to watch for.",
    tags: ["Pricing", "O'Fallon IL", "Drywall"],
  },
  {
    title: "How Much Does Deck Repair Cost in O'Fallon IL? (2026 Guide)",
    slug: "/blog/deck-repair-cost-ofallon-il/",
    date: "May 2026",
    excerpt:
      "Minor deck repairs run $200–$500, moderate repairs $500–$1,500, and major structural repairs $1,500–$4,000+. This guide covers what drives deck repair costs in O'Fallon — rot extent, structural vs surface damage, wood type, and railing complexity — plus a real local project example and a repair vs replacement decision guide.",
    tags: ["Pricing", "O'Fallon IL", "Deck Repair"],
  },
  {
    title: "How Much Does Door Repair Cost in O'Fallon IL? (2026 Guide)",
    slug: "/blog/door-repair-cost-ofallon-il/",
    date: "May 2026",
    excerpt:
      "Minor door repairs run $75–$200, hardware and frame repairs $200–$900, and full entry door replacement $800–$2,500+. This guide covers what drives door repair costs in O'Fallon — frame rot, foundation settling, exterior vs interior doors — plus a real local project example and a repair vs replacement decision guide.",
    tags: ["Pricing", "O'Fallon IL", "Door Repair"],
  },
  {
    title: "How Much Does Window Repair Cost in O'Fallon IL? (2026 Guide)",
    slug: "/blog/window-repair-cost-ofallon-il/",
    date: "May 2026",
    excerpt:
      "Minor window repairs run $75–$250, glass seal replacements $200–$600, and full window replacement $500–$1,500+ per window. This guide covers what drives window repair costs in O'Fallon — failed IGU seals, frame rot, hardware wear — plus a real local project example showing how targeted repairs saved a homeowner $3,000+ vs full replacement.",
    tags: ["Pricing", "O'Fallon IL", "Window Repair"],
  },
  {
    title: "Most Common Home Repairs After Winter in Illinois",
    slug: "/blog/common-home-repairs-after-winter-illinois/",
    date: "May 2026",
    excerpt:
      "Illinois winters are hard on homes. Here are the 8 most common repairs Metro East homeowners need after the freeze-thaw season — from deck damage and drywall cracks to door misalignment and failed caulking — and how to prioritize them.",
    tags: ["Seasonal", "Metro East IL", "Winter", "Deck Repair"],
  },
  {
    title: "5 Signs Your Deck Needs Repair (Not Just Cleaning)",
    slug: "/blog/signs-your-deck-needs-repair/",
    date: "May 2026",
    excerpt:
      "A dirty deck and a damaged deck look similar from a distance — but they need very different solutions. Here are 5 signs that your deck needs structural repair, not just a power wash and stain, and what each warning sign means for your repair budget.",
    tags: ["Deck Repair", "Metro East IL", "Homeowner Tips"],
  },
  {
    title: "Handyman vs. Contractor: Which Do You Need for Your Home Repair?",
    slug: "/blog/handyman-vs-contractor-metro-east-il/",
    date: "May 2026",
    excerpt:
      "Not sure whether to hire a handyman or a general contractor? This guide explains the difference, when to use each, and how to save money on home repairs in Metro East IL — with a quick-reference comparison table for common tasks.",
    tags: ["Hiring Tips", "Metro East IL", "Homeowner Guide"],
  },
  {
    title: "Edwardsville IL Home Repair Guide: What Local Homeowners Need to Know",
    slug: "/blog/home-repairs-edwardsville-il/",
    date: "May 2026",
    excerpt:
      "A practical home repair guide for Edwardsville, IL homeowners — covering the most common repairs in Edwardsville's diverse housing stock, a seasonal maintenance calendar, and how to find reliable local help.",
    tags: ["Edwardsville IL", "Local Guide", "Deck Repair", "Drywall"],
  },
  {
    title: "Home Maintenance Tips for Metro East IL Homeowners (2026)",
    slug: "/blog/home-maintenance-tips-metro-east-il/",
    date: "May 2026",
    excerpt:
      "Practical home maintenance tips and seasonal checklists for homeowners in O'Fallon, Edwardsville, Belleville, Collinsville, and the Metro East Illinois area. The 10 most important maintenance tasks — and how to save money by staying proactive.",
    tags: ["Homeowner Tips", "Metro East IL", "Seasonal", "Maintenance"],
  },
];

export default function BlogIndex() {
  const seo = useSeoRoute();
  return (
    <div className="flex flex-col min-h-screen">
      <SEO {...seo} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <span className="text-xs uppercase tracking-widest text-teal-400 font-semibold">Resources</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 leading-tight">
            Handyman Tips & Home Repair Guides
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Practical advice for St. Louis and Metro East Illinois homeowners — pricing guides, hiring tips, and seasonal maintenance checklists from the team at Hero Handyman Pro.
          </p>
        </div>
      </section>

      {/* Cost Guides Featured Row */}
      <section className="py-12 px-6 bg-[#f9fafb] border-b border-gray-200">
        <div className="max-w-[1120px] mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <DollarSign className="h-5 w-5 text-[#ff5b00]" />
            <h2 className="text-lg font-bold text-[#0b1220] uppercase tracking-wide">Cost Guides</h2>
            <span className="text-xs text-gray-500 font-normal normal-case tracking-normal ml-1">— local pricing for O'Fallon &amp; Metro East IL</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Drywall Repair Cost",
                subtitle: "O'Fallon IL · 2026",
                range: "$150 – $1,500+",
                href: "/blog/drywall-repair-cost-ofallon-il/",
                desc: "Small holes, water damage, ceiling repairs, and texture matching.",
              },
              {
                title: "Deck Repair Cost",
                subtitle: "O'Fallon IL · 2026",
                range: "$200 – $4,000+",
                href: "/blog/deck-repair-cost-ofallon-il/",
                desc: "Board replacement, railing repair, structural rot, and full rebuilds.",
              },
              {
                title: "Door Repair Cost",
                subtitle: "O'Fallon IL · 2026",
                range: "$75 – $2,500+",
                href: "/blog/door-repair-cost-ofallon-il/",
                desc: "Sticking doors, broken hardware, frame rot, and entry door replacement.",
              },
              {
                title: "Window Repair Cost",
                subtitle: "O'Fallon IL · 2026",
                range: "$75 – $1,500+",
                href: "/blog/window-repair-cost-ofallon-il/",
                desc: "Foggy glass, failed seals, broken hardware, and full window replacement.",
              },
            ].map((guide) => (
              <Link key={guide.href} href={guide.href}>
                <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:border-[#ff5b00] hover:shadow-md transition-all cursor-pointer h-full flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-bold text-[#0b1220] text-base leading-tight">{guide.title}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{guide.subtitle}</p>
                    </div>
                    <span className="text-xs font-semibold text-[#ff5b00] bg-[#ff5b00]/10 px-2 py-1 rounded-full whitespace-nowrap ml-3">{guide.range}</span>
                  </div>
                  <p className="text-sm text-gray-600 flex-1">{guide.desc}</p>
                  <div className="flex items-center gap-1 mt-4 text-[#ff5b00] text-sm font-semibold">
                    Read guide <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Post List */}
      <section className="py-16 px-6 bg-white flex-1">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1 flex-wrap gap-y-1">
                    <Tag className="w-4 h-4" />
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-teal-50 text-teal-700 text-xs font-medium px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-snug">
                  <Link href={post.slug}>
                    <span className="hover:text-teal-700 transition-colors cursor-pointer">
                      {post.title}
                    </span>
                  </Link>
                </h2>

                <p className="text-gray-600 mb-5 leading-relaxed">{post.excerpt}</p>

                <Link href={post.slug}>
                  <span className="inline-flex items-center gap-2 text-teal-700 font-semibold hover:text-teal-800 transition-colors cursor-pointer">
                    Read the full guide
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-6 bg-teal-700 text-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">Ready for your project? Get a free quote in 24 hrs.</h2>
          <p className="text-teal-100 mb-6 max-w-xl mx-auto">
            Call Hero Handyman Pro or submit a request online. We serve St. Louis and Metro East Illinois — Edwardsville, O'Fallon, Belleville, Collinsville, and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:800-741-6056"
              className="inline-block bg-white text-teal-700 font-bold px-8 py-3 rounded-full hover:bg-teal-50 transition-colors"
            >
              Call 800-741-6056
            </a>
            <Link href="/#contact">
              <span className="inline-block border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white hover:text-teal-700 transition-colors cursor-pointer">
                Get a Free Quote
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
