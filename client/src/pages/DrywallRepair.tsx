import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star, MapPin } from "lucide-react";
import SEO from "@/components/SEO";

export default function DrywallRepair() {
  const seoData = {
    title: "Drywall Repair Services | Hole Repair, Patching & Ceiling Repairs",
    description: "Professional drywall repair including hole patching, ceiling drywall repair, and textured drywall fixes. Serving Edwardsville, O'Fallon, and West St. Louis County.",
    keywords: "drywall repair near me, drywall hole repair, drywall patch repair, ceiling drywall repair, water damaged drywall, textured drywall repair",
    canonicalUrl: "https://herohandymanpro.com/drywall-repair"
  };

  const services = [
    {
      title: "Drywall Hole Repair",
      desc: "From small nail holes to large punched-through sections, we patch and finish drywall holes of all sizes. Common causes include doorknobs, furniture impacts, plumbing access cuts, and accidental damage. We match your existing texture so repairs are virtually invisible."
    },
    {
      title: "Drywall Patch Repair",
      desc: "Cracks, nail pops, and settlement damage are common in older homes throughout Metro East Illinois and West St. Louis County. We use professional-grade joint compound and mesh tape for patches that hold long-term — no re-cracking, no visible seams."
    },
    {
      title: "Ceiling Drywall Repair",
      desc: "Sagging, cracked, or water-stained ceilings are both an eyesore and a warning sign. We repair ceiling drywall damage, address popcorn texture issues, and restore your ceiling to a clean, finished look — without the mess or ladder work on your end."
    },
    {
      title: "Water Damaged Drywall",
      desc: "Water damage from roof leaks, plumbing failures, or basement moisture is one of the most common drywall problems in the St. Louis region. We assess whether the water source is resolved, remove compromised material, and replace with new drywall to prevent mold and restore your walls."
    },
    {
      title: "Textured Drywall Repair",
      desc: "Many homes in the area have knockdown, orange peel, or skip-trowel textures. Matching texture is the hardest part of a drywall repair — and the part most DIYers get wrong. We blend repairs seamlessly so there's no obvious patch or mismatched finish."
    },
    {
      title: "Plumbing Access & Remodel Patches",
      desc: "After a plumber, electrician, or HVAC tech cuts into your walls, you're left with an open hole. We close those access cuts cleanly, tape, mud, and texture to match — so your walls look like the work was never done."
    },
  ];

  const scenarios = [
    "Hole in drywall from door knob",
    "Drywall damage from plumbing repair",
    "Cracked drywall seams from settling",
    "Ceiling drywall damage from roof leak",
    "Water stain and soft spots in drywall",
    "Nail pops and hairline cracks",
    "Large holes from electrical or HVAC work",
    "Pet or kid damage to walls",
  ];

  const serviceAreas = [
    { city: "Edwardsville IL", href: "/drywall-repair-edwardsville-il" },
    { city: "O'Fallon IL", href: "/drywall-repair-ofallon-il" },
    { city: "Belleville IL", href: "/drywall-repair-belleville-il" },
    { city: "Collinsville IL", href: "/drywall-repair-collinsville-il" },
    { city: "Chesterfield MO", href: "/drywall-repair-chesterfield-mo" },
    { city: "Ballwin MO", href: "/drywall-repair-ballwin-mo" },
    { city: "Glen Carbon IL", href: "/drywall-repair-glen-carbon-il" },
    { city: "St. Charles MO", href: "/drywall-repair-st-charles-mo" },
  ];

  return (
    <div className="flex flex-col">
      <SEO {...seoData} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-teal-400 font-semibold">Metro East IL & West St. Louis County MO</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 leading-tight">
              Professional Drywall Repair Services
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Holes, cracks, water damage, and ceiling repairs — fixed fast and finished right. Serving homeowners across Edwardsville, O'Fallon, Chesterfield, and the greater St. Louis area.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:800-741-6056">
                <Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-8 py-6 text-lg font-semibold flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call 800-741-6056
                </Button>
              </a>
              <Link href="/contact/">
                <Button variant="outline" className="rounded-full px-8 py-6 text-lg font-semibold border-white text-white hover:bg-white/10">
                  Get a Free Quote
                </Button>
              </Link>
            </div>
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 mt-8 text-sm text-gray-400">
              <span className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-400 fill-yellow-400" /> 4.9 Star Rated</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> Licensed & Insured</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> Same-Day Available</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> 30+ Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">Drywall Repair Services We Provide</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Whether it's a doorknob hole, a water-stained ceiling, or cracks from years of settling — Hero Handyman Pro handles every type of drywall repair for homeowners across the St. Louis metro area.
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

      {/* Problem Language Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Common Drywall Problems We Fix</h2>
              <p className="text-gray-600 mb-6">
                Drywall damage is one of the most frequent home repair calls we receive — and for good reason. It happens constantly, it's harder to fix than it looks, and most homeowners don't want to deal with the mess and skill required to do it right.
              </p>
              <p className="text-gray-600 mb-6">
                When someone searches <em>"drywall repair near me,"</em> they usually want it fixed within a few days. We offer same-day and next-day appointments throughout Metro East Illinois and West St. Louis County.
              </p>
              <ul className="space-y-3">
                {scenarios.map((scenario, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <Check className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{scenario}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Why Drywall Repair Is Hard to DIY</h3>
              <p className="text-gray-600 text-sm mb-4">
                Most homeowners attempt drywall repair once and realize it's more involved than YouTube makes it look. Getting the mud smooth, feathering the edges, and — most critically — <strong>matching the existing texture</strong> requires practice and the right tools.
              </p>
              <p className="text-gray-600 text-sm mb-4">
                A bad patch is obvious. An obvious patch lowers your home's perceived value and can be a red flag to buyers during a home inspection.
              </p>
              <p className="text-gray-600 text-sm mb-6">
                We've done thousands of drywall repairs across the St. Louis metro area. We get it right the first time — and we clean up after ourselves.
              </p>
              <a href="tel:800-741-6056" className="inline-flex items-center gap-2 text-teal-700 font-semibold hover:underline text-sm">
                <Phone className="w-4 h-4" />
                Call 800-741-6056 for a free estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">Drywall Repair Near You</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            We provide drywall repair services throughout Metro East Illinois and West St. Louis County Missouri. Click your city for local service details.
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

      {/* Texture Matching Section */}
      <section className="py-16 px-6 bg-teal-50 border-y border-teal-100">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-xs uppercase tracking-widest text-teal-700 font-semibold">The Hardest Part of Any Drywall Repair</span>
              <h2 className="text-3xl font-bold mt-2 mb-4 text-gray-900">Texture Matching — Done Right</h2>
              <p className="text-gray-700 mb-4">
                Patching a hole is the easy part. Matching the texture around it is what separates a professional repair from an obvious patch. Most DIY drywall repairs fail not because of the mud work — but because the texture doesn't match and the repair stands out every time the light hits it at an angle.
              </p>
              <p className="text-gray-700 mb-4">
                The St. Louis metro area has a wide range of wall textures depending on when and where a home was built. Homes in Edwardsville and O'Fallon from the 1970s–1990s commonly have <strong>knockdown</strong> or <strong>skip-trowel</strong> textures applied by hand. Newer construction in Chesterfield and Ballwin tends toward <strong>orange peel</strong> spray texture or a light <strong>smooth finish</strong>. Older homes near downtown St. Louis often have original plaster walls that require a different approach entirely.
              </p>
              <p className="text-gray-700">
                Hero Handyman Pro matches all common textures found in the greater St. Louis area. We assess your existing wall finish before starting any repair, then apply the correct technique — by hand or spray — so the patch blends completely with the surrounding surface.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Textures We Match</h3>
              {[
                {
                  name: "Knockdown",
                  desc: "The most common texture in Metro East Illinois homes built between 1975–2000. A compound is splattered on the wall and then lightly flattened with a knife, creating an irregular, mottled pattern. Requires hand application and careful timing to replicate convincingly."
                },
                {
                  name: "Orange Peel",
                  desc: "A fine, bumpy spray texture that resembles the skin of an orange. Common in 1980s–1990s construction throughout West St. Louis County. Applied with a hopper gun — the key is matching the droplet size and density of the existing texture."
                },
                {
                  name: "Skip-Trowel",
                  desc: "A hand-applied texture with a slightly randomized, layered look. Common in custom homes and remodeled spaces. Requires a skilled hand to replicate — the pattern is never perfectly uniform, which makes matching it a craft skill."
                },
                {
                  name: "Smooth Finish",
                  desc: "Found in newer construction and renovated spaces. Looks simple but is unforgiving — any imperfection in the mud work or feathering is immediately visible under raking light. We skim-coat and sand to a true flat finish."
                },
              ].map((texture, i) => (
                <div key={i} className="bg-white rounded-xl border border-teal-200 p-5 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                    <span className="font-bold text-gray-900">{texture.name}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{texture.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Why Homeowners Choose Hero Handyman Pro for Drywall Repair</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            We're a local handyman service based in the Metro East — not a national franchise. When you call us, you're talking to Phil, the owner, who has been doing drywall and home repairs in the greater St. Louis area for over 30 years.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Local & Accountable", desc: "We live and work in the Metro East. Our reputation in Edwardsville, O'Fallon, and Chesterfield is everything to us." },
              { title: "No Subcontractors", desc: "Phil does the work himself — no strangers in your home, no quality surprises, no middlemen." },
              { title: "Upfront Pricing", desc: "You'll know the cost before we start. No hidden fees, no surprise invoices after the job is done." },
              { title: "Texture Matching Expertise", desc: "We match knockdown, orange peel, skip-trowel, and smooth finishes so repairs blend seamlessly with your existing walls." },
              { title: "Clean Jobsite", desc: "We protect your floors and furniture and clean up completely when we're done. No drywall dust left behind." },
              { title: "Same-Day Availability", desc: "Need it fixed fast? We offer same-day and next-day drywall repair appointments for urgent situations." },
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
            <Link href="/handyman-services/drywall-repair/"><span className="text-teal-700 hover:underline cursor-pointer">Drywall & Ceiling Repair Service Page</span></Link>
            <span className="text-gray-300">|</span>
            <Link href="/gbp/edwardsville"><span className="text-teal-700 hover:underline cursor-pointer">Edwardsville Handyman Services</span></Link>
            <span className="text-gray-300">|</span>
            <Link href="/gbp/ofallon"><span className="text-teal-700 hover:underline cursor-pointer">O'Fallon Handyman Services</span></Link>
            <span className="text-gray-300">|</span>
            <Link href="/handyman-near-me"><span className="text-teal-700 hover:underline cursor-pointer">Handyman Near Me</span></Link>
            <span className="text-gray-300">|</span>
            <Link href="/"><span className="text-teal-700 hover:underline cursor-pointer">Hero Handyman Pro Home</span></Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-teal-700 text-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl font-bold mb-3">Need Drywall Repair? Call Today.</h2>
          <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
            Same-day and next-day appointments available across Metro East Illinois and West St. Louis County. Call Hero Handyman Pro at 800-741-6056 for a free estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:800-741-6056">
              <Button className="bg-white text-teal-700 hover:bg-teal-50 rounded-full px-8 py-6 text-lg font-bold flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call 800-741-6056
              </Button>
            </a>
            <Link href="/contact/">
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
