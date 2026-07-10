import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Wrench, Home, Clock, Shield, MessageSquare, Star, Hammer, DoorOpen } from "lucide-react";
import SEO from '@/components/SEO';
import { FAQAccordion } from "@/components/FAQAccordion";
import PageBreadcrumb from "@/components/PageBreadcrumb";

import { useSeoRoute } from '@/hooks/useSeoRoute';
export default function CollinsvilleHandyman() {
  const seo = useSeoRoute();
  const whyChooseUs = [
    { icon: Home, text: "Local, professional techs serving Collinsville families" },
    { icon: Wrench, text: "Experienced in decks, carpentry, drywall, doors, and home repairs" },
    { icon: Shield, text: "Fully licensed and insured for your protection" },
    { icon: MessageSquare, text: "Clear communication with text and email updates" },
    { icon: Clock, text: "Transparent pricing and flexible scheduling" }
  ];

  const neighborhoods = [
    "Downtown Collinsville and historic neighborhoods near Main Street",
    "Residential areas near Cahokia Mounds State Historic Site",
    "Communities along Beltline Road and Vandalia Street",
    "Neighborhoods near Splash City Waterpark and Fairmount Park",
    "Homes along I-55, I-70, and I-255 corridors",
    "Maryville and Collinsville border communities",
    "Newer developments off Troy Road and Horseshoe Lake Road",
    "Neighborhoods near Collinsville High School and YMCA"
  ];

  const testimonials = [
    {
      text: "Hero Handyman repaired our deck in Collinsville and it looks great. They replaced the soft boards, fixed the railing, and stained everything to match. Professional, on time, and fair pricing.",
      author: "Robert T., Collinsville IL",
      service: "Deck Repair"
    },
    {
      text: "They fixed several issues around our home in one visit — drywall patch, a sticking door, and a ceiling fan installation. Efficient, clean, and highly professional.",
      author: "Michelle K., Collinsville IL",
      service: "Home Repairs"
    },
    {
      text: "Great service from start to finish. Phil's team replaced our front door and the difference in security and energy efficiency is noticeable. Will definitely use them again.",
      author: "David L., Collinsville IL",
      service: "Door Installation"
    }
  ];

  const faqs = [
    {
      question: "Do you provide free estimates in Collinsville?",
      answer: "Yes, we provide clear, upfront estimates. Many projects can be estimated from photos, and we're happy to schedule an in-home visit for more complex work. There's no obligation and no pressure."
    },
    {
      question: "How quickly can you start my project in Collinsville?",
      answer: "We often have same-day or next-day availability in Collinsville. Contact us and we'll let you know our earliest opening. For urgent repairs, call us directly at 800-741-6056."
    },
    {
      question: "What size projects do you handle?",
      answer: "We handle everything from single repairs to comprehensive punch lists and larger projects like deck construction and exterior carpentry. No job is too small as long as we can schedule it efficiently."
    },
    {
      question: "Are you insured and licensed?",
      answer: "Yes, Hero Handyman Pro is fully insured for general liability and property damage. Our technicians are background-checked and trained to treat your home with care."
    },
    {
      question: "How much does handyman service cost in Collinsville, IL?",
      answer: "Pricing depends on the scope of work. Minor repairs like drywall patches or door adjustments typically run $150\u2013$350. Larger projects like deck repair or door replacement are quoted individually. We always provide written estimates before starting any work."
    },
    {
      question: "What are the most common repairs you do in Collinsville?",
      answer: "Deck repair, drywall patching, and door work are our most frequent calls in Collinsville. Homes near Cahokia Mounds and the older neighborhoods off Vandalia Street often need trim carpentry and drywall repairs, while newer developments off Beltline Road frequently need deck maintenance and fixture installations."
    },
    {
      question: "Do you serve Maryville and nearby communities too?",
      answer: "Yes. We serve Collinsville and surrounding communities including Maryville, Troy, and the Collinsville-Edwardsville corridor. If you're not sure whether we cover your address, just reach out and we'll confirm."
    }
  ];

  return (
    <div className="flex flex-col">
      <PageBreadcrumb crumbs={[
    { label: "Home", href: "/" },
    { label: "Service Areas", href: "/service-areas/" },
    { label: "Collinsville, IL" }
  ]} />
      <SEO {...seo} />
      <LocalBusinessSchema city="Collinsville" state="IL" pageUrl="/service-areas/collinsville-handyman-services/" />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white py-16 md:py-24 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-[3.75rem] font-bold leading-tight mb-4">
              Collinsville IL Handyman — Fast Home Repairs & Small Projects
            </h1>
            <p className="text-[#ff5b00] text-xl md:text-2xl font-semibold mb-6">
              Trusted, Professional Home Repairs for Collinsville Homeowners
            </p>
            <p className="text-[#e5e7eb] text-lg md:text-xl max-w-3xl mx-auto mb-8">
              From the established neighborhoods near downtown Collinsville to newer developments along I-55 and I-70, homeowners throughout Madison County trust Hero Handyman Pro for deck repair, drywall work, door installation, and general home maintenance. Collinsville's mix of mid-century homes near Cahokia Mounds and newer subdivisions off Beltline Road means we see a wide range of repair needs here — and we're equipped for all of them.
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
                Book Your Handyman Service
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Hyper-Local Intro */}
      <section className="py-10 px-6 bg-white border-b border-[#e5e7eb]">
        <div className="max-w-[1120px] mx-auto">
          <p className="text-[#374151] text-lg leading-relaxed">
            From historic homes near downtown Collinsville to newer residential neighborhoods throughout the Metro East area, homeowners rely on Hero Handyman Pro for dependable repairs, <a href="/carpentry-services/" className="text-[#ff5b00] hover:underline font-medium">carpentry work</a>, <a href="/handyman-services/drywall-repair/" className="text-[#ff5b00] hover:underline font-medium">drywall repair</a>, and home improvement services completed professionally and efficiently.
          </p>
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
              Hero Handyman Pro is built on trust, quality, and professionalism. We've worked in Collinsville for years and understand the housing stock here — from the mid-century homes near Cahokia Mounds to the newer builds off Beltline Road and the established neighborhoods along Vandalia Street. That local knowledge means faster estimates, better material choices, and repairs that hold up in Madison County's climate.
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
              We're a Metro East team that works in Collinsville every week — not a national call center dispatching strangers. Whether you're near downtown Collinsville, off Beltline Road, near Cahokia Mounds, or in one of the communities along I-55, we're already in your area regularly. That means faster scheduling, no travel surcharges, and a team that knows your neighborhood.
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
                  <span><Link href="/handyman-services/faucet-install-and-repair/" className="text-[#ff5b00] hover:underline">Faucet repair and replacement</Link></span>
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
                With more than 35 years of hands-on experience, Phil and the Hero Handyman Pro team focus on dependable communication, professional craftsmanship, and making home repair easy for busy homeowners throughout Collinsville and the Metro East area.
              </p>
              <p className="text-[#4b5563] text-lg">
                We're not a franchise or a national call center. We're a local Metro East team that works in Collinsville every week — background-checked, insured, and committed to treating every home with respect.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-[#e5e7eb] shadow-sm">
              <h3 className="text-xl font-bold text-[#0b1220] mb-6">Homeowner Tips for Collinsville Homes</h3>
              <div className="space-y-5">
                <div>
                  <h4 className="font-bold text-[#0b1220] mb-1">Mid-century homes need careful drywall matching</h4>
                  <p className="text-[#4b5563] text-sm">Many homes near Cahokia Mounds and downtown Collinsville have original plaster or older textured drywall. Our team has experience with multiple texture types — we'll blend the repair so it's invisible. See our <Link href="/handyman-services/drywall-repair/" className="text-[#ff5b00] hover:underline">drywall repair service</Link>.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#0b1220] mb-1">Inspect your deck before summer</h4>
                  <p className="text-[#4b5563] text-sm">Collinsville's hot summers and cold winters accelerate wood decay. Check for soft spots and wobbly railings each spring. Early <Link href="/handyman-services/deck-repair/" className="text-[#ff5b00] hover:underline">deck repair</Link> costs far less than full replacement and keeps your family safe.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#0b1220] mb-1">Sticking doors are common in older homes</h4>
                  <p className="text-[#4b5563] text-sm">Older homes settle over time, causing door frames to shift. If your doors stick or don't latch properly, it's usually a quick fix. Most <Link href="/handyman-services/door-repair/" className="text-[#ff5b00] hover:underline">door repairs</Link> take under two hours and make a big difference in comfort and security.</p>
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

      {/* FAQPage Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do you provide free estimates in Collinsville?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide clear, upfront estimates. Many projects can be estimated from photos, and we're happy to schedule an in-home visit for more complex work."
            }
          },
          {
            "@type": "Question",
            "name": "How quickly can you start my project in Collinsville?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We often have same-day or next-day availability in Collinsville. Contact us and we'll let you know our earliest opening."
            }
          },
          {
            "@type": "Question",
            "name": "What size projects do you handle in Collinsville?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We handle everything from single repairs to comprehensive punch lists and larger projects like deck construction and exterior carpentry."
            }
          },
          {
            "@type": "Question",
            "name": "Are you insured and licensed to work in Collinsville, IL?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Hero Handyman Pro is fully insured and licensed for residential work in Illinois and Missouri. Your home and property are always protected when we work."
            }
          },
          {
            "@type": "Question",
            "name": "How much does a handyman cost in Collinsville, IL?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most handyman jobs in Collinsville run between $150 and $500 depending on the scope. Simple repairs like drywall patching or door adjustments typically fall in the $150\u2013$250 range. We provide free estimates so you know the cost before any work begins."
            }
          },
          {
            "@type": "Question",
            "name": "Do you repair decks in Collinsville, IL?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Deck repair is one of our most common requests in Collinsville. We replace rotted boards, fix wobbly railings, repair structural issues, and restore your deck to safe condition. Call 800-741-6056 for a free deck inspection."
            }
          }
        ]
      })}} />

      {/* Cross-City Links */}
      <section className="py-12 px-6 bg-[#f9fafb] border-t border-gray-200">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-3">Also Serving Nearby Metro East Communities</h2>
          <p className="text-gray-600 mb-6 max-w-3xl">
            Hero Handyman Pro serves all of Metro East Illinois. We work regularly in <Link href="/gbp/ofallon-il/" className="text-[#ff5b00] hover:underline font-medium">O'Fallon</Link> for home maintenance near Scott Air Force Base, in <Link href="/gbp/edwardsville-il/" className="text-[#ff5b00] hover:underline font-medium">Edwardsville</Link> for deck repairs near SIUE, and in <Link href="/handyman-belleville-il" className="text-[#ff5b00] hover:underline font-medium">Belleville</Link> for drywall and door repairs in the historic homes near the courthouse square. We also cover <Link href="/service-areas/glen-carbon-handyman-services/" className="text-[#ff5b00] hover:underline font-medium">Glen Carbon</Link>, <Link href="/handyman-shiloh-il/" className="text-[#ff5b00] hover:underline font-medium">Shiloh</Link>, <Link href="/handyman-swansea-il/" className="text-[#ff5b00] hover:underline font-medium">Swansea</Link>, and <Link href="/handyman-fairview-heights-il/" className="text-[#ff5b00] hover:underline font-medium">Fairview Heights</Link>.
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
                Book Your Handyman Service
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
