import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star } from "lucide-react";
import SEO from "@/components/SEO";
import { useSeoRoute } from '@/hooks/useSeoRoute';

export default function DrywallRepairEdwardsville() {
  const seo = useSeoRoute();  return (
    <div className="flex flex-col">
      <SEO {...seo} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-teal-400 font-semibold">Edwardsville, IL</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 leading-tight">
              Professional Drywall Repair in Edwardsville IL
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Need a handyman for drywall repair in Edwardsville IL? Fast, clean drywall repairs for homeowners. Holes from doorknobs, cracks from settling, water damage, and ceiling repairs — done right the first time with texture matching that blends seamlessly.
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
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> Serving Edwardsville IL</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">Drywall Repair Services in Edwardsville</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Edwardsville homeowners deal with drywall damage constantly — doorknob holes, water stains from leaky roofs, cracks from the clay soil settling under older homes near downtown, and access holes left behind by plumbers and electricians. Hero Handyman Pro handles all of it.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* Drywall Hole Repair */}
            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center mb-4">
                <Check className="w-5 h-5 text-teal-700" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Drywall Hole Repair</h3>
              <p className="text-gray-600 text-sm">
                The most common call we get from Edwardsville homeowners: a hole in the wall. Whether it's a doorknob that punched through, a fist-sized accident, or a large access cut from a plumber — we patch and finish holes of all sizes. We match your existing texture so repairs are virtually invisible, even in older Edwardsville homes with unique wall finishes.
              </p>
            </div>

            {/* Drywall Patching */}
            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center mb-4">
                <Check className="w-5 h-5 text-teal-700" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Drywall Patching</h3>
              <p className="text-gray-600 text-sm">
                Cracks, nail pops, and settlement damage are especially common in Edwardsville's older neighborhoods — particularly homes near downtown and along the Troy Road corridor where soil movement is more pronounced. We use professional-grade joint compound and mesh tape for patches that hold long-term without re-cracking.
              </p>
            </div>

            {/* Ceiling Drywall Repair */}
            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center mb-4">
                <Check className="w-5 h-5 text-teal-700" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Ceiling Drywall Repair</h3>
              <p className="text-gray-600 text-sm">
                Sagging, cracked, or stained ceilings are an eyesore and can signal bigger problems. We repair ceiling drywall damage, address popcorn texture issues, and restore your ceiling to a clean, finished look — no ladders or mess for you to deal with. Common causes include roof leaks, HVAC condensation, and upstairs bathroom moisture.
              </p>
            </div>

            {/* Water Damaged Drywall */}
            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center mb-4">
                <Check className="w-5 h-5 text-teal-700" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Water Damaged Drywall</h3>
              <p className="text-gray-600 text-sm">
                Water damage from roof leaks, plumbing issues, or basement moisture is one of the most common drywall problems in Metro East Illinois. We assess whether the water source is resolved, remove compromised material, and replace with new drywall — preventing mold and restoring your walls to a clean, safe condition.
              </p>
            </div>

            {/* Textured Drywall Repair */}
            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow md:col-span-2">
              <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center mb-4">
                <Check className="w-5 h-5 text-teal-700" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Textured Drywall Repair</h3>
              <p className="text-gray-600 text-sm mb-4">
                Matching existing wall texture is the hardest part of any drywall repair — and it's where most DIY attempts fall short. Edwardsville homes built in the 1970s through 1990s commonly feature knockdown, orange peel, and skip-trowel textures that require a practiced hand to replicate convincingly. Newer construction often uses smooth or lightly stippled finishes that demand equally precise technique.
              </p>
              <p className="text-gray-600 text-sm">
                Hero Handyman Pro matches the three most common textures found in Edwardsville homes: <strong>knockdown</strong> (the irregular, flattened splatter pattern common in older Metro East homes), <strong>orange peel</strong> (the fine, bumpy spray texture popular in 1980s–1990s construction), and <strong>smooth finish</strong> (found in newer builds and renovated spaces). We apply texture by hand or spray to blend the repaired area with the surrounding wall — so the patch disappears completely rather than standing out as an obvious fix.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Why Edwardsville Homeowners Choose Hero Handyman Pro</h2>
              <p className="text-gray-600 mb-6">
                We're a local handyman service based in the Metro East — not a national franchise. When you call us, you're talking to Phil, the owner, who has been doing drywall and home repairs in Edwardsville and the surrounding area for over 35 years. He knows the homes here, the soil conditions, and the types of damage that show up most often in Madison County.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Local & Accountable", desc: "We live and work in the Metro East. Our reputation in Edwardsville is everything to us." },
                  { title: "No Subcontractors", desc: "Phil does the work himself — no strangers in your home, no quality surprises." },
                  { title: "Upfront Pricing", desc: "You'll know the cost before we start. No hidden fees, no surprise invoices." },
                  { title: "Texture Matching", desc: "We match knockdown, orange peel, and smooth finishes so repairs blend in completely." },
                  { title: "Clean Jobsite", desc: "We protect your floors and furniture and clean up completely when we're done." },
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
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Serving All of Edwardsville IL</h3>
              <p className="text-gray-600 text-sm mb-4">
                We serve homeowners throughout Edwardsville, including neighborhoods near SIUE, the historic downtown district, Plum Creek, Troy Road corridor, and surrounding communities in Madison County.
              </p>
              <p className="text-gray-600 text-sm mb-4">
                Also serving O'Fallon, Collinsville, Maryville, Glen Carbon, and the greater Metro East area.
              </p>
              <div className="space-y-3 pt-2">
                <Link href="/gbp/edwardsville">
                  <span className="block text-teal-700 hover:underline font-semibold text-sm cursor-pointer">
                    View our Edwardsville handyman services →
                  </span>
                </Link>
                <Link href="/drywall-repair">
                  <span className="block text-teal-700 hover:underline font-semibold text-sm cursor-pointer">
                    See all drywall repair services →
                  </span>
                </Link>
                <Link href="/">
                  <span className="block text-teal-700 hover:underline font-semibold text-sm cursor-pointer">
                    Hero Handyman Pro home →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-teal-700 text-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl font-bold mb-3">Call Hero Handyman Pro for Drywall Repair in Edwardsville</h2>
          <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
            Call Hero Handyman Pro at 800-741-6056 for drywall repair in Edwardsville. Same-day and next-day appointments available.
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
