import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star, Shield, Clock, Wrench, Home, DoorOpen, Hammer } from "lucide-react";
import SEO from "@/components/SEO";
import { FAQAccordion } from "@/components/FAQAccordion";
import PageBreadcrumb from "@/components/PageBreadcrumb";

import { useSeoRoute } from '@/hooks/useSeoRoute';
export default function HandymanKirkwoodMO() {
  const seo = useSeoRoute();
  const faqs = [
    {
      question: "How much does a handyman cost in Kirkwood, MO?",
      answer: "Most handyman jobs in Kirkwood run between $150 and $600 depending on scope. Simple repairs like drywall patching or door adjustments typically fall in the $150–$300 range. Larger projects like deck board replacement or full door installation are usually $350–$700+. We provide free estimates so you know the cost before any work begins.",
    },
    {
      question: "Do you offer same-day handyman service in Kirkwood?",
      answer: "Yes — we offer same-day and next-day availability for most repairs in Kirkwood. For urgent repairs, call us directly at 800-741-6056 and we'll do our best to get to you quickly.",
    },
    {
      question: "Are you licensed and insured to work in Missouri?",
      answer: "Yes. Hero Handyman Pro is fully insured for residential work in Missouri and Illinois. We carry general liability insurance on every job, so you're protected if anything unexpected happens.",
    },
    {
      question: "What areas of Kirkwood do you serve?",
      answer: "We serve all of Kirkwood including the historic downtown area, Kirkwood Park neighborhoods, Geyer Road corridor, and surrounding South St. Louis County communities including Webster Groves, Glendale, Des Peres, and Sunset Hills.",
    },
    {
      question: "Can you handle multiple repairs in one visit in Kirkwood?",
      answer: "Absolutely — our Honey-Do List Knockout package is designed exactly for that. We batch multiple small repairs into one efficient visit so you're not paying multiple trip charges for each item.",
    },
    {
      question: "Do you repair older homes in Kirkwood?",
      answer: "Yes — older homes are our specialty. Kirkwood has a large stock of pre-war and mid-century homes with plaster walls, original wood trim, and aging exterior carpentry. We understand how these homes are built and how to repair them properly without cutting corners.",
    },
  ];

  return (
    <div className="flex flex-col">
      <PageBreadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Service Areas", href: "/service-areas/" },
        { label: "Kirkwood, MO" }
      ]} />
      <SEO {...seo} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white py-16 md:py-24 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-8">
            <p className="text-[#ff5b00] text-sm font-semibold uppercase tracking-widest mb-3">Serving Kirkwood, MO</p>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-4">
              Handyman Services in Kirkwood, MO
            </h1>
            <p className="text-[#e5e7eb] text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Hero Handyman Pro provides reliable handyman services for homeowners in Kirkwood, MO. We specialize in small jobs, punch-list repairs, and fast home maintenance projects — done right the first time, at a fair price.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:800-741-6056">
                <Button className="bg-[#ff5b00] hover:bg-[#e54e00] text-white rounded-full px-10 py-7 text-lg font-semibold flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Now: 800-741-6056
                </Button>
              </a>
              <Link href="/#contact">
                <Button variant="outline" className="rounded-full px-10 py-7 text-lg font-semibold border-2 border-white text-white hover:bg-white/10">
                  Get a Free Quote
                </Button>
              </Link>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {[
              { icon: Star, text: "4.9★ Rated" },
              { icon: Shield, text: "Licensed & Insured" },
              { icon: Clock, text: "Same/Next-Day Available" },
              { icon: Check, text: "Transparent Pricing" },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/10 rounded-full px-5 py-2 text-sm font-medium">
                <badge.icon className="h-4 w-4 text-[#ff5b00]" />
                {badge.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Small Jobs Welcome Section */}
      <section className="py-14 px-6 bg-teal-700 text-white">
        <div className="max-w-[1120px] mx-auto grid md:grid-cols-[3fr_2fr] gap-10 items-center">
          <div>
            <span className="text-teal-200 text-xs font-semibold uppercase tracking-widest">Our Specialty</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Small Jobs Welcome</h2>
            <p className="text-teal-100 text-lg leading-relaxed mb-4">
              We focus on the types of home repairs many contractors don't take — smaller projects that still need to be done right. Whether it's a single drywall patch, a sticking door, a loose railing, or a short punch list before a home sale, we show up, do the work, and leave your home better than we found it.
            </p>
            <p className="text-teal-100 leading-relaxed">
              We serve homeowners throughout Kirkwood and nearby areas including Webster Groves, Glendale, Des Peres, Sunset Hills, and Crestwood. No job is too small — and every job gets the same care and attention as a larger project.
            </p>
          </div>
          <div className="bg-white/10 rounded-2xl p-8">
            <h3 className="font-bold text-xl mb-4">Common Small Jobs We Handle</h3>
            <ul className="space-y-2">
              {["Single drywall patch or hole repair", "Door that sticks or won't latch", "Loose deck board or wobbly railing", "Trim or baseboard repair", "Fixture installation (fans, lights)", "Pre-sale punch list repairs"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-teal-100 text-sm">
                  <Check className="w-4 h-4 text-teal-300 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b1220]">
              Handyman Services We Provide in Kirkwood
            </h2>
            <p className="text-[#4b5563] text-lg max-w-3xl mx-auto">
              Kirkwood's historic neighborhoods — from Woodlawn to Dougherty Ferry — feature older homes that need skilled, attentive care. Here's what we do best:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Drywall Repair */}
            <div className="bg-[#f9fafb] rounded-2xl p-8 border border-[#e5e7eb]">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#ff5b00]/10 rounded-full p-3">
                  <Wrench className="h-6 w-6 text-[#ff5b00]" />
                </div>
                <h3 className="text-xl font-bold text-[#0b1220]">Drywall Repair</h3>
              </div>
              <p className="text-[#4b5563] mb-4">
                Many Kirkwood homes were built before drywall was standard — plaster walls, horsehair finishes, and original lath construction are common. We work with both plaster and modern drywall, patching holes, repairing water damage, and matching texture so repairs blend seamlessly.
              </p>
              <ul className="space-y-2">
                {["Hole patching (small to large)", "Water-damaged drywall replacement", "Ceiling crack repair and retexture", "Smooth finish for paint-ready results"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[#374151] text-sm">
                    <Check className="h-4 w-4 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <Link href="/handyman-services/drywall-repair/">
                  <Button variant="outline" className="text-[#ff5b00] border-[#ff5b00] hover:bg-[#ff5b00] hover:text-white text-sm rounded-full px-5 py-2">
                    Drywall Repair Services →
                  </Button>
                </Link>
              </div>
            </div>

            {/* Door Installation */}
            <div className="bg-[#f9fafb] rounded-2xl p-8 border border-[#e5e7eb]">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#ff5b00]/10 rounded-full p-3">
                  <DoorOpen className="h-6 w-6 text-[#ff5b00]" />
                </div>
                <h3 className="text-xl font-bold text-[#0b1220]">Door Installation & Repair</h3>
              </div>
              <p className="text-[#4b5563] mb-4">
                Kirkwood's older homes often have original wood doors that have swelled, warped, or shifted over decades of Missouri humidity and freeze-thaw cycles. We install new entry doors, replace interior doors that no longer function properly, and repair frames and thresholds on aging homes.
              </p>
              <ul className="space-y-2">
                {["Entry and exterior door replacement", "Interior door installation and hanging", "Storm door and screen door installation", "Door frame repair and threshold replacement"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[#374151] text-sm">
                    <Check className="h-4 w-4 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <Link href="/handyman-services/door-repair/">
                  <Button variant="outline" className="text-[#ff5b00] border-[#ff5b00] hover:bg-[#ff5b00] hover:text-white text-sm rounded-full px-5 py-2">
                    Door Installation & Repair →
                  </Button>
                </Link>
              </div>
            </div>

            {/* Deck Repair */}
            <div className="bg-[#f9fafb] rounded-2xl p-8 border border-[#e5e7eb]">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#ff5b00]/10 rounded-full p-3">
                  <Hammer className="h-6 w-6 text-[#ff5b00]" />
                </div>
                <h3 className="text-xl font-bold text-[#0b1220]">Deck Repair</h3>
              </div>
              <p className="text-[#4b5563] mb-4">
                Kirkwood's mature tree canopy is beautiful — but it also means decks accumulate moisture, leaf debris, and shade-driven rot faster than open-yard decks. We assess the full structure, replace rotted boards and posts, reinforce railings, and restore your deck to safe, solid condition.
              </p>
              <ul className="space-y-2">
                {["Rotted deck board replacement", "Railing and post repair or replacement", "Stair stringer and tread repair", "Deck staining and sealing"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[#374151] text-sm">
                    <Check className="h-4 w-4 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <Link href="/handyman-services/deck-repair/">
                  <Button variant="outline" className="text-[#ff5b00] border-[#ff5b00] hover:bg-[#ff5b00] hover:text-white text-sm rounded-full px-5 py-2">
                    Deck Repair Services →
                  </Button>
                </Link>
              </div>
            </div>

            {/* General Home Repairs */}
            <div className="bg-[#f9fafb] rounded-2xl p-8 border border-[#e5e7eb]">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#ff5b00]/10 rounded-full p-3">
                  <Home className="h-6 w-6 text-[#ff5b00]" />
                </div>
                <h3 className="text-xl font-bold text-[#0b1220]">General Home Repairs</h3>
              </div>
              <p className="text-[#4b5563] mb-4">
                From ceiling fan installation to trim carpentry, caulking, and fixture swaps, we handle the full range of home maintenance tasks that pile up over time. One call, one visit — we work through your list efficiently so you're not scheduling multiple contractors.
              </p>
              <ul className="space-y-2">
                {["Ceiling fan and light fixture installation", "Trim, baseboard, and crown molding repair", "Caulking and weatherstripping", "Punch-list repairs for home sales"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[#374151] text-sm">
                    <Check className="h-4 w-4 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <Link href="/handyman-services/">
                  <Button variant="outline" className="text-[#ff5b00] border-[#ff5b00] hover:bg-[#ff5b00] hover:text-white text-sm rounded-full px-5 py-2">
                    All Handyman Services →
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hero Handyman Pro Section */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b1220]">
              Why Kirkwood Homeowners Choose Hero Handyman Pro
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "We Know Older Homes",
                desc: "Kirkwood has some of the most beautiful older housing stock in St. Louis County. We understand pre-war construction, plaster walls, original wood trim, and the specific repair challenges that come with homes built before 1970.",
              },
              {
                title: "No Job Too Small",
                desc: "Most contractors won't take a single drywall patch or a door that needs adjusting. We built our business around exactly those jobs — the repairs that matter to you but don't fit a GC's minimum.",
              },
              {
                title: "Transparent, Upfront Pricing",
                desc: "You'll know the full cost before we start. No surprise charges, no upsells, no 'while I'm here' add-ons you didn't ask for. Just honest work at a fair price.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-[#e5e7eb] shadow-sm">
                <div className="bg-[#ff5b00]/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-[#ff5b00]" />
                </div>
                <h3 className="text-lg font-bold text-[#0b1220] mb-2">{item.title}</h3>
                <p className="text-[#4b5563] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Kirkwood Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-[#0b1220] mb-4">
              Serving Kirkwood and the Surrounding Area
            </h2>
            <p className="text-[#4b5563] leading-relaxed mb-4">
              Kirkwood, Missouri is one of the oldest planned communities west of the Mississippi, incorporated in 1865 and built around the Pacific Railroad. Today it's known for its walkable downtown, mature tree canopy, and a housing stock that spans from Victorian-era homes near the historic district to mid-century ranches and split-levels in the surrounding neighborhoods.
            </p>
            <p className="text-[#4b5563] leading-relaxed mb-4">
              That history means Kirkwood homeowners face a specific set of maintenance challenges: plaster walls that crack seasonally, original wood windows and doors that swell in Missouri humidity, aging decks shaded by large oaks and maples, and exterior trim that takes a beating from freeze-thaw cycles. Hero Handyman Pro has the experience to handle all of it — we don't just show up with a caulk gun.
            </p>
            <p className="text-[#4b5563] leading-relaxed">
              In addition to Kirkwood proper, we serve nearby communities including Webster Groves, Glendale, Des Peres, Sunset Hills, Crestwood, and Shrewsbury. If you're not sure whether you're in our service area, call us — if we can't help, we'll point you in the right direction.
            </p>
          </div>
          <div className="bg-[#f9fafb] rounded-2xl p-8 border border-[#e5e7eb]">
            <h3 className="text-xl font-bold text-[#0b1220] mb-6">Nearby Areas We Also Serve</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Webster Groves, MO",
                "Glendale, MO",
                "Des Peres, MO",
                "Sunset Hills, MO",
                "Crestwood, MO",
                "Shrewsbury, MO",
                "Ballwin, MO",
                "Chesterfield, MO",
              ].map((city, i) => (
                <div key={i} className="flex items-center gap-2 text-[#374151] text-sm">
                  <Check className="h-4 w-4 text-[#ff5b00] flex-shrink-0" />
                  {city}
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-[#e5e7eb]">
              <Link href="/service-areas/">
                <Button variant="outline" className="w-full text-[#ff5b00] border-[#ff5b00] hover:bg-[#ff5b00] hover:text-white rounded-full">
                  View All Service Areas →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b1220] mb-4">
              Frequently Asked Questions — Kirkwood, MO
            </h2>
            <p className="text-[#4b5563]">Common questions from Kirkwood homeowners about our handyman services.</p>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Your Kirkwood Home Fixed?
          </h2>
          <p className="text-[#e5e7eb] text-lg mb-8 max-w-2xl mx-auto">
            Call us today for a free estimate. We serve Kirkwood and surrounding South St. Louis County communities with same-day and next-day availability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:800-741-6056">
              <Button className="bg-[#ff5b00] hover:bg-[#e54e00] text-white rounded-full px-10 py-7 text-lg font-semibold flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call Now: 800-741-6056
              </Button>
            </a>
            <Link href="/#contact">
              <Button variant="outline" className="rounded-full px-10 py-7 text-lg font-semibold border-2 border-white text-white hover:bg-white/10">
                Get a Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
