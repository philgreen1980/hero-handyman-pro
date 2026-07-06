import SEO from "@/components/SEO";
import EstimatorTool from "@/components/EstimatorTool";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import InlineQuoteForm from "@/components/InlineQuoteForm";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useState } from "react";
import {
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Hammer,
  ChevronDown,
  ChevronUp,
  Phone,
  MessageSquare,
  Star,
  Info,
  Lightbulb,
  Shield,
  Clock,
  Wrench,
  Home,
} from "lucide-react";
import { usePhone } from "@/contexts/PhoneContext";
import { PriceRangeChart, StandardVsComplexChart, RealProjectCostChart } from "@/components/PricingCharts";
import { useSeoRoute } from '@/hooks/useSeoRoute';

// ─── SEO ──────────────────────────────────────────────────────────────────────// ─── Schema ───────────────────────────────────────────────────────────────────

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Handyman Pricing Guide for St. Louis & Metro East IL (2026)",
  description:
    "Transparent handyman pricing guide covering drywall repair, deck repair, door installation, ceiling fans, and more. Real pricing ranges, real project examples, and honest answers about what affects cost.",
  datePublished: "2026-05-23",
  dateModified: "2026-05-23",
  author: {
    "@type": "Person",
    name: "Phil Green",
    jobTitle: "Owner & Master Handyman",
    worksFor: { "@type": "LocalBusiness", name: "Hero Handyman Pro" },
  },
  publisher: {
    "@type": "Organization",
    name: "Hero Handyman Pro",
    url: "https://herohandymanpro.com",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://herohandymanpro.com/handyman-pricing/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a handyman charge per hour in St. Louis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most handymen in the St. Louis and Metro East area charge between $75–$125 per hour for general repairs. Specialty work (electrical, plumbing, structural) typically runs $100–$175/hr. Hero Handyman Pro charges by the project, not by the hour, so you know the total cost before we start.",
      },
    },
    {
      "@type": "Question",
      name: "Why do handyman prices vary so much?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Prices vary based on the scope of work, materials needed, how accessible the work area is, whether permits are required, the contractor's experience level, and their overhead costs (insurance, tools, vehicles, employees). A $50/hr handyman and a $125/hr handyman often deliver very different results.",
      },
    },
    {
      "@type": "Question",
      name: "Do you charge for estimates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We provide free estimates for all projects. For larger jobs, we may do a brief on-site visit to give you an accurate quote. For smaller repairs, we can often quote by phone or text based on photos.",
      },
    },
    {
      "@type": "Question",
      name: "What's included in a handyman project price?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our project prices include labor, standard materials, cleanup, and a satisfaction guarantee. We'll itemize materials separately if you prefer to supply them yourself. We never add surprise fees after the job is done.",
      },
    },
    {
      "@type": "Question",
      name: "Is it cheaper to hire a handyman or a contractor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For small-to-medium repairs and improvements, a handyman is almost always less expensive than a licensed contractor. Contractors have higher overhead (larger crews, permits for every job, specialty licensing) that gets passed to you. For major structural work, electrical panels, or full remodels, a licensed contractor is the right choice.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer any discounts or financing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Hero Membership Club members save 15% on every job. We also offer bundled pricing when you combine multiple repairs in one visit — you save on the trip charge and setup time. For larger projects, we can discuss payment schedules.",
      },
    },
  ],
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const pricingTable = [
  {
    service: "Drywall Repair",
    low: "$150",
    high: "$1,500+",
    typical: "$250–$600",
    notes: "Size, water damage, texture matching",
    link: "/blog/drywall-repair-cost-ofallon-il/",
  },
  {
    service: "Deck Repair",
    low: "$200",
    high: "$4,000+",
    typical: "$400–$1,200",
    notes: "Board count, rot, structural damage",
    link: "/blog/deck-repair-cost-ofallon-il/",
  },
  {
    service: "Door Repair & Installation",
    low: "$75",
    high: "$2,500+",
    typical: "$200–$900",
    notes: "Hardware, frame rot, sticking, full replacement",
    link: "/blog/door-repair-cost-ofallon-il/",
  },
  {
    service: "Window Repair",
    low: "$75",
    high: "$1,500+",
    typical: "$200–$600",
    notes: "Failed seals, foggy glass, hardware, frame rot",
    link: "/blog/window-repair-cost-ofallon-il/",
  },
  {
    service: "Ceiling Fan Installation",
    low: "$125",
    high: "$400",
    typical: "$150–$250",
    notes: "Existing box, wiring complexity, height",
    link: "/handyman-services/ceiling-fan-installation/",
  },
  {
    service: "Fence Repair",
    low: "$150",
    high: "$2,000+",
    typical: "$300–$800",
    notes: "Post replacement, panel count, material",
    link: "/handyman-services/fence-repair/",
  },
  {
    service: "Exterior Carpentry / Wood Rot",
    low: "$200",
    high: "$3,000+",
    typical: "$400–$1,000",
    notes: "Extent of rot, material, painting",
    link: "/handyman-services/exterior-carpentry/",
  },
  {
    service: "Interior Trim & Finish Work",
    low: "$150",
    high: "$1,500",
    typical: "$300–$700",
    notes: "Linear footage, profile complexity, painting",
    link: "/handyman-services/trim-carpentry/",
  },
  {
    service: "Faucet / Fixture Repair",
    low: "$100",
    high: "$500",
    typical: "$125–$300",
    notes: "Fixture type, shutoff access, supply lines",
    link: "/handyman-services/faucet-install-and-repair/",
  },
  {
    service: "General Punch List (per visit)",
    low: "$150",
    high: "$600",
    typical: "$200–$400",
    notes: "Number of tasks, materials needed",
    link: "/handyman-services/home-repair-services/",
  },
];

const realProjects = [
  {
    title: "Water-Damaged Ceiling Repair — O'Fallon, IL",
    description:
      "A homeowner in O'Fallon had a 3×4 ft ceiling section damaged after a slow roof leak. We removed the damaged drywall, treated for mold prevention, installed new drywall, matched the existing orange-peel texture, and primed. The homeowner painted.",
    cost: "$485",
    time: "Half day",
    icon: <Home className="h-5 w-5 text-teal-600" />,
  },
  {
    title: "Deck Board Replacement — Edwardsville, IL",
    description:
      "12 deck boards were rotted on a 12×16 pressure-treated deck. We replaced all 12 boards with matching PT lumber, re-secured loose railings, and re-drove all fasteners. No structural damage found.",
    cost: "$620",
    time: "Full day",
    icon: <Hammer className="h-5 w-5 text-teal-600" />,
  },
  {
    title: "3-Door Interior Install — Belleville, IL",
    description:
      "A homeowner renovating their hallway needed three interior prehung doors installed with new casing trim. We installed all three doors, shimmed and plumbed each, installed trim, and adjusted hardware. Painting was done by the homeowner.",
    cost: "$780",
    time: "Full day",
    icon: <Wrench className="h-5 w-5 text-teal-600" />,
  },
  {
    title: "Punch List Before Home Sale — St. Louis, MO",
    description:
      "A seller needed 11 items addressed before listing: drywall patches (×4), door adjustments (×3), caulking, a ceiling fan swap, a leaky faucet, and exterior trim touch-up. We completed everything in one visit.",
    cost: "$950",
    time: "Full day",
    icon: <CheckCircle className="h-5 w-5 text-teal-600" />,
  },
];

const hiddenCosts = [
  {
    title: "Permit Fees",
    detail:
      "Some projects (structural changes, certain electrical work, new decks over a certain size) require permits. Permit fees in St. Clair and Madison counties typically run $75–$300. We'll tell you upfront if your project needs one.",
  },
  {
    title: "Concealed Damage",
    detail:
      "Once we open a wall or pull up a deck board, we sometimes find rot, mold, or structural damage that wasn't visible. We always stop and show you before proceeding — you decide how to handle it.",
  },
  {
    title: "Material Price Fluctuations",
    detail:
      "Lumber, drywall, and hardware prices change. Our quotes are valid for 30 days. If material costs shift significantly before your project starts, we'll discuss it with you.",
  },
  {
    title: "Paint & Finishing",
    detail:
      "Most of our repair quotes do not include painting unless specified. Drywall repairs, for example, are primed and ready for paint — but the paint coat is typically a separate line item or done by the homeowner.",
  },
  {
    title: "Disposal Fees",
    detail:
      "For larger projects involving significant debris (old deck boards, drywall, rotted wood), we may charge a small disposal fee or haul-away fee. We'll always disclose this upfront.",
  },
  {
    title: "Access & Site Conditions",
    detail:
      "Hard-to-reach areas (vaulted ceilings, tight crawlspaces, second-story exterior work) take more time and may require specialized equipment. These factors are factored into your quote.",
  },
];

const faqs = [
  {
    question: "How much does a handyman charge per hour in St. Louis?",
    answer:
      "Most handymen in the St. Louis and Metro East area charge between $75–$125 per hour for general repairs. Specialty work (electrical, plumbing, structural) typically runs $100–$175/hr. Hero Handyman Pro charges by the project, not by the hour, so you know the total cost before we start.",
  },
  {
    question: "Why do handyman prices vary so much?",
    answer:
      "Prices vary based on the scope of work, materials needed, how accessible the work area is, whether permits are required, the contractor's experience level, and their overhead costs (insurance, tools, vehicles, employees). A $50/hr handyman and a $125/hr handyman often deliver very different results.",
  },
  {
    question: "Do you charge for estimates?",
    answer:
      "No. We provide free estimates for all projects. For larger jobs, we may do a brief on-site visit to give you an accurate quote. For smaller repairs, we can often quote by phone or text based on photos.",
  },
  {
    question: "What's included in a handyman project price?",
    answer:
      "Our project prices include labor, standard materials, cleanup, and a satisfaction guarantee. We'll itemize materials separately if you prefer to supply them yourself. We never add surprise fees after the job is done.",
  },
  {
    question: "Is it cheaper to hire a handyman or a contractor?",
    answer:
      "For small-to-medium repairs and improvements, a handyman is almost always less expensive than a licensed contractor. Contractors have higher overhead (larger crews, permits for every job, specialty licensing) that gets passed to you. For major structural work, electrical panels, or full remodels, a licensed contractor is the right choice.",
  },
  {
    question: "Do you offer any discounts or financing?",
    answer:
      "Yes. Hero Membership Club members save 15% on every job. We also offer bundled pricing when you combine multiple repairs in one visit — you save on the trip charge and setup time. For larger projects, we can discuss payment schedules.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function PricingHub() {
  const seo = useSeoRoute();
  const { phone, phoneDisplay } = usePhone();
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  return (
    <>
      <SEO {...seo} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-white">
        {/* ── Breadcrumb ── */}
        <div className="bg-gray-50 border-b border-gray-100">
          <div className="container py-3">
            <PageBreadcrumb
              crumbs={[
                { label: "Home", href: "/" },
                { label: "Handyman Pricing Guide" },
              ]}
            />
          </div>
        </div>

        {/* ── HERO ── */}
        <section className="bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 text-white py-16 lg:py-24">
          <div className="container max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <DollarSign className="h-4 w-4 text-orange-300" />
              <span>Transparent Pricing — No Guesswork</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
              Handyman Pricing Guide for{" "}
              <span className="text-orange-300">St. Louis & Metro East IL</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 mb-8 max-w-3xl leading-relaxed">
              Most contractors hide their prices. We don't. This guide gives you
              real pricing ranges, honest explanations of what drives costs up or
              down, and real project examples — so you can make a confident
              decision before you ever call us.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`tel:${phone}`}>
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full px-8"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call for a Free Quote
                </Button>
              </a>
              <a href="/#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-teal-900 font-bold rounded-full px-8"
                >
                  Request an Estimate Online
                </Button>
              </a>
            </div>
            {/* Trust bar */}
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/70">
              {[
                "Free estimates — always",
                "No hourly surprises",
                "Flat-rate project pricing",
                "Licensed & insured",
                "35+ years experience",
              ].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-orange-300 shrink-0" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── TABLE OF CONTENTS ── */}
        <section className="bg-teal-50 border-y border-teal-100 py-8">
          <div className="container max-w-4xl">
            <p className="text-sm font-semibold text-teal-800 uppercase tracking-wide mb-4">
              What's in this guide
            </p>
            <div className="grid sm:grid-cols-2 gap-2 text-sm">
              {[
                ["#why-prices-vary", "Why handyman prices vary"],
                ["#factors-up", "What makes projects cost more"],
                ["#factors-down", "What keeps costs lower"],
                ["#expensive-vs-cheap", "Expensive vs. cheap contractors"],
                ["#pricing-table", "Typical price ranges by service"],
                ["#real-projects", "Real project examples with pricing"],
                ["#hidden-costs", "Hidden costs to watch for"],
                ["#payment", "Payment & financing options"],
                ["#worth-it", "Is it worth hiring a pro?"],
                ["#faq", "Pricing FAQs"],
                ["#estimator", "Free project cost estimator"],
                ["#get-quote", "Get your free estimate"],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="flex items-center gap-2 text-teal-700 hover:text-teal-900 hover:underline py-1"
                >
                  <span className="text-orange-400">→</span>
                  {label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 1: WHY PRICES VARY ── */}
        <section id="why-prices-vary" className="py-16 bg-white">
          <div className="container max-w-4xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-teal-100 p-3 rounded-xl shrink-0">
                <Info className="h-6 w-6 text-teal-700" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  Why Handyman Prices Vary So Much
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  If you've ever gotten three quotes for the same repair and
                  received wildly different numbers, you're not alone. Here's
                  the honest truth about why that happens.
                </p>
              </div>
            </div>

            <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Handyman pricing isn't arbitrary — but it's also not as simple
                as a flat rate per hour. Every project is different. A drywall
                patch in a standard 8-foot ceiling is a very different job from
                the same patch on a 12-foot vaulted ceiling with a custom
                texture. A door installation in a square, plumb frame takes half
                the time of one in a 1940s house where nothing is level.
              </p>
              <p>
                The biggest variables are: <strong>scope of work</strong> (how
                much needs to be done), <strong>materials</strong> (what they
                cost and whether you supply them), <strong>access</strong> (how
                easy it is to get to the work area), <strong>concealed
                conditions</strong> (what we find once we open things up), and{" "}
                <strong>the contractor's overhead</strong> (insurance, tools,
                vehicles, experience level).
              </p>
              <p>
                We believe the best thing we can do for you is to be completely
                transparent about all of this — before you call, before you
                commit, and before any work begins. That's what this page is
                for.
              </p>
            </div>

            {/* Price Range Chart */}
            <div className="mt-8 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <PriceRangeChart />
            </div>
          </div>
        </section>

        {/* ── SECTION 2: FACTORS THAT INCREASE COST ── */}
        <section id="factors-up" className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <div className="flex items-start gap-4 mb-8">
              <div className="bg-red-100 p-3 rounded-xl shrink-0">
                <TrendingUp className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Factors That Increase Project Costs
                </h2>
                <p className="text-gray-600">
                  Understanding these helps you set realistic expectations —
                  and helps you avoid surprises.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {[
                {
                  title: "Water or Mold Damage",
                  detail:
                    "Water damage almost always means more work than it looks. Once drywall gets wet, insulation may need replacement, framing may need treatment, and mold prevention adds time and materials.",
                },
                {
                  title: "Difficult Access",
                  detail:
                    "Vaulted ceilings, tight crawlspaces, second-story exterior work, or areas requiring furniture removal all add time. Time is cost.",
                },
                {
                  title: "Concealed Structural Issues",
                  detail:
                    "Rot, pest damage, or out-of-square framing discovered once we open a wall or floor can significantly expand scope. We always show you before proceeding.",
                },
                {
                  title: "Custom or Specialty Materials",
                  detail:
                    "Matching a discontinued trim profile, sourcing composite decking to match an existing deck, or finding a specific door style all add material cost and sometimes lead time.",
                },
                {
                  title: "Texture Matching",
                  detail:
                    "Matching an existing drywall texture (knockdown, orange peel, hand texture) takes skill and time. Poor texture matching is one of the most common complaints about low-cost repairs.",
                },
                {
                  title: "Permit Requirements",
                  detail:
                    "Some projects require permits — new decks, structural changes, certain electrical work. Permit fees ($75–$300 in most local jurisdictions) and inspection scheduling add to total cost.",
                },
                {
                  title: "Emergency or Rush Scheduling",
                  detail:
                    "If you need same-day or next-day service for an urgent repair, expect to pay a small premium. We try to accommodate urgent requests, but rush jobs have real costs.",
                },
                {
                  title: "High-End Material Upgrades",
                  detail:
                    "Choosing composite over pressure-treated lumber, solid wood over MDF trim, or premium fixtures over standard ones will increase material costs — but often improves longevity significantly.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white border border-red-100 rounded-xl p-5 flex gap-3"
                >
                  <AlertTriangle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 3: FACTORS THAT LOWER COST ── */}
        <section id="factors-down" className="py-16 bg-white">
          <div className="container max-w-4xl">
            <div className="flex items-start gap-4 mb-8">
              <div className="bg-green-100 p-3 rounded-xl shrink-0">
                <TrendingDown className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Factors That Keep Costs Lower
                </h2>
                <p className="text-gray-600">
                  There are real ways to reduce your total project cost without
                  cutting corners on quality.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {[
                {
                  title: "Bundle Multiple Repairs in One Visit",
                  detail:
                    "The biggest savings opportunity. When we're already at your home, adding a second or third task costs a fraction of what a separate visit would. Our trip charge and setup time are shared across all tasks.",
                },
                {
                  title: "Supply Your Own Materials",
                  detail:
                    "If you purchase materials yourself (doors, fixtures, lumber), you pay only for labor. This works well when you've already found a specific product you want.",
                },
                {
                  title: "Flexible Scheduling",
                  detail:
                    "If you can schedule during our slower periods (typically mid-week), we can sometimes offer better pricing than peak weekend slots.",
                },
                {
                  title: "Hero Membership Club",
                  detail:
                    "Members save 15% on every job, get priority scheduling, and receive annual home maintenance check-ins. For homeowners who use us more than once a year, membership pays for itself quickly.",
                },
                {
                  title: "Clear Access to Work Area",
                  detail:
                    "Moving furniture, clearing a path to the work area, and having the space ready when we arrive reduces billable time. Small prep on your end = real savings.",
                },
                {
                  title: "Standard Materials & Finishes",
                  detail:
                    "Choosing standard-grade materials (pressure-treated lumber, standard drywall, stock door sizes) keeps material costs predictable and lower than custom or premium options.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white border border-green-100 rounded-xl p-5 flex gap-3"
                >
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 4 & 5: EXPENSIVE VS CHEAP ── */}
        <section id="expensive-vs-cheap" className="py-16 bg-teal-900 text-white">
          <div className="container max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Why Some Contractors Cost More — And Why Some Cost Less
            </h2>
            <p className="text-white/75 mb-10 text-lg">
              This is the question most homeowners are really asking when they
              research prices. Here's the honest answer.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Why more expensive */}
              <div className="bg-white/10 border border-white/20 rounded-2xl p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="bg-orange-500/20 p-2 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-orange-300" />
                  </div>
                  <h3 className="text-lg font-bold text-orange-200">
                    Why Some Contractors Charge More
                  </h3>
                </div>
                <ul className="space-y-3 text-sm text-white/80">
                  {[
                    "Fully licensed and insured — protecting you if something goes wrong",
                    "Background-checked technicians you can trust in your home",
                    "Proper tools and equipment for every job type",
                    "Warranty on labor — they come back if something fails",
                    "Experienced enough to spot problems before they become expensive",
                    "Transparent pricing with written estimates before work begins",
                    "Consistent communication — you know when they're coming",
                  ].map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <CheckCircle className="h-4 w-4 text-orange-300 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why cheaper */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="bg-red-500/20 p-2 rounded-lg">
                    <TrendingDown className="h-5 w-5 text-red-300" />
                  </div>
                  <h3 className="text-lg font-bold text-red-200">
                    Why Some Contractors Charge Less
                  </h3>
                </div>
                <ul className="space-y-3 text-sm text-white/70">
                  {[
                    "No insurance — if they're injured on your property, you may be liable",
                    "No warranty — if the repair fails next month, you pay again",
                    "Limited experience — they may not recognize related problems",
                    "Cutting corners on materials to keep bids low",
                    "No written estimate — scope creep and surprise charges are common",
                    "Unreliable scheduling — no-shows and delays are frequent",
                    "May not pull permits, creating problems when you sell your home",
                  ].map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <AlertTriangle className="h-4 w-4 text-red-300 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-white/10 border border-white/20 rounded-xl p-5">
              <p className="text-white/90 text-sm leading-relaxed">
                <strong className="text-orange-200">The bottom line:</strong>{" "}
                The cheapest quote rarely delivers the best value. A $200
                savings on a repair that fails in 6 months — and costs $400 to
                redo — isn't a savings at all. We price fairly, explain
                everything upfront, and stand behind our work.
              </p>
            </div>

            {/* Video suggestion */}
            <div className="mt-6 bg-amber-900/40 border border-amber-600/30 rounded-xl p-5 flex gap-3">
              <Lightbulb className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-amber-300 mb-1">
                  🎥 Suggested Video: "What to Ask Before Hiring a Handyman"
                </p>
                <p className="text-sm text-amber-200/70">
                  A short 2–3 minute video of Phil walking through the 5
                  questions every homeowner should ask before hiring any
                  contractor would perform extremely well here. Topics: Are you
                  insured? Do you provide written estimates? Do you warranty your
                  work? Can I see references? Will you pull permits if needed?
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 6: PRICING TABLE ── */}
        <section id="pricing-table" className="py-16 bg-white">
          <div className="container max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Typical Price Ranges by Service
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These are real ranges based on jobs we've completed in the St.
                Louis and Metro East area. Your project may fall anywhere in
                this range depending on the factors above.
              </p>
            </div>

            {/* Desktop table */}
            <div className="hidden md:block overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-teal-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold">Service</th>
                    <th className="text-center px-4 py-4 font-semibold">Low End</th>
                    <th className="text-center px-4 py-4 font-semibold">Typical Range</th>
                    <th className="text-center px-4 py-4 font-semibold">High End</th>
                    <th className="text-left px-4 py-4 font-semibold">Main Cost Drivers</th>
                    <th className="text-center px-4 py-4 font-semibold">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingTable.map((row, i) => (
                    <tr
                      key={row.service}
                      className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-5 py-4 font-semibold text-gray-900">
                        {row.service}
                      </td>
                      <td className="px-4 py-4 text-center text-green-700 font-medium">
                        {row.low}
                      </td>
                      <td className="px-4 py-4 text-center">
                        <span className="bg-teal-50 text-teal-800 font-semibold px-3 py-1 rounded-full text-xs">
                          {row.typical}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-center text-red-600 font-medium">
                        {row.high}
                      </td>
                      <td className="px-4 py-4 text-gray-500 text-xs">
                        {row.notes}
                      </td>
                      <td className="px-4 py-4 text-center">
                        <Link href={row.link}>
                          <span className="text-teal-700 hover:text-teal-900 underline text-xs font-medium cursor-pointer">
                            Full guide →
                          </span>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden space-y-4">
              {pricingTable.map((row) => (
                <div
                  key={row.service}
                  className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-gray-900">{row.service}</h3>
                    <Link href={row.link}>
                      <span className="text-teal-700 text-xs underline cursor-pointer">
                        Full guide →
                      </span>
                    </Link>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    <div className="text-center">
                      <p className="text-xs text-gray-500 mb-1">Low</p>
                      <p className="text-green-700 font-semibold text-sm">{row.low}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-500 mb-1">Typical</p>
                      <p className="text-teal-800 font-bold text-sm">{row.typical}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-500 mb-1">High</p>
                      <p className="text-red-600 font-semibold text-sm">{row.high}</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">{row.notes}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-xs text-gray-400 mt-5">
              Prices reflect typical projects in St. Louis and Metro East IL as of 2026. Your quote may vary. All estimates are free.
            </p>

            {/* Standard vs Complex Chart */}
            <div className="mt-8 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <StandardVsComplexChart />
            </div>
          </div>
        </section>

        {/* ── SECTION 7: REAL PROJECTS ── */}
        <section id="real-projects" className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Real Projects with Real Pricing
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These are actual jobs we've completed for homeowners in the St.
                Louis and Metro East area. Names are omitted for privacy, but
                the details and pricing are real.
              </p>
            </div>

            <div className="space-y-4">
              {realProjects.map((project, i) => (
                <div
                  key={project.title}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() =>
                      setExpandedProject(expandedProject === i ? null : i)
                    }
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-teal-50 p-2.5 rounded-xl">{project.icon}</div>
                      <div>
                        <h3 className="font-bold text-gray-900">{project.title}</h3>
                        <div className="flex items-center gap-4 mt-1">
                          <span className="text-lg font-bold text-teal-700">
                            {project.cost}
                          </span>
                          <span className="text-sm text-gray-500 flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" />
                            {project.time}
                          </span>
                        </div>
                      </div>
                    </div>
                    {expandedProject === i ? (
                      <ChevronUp className="h-5 w-5 text-gray-400 shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400 shrink-0" />
                    )}
                  </button>
                  {expandedProject === i && (
                    <div className="px-6 pb-6 border-t border-gray-100 pt-4">
                      <p className="text-gray-700 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Real Project Cost Chart */}
            <div className="mt-8 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <RealProjectCostChart />
            </div>

            {/* Video placeholder — owner to upload */}
            <div className="mt-6 bg-gray-50 border border-gray-200 rounded-xl p-5 flex gap-3">
              <Lightbulb className="h-5 w-5 text-gray-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-gray-600 mb-1">
                  🎥 Video Coming Soon: "Before &amp; After Project Walkthrough"
                </p>
                <p className="text-sm text-gray-500">
                  Phil will walk through a completed project — showing the before
                  condition, the work done, and the finished result. Check back soon.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 8: HIDDEN COSTS ── */}
        <section id="hidden-costs" className="py-16 bg-white">
          <div className="container max-w-4xl">
            <div className="flex items-start gap-4 mb-8">
              <div className="bg-orange-100 p-3 rounded-xl shrink-0">
                <AlertTriangle className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Hidden Costs Homeowners Should Know About
                </h2>
                <p className="text-gray-600">
                  We believe in full transparency. Here are the things that can
                  add to a project cost — and how we handle each one.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {hiddenCosts.map((item) => (
                <div
                  key={item.title}
                  className="border border-orange-100 rounded-xl p-5 bg-orange-50/30 flex gap-4"
                >
                  <div className="bg-orange-100 p-2 rounded-lg h-fit">
                    <DollarSign className="h-4 w-4 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-teal-50 border border-teal-200 rounded-xl p-6">
              <div className="flex gap-3">
                <Shield className="h-5 w-5 text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-teal-900 mb-1">
                    Our Promise: No Surprise Charges
                  </p>
                  <p className="text-sm text-teal-800 leading-relaxed">
                    We provide a written estimate before any work begins. If we
                    discover something unexpected mid-project, we stop, show
                    you, explain the options, and get your approval before
                    proceeding. You are never charged for work you didn't
                    authorize.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 9: PAYMENT OPTIONS ── */}
        <section id="payment" className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <div className="flex items-start gap-4 mb-8">
              <div className="bg-blue-100 p-3 rounded-xl shrink-0">
                <DollarSign className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Payment & Financing Options
                </h2>
                <p className="text-gray-600">
                  We want to make it easy to get your home repaired — including
                  the payment part.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 mb-8">
              {[
                {
                  title: "Cash & Check",
                  detail:
                    "Accepted for all projects. Payment is due upon completion of work.",
                  badge: "Most Common",
                  badgeColor: "bg-green-100 text-green-800",
                },
                {
                  title: "Credit & Debit Cards",
                  detail:
                    "We accept all major credit cards via secure mobile payment. A small processing fee may apply.",
                  badge: "Convenient",
                  badgeColor: "bg-blue-100 text-blue-800",
                },
                {
                  title: "Venmo / Zelle / PayPal",
                  detail:
                    "Digital payment apps accepted for all project sizes. Fast, easy, and no fees.",
                  badge: "Popular",
                  badgeColor: "bg-purple-100 text-purple-800",
                },
                {
                  title: "Payment Schedules for Large Projects",
                  detail:
                    "For projects over $1,500, we can discuss a deposit + completion payment structure. Ask during your estimate.",
                  badge: "Large Projects",
                  badgeColor: "bg-orange-100 text-orange-800",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white border border-gray-200 rounded-xl p-5"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded-full ${item.badgeColor}`}
                    >
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Membership savings */}
            <div className="bg-teal-900 text-white rounded-2xl p-7">
              <div className="flex items-start gap-4">
                <div className="bg-orange-500/20 p-3 rounded-xl shrink-0">
                  <Star className="h-6 w-6 text-orange-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Save 15% on Every Job — Hero Membership Club
                  </h3>
                  <p className="text-white/80 mb-4 leading-relaxed">
                    Our membership program gives you a 15% discount on every
                    project, priority scheduling, and an annual home maintenance
                    check-in. For homeowners who use us more than once a year,
                    it pays for itself on the first job.
                  </p>
                  <Link href="/membership/">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">
                      Learn About Membership →
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 10: IS IT WORTH IT ── */}
        <section id="worth-it" className="py-16 bg-white">
          <div className="container max-w-4xl">
            <div className="flex items-start gap-4 mb-8">
              <div className="bg-teal-100 p-3 rounded-xl shrink-0">
                <Lightbulb className="h-6 w-6 text-teal-700" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Is It Worth Hiring a Professional Handyman?
                </h2>
                <p className="text-gray-600">
                  Honest answer: sometimes yes, sometimes no. Here's how to
                  think about it.
                </p>
              </div>
            </div>

            <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-5">
              <p>
                The DIY vs. hire-a-pro decision comes down to three things:{" "}
                <strong>your skill level</strong>,{" "}
                <strong>the cost of mistakes</strong>, and{" "}
                <strong>your time</strong>.
              </p>

              <div className="grid md:grid-cols-2 gap-6 not-prose">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    When Hiring a Pro Makes Sense
                  </h3>
                  <ul className="space-y-2 text-sm text-green-800">
                    {[
                      "The repair affects safety (deck railings, stair treads, door locks)",
                      "The mistake would be expensive to fix (drywall texture, structural rot)",
                      "You'd need to buy specialized tools you'll only use once",
                      "You're selling your home and need professional-quality results",
                      "You've tried it before and it didn't go well",
                      "Your time is worth more than the cost of hiring out",
                    ].map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-green-500 shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Wrench className="h-5 w-5 text-gray-600" />
                    When DIY Might Be Fine
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "Simple cosmetic repairs (small nail holes, caulking, touch-up paint)",
                      "You have the tools and have done it successfully before",
                      "The stakes are low — a mistake is easy and cheap to fix",
                      "You enjoy home improvement and have the time",
                    ].map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-gray-400 shrink-0">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p>
                One thing we hear often: "I tried to fix it myself and made it
                worse." The most expensive repairs we do are the ones where a
                homeowner started a project, got stuck, and then called us. The
                original repair would have cost $200. By the time we arrive,
                it's $450. If you have any doubt, call us first — the estimate
                is free, and we'll tell you honestly whether it's a reasonable
                DIY project or not.
              </p>
            </div>
          </div>
        </section>

        {/* ── SECTION 11: FAQ ── */}
        <section id="faq" className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Pricing FAQs
              </h2>
              <p className="text-gray-600">
                The questions we hear most often about handyman pricing —
                answered honestly.
              </p>
            </div>
            <FAQAccordion faqs={faqs} />
          </div>
        </section>

        {/* ── SECTION 12: PRICING ESTIMATOR TOOL ── */}
        <section id="estimator" className="py-16 bg-white">
          <div className="container max-w-4xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Try Our Free Project Cost Estimator
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Answer a few quick questions about your project and get a
                ballpark price range in under 2 minutes — no phone call required.
                Then request a free formal quote when you're ready.
              </p>
            </div>
            <EstimatorTool />
          </div>
        </section>

        {/* ── SECTION 13: SERVICE PRICING DEEP DIVES ── */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Detailed Pricing Guides by Service
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Each service has its own full pricing guide with more detail,
                more examples, and more answers to your specific questions.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  title: "Drywall Repair Cost",
                  desc: "Patches, water damage, ceiling repair, texture matching",
                  href: "/blog/drywall-repair-cost-ofallon-il/",
                  range: "$150–$1,500+",
                  available: true,
                },
                {
                  title: "Deck Repair Cost",
                  desc: "Board replacement, rot repair, railings, staining",
                  href: "/blog/deck-repair-cost-ofallon-il/",
                  range: "$200–$4,000+",
                  available: true,
                },
                {
                  title: "Door Repair & Installation Cost",
                  desc: "Hardware, sticking doors, frame rot, full entry door replacement",
                  href: "/blog/door-repair-cost-ofallon-il/",
                  range: "$75–$2,500+",
                  available: true,
                },
                {
                  title: "Window Repair Cost",
                  desc: "Foggy glass, failed seals, broken hardware, frame rot",
                  href: "/blog/window-repair-cost-ofallon-il/",
                  range: "$75–$1,500+",
                  available: true,
                },
                {
                  title: "Fence Repair Cost",
                  desc: "Post replacement, panel repair, gate adjustment",
                  href: "/handyman-services/fence-repair/",
                  range: "$150–$2,000+",
                  available: true,
                },
                {
                  title: "Ceiling Fan Installation Cost",
                  desc: "New install, replacement, wiring, height",
                  href: "/handyman-services/ceiling-fan-installation/",
                  range: "$125–$400",
                  available: true,
                },
                {
                  title: "Exterior Carpentry Cost",
                  desc: "Wood rot repair, fascia, soffits, trim replacement",
                  href: "/handyman-services/exterior-carpentry/",
                  range: "$200–$3,000+",
                  available: true,
                },
              ].map((guide) => (
                <Link key={guide.title} href={guide.href}>
                  <div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-teal-200 transition-all cursor-pointer h-full flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-gray-900 text-sm">
                        {guide.title}
                      </h3>
                      {guide.available ? (
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium shrink-0 ml-2">
                          Available
                        </span>
                      ) : (
                        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full font-medium shrink-0 ml-2">
                          Coming Soon
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mb-3 flex-1">{guide.desc}</p>
                    <p className="text-teal-700 font-bold text-sm">{guide.range}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 14: STRONG CTA ── */}
        <section id="get-quote" className="py-20 bg-teal-900 text-white">
          <div className="container max-w-4xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Ready to Get a Real Number for Your Project?
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
                You've read the guide. You know what affects pricing. Now let's
                talk about your specific project. Our estimates are free, fast,
                and come with no pressure to commit.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5 mb-10">
              {[
                {
                  icon: <Phone className="h-6 w-6 text-orange-300" />,
                  title: "Call or Text",
                  detail: `${phoneDisplay} — We respond within 2 hours`,
                  action: (
                    <a href={`tel:${phone}`}>
                      <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full mt-3">
                        Call Now
                      </Button>
                    </a>
                  ),
                },
                {
                  icon: <MessageSquare className="h-6 w-6 text-orange-300" />,
                  title: "Send Photos by Text",
                  detail: "Text us photos of your project for a faster quote",
                  action: (
                    <a href={`sms:${phone}`}>
                      <Button
                        variant="outline"
                        className="w-full border-white/30 text-white hover:bg-white/10 rounded-full mt-3"
                      >
                        Text Us Photos
                      </Button>
                    </a>
                  ),
                },
                {
                  icon: <Star className="h-6 w-6 text-orange-300" />,
                  title: "Request Online",
                  detail: "Fill out our quick form — we'll follow up same day",
                  action: (
                    <a href="/#contact">
                      <Button
                        variant="outline"
                        className="w-full border-white/30 text-white hover:bg-white/10 rounded-full mt-3"
                      >
                        Request Estimate
                      </Button>
                    </a>
                  ),
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center"
                >
                  <div className="bg-white/10 p-3 rounded-full w-fit mx-auto mb-3">
                    {item.icon}
                  </div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-white/70 text-sm">{item.detail}</p>
                  {item.action}
                </div>
              ))}
            </div>

            {/* Inline quote form */}
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-gray-900 font-bold text-xl mb-2 text-center">
                Or Fill Out Our Quick Estimate Form
              </h3>
              <p className="text-gray-500 text-sm text-center mb-6">
                Describe your project and we'll get back to you within a few
                hours with a ballpark range.
              </p>
              <InlineQuoteForm />
            </div>
          </div>
        </section>

        {/* ── RELATED LINKS ── */}
        <section className="py-12 bg-white border-t border-gray-100">
          <div className="container max-w-4xl">
            <h2 className="text-lg font-bold text-gray-900 mb-5">
              More Helpful Resources
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              {[
                { label: "All Handyman Services", href: "/handyman-services/" },
                { label: "Service Areas", href: "/service-areas/" },
                { label: "About Hero Handyman Pro", href: "/about/" },
                { label: "Hero Membership Club", href: "/membership/" },
                { label: "Customer Reviews", href: "/reviews/" },
                { label: "Contact Us", href: "/contact/" },
              ].map((link) => (
                <Link key={link.href} href={link.href}>
                  <span className="flex items-center gap-2 text-teal-700 hover:text-teal-900 hover:underline cursor-pointer">
                    <span className="text-orange-400">→</span>
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
