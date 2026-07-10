import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Wrench, Home, Clock, Shield, MessageSquare, Star } from "lucide-react";
import SEO from '@/components/SEO';
import { FAQAccordion } from "@/components/FAQAccordion";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { useSeoRoute } from '@/hooks/useSeoRoute';

export default function StLouisHandyman() {
  const seo = useSeoRoute();
  const whyChooseUs = [
    { icon: Home, text: "Local professionals serving St. Louis families and businesses" },
    { icon: Wrench, text: "Skilled in decks, carpentry, drywall, doors, and all home repairs" },
    { icon: Shield, text: "Fully licensed and insured for your peace of mind" },
    { icon: MessageSquare, text: "Clear updates via text and email throughout your project" },
    { icon: Clock, text: "Upfront pricing with no hidden fees or surprises" }
  ];

  const neighborhoods = [
    "Central West End",
    "Soulard and Lafayette Square",
    "Tower Grove and Shaw",
    "The Hill",
    "South City / Dutchtown",
    "Dogtown and Clayton-Tamm",
    "Benton Park and Cherokee Street",
    "Maplewood and Richmond Heights",
    "Webster Groves",
    "Kirkwood",
    "Chesterfield and Ballwin",
    "Fenton and Arnold",
    "St. Charles and O'Fallon, MO",
    "Florissant and Ferguson",
    "Creve Coeur and Ladue",
    "University City and Clayton"
  ];

  const testimonials = [
    {
      text: "Hero Handyman repaired our deck and fixed several interior issues. Professional and reliable from start to finish.",
      author: "St. Louis Homeowner"
    },
    {
      text: "They completed our punch list quickly and efficiently. Great communication and quality work.",
      author: "St. Louis Homeowner"
    },
    {
      text: "Highly recommend Hero Handyman. They showed up on time, worked clean, and did excellent work.",
      author: "St. Louis Homeowner"
    }
  ];

  const faqs = [
    {
      question: "Do you provide free estimates in St. Louis?",
      answer: "Yes — we provide clear, detailed estimates at no charge. Many projects can be estimated from photos, and we're happy to schedule a free in-home consultation for larger or more complex work. We respond to all requests within 24 hours."
    },
    {
      question: "How soon can you start my project in St. Louis?",
      answer: "We frequently have same-day or next-day availability in St. Louis city and county. For urgent safety issues like loose railings or structural concerns, we prioritize getting out as quickly as possible. Call 800-741-6056 to check current availability."
    },
    {
      question: "What types of projects do you handle in St. Louis?",
      answer: "We handle everything from small repairs and punch lists to larger projects. Common St. Louis jobs include drywall repair, deck board replacement, door installation, ceiling fan installation, exterior carpentry, wood rot repair, fence repair, and general home maintenance. If you have a repair project, contact us — we likely handle it."
    },
    {
      question: "Are you licensed and insured in Missouri?",
      answer: "Yes. Hero Handyman Pro is fully licensed and insured in Missouri and Illinois. We carry general liability insurance and workers' compensation coverage on every job. You can request proof of insurance before we begin work."
    },
    {
      question: "How much does a handyman cost in St. Louis?",
      answer: "Small repairs (1–2 hours) typically run $100–$250. Half-day jobs are $250–$500. Full-day projects are $500–$900. Specific services like deck repair ($300–$2,500+) or drywall repair ($75–$700+) vary based on scope. We provide a firm, written estimate before starting any work — no surprise charges."
    },
    {
      question: "Do you serve all of St. Louis city and county?",
      answer: "Yes. We serve St. Louis city, St. Louis County, and the Metro East Illinois area. In Missouri, we cover neighborhoods from Soulard and The Hill to Chesterfield, Kirkwood, Webster Groves, Creve Coeur, and St. Charles. In Illinois, we serve O'Fallon, Edwardsville, Belleville, Collinsville, and surrounding communities."
    },
    {
      question: "Can you handle multiple repairs in one visit?",
      answer: "Absolutely — bundling multiple repairs in one visit is one of the best ways to save money on handyman services. We can knock out a drywall patch, a sticking door, a ceiling fan install, and several other items in a single half-day or full-day visit."
    },
    {
      question: "Do you offer a warranty on your work?",
      answer: "Yes. All our labor comes with a workmanship warranty. If something we repaired fails due to our workmanship within the warranty period, we come back and fix it at no charge. Specific warranty terms are provided in writing with each estimate."
    }
  ];

  return (
    <div className="flex flex-col">
      <PageBreadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Service Areas", href: "/service-areas/" },
        { label: "St. Louis, MO" }
      ]} />
      <SEO {...seo} />
      <LocalBusinessSchema city="St. Louis" state="MO" pageUrl="/service-areas/st-louis-mo-handyman/" />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white py-16 md:py-24 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-[3.75rem] font-bold leading-tight mb-4">
              Handyman Services in St. Louis, MO
            </h1>
            <p className="text-[#ff5b00] text-xl md:text-2xl font-semibold mb-6">
              Professional, Reliable Home Repairs for St. Louis Homeowners
            </p>
            <p className="text-[#e5e7eb] text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Hero Handyman is your trusted local handyman serving St. Louis, MO. From quick repairs to comprehensive home improvement projects, we deliver professional craftsmanship, transparent pricing, and dependable service every time.
            </p>
          </div>

          {/* Key Points */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
              <Clock className="h-10 w-10 text-[#ff5b00] mx-auto mb-3" />
              <p className="text-white font-medium">Same-day or next-day service when available</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
              <Shield className="h-10 w-10 text-[#ff5b00] mx-auto mb-3" />
              <p className="text-white font-medium">Licensed, insured handyman professionals</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
              <MessageSquare className="h-10 w-10 text-[#ff5b00] mx-auto mb-3" />
              <p className="text-white font-medium">Transparent pricing and clear communication</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:800-741-6056">
              <Button className="bg-[#ff5b00] hover:bg-[#ff5b00]/90 text-white rounded-full px-10 py-7 text-lg font-semibold flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call Now: 800-741-6056
              </Button>
            </a>
            <Link href="/booking/">
              <Button variant="outline" className="rounded-full px-10 py-7 text-lg font-semibold border-2 border-white text-white hover:bg-white/10">
                Book Online
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Hyper-Local Intro */}
      <section className="py-10 px-6 bg-white border-b border-[#e5e7eb]">
        <div className="max-w-[1120px] mx-auto">
          <p className="text-[#374151] text-lg leading-relaxed">
            St. Louis is home to some of the most diverse housing stock in the Midwest — from pre-war brick bungalows in Soulard and Tower Grove to mid-century ranches in Kirkwood and Webster Groves, to newer builds in Chesterfield and St. Charles. Each era of construction brings its own repair patterns: <a href="/handyman-services/drywall-repair/" className="text-[#ff5b00] hover:underline font-medium">plaster and drywall cracks</a> in older homes, <a href="/handyman-services/deck-repair/" className="text-[#ff5b00] hover:underline font-medium">deck boards</a> reaching end of life in 1990s–2000s homes, and <a href="/handyman-services/door-repair/" className="text-[#ff5b00] hover:underline font-medium">sticking doors</a> caused by Missouri's freeze-thaw cycles. Hero Handyman Pro works across all of St. Louis city and county with the experience to handle what your home actually needs.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b1220]">
              Why St. Louis Homeowners Choose Hero Handyman
            </h2>
            <p className="text-[#4b5563] text-lg max-w-3xl mx-auto">
              Hero Handyman Pro is built on trust, professionalism, and quality workmanship. St. Louis homeowners choose us because we show up on time, communicate clearly, and treat every home with the care and respect it deserves.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="bg-[#f9fafb] rounded-xl p-6 border border-[#e5e7eb]">
                <div className="flex items-start gap-4">
                  <div className="bg-[#ff5b00]/10 rounded-full p-3 mt-1">
                    <item.icon className="h-6 w-6 text-[#ff5b00]" />
                  </div>
                  <p className="text-[#374151] flex-1">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-[#ff5b00] to-[#f97316] rounded-2xl p-8 text-white">
            <p className="text-lg leading-relaxed">
              We proudly serve neighborhoods throughout St. Louis—from the Central West End to Soulard, from Tower Grove to The Hill. If you're in St. Louis, we're already working in your neighborhood.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b1220]">
              Popular Handyman Services in St. Louis, MO
            </h2>
            <p className="text-[#4b5563] text-lg">
              Here are the most common projects St. Louis homeowners trust us with:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Deck & Exterior */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e5e7eb]">
              <h3 className="text-2xl font-bold mb-4 text-[#0b1220]">Deck & Exterior Repairs</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span><Link href="/handyman-services/deck-repair/" className="text-[#ff5b00] hover:underline">Deck repair</Link> and board replacement</span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span>Railing reinforcement and stair repair</span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span><Link href="/handyman-services/porch-repair/" className="text-[#ff5b00] hover:underline">Porch and stair repair</Link></span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span><Link href="/carpentry-services/" className="text-[#ff5b00] hover:underline">Wood rot repair</Link> and exterior trim replacement</span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span>Fence repair and installation</span>
                </li>
              </ul>
            </div>

            {/* Doors & Windows */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e5e7eb]">
              <h3 className="text-2xl font-bold mb-4 text-[#0b1220]">Door & Window Services</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span>Entry door installation and replacement</span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span>Storm door and screen door installation</span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span>Sliding door repair and adjustment</span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span>Door frame and threshold repair</span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span>Weatherstripping and draft protection</span>
                </li>
              </ul>
            </div>

            {/* Interior Repairs */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e5e7eb]">
              <h3 className="text-2xl font-bold mb-4 text-[#0b1220]">Interior Repairs & Upgrades</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span><Link href="/handyman-services/drywall-repair/" className="text-[#ff5b00] hover:underline">Drywall crack and hole repair</Link></span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span>Ceiling repair and texture matching</span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span><Link href="/handyman-services/trim-carpentry/" className="text-[#ff5b00] hover:underline">Baseboard, casing, and trim installation</Link></span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span>TV mounting and shelf installation</span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span>Home sale punch lists and touch-ups</span>
                </li>
              </ul>
            </div>

            {/* Minor Plumbing & Electrical */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e5e7eb]">
              <h3 className="text-2xl font-bold mb-4 text-[#0b1220]">Minor Plumbing & Electrical</h3>
              <p className="text-sm text-[#6b7280] mb-4 italic">(Minor residential tasks only)</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span><Link href="/handyman-services/ceiling-fan-installation/" className="text-[#ff5b00] hover:underline">Ceiling fan and light fixture installation</Link></span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span>Switch and dimmer replacements</span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span><Link href="/handyman-services/faucet-install-and-repair/" className="text-[#ff5b00] hover:underline">Faucet installation and repair</Link></span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span>Toilet installation and minor repairs</span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span>Garbage disposal replacement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods We Serve */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b1220]">
              Proudly Serving St. Louis and Surrounding Communities
            </h2>
            <p className="text-[#4b5563] text-lg max-w-3xl mx-auto">
              Whether you're in the Central West End, Soulard, Tower Grove, or The Hill, Hero Handyman is ready to help with fast, professional home repair services throughout St. Louis.
            </p>
          </div>

          <div className="bg-[#f9fafb] rounded-2xl p-8 border border-[#e5e7eb]">
            <div className="grid md:grid-cols-2 gap-4">
              {neighborhoods.map((area, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span className="text-[#374151]">{area}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-[#4b5563] mt-6 text-lg">
            Not sure if we cover your neighborhood? Just reach out—we respond quickly and confirm coverage right away.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b1220]">
              Our Simple, Stress-Free Process
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e5e7eb] text-center">
              <div className="bg-[#ff5b00] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-bold mb-3 text-[#0b1220]">Request an Estimate</h3>
              <p className="text-[#4b5563] text-sm">
                Contact us online or by phone. Share photos if possible—it helps us provide faster, more accurate estimates.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e5e7eb] text-center">
              <div className="bg-[#ff5b00] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-bold mb-3 text-[#0b1220]">Approve the Plan</h3>
              <p className="text-[#4b5563] text-sm">
                We review your project and provide clear, upfront pricing before any work begins.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e5e7eb] text-center">
              <div className="bg-[#ff5b00] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-bold mb-3 text-[#0b1220]">Professional Work</h3>
              <p className="text-[#4b5563] text-sm">
                Your Hero Handyman tech arrives on time, completes the work professionally, and respects your home.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e5e7eb] text-center">
              <div className="bg-[#ff5b00] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-bold mb-3 text-[#0b1220]">Final Walkthrough</h3>
              <p className="text-[#4b5563] text-sm">
                We review the finished work with you and ensure you're completely satisfied before we leave.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Phil Green EEAT */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b1220]">Meet Phil Green</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 bg-[#ff5b00]/10 text-[#ff5b00] text-xs font-bold px-3 py-1.5 rounded-full border border-[#ff5b00]/20">★ Veteran-Owned</span>
                <span className="inline-flex items-center gap-1.5 bg-[#0b1220]/5 text-[#0b1220] text-xs font-bold px-3 py-1.5 rounded-full border border-[#0b1220]/10">35+ Years Experience</span>
                <span className="inline-flex items-center gap-1.5 bg-[#0b1220]/5 text-[#0b1220] text-xs font-bold px-3 py-1.5 rounded-full border border-[#0b1220]/10">Licensed & Insured</span>
              </div>
              <p className="text-[#4b5563] text-lg mb-4">
                Hero Handyman Pro was founded by Coast Guard veteran and longtime remodeling professional Phil Green. After decades working in construction, remodeling, project management, and home repair across the St. Louis metro area, Phil built Hero Handyman Pro to solve the biggest frustration homeowners face: unreliable contractors who don't communicate, don't show up, or don't finish the job properly.
              </p>
              <p className="text-[#4b5563] text-lg mb-4">
                With more than 35 years of hands-on experience, Phil and the Hero Handyman Pro team focus on dependable communication, professional craftsmanship, and making home repair easy for busy homeowners throughout St. Louis and Metro East Illinois.
              </p>
              <p className="text-[#4b5563] text-lg">
                We're not a franchise or a national call center. We're a local team that works in St. Louis every week — background-checked, insured, and committed to treating every home with respect.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-[#e5e7eb] shadow-sm">
              <h3 className="text-xl font-bold text-[#0b1220] mb-6">Homeowner Tips for St. Louis Homes</h3>
              <div className="space-y-5">
                <div>
                  <h4 className="font-bold text-[#0b1220] mb-1">Older homes need careful drywall and plaster matching</h4>
                  <p className="text-[#4b5563] text-sm">Many pre-1960 homes in Soulard, Tower Grove, and The Hill have original plaster or textured drywall. Our team has experience with multiple texture types — we'll blend the repair invisibly. See our <Link href="/handyman-services/drywall-repair/" className="text-[#ff5b00] hover:underline">drywall repair service</Link>.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#0b1220] mb-1">Inspect your deck before summer entertaining</h4>
                  <p className="text-[#4b5563] text-sm">Missouri's hot, humid summers accelerate wood decay. Check for soft spots and wobbly railings each spring. Early <Link href="/handyman-services/deck-repair/" className="text-[#ff5b00] hover:underline">deck repair</Link> costs far less than full replacement.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#0b1220] mb-1">Sticking doors are common in older St. Louis homes</h4>
                  <p className="text-[#4b5563] text-sm">Older homes settle over time, causing door frames to shift. If your doors stick or don't latch properly, it's usually a quick fix. Most <Link href="/handyman-services/door-repair/" className="text-[#ff5b00] hover:underline">door repairs</Link> take under two hours.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#0b1220] mb-1">Bundle repairs to save on trip fees</h4>
                  <p className="text-[#4b5563] text-sm">Our <Link href="/handyman-services/" className="text-[#ff5b00] hover:underline">service packages</Link> let you bundle multiple small repairs into one visit, saving on scheduling fees and getting everything done at once.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b1220]">
              What St. Louis Homeowners Are Saying
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-[#f9fafb] rounded-2xl p-6 border border-[#e5e7eb]">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-5 w-5 fill-[#ff5b00] text-[#ff5b00]" />
                  ))}
                </div>
                <p className="text-[#374151] mb-4 italic">"{testimonial.text}"</p>
                <p className="text-[#6b7280] text-sm font-semibold">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b1220]">
              St. Louis Handyman FAQs
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Helpful Resources */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b1220]">Helpful St. Louis Home Repair Resources</h2>
            <p className="text-[#4b5563] text-lg max-w-2xl mx-auto">Planning a repair project? These guides help St. Louis homeowners understand costs, timelines, and what to expect.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/drywall-repair-cost-ofallon-il/">
              <div className="bg-[#f9fafb] rounded-2xl p-6 border border-[#e5e7eb] hover:border-[#ff5b00] hover:shadow-md transition-all cursor-pointer group h-full">
                <div className="text-[#ff5b00] text-xs font-bold uppercase tracking-wide mb-2">Cost Guide</div>
                <h3 className="text-lg font-bold text-[#0b1220] mb-2 group-hover:text-[#ff5b00] transition-colors">How Much Does Drywall Repair Cost?</h3>
                <p className="text-[#4b5563] text-sm">Pricing tiers from $150 to $1,500+ with real Metro East project examples.</p>
              </div>
            </Link>
            <Link href="/blog/deck-repair-cost-ofallon-il/">
              <div className="bg-[#f9fafb] rounded-2xl p-6 border border-[#e5e7eb] hover:border-[#ff5b00] hover:shadow-md transition-all cursor-pointer group h-full">
                <div className="text-[#ff5b00] text-xs font-bold uppercase tracking-wide mb-2">Cost Guide</div>
                <h3 className="text-lg font-bold text-[#0b1220] mb-2 group-hover:text-[#ff5b00] transition-colors">How Much Does Deck Repair Cost?</h3>
                <p className="text-[#4b5563] text-sm">Board replacement to full structural repair — what to expect in St. Louis & Metro East.</p>
              </div>
            </Link>
            <Link href="/blog/2026-handyman-costs-metro-east-il/">
              <div className="bg-[#f9fafb] rounded-2xl p-6 border border-[#e5e7eb] hover:border-[#ff5b00] hover:shadow-md transition-all cursor-pointer group h-full">
                <div className="text-[#ff5b00] text-xs font-bold uppercase tracking-wide mb-2">Pricing Guide</div>
                <h3 className="text-lg font-bold text-[#0b1220] mb-2 group-hover:text-[#ff5b00] transition-colors">2026 Handyman Costs in Metro East IL</h3>
                <p className="text-[#4b5563] text-sm">Complete pricing guide for the most common home repair services this year.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Authority Content — St. Louis Handyman Context */}
      <section className="py-16 px-6 bg-[#f9fafb] border-t border-[#e5e7eb]">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-3xl font-bold text-[#0b1220] mb-8">St. Louis Handyman Services — What You Should Know</h2>
          
          <div className="space-y-6 text-[#374151] text-lg leading-relaxed">
            <p>
              St. Louis is one of the most diverse housing markets in the Midwest. The city and inner-ring suburbs — Maplewood, Webster Groves, Kirkwood, Clayton — are filled with older homes built between 1920 and 1970. These homes have character, but they also have specific maintenance challenges: plaster walls that crack seasonally, aging wood windows that stick, original wood decks that need annual attention, and exterior trim that takes a beating from Missouri's freeze-thaw cycles. A handyman who works in St. Louis needs to understand these older construction methods, not just show up with a caulk gun.
            </p>
            <p>
              In the outer suburbs — Chesterfield, Ballwin, Wildwood, and St. Charles — the housing stock skews newer (1980s–2000s), but the repair needs are different: drywall damage from settling, deck boards that have reached the end of their lifespan, doors that have shifted out of square, and ceiling fans that need upgrading. We work across both zones and adjust our approach based on what the home actually needs, not a one-size-fits-all repair checklist.
            </p>
            <p>
              Most St. Louis homeowners contact us after trying to find a reliable handyman through word of mouth and coming up empty — or after a bad experience with someone who didn't show up, didn't finish, or charged more than quoted. We built Hero Handyman Pro specifically to solve those problems: fixed pricing before we start, text updates while we work, and a walkthrough before we leave. If you've been burned before, we understand — and we're happy to earn your trust one job at a time.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            <Link href="/handyman-services/" className="flex items-center gap-3 bg-white border border-[#e5e7eb] hover:border-[#ff5b00] rounded-xl p-4 transition-colors group">
              <Wrench className="h-5 w-5 text-[#ff5b00] flex-shrink-0" />
              <div>
                <p className="font-semibold text-[#0b1220] text-sm group-hover:text-[#ff5b00] transition-colors">All Handyman Services</p>
                <p className="text-[#6b7280] text-xs">Full list of what we do in St. Louis</p>
              </div>
            </Link>
            <Link href="/handyman-pricing/" className="flex items-center gap-3 bg-white border border-[#e5e7eb] hover:border-[#ff5b00] rounded-xl p-4 transition-colors group">
              <Home className="h-5 w-5 text-[#ff5b00] flex-shrink-0" />
              <div>
                <p className="font-semibold text-[#0b1220] text-sm group-hover:text-[#ff5b00] transition-colors">Transparent Pricing Guide</p>
                <p className="text-[#6b7280] text-xs">Real price ranges for St. Louis repairs</p>
              </div>
            </Link>
            <Link href="/gbp/ofallon-il/" className="flex items-center gap-3 bg-white border border-[#e5e7eb] hover:border-[#ff5b00] rounded-xl p-4 transition-colors group">
              <Check className="h-5 w-5 text-[#ff5b00] flex-shrink-0" />
              <div>
                <p className="font-semibold text-[#0b1220] text-sm group-hover:text-[#ff5b00] transition-colors">O'Fallon IL Handyman Services</p>
                <p className="text-[#6b7280] text-xs">Metro East coverage for O'Fallon and surrounding areas</p>
              </div>
            </Link>
            <Link href="/estimator/" className="flex items-center gap-3 bg-white border border-[#e5e7eb] hover:border-[#ff5b00] rounded-xl p-4 transition-colors group">
              <MessageSquare className="h-5 w-5 text-[#ff5b00] flex-shrink-0" />
              <div>
                <p className="font-semibold text-[#0b1220] text-sm group-hover:text-[#ff5b00] transition-colors">Get an Instant Estimate</p>
                <p className="text-[#6b7280] text-xs">Interactive pricing tool — no phone call required</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Schedule Handyman Service in St. Louis, MO?
          </h2>
          <p className="text-[#e5e7eb] text-lg mb-6 max-w-2xl mx-auto">
            If your home needs repairs—or your to-do list keeps growing—Hero Handyman is here to help. We make home repairs simple, fast, and stress-free.
          </p>
          <p className="text-[#ff5b00] text-lg font-semibold mb-8 max-w-2xl mx-auto">
            Contact us today and we'll take care of the rest—quickly, professionally, and with no surprises.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a href="tel:800-741-6056">
              <Button className="bg-[#ff5b00] hover:bg-[#ff5b00]/90 text-white rounded-full px-10 py-7 text-lg font-semibold flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call Now: 800-741-6056
              </Button>
            </a>
            <Link href="/booking/">
              <Button variant="outline" className="rounded-full px-10 py-7 text-lg font-semibold border-2 border-white text-white hover:bg-white/10">
                Book Online
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
