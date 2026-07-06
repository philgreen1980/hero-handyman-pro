import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star } from "lucide-react";
import SEO from "@/components/SEO";
import { useSeoRoute } from '@/hooks/useSeoRoute';

export default function DrywallRepairStCharles() {
  const seo = useSeoRoute();  return (
    <div className="flex flex-col">
      <SEO {...seo} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-teal-400 font-semibold">St. Charles, MO</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 leading-tight">
              Drywall Repair in St. Charles MO
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Hole patching, ceiling repair, water damage restoration, and texture matching for St. Charles County homeowners. Professional results that blend seamlessly with your existing walls.
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
            <div className="flex flex-wrap gap-6 mt-8 text-sm text-gray-400">
              <span className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-400 fill-yellow-400" /> 4.9 Star Rated</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> Licensed & Insured</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> Same-Day Available</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> Serving St. Charles MO</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">Drywall Repair Services in St. Charles</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            St. Charles County's housing stock ranges from historic homes in Old Town St. Charles to large newer subdivisions in Cottleville, O'Fallon, and Wentzville. Older homes near Main Street often have plaster walls transitioning to drywall, while newer construction typically features knockdown or orange peel texture. We handle both — and we match your existing texture so repairs are invisible.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Hole & Puncture Repair", desc: "From doorknob holes to large access cuts, we patch and finish drywall holes of all sizes. We match your existing texture — knockdown, orange peel, or smooth — so repairs blend seamlessly." },
              { title: "Ceiling Drywall Repair", desc: "Sagging, cracked, or water-stained ceilings are common in St. Charles County homes. We repair ceiling drywall, address popcorn texture, and restore a clean finished look." },
              { title: "Water Damage Repair", desc: "Water damage from roof leaks, plumbing failures, or basement moisture is one of the most common drywall problems in the region. We assess the source, remove compromised material, and replace with new drywall." },
              { title: "Crack & Settlement Repair", desc: "Hairline cracks, nail pops, and settlement damage are common in older St. Charles homes. We use professional-grade joint compound and mesh tape for patches that hold long-term." },
              { title: "Texture Matching", desc: "Matching knockdown, orange peel, or skip-trowel textures is the hardest part of drywall repair. We blend repairs seamlessly so there's no obvious patch or mismatched finish." },
              { title: "Plumbing & Remodel Patches", desc: "After a plumber or electrician cuts into your walls, we close those access cuts cleanly — tape, mud, and texture to match — so your walls look like the work was never done." }
            ].map((service, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Context */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Drywall Repair in St. Charles County Homes</h2>
            <p className="text-gray-600 mb-4">
              St. Charles County's rapid growth over the past 30 years means we see a wide range of construction eras. Homes in Old Town St. Charles and along the Missouri River corridor are often 80–100 years old, with original plaster walls that have been patched with drywall over the decades. These repairs require careful feathering and texture matching to blend old and new materials.
            </p>
            <p className="text-gray-600 mb-4">
              Newer subdivisions in Cottleville, O'Fallon MO, and Wentzville typically feature knockdown texture throughout. Matching this texture requires the right tools and technique — a spray gun or hand-applied knockdown that's feathered at the edges so the repair disappears into the surrounding wall.
            </p>
            <p className="text-gray-600">
              We also frequently work in homes near the Missouri River where seasonal humidity causes drywall tape to bubble and seams to crack. We address the underlying moisture issue before patching to prevent the same problem from returning.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900">Common Drywall Problems We Fix in St. Charles</h3>
            {[
              "Doorknob holes and impact damage",
              "Water stains and soft spots from roof or plumbing leaks",
              "Ceiling cracks from settling or HVAC vibration",
              "Nail pops and hairline cracks in older homes",
              "Large holes from electrical or plumbing access",
              "Popcorn ceiling removal and repair",
              "Texture mismatches from previous DIY repairs",
              "Drywall damage from pet or kid activity"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white rounded-lg p-3 border border-gray-200">
                <Check className="w-5 h-5 text-teal-600 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Why St. Charles Homeowners Choose Hero Handyman Pro</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Texture Matching", desc: "We match knockdown, orange peel, and smooth finishes so repairs are invisible — not just patched." },
              { title: "Same-Day Service", desc: "We strive to get to St. Charles the same day or next morning for urgent repairs." },
              { title: "Licensed & Insured", desc: "Fully licensed and insured for your protection on every job." },
              { title: "Transparent Pricing", desc: "Clear estimate before we start. No surprises when the job is done." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                  <Check className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-6 bg-teal-900 text-white">
        <div className="max-w-[1120px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Serving St. Charles County & Beyond</h2>
            <p className="text-teal-100 mb-4">
              We serve all of St. Charles County — from historic Old Town St. Charles and the Missouri River corridor to newer subdivisions in Cottleville, O'Fallon MO, and Wentzville. We also serve Chesterfield, Ballwin, and West St. Louis County.
            </p>
            <a href="tel:800-741-6056">
              <Button className="bg-white text-teal-900 hover:bg-teal-50 rounded-full px-8 py-6 text-lg font-semibold flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call 800-741-6056
              </Button>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["Old Town St. Charles", "Cottleville", "O'Fallon MO", "Wentzville", "Chesterfield", "Ballwin"].map((area, i) => (
              <div key={i} className="bg-teal-800 rounded-xl p-4 text-center">
                <p className="text-teal-100 text-sm font-medium">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <h3 className="text-xl font-bold text-gray-900 mb-6">More Services in St. Charles & West St. Louis County</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/deck-repair-st-charles-mo">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Deck Repair in St. Charles</Button>
            </Link>
            <Link href="/door-repair-st-charles-mo">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Door Repair in St. Charles</Button>
            </Link>
            <Link href="/carpentry-services-st-charles-mo">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Carpentry in St. Charles</Button>
            </Link>
            <Link href="/drywall-repair">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Regional Drywall Repair</Button>
            </Link>
            <Link href="/service-areas/st-charles-handyman-services/">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Handyman Services St. Charles</Button>
            </Link>
            <Link href="/drywall-repair-chesterfield-mo">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Drywall Repair in Chesterfield</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Fix That Drywall?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Call or request a free quote online. We serve St. Charles and all of St. Charles County — same-day and next-day appointments available.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:800-741-6056">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-8 py-6 text-lg font-semibold flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call 800-741-6056
              </Button>
            </a>
            <Link href="/#contact">
              <Button variant="outline" className="rounded-full px-8 py-6 text-lg font-semibold border-teal-600 text-teal-600 hover:bg-teal-50">
                Get a Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
