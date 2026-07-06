import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Wrench, Home, Clock, Shield, MessageSquare, Star, Hammer, DoorOpen } from "lucide-react";
import SEO from '@/components/SEO';
import { seoConfig } from '@/lib/seo-config';

export default function OFallonHandyman() {
  const whyChooseUs = [
    { icon: Home, text: "Local, professional techs who respect your home" },
    { icon: Wrench, text: "Skilled in carpentry, decks, doors, drywall, and general repairs" },
    { icon: Shield, text: "Licensed and insured for your protection" },
    { icon: MessageSquare, text: "Text and email updates so you're never wondering what's happening" },
    { icon: Clock, text: "Flexible scheduling and clear, written estimates" }
  ];

  const neighborhoods = [
    "Downtown O'Fallon and historic neighborhoods",
    "Smiley and Deer Creek area",
    "Neighborhoods off Old Collinsville Road",
    "Regency Park and nearby subdivisions",
    "Communities near O'Fallon Township High School",
    "Newer subdivisions along Highway 50 and Scott-Troy Road"
  ];

  const testimonials = [
    {
      text: "Hero Handyman repaired our aging deck in O'Fallon and it looks great. They were professional, friendly, and cleaned everything up when they were done.",
      author: "O'Fallon Homeowner"
    },
    {
      text: "Fast response, fair price, and excellent work. I'll definitely use them again for home repairs.",
      author: "O'Fallon Homeowner"
    },
    {
      text: "They handled our punch-list before listing our home. The process was easy and stress-free.",
      author: "O'Fallon Homeowner"
    }
  ];

  const faqs = [
    {
      q: "Do you offer free estimates in O'Fallon, IL?",
      a: "Yes, we provide clear, upfront estimates. Many projects can be estimated from photos; for more complex work, we may schedule an in-home visit."
    },
    {
      q: "How soon can you get to my project?",
      a: "Availability varies by season, but we often have same-day or next-day appointments open in O'Fallon. Contact us and we'll let you know the soonest slot."
    },
    {
      q: "What kinds of projects are too small?",
      a: "No job is \"too small\" as long as we can schedule it efficiently. From a single door adjustment to a list of small repairs, we're happy to help."
    },
    {
      q: "Are you insured?",
      a: "Yes. Hero Handyman is fully insured, and our technicians take care to protect your home while they work."
    }
  ];

  return (
    <div className="flex flex-col">
      <SEO {...seoConfig.oFallonHandyman} />
      <LocalBusinessSchema city="O'Fallon" state="IL" pageUrl="/service-areas/ofallon-handyman-services/" />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white py-16 md:py-24 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-[3.75rem] font-bold leading-tight mb-4">
              Handyman Services in O'Fallon, IL
            </h1>
            <p className="text-[#ff5b00] text-xl md:text-2xl font-semibold mb-6">
              Fast, Professional Home Repairs in O'Fallon, IL
            </p>
            <p className="text-[#e5e7eb] text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Hero Handyman is your trusted local handyman in O'Fallon, IL. When your home needs repairs, upgrades, or maintenance, we make it easy to get reliable help fast. From small fixes to bigger projects, our team shows up on time, communicates clearly, and gets the job done right.
            </p>
          </div>

          {/* Key Points */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
              <Clock className="h-10 w-10 text-[#ff5b00] mx-auto mb-3" />
              <p className="text-white font-medium">Same-day or next-day appointments when available</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
              <Shield className="h-10 w-10 text-[#ff5b00] mx-auto mb-3" />
              <p className="text-white font-medium">Skilled, insured handyman pros</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
              <MessageSquare className="h-10 w-10 text-[#ff5b00] mx-auto mb-3" />
              <p className="text-white font-medium">Honest pricing and clear communication</p>
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
              Why O'Fallon, IL Homeowners Choose Hero Handyman
            </h2>
            <p className="text-[#4b5563] text-lg max-w-3xl mx-auto">
              Hero Handyman Pro was built for homeowners who want a dependable, professional team—not a random guy with a toolbox. In O'Fallon, we focus on delivering consistent quality and a great customer experience on every project.
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
              We're based in the greater St. Louis and Metro East area and work in O'Fallon every week. Whether you're close to O'Fallon Community Park, off Highway 50, or in one of the newer subdivisions, we're nearby and ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b1220]">
              Popular Handyman Services in O'Fallon, IL
            </h2>
            <p className="text-[#4b5563] text-lg">
              Here are some of the most common projects we complete for O'Fallon homeowners:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Deck & Exterior */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e5e7eb]">
              <h3 className="text-2xl font-bold mb-4 text-[#0b1220]">Deck & Exterior Repairs</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span><Link href="/deck-repair-ofallon-il" className="text-[#ff5b00] hover:underline">Deck repair in O'Fallon</Link> and resurfacing</span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span>Loose or wobbly railings fixed</span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span>Rotten deck boards and steps replaced</span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span><Link href="/services/porch-repair-ofallon-il" className="text-[#ff5b00] hover:underline">Porch and stair repair in O'Fallon</Link></span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span><Link href="/carpentry-services-ofallon-il" className="text-[#ff5b00] hover:underline">Exterior wood rot repair</Link> on trim, posts, and fascia</span>
                </li>
              </ul>
            </div>

            {/* Doors & Entryways */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e5e7eb]">
              <h3 className="text-2xl font-bold mb-4 text-[#0b1220]">Doors & Entryways</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span><Link href="/door-installation-ofallon-il" className="text-[#ff5b00] hover:underline">Door installation in O'Fallon</Link></span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span><Link href="/door-repair-ofallon-il" className="text-[#ff5b00] hover:underline">Door repair in O'Fallon</Link> — sticking, broken hardware, frames</span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span><Link href="/services/window-installation-ofallon-il" className="text-[#ff5b00] hover:underline">Window installation in O'Fallon</Link></span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span>Storm and screen door installation</span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span>Sliding door adjustments and repairs</span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span>Door frame and threshold repair</span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span>Weatherstripping and draft fixes</span>
                </li>
              </ul>
            </div>

            {/* Interior Repairs */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e5e7eb]">
              <h3 className="text-2xl font-bold mb-4 text-[#0b1220]">Interior Repairs & Maintenance</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span><Link href="/drywall-repair-ofallon-il" className="text-[#ff5b00] hover:underline">Drywall repair in O'Fallon</Link> — holes, cracks, water damage</span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span>Ceiling repairs and patches</span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span><Link href="/carpentry-services-ofallon-il" className="text-[#ff5b00] hover:underline">Carpentry services in O'Fallon</Link> — trim, cabinets, custom work</span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span>Caulking, touch-ups, and punch-list repairs</span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span>TV mounting and minor hardware installs</span>
                </li>
              </ul>
            </div>

            {/* Minor Electrical & Plumbing */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e5e7eb]">
              <h3 className="text-2xl font-bold mb-4 text-[#0b1220]">Minor Electrical & Plumbing</h3>
              <p className="text-sm text-[#6b7280] mb-4 italic">(Minor residential tasks only)</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span><Link href="/handyman-services/ceiling-fan-installation/" className="text-[#ff5b00] hover:underline">Ceiling fan and light fixture installation</Link></span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span>Basic switch and dimmer replacements</span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span><Link href="/handyman-services/faucet-install-and-repair/" className="text-[#ff5b00] hover:underline">Faucet installation and repair</Link></span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span>Toilet install and minor toilet repairs</span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span>Garbage disposal replacement</span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span>Sink and fixture swaps</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Serving Neighborhoods */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b1220]">
              Handyman Services Across O'Fallon, IL
            </h2>
            <p className="text-[#4b5563] text-lg max-w-3xl mx-auto">
              We proudly serve homeowners throughout O'Fallon, IL and the surrounding Metro East communities. If your home is in or near O'Fallon, there's a great chance we're already working in your neighborhood.
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
            Not sure if we cover your address? Just reach out—we'll confirm your location in a few seconds.
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
                Submit your project online or give us a call. Share a few photos if you can—that helps us give you a faster, more accurate estimate.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e5e7eb] text-center">
              <div className="bg-[#ff5b00] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-bold mb-3 text-[#0b1220]">Approve the Plan</h3>
              <p className="text-[#4b5563] text-sm">
                We'll review your project, recommend the best solution, and provide clear pricing before any work begins.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e5e7eb] text-center">
              <div className="bg-[#ff5b00] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-bold mb-3 text-[#0b1220]">We Get to Work</h3>
              <p className="text-[#4b5563] text-sm">
                Your Hero Handyman tech arrives on time, completes the work professionally, and treats your home with respect.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e5e7eb] text-center">
              <div className="bg-[#ff5b00] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-bold mb-3 text-[#0b1220]">Enjoy a Finished, Worry-Free Home</h3>
              <p className="text-[#4b5563] text-sm">
                We walk through the finished work with you, answer questions, and make sure you're completely satisfied before we wrap up.
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
              What O'Fallon Homeowners Are Saying
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
              O'Fallon Handyman FAQs
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
            <h2 className="text-3xl font-bold mb-3 text-[#0b1220]">Specialized Handyman Services in O'Fallon, IL</h2>
            <p className="text-[#4b5563] text-lg max-w-2xl mx-auto">
              Need help with a specific repair? Explore our dedicated O'Fallon service pages for detailed information, pricing guidance, and what to expect.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/drywall-repair-ofallon-il">
              <div className="group border border-[#e5e7eb] rounded-2xl p-6 hover:border-[#ff5b00] hover:shadow-md transition-all cursor-pointer h-full">
                <div className="bg-[#ff5b00]/10 rounded-full p-3 w-fit mb-4 group-hover:bg-[#ff5b00]/20 transition-colors">
                  <Wrench className="h-6 w-6 text-[#ff5b00]" />
                </div>
                <h3 className="font-bold text-lg text-[#0b1220] mb-2 group-hover:text-[#ff5b00] transition-colors">Drywall Repair</h3>
                <p className="text-[#6b7280] text-sm mb-4">Holes, cracks, water damage, and ceiling repairs — patched and finished to match your existing texture.</p>
                <span className="text-[#ff5b00] font-semibold text-sm">View Drywall Repair →</span>
              </div>
            </Link>
            <Link href="/deck-repair-ofallon-il">
              <div className="group border border-[#e5e7eb] rounded-2xl p-6 hover:border-[#ff5b00] hover:shadow-md transition-all cursor-pointer h-full">
                <div className="bg-[#ff5b00]/10 rounded-full p-3 w-fit mb-4 group-hover:bg-[#ff5b00]/20 transition-colors">
                  <Hammer className="h-6 w-6 text-[#ff5b00]" />
                </div>
                <h3 className="font-bold text-lg text-[#0b1220] mb-2 group-hover:text-[#ff5b00] transition-colors">Deck Repair</h3>
                <p className="text-[#6b7280] text-sm mb-4">Rotted boards, loose railings, structural damage, and deck staining — restored to safe, solid condition.</p>
                <span className="text-[#ff5b00] font-semibold text-sm">View Deck Repair →</span>
              </div>
            </Link>
            <Link href="/door-repair-ofallon-il">
              <div className="group border border-[#e5e7eb] rounded-2xl p-6 hover:border-[#ff5b00] hover:shadow-md transition-all cursor-pointer h-full">
                <div className="bg-[#ff5b00]/10 rounded-full p-3 w-fit mb-4 group-hover:bg-[#ff5b00]/20 transition-colors">
                  <DoorOpen className="h-6 w-6 text-[#ff5b00]" />
                </div>
                <h3 className="font-bold text-lg text-[#0b1220] mb-2 group-hover:text-[#ff5b00] transition-colors">Door Repair</h3>
                <p className="text-[#6b7280] text-sm mb-4">Sticking doors, broken hardware, damaged frames, and storm door repairs — fixed right the first time.</p>
                <span className="text-[#ff5b00] font-semibold text-sm">View Door Repair →</span>
              </div>
            </Link>
            <Link href="/carpentry-services-ofallon-il">
              <div className="group border border-[#e5e7eb] rounded-2xl p-6 hover:border-[#ff5b00] hover:shadow-md transition-all cursor-pointer h-full">
                <div className="bg-[#ff5b00]/10 rounded-full p-3 w-fit mb-4 group-hover:bg-[#ff5b00]/20 transition-colors">
                  <Wrench className="h-6 w-6 text-[#ff5b00]" />
                </div>
                <h3 className="font-bold text-lg text-[#0b1220] mb-2 group-hover:text-[#ff5b00] transition-colors">Carpentry Services</h3>
                <p className="text-[#6b7280] text-sm mb-4">Trim repair, exterior carpentry, cabinet adjustments, and custom built-in repairs for O'Fallon homes.</p>
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
            Ready to Schedule Handyman Service in O'Fallon, IL?
          </h2>
          <p className="text-[#e5e7eb] text-lg mb-6 max-w-2xl mx-auto">
            If your to-do list is growing—or something in your home just isn't working the way it should—Hero Handyman is ready to step in. We handle the repairs so you can get back to enjoying your home.
          </p>
          <p className="text-[#ff5b00] text-lg font-semibold mb-8 max-w-2xl mx-auto">
            Tell us about your project today and we'll help you get it done—quickly, professionally, and with no surprises.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a href="tel:800-741-6056">
              <Button className="bg-[#ff5b00] hover:bg-[#ff5b00]/90 text-white rounded-full px-10 py-7 text-lg font-semibold flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call Now to Schedule: 800-741-6056
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
