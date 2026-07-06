import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Wrench, Home, Clock, Shield, MessageSquare, Star, Hammer, DoorOpen } from "lucide-react";
import SEO from '@/components/SEO';
import { FAQAccordion } from "@/components/FAQAccordion";

export default function CollinsvilleHandyman() {
  const whyChooseUs = [
    { icon: Home, text: "Local, professional techs serving Collinsville families" },
    { icon: Wrench, text: "Experienced in decks, carpentry, drywall, doors, and home repairs" },
    { icon: Shield, text: "Fully licensed and insured for your protection" },
    { icon: MessageSquare, text: "Clear communication with text and email updates" },
    { icon: Clock, text: "Transparent pricing and flexible scheduling" }
  ];

  const neighborhoods = [
    "Downtown Collinsville and historic districts",
    "Areas near Cahokia Mounds",
    "Neighborhoods along I-55, I-70, and I-255",
    "Communities near Splash City Waterpark",
    "Residential areas near Fairmount Park",
    "Neighborhoods near the World's Largest Catsup Bottle",
    "New developments and established communities"
  ];

  const testimonials = [
    {
      text: "Hero Handyman did an excellent job repairing our deck. Professional, on time, and reasonably priced.",
      author: "Collinsville Homeowner"
    },
    {
      text: "They fixed several issues around our home quickly and efficiently. Highly recommend!",
      author: "Collinsville Homeowner"
    },
    {
      text: "Great service from start to finish. Will definitely use them again for future projects.",
      author: "Collinsville Homeowner"
    }
  ];

  const faqs = [
    {
      question: "Do you provide free estimates in Collinsville?",
      answer: "Yes, we provide clear, upfront estimates. Many projects can be estimated from photos, and we're happy to schedule an in-home visit for more complex work."
    },
    {
      question: "How quickly can you start my project?",
      answer: "We often have same-day or next-day availability in Collinsville. Contact us and we'll let you know our earliest opening."
    },
    {
      question: "What size projects do you handle?",
      answer: "We handle everything from single repairs to comprehensive punch lists and larger projects like deck construction and exterior carpentry."
    },
    {
      question: "Are you insured and licensed?",
      answer: "Yes, Hero Handyman is fully insured and licensed. Your home and property are always protected when we work."
    }
  ];

  return (
    <div className="flex flex-col">
      <SEO 
        title="Trusted Handyman in Collinsville IL | Fast Home Repairs"
        description="Local handyman services in Collinsville for drywall, doors, carpentry, decks, and home repairs. Fast response and professional workmanship."
        canonicalUrl="https://herohandymanpro.com/service-areas/collinsville-handyman-services/"
      />
      <LocalBusinessSchema city="Collinsville" state="IL" pageUrl="/service-areas/collinsville-handyman-services/" />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white py-16 md:py-24 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-[3.75rem] font-bold leading-tight mb-4">
              Handyman Services in Collinsville, IL
            </h1>
            <p className="text-[#ff5b00] text-xl md:text-2xl font-semibold mb-6">
              Trusted, Professional Home Repairs for Collinsville Homeowners
            </p>
            <p className="text-[#e5e7eb] text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Hero Handyman is your reliable local handyman serving Collinsville, IL. From small repairs to larger home improvement projects, we deliver quality workmanship, clear communication, and dependable service every time.
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
              <p className="text-white font-medium">Honest pricing and clear communication</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:800-741-6056">
              <Button className="bg-[#ff5b00] hover:bg-[#ff5b00]/90 text-white rounded-full px-10 py-7 text-lg font-semibold flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call 800-741-6056
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
              Why Collinsville Homeowners Choose Hero Handyman
            </h2>
            <p className="text-[#4b5563] text-lg max-w-3xl mx-auto">
              Hero Handyman Pro is built on trust, quality, and professionalism. Collinsville families choose us because we treat every home like our own—showing up on time, communicating clearly, and delivering work we're proud of.
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
              We proudly serve neighborhoods throughout Collinsville—from downtown and historic districts near Cahokia Mounds to residential areas along major highways and communities near Splash City Waterpark. If you're in or near Collinsville, we're already working in your area.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b1220]">
              Popular Handyman Services in Collinsville, IL
            </h2>
            <p className="text-[#4b5563] text-lg">
              Here are the most common projects Collinsville homeowners trust us with:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Deck & Exterior */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e5e7eb]">
              <h3 className="text-2xl font-bold mb-4 text-[#0b1220]">Deck & Exterior Repairs</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span>Deck repair and resurfacing</span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span>Loose railing and stair repair</span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span><Link href="/handyman-services/porch-repair/" className="text-[#ff5b00] hover:underline">Porch and stair repair</Link></span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span>Exterior wood rot repair and trim replacement</span>
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
                  <span><Link href="/door-repair-collinsville-il" className="text-[#ff5b00] hover:underline">Door repair in Collinsville</Link> — sticking, broken hardware, frames</span>
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
                  <span>Drywall patching and repair</span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span>Trim and molding installation</span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span>Light fixture and ceiling fan installation</span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span>Cabinet hardware and door adjustments</span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span>Shelving and small built-ins</span>
                </li>
              </ul>
            </div>

            {/* Plumbing & Fixtures */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e5e7eb]">
              <h3 className="text-2xl font-bold mb-4 text-[#0b1220]">Plumbing & Fixture Repairs</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span><Link href="/handyman-services/faucet-repair/" className="text-[#ff5b00] hover:underline">Faucet repair and replacement</Link></span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span>Toilet repair and installation</span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span>Garbage disposal installation</span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span>Drain cleaning and minor leak repair</span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span>Showerhead and fixture upgrades</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods We Serve */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b1220]">
              Serving All Collinsville Neighborhoods
            </h2>
            <p className="text-[#4b5563] text-lg max-w-3xl mx-auto">
              From historic downtown to new developments, we're proud to serve homeowners throughout Collinsville and surrounding areas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {neighborhoods.map((neighborhood, i) => (
              <div key={i} className="bg-[#f9fafb] rounded-lg p-4 border border-[#e5e7eb] flex items-center gap-3">
                <Home className="h-5 w-5 text-[#ff5b00] flex-shrink-0" />
                <span className="text-[#374151]">{neighborhood}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b1220]">
              What Collinsville Homeowners Say
            </h2>
            <div className="flex justify-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-6 w-6 fill-[#ff5b00] text-[#ff5b00]" />
              ))}
            </div>
            <p className="text-[#4b5563] text-lg">
              Real feedback from real Collinsville customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-[#e5e7eb]">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-[#ff5b00] text-[#ff5b00]" />
                  ))}
                </div>
                <p className="text-[#374151] mb-6 italic">"{testimonial.text}"</p>
                <p className="text-[#6b7280] font-medium">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b1220]">
              Frequently Asked Questions
            </h2>
            <p className="text-[#4b5563] text-lg">
              Common questions from Collinsville homeowners
            </p>
          </div>

          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Specialized Service Pages */}
      <section className="py-16 px-6 bg-white border-t border-[#e5e7eb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3 text-[#0b1220]">Specialized Handyman Services in Collinsville, IL</h2>
            <p className="text-[#4b5563] text-lg max-w-2xl mx-auto">
              Need help with a specific repair? Explore our dedicated Collinsville service pages for detailed information, pricing guidance, and what to expect.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/drywall-repair-collinsville-il">
              <div className="group border border-[#e5e7eb] rounded-2xl p-6 hover:border-[#ff5b00] hover:shadow-md transition-all cursor-pointer h-full">
                <div className="bg-[#ff5b00]/10 rounded-full p-3 w-fit mb-4 group-hover:bg-[#ff5b00]/20 transition-colors">
                  <Home className="h-6 w-6 text-[#ff5b00]" />
                </div>
                <h3 className="font-bold text-lg text-[#0b1220] mb-2 group-hover:text-[#ff5b00] transition-colors">Drywall Repair</h3>
                <p className="text-[#6b7280] text-sm mb-4">Hole patching, ceiling repair, water damage, and texture matching for Collinsville homes.</p>
                <span className="text-[#ff5b00] font-semibold text-sm">View Drywall Repair →</span>
              </div>
            </Link>
            <Link href="/deck-repair-collinsville-il">
              <div className="group border border-[#e5e7eb] rounded-2xl p-6 hover:border-[#ff5b00] hover:shadow-md transition-all cursor-pointer h-full">
                <div className="bg-[#ff5b00]/10 rounded-full p-3 w-fit mb-4 group-hover:bg-[#ff5b00]/20 transition-colors">
                  <Hammer className="h-6 w-6 text-[#ff5b00]" />
                </div>
                <h3 className="font-bold text-lg text-[#0b1220] mb-2 group-hover:text-[#ff5b00] transition-colors">Deck Repair</h3>
                <p className="text-[#6b7280] text-sm mb-4">Rotted boards, wobbly railings, structural repairs, and deck staining for Collinsville decks.</p>
                <span className="text-[#ff5b00] font-semibold text-sm">View Deck Repair →</span>
              </div>
            </Link>
            <Link href="/door-repair-collinsville-il">
              <div className="group border border-[#e5e7eb] rounded-2xl p-6 hover:border-[#ff5b00] hover:shadow-md transition-all cursor-pointer h-full">
                <div className="bg-[#ff5b00]/10 rounded-full p-3 w-fit mb-4 group-hover:bg-[#ff5b00]/20 transition-colors">
                  <DoorOpen className="h-6 w-6 text-[#ff5b00]" />
                </div>
                <h3 className="font-bold text-lg text-[#0b1220] mb-2 group-hover:text-[#ff5b00] transition-colors">Door Repair</h3>
                <p className="text-[#6b7280] text-sm mb-4">Sticking doors, broken hardware, damaged frames, and storm door repairs — fixed right the first time.</p>
                <span className="text-[#ff5b00] font-semibold text-sm">View Door Repair →</span>
              </div>
            </Link>
            <Link href="/carpentry-services-collinsville-il">
              <div className="group border border-[#e5e7eb] rounded-2xl p-6 hover:border-[#ff5b00] hover:shadow-md transition-all cursor-pointer h-full">
                <div className="bg-[#ff5b00]/10 rounded-full p-3 w-fit mb-4 group-hover:bg-[#ff5b00]/20 transition-colors">
                  <Wrench className="h-6 w-6 text-[#ff5b00]" />
                </div>
                <h3 className="font-bold text-lg text-[#0b1220] mb-2 group-hover:text-[#ff5b00] transition-colors">Carpentry Services</h3>
                <p className="text-[#6b7280] text-sm mb-4">Trim repair, exterior carpentry, wood rot replacement, and finish carpentry for Collinsville homes.</p>
                <span className="text-[#ff5b00] font-semibold text-sm">View Carpentry →</span>
              </div>
            </Link>
            <Link href="/door-installation-collinsville-il">
              <div className="group border border-[#e5e7eb] rounded-2xl p-6 hover:border-[#ff5b00] hover:shadow-md transition-all cursor-pointer h-full">
                <div className="bg-[#ff5b00]/10 rounded-full p-3 w-fit mb-4 group-hover:bg-[#ff5b00]/20 transition-colors">
                  <DoorOpen className="h-6 w-6 text-[#ff5b00]" />
                </div>
                <h3 className="font-bold text-lg text-[#0b1220] mb-2 group-hover:text-[#ff5b00] transition-colors">Door Installation</h3>
                <p className="text-[#6b7280] text-sm mb-4">New entry doors, interior doors, storm doors, and patio door installation in Collinsville.</p>
                <span className="text-[#ff5b00] font-semibold text-sm">View Door Installation →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started in Collinsville?
          </h2>
          <p className="text-[#e5e7eb] text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Call us today for a free estimate or book your service online. We're ready to help with your next home repair or improvement project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:800-741-6056">
              <Button className="bg-[#ff5b00] hover:bg-[#ff5b00]/90 text-white rounded-full px-10 py-7 text-lg font-semibold flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call 800-741-6056
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
