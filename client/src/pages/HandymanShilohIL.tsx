import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Wrench, Home, Clock, Shield, MessageSquare, Star, Hammer, DoorOpen } from "lucide-react";
import SEO from "@/components/SEO";

import { useSeoRoute } from '@/hooks/useSeoRoute';
const scrollToContact = () => {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
};

export default function HandymanShilohIL() {
  const seo = useSeoRoute();
  const faqs = [
    {
      q: "How much does a handyman cost in Shiloh, IL?",
      a: "Most handyman jobs in Shiloh run between $150 and $600 depending on scope. Simple repairs like drywall patching or door adjustments typically fall in the $150–$250 range. Larger projects like deck board replacement or full door installation are usually $400–$700+. We provide free estimates so you know the cost before any work begins.",
    },
    {
      q: "Do you offer same-day handyman service in Shiloh?",
      a: "Yes — we offer same-day and next-day availability for most repairs in Shiloh. For urgent repairs, call us directly at 800-741-6056 and we'll do our best to get to you quickly.",
    },
    {
      q: "Are you licensed and insured to work in Illinois?",
      a: "Yes. Hero Handyman Pro is fully insured for residential work in Illinois and Missouri. We carry general liability insurance on every job, so you're protected if anything unexpected happens.",
    },
    {
      q: "What areas near Shiloh do you serve?",
      a: "We serve all of Shiloh and the surrounding communities including O'Fallon IL, Belleville IL, Swansea IL, Scott Air Force Base area, and throughout St. Clair County.",
    },
    {
      q: "Can you handle multiple repairs in one visit in Shiloh?",
      a: "Absolutely — our Honey-Do List Knockout package is designed exactly for that. We batch multiple small repairs into one efficient visit so you're not paying multiple trip charges for each item.",
    },
    {
      q: "Do you work on newer homes in Shiloh?",
      a: "Yes. Shiloh has a lot of newer construction from the 2000s and 2010s, and we see common issues like builder-grade doors that need replacement, deck boards that have started to warp, and drywall repairs from settling. We handle all of it.",
    },
    {
      q: "How quickly can you schedule a repair in Shiloh?",
      a: "We typically have availability within 1–3 business days for most repairs in Shiloh. For urgent situations, call us directly and we'll do our best to accommodate you sooner.",
    },
  ];

  return (
    <div className="flex flex-col">
      <SEO {...seo} />

      <LocalBusinessSchema city="Shiloh" state="IL" pageUrl="/handyman-shiloh-il/" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white py-16 md:py-24 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-8">
            <p className="text-[#ff5b00] text-sm font-semibold uppercase tracking-widest mb-3">Serving Shiloh & St. Clair County, IL</p>
            <h1 className="text-4xl md:text-5xl lg:text-[3.75rem] font-bold leading-tight mb-4">
              Handyman Shiloh IL — Home Repairs, Decks & Carpentry
            </h1>
            <p className="text-[#ff5b00] text-xl md:text-2xl font-semibold mb-6">
              Trusted, Professional Home Repairs for Shiloh Homeowners
            </p>
            <p className="text-[#e5e7eb] text-lg md:text-xl max-w-3xl mx-auto mb-4">
              Hero Handyman Pro is your reliable local handyman serving Shiloh, IL and the surrounding St. Clair County communities. From small repairs to larger home improvement projects, we deliver quality workmanship, clear communication, and dependable service every time.
            </p>
            <p className="text-[#e5e7eb] text-base max-w-3xl mx-auto mb-8">
              Shiloh is a growing community with a large concentration of newer homes built in the 1990s through 2010s, many near the Scott Air Force Base corridor and along Frank Scott Parkway. These homes are now reaching the age where deck boards warp, builder-grade doors need replacing, and drywall cracks appear from settling. We work in Shiloh regularly and know exactly what these homes need.
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
            <Button
              onClick={scrollToContact}
              variant="outline"
              className="rounded-full px-10 py-7 text-lg font-semibold border-2 border-white text-white hover:bg-white/10"
            >
              Request Your Estimate
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b1220]">
              Why Shiloh Homeowners Choose Hero Handyman Pro
            </h2>
            <p className="text-[#4b5563] text-lg max-w-3xl mx-auto">
              Shiloh families choose us because we treat every home like our own — showing up on time, communicating clearly, and delivering work we're proud of.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              { icon: Home, text: "Local professionals serving Shiloh and St. Clair County families" },
              { icon: Wrench, text: "Experienced in decks, carpentry, drywall, doors, and home repairs" },
              { icon: Shield, text: "Fully licensed and insured for your protection" },
              { icon: MessageSquare, text: "Clear communication with text and email updates" },
              { icon: Clock, text: "Transparent pricing and flexible scheduling" },
              { icon: Star, text: "5-star rated service from real Metro East homeowners" },
            ].map((item, i) => (
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
              We proudly serve neighborhoods throughout Shiloh — from communities along Frank Scott Parkway and near Scott Air Force Base to residential areas bordering O'Fallon and Belleville. If you're in or near Shiloh, we're already working in your area.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b1220]">
              Popular Handyman Services in Shiloh, IL
            </h2>
            <p className="text-[#4b5563] text-lg">
              Here are the most common projects Shiloh homeowners trust us with:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e5e7eb]">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#ff5b00]/10 rounded-full p-3">
                  <Hammer className="h-7 w-7 text-[#ff5b00]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0b1220]">Deck & Exterior Repairs</h3>
              </div>
              <ul className="space-y-3">
                {["Deck board repair and resurfacing", "Loose railing and stair repair", "Porch and stair repair", "Rot repair and wood replacement", "Fence repair and gate installation", "Exterior trim and fascia repair"].map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#374151]">
                    <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e5e7eb]">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#ff5b00]/10 rounded-full p-3">
                  <Home className="h-7 w-7 text-[#ff5b00]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0b1220]">Interior Repairs</h3>
              </div>
              <ul className="space-y-3">
                {["Drywall hole patching and repair", "Ceiling crack and water damage repair", "Interior door installation and adjustment", "Trim and baseboard repair", "Caulking and weatherstripping", "Light fixture and ceiling fan installation"].map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#374151]">
                    <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e5e7eb]">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#ff5b00]/10 rounded-full p-3">
                  <DoorOpen className="h-7 w-7 text-[#ff5b00]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0b1220]">Doors & Windows</h3>
              </div>
              <ul className="space-y-3">
                {["Entry door replacement and installation", "Storm door installation", "Interior door installation", "Door frame repair", "Sliding door repair", "Window caulking and weatherstripping"].map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#374151]">
                    <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
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

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e5e7eb]">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#ff5b00]/10 rounded-full p-3">
                  <Wrench className="h-7 w-7 text-[#ff5b00]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0b1220]">General Handyman</h3>
              </div>
              <ul className="space-y-3">
                {["Honey-do list projects", "TV and shelf mounting", "Furniture assembly", "Grab bar and safety rail installation", "Gutter cleaning and minor repairs", "Pressure washing prep work"].map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#374151]">
                    <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Real Project Examples */}
      <section className="py-16 px-6 bg-white border-t border-[#e5e7eb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0b1220] mb-3">Recent Project Examples in Shiloh, IL</h2>
            <p className="text-[#4b5563] text-lg max-w-2xl mx-auto">Real jobs, real prices. Here's what recent work has looked like for Shiloh homeowners.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Deck Board Replacement near Frank Scott Pkwy", desc: "16 deck boards replaced on 2003-built home, boards sanded and stained to match existing finish.", cost: "$560" },
              { title: "Drywall Settling Crack — Shiloh Subdivision", desc: "Two settling cracks in hallway of 1998 home, patched, textured, and painted to match.", cost: "$185" },
              { title: "Builder-Grade Door Replacement", desc: "Entry door replaced with steel insulated unit near Scott AFB corridor — new hardware and weatherstripping included.", cost: "$650" },
            ].map((project, i) => (
              <div key={i} className="bg-[#f9fafb] rounded-2xl p-6 border border-[#e5e7eb]">
                <div className="text-[#ff5b00] font-bold text-2xl mb-2">{project.cost}</div>
                <h3 className="font-bold text-[#0b1220] text-lg mb-2">{project.title}</h3>
                <p className="text-[#4b5563] text-sm">{project.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[#4b5563] mt-6 text-sm italic">*Prices shown are representative examples. Actual cost depends on scope, materials, and access. Free estimates always provided before work begins.</p>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b1220]">
              Shiloh Neighborhoods We Serve
            </h2>
            <p className="text-[#4b5563] text-lg max-w-3xl mx-auto">
              From newer subdivisions near Frank Scott Parkway to communities bordering O'Fallon and Belleville, we serve homeowners throughout Shiloh and St. Clair County.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Frank Scott Pkwy Corridor",
              "Near Scott Air Force Base",
              "Shiloh Village",
              "Bordering O'Fallon, IL",
              "Bordering Belleville, IL",
              "Bordering Swansea, IL",
              "St. Clair County",
              "Metro East Illinois",
            ].map((neighborhood, i) => (
              <div key={i} className="bg-white rounded-lg p-4 border border-[#e5e7eb] flex items-center gap-3">
                <Home className="h-5 w-5 text-[#ff5b00] flex-shrink-0" />
                <span className="text-[#374151] text-sm">{neighborhood}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phil EEAT Section */}
      <section className="py-16 px-6 bg-white">
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
                With more than 35 years of hands-on experience, Phil and the Hero Handyman Pro team focus on dependable communication, professional craftsmanship, and making home repair easy for busy homeowners throughout Shiloh and the Metro East area.
              </p>
              <p className="text-[#4b5563] text-lg">
                We're not a franchise or a national call center. We're a local Metro East team that works in Shiloh every week — background-checked, insured, and committed to treating every home with respect.
              </p>
            </div>
            <div className="bg-[#f9fafb] rounded-2xl p-8 border border-[#e5e7eb]">
              <h3 className="text-xl font-bold text-[#0b1220] mb-6">Homeowner Tips for Shiloh Homes</h3>
              <div className="space-y-5">
                <div>
                  <h4 className="font-bold text-[#0b1220] mb-1">Newer homes need deck maintenance too</h4>
                  <p className="text-[#4b5563] text-sm">Many Shiloh homes built in the 1990s and 2000s near Frank Scott Parkway now have decks that need board replacement or railing work. Don't wait until boards are soft — early <a href="/handyman-services/deck-repair/" className="text-[#ff5b00] hover:underline">deck repair</a> costs far less than full replacement.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#0b1220] mb-1">Builder-grade doors are due for replacement</h4>
                  <p className="text-[#4b5563] text-sm">Homes built in the 1990s and early 2000s often have hollow-core or thin steel entry doors that are now past their useful life. A new insulated steel door improves security, energy efficiency, and curb appeal. See our <a href="/handyman-services/door-repair/" className="text-[#ff5b00] hover:underline">door installation service</a>.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#0b1220] mb-1">Settling cracks are cosmetic, but should be fixed</h4>
                  <p className="text-[#4b5563] text-sm">Homes near Scott AFB and in Shiloh subdivisions frequently develop hairline cracks in drywall as the ground settles. These are usually cosmetic, but left unrepaired they can grow. Our <a href="/handyman-services/drywall-repair/" className="text-[#ff5b00] hover:underline">drywall repair</a> team patches and textures them to match perfectly.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#0b1220] mb-1">Bundle repairs to save on trip fees</h4>
                  <p className="text-[#4b5563] text-sm">Our <a href="/handyman-services/" className="text-[#ff5b00] hover:underline">Honey-Do List Knockout package</a> and <a href="/membership/" className="text-[#ff5b00] hover:underline">membership plan</a> let you bundle multiple small repairs into one visit, saving on scheduling fees and getting everything done at once.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[760px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b1220] mb-3">Frequently Asked Questions — Handyman Services in Shiloh</h2>
            <p className="text-[#4b5563]">Common questions from Shiloh homeowners about our services, pricing, and availability.</p>
          </div>
          <div className="space-y-6">
            {faqs.map((item, i) => (
              <div key={i} className="border border-[#e5e7eb] rounded-xl p-6 bg-[#f9fafb]">
                <h3 className="font-bold text-[#0b1220] text-lg mb-3">{item.q}</h3>
                <p className="text-[#4b5563] leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Cities */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0b1220] mb-2">Also Serving Nearby Communities</h2>
            <p className="text-[#4b5563]">We cover the full Metro East Illinois area and cross the river into St. Louis, MO.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "O'Fallon, IL", href: "/gbp/ofallon-il/" },
              { label: "Belleville, IL", href: "/handyman-belleville-il" },
              { label: "Swansea, IL", href: "/handyman-swansea-il/" },
              { label: "Collinsville, IL", href: "/service-areas/collinsville-handyman-services/" },
              { label: "Edwardsville, IL", href: "/gbp/edwardsville-il/" },
              { label: "St. Louis, MO", href: "/handyman-st-louis-mo" },
              { label: "All Service Areas", href: "/service-areas/" },
            ].map((city) => (
              <a key={city.label} href={city.href}>
                <Button variant="outline" className="rounded-full border-[#e5e7eb] text-[#374151] hover:border-[#ff5b00] hover:text-[#ff5b00] text-sm">
                  {city.label}
                </Button>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-City Links */}
      <section className="py-12 px-6 bg-[#f9fafb] border-t border-gray-200">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-3">Also Serving Nearby Metro East Communities</h2>
          <p className="text-gray-600 mb-6 max-w-3xl">
            Hero Handyman Pro serves all of Metro East Illinois. We work regularly in <Link href="/gbp/ofallon-il/" className="text-[#ff5b00] hover:underline font-medium">O'Fallon</Link> for home maintenance near Scott Air Force Base, in <Link href="/handyman-belleville-il" className="text-[#ff5b00] hover:underline font-medium">Belleville</Link> for drywall and door repairs, and in <Link href="/gbp/edwardsville-il/" className="text-[#ff5b00] hover:underline font-medium">Edwardsville</Link> for deck repairs and carpentry near SIUE. We also cover <Link href="/service-areas/collinsville-handyman-services/" className="text-[#ff5b00] hover:underline font-medium">Collinsville</Link>, <Link href="/service-areas/glen-carbon-handyman-services/" className="text-[#ff5b00] hover:underline font-medium">Glen Carbon</Link>, <Link href="/handyman-swansea-il/" className="text-[#ff5b00] hover:underline font-medium">Swansea</Link>, and <Link href="/handyman-fairview-heights-il/" className="text-[#ff5b00] hover:underline font-medium">Fairview Heights</Link>.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { name: "O'Fallon, IL", href: "/gbp/ofallon-il/" },
              { name: "Edwardsville, IL", href: "/gbp/edwardsville-il/" },
              { name: "Belleville, IL", href: "/handyman-belleville-il" },
              { name: "Collinsville, IL", href: "/service-areas/collinsville-handyman-services/" },
              { name: "Glen Carbon, IL", href: "/service-areas/glen-carbon-handyman-services/" },
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
      <section className="py-16 px-6 bg-[#ff5b00] text-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Your Shiloh Home Fixed Right?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Call today for a free estimate. Same-day and next-day appointments available for most repairs in Shiloh and St. Clair County.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:800-741-6056">
              <Button size="lg" className="w-full sm:w-auto bg-white text-[#ff5b00] hover:bg-white/90 font-bold text-lg h-14 px-8 rounded-full">
                <Phone className="h-5 w-5 mr-2" />
                Call 800-741-6056
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-[#ff5b00] font-bold text-lg h-14 px-8 rounded-full"
            >
              Request a Free Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a }
        }))
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.herohandymanpro.com/" },
          { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://www.herohandymanpro.com/service-areas/" },
          { "@type": "ListItem", "position": 3, "name": "Handyman Shiloh IL", "item": "https://www.herohandymanpro.com/handyman-shiloh-il/" }
        ]
      }) }} />
    </div>
  );
}
