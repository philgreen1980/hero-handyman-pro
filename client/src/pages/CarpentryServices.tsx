import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star, MapPin } from "lucide-react";
import SEO from "@/components/SEO";
import { useSeoRoute } from '@/hooks/useSeoRoute';

export default function CarpentryServices() {
  const seo = useSeoRoute();  const services = [
    {
      title: "Trim Repair & Installation",
      desc: "Baseboards, door casings, window trim, crown molding, and chair rail — we repair, replace, and install all types of interior and exterior trim. Whether a section is damaged, missing, or you're updating the look of a room, we cut and fit trim with precision so joints are tight and profiles match. Many older Metro East and West County homes have original wood trim with character worth preserving — we can repair and splice damaged sections rather than replacing entire runs."
    },
    {
      title: "Exterior Carpentry",
      desc: "Fascia boards, soffits, corner boards, porch columns, and exterior trim are constantly exposed to weather and are among the first things to rot or deteriorate. We repair and replace all types of exterior carpentry using rot-resistant materials where appropriate, and we seal and prime everything properly so the repair lasts. Exterior carpentry work is especially common in older homes throughout Metro East Illinois and West St. Louis County."
    },
    {
      title: "Framing Repairs",
      desc: "Rotted sill plates, damaged headers, and compromised structural framing need to be addressed before cosmetic repairs can hold. We handle framing repairs for door and window openings, basement rim joists, and areas affected by water damage or pest activity. Framing repairs are often discovered during other projects — we'll identify any structural issues during our estimate and address them properly so your finished work lasts."
    },
    {
      title: "Cabinet Adjustments & Repairs",
      desc: "Kitchen and bathroom cabinet doors that won't close, drawers that stick, and hinges that sag are daily frustrations that are easy to fix with the right skills. We adjust, repair, and replace cabinet hardware, reattach loose cabinet boxes, and fix doors that are out of alignment. We also install new cabinet hardware — pulls, knobs, and soft-close hinges — which is one of the most cost-effective ways to update the look of a kitchen without a full remodel."
    },
    {
      title: "Custom Built-Ins & Shelving",
      desc: "Built-in shelving, custom closet organizers, window seats, mudroom benches, and other one-of-a-kind carpentry projects. We design and build custom pieces that fit your space and your style — using quality materials that will last. Custom carpentry adds both function and value to your home, and we'll work with you on the design and provide a detailed estimate before any work begins."
    },
    {
      title: "Rot Repair & Wood Replacement",
      desc: "Wood rot is one of the most common and damaging problems in homes throughout the St. Louis metro area. Left untreated, rot spreads and compromises the structural integrity of your home. We identify the full extent of rot damage, remove all affected wood, treat the area to prevent recurrence, and replace with matching materials — whether it's a porch post, window sill, deck ledger, or exterior trim board."
    },
  ];

  const commonProjects = [
    "Rotted fascia or soffit replacement",
    "Baseboard or crown molding repair",
    "Exterior trim rot repair",
    "Cabinet door alignment & hinge replacement",
    "Window or door casing replacement",
    "Porch column repair or replacement",
    "Built-in shelving installation",
    "Framing repair after water damage",
  ];

  const serviceAreas = [
    { city: "Edwardsville IL", href: "/carpentry-services-edwardsville-il" },
    { city: "O'Fallon IL", href: "/carpentry-services-ofallon-il" },
    { city: "Belleville IL", href: "/carpentry-services-belleville-il" },
    { city: "Chesterfield MO", href: "/carpentry-services-chesterfield-mo" },
    { city: "Collinsville IL", href: "/carpentry-services-collinsville-il" },
    { city: "Ballwin MO", href: "/carpentry-services-ballwin-mo" },
    { city: "Glen Carbon IL", href: "/carpentry-services-glen-carbon-il" },
    { city: "St. Charles MO", href: "/carpentry-services-st-charles-mo" },
  ];

  return (
    <div className="flex flex-col">
      <SEO {...seo} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-teal-400 font-semibold">Metro East IL & West St. Louis County MO</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 leading-tight">
              Professional Carpentry Services Near You
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Trim repair, exterior carpentry, framing repairs, cabinet adjustments, and custom built-ins — delivered with the craftsmanship that homeowners across Metro East Illinois and West St. Louis County have trusted for over 35 years.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:800-741-6056">
                <Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-8 py-6 text-lg font-semibold flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call 800-741-6056
                </Button>
              </a>
              <Link href="/#contact">
                <Button variant="outline" className="rounded-full px-8 py-6 text-lg font-semibold border-white text-white hover:bg-white/10">
                  Get a Free Quote
                </Button>
              </Link>
            </div>
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 mt-8 text-sm text-gray-400">
              <span className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-400 fill-yellow-400" /> 4.9 Star Rated</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> Licensed & Insured</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> 30+ Years Experience</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> Free Estimates</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">Carpentry Services We Provide</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Good carpentry is the difference between a home that looks finished and one that looks like it was put together in a hurry. We bring the skill and attention to detail that interior and exterior carpentry work demands — for homes throughout Metro East Illinois and West St. Louis County.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center mb-4">
                  <Check className="w-5 h-5 text-teal-700" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Projects + Why It Matters */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Common Carpentry Projects We Handle</h2>
              <p className="text-gray-600 mb-6">
                Carpentry work is visible every day. Poorly fitted trim, misaligned cabinet doors, and rough cuts are constant reminders of work done in a hurry. When someone searches <em>"carpentry services near me"</em> or <em>"exterior carpentry near me,"</em> they're usually looking for someone who takes pride in the craft — not just a quick patch job.
              </p>
              <p className="text-gray-600 mb-6">
                Phil, the owner of Hero Handyman Pro, has been doing carpentry work in the Metro East and West St. Louis County for over 35 years. He knows the older homes in this region — the original wood profiles, the common rot patterns, the framing quirks — and he brings that knowledge to every job.
              </p>
              <ul className="space-y-3">
                {commonProjects.map((project, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <Check className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{project}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Why Carpentry Requires Real Skill</h3>
              <p className="text-gray-600 text-sm mb-4">
                Carpentry looks straightforward but requires precision that most people underestimate. Trim that doesn't fit tight at the corners, exterior boards that aren't properly primed before painting, or framing repairs that don't address the underlying moisture problem — these are the kinds of mistakes that lead to callbacks and repeat repairs.
              </p>
              <p className="text-gray-600 text-sm mb-4">
                The Metro East and West St. Louis County have a mix of housing stock from the 1890s through today. Each era has its own carpentry characteristics. Victorian-era homes have ornate profiles that require custom matching. Mid-century homes have simple trim that needs to be sourced carefully. Newer construction often has trim installed quickly that needs adjustment.
              </p>
              <p className="text-gray-600 text-sm mb-6">
                We've worked on hundreds of homes across this region. We know what to expect and how to handle it — and we'll tell you upfront if a repair isn't the right approach and replacement is the better option.
              </p>
              <a href="tel:800-741-6056" className="inline-flex items-center gap-2 text-teal-700 font-semibold hover:underline text-sm">
                <Phone className="w-4 h-4" />
                Call 800-741-6056 for a free estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">Carpentry Services Near You</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            We provide carpentry services throughout Metro East Illinois and West St. Louis County Missouri. Click your city for local service details.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {serviceAreas.map((area, i) => (
              <Link key={i} href={area.href}>
                <div className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl hover:border-teal-400 hover:bg-teal-50 transition-all cursor-pointer group">
                  <MapPin className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span className="font-medium text-gray-800 group-hover:text-teal-800 text-sm">{area.city}</span>
                </div>
              </Link>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-6">
            Also serving Belleville IL, Maryville IL, Troy IL, Des Peres MO, and surrounding communities. <Link href="/service-areas/"><span className="text-teal-700 hover:underline cursor-pointer">View all service areas →</span></Link>
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Why Homeowners Choose Hero Handyman Pro for Carpentry</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            We're a local handyman service based in the Metro East — not a national franchise. Phil does the work himself, which means you get consistent quality and someone who stands behind every job with his name on it.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Precision Cuts & Tight Joints", desc: "We measure twice and cut once. Trim and carpentry work is only as good as the fit — we don't rush it." },
              { title: "Proper Material Selection", desc: "We use rot-resistant materials for exterior work and match existing profiles for interior trim repairs." },
              { title: "No Subcontractors", desc: "Phil does the work himself — no strangers in your home, no quality surprises, no middlemen." },
              { title: "Upfront Pricing", desc: "You'll know the cost before we start. No hidden fees, no surprise invoices after the job." },
              { title: "Rot Identification Included", desc: "We identify the full extent of rot or damage during the estimate — no surprises after we start." },
              { title: "Same-Day Availability", desc: "Need it done quickly? We offer same-day and next-day appointments for urgent carpentry repairs." },
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-teal-700" />
                </div>
                <div>
                  <span className="font-semibold text-gray-900">{item.title}</span>
                  <span className="text-gray-600"> — {item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 px-6 bg-white border-t border-gray-100">
        <div className="max-w-[1120px] mx-auto">
          <h3 className="font-semibold text-gray-800 mb-4">Related Services</h3>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/handyman-services/deck-repair/"><span className="text-teal-700 hover:underline cursor-pointer">Deck Repair</span></Link>
            <span className="text-gray-300">|</span>
            <Link href="/handyman-services/drywall-repair/"><span className="text-teal-700 hover:underline cursor-pointer">Drywall Repair</span></Link>
            <span className="text-gray-300">|</span>
            <Link href="/handyman-services/door-repair/"><span className="text-teal-700 hover:underline cursor-pointer">Door Installation & Repair</span></Link>
            <span className="text-gray-300">|</span>
            <Link href="/gbp/edwardsville-il/"><span className="text-teal-700 hover:underline cursor-pointer">handyman Edwardsville IL</span></Link>
            <span className="text-gray-300">|</span>
            <Link href="/handyman-belleville-il"><span className="text-teal-700 hover:underline cursor-pointer">handyman Belleville IL</span></Link>
            <span className="text-gray-300">|</span>
            <Link href="/handyman-near-me/"><span className="text-teal-700 hover:underline cursor-pointer">Handyman Near Me</span></Link>
            <span className="text-gray-300">|</span>
            <Link href="/"><span className="text-teal-700 hover:underline cursor-pointer">Hero Handyman Pro Home</span></Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-teal-700 text-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl font-bold mb-3">Get a Free Carpentry Estimate Today</h2>
          <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
            From trim repair to custom built-ins, we bring the craftsmanship your home deserves. Call Hero Handyman Pro at 800-741-6056 for a free estimate — same-day and next-day appointments available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:800-741-6056">
              <Button className="bg-white text-teal-700 hover:bg-teal-50 rounded-full px-8 py-6 text-lg font-bold flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call 800-741-6056
              </Button>
            </a>
            <Link href="/#contact">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-teal-700 rounded-full px-8 py-6 text-lg font-bold transition-colors">
                Get a Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
