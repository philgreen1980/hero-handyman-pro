import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Wrench, Home, Clock, Shield, MessageSquare, Star, Hammer, DoorOpen } from "lucide-react";
import SEO from '@/components/SEO';
import { seoConfig } from '@/lib/seo-config';

export default function EdwardsvilleHandyman() {
  const whyChooseUs = [
    { icon: Home, text: "Local pros who respect your home and time" },
    { icon: Wrench, text: "Experienced in decks, carpentry, drywall, doors, and home repairs" },
    { icon: Shield, text: "Fully licensed and insured" },
    { icon: MessageSquare, text: "Text and email updates throughout your project" },
    { icon: Clock, text: "Straightforward pricing with no surprises" }
  ];

  const neighborhoods = [
    "Downtown Edwardsville",
    "Glen Carbon border neighborhoods",
    "Edwardsville High School area",
    "Dunlap Lake",
    "Holiday Shores",
    "Governors Parkway corridor",
    "New subdivisions off Troy Road and Goshen Road"
  ];

  const testimonials = [
    {
      text: "Hero Handyman fixed our deck and some trim issues—great experience from start to finish.",
      author: "Edwardsville Homeowner"
    },
    {
      text: "Professional, quick, and extremely helpful. They made the whole process easy.",
      author: "Edwardsville Homeowner"
    },
    {
      text: "Highly recommend Hero Handyman. Quality work and excellent communication.",
      author: "Edwardsville Homeowner"
    }
  ];

  const faqs = [
    {
      q: "Do you offer same-day service in Edwardsville?",
      a: "When schedules allow, yes. We frequently complete same-day or next-day projects in Edwardsville."
    },
    {
      q: "Can you estimate my project from photos?",
      a: "Yes—most handyman projects can be accurately estimated remotely."
    },
    {
      q: "Do you work with older homes?",
      a: "Absolutely. We repair trim, drywall, decks, framing, and other common issues found in both newer and older Edwardsville homes."
    },
    {
      q: "Are you insured?",
      a: "Yes, fully. Your home is always protected when we're on-site."
    }
  ];

  return (
    <div className="flex flex-col">
      <SEO {...seoConfig.edwardsvilleHandyman} />
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
              Hero Handyman is your dependable local handyman serving Edwardsville, IL. Whether you need small repairs, help tackling a punch list, or skilled support for bigger home projects, we make it simple, quick, and stress-free.
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

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b1220]">
              Why Edwardsville Homeowners Choose Hero Handyman
            </h2>
            <p className="text-[#4b5563] text-lg max-w-3xl mx-auto">
              Hero Handyman Pro focuses on delivering consistent, dependable workmanship—not guesswork. Edwardsville families trust us because we show up on time, communicate clearly, and take pride in every repair, large or small.
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
              We proudly serve neighborhoods across Edwardsville—from Holiday Shores to Dunlap Lake, from the SIUE area to the historic downtown district. If you live in or near Edwardsville, we're already working right around the corner.
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

      {/* Testimonials */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b1220]">
              What Edwardsville Homeowners Are Saying
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
              Edwardsville Handyman FAQs
            </h2>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-[#e5e7eb]">
                <h3 className="text-lg font-bold mb-3 text-[#0b1220]">{faq.q}</h3>
                <p className="text-[#4b5563]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                Book Online
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
