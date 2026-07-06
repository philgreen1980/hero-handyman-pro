import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star, MapPin } from "lucide-react";
import SEO from "@/components/SEO";
import { useSeoRoute } from '@/hooks/useSeoRoute';

export default function DrywallRepair() {
  const seo = useSeoRoute();  const services = [
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
      <SEO {...seo} />

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

      {/* Repair vs Replacement */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Should I Repair or Replace Damaged Drywall?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-teal-50 rounded-2xl p-8 border border-teal-100">
              <h3 className="font-bold text-xl text-teal-800 mb-4">✓ Repair Is Usually the Right Choice When:</h3>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex gap-2"><Check className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" /><span>The damage is localized — a single hole, crack, or stained area</span></li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" /><span>The water source has been fixed and the drywall is dry (not soft or crumbling)</span></li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" /><span>Settlement cracks are hairline and not actively widening</span></li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" /><span>The texture can be matched to blend with the surrounding wall</span></li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" /><span>Nail pops, dings, or scuffs are surface-level only</span></li>
              </ul>
            </div>
            <div className="bg-orange-50 rounded-2xl p-8 border border-orange-100">
              <h3 className="font-bold text-xl text-orange-800 mb-4">⚠ Replacement May Be Needed When:</h3>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex gap-2"><span className="text-orange-500 font-bold mt-0.5 flex-shrink-0">→</span><span>Drywall is soft, crumbling, or shows visible mold growth from prolonged moisture</span></li>
                <li className="flex gap-2"><span className="text-orange-500 font-bold mt-0.5 flex-shrink-0">→</span><span>Structural cracks run floor-to-ceiling or are wider than ¼ inch — may indicate foundation issues</span></li>
                <li className="flex gap-2"><span className="text-orange-500 font-bold mt-0.5 flex-shrink-0">→</span><span>Repeated water damage in the same area despite repairs — the underlying issue isn't resolved</span></li>
                <li className="flex gap-2"><span className="text-orange-500 font-bold mt-0.5 flex-shrink-0">→</span><span>Large sections of ceiling are sagging or separating from the framing</span></li>
                <li className="flex gap-2"><span className="text-orange-500 font-bold mt-0.5 flex-shrink-0">→</span><span>The damage covers more than 30–40% of a wall panel — patching becomes less cost-effective</span></li>
              </ul>
            </div>
          </div>
          <p className="text-gray-600 mt-6 text-sm">
            Not sure which situation you're in? <a href="tel:800-741-6056" className="text-teal-700 font-semibold hover:underline">Call us at 800-741-6056</a> — we'll give you an honest assessment. If it can be repaired, we'll repair it. We never upsell replacement when a patch will do the job.
          </p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">What to Expect When You Book Drywall Repair</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">We make the process straightforward from first contact to final walkthrough. Here's how it works:</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "1", title: "Contact & Photos", desc: "Call, text, or fill out our contact form. Send a few photos of the damage — we can usually give you a ballpark estimate before we even visit. Most drywall repairs are quoted same-day." },
              { step: "2", title: "Scheduling", desc: "We offer same-day and next-day appointments across Metro East Illinois and West St. Louis County. We give you a specific arrival window — not a 4-hour guessing game." },
              { step: "3", title: "Assessment On-Site", desc: "Phil will inspect the damage, confirm the repair scope, and give you a firm written quote before any work begins. No surprises." },
              { step: "4", title: "Repair & Texture Match", desc: "We complete the patch, apply joint compound in multiple coats as needed, sand smooth, and apply texture to match your existing wall. Most repairs are completed in a single visit." },
              { step: "5", title: "Priming & Paint-Ready", desc: "We prime the repaired area so it's ready for paint. If you'd like us to paint to match, just ask — we can often do that in the same visit." },
              { step: "6", title: "Cleanup & Walkthrough", desc: "We protect your floors and furniture throughout the job, and clean up completely when we're done. We'll walk you through the repair before we leave to make sure you're satisfied." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <div className="w-10 h-10 bg-teal-700 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">{item.step}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Examples */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">Recent Drywall Repair Projects</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">Real jobs completed by Hero Handyman Pro for homeowners across Metro East Illinois and West St. Louis County.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                city: "O'Fallon, IL",
                title: "Water-Damaged Ceiling Repair",
                desc: "A homeowner in O'Fallon contacted us after a second-floor bathroom leak caused water staining and soft spots on the first-floor ceiling. We removed the damaged drywall section, confirmed the plumbing repair was complete, treated the framing with antimicrobial primer, installed new drywall, applied knockdown texture to match the surrounding ceiling, and repainted the entire ceiling panel. The repair was completed in one day and is completely invisible."
              },
              {
                city: "Edwardsville, IL",
                title: "Settlement Cracks — Older Ranch Home",
                desc: "An Edwardsville homeowner had multiple hairline cracks running from door corners and window frames — classic signs of normal foundation settling common in older ranch homes throughout Madison County. We opened each crack slightly, filled with flexible joint compound, applied fiberglass mesh tape, feathered the mud over a wide area, and matched the existing skip-trowel texture. The homeowner was preparing the home for sale and needed the repairs to pass inspection."
              },
              {
                city: "Collinsville, IL",
                title: "Large Hole from HVAC Access",
                desc: "An HVAC contractor had cut a 14×18 inch access hole in a Collinsville living room wall to reach ductwork. The homeowner needed it closed before a family event. We installed a backing board, cut and fit new drywall, taped and mudded in three coats, and matched the orange peel texture that's common in 1990s-era homes throughout the Collinsville area. The repair was completed in a single afternoon visit."
              },
              {
                city: "Belleville, IL",
                title: "Nail Pops & Hairline Cracks",
                desc: "A Belleville homeowner had 15–20 nail pops scattered across bedroom ceilings and walls — a common issue in homes built in the 1980s when drywall screws weren't yet standard. We re-secured each nail, countersunk a screw alongside it, filled and feathered the dimples, and spot-primed. We also addressed a series of hairline cracks along the ceiling perimeter that had developed from seasonal expansion and contraction common in the Midwest climate."
              },
              {
                city: "Glen Carbon, IL",
                title: "Doorknob Impact Hole",
                desc: "A Glen Carbon family had a doorknob punch-through in a hallway wall — a very common repair in homes with young kids. The hole was about 3 inches in diameter. We installed a California patch (a clean, professional method that requires no backing board for smaller holes), applied two coats of joint compound, sanded smooth, and matched the existing knockdown texture. The entire repair took under 90 minutes and was paint-ready the same day."
              },
            ].map((project, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-teal-600" />
                  <span className="text-xs font-semibold text-teal-700 uppercase tracking-wide">{project.city}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Why Homeowners Choose Hero Handyman Pro for Drywall Repair</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            We're a local handyman service based in the Metro East — not a national franchise. When you call us, you're talking to Phil, the owner, who has been doing drywall and home repairs in the greater St. Louis area for over 35 years.
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
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">Related Services</h3>
              <div className="flex flex-col gap-2 text-sm">
                <Link href="/handyman-services/drywall-repair/"><span className="text-teal-700 hover:underline cursor-pointer">Drywall & Ceiling Repair</span></Link>
                <Link href="/handyman-services/home-repair-services/"><span className="text-teal-700 hover:underline cursor-pointer">General Home Repairs & Punch Lists</span></Link>
                <Link href="/handyman-services/trim-carpentry/"><span className="text-teal-700 hover:underline cursor-pointer">Interior Trim & Finish Carpentry</span></Link>
                <Link href="/handyman-services/door-repair/"><span className="text-teal-700 hover:underline cursor-pointer">Door Repair & Replacement</span></Link>
                <Link href="/handyman-service-packages"><span className="text-teal-700 hover:underline cursor-pointer">Home Repair Service Packages</span></Link>
                <Link href="/handyman-services/"><span className="text-teal-700 hover:underline cursor-pointer">All Handyman Services</span></Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">Service Areas</h3>
              <div className="flex flex-col gap-2 text-sm">
                <Link href="/service-areas/ofallon-handyman-services/"><span className="text-teal-700 hover:underline cursor-pointer">Drywall Repair in O'Fallon, IL</span></Link>
                <Link href="/service-areas/edwardsville-handyman-services/"><span className="text-teal-700 hover:underline cursor-pointer">Drywall Repair in Edwardsville, IL</span></Link>
                <Link href="/service-areas/belleville-handyman-services/"><span className="text-teal-700 hover:underline cursor-pointer">Drywall Repair in Belleville, IL</span></Link>
                <Link href="/service-areas/collinsville-handyman-services/"><span className="text-teal-700 hover:underline cursor-pointer">Drywall Repair in Collinsville, IL</span></Link>
                <Link href="/handyman-shiloh-il/"><span className="text-teal-700 hover:underline cursor-pointer">Drywall Repair in Shiloh, IL</span></Link>
                <Link href="/service-areas/"><span className="text-teal-700 hover:underline cursor-pointer">All Service Areas</span></Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">Helpful Articles</h3>
              <div className="flex flex-col gap-2 text-sm">
                <Link href="/blog/drywall-repair-cost-ofallon-il/"><span className="text-teal-700 hover:underline cursor-pointer">How Much Does Drywall Repair Cost in O'Fallon?</span></Link>
                <Link href="/blog/winter-home-repairs-illinois/"><span className="text-teal-700 hover:underline cursor-pointer">Most Common Home Repairs After Winter</span></Link>
                <Link href="/blog/home-maintenance-tips-metro-east-il/"><span className="text-teal-700 hover:underline cursor-pointer">Home Maintenance Tips for Metro East IL</span></Link>
                <Link href="/blog/2026-handyman-costs-metro-east-il/"><span className="text-teal-700 hover:underline cursor-pointer">2026 Handyman Costs in Metro East IL</span></Link>
                <Link href="/projects/"><span className="text-teal-700 hover:underline cursor-pointer">View Completed Projects</span></Link>
              </div>
            </div>
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
