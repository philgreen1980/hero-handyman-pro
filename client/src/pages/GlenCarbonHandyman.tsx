import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Wrench, Home, Clock, Shield, MessageSquare, Star } from "lucide-react";
import SEO from '@/components/SEO';
import { FAQAccordion } from '@/components/FAQAccordion';
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { useSeoRoute } from '@/hooks/useSeoRoute';

export default function GlenCarbonHandyman() {
  const seo = useSeoRoute();
  const whyChooseUs = [
    { icon: Home, text: "Local professionals serving Glen Carbon families" },
    { icon: Wrench, text: "Experienced in decks, carpentry, drywall, doors, and all home repairs" },
    { icon: Shield, text: "Fully licensed and insured for your protection" },
    { icon: MessageSquare, text: "Clear updates via text and email throughout your project" },
    { icon: Clock, text: "Upfront pricing with no hidden fees" }
  ];

  const neighborhoods = [
    "Meridian Village and surrounding subdivisions",
    "Cottonwood and Edwardsville border neighborhoods",
    "Glen Carbon Elementary and middle school area",
    "New Poag Road and Meridian Road corridor",
    "Communities near SIUE and the Edwardsville campus",
    "Newer developments off IL-157 and Troy Road",
    "Horseshoe Lake Road and Maryville border communities",
    "Established neighborhoods near Glen Carbon Village Hall"
  ];

  const testimonials = [
    {
      text: "Hero Handyman repaired our deck in Glen Carbon and it looks great. They replaced the rotted boards, fixed the railing, and stained everything to match. Professional, on time, and fair pricing.",
      author: "Susan R., Glen Carbon IL",
      service: "Deck Repair"
    },
    {
      text: "They completed our home repair punch list in one visit — drywall patch, a sticking door, and a ceiling fan installation. Efficient, clean, and highly professional.",
      author: "Tom W., Glen Carbon IL",
      service: "Home Repairs"
    },
    {
      text: "Highly recommend Hero Handyman. Phil's team replaced our front door and the difference in security and energy efficiency is noticeable. Will definitely use them again.",
      author: "Amy C., Glen Carbon IL",
      service: "Door Installation"
    }
  ];

  const faqs = [
    {
      question: "Do you provide free estimates in Glen Carbon?",
      answer: "Yes, we provide clear, detailed estimates at no charge. Many projects can be estimated from photos sent via text or email. There's no obligation and no pressure."
    },
    {
      question: "How quickly can you start my project in Glen Carbon?",
      answer: "We frequently have same-day or next-day availability in Glen Carbon. Contact us and we'll confirm our earliest opening. For urgent repairs, call us directly at 800-741-6056."
    },
    {
      question: "What types of projects do you handle?",
      answer: "We handle everything from small repairs and punch lists to larger projects like deck construction, exterior carpentry, and complete home improvement work. No job is too small as long as we can schedule it efficiently."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes, Hero Handyman Pro is fully insured for general liability and property damage. Our technicians are background-checked and trained to treat your home with care."
    },
    {
      question: "How much does a handyman cost in Glen Carbon, IL?",
      answer: "Most handyman jobs in Glen Carbon run between $150 and $600 depending on scope. Simple repairs like drywall patching or door adjustments typically fall in the $150\u2013$300 range. Larger projects like deck board replacement or full door installation are usually $350\u2013$700+. We provide free estimates so you know the cost before any work begins."
    },
    {
      question: "What areas near Glen Carbon do you serve?",
      answer: "We serve Glen Carbon and the surrounding Metro East communities including Edwardsville, Maryville, Troy, Worden, and the greater Madison County area. If you're not sure whether we cover your address, just reach out."
    },
    {
      question: "What are the most common repairs you do in Glen Carbon?",
      answer: "Deck repair and drywall work are our top calls in Glen Carbon. Many homes in Meridian Village and Cottonwood have decks that need board replacement or railing work. We also do a lot of door repairs, trim carpentry, ceiling fan installations, and pre-sale punch lists for homeowners preparing to list."
    }
  ];

  return (
    <div className="flex flex-col">
      <PageBreadcrumb crumbs={[
    { label: "Home", href: "/" },
    { label: "Service Areas", href: "/service-areas/" },
    { label: "Glen Carbon, IL" }
  ]} />
      <SEO {...seo} />
      <LocalBusinessSchema city="Glen Carbon" state="IL" pageUrl="/service-areas/glen-carbon-handyman-services/" />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white py-16 md:py-24 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-[3.75rem] font-bold leading-tight mb-4">
              Handyman Services in Glen Carbon, IL
            </h1>
            <p className="text-[#ff5b00] text-xl md:text-2xl font-semibold mb-6">
              Professional, Reliable Home Repairs for Glen Carbon Homeowners
            </p>
            <p className="text-[#e5e7eb] text-lg md:text-xl max-w-3xl mx-auto mb-8">
              From the established neighborhoods near Meridian Village and Cottonwood to newer developments along New Poag Road and the Edwardsville border, homeowners throughout Glen Carbon trust Hero Handyman Pro for deck repair, drywall work, door installation, and general home maintenance. Glen Carbon's rapid growth over the past two decades means we work on everything from brand-new homes to well-established properties — and we know the difference.
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
                Book Your Handyman Service
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b1220]">
              Why Glen Carbon Homeowners Choose Hero Handyman
            </h2>
            <p className="text-[#4b5563] text-lg max-w-3xl mx-auto">
              Hero Handyman Pro is built on trust, professionalism, and quality workmanship. We've worked in Glen Carbon for years and understand the housing stock here — from the newer subdivisions in Meridian Village and Cottonwood to the established homes near the Edwardsville border and SIUE. That local knowledge means faster estimates, better material choices, and repairs that hold up in Madison County's climate.
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
              We're a Metro East team that works in Glen Carbon every week — not a national call center dispatching strangers. Whether you're in Meridian Village, near SIUE, off New Poag Road, or in one of the newer developments along IL-157, we're already in your area regularly. That means faster scheduling, no travel surcharges, and a team that knows your neighborhood.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b1220]">
              Popular Handyman Services in Glen Carbon, IL
            </h2>
            <p className="text-[#4b5563] text-lg">
              Here are the most common projects Glen Carbon homeowners trust us with:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Deck & Exterior */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e5e7eb]">
              <h3 className="text-2xl font-bold mb-4 text-[#0b1220]">Deck & Exterior Repairs</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span><Link href="/deck-repair-glen-carbon-il" className="text-[#ff5b00] hover:underline">Deck repair</Link> and board replacement</span>
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
                  <span><Link href="/carpentry-services-glen-carbon-il" className="text-[#ff5b00] hover:underline">Wood rot repair</Link> and exterior trim replacement</span>
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
                  <span><Link href="/door-repair-glen-carbon-il" className="text-[#ff5b00] hover:underline">Entry door installation and replacement</Link></span>
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

            {/* Interior Repairs */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e5e7eb]">
              <h3 className="text-2xl font-bold mb-4 text-[#0b1220]">Interior Repairs & Upgrades</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span><Link href="/drywall-repair-glen-carbon-il" className="text-[#ff5b00] hover:underline">Drywall crack and hole repair</Link></span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span>Ceiling repair and texture matching</span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span><Link href="/carpentry-services-glen-carbon-il" className="text-[#ff5b00] hover:underline">Baseboard, casing, and trim installation</Link></span>
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
              Proudly Serving Glen Carbon and Surrounding Communities
            </h2>
            <p className="text-[#4b5563] text-lg max-w-3xl mx-auto">
              Whether you're in downtown Glen Carbon, near the Gateway Center, or in one of the area's growing neighborhoods, Hero Handyman is ready to help with fast, professional home repair services.
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
            Not sure if we cover your address? Just reach out—we respond quickly and confirm coverage right away.
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

      {/* Testimonials */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b1220]">
              What Glen Carbon Homeowners Are Saying
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
                With more than 35 years of hands-on experience, Phil and the Hero Handyman Pro team focus on dependable communication, professional craftsmanship, and making home repair easy for busy homeowners throughout Glen Carbon and the Metro East area.
              </p>
              <p className="text-[#4b5563] text-lg">
                We're not a franchise or a national call center. We're a local Metro East team that works in Glen Carbon every week — background-checked, insured, and committed to treating every home with respect.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-[#e5e7eb] shadow-sm">
              <h3 className="text-xl font-bold text-[#0b1220] mb-6">Homeowner Tips for Glen Carbon Homes</h3>
              <div className="space-y-5">
                <div>
                  <h4 className="font-bold text-[#0b1220] mb-1">Newer homes need deck maintenance too</h4>
                  <p className="text-[#4b5563] text-sm">Many Glen Carbon homes built in the 2000s and 2010s now have decks that need board replacement or railing work. Don't wait until boards are soft — early <Link href="/handyman-services/deck-repair/" className="text-[#ff5b00] hover:underline">deck repair</Link> costs far less than full replacement and keeps your family safe.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#0b1220] mb-1">Pre-sale punch lists are a smart investment</h4>
                  <p className="text-[#4b5563] text-sm">Glen Carbon's active real estate market means homes sell faster when they're in top shape. We handle pre-sale punch lists — drywall repairs, door adjustments, fixture replacements — to help you maximize your sale price. See our <Link href="/handyman-services/" className="text-[#ff5b00] hover:underline">home repair service</Link>.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#0b1220] mb-1">Sticking doors are common in newer construction</h4>
                  <p className="text-[#4b5563] text-sm">Even newer homes settle over time, causing door frames to shift. If your doors stick or don't latch properly, it's usually a quick fix. Most <Link href="/handyman-services/door-repair/" className="text-[#ff5b00] hover:underline">door repairs</Link> take under two hours.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#0b1220] mb-1">Bundle repairs to save on trip fees</h4>
                  <p className="text-[#4b5563] text-sm">Our <Link href="/handyman-services/" className="text-[#ff5b00] hover:underline">service packages</Link> and <Link href="/membership/" className="text-[#ff5b00] hover:underline">membership plan</Link> let you bundle multiple small repairs into one visit, saving on scheduling fees and getting everything done at once.</p>
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
              Glen Carbon Handyman FAQs
            </h2>
          </div>

          <FAQAccordion faqs={faqs} />
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
          },
        })),
      })}} />

      {/* Specialized Services Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Specialized Handyman Services in Glen Carbon, IL</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">Beyond general handyman work, we offer dedicated service pages for Glen Carbon's most common repair needs — each with local expertise and same-day availability.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Drywall Repair", desc: "Hole patching, water damage, ceiling repair, and texture matching for Glen Carbon homes.", href: "/drywall-repair-glen-carbon-il" },
              { title: "Deck Repair", desc: "Board replacement, railing repair, structural repairs, and deck staining in Glen Carbon.", href: "/deck-repair-glen-carbon-il" },
              { title: "Door Repair", desc: "Sticking doors, broken hardware, frame repair, and storm door service in Glen Carbon.", href: "/door-repair-glen-carbon-il" },
              { title: "Door Installation", desc: "Entry doors, interior doors, storm doors, and patio door installation in Glen Carbon.", href: "/door-installation-glen-carbon-il" },
              { title: "Carpentry Services", desc: "Trim repair, exterior carpentry, wood rot replacement, and finish carpentry in Glen Carbon.", href: "/carpentry-services-glen-carbon-il" }
            ].map((service, i) => (
              <Link key={i} href={service.href}>
                <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-teal-400 hover:shadow-md transition-all cursor-pointer h-full">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                  <span className="text-teal-600 text-sm font-semibold">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-City Links */}
      <section className="py-12 px-6 bg-[#f9fafb] border-t border-gray-200">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-3">Also Serving Nearby Metro East Communities</h2>
          <p className="text-gray-600 mb-6 max-w-3xl">
            Hero Handyman Pro serves all of Metro East Illinois. We work regularly in <Link href="/gbp/edwardsville-il/" className="text-[#ff5b00] hover:underline font-medium">Edwardsville</Link> for deck repairs and carpentry near SIUE, in <Link href="/gbp/ofallon-il/" className="text-[#ff5b00] hover:underline font-medium">O'Fallon</Link> for home maintenance near Scott Air Force Base, and in <Link href="/service-areas/collinsville-handyman-services/" className="text-[#ff5b00] hover:underline font-medium">Collinsville</Link> for general home repairs. We also cover <Link href="/handyman-belleville-il" className="text-[#ff5b00] hover:underline font-medium">Belleville</Link>, <Link href="/handyman-shiloh-il/" className="text-[#ff5b00] hover:underline font-medium">Shiloh</Link>, <Link href="/handyman-swansea-il/" className="text-[#ff5b00] hover:underline font-medium">Swansea</Link>, and <Link href="/handyman-fairview-heights-il/" className="text-[#ff5b00] hover:underline font-medium">Fairview Heights</Link>.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { name: "O'Fallon, IL", href: "/gbp/ofallon-il/" },
              { name: "Edwardsville, IL", href: "/gbp/edwardsville-il/" },
              { name: "Belleville, IL", href: "/handyman-belleville-il" },
              { name: "Collinsville, IL", href: "/service-areas/collinsville-handyman-services/" },
              { name: "Glen Carbon, IL", href: "/service-areas/glen-carbon-handyman-services/" },
              { name: "Shiloh, IL", href: "/handyman-shiloh-il/" },
              { name: "Swansea, IL", href: "/handyman-swansea-il/" },
              { name: "Fairview Heights, IL", href: "/handyman-fairview-heights-il/" },
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
            Ready to Schedule Handyman Service in Glen Carbon, IL?
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
                Book Your Handyman Service
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
