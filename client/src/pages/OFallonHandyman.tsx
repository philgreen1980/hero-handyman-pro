import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Wrench, Home, Clock, Shield, MessageSquare, Star, Hammer, DoorOpen } from "lucide-react";
import SEO from '@/components/SEO';
import { FAQAccordion } from '@/components/FAQAccordion';
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { useSeoRoute } from '@/hooks/useSeoRoute';

export default function OFallonHandyman() {
  const seo = useSeoRoute();
  const whyChooseUs = [
    { icon: Home, text: "Local, professional techs who respect your home" },
    { icon: Wrench, text: "Skilled in carpentry, decks, doors, drywall, and general repairs" },
    { icon: Shield, text: "Licensed and insured for your protection" },
    { icon: MessageSquare, text: "Text and email updates so you're never wondering what's happening" },
    { icon: Clock, text: "Flexible scheduling and clear, written estimates" }
  ];

  const neighborhoods = [
    "Downtown O'Fallon and historic neighborhoods near Main Street",
    "Smiley, Deer Creek, and Hartman area",
    "Regency Park, Windmill Creek, and nearby subdivisions",
    "Neighborhoods off Old Collinsville Road and Lincoln Avenue",
    "Communities near O'Fallon Township High School",
    "Newer developments along Highway 50 and Scott-Troy Road",
    "Homes near Scott Air Force Base and Shiloh-O'Fallon Road",
    "Belleville Road corridor and surrounding neighborhoods"
  ];

  const testimonials = [
    {
      text: "Hero Handyman repaired our aging deck in O'Fallon and it looks great. They were professional, friendly, and cleaned everything up when they were done. We'll definitely call them again.",
      author: "Chris & Amy B., O'Fallon IL",
      service: "Deck Repair O'Fallon IL"
    },
    {
      text: "Fast response, fair price, and excellent work. They fixed a sticking front door and replaced the weatherstripping in under two hours. I'll definitely use them again.",
      author: "David H., O'Fallon IL",
      service: "Door Installation Near Me"
    },
    {
      text: "They handled our punch-list before listing our home near Regency Park. 11 items knocked out in one visit. The process was easy and stress-free.",
      author: "Melissa T., O'Fallon IL",
      service: "Home Repairs"
    },
    {
      text: "Had a big drywall crack from settling. Hero Handyman patched it perfectly and matched the texture. You'd never know it was there. Honest pricing and no surprises.",
      author: "Ron S., O'Fallon IL",
      service: "Drywall Repair"
    }
  ];

  const faqs = [
    {
      question: "Do you offer free estimates in O'Fallon, IL?",
      answer: "Yes, we provide clear, upfront estimates. Many projects can be estimated from photos; for more complex work, we may schedule an in-home visit. There's no obligation and no pressure."
    },
    {
      question: "How soon can you get to my project in O'Fallon?",
      answer: "Availability varies by season, but we often have same-day or next-day appointments open in O'Fallon. Contact us and we'll let you know the soonest slot. For urgent repairs, call us directly at 800-741-6056."
    },
    {
      question: "What kinds of projects are too small?",
      answer: "No job is \"too small\" as long as we can schedule it efficiently. From a single door adjustment to a list of small repairs, we're happy to help. Our service packages are designed for homeowners with multiple small tasks."
    },
    {
      question: "Are you insured and licensed?",
      answer: "Yes. Hero Handyman Pro is fully insured for general liability and property damage. Our technicians are background-checked and trained to treat your home with care."
    },
    {
      question: "How much does handyman service cost in O'Fallon, IL?",
      answer: "Pricing depends on the scope of work. Minor repairs like drywall patches or door adjustments typically run $150\u2013$350. Larger projects like deck repair or door replacement are quoted individually. We always provide written estimates before starting any work."
    },
    {
      question: "Do you serve the areas near Scott Air Force Base?",
      answer: "Yes. We serve homeowners throughout O'Fallon, including neighborhoods near Scott Air Force Base, along Highway 50, Scott-Troy Road, and in established subdivisions like Regency Park and Smiley. If you're not sure whether we cover your address, just reach out."
    },
    {
      question: "What's the most common repair you do in O'Fallon?",
      answer: "Drywall repair and deck work are our most frequent calls in O'Fallon. The freeze-thaw cycles here cause settling cracks, and many decks from the 1990s and early 2000s are due for board replacement or railing work. We also do a lot of door repairs, ceiling fan installations, and pre-sale punch lists."
    }
  ];

  return (
    <div className="flex flex-col">
      <PageBreadcrumb crumbs={[
    { label: "Home", href: "/" },
    { label: "Service Areas", href: "/service-areas/" },
    { label: "O'Fallon, IL" }
  ]} />
      <SEO {...seo} />
      <LocalBusinessSchema city="O'Fallon" state="IL" pageUrl="/gbp/ofallon-il/" />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white py-16 md:py-24 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-[3.75rem] font-bold leading-tight mb-4">
              Your Trusted Handyman in O'Fallon, IL
            </h1>
            <p className="text-[#ff5b00] text-xl md:text-2xl font-semibold mb-6">
              Fast, Professional Home Repairs in O'Fallon, IL
            </p>
            <p className="text-[#e5e7eb] text-lg md:text-xl max-w-3xl mx-auto mb-8">
              From older ranch homes near downtown O'Fallon to newer developments around Scott Air Force Base, homeowners throughout the area rely on Hero Handyman Pro for dependable drywall repair, exterior carpentry, deck work, and punch-list repairs. We work in O'Fallon every week — we know the neighborhoods, the housing stock, and the kinds of repairs that come up most often here.
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
            From established neighborhoods near downtown O'Fallon to newer homes around Scott Air Force Base, homeowners throughout the area trust Hero Handyman Pro for reliable <a href="/handyman-services/drywall-repair/" className="text-[#ff5b00] hover:underline font-medium">drywall repair</a>, <a href="/carpentry-services/" className="text-[#ff5b00] hover:underline font-medium">carpentry</a>, door installation, <a href="/handyman-services/deck-repair/" className="text-[#ff5b00] hover:underline font-medium">deck repairs</a>, ceiling fan installation, and general home maintenance. We understand the unique repair needs common in Metro East homes and provide dependable service backed by decades of hands-on experience.
          </p>
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
              Hero Handyman Pro was built for homeowners who want a dependable, professional team — not a random guy with a toolbox. We've worked in O'Fallon for years and understand the housing stock here: the 1980s and 1990s ranch homes near downtown, the newer two-story builds off Highway 50, and the mix of older and newer construction near Scott Air Force Base. That local knowledge means faster estimates, better material choices, and repairs that hold up.
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
              We're a Metro East team that works in O'Fallon every week — not a national call center dispatching strangers. Whether you're near O'Fallon Community Park, off Highway 50, close to Scott Air Force Base, or in one of the newer subdivisions along Scott-Troy Road, we're already in your area regularly. That means faster scheduling, no travel surcharges, and a team that knows your neighborhood.
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
                  <span><Link href="/service-areas/window-installation-ofallon-il/" className="text-[#ff5b00] hover:underline">Window installation in O'Fallon</Link></span>
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
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span><Link href="/blog/door-repair-cost-ofallon-il/" className="text-[#ff5b00] hover:underline">How much does door repair cost in O'Fallon?</Link> — 2026 pricing guide</span>
                </li>
                <li className="flex items-start gap-3 text-[#374151]">
                  <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                  <span><Link href="/blog/window-repair-cost-ofallon-il/" className="text-[#ff5b00] hover:underline">How much does window repair cost in O'Fallon?</Link> — 2026 pricing guide</span>
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

      {/* Recent Projects Gallery */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b1220]">
              Recent Projects in O'Fallon, IL
            </h2>
            <p className="text-[#4b5563] text-lg max-w-2xl mx-auto">
              Real before &amp; after results from O'Fallon homeowners. Every job is done right the first time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Project 1 - Deck */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#e5e7eb]">
              <div className="grid grid-cols-2 gap-0">
                <div className="relative">
                  <img loading="lazy" src="/images/ofallon-deck-before.webp" alt="Damaged deck before repair in O'Fallon IL" width={450} height={160} className="w-full h-40 object-cover" />
                  <span className="absolute top-2 left-2 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded">BEFORE</span>
                </div>
                <div className="relative">
                  <img loading="lazy" src="/images/ofallon-deck-after.webp" alt="Restored deck after repair in O'Fallon IL" width={450} height={160} className="w-full h-40 object-cover" />
                  <span className="absolute top-2 left-2 bg-[#ff5b00] text-white text-xs font-bold px-2 py-1 rounded">AFTER</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#0b1220] mb-1">Deck Repair — O'Fallon, IL</h3>
                <p className="text-[#6b7280] text-sm">A homeowner near Regency Park noticed soft spots and a wobbly railing on their rear deck. We replaced six rotted deck boards, rebuilt the railing section to code, reinforced two joists that had begun to separate, and finished with a semi-transparent stain to match the original color. The entire project was completed in two days with no disruption to the family's schedule. See our full <a href="/handyman-services/deck-repair/" className="text-[#ff5b00] hover:underline">deck repair service</a> page for more detail.</p>
              </div>
            </div>

            {/* Project 2 - Drywall */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#e5e7eb]">
              <div className="grid grid-cols-2 gap-0">
                <div className="relative">
                  <img loading="lazy" src="/images/edwardsville-drywall-before.webp" alt="Damaged drywall before repair in O'Fallon IL" width={450} height={160} className="w-full h-40 object-cover" />
                  <span className="absolute top-2 left-2 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded">BEFORE</span>
                </div>
                <div className="relative">
                  <img loading="lazy" src="/images/edwardsville-drywall-after.webp" alt="Patched wall after drywall repair in O'Fallon IL" width={450} height={160} className="w-full h-40 object-cover" />
                  <span className="absolute top-2 left-2 bg-[#ff5b00] text-white text-xs font-bold px-2 py-1 rounded">AFTER</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#0b1220] mb-1">Water-Damaged Ceiling Repair — O'Fallon, IL</h3>
                <p className="text-[#6b7280] text-sm">Repaired a water-damaged ceiling in an O'Fallon home after a second-floor plumbing leak caused drywall staining, cracking, and sagging texture. Our team removed the damaged drywall, treated the affected area, matched the existing ceiling texture, primed, and repainted the ceiling to restore the room back to normal within two days. Learn more about our <a href="/handyman-services/drywall-repair/" className="text-[#ff5b00] hover:underline">drywall repair service</a>.</p>
              </div>
            </div>

            {/* Project 3 - Door */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#e5e7eb]">
              <div className="grid grid-cols-2 gap-0">
                <div className="relative">
                  <img loading="lazy" src="/images/ofallon-door-before.webp" alt="Old worn door before replacement in O'Fallon IL" width={450} height={160} className="w-full h-40 object-cover" />
                  <span className="absolute top-2 left-2 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded">BEFORE</span>
                </div>
                <div className="relative">
                  <img loading="lazy" src="/images/ofallon-door-after.webp" alt="New door installed in O'Fallon IL" width={450} height={160} className="w-full h-40 object-cover" />
                  <span className="absolute top-2 left-2 bg-[#ff5b00] text-white text-xs font-bold px-2 py-1 rounded">AFTER</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#0b1220] mb-1">Front Door Replacement — O'Fallon, IL</h3>
                <p className="text-[#6b7280] text-sm">Installed a new front entry door for an O'Fallon homeowner whose original door had become difficult to close properly due to frame shifting and weather exposure. The new installation improved energy efficiency, security, curb appeal, and overall functionality. See our <a href="/handyman-services/door-repair/" className="text-[#ff5b00] hover:underline">door installation and repair</a> service page.</p>
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
              What O'Fallon Homeowners Are Saying
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
                With more than 35 years of hands-on experience, Phil and the Hero Handyman Pro team focus on dependable communication, professional craftsmanship, and making home repair easy for busy homeowners throughout O'Fallon and the Metro East area.
              </p>
              <p className="text-[#4b5563] text-lg">
                We're not a franchise or a national call center. We're a local Metro East team that works in O'Fallon every week — background-checked, insured, and committed to treating every home with respect.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-[#e5e7eb] shadow-sm">
              <h3 className="text-xl font-bold text-[#0b1220] mb-6">Homeowner Tips for O'Fallon Homes</h3>
              <div className="space-y-5">
                <div>
                  <h4 className="font-bold text-[#0b1220] mb-1">Watch for settling cracks after winter</h4>
                  <p className="text-[#4b5563] text-sm">O'Fallon's freeze-thaw cycles cause foundation movement that shows up as diagonal cracks at window and door corners. These are cosmetic in most cases but worth patching before they grow. <Link href="/handyman-services/drywall-repair/" className="text-[#ff5b00] hover:underline">Drywall repair</Link> is typically a 1-day job.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#0b1220] mb-1">Inspect your deck every spring</h4>
                  <p className="text-[#4b5563] text-sm">Decks built in the 1990s and early 2000s are reaching the end of their original lumber's lifespan. Check for soft spots, wobbly railings, and dark discoloration — early <Link href="/handyman-services/deck-repair/" className="text-[#ff5b00] hover:underline">deck repair</Link> costs far less than full replacement.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#0b1220] mb-1">Sticking doors mean shifting frames</h4>
                  <p className="text-[#4b5563] text-sm">If your interior or exterior doors are harder to open in summer, it's usually seasonal wood expansion or a settling frame. Most <Link href="/handyman-services/door-repair/" className="text-[#ff5b00] hover:underline">door repairs</Link> take under two hours and make a big difference in comfort and security.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#0b1220] mb-1">Bundle small repairs to save money</h4>
                  <p className="text-[#4b5563] text-sm">Our <Link href="/handyman-services/" className="text-[#ff5b00] hover:underline">service packages</Link> and <Link href="/membership/" className="text-[#ff5b00] hover:underline">membership plan</Link> are designed for homeowners who have multiple small jobs. Bundling repairs into one visit saves on trip fees and gets everything done at once.</p>
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
              O'Fallon Handyman FAQs
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
          <div className="grid md:grid-cols-3 gap-10 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-[#0b1220] mb-3">Deck Repair O'Fallon IL</h2>
              <p className="text-[#4b5563] mb-4">From rotted boards and loose railings to full structural repairs, Hero Handyman Pro handles all deck repair in O'Fallon, IL. We restore wood, composite, and pressure-treated decks to safe, solid condition — fast, with upfront pricing.</p>
              <Link href="/deck-repair-ofallon-il" className="text-[#ff5b00] font-semibold hover:underline">Learn more about deck repair →</Link>
              <div className="mt-3">
                <Link href="/blog/deck-repair-cost-ofallon-il/" className="text-sm text-[#4b5563] hover:text-[#ff5b00] hover:underline">📄 How Much Does Deck Repair Cost in O'Fallon? →</Link>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#0b1220] mb-3">Drywall Repair O'Fallon IL</h2>
              <p className="text-[#4b5563] mb-4">Holes, cracks, water damage, and ceiling repairs — our drywall repair service in O'Fallon, IL patches and finishes to match your existing walls seamlessly. No mess, no surprises, done right the first time.</p>
              <Link href="/drywall-repair-ofallon-il" className="text-[#ff5b00] font-semibold hover:underline">Learn more about drywall repair →</Link>
              <div className="mt-3">
                <Link href="/blog/drywall-repair-cost-ofallon-il/" className="text-sm text-[#4b5563] hover:text-[#ff5b00] hover:underline">📄 How Much Does Drywall Repair Cost in O'Fallon? →</Link>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#0b1220] mb-3">Door Installation Near Me</h2>
              <p className="text-[#4b5563] mb-4">Searching for door installation near you in O'Fallon? Hero Handyman installs entry doors, interior doors, storm doors, and patio doors. We handle removal, framing, and hardware so every door operates perfectly from day one.</p>
              <Link href="/door-installation-ofallon-il" className="text-[#ff5b00] font-semibold hover:underline">Learn more about door installation →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Schema JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Deck Repair O'Fallon IL",
          "description": "Professional deck repair in O'Fallon, IL. Rotted boards, loose railings, structural damage, and staining.",
          "provider": { "@type": "LocalBusiness", "name": "Hero Handyman Pro", "telephone": "+1-800-741-6056" },
          "areaServed": { "@type": "City", "name": "O'Fallon", "addressRegion": "IL" },
          "url": "https://herohandymanpro.com/deck-repair-ofallon-il"
        },
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Drywall Repair O'Fallon IL",
          "description": "Expert drywall repair in O'Fallon, IL. Patches, texturing, and painting for holes, cracks, and water damage.",
          "provider": { "@type": "LocalBusiness", "name": "Hero Handyman Pro", "telephone": "+1-800-741-6056" },
          "areaServed": { "@type": "City", "name": "O'Fallon", "addressRegion": "IL" },
          "url": "https://herohandymanpro.com/drywall-repair-ofallon-il"
        },
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Door Installation O'Fallon IL",
          "description": "Door installation near you in O'Fallon, IL. Entry, interior, storm, and patio doors installed by local professionals.",
          "provider": { "@type": "LocalBusiness", "name": "Hero Handyman Pro", "telephone": "+1-800-741-6056" },
          "areaServed": { "@type": "City", "name": "O'Fallon", "addressRegion": "IL" },
          "url": "https://herohandymanpro.com/door-installation-ofallon-il"
        }
      ]) }} />

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

      {/* Cross-City Links */}
      <section className="py-12 px-6 bg-[#f9fafb] border-t border-gray-200">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-3">Also Serving Nearby Metro East Communities</h2>
          <p className="text-gray-600 mb-6 max-w-3xl">
            Hero Handyman Pro covers all of Metro East Illinois. We frequently work in <Link href="/gbp/edwardsville-il/" className="text-[#ff5b00] hover:underline font-medium">Edwardsville</Link> for deck repairs and carpentry near SIUE, in <Link href="/handyman-belleville-il" className="text-[#ff5b00] hover:underline font-medium">Belleville</Link> for drywall and door repairs in the historic homes near the courthouse square, and in <Link href="/service-areas/collinsville-handyman-services/" className="text-[#ff5b00] hover:underline font-medium">Collinsville</Link> for general home maintenance. We also serve <Link href="/service-areas/glen-carbon-handyman-services/" className="text-[#ff5b00] hover:underline font-medium">Glen Carbon</Link>, <Link href="/handyman-shiloh-il/" className="text-[#ff5b00] hover:underline font-medium">Shiloh</Link>, <Link href="/handyman-swansea-il/" className="text-[#ff5b00] hover:underline font-medium">Swansea</Link>, and <Link href="/handyman-fairview-heights-il/" className="text-[#ff5b00] hover:underline font-medium">Fairview Heights</Link>.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
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
