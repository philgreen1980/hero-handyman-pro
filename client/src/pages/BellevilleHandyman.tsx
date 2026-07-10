import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Wrench, Home, Clock, Shield, MessageSquare, Star } from "lucide-react";
import SEO from '@/components/SEO';
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { useSeoRoute } from '@/hooks/useSeoRoute';

export default function BellevilleHandyman() {
  const seo = useSeoRoute();
  const whyChooseUs = [
    { icon: Home, text: "Local, professional techs serving Belleville families" },
    { icon: Wrench, text: "Experienced in decks, carpentry, drywall, doors, and home repairs" },
    { icon: Shield, text: "Fully licensed and insured for your protection" },
    { icon: MessageSquare, text: "Clear communication with text and email updates" },
    { icon: Clock, text: "Transparent pricing and flexible scheduling" }
  ];

  const neighborhoods = [
    "Downtown Belleville and historic Victorian neighborhoods",
    "Signal Hill and West Belleville communities",
    "Neighborhoods near Belleville Township High School East and West",
    "Communities near Scott Air Force Base and Lebanon Road",
    "New developments off Green Mount Road and Frank Scott Parkway",
    "Neighborhoods along Illinois Route 15 and 159",
    "Swansea and O'Fallon border communities",
    "Homes near Belleville East Side and Shiloh Valley Road"
  ];

  const testimonials = [
    {
      text: "Hero Handyman repaired our aging deck in Belleville and it looks brand new. They replaced the rotted boards, fixed the railing, and stained everything to match. Professional, on time, and fair pricing.",
      author: "Karen D., Belleville IL",
      service: "Deck Repair"
    },
    {
      text: "They patched a large drywall hole in our hallway after a plumbing repair. You can't even tell it was there. Clean, fast, and professional.",
      author: "James P., Belleville IL",
      service: "Drywall Repair"
    },
    {
      text: "Replaced our sticking front door and installed new hardware. The difference is night and day. Highly recommend Hero Handyman for any home repair in Belleville.",
      author: "Linda M., Belleville IL",
      service: "Door Installation"
    }
  ];

  const faqs = [
    {
      q: "Do you provide free estimates in Belleville?",
      a: "Yes, we provide clear, upfront estimates. Many projects can be estimated from photos, and we're happy to schedule an in-home visit for more complex work. There's no obligation and no pressure."
    },
    {
      q: "How quickly can you start my project in Belleville?",
      a: "We often have same-day or next-day availability in Belleville. Contact us and we'll let you know our earliest opening. For urgent repairs, call us directly at 800-741-6056."
    },
    {
      q: "What size projects do you handle?",
      a: "We handle everything from single repairs to comprehensive punch lists and larger projects like deck construction and exterior carpentry. No job is too small as long as we can schedule it efficiently."
    },
    {
      q: "Are you insured and licensed?",
      a: "Yes, Hero Handyman Pro is fully insured for general liability and property damage. Our technicians are background-checked and trained to treat your home with care."
    },
    {
      q: "How much does handyman service cost in Belleville, IL?",
      a: "Pricing depends on the scope of work. Minor repairs like drywall patches or door adjustments typically run $150\u2013$350. Larger projects like deck repair or door replacement are quoted individually. We always provide written estimates before starting any work."
    },
    {
      q: "What are the most common repairs you do in Belleville?",
      a: "Deck repair, drywall patching, and door work are our most frequent calls in Belleville. The older homes near downtown often need trim carpentry and drywall repairs, while newer developments off Green Mount Road frequently need deck maintenance and fixture installations."
    },
    {
      q: "Do you serve areas near Scott Air Force Base?",
      a: "Yes. We serve homeowners throughout Belleville including neighborhoods near Scott Air Force Base, along Lebanon Road, and in communities near Swansea and O'Fallon. If you're not sure whether we cover your address, just reach out."
    }
  ];

  return (
    <div className="flex flex-col">
      <PageBreadcrumb crumbs={[
    { label: "Home", href: "/" },
    { label: "Service Areas", href: "/service-areas/" },
    { label: "Belleville, IL" }
  ]} />
      <SEO {...seo} />
      <LocalBusinessSchema city="Belleville" state="IL" pageUrl="/service-areas/belleville-handyman-services/" />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white py-16 md:py-24 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-[3.75rem] font-bold leading-tight mb-4">
              Handyman Services in Belleville, IL
            </h1>
            <p className="text-[#ff5b00] text-xl md:text-2xl font-semibold mb-6">
              Trusted, Professional Home Repairs for Belleville Homeowners
            </p>
            <p className="text-[#e5e7eb] text-lg md:text-xl max-w-3xl mx-auto mb-8">
              From the historic Victorian homes near downtown Belleville to newer developments off Green Mount Road and communities near Scott Air Force Base, homeowners throughout St. Clair County trust Hero Handyman Pro for deck repair, drywall work, door installation, and general home maintenance. Belleville's mix of older and newer housing stock means we see a wide range of repair needs here — and we're equipped for all of them.
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

      {/* Hyper-Local Intro */}
      <section className="py-10 px-6 bg-white border-b border-[#e5e7eb]">
        <div className="max-w-[1120px] mx-auto">
          <p className="text-[#374151] text-lg leading-relaxed">
            Many homes throughout Belleville experience common aging-home issues like <a href="/handyman-services/drywall-repair/" className="text-[#ff5b00] hover:underline font-medium">drywall cracks</a>, trim separation, sticking doors, and <a href="/handyman-services/deck-repair/" className="text-[#ff5b00] hover:underline font-medium">deck wear</a> caused by settling, seasonal moisture changes, and everyday use. Hero Handyman Pro helps Belleville homeowners maintain and improve their homes with professional <a href="/handyman-services/" className="text-[#ff5b00] hover:underline font-medium">handyman services</a> designed to make repairs simple and stress-free.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b1220]">
              Why Belleville Homeowners Choose Hero Handyman
            </h2>
            <p className="text-[#4b5563] text-lg max-w-3xl mx-auto">
              Hero Handyman Pro is built on trust, quality, and professionalism. We've worked in Belleville for years and understand the housing stock here — from the historic Victorian homes near downtown to the mid-century ranches near Signal Hill and the newer builds off Frank Scott Parkway. That local knowledge means faster estimates, better material choices, and repairs that hold up in St. Clair County's climate.
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
              We're a Metro East team that works in Belleville every week — not a national call center dispatching strangers. Whether you're near downtown Belleville, off Green Mount Road, close to Scott Air Force Base, or in one of the communities along Route 15, we're already in your area regularly. That means faster scheduling, no travel surcharges, and a team that knows your neighborhood.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b1220]">
              Popular Handyman Services in Belleville, IL
            </h2>
            <p className="text-[#4b5563] text-lg">
              Here are the most common projects Belleville homeowners trust us with:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Deck & Exterior */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e5e7eb]">
              <h3 className="text-2xl font-bold mb-4 text-[#0b1220]">Deck & Exterior Repairs</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span><Link href="/deck-repair-belleville-il" className="text-[#ff5b00] hover:underline">Deck repair</Link> and resurfacing</span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span>Loose railing and stair repair</span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span>Porch and stair repair</span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span><Link href="/carpentry-services-belleville-il" className="text-[#ff5b00] hover:underline">Exterior wood rot repair</Link> and trim replacement</span>
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
                  <span><Link href="/door-repair-belleville-il" className="text-[#ff5b00] hover:underline">Entry door installation and replacement</Link></span>
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
                  <span><Link href="/blog/door-repair-cost-ofallon-il/" className="text-[#ff5b00] hover:underline">How much does door repair cost?</Link> — 2026 pricing guide for Metro East</span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span><Link href="/blog/window-repair-cost-ofallon-il/" className="text-[#ff5b00] hover:underline">How much does window repair cost?</Link> — 2026 pricing guide for Metro East</span>
                </li>
              </ul>
            </div>

            {/* Interior Repairs */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e5e7eb]">
              <h3 className="text-2xl font-bold mb-4 text-[#0b1220]">Interior Repairs & Upgrades</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span><Link href="/drywall-repair-belleville-il" className="text-[#ff5b00] hover:underline">Drywall crack and hole repair</Link></span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span>Ceiling repair and texture matching</span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span><Link href="/carpentry-services-belleville-il" className="text-[#ff5b00] hover:underline">Baseboard, casing, and trim installation</Link></span>
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

      {/* Belleville Service Pages */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b1220]">
              Specialized Handyman Services in Belleville, IL
            </h2>
            <p className="text-[#4b5563] text-lg max-w-3xl mx-auto">
              Explore our dedicated service pages for Belleville homeowners — each with detailed information, local pricing context, and direct booking.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/drywall-repair-belleville-il">
              <div className="bg-[#f9fafb] rounded-2xl p-6 border border-[#e5e7eb] hover:border-[#ff5b00] hover:shadow-md transition-all cursor-pointer h-full">
                <div className="bg-[#ff5b00]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-[#ff5b00]" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-[#0b1220]">Drywall Repair</h3>
                <p className="text-[#4b5563] text-sm mb-4">Hole patching, crack repair, and texture matching for Belleville homes.</p>
                <span className="text-[#ff5b00] font-semibold text-sm">Learn more →</span>
              </div>
            </Link>

            <Link href="/deck-repair-belleville-il">
              <div className="bg-[#f9fafb] rounded-2xl p-6 border border-[#e5e7eb] hover:border-[#ff5b00] hover:shadow-md transition-all cursor-pointer h-full">
                <div className="bg-[#ff5b00]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Home className="h-6 w-6 text-[#ff5b00]" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-[#0b1220]">Deck Repair</h3>
                <p className="text-[#4b5563] text-sm mb-4">Board replacement, railing repair, rot repair, and structural fixes.</p>
                <span className="text-[#ff5b00] font-semibold text-sm">Learn more →</span>
              </div>
            </Link>

            <Link href="/door-repair-belleville-il">
              <div className="bg-[#f9fafb] rounded-2xl p-6 border border-[#e5e7eb] hover:border-[#ff5b00] hover:shadow-md transition-all cursor-pointer h-full">
                <div className="bg-[#ff5b00]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-[#ff5b00]" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-[#0b1220]">Door Repair</h3>
                <p className="text-[#4b5563] text-sm mb-4">Sticking doors, broken hardware, frame repair, and weatherstripping.</p>
                <span className="text-[#ff5b00] font-semibold text-sm">Learn more →</span>
              </div>
            </Link>

            <Link href="/door-installation-belleville-il">
              <div className="bg-[#f9fafb] rounded-2xl p-6 border border-[#e5e7eb] hover:border-[#ff5b00] hover:shadow-md transition-all cursor-pointer h-full">
                <div className="bg-[#ff5b00]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-[#ff5b00]" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-[#0b1220]">Door Installation</h3>
                <p className="text-[#4b5563] text-sm mb-4">New interior and exterior door installation, storm doors, and entry upgrades.</p>
                <span className="text-[#ff5b00] font-semibold text-sm">Learn more →</span>
              </div>
            </Link>

            <Link href="/carpentry-services-belleville-il">
              <div className="bg-[#f9fafb] rounded-2xl p-6 border border-[#e5e7eb] hover:border-[#ff5b00] hover:shadow-md transition-all cursor-pointer h-full">
                <div className="bg-[#ff5b00]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-[#ff5b00]" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-[#0b1220]">Carpentry Services</h3>
                <p className="text-[#4b5563] text-sm mb-4">Trim work, exterior carpentry, rot repair, and custom woodworking.</p>
                <span className="text-[#ff5b00] font-semibold text-sm">Learn more →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Neighborhoods We Serve */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b1220]">
              Proudly Serving Belleville and Surrounding Communities
            </h2>
            <p className="text-[#4b5563] text-lg max-w-3xl mx-auto">
              Whether you're in downtown Belleville, near Scott Air Force Base, or in one of the area's growing neighborhoods, Hero Handyman is ready to help with fast, professional home repair services.
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
              What Belleville Homeowners Are Saying
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
                With more than 35 years of hands-on experience, Phil and the Hero Handyman Pro team focus on dependable communication, professional craftsmanship, and making home repair easy for busy homeowners throughout Belleville and the Metro East area.
              </p>
              <p className="text-[#4b5563] text-lg">
                We're not a franchise or a national call center. We're a local Metro East team that works in Belleville every week — background-checked, insured, and committed to treating every home with respect.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-[#e5e7eb] shadow-sm">
              <h3 className="text-xl font-bold text-[#0b1220] mb-6">Homeowner Tips for Belleville Homes</h3>
              <div className="space-y-5">
                <div>
                  <h4 className="font-bold text-[#0b1220] mb-1">Historic homes need careful drywall matching</h4>
                  <p className="text-[#4b5563] text-sm">Many older homes near downtown Belleville have original plaster or textured drywall that's hard to match. Our team has experience with multiple texture types — we'll blend the repair so it's invisible. See our <Link href="/handyman-services/drywall-repair/" className="text-[#ff5b00] hover:underline">drywall repair service</Link>.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#0b1220] mb-1">Inspect your deck before summer entertaining</h4>
                  <p className="text-[#4b5563] text-sm">Belleville's hot, humid summers accelerate wood decay. Check for soft spots and wobbly railings each spring. Early <Link href="/handyman-services/deck-repair/" className="text-[#ff5b00] hover:underline">deck repair</Link> costs far less than full replacement and keeps your family safe.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#0b1220] mb-1">Sticking doors are common in older Belleville homes</h4>
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
              Belleville Handyman FAQs
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

      {/* FAQPage JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }) }} />

      {/* Cross-City Links */}
      <section className="py-12 px-6 bg-[#f9fafb] border-t border-gray-200">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-3">Also Serving Nearby Metro East Communities</h2>
          <p className="text-gray-600 mb-6 max-w-3xl">
            Hero Handyman Pro serves all of Metro East Illinois. We work regularly in <Link href="/gbp/ofallon-il/" className="text-[#ff5b00] hover:underline font-medium">O'Fallon</Link> for home maintenance near Scott Air Force Base, in <Link href="/gbp/edwardsville-il/" className="text-[#ff5b00] hover:underline font-medium">Edwardsville</Link> for deck repairs and carpentry near SIUE, and in <Link href="/service-areas/collinsville-handyman-services/" className="text-[#ff5b00] hover:underline font-medium">Collinsville</Link> for general home repairs. We also cover <Link href="/handyman-swansea-il/" className="text-[#ff5b00] hover:underline font-medium">Swansea</Link>, <Link href="/handyman-fairview-heights-il/" className="text-[#ff5b00] hover:underline font-medium">Fairview Heights</Link>, <Link href="/service-areas/glen-carbon-handyman-services/" className="text-[#ff5b00] hover:underline font-medium">Glen Carbon</Link>, and <Link href="/handyman-shiloh-il/" className="text-[#ff5b00] hover:underline font-medium">Shiloh</Link>.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { name: "O'Fallon, IL", href: "/service-areas/ofallon-handyman-services/" },
              { name: "Edwardsville, IL", href: "/service-areas/edwardsville-handyman-services/" },
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
            Ready to Schedule Handyman Service in Belleville, IL?
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
