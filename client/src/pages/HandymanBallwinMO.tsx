import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star, Shield, Clock, Wrench, Home, DoorOpen, Hammer } from "lucide-react";
import SEO from "@/components/SEO";
import { FAQAccordion } from "@/components/FAQAccordion";
import PageBreadcrumb from "@/components/PageBreadcrumb";

import { useSeoRoute } from '@/hooks/useSeoRoute';
function scrollToContact(e?: React.MouseEvent) {
  if (e) e.preventDefault();
  const el = document.getElementById('contact');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    window.location.href = '/#contact';
  }
}

const faqs = [
  {
    question: "How much does a handyman cost in Ballwin, MO?",
    answer: "Most handyman jobs in Ballwin run between $150 and $600 depending on scope. Simple repairs like drywall patching or door adjustments typically fall in the $150–$300 range. Larger projects like deck board replacement or full door installation are usually $350–$700+. We provide free estimates so you know the cost before any work begins.",
  },
  {
    question: "Do you offer same-day handyman service in Ballwin?",
    answer: "Yes — we offer same-day and next-day availability for most repairs in Ballwin. For urgent repairs, call us directly at 800-741-6056 and we'll do our best to get to you quickly.",
  },
  {
    question: "Are you licensed and insured to work in Missouri?",
    answer: "Yes. Hero Handyman Pro is fully insured for residential work in Missouri and Illinois. We carry general liability insurance on every job, so you're protected if anything unexpected happens.",
  },
  {
    question: "What areas of Ballwin do you serve?",
    answer: "We serve all of Ballwin including Kehrs Mill Road, Manchester Road corridor, Ballwin Athletic Complex area, and surrounding West St. Louis County communities including Chesterfield, Ellisville, and Wildwood.",
  },
  {
    question: "Can you handle multiple repairs in one visit in Ballwin?",
    answer: "Absolutely — our Honey-Do List Knockout package is designed exactly for that. We batch multiple small repairs into one efficient visit so you're not paying multiple trip charges for each item.",
  },
  {
    question: "Do you repair decks in Ballwin?",
    answer: "Yes. Deck repair is one of our most common requests in Ballwin. Ballwin's wooded lots and shaded backyards accelerate wood decay, so we inspect for soft spots, replace compromised boards and posts, and reinforce railings to bring your deck back to safe condition.",
  },
  {
    question: "Do you take small jobs in Ballwin?",
    answer: "Yes — we specialize in small repairs and punch-list work that many contractors won't take. Whether it's a single drywall patch, a sticking door, or a short list of items before a move or home sale, we're set up to handle smaller projects efficiently and affordably.",
  },
  {
    question: "How quickly can you schedule a repair in Ballwin?",
    answer: "We aim for fast turnaround and can often schedule within a few days of your call. For urgent repairs, call us directly at 800-741-6056 and we'll do our best to fit you in quickly.",
  },
];

export default function HandymanBallwinMO() {
  const seo = useSeoRoute();
  return (
    <div className="flex flex-col">
      <PageBreadcrumb crumbs={[
    { label: "Home", href: "/" },
    { label: "Service Areas", href: "/service-areas/" },
    { label: "Ballwin, MO" }
  ]} />
      <SEO {...seo} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white py-16 md:py-24 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-8">
            <p className="text-[#ff5b00] text-sm font-semibold uppercase tracking-widest mb-3">Serving Ballwin, MO</p>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-4">
              Handyman Services in Ballwin, MO
            </h1>
            <p className="text-[#e5e7eb] text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Hero Handyman Pro provides reliable handyman services for homeowners in Ballwin, MO. We specialize in small jobs, punch-list repairs, and fast home maintenance projects that need to be done right.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:800-741-6056">
                <Button className="bg-[#ff5b00] hover:bg-[#e54e00] text-white rounded-full px-10 py-7 text-lg font-semibold flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Now: 800-741-6056
                </Button>
              </a>
              <a href="/#contact" onClick={scrollToContact}>
                <Button variant="outline" className="rounded-full px-10 py-7 text-lg font-semibold border-2 border-white text-white hover:bg-white/10">
                  Get a Free Quote
                </Button>
              </a>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {[
              { icon: Star, text: "4.9★ Rated" },
              { icon: Shield, text: "Licensed & Insured" },
              { icon: Clock, text: "Same/Next-Day Available" },
              { icon: Check, text: "No Hidden Fees" },
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
              We focus on the types of home repairs many contractors won't take — smaller projects that still matter. Whether it's a drywall patch, a sticking door, a rotted deck board, or a short punch list before a move or home sale, we show up, do the work right, and leave your home better than we found it.
            </p>
            <p className="text-teal-100 leading-relaxed">
              We serve Ballwin and nearby areas including Chesterfield, Ellisville, Wildwood, and Des Peres. No job is too small — every repair gets the same quality attention as a larger project.
            </p>
          </div>
          <div className="bg-white/10 rounded-2xl p-8">
            <h3 className="font-bold text-xl mb-4">Common Small Jobs We Handle</h3>
            <ul className="space-y-2">
              {[
                "Single drywall patch or hole repair",
                "Door that sticks, drags, or won't latch",
                "Rotted deck board or wobbly railing",
                "Trim, baseboard, or casing repair",
                "Ceiling fan or light fixture install",
                "Pre-sale or move-in punch list repairs"
              ].map((item, i) => (
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
              Home Repair Services in Ballwin, MO
            </h2>
            <p className="text-[#4b5563] text-lg max-w-3xl mx-auto">
              Ballwin's family-friendly neighborhoods — from Kehrs Mill Road to Manchester Road — are filled with well-kept homes that occasionally need a skilled hand. We specialize in the repairs that keep your home safe, functional, and looking its best.
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
                Ballwin homes from the 1970s through the 2000s span a wide range of drywall conditions. Older homes may have plaster-over-drywall systems that require careful matching. We handle everything from small nail holes to large sections damaged by water or impact, with texture matching that blends seamlessly.
              </p>
              <ul className="space-y-2">
                {["Nail hole and screw pop repairs", "Large hole patching and finishing", "Water stain and moisture damage repair", "Texture matching (orange peel, knockdown, smooth)"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[#374151] text-sm">
                    <Check className="h-4 w-4 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <Link href="/drywall-repair-ballwin-mo" className="text-[#ff5b00] font-semibold text-sm hover:underline">Drywall repair in Ballwin →</Link>
              </div>
            </div>

            {/* Carpentry */}
            <div className="bg-[#f9fafb] rounded-2xl p-8 border border-[#e5e7eb]">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#ff5b00]/10 rounded-full p-3">
                  <Home className="h-6 w-6 text-[#ff5b00]" />
                </div>
                <h3 className="text-xl font-bold text-[#0b1220]">Carpentry</h3>
              </div>
              <p className="text-[#4b5563] mb-4">
                Ballwin's split-level and ranch-style homes often feature detailed millwork — chair rails, wainscoting, built-in shelving — that needs careful repair when damaged. We restore trim profiles, re-hang cabinet doors that have dropped, and complete the finish carpentry details that make a home feel polished.
              </p>
              <ul className="space-y-2">
                {["Baseboard, casing, and chair rail repair", "Cabinet door and hinge adjustment", "Built-in shelf and bookcase repair", "Wainscoting and accent wall carpentry"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[#374151] text-sm">
                    <Check className="h-4 w-4 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <Link href="/carpentry-services-ballwin-mo" className="text-[#ff5b00] font-semibold text-sm hover:underline">Carpentry services in Ballwin →</Link>
              </div>
            </div>

            {/* Door Installation */}
            <div className="bg-[#f9fafb] rounded-2xl p-8 border border-[#e5e7eb]">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#ff5b00]/10 rounded-full p-3">
                  <DoorOpen className="h-6 w-6 text-[#ff5b00]" />
                </div>
                <h3 className="text-xl font-bold text-[#0b1220]">Door Installation</h3>
              </div>
              <p className="text-[#4b5563] mb-4">
                Ballwin's seasonal temperature shifts cause door frames to expand and contract, leading to doors that stick in summer and gap in winter. We replace worn entry doors with properly fitted units, hang interior doors that swing and latch correctly, and install storm doors that improve energy efficiency year-round.
              </p>
              <ul className="space-y-2">
                {["Entry door replacement and installation", "Interior door hanging and adjustment", "Storm and screen door installation", "Sliding patio door repair and replacement"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[#374151] text-sm">
                    <Check className="h-4 w-4 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <Link href="/door-repair-ballwin-mo" className="text-[#ff5b00] font-semibold text-sm hover:underline">Door repair in Ballwin →</Link>
              </div>
            </div>

            {/* Deck Repairs */}
            <div className="bg-[#f9fafb] rounded-2xl p-8 border border-[#e5e7eb]">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#ff5b00]/10 rounded-full p-3">
                  <Hammer className="h-6 w-6 text-[#ff5b00]" />
                </div>
                <h3 className="text-xl font-bold text-[#0b1220]">Deck Repairs</h3>
              </div>
              <p className="text-[#4b5563] mb-4">
                Ballwin's wooded lots and shaded backyards create ideal conditions for wood decay — moisture stays longer under tree canopy, and decks age faster than in open sun. We inspect for soft spots, replace compromised boards and posts, and reinforce railings to bring your deck back to code and safe for family use.
              </p>
              <ul className="space-y-2">
                {["Soft board and rot identification and replacement", "Post and beam reinforcement", "Railing tightening and replacement", "Ledger board inspection and repair"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[#374151] text-sm">
                    <Check className="h-4 w-4 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <Link href="/deck-repair-ballwin-mo" className="text-[#ff5b00] font-semibold text-sm hover:underline">Deck repair in Ballwin →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#ff5b00] to-[#f97316]">
        <div className="max-w-[1120px] mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Reliable Repairs in Ballwin?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Hero Handyman Pro serves Ballwin and all of West St. Louis County. Call us today or request a free quote online — we respond fast and schedule quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:800-741-6056">
              <Button className="bg-white text-[#ff5b00] hover:bg-white/90 rounded-full px-10 py-7 text-lg font-bold flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call 800-741-6056
              </Button>
            </a>
            <a href="/#contact" onClick={scrollToContact}>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 rounded-full px-10 py-7 text-lg font-semibold">
                Get a Free Quote
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Specialized Services Section */}
      <section className="py-16 px-6 bg-white border-t border-gray-100">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold text-[#0b1220] mb-3">Specialized Handyman Services in Ballwin, MO</h2>
          <p className="text-[#4b5563] mb-8 max-w-2xl">Beyond general handyman work, we offer dedicated service pages for Ballwin's most common repair needs — each with local expertise and same-day availability.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Drywall Repair", desc: "Hole patching, water damage, ceiling repair, and texture matching for Ballwin homes.", href: "/drywall-repair-ballwin-mo" },
              { title: "Deck Repair", desc: "Board replacement, railing repair, structural repairs, and deck maintenance in Ballwin.", href: "/deck-repair-ballwin-mo" },
              { title: "Door Repair", desc: "Sticking doors, broken hardware, frame repair, and weatherstripping in Ballwin.", href: "/door-repair-ballwin-mo" },
              { title: "Door Installation", desc: "New interior and exterior door installation, storm doors, and entry door upgrades in Ballwin.", href: "/door-installation-ballwin-mo" },
              { title: "Carpentry Services", desc: "Trim installation, wood rot repair, exterior carpentry, and finish work in Ballwin.", href: "/carpentry-services-ballwin-mo" },
            ].map((service, i) => (
              <Link key={i} href={service.href}>
                <div className="bg-[#f9fafb] rounded-2xl p-6 border border-[#e5e7eb] hover:border-[#ff5b00]/40 hover:shadow-md transition-all cursor-pointer h-full">
                  <h3 className="text-lg font-bold text-[#0b1220] mb-2">{service.title}</h3>
                  <p className="text-[#4b5563] text-sm mb-4">{service.desc}</p>
                  <span className="text-[#ff5b00] text-sm font-semibold">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Paragraph Section */}
      <section className="py-14 px-6 bg-white border-t border-gray-100">
        <div className="max-w-[780px] mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0b1220] mb-4">Why Ballwin Homeowners Choose Hero Handyman Pro</h2>
          <p className="text-[#4b5563] text-lg leading-relaxed">
            We built this business around the jobs other contractors skip. Small repairs, punch-list items, quick fixes before a move — these are exactly what we do best. When you call Hero Handyman Pro in Ballwin, you get a skilled craftsman who shows up on time, communicates clearly, and gets the work done right the first time. We're fast, reliable, and we specialize in making your home's small problems disappear quickly.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-[#f9fafb] border-t border-[#e5e7eb]">
        <div className="max-w-[780px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0b1220] mb-3">Frequently Asked Questions</h2>
            <p className="text-[#4b5563]">Common questions from Ballwin homeowners</p>
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

      {/* Internal Links Section */}
      <section className="py-12 px-6 bg-white border-t border-[#e5e7eb]">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-[#0b1220]">More Hero Handyman Pro Resources</h2>
          <p className="text-[#4b5563] mb-6">
            Explore more handyman services and nearby coverage areas.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "West St. Louis Handyman Services", href: "/gbp/des-peres-mo/" },
              { label: "Handyman in Chesterfield, MO", href: "/handyman-chesterfield-mo" },
              { label: "Handyman Near Me", href: "/handyman-near-me" },
              { label: "All Handyman Services", href: "/handyman-services/" },
              { label: "Drywall Repair", href: "/drywall-repair-ballwin-mo" },
              { label: "Deck Repair", href: "/deck-repair-ballwin-mo" },
              { label: "Door Repair", href: "/door-repair-ballwin-mo" },
            ].map((link) => (
              <Link key={link.href} href={link.href}>
                <Button variant="outline" className="rounded-full border-[#ff5b00]/30 text-[#ff5b00] hover:bg-[#ff5b00]/5">
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
