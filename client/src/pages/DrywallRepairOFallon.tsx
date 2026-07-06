import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star } from "lucide-react";
import SEO from "@/components/SEO";
import { useSeoRoute } from '@/hooks/useSeoRoute';

export default function DrywallRepairOFallon() {
  const seo = useSeoRoute();  return (
    <div className="flex flex-col">
      <SEO {...seo} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-teal-400 font-semibold">O'Fallon, IL</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 leading-tight">
              Professional Drywall Repair in O'Fallon IL
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Fast, clean drywall repairs for O'Fallon homeowners. Holes, cracks, water damage, and ceiling repairs — done right the first time.
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
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-teal-400" /> Serving O'Fallon IL</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">Drywall Repair Services in O'Fallon</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Whether you're dealing with a doorknob hole, a water stain on the ceiling, or cracks from settling — Hero Handyman Pro handles all types of drywall repairs for O'Fallon homeowners.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Drywall Hole Repair */}
            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center mb-4">
                <Check className="w-5 h-5 text-teal-700" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Drywall Hole Repair</h3>
              <p className="text-gray-600 text-sm">
                From small nail holes to large punched-through sections, we patch and finish drywall holes of all sizes. O'Fallon's newer subdivisions often have thinner drywall that dents easily — we match your existing texture so repairs are virtually invisible.
              </p>
            </div>

            {/* Drywall Patching */}
            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center mb-4">
                <Check className="w-5 h-5 text-teal-700" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Drywall Patching</h3>
              <p className="text-gray-600 text-sm">
                Cracks, nail pops, and settlement damage are common in O'Fallon homes — particularly in subdivisions built in the 1990s and 2000s where soil settling is still occurring. We use professional-grade joint compound and mesh tape for patches that hold long-term.
              </p>
            </div>

            {/* Ceiling Drywall Repair */}
            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center mb-4">
                <Check className="w-5 h-5 text-teal-700" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Ceiling Drywall Repair</h3>
              <p className="text-gray-600 text-sm">
                Sagging, cracked, or stained ceilings are an eyesore and can signal bigger problems. We repair ceiling drywall damage, address popcorn texture issues, and restore your ceiling to a clean, finished look — common in O'Fallon homes with cathedral ceilings and open floor plans.
              </p>
            </div>

            {/* Water Damaged Drywall */}
            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center mb-4">
                <Check className="w-5 h-5 text-teal-700" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Water Damaged Drywall</h3>
              <p className="text-gray-600 text-sm">
                O'Fallon's freeze-thaw cycles and spring storms can cause roof leaks and plumbing issues that damage drywall. We assess whether the water source is resolved, remove compromised material, and replace with new drywall — preventing mold and restoring your walls properly.
              </p>
            </div>

            {/* Same-Day Drywall Repairs */}
            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center mb-4">
                <Check className="w-5 h-5 text-teal-700" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Same-Day Drywall Repairs</h3>
              <p className="text-gray-600 text-sm">
                Need it fixed fast? We offer same-day and next-day drywall repair appointments for O'Fallon homeowners. Whether you're prepping for a home sale in the active O'Fallon market, hosting guests, or just tired of looking at that hole — we can often get there the same day you call.
              </p>
            </div>

            {/* Texture Matching */}
            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center mb-4">
                <Check className="w-5 h-5 text-teal-700" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Texture Matching</h3>
              <p className="text-gray-600 text-sm">
                Many O'Fallon homes have knockdown, orange peel, or smooth wall textures depending on when they were built. We match your existing texture so repairs blend seamlessly — no obvious patches or mismatched finishes that stand out at resale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Why O'Fallon Homeowners Choose Hero Handyman Pro</h2>
              <p className="text-gray-600 mb-6">
                We're a local handyman service based in the Metro East — not a national franchise. When you call us, you're talking to Phil, the owner, who has been doing drywall and home repairs in O'Fallon and the surrounding area for over 35 years.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Local & Accountable", desc: "We live and work in the Metro East. Our reputation in O'Fallon is everything to us." },
                  { title: "No Subcontractors", desc: "Phil does the work himself — no strangers in your home, no quality surprises." },
                  { title: "Upfront Pricing", desc: "You'll know the cost before we start. No hidden fees, no surprise invoices." },
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
              <h3 className="font-bold text-xl text-gray-900 mb-4">Serving All of O'Fallon IL</h3>
              <p className="text-gray-600 text-sm mb-4">
                We serve homeowners throughout O'Fallon, including neighborhoods near Scott Air Force Base, the Hartman Creek area, Smiley Elementary corridor, Regency Park, and surrounding communities in St. Clair County.
              </p>
              <p className="text-gray-600 text-sm mb-6">
                Also serving Edwardsville, Belleville, Shiloh, Swansea, and the greater Metro East area.
              </p>
              <Link href="/gbp/ofallon">
                <span className="text-teal-700 hover:underline font-semibold text-sm cursor-pointer">
                  View our O'Fallon handyman services →
                </span>
              </Link>
            </div>
          </div>
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
                O'Fallon homes vary widely by decade. Subdivisions built in the 1990s and early 2000s near Scott Air Force Base and Hartman Creek commonly have <strong>knockdown</strong> texture. Newer builds in Regency Park and along Green Mount Road tend toward <strong>orange peel</strong> spray texture. Some older O'Fallon homes near downtown have <strong>smooth finish</strong> walls. Getting the match right requires identifying which texture you have before any mud is applied.
              </p>
              <p className="text-gray-700">
                Hero Handyman Pro assesses your existing wall finish before starting any repair, then applies the correct technique — by hand or spray — so the patch blends completely with the surrounding surface.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Textures We Match in O'Fallon Homes</h3>
              {[
                {
                  name: "Knockdown",
                  desc: "The most common texture in O'Fallon homes built between 1990–2005. Compound is splattered on the wall and lightly flattened with a knife, creating an irregular, mottled pattern. Requires hand application and careful timing to replicate convincingly."
                },
                {
                  name: "Orange Peel",
                  desc: "A fine, bumpy spray texture common in newer O'Fallon subdivisions. Applied with a hopper gun — the key is matching the droplet size and density of the existing texture so the repair area isn't visible at an angle."
                },
                {
                  name: "Skip-Trowel",
                  desc: "A hand-applied texture with a slightly randomized, layered look. Found in custom homes and remodeled spaces. Requires a skilled hand — the pattern is never perfectly uniform, which makes matching it a craft skill."
                },
                {
                  name: "Smooth Finish",
                  desc: "Found in older O'Fallon homes and renovated spaces. Looks simple but is unforgiving — any imperfection in the mud work or feathering is immediately visible under raking light. We skim-coat and sand to a true flat finish."
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

      {/* CTA Section */}
      <section className="py-16 px-6 bg-teal-700 text-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl font-bold mb-3">Call Hero Handyman Pro Today</h2>
          <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
            Call Hero Handyman Pro today for fast drywall repair in O'Fallon. Same-day and next-day appointments available.
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
