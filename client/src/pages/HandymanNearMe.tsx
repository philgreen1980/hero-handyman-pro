import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Check, Star, Shield, Clock, Wrench, Home, DoorOpen, Hammer } from "lucide-react";
import SEO from "@/components/SEO";

export default function HandymanNearMe() {
  return (
    <div className="flex flex-col">
      <SEO
        title="Handyman Near Me | Fast Local Home Repairs in Edwardsville IL"
        description="Looking for a handyman near you? Fast local home repairs in Edwardsville, O'Fallon & Metro East IL. Drywall, doors, decks & more. Call 800-741-6056 for same-day service."
        canonicalUrl="https://herohandymanpro.com/handyman-near-me"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white py-16 md:py-24 px-6">
        <div className="max-w-[1120px] mx-auto text-center">
          <p className="text-[#ff5b00] text-sm font-semibold uppercase tracking-widest mb-3">Serving Metro East IL & West St. Louis County MO</p>
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-4">
            Looking for a Reliable Handyman Near You?
          </h1>
          <p className="text-[#e5e7eb] text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Hero Handyman Pro is your trusted local handyman serving homeowners throughout Edwardsville, O'Fallon, Chesterfield, and the surrounding communities. We handle the repairs that matter — done right the first time, on time, and at a fair price.
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

      {/* Section 1 — Service Areas */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b1220]">
              Your Local Handyman — Wherever You Are
            </h2>
            <p className="text-[#4b5563] text-lg max-w-3xl mx-auto">
              Hero Handyman Pro serves homeowners throughout Metro East Illinois and West St. Louis County, Missouri. Whether you're in a newer subdivision or an established neighborhood, we're close by and ready to help.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { city: "Edwardsville, IL", desc: "Historic neighborhoods and newer developments near SIUE", link: "/gbp/edwardsville" },
              { city: "O'Fallon, IL", desc: "Fast-growing community near Scott Air Force Base", link: "/gbp/ofallon" },
              { city: "Collinsville, IL", desc: "Established Metro East community with mature homes", link: "/service-areas/collinsville-handyman-services/" },
              { city: "Glen Carbon, IL", desc: "Quiet residential neighborhoods near Edwardsville", link: "/service-areas/glen-carbon-handyman-services/" },
              { city: "Belleville, IL", desc: "Historic city with a mix of older and newer homes", link: "/service-areas/belleville-handyman-services/" },
              { city: "Chesterfield, MO", desc: "Upscale West County community with mature homes", link: "/handyman-chesterfield-mo" },
              { city: "Ballwin, MO", desc: "Family-friendly West County suburb", link: "/handyman-ballwin-mo" },
              { city: "St. Charles, MO", desc: "Historic riverfront city with growing neighborhoods", link: "/handyman-st-charles-mo" },
            ].map((area, i) => (
              <Link key={i} href={area.link}>
                <div className="bg-[#f9fafb] rounded-2xl p-6 border border-[#e5e7eb] hover:border-[#ff5b00] hover:shadow-md transition-all cursor-pointer h-full">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-[#0b1220] mb-1">{area.city}</h3>
                      <p className="text-[#6b7280] text-sm">{area.desc}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Common Repairs */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b1220]">
              Common Home Repairs We Handle Near You
            </h2>
            <p className="text-[#4b5563] text-lg max-w-3xl mx-auto">
              From the small fixes that have been on your list for months to larger projects that need a skilled hand, we cover the full range of residential repair needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Wrench,
                title: "Drywall Repair",
                desc: "Holes from doorknobs, water-damaged ceilings, hairline cracks, and full panel replacements. We match existing texture so repairs are invisible.",
                link: "/handyman-services/home-repair-services/"
              },
              {
                icon: Hammer,
                title: "Deck Repair",
                desc: "Soft or rotted deck boards, wobbly railings, structural ledger issues, and stair replacements. We restore your deck to safe, solid condition.",
                link: "/handyman-services/deck-repair/"
              },
              {
                icon: DoorOpen,
                title: "Door Installation",
                desc: "Entry doors, interior doors, storm doors, and screen doors. We also repair frames that have shifted and replace worn thresholds.",
                link: "/handyman-services/door-repair/"
              },
              {
                icon: Home,
                title: "Carpentry",
                desc: "Trim, baseboard, and crown molding repairs. Cabinet adjustments, custom built-ins, and pre-sale punch list work for homes going on the market.",
                link: "/handyman-services/trim-carpentry/"
              },
              {
                icon: Shield,
                title: "General Home Repairs",
                desc: "Ceiling fan installation, faucet repairs, light fixtures, caulking, weatherstripping, and the dozens of small jobs that add up on every homeowner's list.",
                link: "/handyman-services/home-repair-services/"
              },
              {
                icon: Star,
                title: "Exterior Carpentry",
                desc: "Fascia boards, soffits, wood rot repair, and exterior trim. We protect your home's exterior from moisture damage before it becomes a bigger problem.",
                link: "/handyman-services/exterior-carpentry/"
              },
            ].map((service, i) => (
              <Link key={i} href={service.link}>
                <div className="bg-white rounded-2xl p-8 border border-[#e5e7eb] hover:border-[#ff5b00] hover:shadow-md transition-all cursor-pointer h-full">
                  <div className="bg-[#ff5b00]/10 rounded-full p-3 w-fit mb-4">
                    <service.icon className="h-6 w-6 text-[#ff5b00]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0b1220] mb-2">{service.title}</h3>
                  <p className="text-[#4b5563] text-sm">{service.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Why Choose Hero Handyman Pro */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0b1220]">
                Why Homeowners Choose Hero Handyman Pro
              </h2>
              <p className="text-[#4b5563] text-lg mb-6">
                Finding a reliable handyman near you shouldn't be stressful. We make it easy — with clear communication, honest pricing, and craftsmen who take pride in their work.
              </p>
              <div className="space-y-5">
                {[
                  { title: "Trusted Local Handyman", desc: "We're not a franchise or a national chain. Phil and his team are your neighbors, with deep roots in the Metro East and West County communities we serve." },
                  { title: "Fast Response Times", desc: "We offer same-day and next-day availability for most repairs. When something breaks, you shouldn't have to wait weeks for a callback." },
                  { title: "Experienced Craftsmanship", desc: "30+ years of hands-on residential repair experience. We've seen every type of home repair problem and know how to fix it right the first time." },
                  { title: "High Customer Ratings", desc: "4.9-star average across Google reviews. Homeowners in Edwardsville, O'Fallon, and Chesterfield consistently recommend us to their neighbors." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="bg-[#ff5b00]/10 rounded-full p-2 h-fit mt-1">
                      <Check className="h-5 w-5 text-[#ff5b00]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0b1220]">{item.title}</h3>
                      <p className="text-[#4b5563] text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#f9fafb] rounded-2xl p-8 border border-[#e5e7eb]">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(s => <Star key={s} className="h-5 w-5 text-[#ff5b00] fill-[#ff5b00]" />)}
              </div>
              <p className="text-[#374151] italic text-lg mb-6">"Phil showed up on time, fixed our drywall and installed a new door in one visit. The repair is completely invisible. We've already recommended Hero Handyman Pro to three neighbors."</p>
              <div>
                <p className="font-bold text-[#0b1220]">Sarah M.</p>
                <p className="text-[#6b7280] text-sm">Edwardsville, IL</p>
              </div>
              <hr className="my-6 border-[#e5e7eb]" />
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(s => <Star key={s} className="h-5 w-5 text-[#ff5b00] fill-[#ff5b00]" />)}
              </div>
              <p className="text-[#374151] italic text-lg mb-6">"Finally a handyman who shows up when he says he will. Fixed our deck boards and replaced a door frame in one afternoon. Fair price, clean work."</p>
              <div>
                <p className="font-bold text-[#0b1220]">James R.</p>
                <p className="text-[#6b7280] text-sm">O'Fallon, IL</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Service Area Coverage */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b1220]">
              Serving Metro East Illinois & West St. Louis County
            </h2>
            <p className="text-[#4b5563] text-lg max-w-3xl mx-auto">
              Hero Handyman Pro covers a wide service area on both sides of the Mississippi River. Whether you're in an established Metro East neighborhood or a newer West County development, we're your local handyman.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-[#e5e7eb]">
              <h3 className="text-xl font-bold text-[#0b1220] mb-4">Metro East Illinois</h3>
              <p className="text-[#4b5563] mb-4">
                Our roots are in Metro East Illinois — the communities just east of St. Louis that include some of the most established and fastest-growing neighborhoods in the region. We serve homeowners from Edwardsville's historic districts to O'Fallon's newer subdivisions, and everywhere in between.
              </p>
              <div className="space-y-2">
                {[
                  { city: "Edwardsville, IL", link: "/gbp/edwardsville" },
                  { city: "O'Fallon, IL", link: "/gbp/ofallon" },
                  { city: "Collinsville, IL", link: "/service-areas/collinsville-handyman-services/" },
                  { city: "Glen Carbon, IL", link: "/service-areas/glen-carbon-handyman-services/" },
                  { city: "Belleville, IL", link: "/service-areas/belleville-handyman-services/" },
                ].map((item, i) => (
                  <Link key={i} href={item.link}>
                    <div className="flex items-center gap-2 text-[#ff5b00] hover:underline text-sm font-medium py-1">
                      <MapPin className="h-4 w-4" />
                      {item.city} handyman services →
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[#e5e7eb]">
              <h3 className="text-xl font-bold text-[#0b1220] mb-4">West St. Louis County, Missouri</h3>
              <p className="text-[#4b5563] mb-4">
                We've expanded our service area into West St. Louis County to serve the growing demand from Chesterfield, Ballwin, and St. Charles homeowners. These communities feature mature homes from the 1980s and 90s that need skilled, attentive care — exactly what we provide.
              </p>
              <div className="space-y-2">
                {[
                  { city: "Chesterfield, MO", link: "/handyman-chesterfield-mo" },
                  { city: "Ballwin, MO", link: "/handyman-ballwin-mo" },
                  { city: "St. Charles, MO", link: "/handyman-st-charles-mo" },
                  { city: "Des Peres, MO", link: "/gbp/des-peres" },
                ].map((item, i) => (
                  <Link key={i} href={item.link}>
                    <div className="flex items-center gap-2 text-[#ff5b00] hover:underline text-sm font-medium py-1">
                      <MapPin className="h-4 w-4" />
                      {item.city} handyman services →
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Your Repairs Done Right?
          </h2>
          <p className="text-[#e5e7eb] text-lg max-w-2xl mx-auto mb-8">
            Stop putting it off. Hero Handyman Pro is your trusted local handyman near you — serving Edwardsville, O'Fallon, Chesterfield, and the surrounding communities. Call today or request a free quote online.
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
          <p className="text-[#9ca3af] text-sm mt-6">Same-day and next-day availability for most repairs. Licensed & insured.</p>
        </div>
      </section>
    </div>
  );
}
