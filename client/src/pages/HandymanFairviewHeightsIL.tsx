import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Wrench, Home, Clock, Shield, MessageSquare, Star, Hammer, DoorOpen } from "lucide-react";
import SEO from "@/components/SEO";

import { useSeoRoute } from '@/hooks/useSeoRoute';
const scrollToContact = () => {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
};

export default function HandymanFairviewHeightsIL() {
  const seo = useSeoRoute();
  const faqs = [
    {
      q: "How much does a handyman cost in Fairview Heights, IL?",
      a: "Most handyman jobs in Fairview Heights run between $150 and $600 depending on scope. Simple repairs like drywall patching or door adjustments typically fall in the $150–$250 range. Larger projects like deck board replacement or full door installation are usually $400–$700+. We provide free estimates so you know the cost before any work begins.",
    },
    {
      q: "Do you offer same-day handyman service in Fairview Heights?",
      a: "Yes — we offer same-day and next-day availability for most repairs in Fairview Heights. For urgent repairs, call us directly at 800-741-6056 and we'll do our best to get to you quickly.",
    },
    {
      q: "Are you licensed and insured to work in Fairview Heights, IL?",
      a: "Yes. Hero Handyman Pro is fully insured for residential work in Illinois and Missouri. We carry general liability insurance on every job.",
    },
    {
      q: "What areas near Fairview Heights do you serve?",
      a: "We serve all of Fairview Heights and the surrounding communities including Belleville IL, Swansea IL, O'Fallon IL, Shiloh IL, and throughout St. Clair County.",
    },
    {
      q: "Can you handle multiple small repairs in one visit?",
      a: "Absolutely — our Honey-Do List Knockout package is designed exactly for that. We batch multiple small repairs into one efficient visit so you're not paying multiple trip charges for each item.",
    },
    {
      q: "Do you work on homes near the Fairview Heights mall area?",
      a: "Yes. We serve all residential neighborhoods in Fairview Heights, including areas near Lincoln Trail, the Route 159 corridor, and communities bordering Belleville and Swansea.",
    },
    {
      q: "How quickly can you schedule a repair in Fairview Heights?",
      a: "We typically have availability within 1–3 business days for most repairs in Fairview Heights. For urgent situations, call us directly and we'll do our best to accommodate you sooner.",
    },
  ];

  return (
    <div className="flex flex-col">
      <SEO {...seo} />

      <LocalBusinessSchema city="Fairview Heights" state="IL" pageUrl="/service-areas/fairview-heights-il-handyman-services/" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white py-16 md:py-24 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-8">
            <p className="text-[#ff5b00] text-sm font-semibold uppercase tracking-widest mb-3">Serving Fairview Heights & St. Clair County, IL</p>
            <h1 className="text-4xl md:text-5xl lg:text-[3.75rem] font-bold leading-tight mb-4">
              Handyman Fairview Heights IL — Home Repairs, Decks & Carpentry
            </h1>
            <p className="text-[#ff5b00] text-xl md:text-2xl font-semibold mb-6">
              Trusted, Professional Home Repairs for Fairview Heights Homeowners
            </p>
            <p className="text-[#e5e7eb] text-lg md:text-xl max-w-3xl mx-auto mb-4">
              Hero Handyman Pro is your reliable local handyman serving Fairview Heights, IL and the surrounding St. Clair County communities. From small repairs to larger home improvement projects, we deliver quality workmanship and dependable service every time.
            </p>
            <p className="text-[#e5e7eb] text-base max-w-3xl mx-auto mb-8">
              Fairview Heights is a well-established community along the I-64 corridor, with a mix of 1970s and 1980s ranch homes near Lincoln Trail and newer construction in subdivisions bordering Swansea and Belleville. Homes in this area commonly need drywall repairs from decades of settling, exterior wood rot on older trim, and door adjustments on frames that have shifted over time. We work in Fairview Heights regularly and know what these homes need.
            </p>
          </div>

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

          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:800-741-6056">
              <Button className="bg-[#ff5b00] hover:bg-[#ff5b00]/90 text-white rounded-full px-10 py-7 text-lg font-semibold flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call 800-741-6056
              </Button>
            </a>
            <Button onClick={scrollToContact} variant="outline" className="rounded-full px-10 py-7 text-lg font-semibold border-2 border-white text-white hover:bg-white/10">
              Request Your Estimate
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b1220]">Popular Handyman Services in Fairview Heights, IL</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Hammer, title: "Deck & Exterior Repairs",
                items: ["Deck board repair and resurfacing", "Loose railing and stair repair", "Rot repair and wood replacement", "Exterior trim and fascia repair", "Fence repair and gate installation", "Porch and stair repair"]
              },
              {
                icon: Home, title: "Interior Repairs",
                items: ["Drywall hole patching and repair", "Ceiling crack and water damage repair", "Interior door installation and adjustment", "Trim and baseboard repair", "Caulking and weatherstripping", "Light fixture and ceiling fan installation"]
              },
              {
                icon: DoorOpen, title: "Doors & Windows",
                items: ["Entry door replacement and installation", "Storm door installation", "Interior door installation", "Door frame repair", "Sliding door repair", "Window caulking and weatherstripping"]
              },
              {
                icon: Wrench, title: "General Handyman",
                items: ["Honey-do list projects", "TV and shelf mounting", "Furniture assembly", "Grab bar and safety rail installation", "Gutter cleaning and minor repairs", "Pressure washing prep work"]
              }
            ].map((cat, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-[#e5e7eb]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-[#ff5b00]/10 rounded-full p-3">
                    <cat.icon className="h-7 w-7 text-[#ff5b00]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0b1220]">{cat.title}</h3>
                </div>
                <ul className="space-y-3">
                  {cat.items.map((s, j) => (
                    <li key={j} className="flex items-start gap-3 text-[#374151]">
                      <Check className="h-5 w-5 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/blog/door-repair-cost-ofallon-il/" className="text-[#ff5b00] hover:underline font-medium text-sm">
              How much does door repair cost in Metro East IL? → Read the 2026 pricing guide
            </Link>
            <Link href="/blog/window-repair-cost-ofallon-il/" className="text-[#ff5b00] hover:underline font-medium text-sm">
              How much does window repair cost in Metro East IL? → Read the 2026 pricing guide
            </Link>
          </div>
        </div>
      </section>

      {/* Real Project Examples */}
      <section className="py-16 px-6 bg-white border-t border-[#e5e7eb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0b1220] mb-3">Recent Project Examples in Fairview Heights, IL</h2>
            <p className="text-[#4b5563] text-lg max-w-2xl mx-auto">Real jobs, real prices. Here's what recent work has looked like for Fairview Heights homeowners.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Exterior Rot Repair — 1978 Ranch Home near Lincoln Trail", desc: "Fascia board and two window sills replaced on 1978 ranch home, primed and painted to match.", cost: "$420" },
              { title: "Drywall Repair — Settling Crack in Hallway", desc: "Two settling cracks in hallway of 1982 home, patched, textured, and painted to match existing finish.", cost: "$190" },
              { title: "Interior Door Adjustment — Sticking Bedroom Door", desc: "Planed and re-hung sticking bedroom door in older ranch home, new strike plate installed.", cost: "$125" },
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
              Fairview Heights Neighborhoods We Serve
            </h2>
            <p className="text-[#4b5563] text-lg max-w-3xl mx-auto">
              From the 1970s and 1980s ranch homes near Lincoln Trail to newer subdivisions bordering Swansea and Belleville, we serve homeowners throughout Fairview Heights and St. Clair County.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Lincoln Trail and older ranch neighborhoods",
              "Route 159 corridor communities",
              "I-64 corridor and newer subdivisions",
              "Fairview Heights-Belleville border areas",
              "Fairview Heights-Swansea border neighborhoods",
              "Near Fairview Heights City Hall",
              "Homes near St. Clair Square area",
              "St. Clair County communities",
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
                With more than 35 years of hands-on experience, Phil and the Hero Handyman Pro team focus on dependable communication, professional craftsmanship, and making home repair easy for busy homeowners throughout Fairview Heights and the Metro East area.
              </p>
              <p className="text-[#4b5563] text-lg">
                We're not a franchise or a national call center. We're a local Metro East team that works in Fairview Heights every week — background-checked, insured, and committed to treating every home with respect.
              </p>
            </div>
            <div className="bg-[#f9fafb] rounded-2xl p-8 border border-[#e5e7eb]">
              <h3 className="text-xl font-bold text-[#0b1220] mb-6">Homeowner Tips for Fairview Heights Homes</h3>
              <div className="space-y-5">
                <div>
                  <h4 className="font-bold text-[#0b1220] mb-1">Older ranch homes have exterior rot issues</h4>
                  <p className="text-[#4b5563] text-sm">Many 1970s and 1980s homes near Lincoln Trail have wood fascia, soffits, and window sills that are now showing rot. Catching this early prevents water intrusion and structural damage. Our <a href="/carpentry-services/" className="text-[#ff5b00] hover:underline">carpentry service</a> handles rot repair and replacement.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#0b1220] mb-1">Settling cracks are common in older homes</h4>
                  <p className="text-[#4b5563] text-sm">Homes from the 1970s and 1980s frequently develop hairline cracks in drywall as the foundation settles. These are usually cosmetic, but should be repaired before selling. Our <a href="/handyman-services/drywall-repair/" className="text-[#ff5b00] hover:underline">drywall repair</a> team patches and textures them to match perfectly.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#0b1220] mb-1">Sticking doors are a common complaint</h4>
                  <p className="text-[#4b5563] text-sm">Older homes settle over time, causing door frames to shift. If your doors stick or don't latch properly, it's usually a quick fix. Most <a href="/handyman-services/door-repair/" className="text-[#ff5b00] hover:underline">door repairs</a> take under two hours and make a big difference in comfort and security.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#0b1220] mb-1">Bundle repairs to save on trip fees</h4>
                  <p className="text-[#4b5563] text-sm">Our <a href="/handyman-services/" className="text-[#ff5b00] hover:underline">Honey-Do List Knockout package</a> and <a href="/membership/" className="text-[#ff5b00] hover:underline">membership plan</a> let you bundle multiple small repairs into one visit, saving on scheduling fees.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[760px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b1220] mb-3">Frequently Asked Questions — Handyman Services in Fairview Heights</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((item, i) => (
              <div key={i} className="border border-[#e5e7eb] rounded-xl p-6 bg-white">
                <h3 className="font-bold text-[#0b1220] text-lg mb-3">{item.q}</h3>
                <p className="text-[#4b5563] leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Cities */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0b1220] mb-4">Also Serving Nearby Communities</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Belleville, IL", href: "/handyman-belleville-il" },
              { label: "Swansea, IL", href: "/handyman-swansea-il" },
              { label: "O'Fallon, IL", href: "/service-areas/ofallon-handyman-services/" },
              { label: "Shiloh, IL", href: "/handyman-shiloh-il" },
              { label: "Collinsville, IL", href: "/handyman-collinsville-il" },
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
            Hero Handyman Pro serves all of Metro East Illinois. We work regularly in <Link href="/handyman-belleville-il" className="text-[#ff5b00] hover:underline font-medium">Belleville</Link> for drywall and door repairs in the historic homes near the courthouse square, in <Link href="/handyman-swansea-il/" className="text-[#ff5b00] hover:underline font-medium">Swansea</Link> for general home repairs, and in <Link href="/gbp/ofallon-il/" className="text-[#ff5b00] hover:underline font-medium">O'Fallon</Link> for home maintenance near Scott Air Force Base. We also cover <Link href="/service-areas/collinsville-handyman-services/" className="text-[#ff5b00] hover:underline font-medium">Collinsville</Link>, <Link href="/handyman-shiloh-il/" className="text-[#ff5b00] hover:underline font-medium">Shiloh</Link>, <Link href="/gbp/edwardsville-il/" className="text-[#ff5b00] hover:underline font-medium">Edwardsville</Link>, and <Link href="/service-areas/glen-carbon-handyman-services/" className="text-[#ff5b00] hover:underline font-medium">Glen Carbon</Link>.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { name: "O'Fallon, IL", href: "/service-areas/ofallon-handyman-services/" },
              { name: "Edwardsville, IL", href: "/service-areas/edwardsville-handyman-services/" },
              { name: "Belleville, IL", href: "/service-areas/belleville-handyman-services/" },
              { name: "Collinsville, IL", href: "/service-areas/collinsville-handyman-services/" },
              { name: "Glen Carbon, IL", href: "/service-areas/glen-carbon-handyman-services/" },
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
      <section className="py-16 px-6 bg-[#ff5b00] text-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Your Fairview Heights Home Fixed Right?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Call today for a free estimate. Same-day and next-day appointments available for most repairs in Fairview Heights and St. Clair County.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:800-741-6056">
              <Button size="lg" className="w-full sm:w-auto bg-white text-[#ff5b00] hover:bg-white/90 font-bold text-lg h-14 px-8 rounded-full">
                <Phone className="h-5 w-5 mr-2" />
                Call 800-741-6056
              </Button>
            </a>
            <Button size="lg" variant="outline" onClick={scrollToContact} className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-[#ff5b00] font-bold text-lg h-14 px-8 rounded-full">
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
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://herohandymanpro.com/" },
          { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://herohandymanpro.com/service-areas/" },
          { "@type": "ListItem", "position": 3, "name": "Handyman Fairview Heights IL", "item": "https://herohandymanpro.com/handyman-fairview-heights-il/" }
        ]
      }) }} />
    </div>
  );
}
