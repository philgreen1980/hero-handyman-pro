import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star, AlertTriangle } from "lucide-react";
import SEO from "@/components/SEO";
import { useSeoRoute } from '@/hooks/useSeoRoute';

export default function DrywallRepairBallwin() {
  const seo = useSeoRoute();  return (
    <div className="flex flex-col">
      <SEO {...seo} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-teal-400 font-semibold">Ballwin, MO</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 leading-tight">
              Drywall Repair in Ballwin MO
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Holes, cracks, water stains, and texture mismatches repaired seamlessly. Serving Ballwin and West St. Louis County homeowners with professional drywall repair and finishing.
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
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> 30+ Years Experience</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> Free Estimates</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">Drywall Repair Services in Ballwin</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Ballwin's well-established neighborhoods — from Kehrs Mill Road to Claymont Drive — feature homes built from the 1960s through the 2000s. Each era has its own drywall characteristics, from older plaster-over-drywall systems to modern smooth-finish construction. We handle all of it.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Hole Patching</h3>
              <p className="text-gray-600 text-sm">
                Doorknob holes, accidental impacts, and renovation cutouts repaired with proper backing and finishing. We use the right patch method for each hole size — from California patches for small holes to full section replacements for large damage — so the repair holds long-term.
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Water Damage Repair</h3>
              <p className="text-gray-600 text-sm">
                Roof leaks, plumbing drips, and HVAC condensation leave stains and soft spots in Ballwin ceilings and walls. We remove damaged sections, treat for mold if present, replace with new drywall, and finish to match the surrounding surface.
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Crack Repair</h3>
              <p className="text-gray-600 text-sm">
                Hairline cracks, corner cracks, and stress cracks from seasonal movement or settling are common in Ballwin's clay-heavy soils. We tape, mud, and finish cracks properly — not just skim over them — so they don't reappear after the next season.
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Screw Pops & Nail Pops</h3>
              <p className="text-gray-600 text-sm">
                Fastener pops are especially common in Ballwin's older homes as the framing dries and shifts over decades. We reset the fastener, apply compound, and feather the repair to blend with the surrounding wall — invisible when painted.
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Texture Matching</h3>
              <p className="text-gray-600 text-sm">
                Ballwin homes span multiple eras of drywall texture. Older homes often have skip-trowel or knockdown finishes; newer construction may be smooth or orange peel. We match the existing texture precisely so the repair blends in rather than standing out.
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Ceiling Repair</h3>
              <p className="text-gray-600 text-sm">
                Ceiling repairs are the most visible — and the hardest to hide a bad patch. We repair ceiling holes, sagging sections, and water-damaged areas with the same care as wall work, ensuring the finish matches the rest of the ceiling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Texture Matching Deep-Dive */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Texture Matching — Done Right</h2>
              <p className="text-gray-600 mb-4">
                The hardest part of drywall repair isn't patching the hole — it's making the patch invisible. Texture matching requires experience with the specific techniques used in each era of construction, and Ballwin's housing stock spans more than four decades.
              </p>
              <p className="text-gray-600 mb-4">
                Homes built along Kehrs Mill Road and in Ballwin's older subdivisions often have hand-applied textures that can't be replicated with a spray can. We identify the technique, mix the right compound consistency, and apply it to match — then prime and paint so the repair disappears.
              </p>
              <p className="text-gray-600">
                Newer Ballwin construction near Manchester Road tends toward smoother finishes or light orange peel — easier to match but unforgiving if the feathering isn't right. We take the time to get it right.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Knockdown", desc: "Common in Ballwin homes from the 1980s–1990s. Applied by flattening random splatter patterns with a knife." },
                { name: "Orange Peel", desc: "Found in newer Ballwin construction. Sprayed texture with a fine, bumpy surface — requires spray equipment to match." },
                { name: "Skip-Trowel", desc: "Hand-applied in older Ballwin homes. Each application is unique, making matching a skilled craft." },
                { name: "Smooth Finish", desc: "Common in higher-end Ballwin homes and recent renovations. Requires multiple coats and careful sanding." },
              ].map((texture, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">{texture.name}</h4>
                  <p className="text-gray-600 text-sm">{texture.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-amber-50 rounded-2xl border border-amber-200 p-8">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                <h3 className="font-bold text-xl text-gray-900">Signs Your Drywall Needs Repair</h3>
              </div>
              <div className="space-y-3">
                {[
                  "Visible holes or impact damage",
                  "Water stains or soft, spongy areas",
                  "Cracks along seams, corners, or in the field",
                  "Bubbling, peeling, or separating tape",
                  "Fastener pops creating bumps under paint",
                  "Sagging or bowed ceiling sections",
                  "Mold or mildew growth on wall surfaces",
                  "Uneven or patchy texture from previous repairs",
                ].map((sign, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{sign}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Why Ballwin Homeowners Choose Hero Handyman Pro</h2>
              <p className="text-gray-600 mb-6">
                Phil has been repairing drywall in Ballwin and West County for over 35 years. He knows the common issues in each neighborhood and era of construction — and he does the work himself, without subcontractors.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Invisible repairs", desc: "We match texture and finish so the repair blends completely — no obvious patches." },
                  { title: "Clean work", desc: "We protect your floors and furniture and clean up completely when we're done." },
                  { title: "Upfront pricing", desc: "You'll know the cost before we start. No surprises." },
                  { title: "No subcontractors", desc: "Phil does the work himself — consistent quality every time." },
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
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-10 px-6 bg-white border-t border-gray-100">
        <div className="max-w-[1120px] mx-auto">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Related Services & Pages</h3>
          <div className="flex flex-wrap gap-4">
            <Link href="/"><span className="text-teal-700 hover:underline font-medium cursor-pointer">Hero Handyman Pro Home</span></Link>
            <span className="text-gray-300">|</span>
            <Link href="/handyman-ballwin-mo"><span className="text-teal-700 hover:underline font-medium cursor-pointer">Ballwin Handyman Services</span></Link>
            <span className="text-gray-300">|</span>
            <Link href="/drywall-repair"><span className="text-teal-700 hover:underline font-medium cursor-pointer">Drywall Repair (Regional)</span></Link>
            <span className="text-gray-300">|</span>
            <Link href="/drywall-repair-chesterfield-mo"><span className="text-teal-700 hover:underline font-medium cursor-pointer">Drywall Repair in Chesterfield MO</span></Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-teal-700 text-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl font-bold mb-3">Need Drywall Repair in Ballwin MO?</h2>
          <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
            Call Hero Handyman Pro at 800-741-6056 for professional drywall repair in Ballwin. Free estimates, upfront pricing, and work done right the first time.
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
