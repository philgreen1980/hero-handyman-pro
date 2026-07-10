import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star } from "lucide-react";
import SEO from "@/components/SEO";
import { useSeoRoute } from '@/hooks/useSeoRoute';

export default function DrywallRepairGlenCarbon() {
  const seo = useSeoRoute();  return (
    <div className="flex flex-col">
      <SEO {...seo} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-teal-400 font-semibold">Glen Carbon, IL</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 leading-tight">
              Professional Drywall Repair in Glen Carbon IL
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Fast, clean drywall repairs for Glen Carbon homeowners. Holes, cracks, water damage, and ceiling repairs — done right the first time with texture matching that blends seamlessly into your existing walls.
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
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> Serving Glen Carbon IL</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">Drywall Repair Services in Glen Carbon</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Glen Carbon is a growing Madison County suburb with a mix of newer subdivisions and established neighborhoods near the Edwardsville border. Most homes were built in the 1990s–2010s, meaning drywall is standard throughout — and the typical repairs we see are doorknob holes, access panel patches after plumbing work, and water damage from roof or HVAC issues. We handle all of it with clean workmanship and proper texture matching.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Hole & Puncture Repair", desc: "Doorknob holes, accidental impacts, and furniture damage repaired cleanly. We match your existing texture so the patch is invisible." },
              { title: "Water-Damaged Drywall", desc: "Roof leaks, plumbing drips, and HVAC condensation all damage drywall. We cut out the compromised section, replace it, and blend the texture." },
              { title: "Ceiling Drywall Repair", desc: "Sagging sections, water stains, and cracks in ceilings repaired and refinished. Popcorn and smooth ceiling textures both matched." },
              { title: "Crack & Settlement Repair", desc: "Hairline cracks and larger settlement cracks in walls and ceilings properly taped, mudded, and finished — not just painted over." },
              { title: "Access Panel Patches", desc: "After plumbers or electricians cut into walls, we close the opening cleanly with a proper drywall patch and matching finish." },
              { title: "Textured Drywall Repair", desc: "Orange peel, knockdown, and smooth finishes all matched. Glen Carbon's newer construction typically uses orange peel spray texture — we replicate it precisely." }
            ].map((service, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Texture Matching Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Texture Matching in Glen Carbon Homes</h2>
              <p className="text-gray-600 mb-4">
                Most Glen Carbon homes were built in the 1990s and 2000s, during the era when orange peel spray texture was the standard for new construction throughout Madison County. That's good news for repairs — it's a consistent texture that we can match reliably with the right spray equipment.
              </p>
              <p className="text-gray-600 mb-4">
                Older homes near the Edwardsville border may have knockdown or skip-trowel textures from an earlier era. We identify your exact texture before we start and match it precisely — not just close enough, but actually invisible under raking light.
              </p>
              <p className="text-gray-600">
                We never just apply a coat of paint over a rough patch. Every repair gets the correct texture applied, primed, and finished to blend with the surrounding wall.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Orange Peel", desc: "Standard in 1990s–2010s Glen Carbon construction. Requires spray equipment to match correctly — not achievable with a brush or roller." },
                { name: "Knockdown", desc: "Found in older Glen Carbon and Edwardsville-border homes. Created by flattening random mud peaks for a mottled look." },
                { name: "Skip-Trowel", desc: "Hand-applied texture in older homes. Each application is unique — we study the pattern before matching." },
                { name: "Smooth Finish", desc: "Found in renovated and custom-built homes. Requires multiple skim coats and careful sanding to achieve a truly flat surface." }
              ].map((t, i) => (
                <div key={i} className="bg-white rounded-xl p-4 border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-1">{t.name}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Why Glen Carbon Homeowners Choose Hero Handyman Pro</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Texture Matching Expertise", desc: "We identify and replicate your exact wall texture — orange peel, knockdown, skip-trowel, or smooth." },
              { title: "Clean Job Sites", desc: "We plastic off work areas, vacuum drywall dust, and leave your home cleaner than we found it." },
              { title: "Same-Day Availability", desc: "For urgent repairs, we strive to get to Glen Carbon the same day or next morning." },
              { title: "Transparent Pricing", desc: "You get a clear estimate before we start. No surprises when the job is done." }
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

      {/* Local Context */}
      <section className="py-16 px-6 bg-teal-900 text-white">
        <div className="max-w-[1120px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Serving Glen Carbon & Madison County</h2>
            <p className="text-teal-100 mb-4">
              We repair drywall throughout Glen Carbon — from the established neighborhoods near the Edwardsville border to newer subdivisions off IL-159 and the Glen Carbon Elementary area. Glen Carbon's rapid growth in the 2000s means many homes are now at the age where plumbing and HVAC repairs create access holes that need proper patching.
            </p>
            <p className="text-teal-100 mb-6">
              We also serve Edwardsville, Maryville, Collinsville, Troy, and surrounding Madison County communities.
            </p>
            <a href="tel:800-741-6056">
              <Button className="bg-white text-teal-900 hover:bg-teal-50 rounded-full px-8 py-6 text-lg font-semibold flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call 800-741-6056
              </Button>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["Downtown Glen Carbon", "Edwardsville Border", "IL-159 Corridor", "Glen Carbon Elementary Area", "Maryville & Troy", "Collinsville & Edwardsville"].map((area, i) => (
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
          <h3 className="text-xl font-bold text-gray-900 mb-6">More Services in Glen Carbon & Metro East</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/deck-repair-glen-carbon-il">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Deck Repair in Glen Carbon</Button>
            </Link>
            <Link href="/door-repair-glen-carbon-il">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Door Repair in Glen Carbon</Button>
            </Link>
            <Link href="/carpentry-services-glen-carbon-il">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Carpentry in Glen Carbon</Button>
            </Link>
            <Link href="/handyman-services/drywall-repair/">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Regional Drywall Repair</Button>
            </Link>
            <Link href="/service-areas/glen-carbon-handyman-services/">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-teal-500 hover:text-teal-600">Handyman Services Glen Carbon</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Fix That Drywall?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Call or request a free quote online. We serve Glen Carbon and all of Madison County — same-day and next-day appointments available.
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
