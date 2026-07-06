import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Wrench, Home, Clock, Shield, MessageSquare, Star, Hammer, DoorOpen } from "lucide-react";
import SEO from '@/components/SEO';
import { FAQAccordion } from '@/components/FAQAccordion';
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { useSeoRoute } from '@/hooks/useSeoRoute';

export default function EdwardsvilleHandyman() {
  const seo = useSeoRoute();
  const whyChooseUs = [
    { icon: Home, text: "Local pros who respect your home and time" },
    { icon: Wrench, text: "Experienced in decks, carpentry, drywall, doors, and home repairs" },
    { icon: Shield, text: "Fully licensed and insured" },
    { icon: MessageSquare, text: "Text and email updates throughout your project" },
    { icon: Clock, text: "Straightforward pricing with no surprises" }
  ];

  const neighborhoods = [
    "Downtown Edwardsville and historic neighborhoods near Main Street",
    "Glen Carbon border neighborhoods and Meridian Road corridor",
    "Dunlap Lake and Holiday Shores communities",
    "Edwardsville High School area and Governors Parkway corridor",
    "SIUE campus area and surrounding residential streets",
    "Newer subdivisions off Troy Road, Goshen Road, and Plum Street",
    "Leclaire neighborhood and Watershed Nature Center area",
    "Homes along IL-157 and the Edwardsville-Collinsville corridor"
  ];

  const testimonials = [
    {
      text: "Hero Handyman fixed our deck and some trim issues—great experience from start to finish. Phil showed up on time, walked us through everything, and the deck looks brand new.",
      author: "Jennifer M., Edwardsville IL",
      service: "Deck Repair"
    },
    {
      text: "I had a big drywall hole from a plumbing repair. Hero Handyman patched it seamlessly—you can't even tell it was there. Fast, clean, and professional.",
      author: "Tom K., Edwardsville IL",
      service: "Drywall Repair Edwardsville IL"
    },
    {
      text: "They installed two new interior doors and fixed a sticking exterior door in one visit. Honest pricing, no upsells, and the work was excellent.",
      author: "Sarah L., Edwardsville IL",
      service: "Door Installation Near Me"
    },
    {
      text: "Used Hero Handyman for a pre-listing punch list before selling our home near SIUE. They knocked out 14 items in one day. Highly recommend!",
      author: "Mike & Dana R., Edwardsville IL",
      service: "Home Repairs"
    }
  ];

  const faqs = [
    {
      question: "Do you offer same-day service in Edwardsville?",
      answer: "When schedules allow, yes. We frequently complete same-day or next-day projects in Edwardsville. Call us at 800-741-6056 for the fastest scheduling."
    },
    {
      question: "Can you estimate my project from photos?",
      answer: "Yes — most handyman projects can be accurately estimated remotely. Send us a few photos through the contact form and we'll get back to you with a clear estimate, usually within a few hours."
    },
    {
      question: "Do you work with older homes in Edwardsville?",
      answer: "Absolutely. We regularly work on older homes near downtown Edwardsville, the Leclaire neighborhood, and around SIUE. Older homes often have plaster walls, original trim profiles, and aging decks that require a more careful approach — we have the experience to handle them correctly."
    },
    {
      question: "Are you insured and licensed?",
      answer: "Yes, fully. Hero Handyman Pro carries general liability insurance and all technicians are background-checked. Your home is always protected when we're on-site."
    },
    {
      question: "How much does handyman service cost in Edwardsville, IL?",
      answer: "Most minor repairs run $150\u2013$350. Larger jobs like deck repair, door replacement, or multi-item punch lists are quoted individually. We always provide written estimates before starting work — no surprises."
    },
    {
      question: "What are the most common repairs you do in Edwardsville?",
      answer: "Deck repair and drywall work are our top calls in Edwardsville. Many homes near Dunlap Lake and Holiday Shores have aging decks that need board replacement or railing work. We also do a lot of door repairs, trim carpentry, ceiling fan installations, and pre-sale punch lists for homeowners preparing to list near SIUE."
    },
    {
      question: "Do you serve Glen Carbon and nearby areas too?",
      answer: "Yes. We serve Edwardsville and the surrounding communities including Glen Carbon, Maryville, and the Edwardsville-Collinsville corridor. If you're not sure whether we cover your address, just reach out and we'll confirm."
    }
  ];

  return (
    <div className="flex flex-col">
      <PageBreadcrumb crumbs={[
    { label: "Home", href: "/" },
    { label: "Service Areas", href: "/service-areas/" },
    { label: "Edwardsville, IL" }
  ]} />
      <SEO {...seo} />
      <LocalBusinessSchema city="Edwardsville" state="IL" pageUrl="/service-areas/edwardsville-handyman-services/" />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white py-16 md:py-24 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-[3.75rem] font-bold leading-tight mb-4">
              Handyman Services in Edwardsville, IL
            </h1>
            <p className="text-[#ff5b00] text-xl md:text-2xl font-semibold mb-6">
              Reliable, Professional Home Repairs for Edwardsville Homeowners
            </p>
            <p className="text-[#e5e7eb] text-lg md:text-xl max-w-3xl mx-auto mb-8">
              From the historic homes near downtown Edwardsville to newer subdivisions off Goshen Road and Troy Road, homeowners throughout the area trust Hero Handyman Pro for deck repair, drywall work, door installation, and general home maintenance. Edwardsville's older housing stock — including many homes built in the 1950s through 1980s near SIUE and Dunlap Lake — brings its own set of repair needs, and we know them well.
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
              <p className="text-white font-medium">Skilled, insured, professional handyman techs</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
              <MessageSquare className="h-10 w-10 text-[#ff5b00] mx-auto mb-3" />
              <p className="text-white font-medium">Clear communication and transparent pricing</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/#contact">
              <Button className="bg-[#ff5b00] hover:bg-[#ff5b00]/90 text-white rounded-full px-10 py-7 text-lg font-bold flex items-center gap-2 shadow-lg shadow-[#ff5b00]/30">
                Request Your Estimate
              </Button>
            </Link>
            <a href="tel:800-741-6056">
              <Button variant="outline" className="rounded-full px-10 py-7 text-lg font-semibold border-2 border-white text-white hover:bg-white/10 flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call 800-741-6056
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Hyper-Local Intro */}
      <section className="py-10 px-6 bg-white border-b border-[#e5e7eb]">
        <div className="max-w-[1120px] mx-auto">
          <p className="text-[#374151] text-lg leading-relaxed">
            Edwardsville homeowners often face repair needs caused by seasonal weather, home settling, aging materials, and everyday wear and tear. Hero Handyman Pro provides professional <a href="/handyman-services/" className="text-[#ff5b00] hover:underline font-medium">handyman services</a> — including <a href="/handyman-services/drywall-repair/" className="text-[#ff5b00] hover:underline font-medium">drywall repair</a>, <a href="/handyman-services/deck-repair/" className="text-[#ff5b00] hover:underline font-medium">deck repair</a>, and <a href="/handyman-services/carpentry/" className="text-[#ff5b00] hover:underline font-medium">carpentry</a> — designed to keep homes functional, safe, and looking their best throughout the year.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b1220]">
              Why Edwardsville Homeowners Choose Hero Handyman
            </h2>
            <p className="text-[#4b5563] text-lg max-w-3xl mx-auto">
              Hero Handyman Pro focuses on delivering consistent, dependable workmanship — not guesswork. We've worked in Edwardsville for years and understand the housing stock here: the historic homes near downtown and Leclaire, the mid-century ranch homes near SIUE, and the newer builds off Goshen Road. That local knowledge means faster estimates, better material choices, and repairs that hold up in Madison County's climate.
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
              We're a Metro East team that works in Edwardsville every week — from Holiday Shores and Dunlap Lake to the SIUE area and the historic downtown district. We're not a national call center; we're your neighbors. When you call us, you reach someone who knows Edwardsville, understands the local housing stock, and can get to your home quickly without travel surcharges.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b1220]">
              Popular Handyman Services in Edwardsville, IL
            </h2>
            <p className="text-[#4b5563] text-lg">
              Here are some of the top projects Edwardsville homeowners call us for:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Deck & Exterior */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e5e7eb]">
              <h3 className="text-2xl font-bold mb-4 text-[#0b1220]">Deck & Exterior Repairs</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span><Link href="/deck-repair-edwardsville-il" className="text-[#ff5b00] hover:underline">Deck repair in Edwardsville</Link> and board replacement</span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span>Railing reinforcement and stair repair</span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span><Link href="/services/porch-repair-edwardsville-il" className="text-[#ff5b00] hover:underline">Porch repairs in Edwardsville</Link> and <Link href="/carpentry-services-edwardsville-il" className="text-[#ff5b00] hover:underline">wood rot restoration</Link></span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span>Fence and exterior trim repair</span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span>Exterior carpentry upgrades</span>
                </li>
              </ul>
            </div>

            {/* Door Installation & Repair */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e5e7eb]">
              <h3 className="text-2xl font-bold mb-4 text-[#0b1220]">Door Installation & Repair</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span><Link href="/door-installation-edwardsville-il" className="text-[#ff5b00] hover:underline">Door installation in Edwardsville</Link></span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span><Link href="/door-repair-edwardsville-il" className="text-[#ff5b00] hover:underline">Door repair in Edwardsville</Link> — sticking, broken hardware, frames</span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span><Link href="/services/window-installation-edwardsville-il" className="text-[#ff5b00] hover:underline">Window installation in Edwardsville</Link></span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span>Storm and screen door installation</span>
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
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span><Link href="/blog/door-repair-cost-ofallon-il/" className="text-[#ff5b00] hover:underline">How much does door repair cost?</Link> — 2026 pricing guide for Metro East IL</span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span><Link href="/blog/window-repair-cost-ofallon-il/" className="text-[#ff5b00] hover:underline">How much does window repair cost?</Link> — 2026 pricing guide for Metro East IL</span>
                </li>
              </ul>
            </div>

            {/* Interior Home Repairs */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e5e7eb]">
              <h3 className="text-2xl font-bold mb-4 text-[#0b1220]">Interior Home Repairs</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span><Link href="/drywall-repair-edwardsville-il" className="text-[#ff5b00] hover:underline">Drywall repair in Edwardsville</Link> — holes, cracks, water damage</span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span>Ceiling patches and texture work</span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span><Link href="/carpentry-services-edwardsville-il" className="text-[#ff5b00] hover:underline">Carpentry services in Edwardsville</Link> — trim, cabinets, custom work</span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span>TV mounting, shelves, and hardware installs</span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span>Caulking, touch-ups, and punch list work</span>
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
                  <span>Switches, dimmers, and outlet updates</span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span><Link href="/handyman-services/faucet-install-and-repair/" className="text-[#ff5b00] hover:underline">Faucet replacement and repair</Link></span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span>Toilet install and light repairs</span>
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
              Proudly Serving Edwardsville and Surrounding Communities
            </h2>
            <p className="text-[#4b5563] text-lg max-w-3xl mx-auto">
              Whether you're near SIUE, enjoying the streets of historic downtown Edwardsville, or living in one of the area's growing subdivisions, Hero Handyman is ready to help with reliable home repair services.
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
            Not sure if we serve your neighborhood? Just ask—we strive to respond immediately.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b1220]">
              Our Easy, Stress-Free Process
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e5e7eb] text-center">
              <div className="bg-[#ff5b00] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-bold mb-3 text-[#0b1220]">Request an Estimate</h3>
              <p className="text-[#4b5563] text-sm">
                Tell us what you need done online or by phone. Photos help speed up the process.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e5e7eb] text-center">
              <div className="bg-[#ff5b00] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-bold mb-3 text-[#0b1220]">Approve Your Quote</h3>
              <p className="text-[#4b5563] text-sm">
                We review your project and provide clear pricing upfront—no surprises.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e5e7eb] text-center">
              <div className="bg-[#ff5b00] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-bold mb-3 text-[#0b1220]">Professional Repair Work</h3>
              <p className="text-[#4b5563] text-sm">
                Your Hero Handyman tech arrives on time, completes the work the right way, and keeps your home clean.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e5e7eb] text-center">
              <div className="bg-[#ff5b00] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-bold mb-3 text-[#0b1220]">Enjoy a Finished Home</h3>
              <p className="text-[#4b5563] text-sm">
                We walk through the finished work with you and make sure everything meets your expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects Gallery */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b1220]">
              Recent Projects in Edwardsville, IL
            </h2>
            <p className="text-[#4b5563] text-lg max-w-2xl mx-auto">
              Real before &amp; after results from Edwardsville homeowners. Every job is done right the first time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Project 1 - Deck */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#e5e7eb]">
              <div className="grid grid-cols-2 gap-0">
                <div className="relative">
                  <img loading="lazy" src="/images/edwardsville-deck-before.webp" alt="Rotted deck before repair in Edwardsville IL" width={450} height={160} className="w-full h-40 object-cover" />
                  <span className="absolute top-2 left-2 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded">BEFORE</span>
                </div>
                <div className="relative">
                  <img loading="lazy" src="/images/edwardsville-deck-after.webp" alt="Restored deck after repair in Edwardsville IL" width={450} height={160} className="w-full h-40 object-cover" />
                  <span className="absolute top-2 left-2 bg-[#ff5b00] text-white text-xs font-bold px-2 py-1 rounded">AFTER</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#0b1220] mb-1">Deck Repair — Edwardsville, IL</h3>
                <p className="text-[#6b7280] text-sm">A homeowner near Holiday Shores had a rear deck with significant rot in the outer joist and several soft deck boards that had become a safety concern. We removed the damaged boards and the compromised joist section, sistered in new pressure-treated lumber, replaced seven deck boards, and rebuilt the railing post bases that had rotted at the footing. The deck was sanded and stained to match the original finish. Completed in one full day. See our <a href="/handyman-services/deck-repair/" className="text-[#ff5b00] hover:underline">deck repair service</a> page for more.</p>
              </div>
            </div>

            {/* Project 2 - Drywall */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#e5e7eb]">
              <div className="grid grid-cols-2 gap-0">
                <div className="relative">
                  <img loading="lazy" src="/images/edwardsville-drywall-before.webp" alt="Damaged drywall before repair in Edwardsville IL" width={450} height={160} className="w-full h-40 object-cover" />
                  <span className="absolute top-2 left-2 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded">BEFORE</span>
                </div>
                <div className="relative">
                  <img loading="lazy" src="/images/edwardsville-drywall-after.webp" alt="Patched wall after drywall repair in Edwardsville IL" width={450} height={160} className="w-full h-40 object-cover" />
                  <span className="absolute top-2 left-2 bg-[#ff5b00] text-white text-xs font-bold px-2 py-1 rounded">AFTER</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#0b1220] mb-1">Drywall Repair — Edwardsville, IL</h3>
                <p className="text-[#6b7280] text-sm">A plumber had cut a 14" x 18" access hole in a hallway wall near the Leclaire neighborhood to repair a supply line. After the plumbing was fixed, the homeowner needed the wall restored before painting. We installed a backing board, cut and fit a new drywall patch, applied two coats of joint compound, matched the existing skip-trowel texture, primed, and painted the entire wall section. The repair is invisible. Learn more about our <a href="/handyman-services/drywall-repair/" className="text-[#ff5b00] hover:underline">drywall repair service</a>.</p>
              </div>
            </div>

            {/* Project 3 - Door */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#e5e7eb]">
              <div className="grid grid-cols-2 gap-0">
                <div className="relative">
                  <img loading="lazy" src="/images/edwardsville-door-before.webp" alt="Old worn door before replacement in Edwardsville IL" width={450} height={160} className="w-full h-40 object-cover" />
                  <span className="absolute top-2 left-2 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded">BEFORE</span>
                </div>
                <div className="relative">
                  <img loading="lazy" src="/images/edwardsville-door-after.webp" alt="New door installed in Edwardsville IL" width={450} height={160} className="w-full h-40 object-cover" />
                  <span className="absolute top-2 left-2 bg-[#ff5b00] text-white text-xs font-bold px-2 py-1 rounded">AFTER</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#0b1220] mb-1">Door Installation — Edwardsville, IL</h3>
                <p className="text-[#6b7280] text-sm">A homeowner in a 1970s ranch home near SIUE had an original wood entry door that had warped over the years, making it difficult to latch and allowing drafts in winter. We removed the old door and damaged frame, squared up the rough opening, installed a new fiberglass pre-hung unit with a modern deadbolt and lever handle, insulated around the frame, and repainted the exterior trim. The door now seals perfectly and the homeowner noticed an immediate improvement in comfort. See our <a href="/handyman-services/door-repair/" className="text-[#ff5b00] hover:underline">door installation and repair</a> page.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/#contact">
              <Button className="bg-[#ff5b00] hover:bg-[#ff5b00]/90 text-white rounded-full px-8 py-6 text-base font-bold">
                Request Your Estimate
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b1220]">
              What Edwardsville Homeowners Are Saying
            </h2>
            <div className="flex items-center justify-center gap-2 text-[#ff5b00]">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="h-5 w-5 fill-[#ff5b00]" />
              ))}
              <span className="text-[#4b5563] ml-2">4.9 average · 127+ reviews</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-[#f9fafb] rounded-2xl p-6 border border-[#e5e7eb]">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-[#ff5b00] text-[#ff5b00]" />
                  ))}
                  <span className="ml-auto text-xs text-[#ff5b00] font-semibold bg-[#ff5b00]/10 px-2 py-0.5 rounded-full">{testimonial.service}</span>
                </div>
                <p className="text-[#374151] mb-4 italic">"{testimonial.text}"</p>
                <p className="text-[#6b7280] text-sm font-semibold">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phil EEAT Section */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b1220]">
                Meet Phil Green
              </h2>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 bg-[#ff5b00]/10 text-[#ff5b00] text-xs font-bold px-3 py-1.5 rounded-full border border-[#ff5b00]/20">
                  ★ Veteran-Owned
                </span>
                <span className="inline-flex items-center gap-1.5 bg-[#0b1220]/5 text-[#0b1220] text-xs font-bold px-3 py-1.5 rounded-full border border-[#0b1220]/10">
                  35+ Years Experience
                </span>
                <span className="inline-flex items-center gap-1.5 bg-[#0b1220]/5 text-[#0b1220] text-xs font-bold px-3 py-1.5 rounded-full border border-[#0b1220]/10">
                  Licensed & Insured
                </span>
              </div>
              <p className="text-[#4b5563] text-lg mb-4">
                Hero Handyman Pro was founded by Coast Guard veteran and longtime remodeling professional Phil Green. After decades working in construction, remodeling, project management, and home repair, Phil built Hero Handyman Pro to solve one of the biggest frustrations homeowners face: unreliable contractors who don't communicate, don't show up, or don't finish the job properly.
              </p>
              <p className="text-[#4b5563] text-lg mb-4">
                With more than 35 years of hands-on experience, Phil and the Hero Handyman Pro team focus on dependable communication, professional craftsmanship, and making home repair easy for busy homeowners throughout Edwardsville and the Metro East area.
              </p>
              <p className="text-[#4b5563] text-lg">
                We're not a franchise or a national call center. We're a local Metro East team that works in Edwardsville every week — background-checked, insured, and committed to treating every home with respect.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-[#e5e7eb] shadow-sm">
              <h3 className="text-xl font-bold text-[#0b1220] mb-6">Homeowner Tips for Edwardsville Homes</h3>
              <div className="space-y-5">
                <div>
                  <h4 className="font-bold text-[#0b1220] mb-1">Check older homes for plaster wall issues</h4>
                  <p className="text-[#4b5563] text-sm">Many homes near downtown Edwardsville and the Leclaire neighborhood have original plaster walls. Plaster cracks differently than drywall and requires a different repair approach. Our team has experience with both — we'll match the texture correctly. See our <Link href="/handyman-services/drywall-repair/" className="text-[#ff5b00] hover:underline">drywall and plaster repair service</Link>.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#0b1220] mb-1">Dunlap Lake and Holiday Shores decks age faster</h4>
                  <p className="text-[#4b5563] text-sm">Homes near water see accelerated wood decay from humidity and moisture. If your deck is more than 10 years old and hasn't been inspected, it's worth a look. Early <Link href="/handyman-services/deck-repair/" className="text-[#ff5b00] hover:underline">deck repair</Link> is far less expensive than full replacement.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#0b1220] mb-1">Pre-sale punch lists near SIUE move fast</h4>
                  <p className="text-[#4b5563] text-sm">Edwardsville's real estate market near SIUE is active. If you're preparing to list, a <Link href="/handyman-services/home-repair-services/" className="text-[#ff5b00] hover:underline">home repair punch list</Link> handled in one visit can significantly improve your home's presentation and inspection results.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#0b1220] mb-1">Bundle repairs to save on trip fees</h4>
                  <p className="text-[#4b5563] text-sm">Our <Link href="/handyman-service-packages/" className="text-[#ff5b00] hover:underline">service packages</Link> and <Link href="/membership/" className="text-[#ff5b00] hover:underline">membership plan</Link> let you bundle multiple small repairs into one visit, saving on scheduling fees and getting everything done at once.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b1220]">
              Edwardsville Handyman FAQs
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* GSC Keyword Sections */}
      <section className="py-16 px-6 bg-white border-t border-[#e5e7eb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h2 className="text-2xl font-bold text-[#0b1220] mb-3">Drywall Repair Edwardsville IL</h2>
              <p className="text-[#4b5563] mb-4">From small nail holes to large water-damaged sections, Hero Handyman Pro handles all drywall repair in Edwardsville, IL. We patch, texture, and paint to match your existing walls — no visible seams, no mess left behind.</p>
              <Link href="/drywall-repair-edwardsville-il" className="text-[#ff5b00] font-semibold hover:underline">Learn more about drywall repair →</Link>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#0b1220] mb-3">Deck Repair Edwardsville IL</h2>
              <p className="text-[#4b5563] mb-4">Rotted boards, loose railings, wobbly stairs, or structural damage — our deck repair service in Edwardsville, IL restores your outdoor space to safe, solid condition. We work on wood, composite, and pressure-treated decks.</p>
              <Link href="/deck-repair-edwardsville-il" className="text-[#ff5b00] font-semibold hover:underline">Learn more about deck repair →</Link>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#0b1220] mb-3">Door Installation Near Me</h2>
              <p className="text-[#4b5563] mb-4">Looking for door installation near you in Edwardsville? Hero Handyman installs entry doors, interior doors, storm doors, and patio doors. We handle the removal, framing adjustments, and hardware installation so the job is done right the first time.</p>
              <Link href="/door-installation-edwardsville-il" className="text-[#ff5b00] font-semibold hover:underline">Learn more about door installation →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Schema JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Drywall Repair Edwardsville IL",
          "description": "Professional drywall repair in Edwardsville, IL. Patches, texturing, and painting for holes, cracks, and water damage.",
          "provider": { "@type": "LocalBusiness", "name": "Hero Handyman Pro", "telephone": "+1-800-741-6056" },
          "areaServed": { "@type": "City", "name": "Edwardsville", "addressRegion": "IL" },
          "url": "https://herohandymanpro.com/drywall-repair-edwardsville-il"
        },
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Deck Repair Edwardsville IL",
          "description": "Expert deck repair in Edwardsville, IL. Rotted boards, loose railings, structural damage, and staining.",
          "provider": { "@type": "LocalBusiness", "name": "Hero Handyman Pro", "telephone": "+1-800-741-6056" },
          "areaServed": { "@type": "City", "name": "Edwardsville", "addressRegion": "IL" },
          "url": "https://herohandymanpro.com/deck-repair-edwardsville-il"
        },
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Door Installation Edwardsville IL",
          "description": "Door installation near you in Edwardsville, IL. Entry, interior, storm, and patio doors installed by local professionals.",
          "provider": { "@type": "LocalBusiness", "name": "Hero Handyman Pro", "telephone": "+1-800-741-6056" },
          "areaServed": { "@type": "City", "name": "Edwardsville", "addressRegion": "IL" },
          "url": "https://herohandymanpro.com/door-installation-edwardsville-il"
        }
      ]) }} />

      {/* Specialized Service Pages */}
      <section className="py-16 px-6 bg-white border-t border-[#e5e7eb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3 text-[#0b1220]">Specialized Handyman Services in Edwardsville, IL</h2>
            <p className="text-[#4b5563] text-lg max-w-2xl mx-auto">
              Need help with a specific repair? Explore our dedicated Edwardsville service pages for detailed information, pricing guidance, and what to expect.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/drywall-repair-edwardsville-il">
              <div className="group border border-[#e5e7eb] rounded-2xl p-6 hover:border-[#ff5b00] hover:shadow-md transition-all cursor-pointer h-full">
                <div className="bg-[#ff5b00]/10 rounded-full p-3 w-fit mb-4 group-hover:bg-[#ff5b00]/20 transition-colors">
                  <Wrench className="h-6 w-6 text-[#ff5b00]" />
                </div>
                <h3 className="font-bold text-lg text-[#0b1220] mb-2 group-hover:text-[#ff5b00] transition-colors">Drywall Repair</h3>
                <p className="text-[#6b7280] text-sm mb-4">Holes, cracks, water damage, and ceiling repairs — patched and finished to match your existing texture.</p>
                <span className="text-[#ff5b00] font-semibold text-sm">View Drywall Repair →</span>
              </div>
            </Link>
            <Link href="/deck-repair-edwardsville-il">
              <div className="group border border-[#e5e7eb] rounded-2xl p-6 hover:border-[#ff5b00] hover:shadow-md transition-all cursor-pointer h-full">
                <div className="bg-[#ff5b00]/10 rounded-full p-3 w-fit mb-4 group-hover:bg-[#ff5b00]/20 transition-colors">
                  <Hammer className="h-6 w-6 text-[#ff5b00]" />
                </div>
                <h3 className="font-bold text-lg text-[#0b1220] mb-2 group-hover:text-[#ff5b00] transition-colors">Deck Repair</h3>
                <p className="text-[#6b7280] text-sm mb-4">Rotted boards, loose railings, structural damage, and deck staining — restored to safe, solid condition.</p>
                <span className="text-[#ff5b00] font-semibold text-sm">View Deck Repair →</span>
              </div>
            </Link>
            <Link href="/door-repair-edwardsville-il">
              <div className="group border border-[#e5e7eb] rounded-2xl p-6 hover:border-[#ff5b00] hover:shadow-md transition-all cursor-pointer h-full">
                <div className="bg-[#ff5b00]/10 rounded-full p-3 w-fit mb-4 group-hover:bg-[#ff5b00]/20 transition-colors">
                  <DoorOpen className="h-6 w-6 text-[#ff5b00]" />
                </div>
                <h3 className="font-bold text-lg text-[#0b1220] mb-2 group-hover:text-[#ff5b00] transition-colors">Door Repair</h3>
                <p className="text-[#6b7280] text-sm mb-4">Sticking doors, broken hardware, damaged frames, and storm door repairs — fixed right the first time.</p>
                <span className="text-[#ff5b00] font-semibold text-sm">View Door Repair →</span>
              </div>
            </Link>
            <Link href="/carpentry-services-edwardsville-il">
              <div className="group border border-[#e5e7eb] rounded-2xl p-6 hover:border-[#ff5b00] hover:shadow-md transition-all cursor-pointer h-full">
                <div className="bg-[#ff5b00]/10 rounded-full p-3 w-fit mb-4 group-hover:bg-[#ff5b00]/20 transition-colors">
                  <Wrench className="h-6 w-6 text-[#ff5b00]" />
                </div>
                <h3 className="font-bold text-lg text-[#0b1220] mb-2 group-hover:text-[#ff5b00] transition-colors">Carpentry Services</h3>
                <p className="text-[#6b7280] text-sm mb-4">Trim repair, exterior carpentry, cabinet adjustments, and custom built-in repairs for Edwardsville homes.</p>
                <span className="text-[#ff5b00] font-semibold text-sm">View Carpentry Services →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Cross-City Links */}
      <section className="py-12 px-6 bg-[#f9fafb] border-t border-gray-200">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-3">Also Serving Nearby Metro East Communities</h2>
          <p className="text-gray-600 mb-6 max-w-3xl">
            Hero Handyman Pro serves all of Metro East Illinois. We work regularly in <Link href="/service-areas/ofallon-handyman-services/" className="text-[#ff5b00] hover:underline font-medium">O'Fallon</Link> for deck repairs and home maintenance near Scott Air Force Base, in <Link href="/service-areas/glen-carbon-handyman-services/" className="text-[#ff5b00] hover:underline font-medium">Glen Carbon</Link> for carpentry and drywall in the newer subdivisions, and in <Link href="/service-areas/collinsville-handyman-services/" className="text-[#ff5b00] hover:underline font-medium">Collinsville</Link> for general home repairs. We also cover <Link href="/service-areas/belleville-handyman-services/" className="text-[#ff5b00] hover:underline font-medium">Belleville</Link>, <Link href="/service-areas/shiloh-il-handyman-services/" className="text-[#ff5b00] hover:underline font-medium">Shiloh</Link>, <Link href="/service-areas/swansea-il-handyman-services/" className="text-[#ff5b00] hover:underline font-medium">Swansea</Link>, and <Link href="/service-areas/fairview-heights-il-handyman-services/" className="text-[#ff5b00] hover:underline font-medium">Fairview Heights</Link>.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { name: "O'Fallon, IL", href: "/service-areas/ofallon-handyman-services/" },
              { name: "Belleville, IL", href: "/service-areas/belleville-handyman-services/" },
              { name: "Collinsville, IL", href: "/service-areas/collinsville-handyman-services/" },
              { name: "Glen Carbon, IL", href: "/service-areas/glen-carbon-handyman-services/" },
              { name: "Shiloh, IL", href: "/service-areas/shiloh-il-handyman-services/" },
              { name: "Swansea, IL", href: "/service-areas/swansea-il-handyman-services/" },
              { name: "Fairview Heights, IL", href: "/service-areas/fairview-heights-il-handyman-services/" },
              { name: "View All Service Areas", href: "/service-areas/" },
            ].map((area) => (
              <Link key={area.name} href={area.href}>
                <Button variant="outline" className="rounded-full border-gray-200 hover:border-[#ff5b00] hover:text-[#ff5b00] text-sm">
                  {area.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Schedule Handyman Service in Edwardsville, IL?
          </h2>
          <p className="text-[#e5e7eb] text-lg mb-6 max-w-2xl mx-auto">
            If something in your home needs fixing—or your to-do list keeps growing—Hero Handyman is here to help. We make repairs simple, fast, and stress-free.
          </p>
          <p className="text-[#ff5b00] text-lg font-semibold mb-8 max-w-2xl mx-auto">
            Tell us what you need and we'll take care of the rest.
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
                Book Your Handyman Service
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQPage Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer,
          }
        }))
      })}} />
    </div>
  );
}
