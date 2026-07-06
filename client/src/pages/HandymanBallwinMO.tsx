import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star, Shield, Clock, Wrench, Home, DoorOpen, Hammer } from "lucide-react";
import SEO from "@/components/SEO";

export default function HandymanBallwinMO() {
  return (
    <div className="flex flex-col">
      <SEO
        title="Handyman Services Ballwin MO | Hero Handyman Pro"
        description="Trusted handyman services in Ballwin MO. Drywall repair, carpentry, door installation, and deck repairs. Call 800-741-6056 for a free quote today."
        canonicalUrl="https://herohandymanpro.com/handyman-ballwin-mo"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white py-16 md:py-24 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-8">
            <p className="text-[#ff5b00] text-sm font-semibold uppercase tracking-widest mb-3">Serving Ballwin, MO</p>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-4">
              Trusted Ballwin MO Handyman Services
            </h1>
            <p className="text-[#e5e7eb] text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Ballwin homeowners trust Hero Handyman Pro for dependable repairs and quality craftsmanship. Whether you need drywall patched after a renovation, new doors hung, a deck restored, or carpentry work completed, we show up on time and get it done right.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:800-741-6056">
                <Button className="bg-[#ff5b00] hover:bg-[#e54e00] text-white rounded-full px-10 py-7 text-lg font-semibold flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Now: 800-741-6056
                </Button>
              </a>
              <Link href="/contact/">
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
            <Link href="/contact/">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 rounded-full px-10 py-7 text-lg font-semibold">
                Get a Free Quote
              </Button>
            </Link>
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
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#ff5b00]/40 hover:shadow-md transition-all cursor-pointer h-full">
                  <h3 className="text-lg font-bold text-[#0b1220] mb-2">{service.title}</h3>
                  <p className="text-[#4b5563] text-sm mb-4">{service.desc}</p>
                  <span className="text-[#ff5b00] text-sm font-semibold">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="py-12 px-6 bg-white border-t border-[#e5e7eb]">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-[#0b1220]">More Hero Handyman Pro Resources</h2>
          <p className="text-[#4b5563] mb-6">
            Learn more about our services on our{" "}
            <Link href="/" className="text-[#ff5b00] hover:underline font-medium">homepage</Link>,
            or visit our{" "}
            <Link href="/gbp/edwardsville" className="text-[#ff5b00] hover:underline font-medium">Edwardsville handyman services</Link>{" "}
            page for Metro East coverage.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Drywall Repair", href: "/drywall-repair-ballwin-mo" },
              { label: "Deck Repair", href: "/deck-repair-ballwin-mo" },
              { label: "Door Repair", href: "/door-repair-ballwin-mo" },
              { label: "Door Installation", href: "/door-installation-ballwin-mo" },
              { label: "Carpentry Services", href: "/carpentry-services-ballwin-mo" },
              { label: "All Services", href: "/services/" },
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
